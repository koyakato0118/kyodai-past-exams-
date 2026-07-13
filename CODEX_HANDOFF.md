# CODEX_HANDOFF

## 目的

京都大学工学部の過去問について、初学者でも理解できる解説サイトを構築する。

Codexの役割は**実装**であり、数学・物理の解答を新たに推測することではない。解答内容は `content/` 内のMarkdownを正とする。

**問題文は原文のまま表示し、要約・言い換えをしない。** 図表は元PDFの画像を表示する。詳細は `spec/content-spec.md` を参照する。

## 技術構成の推奨

- Next.js
- TypeScript
- App Router
- Markdown/MDX
- KaTeX
- 静的生成
- Vercel
- GitHub連携による自動デプロイ

静的HTMLで実装する場合も、内容とUIを分離すること。

## 推奨ディレクトリ

```text
app/
  page.tsx
  subjects/
    [subject]/
      [year]/
        [question]/
          page.tsx
components/
  AppHeader.tsx
  SubjectSidebar.tsx
  NestedAccordion.tsx
  QuestionNavigation.tsx
  WhyDisclosure.tsx
  ImportantPoints.tsx
  ExamAnswer.tsx
  MathBlock.tsx
content/
  industrial-math-f2/
    2023.md
    2021.md
lib/
  content.ts
  navigation.ts
styles/
  globals.css
```

## URL設計

```text
/
/subjects/industrial-math-f2
/subjects/industrial-math-f2/2023
/subjects/industrial-math-f2/2023/q1-1
/subjects/industrial-math-f2/2021/q3-3
```

## コンテンツ読み込み

MarkdownのYAML Front Matterと見出しから、次を生成する。

- 科目名
- 年度
- 担当教員
- 問題番号
- 問題タイトル
- 予備知識
- 問題文（原文）
- 原本画像
- 解法方針
- 詳細解説
- Whyブロック
- 最終解答
- 試験答案
- 重要ポイント
- 関連知識
- タグ
- 公開状態

## 受け入れ条件

- すべてのクリック可能要素でホバー時 `opacity: 0.7`
- 科目トグル内に年度が表示される
- 年度トグル内に大問・小問が表示される
- 現在ページがサイドバーで分かる
- 「なぜ？」が個別に展開・収納できる
- キーボード操作可能
- スマホ対応
- 数式が横にはみ出す場合は横スクロール可能
- Markdownを修正するだけで内容更新できる
- 数学的内容をコード内へハードコードしない

詳細は `spec/ui-spec.md` を参照。


## PDFの公開

- `source-pdfs/` に元PDFが入っている。
- 実装時に `public/pdfs/` 以下へ、英数字のファイル名でコピーする。
- 各年度・問題ページに「PDFをブラウザで開く」を表示する。
- 元Google Drive URLがある場合は「元サイトで開く」も表示する。
- リンクは新しいタブで開く。
- 詳細は `spec/pdf-links.md` を参照する。
