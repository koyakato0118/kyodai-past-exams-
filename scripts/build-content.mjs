import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(root, "content");
const sourcePdfRoot = path.join(root, "source-pdfs");
const outDir = path.join(root, "data");
const outFile = path.join(outDir, "content.js");
const arrayKeys = new Set(["teachers", "questions", "source_pages", "problem_assets"]);

function parseFrontMatter(raw) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/u.exec(raw);
  if (!match) return { frontMatter: {}, body: raw };

  const frontMatter = {};
  const lines = match[1].split(/\r?\n/u);
  let currentKey = null;
  let currentQuestion = null;

  for (const line of lines) {
    const keyValue = /^([A-Za-z_]+):\s*(.*)$/u.exec(line);
    if (keyValue) {
      currentKey = keyValue[1];
      const value = keyValue[2].trim();
      if (arrayKeys.has(currentKey)) {
        frontMatter[currentKey] = [];
      } else if (/^\d+$/u.test(value)) {
        frontMatter[currentKey] = Number(value);
      } else {
        frontMatter[currentKey] = value;
      }
      continue;
    }

    const nestedValue = /^\s+([A-Za-z_]+):\s*(.*)$/u.exec(line);
    if (nestedValue && currentQuestion) {
      currentQuestion[nestedValue[1]] = nestedValue[2].trim();
      continue;
    }

    const listValue = /^\s+-\s*(.*)$/u.exec(line);
    if (!listValue || !currentKey) continue;

    if (currentKey === "teachers") {
      frontMatter.teachers.push(listValue[1].trim());
      continue;
    }

    if (currentKey === "source_pages") {
      const value = listValue[1].trim();
      frontMatter.source_pages.push(/^\d+$/u.test(value) ? Number(value) : value);
      continue;
    }

    if (currentKey === "problem_assets") {
      frontMatter.problem_assets.push(listValue[1].trim());
      continue;
    }

    if (currentKey === "questions") {
      const idMatch = /^id:\s*(.+)$/u.exec(listValue[1].trim());
      if (idMatch) {
        currentQuestion = { id: idMatch[1].trim() };
        frontMatter.questions.push(currentQuestion);
      }
    }
  }

  return { frontMatter, body: match[2] };
}

function headingId(label) {
  return label
    .replace(/^Q/iu, "q")
    .replace(/\(([A-Za-z])\)/u, "$1")
    .replace(/[^A-Za-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "")
    .toLowerCase();
}

function labelFromId(id) {
  const body = String(id).replace(/^q/u, "");
  const withParen = body.replace(/(\d-\d)([a-z])$/u, "$1($2)");
  return `Q${withParen}`;
}

function majorFromId(id) {
  const match = /^q(\d+)/u.exec(id);
  return match ? match[1] : "";
}

function parseQuestionHeading(line, index) {
  const match = /^(#{1,4})\s+(?:Q|問)([^\s]+)\s*(.*)$/iu.exec(line.trim());
  if (!match) return null;
  const rawCode = `Q${match[2]}`;
  return {
    index,
    level: match[1].length,
    id: headingId(rawCode),
    label: rawCode,
    title: match[3].trim(),
  };
}

function splitQuestions(body, frontMatterQuestions = []) {
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  const headings = lines.map(parseQuestionHeading).filter(Boolean);
  const knownIds = new Set(frontMatterQuestions.map((item) => item.id));
  const knownHeadings = headings.filter((heading) => knownIds.has(heading.id));
  const firstQuestionIndex = (headings[0] || knownHeadings[0])?.index ?? lines.length;
  const introLines = lines.slice(0, firstQuestionIndex);

  const questions = knownHeadings.map((heading) => {
    const nextBoundary = headings.find((candidate) => candidate.index > heading.index && candidate.level <= heading.level);
    const parent = [...headings]
      .reverse()
      .find((candidate) => candidate.index < heading.index && candidate.level < heading.level && !knownIds.has(candidate.id));
    const parentContextEnd = parent
      ? headings.find((candidate) => candidate.index > parent.index && candidate.level > parent.level)?.index
      : null;
    const parentContext = parent && parentContextEnd ? lines.slice(parent.index + 1, parentContextEnd).join("\n").trim() : "";
    const bodyMarkdown = lines.slice(heading.index + 1, nextBoundary?.index ?? lines.length).join("\n").trim();
    const markdown = [parentContext, bodyMarkdown].filter(Boolean).join("\n\n---\n\n");
    return {
      id: heading.id,
      label: heading.label,
      title: heading.title,
      markdown,
    };
  });

  return {
    introMarkdown: introLines
      .filter((line) => !/^#\s+/u.test(line))
      .join("\n")
      .trim(),
    questions,
  };
}

function extractWhy(markdown) {
  return [...markdown.matchAll(/:::why\s+title="([^"]+)"\n([\s\S]*?)\n:::/gu)].map((match) => ({
    title: match[1].trim(),
    markdown: match[2].trim(),
  }));
}

function extractSection(markdown, title) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
  const pattern = new RegExp(`(?:^|\\n)###\\s+${escaped}\\s*\\n([\\s\\S]*?)(?=\\n###\\s+|$)`, "iu");
  const match = pattern.exec(markdown);
  return match ? match[1].trim() : "";
}

function extractList(markdown, title) {
  const section = extractSection(markdown, title);
  return section
    .split(/\r?\n/u)
    .map((line) => /^-\s+(.+)$/u.exec(line.trim())?.[1]?.trim())
    .filter(Boolean);
}

