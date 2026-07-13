# Codexへ渡すもの

Codexには、このフォルダ一式をそのまま渡す。

## 必須

- `CODEX_HANDOFF.md`
- `README.md`
- `content-manifest.md`
- `content/`
- `spec/`
- `templates/`
- `source-pdfs/`
- `reference-assets/ui-reference.png`

## 最初にCodexへ送る指示

```text
このフォルダの CODEX_HANDOFF.md を最初に読み、
spec/ui-spec.md、spec/content-spec.md、spec/pdf-links.md の仕様に従って実装してください。

数学・物理の内容は content/ のMarkdownを唯一の正として扱い、
独自に数式・問題文・解答を変更しないでください。

問題文は原文のまま表示し、source-pdfs/ のPDFをブラウザで開けるリンクを作ってください。
UIは reference-assets/ui-reference.png に寄せてください。
すべてのクリック可能要素はホバー時 opacity: 0.7 にしてください。
サイドバーは「科目 → 年度 → 大問 → 小問」のトグル構造にしてください。
```

## 注意

現時点で解答Markdownが完成しているのは次の3ファイル。

- `content/industrial-math-f2/2023.md`
- `content/industrial-math-f2/2021.md`
- `content/control-engineering-1/2023.md`

その他のPDFは、今後ChatGPT側で解答Markdownを追加する。
Codexは未完成科目の解答を推測して作らないこと。
