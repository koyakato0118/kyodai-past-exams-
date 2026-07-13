(function () {
  "use strict";

  const data = window.__PAST_EXAM_CONTENT__ || { subjects: [], pdfs: [] };
  const studyGuides = {
    "design-engineering-1": {
      label: "設計工学1 テスト対策",
      url: "/study-guides/design-engineering-1.html",
    },
    "fluid-mechanics-2": {
      label: "流体力学2 テスト対策",
      url: "/study-guides/fluid-mechanics-2.html",
    },
    "industrial-math-f2": {
      label: "工業数学F2 59ページ問6 解説",
      url: "/study-guides/industrial-math-f2-p59-q6.html",
    },
    "statistical-thermodynamics": {
      label: "統計熱力学 問題演習型テスト対策",
      url: "/study-guides/statistical-thermodynamics.html",
    },
  };
  const dom = {
    content: document.getElementById("contentPane"),
    rail: document.getElementById("rightRail"),
    nav: document.getElementById("sidebarNav"),
    search: document.getElementById("searchInput"),
    headerStatus: document.getElementById("headerStatus"),
    menuButton: document.getElementById("menuButton"),
    sidebar: document.getElementById("sidebar"),
    backdrop: document.getElementById("mobileBackdrop"),
    toTop: document.getElementById("toTopButton"),
  };

  let searchQuery = "";

  function normalizePath(path) {
    if (!path || path === "/index.html") return "/";
    return path.replace(/\/index\.html$/, "") || "/";
  }

  function currentPath() {
    if (window.location.protocol === "file:") {
      return normalizePath(window.location.hash.slice(1) || "/");
    }
    return normalizePath(window.location.pathname);
  }

  function hrefFor(path) {
    return window.location.protocol === "file:" ? `#${path}` : path;
  }

  function currentPageAttr(isCurrent) {
    return isCurrent ? ' aria-current="page"' : "";
  }

  function publicHref(url) {
    if (!url) return "";
    if (/^https?:\/\//u.test(url)) return url;
    return window.location.protocol === "file:" ? `.${url}` : url;
  }

  function renderStudyGuideAction(subject) {
    const guide = studyGuides[subject?.slug];
    if (!guide) return "";
    return `<div class="resource-actions"><a class="text-link" href="${publicHref(guide.url)}">${escapeHtml(guide.label)}を開く</a></div>`;
  }

  function yearLabel(year) {
    return year.displayLabel || `${year.year}年度`;
  }

  function isLectureSummary(year) {
    return year.contentType === "lecture_summary";
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function slugify(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
      .replace(/^-+|-+$/g, "") || "section";
  }

  function routeInfo(path) {
    const parts = normalizePath(path).split("/").filter(Boolean);
    if (parts[0] !== "subjects") return { type: "home" };
    const subjectSlug = parts[1];
    const year = parts[2];
    const questionId = parts[3];
    const subject = data.subjects.find((item) => item.slug === subjectSlug);
    if (!subject) return { type: "missing" };
    if (!year) return { type: "subject", subject };
    const yearItem = subject.years.find((item) => String(item.year) === String(year));
    if (!yearItem) return { type: "missing", subject };
    if (!questionId) return { type: "year", subject, year: yearItem };
    const question = yearItem.questions.find((item) => item.id === questionId);
    if (!question) return { type: "missing", subject, year: yearItem };
    return { type: "question", subject, year: yearItem, question };
  }

  function allQuestions() {
    return data.subjects.flatMap((subject) =>
      subject.years.flatMap((year) =>
        year.questions.map((question) => ({
          subject,
          year,
          question,
          path: `/subjects/${subject.slug}/${year.year}/${question.id}`,
        })),
      ),
    );
  }

  function renderInline(markdown) {
    let text = escapeHtml(markdown);
    text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
    text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    return text;
  }

  function markdownToHtml(markdown, options = {}) {
    const htmlTokens = [];
    let source = String(markdown || "").replace(/\r\n/g, "\n").trim();

    if (options.answerSections !== false) {
      source = source.replace(/(?:^|\n)###\s+(最終解答|試験答案)\s*\n([\s\S]*?)(?=\n###\s+|$)/gu, (_, title, body) => {
        const id = title === "最終解答" ? "final-answer" : "exam-answer";
        const className = title === "最終解答" ? "final-answer" : "exam-answer";
        const inner = markdownToHtml(body, { ...options, answerSections: false });
        const html = `<section class="answer-panel ${className}" id="${id}"><h3>${escapeHtml(title)}</h3>${inner}</section>`;
        htmlTokens.push(html);
        return `\n@@HTML${htmlTokens.length - 1}@@\n`;
      });
    }

    if (options.customBlocks !== false) {
      source = source.replace(/:::problem-original\n([\s\S]*?)\n:::/gu, (_, body) => {
        const inner = markdownToHtml(body, { ...options, customBlocks: false, answerSections: false });
        const html = `<div class="problem-original-box">${inner}</div>`;
        htmlTokens.push(html);
        return `\n@@HTML${htmlTokens.length - 1}@@\n`;
      });

      source = source.replace(/:::problem-asset\n([\s\S]*?)\n:::/gu, (_, body) => {
        const src = /^src:\s*(.+)$/imu.exec(body)?.[1]?.trim() || "";
        const alt = /^alt:\s*(.+)$/imu.exec(body)?.[1]?.trim() || "原本";
        const href = options.pdfUrl ? publicHref(options.pdfUrl) : publicHref(src);
        const link = href ? `<a class="button-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">原本を表示</a>` : "";
        const html = `<div class="problem-asset-box"><div><strong>原本</strong><p>${escapeHtml(alt)}</p></div>${link}</div>`;
        htmlTokens.push(html);
        return `\n@@HTML${htmlTokens.length - 1}@@\n`;
      });
    }

    if (options.why !== false) {
      let whyIndex = 0;
      source = source.replace(/:::why\s+title="([^"]+)"\n([\s\S]*?)\n:::/g, (_, title, body) => {
        const id = `why-${whyIndex}-${slugify(title)}`;
        whyIndex += 1;
        const inner = markdownToHtml(body, { why: false });
        const html = `<details class="why-card" id="${id}"><summary aria-controls="${id}-body" aria-expanded="false"><span>なぜ？ ${escapeHtml(title)}</span></summary><div class="why-card-body" id="${id}-body">${inner}</div></details>`;
        htmlTokens.push(html);
        return `\n@@HTML${htmlTokens.length - 1}@@\n`;
      });
    }

    source = source.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
      const html = `<div class="math-block">\\[${escapeHtml(math.trim())}\\]</div>`;
      htmlTokens.push(html);
      return `\n@@HTML${htmlTokens.length - 1}@@\n`;
    });

    source = source.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
      const html = `<span class="math-inline">\\(${escapeHtml(math.trim())}\\)</span>`;
      htmlTokens.push(html);
      return `@@HTML${htmlTokens.length - 1}@@`;
    });

    const lines = source.split("\n");
    const output = [];
    let paragraph = [];
    let list = [];
    let quote = [];
    let table = [];

    function withTokens(value) {
      return value.replace(/@@HTML(\d+)@@/g, (_, index) => htmlTokens[Number(index)] || "");
    }

    function flushParagraph() {
      if (!paragraph.length) return;
      output.push(`<p>${withTokens(renderInline(paragraph.join(" ")))}</p>`);
      paragraph = [];
    }

    function flushList() {
      if (!list.length) return;
      output.push(`<ul>${list.map((item) => `<li>${withTokens(renderInline(item))}</li>`).join("")}</ul>`);
      list = [];
    }

    function flushQuote() {
      if (!quote.length) return;
      output.push(`<blockquote>${quote.map((item) => `<p>${withTokens(renderInline(item))}</p>`).join("")}</blockquote>`);
      quote = [];
    }

    function flushTable() {
      if (!table.length) return;
      const [head, ...body] = table;
      const renderCells = (cells, tag) => cells.map((cell) => `<${tag}>${withTokens(renderInline(cell))}</${tag}>`).join("");
      output.push(`<div class="table-scroll"><table><thead><tr>${renderCells(head, "th")}</tr></thead><tbody>${body.map((row) => `<tr>${renderCells(row, "td")}</tr>`).join("")}</tbody></table></div>`);
      table = [];
    }

    function flushAll() {
      flushParagraph();
      flushList();
      flushQuote();
      flushTable();
    }

    for (const rawLine of lines) {
      const line = rawLine.trimEnd();
      const trimmed = line.trim();

      if (!trimmed) {
        flushAll();
        continue;
      }

      if (/^@@HTML\d+@@$/.test(trimmed)) {
        flushAll();
        output.push(withTokens(trimmed));
        continue;
      }

      const heading = /^(#{2,4})\s+(.+)$/.exec(trimmed);
      if (heading) {
        flushAll();
        const level = heading[1].length;
        const title = heading[2].replace(/^Q[^\s]+\s*/, "");
        output.push(`<h${level} id="${slugify(title)}">${withTokens(renderInline(title))}</h${level}>`);
        continue;
      }

      if (/^\|.*\|$/.test(trimmed)) {
        flushParagraph();
        flushList();
        flushQuote();
        if (!/^\|(?:\s*:?-+:?\s*\|)+$/.test(trimmed)) {
          table.push(trimmed.split("|").slice(1, -1).map((cell) => cell.trim()));
        }
        continue;
      }

      const bullet = /^-\s+(.+)$/.exec(trimmed);
      if (bullet) {
        flushParagraph();
        flushQuote();
        list.push(bullet[1]);
        continue;
      }

      const quoted = /^>\s?(.*)$/.exec(trimmed);
      if (quoted) {
        flushParagraph();
        flushList();
        quote.push(quoted[1].replace(/^\[!IMPORTANT\]\s*/, "重要"));
        continue;
      }

      flushList();
      flushQuote();
      flushTable();
      paragraph.push(trimmed);
    }

    flushAll();
    return output.join("\n");
  }

  function setMath() {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise([dom.content, dom.rail]).catch(() => {});
    }
  }

  function groupQuestions(year) {
    const groups = new Map();
    for (const question of year.questions) {
      const key = question.major || "other";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(question);
    }
    return [...groups.entries()].map(([major, questions]) => ({ major, questions }));
  }

  function statusLabel(status) {
    const labels = {
      completed: "completed",
      reviewed: "reviewed",
      needs_confirmation: "needs confirmation",
      source_required: "source required",
    };
    return labels[status] || status || "draft";
  }

  function renderPdfActions(year) {
    const links = [];
    if (year?.localPdfUrl) {
      links.push(`<a class="text-link" href="${publicHref(year.localPdfUrl)}" target="_blank" rel="noopener noreferrer">PDFをブラウザで開く</a>`);
    }
    if (year?.sourceUrl) {
      links.push(`<a class="text-link" href="${escapeHtml(year.sourceUrl)}" target="_blank" rel="noopener noreferrer">元サイトで開く</a>`);
    }
    return links.length ? `<div class="pdf-actions">${links.join("")}</div>` : "";
  }

  function renderBreadcrumbs(items) {
    return `<div class="breadcrumbs">${items
      .map((item, index) => {
        const label = escapeHtml(item.label);
        if (!item.path || index === items.length - 1) return `<span>${label}</span>`;
        return `<a href="${hrefFor(item.path)}" data-route="${item.path}">${label}</a><span>/</span>`;
      })
      .join("")}</div>`;
  }

  function renderHome() {
    const subjects = data.subjects;
    dom.content.innerHTML = `
      <div class="page-head">
        <div class="page-kicker"><span>目次</span><span>${allQuestions().length} 問</span></div>
        <h1 class="page-title">過去問目次</h1>
        <p class="page-subtitle">現在収録している解説とPDFです。</p>
      </div>
      <div class="toc-list">
        ${subjects
          .map(
            (subject) => `<section class="toc-subject">
              <div class="toc-subject-head">
                <h2>${escapeHtml(subject.name)}</h2>
                <a class="text-link" href="${hrefFor(`/subjects/${subject.slug}`)}" data-route="/subjects/${subject.slug}">年度一覧</a>
              </div>
              ${subject.years
                .map(
                  (year) => `<div class="toc-year">
                    <a class="toc-year-head clickable" href="${hrefFor(`/subjects/${subject.slug}/${year.year}`)}" data-route="/subjects/${subject.slug}/${year.year}">
                      <strong>${escapeHtml(yearLabel(year))}</strong>
                      <span>${escapeHtml(year.teachers.join("・"))} / ${year.questions.length}${isLectureSummary(year) ? "部" : "問"}</span>
                    </a>
                    ${renderPdfActions(year)}
                    <div class="toc-major-list">
                      ${groupQuestions(year)
                        .map(
                          ({ major, questions }) => `<div class="toc-major">
                            <div class="toc-major-title">${isLectureSummary(year) ? `第${escapeHtml(major)}部` : `大問${escapeHtml(major)}`}</div>
                            <div class="toc-question-list">
                              ${questions
                                .map(
                                  (question) => `<a class="toc-question clickable" href="${hrefFor(`/subjects/${subject.slug}/${year.year}/${question.id}`)}" data-route="/subjects/${subject.slug}/${year.year}/${question.id}">
                                    <span>${escapeHtml(question.label)}</span>
                                    <strong>${escapeHtml(question.title)}</strong>
                                  </a>`,
                                )
                                .join("")}
                            </div>
                          </div>`,
                        )
                        .join("")}
                    </div>
                  </div>`,
                )
                .join("")}
            </section>
            `,
          )
          .join("")}
      </div>
      ${renderStudyGuideCatalog()}
      ${renderPdfCatalog()}
    `;
    renderRail(null);
  }

  function renderStudyGuideCatalog() {
    const guides = Object.entries(studyGuides)
      .map(([slug, guide]) => ({
        ...guide,
        subject: data.subjects.find((item) => item.slug === slug),
      }))
      .filter((item) => item.subject);

    if (!guides.length) return "";
    return `
      <section class="pdf-catalog">
        <div class="toc-subject-head">
          <h2>HTML対策資料</h2>
          <span>${guides.length}件</span>
        </div>
        <div class="pdf-list">
          ${guides
            .map(
              (guide) => `
                <a class="pdf-list-item clickable" href="${publicHref(guide.url)}">
                  <strong>${escapeHtml(guide.label)}</strong>
                  <span>${escapeHtml(guide.subject.name)}の独立した学習ページを開く</span>
                </a>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderPdfCatalog() {
    const pdfs = (data.pdfs || []).filter((item) => item.available);
    if (!pdfs.length) return "";
    return `
      <section class="pdf-catalog">
        <div class="toc-subject-head">
          <h2>PDF一覧</h2>
          <span>${pdfs.length}件</span>
        </div>
        <div class="pdf-list">
          ${pdfs
            .map(
              (item) => `
                <a class="pdf-list-item clickable" href="${publicHref(item.localPdfUrl)}" target="_blank" rel="noopener noreferrer">
                  <strong>${escapeHtml(item.subject)} ${item.year}年度</strong>
                  <span>${escapeHtml(item.sourceFileName || item.localPdfUrl)}</span>
                </a>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderSubject(subject) {
    dom.content.innerHTML = `
      ${renderBreadcrumbs([{ label: "Home", path: "/" }, { label: subject.name }])}
      <div class="page-head">
        <div class="page-kicker"><span>${escapeHtml(subject.name)}</span><span>${subject.years.length} 年度</span></div>
        <h1 class="page-title">${escapeHtml(subject.name)}</h1>
        ${renderStudyGuideAction(subject)}
      </div>
      <div class="overview-grid">
        ${subject.years
          .map(
            (year) => `
              <a class="overview-card clickable" href="${hrefFor(`/subjects/${subject.slug}/${year.year}`)}" data-route="/subjects/${subject.slug}/${year.year}">
                <h2>${escapeHtml(yearLabel(year))}</h2>
                <p>${escapeHtml(year.teachers.join("・"))} / ${year.questions.length}${isLectureSummary(year) ? "部" : "問"}</p>
                <span class="status-pill ${escapeHtml(year.status)}">${escapeHtml(statusLabel(year.status))}</span>
              </a>
            `,
          )
          .join("")}
      </div>
    `;
    renderRail(null);
  }

  function renderYear(subject, year) {
    const firstQuestion = year.questions[0];
    dom.content.innerHTML = `
      ${renderBreadcrumbs([
        { label: "Home", path: "/" },
        { label: subject.name, path: `/subjects/${subject.slug}` },
        { label: yearLabel(year) },
      ])}
      <div class="page-head">
        <div class="page-kicker">
          <span>${escapeHtml(subject.name)}</span>
          <span>${escapeHtml(yearLabel(year))}</span>
          <span>${escapeHtml(year.teachers.join("・"))}</span>
        </div>
        <h1 class="page-title">${escapeHtml(subject.name)} ${escapeHtml(yearLabel(year))}</h1>
        ${renderPdfActions(year)}
        ${renderStudyGuideAction(subject)}
        <div class="page-actions">
          ${
            firstQuestion
              ? `<a class="button-link primary" href="${hrefFor(`/subjects/${subject.slug}/${year.year}/${firstQuestion.id}`)}" data-route="/subjects/${subject.slug}/${year.year}/${firstQuestion.id}">${isLectureSummary(year) ? "第1部を読む" : "最初の問題へ"}</a>`
              : ""
          }
        </div>
      </div>
      <article class="content-markdown">${markdownToHtml(year.introMarkdown, { pdfUrl: year.localPdfUrl })}</article>
      <h2 class="section-title">${isLectureSummary(year) ? "まとめの構成" : "問題一覧"}</h2>
      <div class="question-grid">
        ${year.questions
          .map(
            (question) => `
              <a class="question-card clickable" href="${hrefFor(`/subjects/${subject.slug}/${year.year}/${question.id}`)}" data-route="/subjects/${subject.slug}/${year.year}/${question.id}">
                <h2>${escapeHtml(question.label)} ${escapeHtml(question.title)}</h2>
                <p>${escapeHtml(isLectureSummary(year) ? `第${question.major}部` : question.major ? `大問${question.major}` : "問題")}</p>
              </a>
            `,
          )
          .join("")}
      </div>
    `;
    renderRail({ subject, year });
  }

  function renderQuestion(subject, year, question) {
    const sequence = allQuestions();
    const currentIndex = sequence.findIndex((item) => item.subject.slug === subject.slug && String(item.year.year) === String(year.year) && item.question.id === question.id);
    const prev = sequence[currentIndex - 1];
    const next = sequence[currentIndex + 1];
    dom.content.innerHTML = `
      ${renderBreadcrumbs([
        { label: "Home", path: "/" },
        { label: subject.name, path: `/subjects/${subject.slug}` },
        { label: yearLabel(year), path: `/subjects/${subject.slug}/${year.year}` },
        { label: question.label },
      ])}
      <div class="page-head">
        <div class="page-kicker">
          <span>${escapeHtml(subject.name)}</span>
          <span>${escapeHtml(yearLabel(year))}</span>
          <span>${escapeHtml(year.teachers.join("・"))}</span>
        </div>
        <h1 class="page-title">${escapeHtml(question.label)} ${escapeHtml(question.title)}</h1>
        ${renderPdfActions(year)}
      </div>
      <nav class="question-nav" aria-label="前後の問題">
        ${
          prev
            ? `<a class="clickable" href="${hrefFor(prev.path)}" data-route="${prev.path}"><span>前へ</span><strong>${escapeHtml(prev.year.year)} ${escapeHtml(prev.question.label)} ${escapeHtml(prev.question.title)}</strong></a>`
            : `<span></span>`
        }
        ${
          next
            ? `<a class="clickable" href="${hrefFor(next.path)}" data-route="${next.path}"><span>次へ</span><strong>${escapeHtml(next.year.year)} ${escapeHtml(next.question.label)} ${escapeHtml(next.question.title)}</strong></a>`
            : `<span></span>`
        }
      </nav>
      <article class="content-markdown">${markdownToHtml(question.markdown, { pdfUrl: year.localPdfUrl })}</article>
    `;
    renderRail({ subject, year, question });
  }

  function renderMissing() {
    dom.content.innerHTML = `
      <div class="page-head">
        <h1 class="page-title">ページが見つかりません</h1>
        <div class="page-actions">
          <a class="button-link primary" href="${hrefFor("/")}" data-route="/">一覧へ戻る</a>
        </div>
      </div>
    `;
    renderRail(null);
  }

  function renderRail(context) {
    if (!context?.question) {
      dom.rail.innerHTML = `
        <div class="rail-inner">
          <section class="rail-section">
            <h2>収録状況</h2>
            <ul class="rail-list">
              ${data.subjects
                .flatMap((subject) => subject.years.map((year) => `<li>${escapeHtml(subject.name)} ${year.year}年度: ${year.questions.length}問</li>`))
                .join("")}
            </ul>
          </section>
        </div>
      `;
      return;
    }

    const { question } = context;
    const whyButtons = question.why
      .map((item, index) => {
        const id = `why-${index}-${slugify(item.title)}`;
        return `<button class="why-jump" type="button" data-why-target="${id}"><span>${escapeHtml(item.title)}</span><span aria-hidden="true">↘</span></button>`;
      })
      .join("");
    const important = question.importantPoints.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const related = question.relatedKnowledge.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const tags = question.tags.map((item) => `<span class="tag clickable">${escapeHtml(item)}</span>`).join("");
    const answerButtons = [
      question.hasFinalAnswer ? `<button class="why-jump" type="button" data-scroll-target="final-answer"><span>最終解答</span><span aria-hidden="true">↘</span></button>` : "",
      question.hasExamAnswer ? `<button class="why-jump" type="button" data-scroll-target="exam-answer"><span>試験答案</span><span aria-hidden="true">↘</span></button>` : "",
    ].join("");

    dom.rail.innerHTML = `
      <div class="rail-inner">
        ${
          context.year.localPdfUrl
            ? `<section class="rail-section"><h2>原本PDF</h2><div class="rail-stack">${renderPdfActions(context.year)}</div></section>`
            : ""
        }
        ${
          answerButtons
            ? `<section class="rail-section"><h2>解答</h2><div class="rail-stack">${answerButtons}</div></section>`
            : ""
        }
        ${
          whyButtons
            ? `<section class="rail-section"><h2>なぜ？</h2><div class="rail-stack">${whyButtons}</div></section>`
            : ""
        }
        ${
          important
            ? `<section class="rail-section"><h2>重要ポイント</h2><ul class="rail-list">${important}</ul></section>`
            : ""
        }
        ${
          related
            ? `<section class="rail-section"><h2>関連知識</h2><ul class="rail-list">${related}</ul></section>`
            : ""
        }
        ${
          tags
            ? `<section class="rail-section"><h2>タグ</h2><div class="tag-list">${tags}</div></section>`
            : ""
        }
      </div>
    `;
  }

  function renderSidebar() {
    const path = currentPath();
    const query = searchQuery.trim().toLowerCase();

    if (query) {
      const results = allQuestions().filter(({ subject, year, question }) => {
        const haystack = `${subject.name} ${year.year} ${question.label} ${question.title} ${question.markdown}`.toLowerCase();
        return haystack.includes(query);
      });
      dom.nav.innerHTML = results.length
        ? results
            .map(
              ({ year, question, path: itemPath }) => `
                <a class="search-result clickable ${itemPath === path ? "active" : ""}" href="${hrefFor(itemPath)}" data-route="${itemPath}"${currentPageAttr(itemPath === path)}>
                  <span class="nav-kicker">${year.year}</span>
                  <span>${escapeHtml(question.label)} ${escapeHtml(question.title)}</span>
                </a>
              `,
            )
            .join("")
        : `<div class="empty-state">該当なし</div>`;
      return;
    }

    dom.nav.innerHTML = data.subjects
      .map((subject) => {
        const subjectPath = `/subjects/${subject.slug}`;
        const subjectOpen = path === "/" || path.startsWith(subjectPath);
        const yearsHtml = subject.years
          .map((year) => {
            const yearPath = `${subjectPath}/${year.year}`;
            const yearOpen = path.startsWith(yearPath);
            const groupsHtml = groupQuestions(year)
              .map(({ major, questions }) => {
                const groupOpen = questions.some((question) => path === `${yearPath}/${question.id}`);
                return `
                  <details class="nav-details" ${groupOpen ? "open" : ""}>
                <summary class="nav-summary" aria-expanded="${groupOpen ? "true" : "false"}" aria-controls="nav-${subject.slug}-${year.year}-${major}">
                  <span class="nav-chevron" aria-hidden="true">›</span>
                  <span>${isLectureSummary(year) ? `第${escapeHtml(major)}部` : `大問${escapeHtml(major)}`}</span>
                </summary>
                    <div class="nav-level" id="nav-${subject.slug}-${year.year}-${major}">
                      ${questions
                        .map((question) => {
                          const questionPath = `${yearPath}/${question.id}`;
                          return `<a class="nav-link clickable ${path === questionPath ? "active" : ""}" href="${hrefFor(questionPath)}" data-route="${questionPath}"${currentPageAttr(path === questionPath)}><span class="nav-kicker">${escapeHtml(question.label)}</span><span>${escapeHtml(question.title)}</span></a>`;
                        })
                        .join("")}
                    </div>
                  </details>
                `;
              })
              .join("");

            return `
              <details class="nav-details" ${yearOpen ? "open" : ""}>
                <summary class="nav-summary" aria-expanded="${yearOpen ? "true" : "false"}" aria-controls="nav-${subject.slug}-${year.year}">
                  <span class="nav-chevron" aria-hidden="true">›</span>
                  <span class="nav-summary-text">
                    <span>${escapeHtml(yearLabel(year))}</span>
                    <small>${escapeHtml(year.teachers.join("・"))}</small>
                  </span>
                </summary>
                <div class="nav-level" id="nav-${subject.slug}-${year.year}">
                  <a class="nav-link clickable ${path === yearPath ? "active" : ""}" href="${hrefFor(yearPath)}" data-route="${yearPath}"${currentPageAttr(path === yearPath)}><span class="nav-kicker">${isLectureSummary(year) ? "概要" : "予備"}</span><span>${isLectureSummary(year) ? "授業資料まとめの使い方" : "この年度で必要な予備知識"}</span></a>
                  ${groupsHtml}
                </div>
              </details>
            `;
          })
          .join("");

        return `
          <details class="nav-details" ${subjectOpen ? "open" : ""}>
            <summary class="nav-summary" aria-expanded="${subjectOpen ? "true" : "false"}" aria-controls="nav-${subject.slug}">
              <span class="nav-chevron" aria-hidden="true">›</span>
              <span>${escapeHtml(subject.name)}</span>
            </summary>
            <div class="nav-level" id="nav-${subject.slug}">
              <a class="nav-link clickable ${path === subjectPath ? "active" : ""}" href="${hrefFor(subjectPath)}" data-route="${subjectPath}"${currentPageAttr(path === subjectPath)}><span class="nav-kicker">科目</span><span>年度一覧</span></a>
              ${
                studyGuides[subject.slug]
                  ? `<a class="nav-link" href="${publicHref(studyGuides[subject.slug].url)}"><span class="nav-kicker">対策</span><span>テスト対策</span></a>`
                  : ""
              }
              ${yearsHtml}
            </div>
          </details>
        `;
      })
      .join("");
  }

  function updateSummaryAria() {
    document.querySelectorAll("details > summary").forEach((summary) => {
      summary.setAttribute("aria-expanded", summary.parentElement?.open ? "true" : "false");
    });
  }

  function closeDrawer() {
    dom.sidebar.classList.remove("open");
    dom.backdrop.hidden = true;
    dom.menuButton.setAttribute("aria-expanded", "false");
  }

  function render() {
    const path = currentPath();
    const route = routeInfo(path);
    renderSidebar();
    dom.headerStatus.textContent = `${allQuestions().length}問`;

    if (route.type === "home") renderHome();
    if (route.type === "subject") renderSubject(route.subject);
    if (route.type === "year") renderYear(route.subject, route.year);
    if (route.type === "question") renderQuestion(route.subject, route.year, route.question);
    if (route.type === "missing") renderMissing();

    updateSummaryAria();
    setMath();
    dom.content.focus({ preventScroll: true });
    closeDrawer();
  }

  document.addEventListener("click", (event) => {
    const routeLink = event.target.closest("[data-route]");
    if (routeLink) {
      const path = routeLink.getAttribute("data-route");
      if (window.location.protocol !== "file:") {
        event.preventDefault();
        window.history.pushState({}, "", path);
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    const whyButton = event.target.closest("[data-why-target]");
    if (whyButton) {
      const target = document.getElementById(whyButton.getAttribute("data-why-target"));
      if (target) {
        target.open = true;
        updateSummaryAria();
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      const target = document.getElementById(scrollButton.getAttribute("data-scroll-target"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });

  document.addEventListener("toggle", (event) => {
    if (event.target instanceof HTMLDetailsElement) updateSummaryAria();
  }, true);

  dom.search.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    renderSidebar();
  });

  dom.menuButton.addEventListener("click", () => {
    const open = !dom.sidebar.classList.contains("open");
    dom.sidebar.classList.toggle("open", open);
    dom.backdrop.hidden = !open;
    dom.menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  });

  dom.backdrop.addEventListener("click", closeDrawer);

  dom.toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    dom.toTop.classList.toggle("visible", window.scrollY > 520);
  });

  window.addEventListener("popstate", render);
  window.addEventListener("hashchange", render);

  render();
})();
