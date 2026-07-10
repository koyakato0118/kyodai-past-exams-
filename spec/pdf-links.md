# PDFリンク・公開仕様

## サイトでの表示

各年度ページまたは各問題ページに、次の2つを表示する。

1. **PDFをブラウザで開く**
   - リポジトリ内のPDFを `public/pdfs/` へコピーし、ブラウザで直接開く。
   - `target="_blank"` と `rel="noopener noreferrer"` を付ける。
   - 例: `/pdfs/control-engineering-1/2023.pdf`

2. **元サイトで開く**
   - Google Drive等の元URLがある場合だけ表示する。
   - こちらも新しいタブで開く。

## Codex実装例

```tsx
<a
  href={localPdfUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="clickable"
>
  PDFをブラウザで開く
</a>

{sourceUrl && (
  <a
    href={sourceUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="clickable"
  >
    元サイトで開く
  </a>
)}
```

すべてのリンクはホバー時に `opacity: 0.7` とする。

## ローカルPDF URL

| 科目 | 年度 | 配置先 |
|---|---:|---|
| 工業数学F2 | 2023 | `/pdfs/industrial-math-f2/2023.pdf` |
| 工業数学F2 | 2021 | `/pdfs/industrial-math-f2/2021.pdf` |
| 制御工学1 | 2023 | `/pdfs/control-engineering-1/2023.pdf` |
| 工業力学A | 2024 | `/pdfs/engineering-mechanics-a/2024.pdf` |
| 工業力学A | 2023 | `/pdfs/engineering-mechanics-a/2023.pdf` |
| 設計工学1 | 2023 | `/pdfs/design-engineering-1/2023.pdf` |
| 設計工学1 | 2021 | `/pdfs/design-engineering-1/2021.pdf` |
| 応用電磁気学 | 2024 | `/pdfs/applied-electromagnetics/2024.pdf` |
| 応用電磁気学 | 2023 | `/pdfs/applied-electromagnetics/2023.pdf` |
| 流体力学2 | 2024 | `/pdfs/fluid-mechanics-2/2024.pdf` |
| 統計熱力学 | 2023 | `/pdfs/statistical-thermodynamics/2023.pdf` |
| 統計熱力学 | 2011 | `/pdfs/statistical-thermodynamics/2011.pdf` |
| 材料基礎学1 | 2018 | `/pdfs/materials-fundamentals-1/2018.pdf` |

## 判明している元URL

| 科目 | 年度 | 元URL |
|---|---:|---|
| 工業数学F2 | 2023 | `https://drive.google.com/file/d/1lEWrJzkPy4YeRLF8-U01fpamJU2JGEAs/edit` |
| 制御工学1 | 2023 | `https://drive.google.com/file/d/1BaFlggmAz37l-M8YR6Q8X_leOXJUqHfA/edit` |
| 工業力学A | 2024 | `https://drive.google.com/file/d/1bShxwKoUTIisUW_fXotj-J7aebCXP8ZE/edit` |
| 工業力学A | 2023 | `https://drive.google.com/file/d/1oA86l2Iz_9zyNuBeRPqy_YMthSeC65rp/edit` |
| 設計工学1 | 2023 | `https://drive.google.com/file/d/1IChMhcor6fkc2BK_0GTWkTLrAisWx_Eh/edit` |
| 設計工学1 | 2021 | `https://drive.google.com/file/d/1-vAVkLF68QGFvpTVejJuw70-65lqsU0a/edit` |
| 応用電磁気学 | 2024 | `https://drive.google.com/file/d/10LQ2H957-cAqFR5iaB9lHxRAU4Qcch06/edit` |
| 応用電磁気学 | 2023 | `https://drive.google.com/file/d/1obW9TWGTKLiZGkQM-5Tz8IiL08On4j77/edit` |
| 流体力学2 | 2024 | `https://drive.google.com/file/d/1uSkyYCvEga1wjrD5cT7kZ8l7jl6H9UvI/edit` |
| 統計熱力学 | 2023 | `https://drive.google.com/file/d/12H8VOiLQUZFytWqt08UZHWBXc26MoxOO/edit` |
| 統計熱力学 | 2011 | `https://drive.google.com/file/d/1tQZJdxghjRSHtWbSVARI_2RCy4Hixwl-/edit` |
| 材料基礎学1 | 2018 | `https://drive.google.com/file/d/17r7rU1vOiShf75A7BgMKIUQoGiNv1lcz/edit` |

工業数学F2・2021年度については、元Google Drive URLをまだ確定していないため、
サイトではローカルPDF URLのみを表示する。