function cleanTableCell(value) {
  return value.trim().replace(/^`|`$/gu, "");
}

function parseTable(section) {
  return section
    .split(/\r?\n/u)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|") && !/^\|\s*-+/u.test(line) && !/^\|\s*科目/u.test(line))
    .map((line) => line.split("|").slice(1, -1).map(cleanTableCell));
}

async function readPdfSpec() {
  const specPath = path.join(root, "spec", "pdf-links.md");
  let raw = "";
  try {
    raw = await fs.readFile(specPath, "utf8");
  } catch {
    return [];
  }

  const localSection = /## ローカルPDF URL\n([\s\S]*?)(?=\n##\s+)/u.exec(raw)?.[1] || "";
  const sourceSection = /## 判明している元URL\n([\s\S]*?)(?=\n##\s+|$)/u.exec(raw)?.[1] || "";
  const entries = parseTable(localSection).map(([subject, year, localPdfUrl]) => ({
    subject,
    year: Number(year),
    localPdfUrl,
    sourceUrl: "",
    available: false,
    sourceFileName: "",
  }));
  const byKey = new Map(entries.map((entry) => [`${entry.subject}__${entry.year}`, entry]));

  for (const [subject, year, sourceUrl] of parseTable(sourceSection)) {
    const entry = byKey.get(`${subject}__${Number(year)}`);
    if (entry) entry.sourceUrl = sourceUrl;
  }

  return entries;
}

async function copyPdfFiles(entries) {
  let files = [];
  try {
    files = await fs.readdir(sourcePdfRoot);
  } catch {
    return entries;
  }

  for (const entry of entries) {
    const sourceName = files.find((file) => file.includes(entry.subject) && file.includes(String(entry.year)));
    if (!sourceName) continue;
    const destination = path.join(root, entry.localPdfUrl.replace(/^\//u, ""));
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.copyFile(path.join(sourcePdfRoot, sourceName), destination);
    entry.available = true;
    entry.sourceFileName = sourceName;
  }

  return entries;
}

async function readMarkdownFiles(pdfEntries) {
  const subjectDirs = await fs.readdir(contentRoot, { withFileTypes: true });
  const subjects = [];
  const pdfByKey = new Map(pdfEntries.map((entry) => [`${entry.subject}__${entry.year}`, entry]));

  for (const subjectDir of subjectDirs) {
    if (!subjectDir.isDirectory()) continue;

    const subjectPath = path.join(contentRoot, subjectDir.name);
    const files = (await fs.readdir(subjectPath, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => entry.name)
      .sort((a, b) => Number.parseInt(b, 10) - Number.parseInt(a, 10));

    const years = [];
    let subjectName = subjectDir.name;
    let subjectSlug = subjectDir.name;

    for (const file of files) {
      const raw = await fs.readFile(path.join(subjectPath, file), "utf8");
      const { frontMatter, body } = parseFrontMatter(raw);
      const split = splitQuestions(body, frontMatter.questions || []);
      subjectName = frontMatter.subject || subjectName;
      subjectSlug = frontMatter.subject_slug || subjectSlug;
      const questionMetaMap = new Map((frontMatter.questions || []).map((item) => [item.id, item]));
      const pdfInfo = pdfByKey.get(`${frontMatter.subject}__${frontMatter.year}`) || null;

      const questions = split.questions.map((question) => {
        const questionMeta = questionMetaMap.get(question.id) || {};
        const title = questionMeta.title || question.title;
        return {
          ...question,
          title,
          label: questionMeta.label || question.label || labelFromId(question.id),
          major: majorFromId(question.id),
          why: extractWhy(question.markdown),
          importantPoints: extractList(question.markdown, "重要ポイント"),
          relatedKnowledge: extractList(question.markdown, "関連知識"),
          tags: extractList(question.markdown, "タグ"),
          hasFinalAnswer: Boolean(extractSection(question.markdown, "最終解答")),
          hasExamAnswer: Boolean(extractSection(question.markdown, "試験答案")),
        };
      });

      years.push({
        year: frontMatter.year || path.basename(file, ".md"),
        contentType: frontMatter.content_type || "exam",
        displayLabel: frontMatter.display_label || "",
        teachers: frontMatter.teachers || [],
        status: frontMatter.status || "draft",
        sourceFile: frontMatter.source_file || "",
        sourcePages: frontMatter.source_pages || [],
        problemAssets: frontMatter.problem_assets || [],
        localPdfUrl: pdfInfo?.available ? pdfInfo.localPdfUrl : "",
        sourceUrl: pdfInfo?.sourceUrl || "",
        pdfSourceFile: pdfInfo?.sourceFileName || "",
        introMarkdown: split.introMarkdown,
        questions,
      });
    }

    subjects.push({
      name: subjectName,
      slug: subjectSlug,
      years,
    });
  }

  return { generatedAt: new Date().toISOString(), subjects };
}

await fs.mkdir(outDir, { recursive: true });
const pdfCatalog = await copyPdfFiles(await readPdfSpec());
const content = await readMarkdownFiles(pdfCatalog);
content.pdfs = pdfCatalog;
await fs.writeFile(outFile, `window.__PAST_EXAM_CONTENT__ = ${JSON.stringify(content, null, 2)};\n`, "utf8");
console.log(`Wrote ${path.relative(root, outFile)} with ${content.subjects.length} subjects and ${pdfCatalog.filter((entry) => entry.available).length} PDFs.`);
