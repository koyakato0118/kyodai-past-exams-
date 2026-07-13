# 問題文・出典の表示仕様

## 最重要ルール

問題文は要約・言い換えをせず、元の過去問に記載された文章、数式、問題番号、条件、注記をそのまま表示する。

解説と問題文は明確に分離し、問題文内へ解説文を混ぜない。

## 推奨表示

各問題ページでは次の2種類を用意する。

1. **問題文（原文）**
   - 元PDFから正確に転記したテキスト。
   - 改行、数式、箇条書き、小問番号を可能な限り維持する。
   - 検索・コピー・読み上げに利用する。

2. **原本を表示**
   - 元PDFの該当ページ、または問題ごとに切り出した画像を表示する。
   - 図、回路図、グラフ、結晶図、状態図などは必ず原本画像を併記する。
   - 画像はクリックで拡大できるようにする。
   - スマートフォンではピンチズームまたは横スクロールを可能にする。

## Markdown Front Matter

```yaml
problem_display: verbatim
source_file: 物工・制御工学1(細田・遠藤)2023.pdf
source_pages:
  - 1
problem_assets:
  - /exams/control-engineering-1/2023/page-1.webp
```

## Markdown内の記法

```md
### 問題文（原文）

:::problem-original
ここへ原文をそのまま記載する。
:::

:::problem-asset
src: /exams/control-engineering-1/2023/q1.webp
alt: 制御工学1 2023年度 問題1の原本
:::
```

## Codexへの禁止事項

- 問題文を読みやすくする目的で勝手に短縮しない。
- 記号を別の記号へ置き換えない。
- 数値、添字、積分範囲、符号を推測で補わない。
- 不鮮明な箇所を独断で確定しない。
- 図を省略しない。

不鮮明な箇所は次のようにする。

```yaml
status: needs_confirmation
uncertain_parts:
  - question: q2-b
    description: 図中の長さが r/2 か r/3 か判別困難
```

`needs_confirmation` の問題は本番公開しない。
