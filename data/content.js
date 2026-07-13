window.__PAST_EXAM_CONTENT__ = {
  "generatedAt": "2026-07-11T14:07:30.685Z",
  "subjects": [
    {
      "name": "応用電磁気学",
      "slug": "applied-electromagnetics",
      "years": [
        {
          "year": 2024,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "四竈泰一"
          ],
          "status": "completed",
          "sourceFile": "応用電磁気学(四竃)2024.pdf",
          "sourcePages": [
            1,
            2
          ],
          "problemAssets": [
            "/exams/applied-electromagnetics/2024/page-1.webp",
            "/exams/applied-electromagnetics/2024/page-2.webp"
          ],
          "localPdfUrl": "/pdfs/applied-electromagnetics/2024.pdf",
          "sourceUrl": "https://drive.google.com/file/d/10LQ2H957-cAqFR5iaB9lHxRAU4Qcch06/edit",
          "pdfSourceFile": "応用電磁気学(四竃)2024.pdf",
          "introMarkdown": "> [!NOTE]\n> Webサイトでは問題文を元PDFどおりに表示し、解説とは別の領域に配置する。各ページに「PDFをブラウザで開く」と「元サイトで開く」のリンクを設置する。\n\n\n## 1. マクスウェル方程式\n\n一様な導体中で、自由電荷密度を0とした場合、\n\n\\[\n\\nabla\\cdot\\boldsymbol E=0,\n\\qquad\n\\nabla\\cdot\\boldsymbol B=0\n\\]\n\n\\[\n\\nabla\\times\\boldsymbol E\n=\n-\\frac{\\partial\\boldsymbol B}{\\partial t}\n\\]\n\n\\[\n\\nabla\\times\\boldsymbol B\n=\n\\mu\\sigma\\boldsymbol E\n+\n\\mu\\epsilon\n\\frac{\\partial\\boldsymbol E}{\\partial t}\n\\]\n\nを用いる。\n\nここで、\n\n- \\(\\epsilon\\)：導体の誘電率\n- \\(\\mu\\)：導体の透磁率\n- \\(\\sigma\\)：電気伝導率\n\nである。\n\n## 2. ベクトル恒等式\n\n任意のベクトル場 \\(\\boldsymbol A\\) に対して、\n\n\\[\n\\boxed{\n\\nabla\\times(\\nabla\\times\\boldsymbol A)\n=\n\\nabla(\\nabla\\cdot\\boldsymbol A)\n-\\nabla^2\\boldsymbol A\n}\n\\]\n\nが成り立つ。\n\n## 3. 複素表示\n\n実際の電場を複素数で表し、最後に実部を取る。\n\n\\[\n\\boldsymbol E(\\boldsymbol x,t)\n=\n\\operatorname{Re}\n\\left[\n\\widetilde{\\boldsymbol E}(\\boldsymbol x,t)\n\\right].\n\\]\n\n例えば、\n\n\\[\n\\widetilde{\\boldsymbol E}\n=\n\\boldsymbol E_0 e^{i(kz-\\omega t)}\n\\]\n\nと置けば、微分を掛け算へ変えられる。\n\n\\[\n\\frac{\\partial}{\\partial z}\\longleftrightarrow ik,\n\\qquad\n\\frac{\\partial}{\\partial t}\\longleftrightarrow-i\\omega.\n\\]\n\n## 4. 位相速度と群速度\n\n位相速度は、\n\n\\[\n\\boxed{v_{\\mathrm p}=\\frac{\\omega}{k}}\n\\]\n\n群速度は、\n\n\\[\n\\boxed{v_{\\mathrm g}=\\frac{d\\omega}{dk}}\n\\]\n\nである。\n\n- 位相速度：同じ位相の点が進む速度\n- 群速度：波束やエネルギーが伝わる速度\n\n## 5. 屈折率と誘電率\n\n非磁性体で \\(\\mu_r\\simeq1\\) の場合、\n\n\\[\n\\boxed{n^2\\simeq\\epsilon_r}\n\\]\n\nである。\n\n吸収がある場合は \\(\\epsilon_r\\) と \\(n\\) は複素数となるが、透明領域では実部を中心に考えられる。\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-1",
              "title": "電磁波の偏光",
              "markdown": "### 波の進行方向\n\n位相が一定の点を考える。\n\n\\[\n\\alpha z-\\omega t=\\text{一定}.\n\\]\n\nこれを \\(z\\) について解くと、\n\n\\[\nz=\\frac{\\omega}{\\alpha}t+\\text{一定}.\n\\]\n\n時間が増えると \\(z\\) が増えるため、この波は\n\n\\[\n\\boxed{+z\\text{ 方向へ進む}}\n\\]\n\nことが分かる。\n\n### 電場の向き\n\n電場は常に、\n\n\\[\n\\boldsymbol E_0\n=\n\\frac1{\\sqrt2}\n\\begin{pmatrix}\n1\\\\\n-1\\\\\n0\n\\end{pmatrix}\n\\]\n\nと同じ向きを向く。\n\nしたがって、\n\n\\[\nE_y=-E_x,\n\\qquad\nE_z=0.\n\\]\n\n電場ベクトルの先端は、時間が経過しても回転せず、\\(xy\\) 平面内の1本の直線上を往復する。\n\n### 最終解答\n\n\\[\n\\boxed{\\text{直線偏光}}\n\\]\n\nであり、偏光方向は\n\n\\[\n\\boxed{\n\\frac1{\\sqrt2}\n(\\boldsymbol e_x-\\boldsymbol e_y)\n}\n\\]\n\nである。\n\nすなわち、\\(xy\\) 平面内で \\(+x\\) 軸から \\(-y\\) 方向へ45度傾いた方向の直線偏光である。\n\nまた、振幅は\n\n\\[\ne^{-\\beta z}\n\\]\n\nに従って \\(+z\\) 方向へ進むにつれて減衰する。\n\n:::why title=\"円偏光や楕円偏光ではないの？\"\n円偏光や楕円偏光では、x成分とy成分の間に位相差があり、電場ベクトルの向きが時間とともに回転する。この問題では両成分が同じ \\(\\cos(\\alpha z-\\omega t)\\) を持つため、向きが固定されている。\n:::\n\n### 試験答案\n\n\\[\nE_y=-E_x,\\qquad E_z=0\n\\]\n\nであり、x成分とy成分の位相差は0である。したがって、電場ベクトルは\n\n\\[\n\\frac1{\\sqrt2}(1,-1,0)^T\n\\]\n\nの方向を往復する。\n\nよって、これは \\(xy\\) 平面内の直線偏光である。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "円偏光や楕円偏光ではないの？",
                  "markdown": "円偏光や楕円偏光では、x成分とy成分の間に位相差があり、電場ベクトルの向きが時間とともに回転する。この問題では両成分が同じ \\(\\cos(\\alpha z-\\omega t)\\) を持つため、向きが固定されている。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q1-2",
              "label": "Q1-2",
              "title": "減衰波の複素表示",
              "markdown": "### 解法方針\n\n\\[\nk=\\alpha+i\\beta\n\\]\n\nとすると、\n\n\\[\nikz=i\\alpha z-\\beta z.\n\\]\n\nしたがって、\n\n\\[\ne^{i(kz-\\omega t)}\n=\ne^{-\\beta z}\ne^{i(\\alpha z-\\omega t)}.\n\\]\n\nこの実部を取れば、\n\n\\[\ne^{-\\beta z}\\cos(\\alpha z-\\omega t)\n\\]\n\nが得られる。\n\n### 最終解答\n\n複素電場を、\n\n\\[\n\\boxed{\n\\widetilde{\\boldsymbol E}(\\boldsymbol x,t)\n=\n\\boldsymbol E_0\ne^{i(kz-\\omega t)}\n}\n\\]\n\nと置けば、\n\n\\[\n\\boxed{\n\\boldsymbol E(\\boldsymbol x,t)\n=\n\\operatorname{Re}\n\\left[\n\\boldsymbol E_0\ne^{i(kz-\\omega t)}\n\\right]\n}\n\\]\n\nである。\n\n:::why title=\"なぜ k=α+iβ で減衰を表せるの？\"\n指数の中で \\(ikz=i\\alpha z-\\beta z\\) となるため、実部 \\(\\alpha\\) は位相の進行を、虚部 \\(\\beta\\) は振幅の指数減衰を表す。\n:::\n\n### 重要ポイント\n\n- この符号規約では \\(e^{i(kz-\\omega t)}\\) を用いる。\n- \\(k=\\alpha+i\\beta\\) なので、\\(\\beta>0\\) なら \\(+z\\) 方向へ減衰する。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ k=α+iβ で減衰を表せるの？",
                  "markdown": "指数の中で \\(ikz=i\\alpha z-\\beta z\\) となるため、実部 \\(\\alpha\\) は位相の進行を、虚部 \\(\\beta\\) は振幅の指数減衰を表す。"
                }
              ],
              "importantPoints": [
                "この符号規約では \\(e^{i(kz-\\omega t)}\\) を用いる。",
                "\\(k=\\alpha+i\\beta\\) なので、\\(\\beta>0\\) なら \\(+z\\) 方向へ減衰する。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-3",
              "label": "Q1-3",
              "title": "導体中の電場の波動方程式",
              "markdown": "### Step 1：Faradayの法則の両辺に curl を取る\n\n\\[\n\\nabla\\times\\boldsymbol E\n=\n-\\frac{\\partial\\boldsymbol B}{\\partial t}.\n\\]\n\n両辺に \\(\\nabla\\times\\) を作用させる。\n\n\\[\n\\nabla\\times\n(\\nabla\\times\\boldsymbol E)\n=\n-\\frac{\\partial}{\\partial t}\n(\\nabla\\times\\boldsymbol B).\n\\]\n\n### Step 2：左辺をベクトル恒等式で変形する\n\n\\[\n\\nabla\\times\n(\\nabla\\times\\boldsymbol E)\n=\n\\nabla(\\nabla\\cdot\\boldsymbol E)\n-\\nabla^2\\boldsymbol E.\n\\]\n\n\\[\n\\nabla\\cdot\\boldsymbol E=0\n\\]\n\nなので、\n\n\\[\n\\nabla\\times\n(\\nabla\\times\\boldsymbol E)\n=\n-\\nabla^2\\boldsymbol E.\n\\]\n\n### Step 3：右辺へAmpère-Maxwellの法則を代入する\n\n\\[\n\\nabla\\times\\boldsymbol B\n=\n\\mu\\sigma\\boldsymbol E\n+\n\\mu\\epsilon\n\\frac{\\partial\\boldsymbol E}{\\partial t}.\n\\]\n\nしたがって、\n\n\\[\n-\\frac{\\partial}{\\partial t}\n(\\nabla\\times\\boldsymbol B)\n=\n-\\mu\\sigma\n\\frac{\\partial\\boldsymbol E}{\\partial t}\n-\\mu\\epsilon\n\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}.\n\\]\n\n### Step 4：両辺を整理する\n\n\\[\n-\\nabla^2\\boldsymbol E\n=\n-\\mu\\sigma\n\\frac{\\partial\\boldsymbol E}{\\partial t}\n-\\mu\\epsilon\n\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}.\n\\]\n\n両辺へ \\(-1\\) を掛けると、\n\n### 最終解答\n\n\\[\n\\boxed{\n\\nabla^2\\boldsymbol E\n=\n\\mu\\sigma\n\\frac{\\partial\\boldsymbol E}{\\partial t}\n+\n\\mu\\epsilon\n\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}\n}\n\\]\n\nまたは、\n\n\\[\n\\boxed{\n\\nabla^2\\boldsymbol E\n-\\mu\\epsilon\n\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}\n-\\mu\\sigma\n\\frac{\\partial\\boldsymbol E}{\\partial t}\n=0\n}\n\\]\n\nである。\n\n:::why title=\"真空中の波動方程式と何が違うの？\"\n導体では電流密度 \\(\\boldsymbol J=\\sigma\\boldsymbol E\\) が生じる。そのため、波動方程式に1階時間微分の項 \\(\\mu\\sigma\\partial_t\\boldsymbol E\\) が加わり、電磁波のエネルギーがジュール熱として失われて減衰する。\n:::\n\n### 試験答案\n\n\\[\n\\nabla\\times(\\nabla\\times\\boldsymbol E)\n=\n-\\frac{\\partial}{\\partial t}\n(\\nabla\\times\\boldsymbol B).\n\\]\n\n\\[\n\\nabla\\times(\\nabla\\times\\boldsymbol E)\n=\n\\nabla(\\nabla\\cdot\\boldsymbol E)-\\nabla^2\\boldsymbol E\n=\n-\\nabla^2\\boldsymbol E.\n\\]\n\n一方、\n\n\\[\n-\\partial_t(\\nabla\\times\\boldsymbol B)\n=\n-\\mu\\sigma\\partial_t\\boldsymbol E\n-\\mu\\epsilon\\partial_t^2\\boldsymbol E.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\nabla^2\\boldsymbol E\n=\n\\mu\\sigma\\partial_t\\boldsymbol E\n+\\mu\\epsilon\\partial_t^2\\boldsymbol E\n}.\n\\]\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "真空中の波動方程式と何が違うの？",
                  "markdown": "導体では電流密度 \\(\\boldsymbol J=\\sigma\\boldsymbol E\\) が生じる。そのため、波動方程式に1階時間微分の項 \\(\\mu\\sigma\\partial_t\\boldsymbol E\\) が加わり、電磁波のエネルギーがジュール熱として失われて減衰する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q1-4",
              "label": "Q1-4",
              "title": "導体中の分散関係",
              "markdown": "### 複素電場を波動方程式へ代入する\n\n\\[\n\\widetilde{\\boldsymbol E}\n=\n\\boldsymbol E_0\ne^{i(kz-\\omega t)}.\n\\]\n\nz方向だけに依存するため、\n\n\\[\n\\nabla^2\\widetilde{\\boldsymbol E}\n=\n\\frac{\\partial^2\\widetilde{\\boldsymbol E}}{\\partial z^2}\n=\n-k^2\\widetilde{\\boldsymbol E}.\n\\]\n\nまた、\n\n\\[\n\\frac{\\partial\\widetilde{\\boldsymbol E}}{\\partial t}\n=\n-i\\omega\\widetilde{\\boldsymbol E}\n\\]\n\n\\[\n\\frac{\\partial^2\\widetilde{\\boldsymbol E}}{\\partial t^2}\n=\n-\\omega^2\\widetilde{\\boldsymbol E}.\n\\]\n\n波動方程式へ代入すると、\n\n\\[\n-k^2\\widetilde{\\boldsymbol E}\n=\n-i\\mu\\sigma\\omega\\widetilde{\\boldsymbol E}\n-\\mu\\epsilon\\omega^2\\widetilde{\\boldsymbol E}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nk^2\n=\n\\mu\\epsilon\\omega^2+i\\mu\\sigma\\omega\n}\n\\]\n\nである。\n\n### \\(k=\\alpha+i\\beta\\) を代入する\n\n\\[\nk^2\n=\n(\\alpha+i\\beta)^2\n=\n\\alpha^2-\\beta^2+2i\\alpha\\beta.\n\\]\n\n一方、\n\n\\[\n\\mu\\epsilon\\omega^2+i\\mu\\sigma\\omega\n\\]\n\nの実部と虚部を比較する。\n\n### 最終解答\n\n\\[\n\\boxed{\n\\alpha^2-\\beta^2\n=\n\\mu\\epsilon\\omega^2\n}\n\\]\n\n\\[\n\\boxed{\n2\\alpha\\beta\n=\n\\mu\\sigma\\omega\n}\n\\]\n\nである。\n\n:::why title=\"なぜ実部と虚部を別々に比較できるの？\"\n複素数 \\(a+ib=c+id\\) が等しいためには、実部 \\(a=c\\) と虚部 \\(b=d\\) がそれぞれ等しくなければならないからである。\n:::\n\n### 参考：\\(\\alpha,\\beta\\) を解いた形\n\n2式から、\n\n\\[\n\\alpha^2+\\beta^2\n=\n\\mu\\omega\n\\sqrt{\\epsilon^2\\omega^2+\\sigma^2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\alpha\n=\n\\omega\n\\sqrt{\n\\frac{\\mu\\epsilon}{2}\n\\left[\n\\sqrt{\n1+\n\\left(\n\\frac{\\sigma}{\\epsilon\\omega}\n\\right)^2\n}\n+1\n\\right]\n}\n}\n\\]\n\n\\[\n\\boxed{\n\\beta\n=\n\\omega\n\\sqrt{\n\\frac{\\mu\\epsilon}{2}\n\\left[\n\\sqrt{\n1+\n\\left(\n\\frac{\\sigma}{\\epsilon\\omega}\n\\right)^2\n}\n-1\n\\right]\n}\n}\n\\]\n\nである。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ実部と虚部を別々に比較できるの？",
                  "markdown": "複素数 \\(a+ib=c+id\\) が等しいためには、実部 \\(a=c\\) と虚部 \\(b=d\\) がそれぞれ等しくなければならないからである。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-5",
              "label": "Q1-5",
              "title": "磁場の導出",
              "markdown": "### 複素表示で求める\n\nFaradayの法則は、\n\n\\[\n\\nabla\\times\\widetilde{\\boldsymbol E}\n=\n-\\frac{\\partial\\widetilde{\\boldsymbol B}}{\\partial t}.\n\\]\n\n平面波では、\n\n\\[\n\\nabla\\times\\widetilde{\\boldsymbol E}\n=\nik\\boldsymbol e_z\n\\times\n\\widetilde{\\boldsymbol E}.\n\\]\n\nまた、\n\n\\[\n-\\frac{\\partial\\widetilde{\\boldsymbol B}}{\\partial t}\n=\ni\\omega\\widetilde{\\boldsymbol B}.\n\\]\n\nしたがって、\n\n\\[\nik\\boldsymbol e_z\n\\times\n\\widetilde{\\boldsymbol E}\n=\ni\\omega\\widetilde{\\boldsymbol B}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\widetilde{\\boldsymbol B}\n=\n\\frac{k}{\\omega}\n\\boldsymbol e_z\n\\times\n\\widetilde{\\boldsymbol E}\n}\n\\]\n\nである。\n\n### 偏光方向を計算する\n\n\\[\n\\boldsymbol e_z\n\\times\n\\boldsymbol E_0\n=\n\\frac1{\\sqrt2}\n\\begin{pmatrix}\n1\\\\\n1\\\\\n0\n\\end{pmatrix}.\n\\]\n\nしたがって、\n\n\\[\n\\widetilde{\\boldsymbol B}\n=\n\\frac{\\alpha+i\\beta}{\\omega}\n\\frac1{\\sqrt2}\n\\begin{pmatrix}\n1\\\\\n1\\\\\n0\n\\end{pmatrix}\ne^{-\\beta z}\ne^{i(\\alpha z-\\omega t)}.\n\\]\n\n実部を取る。\n\n\\[\n\\operatorname{Re}\n\\left[\n(\\alpha+i\\beta)\ne^{i\\phi}\n\\right]\n=\n\\alpha\\cos\\phi-\\beta\\sin\\phi\n\\]\n\nただし、\n\n\\[\n\\phi=\\alpha z-\\omega t.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\boldsymbol B(\\boldsymbol x,t)\n=\n\\frac{e^{-\\beta z}}{\\sqrt2\\,\\omega}\n\\begin{pmatrix}\n1\\\\\n1\\\\\n0\n\\end{pmatrix}\n\\left[\n\\alpha\\cos(\\alpha z-\\omega t)\n-\n\\beta\\sin(\\alpha z-\\omega t)\n\\right]\n}\n\\]\n\nである。\n\n別の表現として、\n\n\\[\n\\delta=\\tan^{-1}\\left(\\frac{\\beta}{\\alpha}\\right)\n\\]\n\nと置けば、\n\n\\[\n\\boxed{\n\\boldsymbol B\n=\n\\frac{\\sqrt{\\alpha^2+\\beta^2}}{\\sqrt2\\,\\omega}\ne^{-\\beta z}\n\\begin{pmatrix}\n1\\\\\n1\\\\\n0\n\\end{pmatrix}\n\\cos(\\alpha z-\\omega t+\\delta)\n}\n\\]\n\nとも書ける。\n\n### 向きの確認\n\n\\[\n\\boldsymbol E_0\n\\cdot\n\\begin{pmatrix}\n1\\\\\n1\\\\\n0\n\\end{pmatrix}\n=0.\n\\]\n\nしたがって、電場と磁場は互いに直交する。\n\nまた、\n\n\\[\n\\boldsymbol E_0\n\\times\n\\left[\n\\frac1{\\sqrt2}\n\\begin{pmatrix}\n1\\\\\n1\\\\\n0\n\\end{pmatrix}\n\\right]\n=\n\\boldsymbol e_z.\n\\]\n\nよって、エネルギーの流れる向きは \\(+z\\) 方向である。\n\n:::why title=\"導体中では E と B に位相差があるの？\"\n複素波数 \\(k=\\alpha+i\\beta\\) が磁場の係数に掛かるため、磁場には余弦項だけでなく正弦項も現れる。これは導体中で電場と磁場の位相が完全には一致しないことを表す。\n:::\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "導体中では E と B に位相差があるの？",
                  "markdown": "複素波数 \\(k=\\alpha+i\\beta\\) が磁場の係数に掛かるため、磁場には余弦項だけでなく正弦項も現れる。これは導体中で電場と磁場の位相が完全には一致しないことを表す。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-1",
              "label": "Q2-1",
              "title": "クーロン核の勾配",
              "markdown": "### 解法方針\n\n差のベクトルを、\n\n\\[\n\\boldsymbol r\n=\n\\boldsymbol x-\\boldsymbol x'\n\\]\n\nと置く。\n\n\\[\nr=|\\boldsymbol r|\n=\n|\\boldsymbol x-\\boldsymbol x'|.\n\\]\n\nただし、微分は \\(\\boldsymbol x'\\) について行う。\n\n### 成分表示\n\n\\[\nr\n=\n\\sqrt{\n(x-x')^2+\n(y-y')^2+\n(z-z')^2\n}.\n\\]\n\nまずx'成分を計算する。\n\n\\[\n\\frac{\\partial}{\\partial x'}\n\\left(\n\\frac1r\n\\right)\n=\n-\\frac1{r^2}\n\\frac{\\partial r}{\\partial x'}.\n\\]\n\n\\[\n\\frac{\\partial r}{\\partial x'}\n=\n\\frac{x'-x}{r}.\n\\]\n\nしたがって、\n\n\\[\n\\frac{\\partial}{\\partial x'}\n\\left(\n\\frac1r\n\\right)\n=\n-\\frac1{r^2}\n\\frac{x'-x}{r}\n=\n\\frac{x-x'}{r^3}.\n\\]\n\n同様に、\n\n\\[\n\\frac{\\partial}{\\partial y'}\n\\left(\n\\frac1r\n\\right)\n=\n\\frac{y-y'}{r^3}\n\\]\n\n\\[\n\\frac{\\partial}{\\partial z'}\n\\left(\n\\frac1r\n\\right)\n=\n\\frac{z-z'}{r^3}.\n\\]\n\nよって、\n\n### 最終解答\n\n\\[\n\\boxed{\n\\nabla'\n\\left(\n\\frac1{|\\boldsymbol x-\\boldsymbol x'|}\n\\right)\n=\n\\frac{\\boldsymbol x-\\boldsymbol x'}\n{|\\boldsymbol x-\\boldsymbol x'|^3}\n}\n\\]\n\nである。\n\n:::why title=\"x で微分するときと符号が逆になるの？\"\n\\(\\boldsymbol x-\\boldsymbol x'\\) は、\\(\\boldsymbol x'\\) で微分すると \\(-1\\) が出る。さらに \\(1/r\\) の微分でも \\(-1\\) が出るため、2つの負号が打ち消し合って正になる。\n:::\n\n### 比較\n\n\\(\\boldsymbol x\\) について微分する場合は、\n\n\\[\n\\nabla\n\\left(\n\\frac1{|\\boldsymbol x-\\boldsymbol x'|}\n\\right)\n=\n-\\frac{\\boldsymbol x-\\boldsymbol x'}\n{|\\boldsymbol x-\\boldsymbol x'|^3}.\n\\]\n\nしたがって、\n\n\\[\n\\nabla'=-\\nabla\n\\]\n\nの関係が見える。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "x で微分するときと符号が逆になるの？",
                  "markdown": "\\(\\boldsymbol x-\\boldsymbol x'\\) は、\\(\\boldsymbol x'\\) で微分すると \\(-1\\) が出る。さらに \\(1/r\\) の微分でも \\(-1\\) が出るため、2つの負号が打ち消し合って正になる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2",
              "label": "Q2-2",
              "title": "矩形導波管の位相速度と群速度",
              "markdown": "### 分散関係式を光速で書く\n\n真空中では、\n\n\\[\n\\mu_0\\epsilon_0=\\frac1{c^2}.\n\\]\n\nしたがって、\n\n\\[\nk^2\n=\n\\frac1{c^2}\n(\\omega^2-\\omega_c^2).\n\\]\n\n伝搬するためには、\n\n\\[\n\\omega>\\omega_c\n\\]\n\nが必要である。\n\n\\[\n\\boxed{\nk\n=\n\\frac1c\n\\sqrt{\\omega^2-\\omega_c^2}\n}\n\\]\n\nである。\n\n### 位相速度\n\n\\[\nv_{\\mathrm p}\n=\n\\frac{\\omega}{k}.\n\\]\n\nしたがって、\n\n\\[\nv_{\\mathrm p}\n=\n\\frac{c\\omega}\n{\\sqrt{\\omega^2-\\omega_c^2}}.\n\\]\n\n\\[\n\\boxed{\nv_{\\mathrm p}\n=\n\\frac{c}\n{\\sqrt{\n1-(\\omega_c/\\omega)^2\n}}\n}\n\\]\n\nである。\n\n\\[\n0<\n1-\\left(\\frac{\\omega_c}{\\omega}\\right)^2\n<1\n\\]\n\nなので、\n\n\\[\n\\boxed{v_{\\mathrm p}>c}.\n\\]\n\n:::why title=\"位相速度が光速を超えても相対論に反しないの？\"\n位相速度は波の山や谷の位置が進む速度であり、情報やエネルギーそのものの伝搬速度ではない。情報伝達に関係する群速度は光速未満になる。\n:::\n\n### 群速度\n\n分散関係を、\n\n\\[\n\\omega^2=c^2k^2+\\omega_c^2\n\\]\n\nと書く。\n\n両辺を \\(k\\) で微分する。\n\n\\[\n2\\omega\\frac{d\\omega}{dk}\n=\n2c^2k.\n\\]\n\nしたがって、\n\n\\[\nv_{\\mathrm g}\n=\n\\frac{d\\omega}{dk}\n=\n\\frac{c^2k}{\\omega}.\n\\]\n\n\\(k\\) を代入すると、\n\n\\[\n\\boxed{\nv_{\\mathrm g}\n=\nc\n\\sqrt{\n1-\\left(\n\\frac{\\omega_c}{\\omega}\n\\right)^2\n}\n}\n\\]\n\nである。\n\nしたがって、\n\n\\[\n\\boxed{v_{\\mathrm g}<c}.\n\\]\n\nまた、\n\n\\[\n\\boxed{\nv_{\\mathrm p}v_{\\mathrm g}=c^2\n}\n\\]\n\nである。\n\n### 遮断周波数付近\n\n\\[\n\\omega\\to\\omega_c+0\n\\]\n\nでは、\n\n\\[\nv_{\\mathrm p}\\to\\infty\n\\]\n\n\\[\nv_{\\mathrm g}\\to0.\n\\]\n\n### 高周波極限\n\n\\[\n\\omega\\gg\\omega_c\n\\]\n\nでは、\n\n\\[\nv_{\\mathrm p}\\to c,\n\\qquad\nv_{\\mathrm g}\\to c.\n\\]\n\n### 試験答案\n\n\\[\nk\n=\n\\frac1c\\sqrt{\\omega^2-\\omega_c^2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nv_{\\mathrm p}\n=\n\\frac{\\omega}{k}\n=\n\\frac{c}\n{\\sqrt{1-(\\omega_c/\\omega)^2}}\n>c\n}\n\\]\n\nである。\n\nまた、\n\n\\[\n\\omega^2=c^2k^2+\\omega_c^2\n\\]\n\nを微分して、\n\n\\[\n\\boxed{\nv_{\\mathrm g}\n=\n\\frac{d\\omega}{dk}\n=\n\\frac{c^2k}{\\omega}\n=\nc\\sqrt{1-(\\omega_c/\\omega)^2}\n<c\n}.\n\\]\n\nさらに、\n\n\\[\nv_{\\mathrm p}v_{\\mathrm g}=c^2.\n\\]\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "位相速度が光速を超えても相対論に反しないの？",
                  "markdown": "位相速度は波の山や谷の位置が進む速度であり、情報やエネルギーそのものの伝搬速度ではない。情報伝達に関係する群速度は光速未満になる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-3",
              "label": "Q2-3",
              "title": "ローレンツモデルと正常分散",
              "markdown": "### 比誘電率\n\n\\[\n\\epsilon_r(\\omega)\n=\n\\frac{\\epsilon(\\omega)}{\\epsilon_0}.\n\\]\n\n定数を、\n\n\\[\nA\n=\n\\frac{Ne^2f}{m_e\\epsilon_0}\n\\]\n\nと置くと、\n\n\\[\n\\epsilon_r(\\omega)\n=\n1+\n\\frac{A}\n{\\omega_0^2-\\omega^2-i\\gamma\\omega}.\n\\]\n\n### 実部と虚部\n\n\\[\n\\Delta=\\omega_0^2-\\omega^2\n\\]\n\nと置く。\n\n\\[\n\\frac1{\\Delta-i\\gamma\\omega}\n=\n\\frac{\\Delta+i\\gamma\\omega}\n{\\Delta^2+\\gamma^2\\omega^2}.\n\\]\n\nしたがって、\n\n\\[\n\\operatorname{Re}\\epsilon_r\n=\n1+\nA\n\\frac{\\Delta}\n{\\Delta^2+\\gamma^2\\omega^2}\n\\]\n\n\\[\n\\operatorname{Im}\\epsilon_r\n=\nA\n\\frac{\\gamma\\omega}\n{\\Delta^2+\\gamma^2\\omega^2}.\n\\]\n\n虚部は吸収を表す。\n\n正常分散を考える透明領域では、共鳴から十分離れており吸収が小さいので、\n\n\\[\n\\gamma\\omega\n\\ll\n|\\omega_0^2-\\omega^2|\n\\]\n\nと考えられる。\n\nこのとき、\n\n\\[\n\\epsilon_r\n\\simeq\n1+\n\\frac{A}{\\omega_0^2-\\omega^2}.\n\\]\n\n非磁性体なら、\n\n\\[\nn^2\\simeq\\epsilon_r.\n\\]\n\n---\n\n### (1) 角周波数への依存性\n\n共鳴より低い透明領域\n\n\\[\n\\omega<\\omega_0\n\\]\n\nを考える。\n\n\\[\nn^2\n\\simeq\n1+\n\\frac{A}{\\omega_0^2-\\omega^2}.\n\\]\n\n右辺を \\(\\omega\\) で微分すると、\n\n\\[\n\\frac{d(n^2)}{d\\omega}\n=\n\\frac{2A\\omega}\n{(\\omega_0^2-\\omega^2)^2}\n>0.\n\\]\n\n\\(n>0\\) なので、\n\n\\[\n2n\\frac{dn}{d\\omega}\n=\n\\frac{d(n^2)}{d\\omega}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{dn}{d\\omega}>0\n}\n\\]\n\nである。\n\nつまり、正常分散では、\n\n\\[\n\\boxed{\n\\text{角周波数 }\\omega\\text{ が大きくなるほど、屈折率 }n\\text{ は大きくなる}\n}\n\\]\n\nと説明できる。\n\n波長 \\(\\lambda\\) は周波数と逆の関係にあるので、\n\n\\[\n\\boxed{\n\\text{波長が長くなるほど、屈折率は小さくなる}\n}\n\\]\n\nとも言える。\n\n:::why title=\"共鳴の近くを除く必要があるの？\"\n共鳴周波数付近では吸収が強くなり、屈折率の変化が正常分散とは逆になる異常分散領域が現れる場合がある。この問題では「正常分散になる場合」なので、吸収の小さい領域を考える。\n:::\n\n---\n\n### (2) 誘電体の密度への依存性\n\n電子の数密度 \\(N\\) は、誘電体の物質密度にほぼ比例する。\n\n\\[\nA=\n\\frac{Ne^2f}{m_e\\epsilon_0}\n\\]\n\nなので、\\(\\epsilon_r-1\\) は \\(N\\) に比例する。\n\n共鳴より低い透明領域では、\n\n\\[\n\\omega_0^2-\\omega^2>0.\n\\]\n\nしたがって、\n\n\\[\n\\frac{\\partial(n^2)}{\\partial N}\n=\n\\frac{e^2f}\n{m_e\\epsilon_0(\\omega_0^2-\\omega^2)}\n>0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\text{誘電体の密度が大きいほど、屈折率は大きくなる}\n}\n\\]\n\nと説明できる。\n\n低密度で\n\n\\[\n|n-1|\\ll1\n\\]\n\nなら、\n\n\\[\nn\n=\n\\sqrt{1+CN}\n\\simeq\n1+\\frac{CN}{2}\n\\]\n\nなので、\n\n\\[\n\\boxed{n-1\\propto N}\n\\]\n\nと近似できる。\n\n### より厳密な注意\n\n実部を厳密に使うと、\n\n\\[\n\\frac{\\partial\\operatorname{Re}\\epsilon_r}{\\partial N}\n=\n\\frac{e^2f}{m_e\\epsilon_0}\n\\frac{\\omega_0^2-\\omega^2}\n{(\\omega_0^2-\\omega^2)^2+\\gamma^2\\omega^2}.\n\\]\n\nしたがって、密度増加による屈折率の増減の符号は共鳴のどちら側かにも依存する。\n\nただし、通常の透明な正常分散領域として共鳴より低い側を考えれば、密度が増えるほど屈折率は増える。\n\n### 試験答案\n\n共鳴から十分離れた透明領域では、\n\n\\[\nn^2\\simeq\\epsilon_r\n\\simeq\n1+\n\\frac{Ne^2f}\n{m_e\\epsilon_0(\\omega_0^2-\\omega^2)}.\n\\]\n\n共鳴より低い正常分散領域 \\(\\omega<\\omega_0\\) では、\n\n\\[\n\\frac{d(n^2)}{d\\omega}\n=\n\\frac{2Ne^2f\\omega}\n{m_e\\epsilon_0(\\omega_0^2-\\omega^2)^2}\n>0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\\frac{dn}{d\\omega}>0}\n\\]\n\nであり、周波数が増えると屈折率も増える。\n\nまた、\n\n\\[\nn^2-1\\propto N\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\text{電子数密度、したがって誘電体の密度が増えると屈折率は増える}\n}\n\\]\n\nと分かる。\n\n# 年度全体の重要ポイント\n\n- 複素波数の実部 \\(\\alpha\\) は位相定数、虚部 \\(\\beta\\) は減衰定数である。\n- 導体中の波動方程式には、電気伝導による1階時間微分項が現れる。\n- 分散関係では、複素数の実部と虚部を分けて比較する。\n- 導体中では、電場と磁場に位相差が生じる。\n- 導波管では位相速度が光速を超えるが、群速度は光速を超えない。\n- ローレンツモデルでは、共鳴付近の吸収と分散を同時に説明できる。",
              "major": "2",
              "why": [
                {
                  "title": "共鳴の近くを除く必要があるの？",
                  "markdown": "共鳴周波数付近では吸収が強くなり、屈折率の変化が正常分散とは逆になる異常分散領域が現れる場合がある。この問題では「正常分散になる場合」なので、吸収の小さい領域を考える。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            }
          ]
        },
        {
          "year": 2023,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "四竈泰一"
          ],
          "status": "completed",
          "sourceFile": "物工・応用電磁気学(四竃)2023.pdf",
          "sourcePages": [
            1,
            2
          ],
          "problemAssets": [
            "/exams/applied-electromagnetics/2023/page-1.webp",
            "/exams/applied-electromagnetics/2023/page-2.webp"
          ],
          "localPdfUrl": "/pdfs/applied-electromagnetics/2023.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1obW9TWGTKLiZGkQM-5Tz8IiL08On4j77/edit",
          "pdfSourceFile": "物工・応用電磁気学(四竃)2023.pdf",
          "introMarkdown": "> [!NOTE]\n> Webサイトでは問題文を元PDFどおりに表示し、解説とは別の領域に配置する。各年度ページに「PDFをブラウザで開く」と「元サイトで開く」のリンクを設置する。\n\n\n## 1. 真空中のマクスウェル方程式\n\n自由電荷と電流がない真空中では、\n\n\\[\n\\nabla\\cdot\\boldsymbol E=0,\n\\qquad\n\\nabla\\cdot\\boldsymbol B=0\n\\]\n\n\\[\n\\nabla\\times\\boldsymbol E\n=\n-\\frac{\\partial\\boldsymbol B}{\\partial t}\n\\]\n\n\\[\n\\nabla\\times\\boldsymbol B\n=\n\\mu_0\\epsilon_0\n\\frac{\\partial\\boldsymbol E}{\\partial t}\n\\]\n\nが成り立つ。\n\n真空中の光速は、\n\n\\[\n\\boxed{\nc=\\frac1{\\sqrt{\\mu_0\\epsilon_0}}\n}\n\\]\n\nである。\n\n## 2. 平面電磁波\n\n\\[\n\\boldsymbol E\n=\n\\boldsymbol E_0\\cos(\\boldsymbol k\\cdot\\boldsymbol x-\\omega t)\n\\]\n\nの形の波を考える。\n\n真空中の平面波では、\n\n\\[\n\\boxed{\n\\boldsymbol k\\perp\\boldsymbol E,\n\\qquad\n\\boldsymbol k\\perp\\boldsymbol B,\n\\qquad\n\\boldsymbol E\\perp\\boldsymbol B\n}\n\\]\n\nであり、\n\n\\[\n\\boxed{\n\\boldsymbol B\n=\n\\frac1\\omega\n\\boldsymbol k\\times\\boldsymbol E\n}\n\\]\n\nが成り立つ。\n\n## 3. ポインティングベクトル\n\n真空中での電磁エネルギーの流れを表すベクトルは、\n\n\\[\n\\boxed{\n\\boldsymbol S\n=\n\\frac1{\\mu_0}\n\\boldsymbol E\\times\\boldsymbol B\n}\n\\]\n\nである。\n\n正弦波について、\n\n\\[\n\\left\\langle\\cos^2(\\cdots)\\right\\rangle_t\n=\n\\frac12\n\\]\n\nなので、時間平均を求めるときに用いる。\n\n## 4. 動径の微分\n\n\\[\nr=|\\boldsymbol x|\n=\n\\sqrt{x^2+y^2+z^2}\n\\]\n\nとすると、\n\n\\[\n\\boxed{\n\\nabla r=\\frac{\\boldsymbol x}{r}\n}\n\\]\n\nである。\n\n## 5. 位相速度と群速度\n\n位相速度は、\n\n\\[\n\\boxed{\nv_{\\mathrm p}=\\frac{\\omega}{k}\n}\n\\]\n\n群速度は、\n\n\\[\n\\boxed{\nv_{\\mathrm g}=\\frac{d\\omega}{dk}\n}\n\\]\n\nである。\n\n## 6. 電力透過率\n\n媒質1から媒質2へ平面波が入射するとき、電場振幅透過係数を\n\n\\[\nt_E=\\frac{E_0''}{E_0}\n\\]\n\nとすると、電力透過率は、\n\n\\[\n\\boxed{\nT\n=\n\\frac{n_2\\cos\\theta_2}\n{n_1\\cos\\theta_1}\n|t_E|^2\n}\n\\]\n\nで与えられる。\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-1",
              "title": "平面電磁波の偏光",
              "markdown": "### \\(z=0\\) における電場成分\n\n\\[\n\\cos(kz-\\omega t)\n\\]\n\nへ \\(z=0\\) を代入する。\n\n\\[\n\\cos(-\\omega t)=\\cos\\omega t\n\\]\n\nなので、\n\n\\[\nE_x(t)\n=\n\\frac{E_0}{2}\\cos\\omega t\n\\]\n\n\\[\nE_y(t)\n=\n\\frac{\\sqrt3E_0}{2}\\cos\\omega t.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nE_y=\\sqrt3E_x\n}\n\\]\n\nである。\n\n### \\(E_xE_y\\) 平面上の軌跡\n\n電場ベクトルの先端は、\n\n\\[\nE_y=\\sqrt3E_x\n\\]\n\nという原点を通る直線上を往復する。\n\n成分の最大値は、\n\n\\[\n|E_x|\\le\\frac{|E_0|}{2}\n\\]\n\n\\[\n|E_y|\\le\\frac{\\sqrt3|E_0|}{2}\n\\]\n\nである。\n\n電場の向きは、\n\n\\[\n\\boldsymbol e_{\\mathrm pol}\n=\n\\begin{pmatrix}\n1/2\\\\\n\\sqrt3/2\\\\\n0\n\\end{pmatrix}.\n\\]\n\nx軸との角度を \\(\\vartheta\\) とすると、\n\n\\[\n\\tan\\vartheta\n=\n\\frac{\\sqrt3/2}{1/2}\n=\n\\sqrt3.\n\\]\n\nよって、\n\n\\[\n\\vartheta=\\frac{\\pi}{3}=60^\\circ.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\\text{直線偏光}}\n\\]\n\nであり、偏光方向は、\n\n\\[\n\\boxed{\n\\boldsymbol e_{\\mathrm pol}\n=\n\\frac12\\boldsymbol e_x\n+\n\\frac{\\sqrt3}{2}\\boldsymbol e_y\n}\n\\]\n\nすなわち、x軸から反時計回りに60度の方向である。\n\n:::why title=\"なぜ円偏光や楕円偏光ではないの？\"\nx成分とy成分が同じ \\(\\cos\\omega t\\) を持ち、両者の位相差が0だからである。成分比が常に一定なので、電場の向きは回転しない。\n:::\n\n### 試験答案\n\n\\[\nE_x=\\frac{E_0}{2}\\cos\\omega t,\n\\qquad\nE_y=\\frac{\\sqrt3E_0}{2}\\cos\\omega t.\n\\]\n\nしたがって、\n\n\\[\nE_y=\\sqrt3E_x.\n\\]\n\nよって、電場の先端は原点を通りx軸となす角が60度の直線上を往復するため、直線偏光である。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ円偏光や楕円偏光ではないの？",
                  "markdown": "x成分とy成分が同じ \\(\\cos\\omega t\\) を持ち、両者の位相差が0だからである。成分比が常に一定なので、電場の向きは回転しない。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q1-2",
              "label": "Q1-2",
              "title": "真空中の分散関係",
              "markdown": "### 電場の波動方程式\n\nFaradayの法則の両辺に curl を取る。\n\n\\[\n\\nabla\\times(\\nabla\\times\\boldsymbol E)\n=\n-\\frac{\\partial}{\\partial t}\n(\\nabla\\times\\boldsymbol B).\n\\]\n\nベクトル恒等式、\n\n\\[\n\\nabla\\times(\\nabla\\times\\boldsymbol E)\n=\n\\nabla(\\nabla\\cdot\\boldsymbol E)\n-\\nabla^2\\boldsymbol E\n\\]\n\nと、\n\n\\[\n\\nabla\\cdot\\boldsymbol E=0\n\\]\n\nを使うと、\n\n\\[\n-\\nabla^2\\boldsymbol E\n=\n-\\mu_0\\epsilon_0\n\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\nabla^2\\boldsymbol E\n=\n\\mu_0\\epsilon_0\n\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}\n}\n\\]\n\nである。\n\n### 平面波を代入する\n\n\\[\n\\frac{\\partial^2\\boldsymbol E}{\\partial z^2}\n=\n-k^2\\boldsymbol E\n\\]\n\n\\[\n\\frac{\\partial^2\\boldsymbol E}{\\partial t^2}\n=\n-\\omega^2\\boldsymbol E.\n\\]\n\n波動方程式へ代入すると、\n\n\\[\n-k^2\\boldsymbol E\n=\n-\\mu_0\\epsilon_0\\omega^2\\boldsymbol E.\n\\]\n\nよって、\n\n\\[\nk^2\n=\n\\mu_0\\epsilon_0\\omega^2.\n\\]\n\n\\(k,\\omega>0\\) なので、\n\n### 最終解答\n\n\\[\n\\boxed{\nk\n=\n\\sqrt{\\mu_0\\epsilon_0}\\,\\omega\n=\n\\frac{\\omega}{c}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ正の平方根だけを選ぶの？\"\n問題文で \\(k,\\omega\\) が正の実数と指定されているからである。また、位相 \\(kz-\\omega t\\) は \\(+z\\) 方向へ進む波を表す。\n:::\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ正の平方根だけを選ぶの？",
                  "markdown": "問題文で \\(k,\\omega\\) が正の実数と指定されているからである。また、位相 \\(kz-\\omega t\\) は \\(+z\\) 方向へ進む波を表す。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-3",
              "label": "Q1-3",
              "title": "磁場の導出",
              "markdown": "### Faradayの法則を使う\n\n電場を、\n\n\\[\n\\boldsymbol E\n=\nE_0\\boldsymbol e_{\\mathrm pol}\n\\cos\\phi\n\\]\n\nと置く。\n\n\\[\n\\phi=kz-\\omega t\n\\]\n\n\\[\n\\boldsymbol e_{\\mathrm pol}\n=\n\\begin{pmatrix}\n1/2\\\\\n\\sqrt3/2\\\\\n0\n\\end{pmatrix}.\n\\]\n\n真空中の平面波では、\n\n\\[\n\\boldsymbol B\n=\n\\frac1\\omega\n\\boldsymbol k\\times\\boldsymbol E\n\\]\n\nである。\n\n\\[\n\\boldsymbol k=k\\boldsymbol e_z.\n\\]\n\nしたがって、\n\n\\[\n\\boldsymbol B\n=\n\\frac{k}{\\omega}\n\\boldsymbol e_z\n\\times\n\\boldsymbol E.\n\\]\n\n### 外積を計算する\n\n\\[\n\\boldsymbol e_z\n\\times\n\\begin{pmatrix}\n1/2\\\\\n\\sqrt3/2\\\\\n0\n\\end{pmatrix}\n=\n\\begin{pmatrix}\n-\\sqrt3/2\\\\\n1/2\\\\\n0\n\\end{pmatrix}.\n\\]\n\nまた、\n\n\\[\n\\frac{k}{\\omega}\n=\n\\frac1c.\n\\]\n\nしたがって、\n\n### 最終解答\n\n\\[\n\\boxed{\n\\boldsymbol B(\\boldsymbol x,t)\n=\n\\frac{E_0}{c}\n\\begin{pmatrix}\n-\\sqrt3/2\\\\\n1/2\\\\\n0\n\\end{pmatrix}\n\\cos(kz-\\omega t)\n}\n\\]\n\nである。\n\n\\[\nc=\\frac1{\\sqrt{\\mu_0\\epsilon_0}}\n\\]\n\nを用いれば、\n\n\\[\n\\boxed{\n\\boldsymbol B\n=\nE_0\\sqrt{\\mu_0\\epsilon_0}\n\\begin{pmatrix}\n-\\sqrt3/2\\\\\n1/2\\\\\n0\n\\end{pmatrix}\n\\cos(kz-\\omega t)\n}\n\\]\n\nとも書ける。\n\n:::why title=\"磁場の向きはどうやって確認するの？\"\n波の進行方向は \\(\\boldsymbol E\\times\\boldsymbol B\\) の向きである。上の磁場を使うと \\(\\boldsymbol E\\times\\boldsymbol B\\) は \\(+z\\) 方向となり、位相から分かる進行方向と一致する。\n:::\n\n### 計算による確認\n\n\\[\n\\boldsymbol e_{\\mathrm pol}\n\\cdot\n\\begin{pmatrix}\n-\\sqrt3/2\\\\\n1/2\\\\\n0\n\\end{pmatrix}\n=\n-\\frac{\\sqrt3}{4}\n+\n\\frac{\\sqrt3}{4}\n=0.\n\\]\n\nしたがって、\n\n\\[\n\\boldsymbol E\\perp\\boldsymbol B.\n\\]\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "磁場の向きはどうやって確認するの？",
                  "markdown": "波の進行方向は \\(\\boldsymbol E\\times\\boldsymbol B\\) の向きである。上の磁場を使うと \\(\\boldsymbol E\\times\\boldsymbol B\\) は \\(+z\\) 方向となり、位相から分かる進行方向と一致する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-4",
              "label": "Q1-4",
              "title": "時間平均ポインティングベクトル",
              "markdown": "### 瞬時のポインティングベクトル\n\n\\[\n\\boldsymbol S\n=\n\\frac1{\\mu_0}\n\\boldsymbol E\\times\\boldsymbol B.\n\\]\n\n電場と磁場の振幅方向は互いに直交し、両方の単位ベクトルの大きさは1である。\n\nまた、\n\n\\[\n\\boldsymbol e_{\\mathrm pol}\n\\times\n\\begin{pmatrix}\n-\\sqrt3/2\\\\\n1/2\\\\\n0\n\\end{pmatrix}\n=\n\\boldsymbol e_z.\n\\]\n\nしたがって、\n\n\\[\n\\boldsymbol S(\\boldsymbol x,t)\n=\n\\frac{E_0^2}{\\mu_0c}\n\\cos^2(kz-\\omega t)\n\\boldsymbol e_z.\n\\]\n\n### 時間平均\n\n\\[\n\\left\\langle\\cos^2(kz-\\omega t)\\right\\rangle_t\n=\n\\frac12.\n\\]\n\nよって、\n\n### 最終解答\n\n\\[\n\\boxed{\n\\left\\langle\\boldsymbol S\\right\\rangle\n=\n\\frac{E_0^2}{2\\mu_0c}\n\\boldsymbol e_z\n}\n\\]\n\nである。\n\n\\[\n\\frac1{\\mu_0c}\n=\n\\epsilon_0c\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\left\\langle\\boldsymbol S\\right\\rangle\n=\n\\frac12\\epsilon_0cE_0^2\n\\boldsymbol e_z\n}\n\\]\n\nとも書ける。\n\n### 大きさと向き\n\n大きさは、\n\n\\[\n\\boxed{\n\\left|\n\\left\\langle\\boldsymbol S\\right\\rangle\n\\right|\n=\n\\frac{E_0^2}{2\\mu_0c}\n=\n\\frac12\\epsilon_0cE_0^2\n}\n\\]\n\n向きは、\n\n\\[\n\\boxed{+z\\text{ 方向}}\n\\]\n\nである。\n\n:::why title=\"なぜ時間平均で 1/2 が現れるの？\"\n電磁エネルギー流は電場と磁場の積に比例するため、正弦波では \\(\\cos^2\\) が現れる。1周期平均は \\(1/2\\) である。\n:::\n\n### 試験答案\n\n\\[\n\\boldsymbol S\n=\n\\frac1{\\mu_0}\\boldsymbol E\\times\\boldsymbol B\n=\n\\frac{E_0^2}{\\mu_0c}\n\\cos^2(kz-\\omega t)\n\\boldsymbol e_z.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\langle\\boldsymbol S\\rangle\n=\n\\frac{E_0^2}{2\\mu_0c}\n\\boldsymbol e_z\n=\n\\frac12\\epsilon_0cE_0^2\n\\boldsymbol e_z\n}.\n\\]\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ時間平均で 1/2 が現れるの？",
                  "markdown": "電磁エネルギー流は電場と磁場の積に比例するため、正弦波では \\(\\cos^2\\) が現れる。1周期平均は \\(1/2\\) である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q2-1",
              "label": "Q2-1",
              "title": "動径の勾配",
              "markdown": "### \\(\\nabla r\\)\n\n\\[\nr=\\sqrt{x^2+y^2+z^2}.\n\\]\n\nx成分は、\n\n\\[\n\\frac{\\partial r}{\\partial x}\n=\n\\frac{x}{r}.\n\\]\n\n同様に、\n\n\\[\n\\frac{\\partial r}{\\partial y}\n=\n\\frac{y}{r}\n\\]\n\n\\[\n\\frac{\\partial r}{\\partial z}\n=\n\\frac{z}{r}.\n\\]\n\nしたがって、\n\n\\[\n\\nabla r\n=\n\\begin{pmatrix}\nx/r\\\\\ny/r\\\\\nz/r\n\\end{pmatrix}.\n\\]\n\n### 最終解答1\n\n\\[\n\\boxed{\n\\nabla r\n=\n\\frac{\\boldsymbol x}{r}\n}\n\\]\n\nである。\n\n:::why title=\"∇r は何を表すの？\"\n\\(r\\) が最も急激に増える方向は原点から外向きの動径方向である。その単位ベクトルが \\(\\boldsymbol x/r\\) である。\n:::\n\n---\n\n### \\(\\nabla(1/r)\\)\n\n連鎖律より、\n\n\\[\n\\nabla\\left(\\frac1r\\right)\n=\n-\\frac1{r^2}\\nabla r.\n\\]\n\nしたがって、\n\n### 最終解答2\n\n\\[\n\\boxed{\n\\nabla\\left(\\frac1r\\right)\n=\n-\\frac{\\boldsymbol x}{r^3}\n}\n\\]\n\nである。\n\n---\n\n### \\(\\nabla r^n\\)\n\n連鎖律より、\n\n\\[\n\\nabla r^n\n=\nnr^{n-1}\\nabla r.\n\\]\n\n\\[\n\\nabla r=\\frac{\\boldsymbol x}{r}\n\\]\n\nを代入すると、\n\n### 最終解答3\n\n\\[\n\\boxed{\n\\nabla r^n\n=\nnr^{n-2}\\boldsymbol x\n}\n\\]\n\nである。\n\n### 試験答案\n\n\\[\nr=(x^2+y^2+z^2)^{1/2}\n\\]\n\nより、\n\n\\[\n\\boxed{\n\\nabla r=\\frac{\\boldsymbol x}{r}\n}\n\\]\n\n\\[\n\\boxed{\n\\nabla(1/r)=-\\frac{\\boldsymbol x}{r^3}\n}\n\\]\n\n\\[\n\\boxed{\n\\nabla r^n=nr^{n-2}\\boldsymbol x\n}.\n\\]\n\n### 注意\n\n原点では \\(r=0\\) となり、これらの式は特異になるため、問題文どおり原点を除く。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "∇r は何を表すの？",
                  "markdown": "\\(r\\) が最も急激に増える方向は原点から外向きの動径方向である。その単位ベクトルが \\(\\boldsymbol x/r\\) である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-2",
              "label": "Q2-2",
              "title": "プラズマ中の位相速度と群速度",
              "markdown": "### 分散関係\n\n\\[\nn(\\omega)\n=\n\\frac{ck}{\\omega}\n=\n\\sqrt{\n1-\\frac{\\omega_p^2}{\\omega^2}\n}.\n\\]\n\n両辺から、\n\n\\[\nk\n=\n\\frac{\\omega}{c}\n\\sqrt{\n1-\\frac{\\omega_p^2}{\\omega^2}\n}.\n\\]\n\n整理すると、\n\n\\[\n\\boxed{\nk\n=\n\\frac1c\n\\sqrt{\\omega^2-\\omega_p^2}\n}\n\\]\n\nである。\n\n実数の波数を持つ伝搬波となるには、\n\n\\[\n\\boxed{\\omega>\\omega_p}\n\\]\n\nが必要である。\n\n### 位相速度\n\n\\[\nv_{\\mathrm p}\n=\n\\frac{\\omega}{k}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nv_{\\mathrm p}\n=\n\\frac{c}\n{\\sqrt{\n1-\\omega_p^2/\\omega^2\n}}\n}\n\\]\n\nである。\n\n\\[\n0<\n\\sqrt{\n1-\\omega_p^2/\\omega^2\n}\n<1\n\\]\n\nなので、\n\n\\[\n\\boxed{v_{\\mathrm p}>c}.\n\\]\n\n:::why title=\"位相速度が光速より大きくてもよいの？\"\n位相速度は同じ位相の点が移動する速度であり、情報やエネルギーの伝搬速度ではない。相対論で光速を超えられないのは、情報を運ぶ速度である。\n:::\n\n### 群速度\n\n分散関係を、\n\n\\[\n\\omega^2=c^2k^2+\\omega_p^2\n\\]\n\nと書く。\n\n両辺を \\(k\\) で微分する。\n\n\\[\n2\\omega\n\\frac{d\\omega}{dk}\n=\n2c^2k.\n\\]\n\nしたがって、\n\n\\[\nv_{\\mathrm g}\n=\n\\frac{d\\omega}{dk}\n=\n\\frac{c^2k}{\\omega}.\n\\]\n\n\\(k\\) を代入すると、\n\n\\[\n\\boxed{\nv_{\\mathrm g}\n=\nc\n\\sqrt{\n1-\\frac{\\omega_p^2}{\\omega^2}\n}\n}\n\\]\n\nである。\n\nしたがって、\n\n\\[\n\\boxed{v_{\\mathrm g}<c}.\n\\]\n\nまた、\n\n\\[\n\\boxed{\nv_{\\mathrm p}v_{\\mathrm g}=c^2\n}\n\\]\n\nである。\n\n### 屈折率との関係\n\n\\[\nn(\\omega)\n=\n\\sqrt{\n1-\\frac{\\omega_p^2}{\\omega^2}\n}\n\\]\n\nなので、\n\n\\[\n\\boxed{\nv_{\\mathrm p}=\\frac{c}{n}\n}\n\\]\n\n\\[\n\\boxed{\nv_{\\mathrm g}=cn\n}\n\\]\n\nである。\n\n### 極限\n\n\\[\n\\omega\\to\\omega_p+0\n\\]\n\nでは、\n\n\\[\nv_{\\mathrm p}\\to\\infty,\n\\qquad\nv_{\\mathrm g}\\to0.\n\\]\n\n\\[\n\\omega\\gg\\omega_p\n\\]\n\nでは、\n\n\\[\nv_{\\mathrm p}\\to c,\n\\qquad\nv_{\\mathrm g}\\to c.\n\\]\n\n### 試験答案\n\n\\[\nk=\\frac1c\\sqrt{\\omega^2-\\omega_p^2}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nv_{\\mathrm p}\n=\n\\frac{\\omega}{k}\n=\n\\frac{c}\n{\\sqrt{1-\\omega_p^2/\\omega^2}}\n>c\n}\n\\]\n\nである。\n\nまた、\n\n\\[\n\\omega^2=c^2k^2+\\omega_p^2\n\\]\n\nを微分して、\n\n\\[\n\\boxed{\nv_{\\mathrm g}\n=\n\\frac{d\\omega}{dk}\n=\n\\frac{c^2k}{\\omega}\n=\nc\\sqrt{1-\\omega_p^2/\\omega^2}\n<c\n}.\n\\]\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "位相速度が光速より大きくてもよいの？",
                  "markdown": "位相速度は同じ位相の点が移動する速度であり、情報やエネルギーの伝搬速度ではない。相対論で光速を超えられないのは、情報を運ぶ速度である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-3",
              "label": "Q2-3",
              "title": "ガラス界面の透過率",
              "markdown": "### 条件\n\n空気からガラスへ垂直入射する。\n\n\\[\nn_1=1,\n\\qquad\nn_2=n\n\\]\n\n\\[\n\\theta_1=0,\n\\qquad\n\\theta_2=0.\n\\]\n\n垂直入射では、p偏光とs偏光の区別はなく、同じ透過率になる。\n\n### 電場振幅透過係数\n\n垂直入射におけるFresnelの電場振幅透過係数は、\n\n\\[\n\\boxed{\n\\frac{E_0''}{E_0}\n=\n\\frac{2n_1}{n_1+n_2}\n}\n\\]\n\nである。\n\n\\(n_1=1,n_2=n\\) を代入すると、\n\n\\[\n\\boxed{\n\\frac{E_0''}{E_0}\n=\n\\frac{2}{1+n}\n}\n\\]\n\nとなる。\n\n:::why title=\"問題文の式へ θ=0 を直接代入すると 0/0 にならない？\"\n式 (8)、(9) は角度を使った形なので、垂直入射を直接代入すると見かけ上 \\(0/0\\) になる。Snellの法則を用いて \\(\\theta_1,\\theta_2\\to0\\) の極限を取ると、標準的な振幅透過係数 \\(2n_1/(n_1+n_2)\\) が得られる。\n:::\n\n### 電力透過率\n\n\\[\nT\n=\n\\frac{n_2\\cos\\theta_2}\n{n_1\\cos\\theta_1}\n\\left(\n\\frac{E_0''}{E_0}\n\\right)^2.\n\\]\n\n垂直入射では、\n\n\\[\n\\cos\\theta_1\n=\n\\cos\\theta_2\n=\n1.\n\\]\n\nしたがって、\n\n\\[\nT\n=\nn\n\\left(\n\\frac{2}{1+n}\n\\right)^2.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nT\n=\n\\frac{4n}{(1+n)^2}\n}\n\\]\n\nである。\n\n### 反射率による確認\n\n垂直入射の反射率は、\n\n\\[\nR\n=\n\\left(\n\\frac{n-1}{n+1}\n\\right)^2.\n\\]\n\n吸収がないため、\n\n\\[\nT=1-R.\n\\]\n\n\\[\n1-\n\\left(\n\\frac{n-1}{n+1}\n\\right)^2\n=\n\\frac{(n+1)^2-(n-1)^2}{(n+1)^2}\n=\n\\frac{4n}{(n+1)^2}.\n\\]\n\n先ほどの答えと一致する。\n\n### 注意\n\nこの問題で求めるのは、\n\n\\[\n\\boxed{\\text{ガラス窓の左側の1つの界面}}\n\\]\n\nにおける透過率である。\n\nガラス板全体の透過率を求める場合は、右側界面での反射や、板内部での多重反射を別途考慮する必要がある。\n\n### 試験答案\n\n垂直入射なので、\n\n\\[\nn_1=1,\\quad n_2=n,\\quad\n\\theta_1=\\theta_2=0.\n\\]\n\n振幅透過係数は、\n\n\\[\n\\frac{E_0''}{E_0}\n=\n\\frac{2}{1+n}.\n\\]\n\nよって、\n\n\\[\nT\n=\nn\n\\left(\n\\frac{2}{1+n}\n\\right)^2\n\\]\n\nであるから、\n\n\\[\n\\boxed{\nT=\\frac{4n}{(1+n)^2}\n}.\n\\]\n\n# 年度全体の重要ポイント\n\n- 電場成分の位相が同じなら直線偏光になる。\n- 真空中では \\(k=\\omega/c\\)、\\(|\\boldsymbol B|=|\\boldsymbol E|/c\\)。\n- 平均ポインティングベクトルでは \\(\\langle\\cos^2\\rangle=1/2\\) を使う。\n- \\(r\\) の関数の勾配は連鎖律で求められる。\n- プラズマ中では位相速度は \\(c\\) より大きく、群速度は \\(c\\) より小さい。\n- Fresnel式で垂直入射を扱うときは、角度式の極限または標準振幅係数を用いる。",
              "major": "2",
              "why": [
                {
                  "title": "問題文の式へ θ=0 を直接代入すると 0/0 にならない？",
                  "markdown": "式 (8)、(9) は角度を使った形なので、垂直入射を直接代入すると見かけ上 \\(0/0\\) になる。Snellの法則を用いて \\(\\theta_1,\\theta_2\\to0\\) の極限を取ると、標準的な振幅透過係数 \\(2n_1/(n_1+n_2)\\) が得られる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            }
          ]
        }
      ]
    },
    {
      "name": "制御工学1",
      "slug": "control-engineering-1",
      "years": [
        {
          "year": 2023,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "細田",
            "遠藤"
          ],
          "status": "completed",
          "sourceFile": "物工・制御工学1(細田・遠藤)2023.pdf",
          "sourcePages": [
            1,
            2
          ],
          "problemAssets": [
            "/exams/control-engineering-1/2023/page-1.webp",
            "/exams/control-engineering-1/2023/page-2.webp"
          ],
          "localPdfUrl": "/pdfs/control-engineering-1/2023.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1BaFlggmAz37l-M8YR6Q8X_leOXJUqHfA/edit",
          "pdfSourceFile": "物工・制御工学1(細田・遠藤)2023.pdf",
          "introMarkdown": "## この年度で必要な予備知識\n\n### 1. 伝達関数\n\n入力 \\(u(t)\\) と出力 \\(y(t)\\) のラプラス変換を \\(U(s),Y(s)\\) とすると、初期値を0としたときの\n\n\\[\nG(s)=\\frac{Y(s)}{U(s)}\n\\]\n\nを伝達関数という。\n\n### 2. ラプラス変換で使う微分則\n\n初期値が0なら、\n\n\\[\n\\mathcal L[\\dot x(t)]=sX(s),\\qquad\n\\mathcal L[\\ddot x(t)]=s^2X(s)\n\\]\n\nとなる。\n\n> [!IMPORTANT]\n> 伝達関数を求めるときは、通常「初期値は0」としてラプラス変換する。\n\n### 3. 閉ループ系\n\n負帰還系で、前向き伝達関数を \\(G(s)\\)、フィードバック伝達関数を \\(H(s)\\) とすると、\n\n\\[\nT(s)=\\frac{G(s)}{1+G(s)H(s)}\n\\]\n\nである。\n\n### 4. 安定性\n\n連続時間の線形系では、閉ループ特性多項式のすべての根が複素平面の左半平面にあれば漸近安定である。\n\n### 5. 最終値定理\n\n系が安定であり、最終値が存在するとき、\n\n\\[\n\\lim_{t\\to\\infty}y(t)\n=\n\\lim_{s\\to0}sY(s)\n\\]\n\nを使える。\n\n:::why title=\"なぜ安定性を確認してから最終値定理を使うの？\"\n不安定な系では出力が発散・振動し続ける可能性があり、そもそも最終値が存在しないからである。\n:::\n\n---",
          "questions": [
            {
              "id": "q1",
              "label": "Q1",
              "title": "直流モータの伝達関数",
              "markdown": "### 問題文（原文）\n\n:::problem-original\n図1は直流モータの模式図である。モータの回転角を \\(\\theta(t)\\) とする。モータには入力電圧として \\(e_a(t)\\) が与えられる。電機子の等価回路は、抵抗 \\(R_a\\)、インダクタンス \\(L_a\\) からなり、電機子が回転することによって生じる逆起電力は、モータの回転速度に比例した \\(e_b(t)=K_b\\dot{\\theta}(t)\\) であるとする。\n\n(1) 電機子回路の電圧の関係式、  \n(2) トルク定数を \\(K_t\\) としたときの電機子に流れる電流 \\(i_a\\) と生じるトルクの関係、  \n(3) 電機子の回転運動方程式（図のように、回転慣性モーメントを \\(J\\)、粘性摩擦係数を \\(B\\) とする）、\n\nを導出し、\\(e_a(s)\\) から、\\(\\theta(s)\\) への伝達関数を求めよ。\n:::\n\n:::problem-asset\nsrc: /exams/control-engineering-1/2023/q1.webp\nalt: 制御工学1 2023年度 問題1の原本と直流モータの模式図\n:::\n\n### 問題の設定\n\n- 入力電圧：\\(e_a(t)\\)\n- 電機子抵抗：\\(R_a\\)\n- 電機子インダクタンス：\\(L_a\\)\n- 電機子電流：\\(i_a(t)\\)\n- 回転角：\\(\\theta(t)\\)\n- 逆起電力：\n\n\\[\ne_b(t)=K_b\\dot\\theta(t)\n\\]\n\n- トルク定数：\\(K_t\\)\n- 回転慣性モーメント：\\(J\\)\n- 粘性摩擦係数：\\(B\\)\n\n入力 \\(e_a(s)\\) から出力 \\(\\theta(s)\\) までの伝達関数を求める。\n\n### 解法方針\n\n1. 電気回路についてキルヒホッフの電圧則を書く。\n2. 電流とトルクの関係を書く。\n3. 回転運動の運動方程式を書く。\n4. ラプラス変換して \\(I_a(s)\\) を消去する。\n\n---\n\n### (1) 電機子回路の電圧関係\n\n抵抗の電圧降下は\n\n\\[\nR_ai_a(t)\n\\]\n\nインダクタンスの電圧降下は\n\n\\[\nL_a\\frac{di_a(t)}{dt}\n\\]\n\nである。\n\n入力電圧は、これらと逆起電力の和になるため、\n\n\\[\n\\boxed{\ne_a(t)\n=\nR_ai_a(t)\n+\nL_a\\frac{di_a(t)}{dt}\n+\ne_b(t)}\n\\]\n\nである。\n\nさらに\n\n\\[\ne_b(t)=K_b\\dot\\theta(t)\n\\]\n\nを代入すると、\n\n\\[\n\\boxed{\ne_a(t)\n=\nR_ai_a(t)\n+\nL_a\\dot i_a(t)\n+\nK_b\\dot\\theta(t)}\n\\]\n\nとなる。\n\n:::why title=\"なぜ逆起電力を足すの？\"\nモータが回転すると、入力電圧に逆らう向きの電圧が発生する。回路を一周した電圧降下として見ると、抵抗・インダクタンス・逆起電力の和が入力電圧に等しい。\n:::\n\n---\n\n### (2) 電機子電流とトルクの関係\n\n直流モータの発生トルク \\(\\tau(t)\\) は、電機子電流に比例する。\n\n\\[\n\\boxed{\n\\tau(t)=K_ti_a(t)}\n\\]\n\nここで \\(K_t\\) はトルク定数である。\n\n---\n\n### (3) 回転運動方程式\n\n慣性による項は\n\n\\[\nJ\\ddot\\theta(t)\n\\]\n\n粘性摩擦による抵抗トルクは\n\n\\[\nB\\dot\\theta(t)\n\\]\n\nである。\n\nしたがって、回転運動方程式は\n\n\\[\nJ\\ddot\\theta(t)\n=\n\\tau(t)-B\\dot\\theta(t)\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\nJ\\ddot\\theta(t)+B\\dot\\theta(t)=K_ti_a(t)}\n\\]\n\nとなる。\n\n:::why title=\"なぜ摩擦項は Bθ̇ なの？\"\n粘性摩擦は速度に比例し、運動を妨げる向きに働く。そのため、運動方程式を左辺へ移すと \\(+B\\dot\\theta\\) となる。\n:::\n\n---\n\n### ラプラス変換\n\n初期値を0として電気系を変換すると、\n\n\\[\nE_a(s)\n=\n(R_a+L_as)I_a(s)+K_bs\\Theta(s)\n\\]\n\nとなる。\n\n機械系は、\n\n\\[\n(Js^2+Bs)\\Theta(s)=K_tI_a(s)\n\\]\n\nである。\n\n後者から、\n\n\\[\nI_a(s)\n=\n\\frac{Js^2+Bs}{K_t}\\Theta(s)\n\\]\n\nを得る。\n\nこれを電気系へ代入する。\n\n\\[\nE_a(s)\n=\n(R_a+L_as)\n\\frac{Js^2+Bs}{K_t}\\Theta(s)\n+\nK_bs\\Theta(s)\n\\]\n\n両辺に \\(K_t\\) を掛けると、\n\n\\[\nK_tE_a(s)\n=\n\\left[\n(R_a+L_as)(Js^2+Bs)\n+\nK_tK_bs\n\\right]\\Theta(s)\n\\]\n\nとなる。\n\n### 最終解答\n\n\\[\n\\boxed{\n\\frac{\\Theta(s)}{E_a(s)}\n=\n\\frac{K_t}\n{(L_as+R_a)(Js^2+Bs)+K_tK_bs}}\n\\]\n\n分母から \\(s\\) をくくると、\n\n\\[\n\\boxed{\n\\frac{\\Theta(s)}{E_a(s)}\n=\n\\frac{K_t}\n{s\\left[(L_as+R_a)(Js+B)+K_tK_b\\right]}}\n\\]\n\nである。\n\n分母を展開した形は、\n\n\\[\n\\boxed{\n\\frac{\\Theta(s)}{E_a(s)}\n=\n\\frac{K_t}\n{L_aJs^3+(L_aB+R_aJ)s^2+(R_aB+K_tK_b)s}}\n\\]\n\nである。\n\n### 試験答案\n\n\\[\ne_a=R_ai_a+L_a\\dot i_a+K_b\\dot\\theta\n\\]\n\n\\[\n\\tau=K_ti_a\n\\]\n\n\\[\nJ\\ddot\\theta+B\\dot\\theta=K_ti_a\n\\]\n\nをラプラス変換すると、\n\n\\[\nE_a=(R_a+L_as)I_a+K_bs\\Theta\n\\]\n\n\\[\n(Js^2+Bs)\\Theta=K_tI_a.\n\\]\n\n\\(I_a\\) を消去して、\n\n\\[\n\\boxed{\n\\frac{\\Theta}{E_a}\n=\n\\frac{K_t}\n{(L_as+R_a)(Js^2+Bs)+K_tK_bs}}\n\\]\n\nを得る。\n\n### 重要ポイント\n\n- 電気系と機械系を、電流 \\(i_a\\) を通して結びつける。\n- 角度を出力にするため、伝達関数には原点極 \\(s=0\\) が現れる。\n- 逆起電力 \\(K_b\\dot\\theta\\) は、回転が電気回路へ戻るフィードバックの役割を持つ。\n\n### タグ\n\n- 直流モータ\n- 伝達関数\n- ラプラス変換\n- 電気機械系\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ逆起電力を足すの？",
                  "markdown": "モータが回転すると、入力電圧に逆らう向きの電圧が発生する。回路を一周した電圧降下として見ると、抵抗・インダクタンス・逆起電力の和が入力電圧に等しい。"
                },
                {
                  "title": "なぜ摩擦項は Bθ̇ なの？",
                  "markdown": "粘性摩擦は速度に比例し、運動を妨げる向きに働く。そのため、運動方程式を左辺へ移すと \\(+B\\dot\\theta\\) となる。"
                }
              ],
              "importantPoints": [
                "電気系と機械系を、電流 \\(i_a\\) を通して結びつける。",
                "角度を出力にするため、伝達関数には原点極 \\(s=0\\) が現れる。",
                "逆起電力 \\(K_b\\dot\\theta\\) は、回転が電気回路へ戻るフィードバックの役割を持つ。"
              ],
              "relatedKnowledge": [],
              "tags": [
                "直流モータ",
                "伝達関数",
                "ラプラス変換",
                "電気機械系"
              ],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q2",
              "label": "Q2",
              "title": "ラウス表とフルビッツ条件",
              "markdown": "### 問題文（原文）\n\n:::problem-original\n伝達関数の分母多項式が\n\n\\[\ns^3+3s^2+2s+K\n\\]\n\nであるシステムが安定である \\(K\\) の範囲を、ラウス表を作ることで求めよ。また、フルビッツの方法を用いて同じ結果が得られることを確認せよ。\n:::\n\n### 問題\n\n特性多項式が\n\n\\[\np(s)=s^3+3s^2+2s+K\n\\]\n\nであるシステムが安定となる \\(K\\) の範囲を求める。\n\n---\n\n### ラウス表による解法\n\n3次多項式\n\n\\[\ns^3+3s^2+2s+K\n\\]\n\nのラウス表を作る。\n\n\\[\n\\begin{array}{c|cc}\ns^3&1&2\\\\\ns^2&3&K\\\\\ns^1&\\dfrac{3\\cdot2-1\\cdot K}{3}&0\\\\\ns^0&K&\n\\end{array}\n\\]\n\nしたがって第1列は、\n\n\\[\n1,\\qquad\n3,\\qquad\n\\frac{6-K}{3},\\qquad\nK\n\\]\n\nである。\n\nラウスの安定条件は、第1列がすべて正であること。\n\n\\[\nK>0\n\\]\n\nかつ\n\n\\[\n\\frac{6-K}{3}>0\n\\]\n\nであるため、\n\n\\[\nK<6\n\\]\n\nを得る。\n\n### ラウス表による最終解答\n\n\\[\n\\boxed{0<K<6}\n\\]\n\n:::why title=\"なぜ第1列だけ見ればよいの？\"\nラウス表では、第1列の符号変化の回数が右半平面にある根の個数に一致する。すべて同符号なら符号変化がなく、右半平面の根が存在しない。\n:::\n\n---\n\n### フルビッツの方法による確認\n\n3次多項式\n\n\\[\ns^3+a_1s^2+a_2s+a_3\n\\]\n\nが安定であるためのフルビッツ条件は、\n\n\\[\na_1>0,\\qquad\na_2>0,\\qquad\na_3>0,\\qquad\na_1a_2>a_3\n\\]\n\nである。\n\n今回、\n\n\\[\na_1=3,\\qquad\na_2=2,\\qquad\na_3=K\n\\]\n\nなので、\n\n\\[\nK>0\n\\]\n\nおよび\n\n\\[\n3\\cdot2>K\n\\]\n\nが必要である。\n\nしたがって、\n\n\\[\n\\boxed{0<K<6}\n\\]\n\nとなり、ラウス表と同じ結果を得る。\n\n### 試験答案\n\nラウス表は\n\n\\[\n\\begin{array}{c|cc}\ns^3&1&2\\\\\ns^2&3&K\\\\\ns^1&(6-K)/3&0\\\\\ns^0&K&\n\\end{array}\n\\]\n\nである。\n\n安定条件より、第1列が正でなければならないため、\n\n\\[\nK>0,\\qquad 6-K>0.\n\\]\n\nよって、\n\n\\[\n\\boxed{0<K<6}.\n\\]\n\nまた、フルビッツ条件\n\n\\[\na_1a_2>a_3\n\\]\n\nからも\n\n\\[\n3\\cdot2>K\n\\]\n\nとなり、同じ結果を得る。\n\n### 間違えやすい点\n\n- \\(K=0\\) と \\(K=6\\) は漸近安定には含めない。\n- 安定範囲は不等号を厳密に書く。\n\n### タグ\n\n- ラウス表\n- フルビッツ条件\n- 安定判別\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ第1列だけ見ればよいの？",
                  "markdown": "ラウス表では、第1列の符号変化の回数が右半平面にある根の個数に一致する。すべて同符号なら符号変化がなく、右半平面の根が存在しない。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [
                "ラウス表",
                "フルビッツ条件",
                "安定判別"
              ],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3",
              "label": "Q3",
              "title": "定常偏差ゼロと安定条件",
              "markdown": "### 問題文（原文）\n\n:::problem-original\n図2のようなフィードバック制御系に、単位ステップ入力を加えたとき、出力 \\(y(t)\\) が定常偏差なく入力に追従するために、ゲイン \\(K_1,K_2\\) が満たすべき条件を求めよ。\n:::\n\n:::problem-asset\nsrc: /exams/control-engineering-1/2023/q3.webp\nalt: 制御工学1 2023年度 問題3のブロック線図\n:::\n\n### 問題のブロック線図\n\n制御対象を\n\n\\[\nG(s)=\\frac1{s(s+1)^2}\n\\]\n\nとする。\n\n入力側にゲイン \\(K_1\\)、フィードバック側にゲイン \\(K_2\\) がある。\n\n単位ステップ入力に対し、出力 \\(y(t)\\) が定常偏差なく入力へ追従するための条件を求める。\n\n---\n\n### 1. 閉ループ伝達関数\n\n加算点へ入る信号は、\n\n\\[\nK_1R(s)-K_2Y(s)\n\\]\n\nである。\n\nしたがって、\n\n\\[\nY(s)\n=\nG(s)\\left[K_1R(s)-K_2Y(s)\\right].\n\\]\n\n整理すると、\n\n\\[\n\\left[1+K_2G(s)\\right]Y(s)\n=\nK_1G(s)R(s).\n\\]\n\nよって、\n\n\\[\n\\frac{Y(s)}{R(s)}\n=\n\\frac{K_1G(s)}{1+K_2G(s)}.\n\\]\n\n\\(G(s)=1/[s(s+1)^2]\\) を代入すると、\n\n\\[\n\\boxed{\n\\frac{Y(s)}{R(s)}\n=\n\\frac{K_1}\n{s(s+1)^2+K_2}}\n\\]\n\nとなる。\n\n---\n\n### 2. 定常偏差が0となる条件\n\n単位ステップ入力は、\n\n\\[\nR(s)=\\frac1s\n\\]\n\nである。\n\n閉ループ系が安定であると仮定すると、最終値定理より、\n\n\\[\ny(\\infty)\n=\n\\lim_{s\\to0}sY(s)\n=\n\\lim_{s\\to0}\n\\frac{K_1}{s(s+1)^2+K_2}\n=\n\\frac{K_1}{K_2}.\n\\]\n\n入力の最終値は1なので、定常偏差が0であるためには、\n\n\\[\ny(\\infty)=1\n\\]\n\nすなわち、\n\n\\[\n\\boxed{K_1=K_2}\n\\]\n\nが必要である。\n\n:::why title=\"積分器があるのに K1=K2 が必要なの？\"\n通常の単位フィードバックなら積分器によりステップ定常偏差は0になる。しかしこの問題では基準入力に \\(K_1\\)、出力フィードバックに \\(K_2\\) が付いており、最終的な追従倍率が \\(K_1/K_2\\) になる。\n:::\n\n---\n\n### 3. 閉ループ安定条件\n\n特性方程式は、\n\n\\[\ns(s+1)^2+K_2=0.\n\\]\n\n展開すると、\n\n\\[\ns^3+2s^2+s+K_2=0.\n\\]\n\nラウス表は、\n\n\\[\n\\begin{array}{c|cc}\ns^3&1&1\\\\\ns^2&2&K_2\\\\\ns^1&\\dfrac{2-K_2}{2}&0\\\\\ns^0&K_2&\n\\end{array}\n\\]\n\nである。\n\n安定条件は、\n\n\\[\nK_2>0\n\\]\n\nおよび\n\n\\[\n2-K_2>0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{0<K_2<2}\n\\]\n\nである。\n\n定常偏差条件 \\(K_1=K_2\\) と合わせると、\n\n### 最終解答\n\n\\[\n\\boxed{\nK_1=K_2,\\qquad 0<K_2<2}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\n0<K_1=K_2<2}\n\\]\n\nである。\n\n### 試験答案\n\n\\[\n\\frac{Y}{R}\n=\n\\frac{K_1}{s(s+1)^2+K_2}.\n\\]\n\n単位ステップ入力に対して、最終値定理より、\n\n\\[\ny(\\infty)\n=\n\\lim_{s\\to0}\\frac{K_1}{s(s+1)^2+K_2}\n=\n\\frac{K_1}{K_2}.\n\\]\n\n定常偏差0より、\n\n\\[\nK_1=K_2.\n\\]\n\nまた、特性多項式は\n\n\\[\ns^3+2s^2+s+K_2\n\\]\n\nであり、ラウス条件より、\n\n\\[\n0<K_2<2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{0<K_1=K_2<2}.\n\\]\n\n### タグ\n\n- 定常偏差\n- 最終値定理\n- ラウス表\n- 2自由度制御\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "積分器があるのに K1=K2 が必要なの？",
                  "markdown": "通常の単位フィードバックなら積分器によりステップ定常偏差は0になる。しかしこの問題では基準入力に \\(K_1\\)、出力フィードバックに \\(K_2\\) が付いており、最終的な追従倍率が \\(K_1/K_2\\) になる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [
                "定常偏差",
                "最終値定理",
                "ラウス表",
                "2自由度制御"
              ],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q4",
              "label": "Q4",
              "title": "極零相殺と内部安定性",
              "markdown": "### 問題文（原文）\n\n:::problem-original\n図のようなフィードバック制御系で、\n\n\\[\nP(s)=\\frac1{s^2-1},\\qquad\nC(s)=\\frac{s-1}{s+1}\n\\]\n\nであるとする。このシステムの内部安定性を調べよ。\n:::\n\n:::problem-asset\nsrc: /exams/control-engineering-1/2023/q4.webp\nalt: 制御工学1 2023年度 問題4のブロック線図\n:::\n\n### 問題\n\n\\[\nP(s)=\\frac1{s^2-1}\n=\n\\frac1{(s-1)(s+1)}\n\\]\n\n\\[\nC(s)=\\frac{s-1}{s+1}\n\\]\n\nである負帰還系の内部安定性を調べる。\n\n外乱 \\(d\\) は制御入力 \\(u\\) とプラントの間へ加わる。\n\n---\n\n### 1. 一巡伝達関数\n\n\\[\nP(s)C(s)\n=\n\\frac1{(s-1)(s+1)}\n\\frac{s-1}{s+1}\n=\n\\frac1{(s+1)^2}.\n\\]\n\n見かけ上、不安定極 \\(s=1\\) はコントローラの零点によって相殺されている。\n\n基準入力 \\(r\\) から出力 \\(y\\) までの伝達関数は、\n\n\\[\n\\frac{Y}{R}\n=\n\\frac{PC}{1+PC}\n=\n\\frac1{(s+1)^2+1}.\n\\]\n\nこの伝達関数の極は、\n\n\\[\ns=-1\\pm i\n\\]\n\nなので、基準入力から出力だけを見れば安定に見える。\n\n:::why title=\"外部安定に見えるのに、なぜまだ調べる必要があるの？\"\n伝達関数の約分によって消えた極が、実際の内部状態から消えたとは限らない。外乱や初期値によって、その隠れた不安定モードが励起されることがある。\n:::\n\n---\n\n### 2. 外乱から出力までの伝達関数\n\nブロック線図から、\n\n\\[\ny=P(u+d)\n\\]\n\n\\[\nu=C(r-y)\n\\]\n\nである。\n\n外乱応答を見るため \\(r=0\\) とすると、\n\n\\[\nu=-Cy.\n\\]\n\nしたがって、\n\n\\[\ny=P(-Cy+d)\n\\]\n\n\\[\n(1+PC)y=Pd.\n\\]\n\nよって、\n\n\\[\n\\frac{Y}{D}\n=\n\\frac{P}{1+PC}.\n\\]\n\n代入すると、\n\n\\[\n\\frac{Y}{D}\n=\n\\frac{1}{(s-1)(s+1)}\n\\frac{(s+1)^2}{(s+1)^2+1}.\n\\]\n\n整理して、\n\n\\[\n\\boxed{\n\\frac{Y}{D}\n=\n\\frac{s+1}\n{(s-1)\\left[(s+1)^2+1\\right]}}\n\\]\n\nとなる。\n\nこの伝達関数には、不安定極\n\n\\[\ns=1\n\\]\n\nが残っている。\n\n### 最終結論\n\n\\[\n\\boxed{\\text{この閉ループ系は内部安定ではない}}\n\\]\n\n理由は、プラントの不安定極 \\(s=1\\) をコントローラの零点で相殺しており、外乱 \\(d\\) から出力 \\(y\\) への伝達関数にその不安定極が現れるためである。\n\n### 内部安定性の標準的な確認\n\n感度関数を\n\n\\[\nS=\\frac1{1+PC}\n\\]\n\nとすると、内部安定には一般に\n\n\\[\nS,\\qquad\nCS,\\qquad\nPS,\\qquad\nPCS\n\\]\n\nがすべて安定であることが必要である。\n\n今回、\n\n\\[\nPS\n=\n\\frac{s+1}\n{(s-1)\\left[(s+1)^2+1\\right]}\n\\]\n\nが不安定である。\n\n### 試験答案\n\n\\[\nPC=\\frac1{(s+1)^2}\n\\]\n\nなので、\n\n\\[\n\\frac{Y}{R}\n=\n\\frac1{(s+1)^2+1}\n\\]\n\nは安定である。\n\nしかし外乱 \\(d\\) から \\(y\\) までは、\n\n\\[\n\\frac{Y}{D}\n=\n\\frac{P}{1+PC}\n=\n\\frac{s+1}\n{(s-1)\\{(s+1)^2+1\\}}\n\\]\n\nとなり、不安定極 \\(s=1\\) を持つ。\n\nしたがって、\n\n\\[\n\\boxed{\\text{内部不安定}}\n\\]\n\nである。\n\n### 重要ポイント\n\n- 不安定極と零点の相殺は、内部安定性を保証しない。\n- 入出力伝達関数が安定でも、内部信号が発散する場合がある。\n- 外乱入力や初期状態を含めて調べる必要がある。\n\n### タグ\n\n- 内部安定性\n- 極零相殺\n- 感度関数\n- 隠れた不安定モード\n\n---",
              "major": "4",
              "why": [
                {
                  "title": "外部安定に見えるのに、なぜまだ調べる必要があるの？",
                  "markdown": "伝達関数の約分によって消えた極が、実際の内部状態から消えたとは限らない。外乱や初期値によって、その隠れた不安定モードが励起されることがある。"
                }
              ],
              "importantPoints": [
                "不安定極と零点の相殺は、内部安定性を保証しない。",
                "入出力伝達関数が安定でも、内部信号が発散する場合がある。",
                "外乱入力や初期状態を含めて調べる必要がある。"
              ],
              "relatedKnowledge": [],
              "tags": [
                "内部安定性",
                "極零相殺",
                "感度関数",
                "隠れた不安定モード"
              ],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q5",
              "label": "Q5",
              "title": "ナイキストの安定判別",
              "markdown": "### 問題文（原文）\n\n:::problem-original\n開ループ伝達関数が\n\n\\[\n\\frac{k}{s^3+3s^2+3s+1}\n\\]\n\nのシステムに対し、フィードバック制御系が安定となるような \\(k\\) の範囲を、ナイキストの安定判別法を用いて求めよ。\n:::\n\n### 問題\n\n開ループ伝達関数を\n\n\\[\nL(s)\n=\n\\frac{k}{s^3+3s^2+3s+1}\n=\n\\frac{k}{(s+1)^3}\n\\]\n\nとする。\n\n負帰還系が安定となる \\(k\\) の範囲を、ナイキストの安定判別法により求める。\n\n---\n\n### 1. 開ループ極\n\n\\[\nL(s)=\\frac{k}{(s+1)^3}\n\\]\n\nの極は、\n\n\\[\ns=-1\n\\]\n\nの3重極である。\n\n右半平面の開ループ極は存在しないため、\n\n\\[\nP=0\n\\]\n\nである。\n\n閉ループ安定には、ナイキスト線図が \\(-1\\) を包囲しないことが必要である。\n\n---\n\n### 2. 正の \\(k\\) に対する臨界条件\n\n周波数応答は、\n\n\\[\nL(i\\omega)\n=\n\\frac{k}{(1+i\\omega)^3}.\n\\]\n\n位相は、\n\n\\[\n\\angle L(i\\omega)\n=\n-3\\tan^{-1}\\omega\n\\]\n\nである。\n\n負の実軸上へ来る条件は、\n\n\\[\n-3\\tan^{-1}\\omega=-\\pi.\n\\]\n\nしたがって、\n\n\\[\n\\tan^{-1}\\omega=\\frac\\pi3\n\\]\n\nより、\n\n\\[\n\\omega=\\sqrt3.\n\\]\n\nこのとき、\n\n\\[\n|1+i\\sqrt3|=2\n\\]\n\nなので、\n\n\\[\n|L(i\\sqrt3)|\n=\n\\frac{k}{2^3}\n=\n\\frac{k}{8}.\n\\]\n\nナイキスト線図が \\(-1\\) を通る臨界条件は、\n\n\\[\n\\frac{k}{8}=1\n\\]\n\nすなわち、\n\n\\[\nk=8.\n\\]\n\nしたがって、正のゲインについては、\n\n\\[\n0<k<8\n\\]\n\nで安定である。\n\n:::why title=\"なぜ −1 を通る値が安定境界なの？\"\n負帰還系の特性方程式は \\(1+L(s)=0\\) である。したがって \\(L(s)=-1\\) となると、虚軸上に閉ループ極が現れ、安定と不安定の境界になる。\n:::\n\n---\n\n### 3. 負の \\(k\\) も含める場合\n\n\\(k<0\\) の場合、ナイキスト線図全体が原点について180度回転する。\n\n\\(\\omega=0\\) では、\n\n\\[\nL(0)=k.\n\\]\n\nしたがって、\\(-1\\) を通るもう1つの境界は、\n\n\\[\nk=-1.\n\\]\n\n\\(k=0\\) では閉ループ極は \\(s=-1\\) の3重極で安定である。\n\n安定境界 \\(-1\\) と \\(8\\) の間では \\(-1\\) の包囲数が0のままであるため、実数 \\(k\\) 全体での安定範囲は、\n\n### 最終解答\n\n\\[\n\\boxed{-1<k<8}\n\\]\n\nである。\n\nただし、制御ゲインとして\n\n\\[\nk>0\n\\]\n\nを前提とする場合は、\n\n\\[\n\\boxed{0<k<8}\n\\]\n\nと答える。\n\n---\n\n### 境界値の確認\n\n#### \\(k=-1\\)\n\n特性方程式は、\n\n\\[\n(s+1)^3-1=0.\n\\]\n\n\\(s=0\\) が根となるため、漸近安定ではない。\n\n#### \\(k=8\\)\n\n特性方程式は、\n\n\\[\n(s+1)^3+8=0.\n\\]\n\n根に\n\n\\[\ns=\\pm i\\sqrt3\n\\]\n\nが含まれるため、漸近安定ではない。\n\n---\n\n### 試験答案\n\n\\[\nL(i\\omega)\n=\n\\frac{k}{(1+i\\omega)^3},\n\\qquad P=0.\n\\]\n\n\\(k>0\\) について負実軸との交点は、\n\n\\[\n-3\\tan^{-1}\\omega=-\\pi\n\\]\n\nより、\n\n\\[\n\\omega=\\sqrt3.\n\\]\n\nこのとき、\n\n\\[\n|L(i\\sqrt3)|=\\frac{k}{8}.\n\\]\n\n\\(-1\\) を通る臨界値は \\(k=8\\) である。\n\nまた、負の \\(k\\) については \\(\\omega=0\\) で \\(L(0)=k\\) なので、もう1つの臨界値は \\(k=-1\\)。\n\nよって、\n\n\\[\n\\boxed{-1<k<8}\n\\]\n\nで安定である。\n\n正ゲインのみを考えるなら、\n\n\\[\n\\boxed{0<k<8}.\n\\]\n\n### 重要ポイント\n\n- \\(s^3+3s^2+3s+1=(s+1)^3\\) と因数分解すると見通しがよい。\n- 正の \\(k\\) の安定限界は、位相が \\(-180^\\circ\\) となる周波数で求める。\n- \\(k\\) を実数全体で扱う場合は、負側の境界 \\(k=-1\\) も必要。\n\n### タグ\n\n- ナイキスト線図\n- 安定判別\n- ゲイン余裕\n- 閉ループ安定性",
              "major": "5",
              "why": [
                {
                  "title": "なぜ −1 を通る値が安定境界なの？",
                  "markdown": "負帰還系の特性方程式は \\(1+L(s)=0\\) である。したがって \\(L(s)=-1\\) となると、虚軸上に閉ループ極が現れ、安定と不安定の境界になる。"
                }
              ],
              "importantPoints": [
                "\\(s^3+3s^2+3s+1=(s+1)^3\\) と因数分解すると見通しがよい。",
                "正の \\(k\\) の安定限界は、位相が \\(-180^\\circ\\) となる周波数で求める。",
                "\\(k\\) を実数全体で扱う場合は、負側の境界 \\(k=-1\\) も必要。"
              ],
              "relatedKnowledge": [],
              "tags": [
                "ナイキスト線図",
                "安定判別",
                "ゲイン余裕",
                "閉ループ安定性"
              ],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            }
          ]
        }
      ]
    },
    {
      "name": "設計工学1",
      "slug": "design-engineering-1",
      "years": [
        {
          "year": 2023,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "小森",
            "平山"
          ],
          "status": "completed",
          "sourceFile": "設計工学1(小森・平山)2023.pdf",
          "sourcePages": [
            1
          ],
          "problemAssets": [
            "/exams/design-engineering-1/2023/page-1.webp"
          ],
          "localPdfUrl": "/pdfs/design-engineering-1/2023.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1IChMhcor6fkc2BK_0GTWkTLrAisWx_Eh/edit",
          "pdfSourceFile": "設計工学1(小森・平山)2023.pdf",
          "introMarkdown": "> [!NOTE]\n> 問題文は元PDFの文章をそのまま表示し、解説とは別の領域へ配置する。図示問題では、本ファイルに指定した解答用SVGも表示する。\n\n\n## 1. 動力伝達要素\n\n回転運動と動力を別の軸へ伝える代表的な方法として、次がある。\n\n- 歯車伝動\n- ベルト伝動\n- チェーン伝動\n\n伝達動力は、回転軸のトルクを \\(T\\)、角速度を \\(\\omega\\) とすると、\n\n\\[\n\\boxed{P=T\\omega}\n\\]\n\nである。\n\n回転数を \\(n\\,[\\mathrm{min^{-1}}]\\) とする場合は、\n\n\\[\n\\omega=\\frac{2\\pi n}{60}\n\\]\n\nなので、\n\n\\[\n\\boxed{\nP=\\frac{2\\pi nT}{60}\n}\n\\]\n\nとなる。\n\n## 2. ばね定数\n\n力 \\(F\\) と変形量 \\(\\delta\\) の関係が線形なら、\n\n\\[\n\\boxed{F=K\\delta}\n\\]\n\nである。\n\nボルト締結体の締付け線図では、\n\n- ボルトのばね定数：\\(K_b\\)\n- 被締結体の圧縮ばね定数：\\(K_c\\)\n\nを使う。\n\n## 3. 転がり疲れ\n\n転がり軸受では、玉またはころと軌道面の接触部に繰返し接触応力が作用する。\n\n長時間使用すると、軌道面の内部から疲労き裂が発生し、表面がうろこ状にはがれることがある。\n\nこれを、\n\n\\[\n\\boxed{\\text{フレーキング}}\n\\]\n\nという。\n\n## 4. 設計における安全率\n\n材料の降伏応力や破壊応力を、そのまま使用限界にはしない。\n\n強度のばらつき、荷重の不確実性、摩耗、衝撃、加工誤差などを考慮して安全率 \\(n\\) を設ける。\n\n\\[\n\\boxed{\n\\text{許容応力}\n=\n\\frac{\\text{基準となる材料強度}}{\\text{安全率}}\n}\n\\]\n\nである。\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-(1)",
              "title": "歯車・平ベルト・チェーンの比較",
              "markdown": "## 歯車伝動\n\n歯と歯を直接かみ合わせて動力を伝える。\n\n### 長所\n\n1. **滑りがない**\n\n歯が直接かみ合うため、理論上の速度比を正確に保てる。\n\n平歯車では、\n\n\\[\n\\boxed{\n\\frac{n_1}{n_2}\n=\n\\frac{z_2}{z_1}\n}\n\\]\n\n- \\(n_1,n_2\\)：回転数\n- \\(z_1,z_2\\)：歯数\n\nである。\n\n2. **大きな動力とトルクを伝えられる**\n\n接触する歯面と歯元で力を受けるため、小型でも大きな力を伝達しやすい。\n\n3. **伝達効率が高い**\n\n適切な潤滑と歯面精度があれば、効率が高い。\n\n4. **コンパクト**\n\n同じ伝達能力なら、ベルト伝動より軸間距離を小さくできる。\n\n5. **さまざまな軸配置に対応できる**\n\n平行軸、交差軸、食違い軸に対応する歯車がある。\n\n### 短所\n\n1. **製作精度が必要で高価**\n\n歯形、ピッチ、歯すじ、取付精度が性能へ大きく影響する。\n\n2. **高速で騒音・振動が発生しやすい**\n\n歯のかみ合い誤差や剛性変化によって、周期的な振動が生じる。\n\n3. **潤滑が必要**\n\n潤滑不足では歯面の摩耗、焼付き、ピッチングが起こる。\n\n4. **大きな軸間距離には不向き**\n\n軸間距離を大きくすると歯車自体も大型化する。\n\n5. **衝撃を逃がしにくい**\n\n過負荷時にも滑らないため、歯や軸へ大きな衝撃が作用する。\n\n---\n\n## 平ベルト伝動\n\nプーリへベルトを巻き付け、ベルトとプーリの摩擦力によって動力を伝える。\n\n### 長所\n\n1. **大きな軸間距離へ対応できる**\n\n離れた軸の間でも、軽いベルトで動力を伝えられる。\n\n2. **構造が簡単で安価**\n\n歯車に比べて製造と保守が容易。\n\n3. **静かで滑らか**\n\n柔軟なベルトが振動と衝撃を吸収する。\n\n4. **過負荷保護作用がある**\n\n過大な負荷ではベルトが滑り、機械の重大な破損を防ぐ場合がある。\n\n5. **高速運転に向く**\n\nベルトが軽く、比較的高速で使用できる。\n\n### 短所\n\n1. **滑りとクリープがある**\n\n回転速度比を完全には一定に保てない。\n\n2. **張力が軸受荷重となる**\n\n動力を伝えるために初張力が必要であり、軸と軸受へ常時ラジアル荷重が加わる。\n\n3. **設置空間が大きい**\n\nプーリ径と軸間距離が大きくなることがある。\n\n4. **環境の影響を受ける**\n\n油、水、温度、経年劣化で摩擦係数やベルト強度が変化する。\n\n5. **大トルク伝達能力は歯車やチェーンより低い**\n\n同じ寸法なら、確実なかみ合いを使う伝動より伝達能力が低い。\n\n:::why title=\"平ベルトで速度比が完全に一定にならない理由\"\nプーリとの間に巨視的な滑りがなくても、ベルトは張力側で伸び、ゆるみ側で縮む。この弾性変形に伴う微小な相対運動をクリープという。\n:::\n\n---\n\n## チェーン伝動\n\nスプロケットの歯とチェーンをかみ合わせて動力を伝える。\n\n### 長所\n\n1. **滑りがない**\n\n平均速度比を正確に保てる。\n\n\\[\n\\boxed{\n\\frac{n_1}{n_2}\n=\n\\frac{z_2}{z_1}\n}\n\\]\n\n2. **ベルトより大きな荷重を伝えやすい**\n\n引張強度の高い金属製チェーンを使用する。\n\n3. **比較的大きな軸間距離に対応できる**\n\n歯車ほど軸間距離に制約されず、ベルトより確実に動力を伝える。\n\n4. **大きな初張力を必要としない**\n\n摩擦力ではなく歯とのかみ合いで伝えるため、ベルトほど大きな初張力は不要。\n\n5. **温度、油、水などへの耐性が比較的高い**\n\n適切な材料と潤滑を選べば、厳しい環境でも使用できる。\n\n### 短所\n\n1. **多角形作用がある**\n\nチェーンはスプロケットへ円ではなく多角形状に巻き付くため、瞬間速度が周期的に変動する。\n\n2. **騒音・振動が発生しやすい**\n\nローラと歯の衝突、多角形作用、ピッチ誤差の影響を受ける。\n\n3. **潤滑と保守が必要**\n\nピンとブシュの摩耗によりチェーンのピッチが伸びる。\n\n4. **高速運転に限界がある**\n\n衝撃と遠心力が増え、騒音、摩耗、疲労が問題になる。\n\n5. **取付け精度が必要**\n\nスプロケットの平行度や芯出しが悪いと、偏摩耗や脱落が起こる。\n\n---\n\n## 比較まとめ\n\n| 項目 | 歯車 | 平ベルト | チェーン |\n|---|---|---|---|\n| 速度比 | 正確 | 滑り・クリープで変動 | 平均的に正確 |\n| 軸間距離 | 短い | 長い | 中〜長 |\n| 伝達能力 | 大 | 小〜中 | 中〜大 |\n| 騒音 | 高速で増えやすい | 小さい | 比較的大きい |\n| 衝撃吸収 | 小さい | 大きい | 小〜中 |\n| 初張力 | 不要 | 必要 | 小さい |\n| 潤滑 | 必要 | 通常不要 | 必要 |\n| 過負荷時 | 部品破損のおそれ | 滑って保護可能 | 部品破損のおそれ |\n\n### 試験答案\n\n歯車は滑りがなく速度比が正確で、効率と伝達能力が高く、装置を小型化できる。一方、製作・取付精度と潤滑が必要で、高速では騒音や振動が発生しやすく、長い軸間距離には不向きである。\n\n平ベルトは安価で静かであり、大きな軸間距離に対応し、衝撃吸収と過負荷時の滑りによる保護作用を持つ。一方、滑りとクリープで速度比が変化し、初張力による軸受荷重が大きく、伝達能力も比較的小さい。\n\nチェーンは滑らず、ベルトより大きな荷重を比較的長い軸間距離で伝えられ、初張力も小さい。一方、多角形作用による速度変動・騒音・振動があり、潤滑と張り調整が必要で、高速運転には限界がある。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "平ベルトで速度比が完全に一定にならない理由",
                  "markdown": "プーリとの間に巨視的な滑りがなくても、ベルトは張力側で伸び、ゆるみ側で縮む。この弾性変形に伴う微小な相対運動をクリープという。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q1-2",
              "label": "Q1-(2)",
              "title": "バックラッシと転位歯車",
              "markdown": "## バックラッシ\n\n一対の歯車をかみ合わせたとき、ピッチ円上で測った、\n\n\\[\n\\boxed{\n\\text{一方の歯車の歯溝幅}\n-\n\\text{相手歯車の歯厚}\n}\n\\]\n\nを円周方向バックラッシという。\n\n歯面が一方側で接触しているとき、反対側の歯面間に存在するすきまである。\n\n## バックラッシが必要な理由\n\n完全にすきまを0にすると、次の要因により歯面が強く押し合い、回転不能や焼付きが起こる。\n\n- 加工誤差\n- 組立誤差\n- 軸受の変位\n- 歯車と箱の熱膨張\n- 歯の弾性変形\n- 潤滑油膜の確保\n\nしたがって、適切なバックラッシは、\n\n\\[\n\\boxed{\n\\text{円滑な回転と潤滑を確保するために必要}\n}\n\\]\n\nである。\n\n## バックラッシが大きすぎる場合\n\n- 正逆転時の位置決め誤差\n- 歯面の衝突\n- 騒音と振動\n- 衝撃荷重\n- 制御系の不感帯\n\nが増える。\n\n## バックラッシが小さすぎる場合\n\n- 発熱\n- 摩擦増加\n- 焼付き\n- 歯面の早期損傷\n- 回転抵抗増加\n\nが起こる。\n\n:::why title=\"高精度機械ではバックラッシを完全に0にすればよいのでは？\"\n理想的に0へ近づけたいが、温度変化や加工誤差があるため、単純にすきまをなくすと歯面が拘束される。高精度用途では、ばねで2枚歯車を反対方向へ予圧するなど、機構的にバックラッシを除去する。\n:::\n\n---\n\n## 転位歯車\n\n標準ラック工具を歯車中心から半径方向へずらして歯切りした歯車を、\n\n\\[\n\\boxed{\\text{転位歯車}}\n\\]\n\nという。\n\n工具の移動量を、\n\n\\[\nxm\n\\]\n\nと表す。\n\n- \\(x\\)：転位係数\n- \\(m\\)：モジュール\n\n工具を歯車中心から外側へ移動する場合を正転位、\n\n\\[\nx>0\n\\]\n\n内側へ移動する場合を負転位、\n\n\\[\nx<0\n\\]\n\nという。\n\n## 正転位の主な効果\n\n- 小歯数歯車の切下げを防ぐ\n- 歯元の歯厚を増やし、曲げ強度を高める\n- 歯先円直径を大きくする\n- 歯厚配分を変更できる\n\n## 負転位の主な効果\n\n- 歯元歯厚が減少する\n- 歯先円直径が小さくなる\n- 大歯車側へ負転位を与え、大小歯車の強度を均等化する場合がある\n\n## 転位歯車を用いる目的\n\n1. **切下げの防止**\n\n標準歯車では歯数が少ないと、創成歯切り時に工具が歯元を削り過ぎる。\n\n正転位により歯元を厚くできる。\n\n2. **歯元強度の調整**\n\n小歯車は大歯車よりかみ合い回数が多く、歯元が弱くなりやすい。\n\n小歯車へ正転位、大歯車へ負転位を与えて強度を配分する。\n\n3. **中心距離の調整**\n\n一対の転位係数の和、\n\n\\[\nx_1+x_2\n\\]\n\nを選ぶことで、標準中心距離と異なる中心距離を設定できる。\n\n4. **かみ合い性能の調整**\n\n歯厚、すべり率、歯先干渉、かみ合い率などを調整できる。\n\n### 変わらない基本量\n\n同じ工具を使う限り、\n\n- モジュール\n- 基準圧力角\n- 基礎ピッチ\n- 歯数\n- 基準円直径\n\nは基本的に変わらない。\n\n歯形上の使用部分と歯厚、歯先・歯底位置などが変化する。\n\n### 試験答案\n\nバックラッシは、歯車を片側歯面で接触させたときに反対側歯面間へ生じる円周方向のすきまである。加工誤差、熱膨張、潤滑油膜を許容するため必要だが、大きすぎると位置決め誤差、衝撃、騒音が増え、小さすぎると発熱や焼付きが起こる。\n\n転位歯車は、ラック工具を基準位置から \\(xm\\) だけ半径方向へ移動して歯切りした歯車である。正転位は小歯数歯車の切下げ防止と歯元強化に用いられ、転位係数の組合せによって中心距離や強度配分、かみ合い状態を調整できる。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "高精度機械ではバックラッシを完全に0にすればよいのでは？",
                  "markdown": "理想的に0へ近づけたいが、温度変化や加工誤差があるため、単純にすきまをなくすと歯面が拘束される。高精度用途では、ばねで2枚歯車を反対方向へ予圧するなど、機構的にバックラッシを除去する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-1",
              "label": "Q2-(1)",
              "title": "ボルトの締付け線図",
              "markdown": "## 解答図\n\n![ボルト締結体の締付け線図](/exams/design-engineering-1/2023/bolt-tightening-diagram.svg)\n\n## ボルトと被締結体をばねとして考える\n\nボルトを締め付けると、\n\n- ボルトは引っ張られて伸びる\n- 被締結体は押されて縮む\n\nしたがって、ボルトと被締結体を2本のばねとしてモデル化できる。\n\n\\[\nF_b=K_b\\delta_b\n\\]\n\n\\[\nF_c=K_c\\delta_c\n\\]\n\n- \\(F_b\\)：ボルト軸力\n- \\(F_c\\)：被締結体に作用する圧縮締付力\n- \\(K_b\\)：ボルトのばね定数\n- \\(K_c\\)：被締結体の圧縮ばね定数\n\n締付け直後は力のつり合いにより、\n\n\\[\n\\boxed{\nF_b=F_c=F_i\n}\n\\]\n\nとなる。\n\n\\(F_i\\) を初期締付力という。\n\n## 締付け線図\n\n横軸へ変形量、縦軸へ力を取る。\n\n- ボルト線：伸びと軸力の関係、傾き \\(K_b\\)\n- 被締結体線：圧縮変形と締付力の関係、傾き \\(K_c\\)\n\n両直線の交点が初期締付状態を表す。\n\n## 外力が作用する場合\n\n締結体を引き離す方向へ外力 \\(W\\) が作用すると、外力のすべてがそのままボルトへ加わるわけではない。\n\n- ボルト軸力は増える\n- 被締結体の圧縮力は減る\n\n外力係数を、\n\n\\[\n\\boxed{\n\\Phi\n=\n\\frac{K_b}{K_b+K_c}\n}\n\\]\n\nとすると、単純なばねモデルでは、\n\n\\[\n\\boxed{\n\\Delta F_b\n=\n\\Phi W\n}\n\\]\n\n\\[\n\\boxed{\n\\Delta F_c\n=\n(1-\\Phi)W\n}\n\\]\n\nである。\n\nしたがって、外力作用後のボルト軸力は、\n\n\\[\n\\boxed{\nF_b=F_i+\\Phi W\n}\n\\]\n\n残留締付力は、\n\n\\[\n\\boxed{\nF_c=F_i-(1-\\Phi)W\n}\n\\]\n\nとなる。\n\n:::why title=\"外力 W の全部がボルト軸力の増加にならない理由\"\n外力が作用すると、ボルトがさらに伸びると同時に、圧縮されていた被締結体が弾性回復する。外力はこの2つの変形へ分担されるため、ボルト軸力の増加は \\(\\Phi W\\) だけになる。\n:::\n\n## 接合面の分離\n\n残留締付力が0になると、接合面が分離する。\n\n\\[\nF_i-(1-\\Phi)W_{\\mathrm{sep}}=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nW_{\\mathrm{sep}}\n=\n\\frac{F_i}{1-\\Phi}\n=\nF_i\\frac{K_b+K_c}{K_c}\n}\n\\]\n\nである。\n\n接合面が分離した後は被締結体が圧縮力を負担できないため、それ以降の外力増加はほぼ全てボルト軸力へ加わる。\n\n## 疲労設計上の意味\n\n変動外力 \\(W\\) に対するボルト軸力の変動は、\n\n\\[\n\\Delta F_b=\\Phi W.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nK_b\\text{ を小さくし、}K_c\\text{ を大きくすると }\\Phi\\text{ が小さくなる}\n}\n\\]\n\nので、ボルトの疲労強度上有利。\n\n具体的には、\n\n- ボルトの有効長を長くする\n- 細身ボルトを用いる\n- 被締結体を厚く・高剛性にする\n- 荷重作用位置を適切にする\n\nなどが有効。\n\n## 締付力が小さすぎる場合\n\n- 接合面が分離する\n- すべりが起こる\n- ボルトへ大きな変動荷重が加わる\n- ゆるみや疲労破壊が起こる\n\n## 締付力が大きすぎる場合\n\n- 締付け時にボルトが降伏する\n- ねじ山を損傷する\n- 被締結体を座屈・陥没させる\n- 締付工具や座面を損傷する\n\n### 試験答案\n\nボルトを引張ばね \\(K_b\\)、被締結体を圧縮ばね \\(K_c\\) として表し、力と変形量の関係を同一図上に描く。両線の交点が初期締付力 \\(F_i\\) を表す。\n\n締結体へ分離方向外力 \\(W\\) が作用すると、\n\n\\[\n\\Phi=\\frac{K_b}{K_b+K_c}\n\\]\n\nとして、\n\n\\[\nF_b=F_i+\\Phi W\n\\]\n\n\\[\nF_c=F_i-(1-\\Phi)W\n\\]\n\nとなる。\n\n\\(F_c=0\\) になると接合面が分離し、その後の外力増分はほぼ全てボルトが負担する。したがって、適切な初期締付力を与え、外力係数を小さくすることが疲労強度上重要である。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "外力 W の全部がボルト軸力の増加にならない理由",
                  "markdown": "外力が作用すると、ボルトがさらに伸びると同時に、圧縮されていた被締結体が弾性回復する。外力はこの2つの変形へ分担されるため、ボルト軸力の増加は \\(\\Phi W\\) だけになる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-2",
              "label": "Q2-(2)",
              "title": "ボールねじの長所と短所",
              "markdown": "ボールねじは、ねじ軸とナットの間に多数の鋼球を入れ、鋼球を循環させながら転がり接触で運動を伝えるねじ機構である。\n\n回転運動と直線運動を相互に変換する。\n\n## 長所\n\n### 1. 機械効率が高い\n\n滑りねじではねじ面同士が滑るが、ボールねじでは鋼球が転がる。\n\n摩擦係数が小さいため、一般に90%以上の高い効率を得られる。\n\n### 2. 摩擦と発熱が小さい\n\n摩擦損失が少なく、高速送りや連続運転に向く。\n\n### 3. スティックスリップが起こりにくい\n\n静止摩擦と動摩擦の差が小さいため、低速でも滑らかに動き、高精度な位置決めができる。\n\n### 4. バックラッシを小さくできる\n\n2つのナット、オーバーサイズボールなどで予圧を与えれば、軸方向すきまを除去できる。\n\n### 5. 精度と再現性が高い\n\n研削仕上げされたねじでは、工作機械、ロボット、半導体装置などの精密送りに使用できる。\n\n### 6. 摩耗が小さく寿命を予測しやすい\n\n転がり接触なので、適切な潤滑・防塵下では長寿命。\n\n## 短所\n\n### 1. 自己保持性が低い\n\n効率が高いので、軸方向荷重によってねじ軸が逆回転するバックドライブが起こりやすい。\n\n垂直軸では、モータ停止時の落下を防ぐブレーキが必要。\n\n:::why title=\"高効率なのに自己保持できないのはなぜ？\"\n摩擦が小さいため、モータからナットを動かしやすいだけでなく、ナット側の荷重からねじ軸も回しやすい。摩擦による逆転防止効果が小さい。\n:::\n\n### 2. 高価\n\nねじ溝と鋼球に高い形状・表面精度が必要で、ボール循環機構も複雑。\n\n### 3. 異物に弱い\n\n切りくずや粉じんが入り込むと、ボールとねじ溝を損傷する。\n\nワイパ、シール、蛇腹カバーなどが必要。\n\n### 4. 潤滑が必要\n\n潤滑不足では摩耗、発熱、焼付き、寿命低下が起こる。\n\n### 5. 衝撃荷重に弱い\n\n局所的な接触応力が高く、強い衝撃でねじ溝や鋼球に圧痕が生じる。\n\n### 6. 高速回転に限界がある\n\n長いねじ軸では、\n\n- 危険速度による振れ回り\n- 遠心力\n- ボール循環部の衝撃\n- ねじ軸の座屈\n\nを考慮する必要がある。\n\n### 7. 騒音が発生する場合がある\n\n鋼球が循環部へ出入りするときに音と振動が発生する。\n\n### 試験答案\n\nボールねじは、ねじ軸とナットの間で鋼球を循環させ、転がり接触によって回転運動と直線運動を変換する機構である。\n\n長所は、高効率、低摩擦、低発熱、スティックスリップが少ないこと、予圧によりバックラッシを除去できること、高精度・長寿命であること。\n\n短所は、高価で構造が複雑、潤滑と防塵が必要、衝撃や異物に弱いこと、高速時に危険速度などの制約があること、自己保持性が低く垂直軸ではブレーキが必要なことである。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "高効率なのに自己保持できないのはなぜ？",
                  "markdown": "摩擦が小さいため、モータからナットを動かしやすいだけでなく、ナット側の荷重からねじ軸も回しやすい。摩擦による逆転防止効果が小さい。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3-1",
              "label": "Q3-(1)",
              "title": "ラジアル玉軸受とスラスト玉軸受",
              "markdown": "## 解答図\n\n![ラジアル玉軸受とスラスト玉軸受](/exams/design-engineering-1/2023/bearing-cross-sections.svg)\n\n## ラジアル玉軸受\n\n主に軸へ垂直な方向の荷重、\n\n\\[\n\\boxed{\\text{ラジアル荷重}}\n\\]\n\nを支持する。\n\n代表的な部品：\n\n- 内輪\n- 外輪\n- 玉、転動体\n- 保持器、リテーナ\n- 内輪軌道溝\n- 外輪軌道溝\n- 必要に応じてシールまたはシールド\n\n深溝玉軸受では、ある程度のアキシアル荷重も支持できる。\n\n## スラスト玉軸受\n\n主に軸方向の荷重、\n\n\\[\n\\boxed{\\text{スラスト荷重、アキシアル荷重}}\n\\]\n\nを支持する。\n\n代表的な部品：\n\n- 軸軌道盤、軸座金\n- ハウジング軌道盤、ハウジング座金\n- 玉\n- 保持器\n- 軌道溝\n\n軸軌道盤は軸とともに回転し、ハウジング軌道盤は軸受箱側へ固定される。\n\n一般的なスラスト玉軸受はラジアル荷重をほとんど支持できない。\n\n### 試験答案\n\nラジアル玉軸受は、内輪、外輪、玉、保持器、内外輪の軌道溝からなり、主にラジアル荷重を支持する。\n\nスラスト玉軸受は、軸軌道盤、ハウジング軌道盤、玉、保持器からなり、主に軸方向荷重を支持する。\n\n図中へ各名称を記入する。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3-2",
              "label": "Q3-(2)",
              "title": "転がり軸受の寿命",
              "markdown": "## 転がり軸受の寿命とは\n\n転がり接触部には、繰返しHertz接触応力が作用する。\n\n長時間の使用により、軌道面または転動体にフレーキングが発生するまでの総回転数を、疲れ寿命として扱う。\n\n同じ仕様で同じ条件の軸受でも、材料中の介在物や微小欠陥により寿命はばらつく。\n\nそこで統計的な寿命を用いる。\n\n## 基本定格寿命 \\(L_{10}\\)\n\n一群の同一軸受を同じ条件で運転したとき、\n\n\\[\n\\boxed{\n90\\%\\text{ の軸受が転がり疲れによる損傷を起こさずに到達できる寿命}\n}\n\\]\n\nを基本定格寿命 \\(L_{10}\\) という。\n\n言い換えると、10%が疲労損傷した時点の寿命。\n\n通常、単位は、\n\n\\[\n\\boxed{10^6\\text{ 回転}}\n\\]\n\nで表す。\n\n:::why title=\"平均寿命ではなく90%残存寿命を使う理由\"\n軸受寿命は大きくばらつき、平均だけでは多くの軸受がそれ以前に故障する可能性がある。設計では信頼度を明確にした寿命を用いる必要がある。\n:::\n\n## 基本動定格荷重 \\(C\\)\n\n基本動定格荷重とは、\n\n\\[\n\\boxed{\n\\text{基本定格寿命が }10^6\\text{ 回転となる一定荷重}\n}\n\\]\n\nである。\n\n- ラジアル軸受：一定の純ラジアル荷重\n- スラスト軸受：一定の純アキシアル荷重\n\n同一形状の軸受群について、90%の信頼度を基準とする。\n\n単位はN。\n\n## 等価動荷重 \\(P\\)\n\n実際にはラジアル荷重 \\(F_r\\) とアキシアル荷重 \\(F_a\\) が同時に作用する場合がある。\n\nこれを、軸受寿命へ同じ影響を与える一定荷重へ換算したものが等価動荷重 \\(P\\)。\n\n一般に、\n\n\\[\n\\boxed{\nP=XF_r+YF_a\n}\n\\]\n\n- \\(X\\)：ラジアル荷重係数\n- \\(Y\\)：アキシアル荷重係数\n\n係数は軸受形式、荷重比、接触角などから選ぶ。\n\n## 寿命式\n\n\\[\n\\boxed{\nL_{10}\n=\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\n- \\(L_{10}\\)：基本定格寿命、単位は百万回転\n- \\(C\\)：基本動定格荷重\n- \\(P\\)：等価動荷重\n- \\(p\\)：寿命指数\n\n玉軸受では、\n\n\\[\n\\boxed{p=3}\n\\]\n\nころ軸受では、\n\n\\[\n\\boxed{p=\\frac{10}{3}}\n\\]\n\nである。\n\nしたがって、玉軸受では、\n\n\\[\n\\boxed{\nL_{10}\n=\n\\left(\n\\frac CP\n\\right)^3\n\\times10^6\\text{ 回転}\n}\n\\]\n\nとなる。\n\n## 時間寿命\n\n回転速度を、\n\n\\[\nn\\,[\\mathrm{min^{-1}}]\n\\]\n\nとすると、\n\n\\[\n\\boxed{\nL_{10h}\n=\n\\frac{10^6}{60n}\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\nである。\n\n単位は時間。\n\n## 荷重の影響\n\n玉軸受では寿命が荷重の3乗に反比例する。\n\n例えば荷重を2倍にすると、\n\n\\[\n\\frac{L_{\\mathrm{new}}}{L_{\\mathrm{old}}}\n=\n\\left(\n\\frac12\n\\right)^3\n=\n\\frac18.\n\\]\n\nしたがって、わずかな過負荷でも寿命が大幅に短くなる。\n\n## 実用上の補正\n\n実際の軸受選定では、必要に応じて、\n\n- 信頼度\n- 潤滑状態\n- 潤滑剤の粘度\n- 汚染\n- 材料\n- 温度\n- 取付誤差\n- 衝撃荷重\n\nを考慮して修正定格寿命を求める。\n\n### 試験答案\n\n基本動定格荷重 \\(C\\) は、一群の同一軸受が90%の信頼度で基本定格寿命 \\(10^6\\) 回転に達する一定荷重である。\n\n実荷重を等価動荷重 \\(P\\) へ換算し、\n\n\\[\n\\boxed{\nL_{10}\n=\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\nにより、百万回転単位の基本定格寿命を求める。\n\n\\[\np=3\n\\]\n\nは玉軸受、\n\n\\[\np=10/3\n\\]\n\nはころ軸受。\n\n時間寿命は、\n\n\\[\n\\boxed{\nL_{10h}\n=\n\\frac{10^6}{60n}\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\nである。\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "平均寿命ではなく90%残存寿命を使う理由",
                  "markdown": "軸受寿命は大きくばらつき、平均だけでは多くの軸受がそれ以前に故障する可能性がある。設計では信頼度を明確にした寿命を用いる必要がある。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3-3",
              "label": "Q3-(3)",
              "title": "動圧軸受と静圧軸受",
              "markdown": "いずれも、軸と軸受面の間に油や気体の流体膜を形成して荷重を支持する滑り軸受である。\n\n固体同士を十分に分離できれば、摩擦と摩耗を小さくできる。\n\n## 動圧軸受\n\n軸の回転や相対運動によって、潤滑流体が狭くなるくさび状すきまへ引き込まれる。\n\n粘性流体がくさび内で圧縮されることで圧力が発生し、荷重を支持する。\n\n\\[\n\\boxed{\n\\text{相対運動によって自ら流体圧力を作る軸受}\n}\n\\]\n\nである。\n\n### 特徴\n\n**長所**\n\n- 外部の高圧ポンプが不要\n- 構造が比較的簡単\n- 高速時に大きな負荷能力を得られる\n- 流体膜による振動減衰性が高い\n- 適切な運転状態では摩耗が小さい\n\n**短所**\n\n- 停止中や低速では十分な圧力を作れない\n- 始動・停止時に固体接触しやすい\n- ある程度の回転速度が必要\n- 軸心位置が荷重と速度で変化する\n- 油膜不安定振動が生じる場合がある\n\n代表例：ジャーナル軸受、ティルティングパッド軸受。\n\n:::why title=\"動圧軸受にはくさび形状が必要な理由\"\n平行なすきまへ流体を運んでも、入口と出口で圧力差を作りにくい。流路が狭くなるくさび形状では、粘性によって運ばれた流体が押し込まれ、荷重を支える圧力分布が形成される。\n:::\n\n---\n\n## 静圧軸受\n\n外部ポンプから加圧した流体を軸受面のポケットへ供給し、その圧力で荷重を支持する。\n\n\\[\n\\boxed{\n\\text{外部圧力源によって流体膜を作る軸受}\n}\n\\]\n\nである。\n\n### 特徴\n\n**長所**\n\n- 軸が停止していても荷重を支持できる\n- 始動・停止時にも固体接触を避けやすい\n- 摩擦が非常に小さい\n- 高い回転精度と位置決め精度\n- 低速でも使用できる\n- 大きな剛性を得られる設計が可能\n\n**短所**\n\n- ポンプ、配管、絞り、フィルタが必要\n- 装置が複雑で高価\n- 常時ポンプ動力を消費する\n- 漏れ対策が必要\n- 異物による絞りやすきまの閉塞に弱い\n- 圧力源が停止すると支持能力を失う\n\n代表例：精密工作機械の主軸、超精密位置決め装置。\n\n---\n\n## 違いのまとめ\n\n| 項目 | 動圧軸受 | 静圧軸受 |\n|---|---|---|\n| 圧力発生 | 軸の相対運動 | 外部ポンプ |\n| 停止時の支持 | 原則困難 | 可能 |\n| 始動時摩耗 | 起こり得る | 小さい |\n| 外部動力 | 原則不要 | ポンプ動力が必要 |\n| 構造 | 比較的簡単 | 複雑 |\n| 低速性能 | 低い | 高い |\n| 精度 | 高いが運転条件に依存 | 非常に高くできる |\n\n### 試験答案\n\n動圧軸受は、軸の回転によって潤滑流体をくさび状すきまへ引き込み、粘性によって発生する動圧で荷重を支持する。外部ポンプが不要で高速・高荷重に向くが、停止時と低速時には油膜を形成できず、始動・停止時に摩耗しやすい。\n\n静圧軸受は、外部ポンプで加圧した流体を軸受すきまへ供給し、その静圧で荷重を支持する。停止時から低摩擦で高精度だが、ポンプと配管が必要で高価であり、圧力源停止時には支持能力を失う。\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "動圧軸受にはくさび形状が必要な理由",
                  "markdown": "平行なすきまへ流体を運んでも、入口と出口で圧力差を作りにくい。流路が狭くなるくさび形状では、粘性によって運ばれた流体が押し込まれ、荷重を支える圧力分布が形成される。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q4-1",
              "label": "Q4-(1)",
              "title": "許容応力と必要軸径",
              "markdown": "## 許容応力\n\n材料が降伏、破壊、疲労破壊などを起こさず、安全に使用できると定めた応力の上限を許容応力という。\n\n一般に、\n\n\\[\n\\boxed{\n[\\sigma]\n=\n\\frac{\\sigma_{\\mathrm{basis}}}{n}\n}\n\\]\n\n\\[\n\\boxed{\n[\\tau]\n=\n\\frac{\\tau_{\\mathrm{basis}}}{n}\n}\n\\]\n\nとする。\n\n- \\(\\sigma_{\\mathrm{basis}},\\tau_{\\mathrm{basis}}\\)：降伏強さ、引張強さ、疲労限度など\n- \\(n\\)：安全率\n- \\([\\sigma]\\)：許容垂直応力\n- \\([\\tau]\\)：許容せん断応力\n\n延性材料の静荷重では降伏応力、脆性材料では破壊応力、繰返し荷重では疲労強度を基準にする。\n\n## 設計の基本手順\n\n1. 荷重と支持条件を求める\n2. 軸に作用する軸力、曲げモーメント、トルクを求める\n3. 最も危険な断面の最大応力を計算する\n4. 応力集中、キー溝、段差、疲労、衝撃を補正する\n5. 計算応力が許容応力以下になるように軸径 \\(d\\) を決める\n6. 標準径へ切り上げ、剛性と危険速度も確認する\n\n---\n\n## 軸力 \\(F\\) を受ける中実丸軸\n\n断面積は、\n\n\\[\nA=\\frac{\\pi d^2}{4}.\n\\]\n\n垂直応力は、\n\n\\[\n\\sigma=\\frac FA\n=\n\\frac{4F}{\\pi d^2}.\n\\]\n\n安全条件は、\n\n\\[\n\\sigma\\le[\\sigma].\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nd\n\\ge\n\\sqrt{\n\\frac{4F}{\\pi[\\sigma]}\n}\n}\n\\]\n\nである。\n\n---\n\n## 曲げモーメント \\(M\\) を受ける中実丸軸\n\n断面二次モーメントは、\n\n\\[\nI=\\frac{\\pi d^4}{64}.\n\\]\n\n外周までの距離は、\n\n\\[\nc=\\frac d2.\n\\]\n\n最大曲げ応力は、\n\n\\[\n\\sigma_b\n=\n\\frac{Mc}{I}\n=\n\\frac{32M}{\\pi d^3}.\n\\]\n\n\\[\n\\sigma_b\\le[\\sigma_b]\n\\]\n\nより、\n\n\\[\n\\boxed{\nd\n\\ge\n\\left(\n\\frac{32M}{\\pi[\\sigma_b]}\n\\right)^{1/3}\n}\n\\]\n\nである。\n\n:::why title=\"曲げを受ける軸径が荷重の立方根になる理由\"\n丸軸の断面係数は \\(Z=\\pi d^3/32\\) であり、曲げ応力は \\(M/Z\\) となる。断面の強さが \\(d^3\\) に比例するため、必要径は曲げモーメントの立方根に比例する。\n:::\n\n---\n\n## トルク \\(T\\) を受ける中実丸軸\n\n極断面二次モーメントは、\n\n\\[\nJ=\\frac{\\pi d^4}{32}.\n\\]\n\n最大せん断応力は、\n\n\\[\n\\tau\n=\n\\frac{T(d/2)}J\n=\n\\frac{16T}{\\pi d^3}.\n\\]\n\n\\[\n\\tau\\le[\\tau]\n\\]\n\nより、\n\n\\[\n\\boxed{\nd\n\\ge\n\\left(\n\\frac{16T}{\\pi[\\tau]}\n\\right)^{1/3}\n}\n\\]\n\nである。\n\n---\n\n## 曲げとねじりを同時に受ける場合\n\n最大曲げ応力とねじりせん断応力は、\n\n\\[\n\\sigma_b=\\frac{32M}{\\pi d^3}\n\\]\n\n\\[\n\\tau=\\frac{16T}{\\pi d^3}.\n\\]\n\n### von Misesの相当応力\n\n延性材料に対して、\n\n\\[\n\\sigma_{\\mathrm{eq}}\n=\n\\sqrt{\\sigma_b^2+3\\tau^2}.\n\\]\n\n代入すると、\n\n\\[\n\\sigma_{\\mathrm{eq}}\n=\n\\frac{16}{\\pi d^3}\n\\sqrt{4M^2+3T^2}.\n\\]\n\n\\[\n\\sigma_{\\mathrm{eq}}\n\\le[\\sigma]\n\\]\n\nより、\n\n\\[\n\\boxed{\nd\n\\ge\n\\left[\n\\frac{\n16\\sqrt{4M^2+3T^2}\n}{\n\\pi[\\sigma]\n}\n\\right]^{1/3}\n}\n\\]\n\nである。\n\n同じ式を、\n\n\\[\n\\boxed{\nd\n\\ge\n\\left[\n\\frac{\n32\\sqrt{M^2+\\frac34T^2}\n}{\n\\pi[\\sigma]\n}\n\\right]^{1/3}\n}\n\\]\n\nと書いてもよい。\n\n### 最大せん断応力説\n\nTresca基準を使う場合、\n\n\\[\n\\tau_{\\max}\n=\n\\sqrt{\n\\left(\n\\frac{\\sigma_b}{2}\n\\right)^2\n+\\tau^2\n}.\n\\]\n\n代入すると、\n\n\\[\n\\tau_{\\max}\n=\n\\frac{16}{\\pi d^3}\n\\sqrt{M^2+T^2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nd\n\\ge\n\\left[\n\\frac{\n16\\sqrt{M^2+T^2}\n}{\n\\pi[\\tau]\n}\n\\right]^{1/3}\n}\n\\]\n\nである。\n\n## 実際の設計で必要な補正\n\n実軸には、\n\n- キー溝\n- 段差\n- ねじ\n- 止め輪溝\n- 圧入部\n- 横穴\n\nがあり、応力集中が生じる。\n\n繰返し曲げや変動トルクでは、\n\n- 疲労限度\n- 切欠係数\n- 寸法効果\n- 表面粗さ\n- 平均応力\n- 衝撃係数\n\nを考慮する。\n\nまた、強度だけでなく、\n\n- ねじれ角\n- たわみ\n- 軸受の傾き\n- 危険速度\n- 振動\n\nも確認する。\n\n### 試験答案\n\n許容応力は、材料の降伏・破壊・疲労強度を安全率で割り、安全に使用できる応力上限として定めた値である。\n\n中実丸軸に曲げモーメント \\(M\\) が作用すると、\n\n\\[\n\\sigma_b=\\frac{32M}{\\pi d^3}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nd\\ge\n\\left(\n\\frac{32M}{\\pi[\\sigma_b]}\n\\right)^{1/3}\n}\n\\]\n\nとなる。\n\nトルク \\(T\\) の場合は、\n\n\\[\n\\tau=\\frac{16T}{\\pi d^3}\n\\]\n\nより、\n\n\\[\n\\boxed{\nd\\ge\n\\left(\n\\frac{16T}{\\pi[\\tau]}\n\\right)^{1/3}\n}.\n\\]\n\n曲げとねじりが同時に作用する場合は、von Mises応力や最大せん断応力を求め、それが許容応力以下になるように \\(d\\) を決める。\n\n---",
              "major": "4",
              "why": [
                {
                  "title": "曲げを受ける軸径が荷重の立方根になる理由",
                  "markdown": "丸軸の断面係数は \\(Z=\\pi d^3/32\\) であり、曲げ応力は \\(M/Z\\) となる。断面の強さが \\(d^3\\) に比例するため、必要径は曲げモーメントの立方根に比例する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q4-2",
              "label": "Q4-(2)",
              "title": "軸継手と軸ずれ",
              "markdown": "## 解答図\n\n![軸継手が許容する偏心、偏角、エンドプレイ](/exams/design-engineering-1/2023/shaft-coupling-misalignment.svg)\n\n## 軸継手とは\n\n2本の軸の端部を接続し、一方の軸から他方の軸へ、\n\n- トルク\n- 回転運動\n- 動力\n\nを伝える機械要素を軸継手、カップリングという。\n\n\\[\n\\boxed{\n\\text{原動軸と従動軸を接続して動力を伝達する部品}\n}\n\\]\n\nである。\n\n## 軸継手の種類\n\n### 固定軸継手\n\n2軸をほぼ完全に一体化する。\n\n- フランジ形軸継手\n- 筒形軸継手\n\n高いねじり剛性を持つが、芯ずれをほとんど許容しない。\n\n### たわみ軸継手\n\n弾性部品、歯、リンク、膜板などの変形によって軸ずれを許容する。\n\n- ゴムカップリング\n- 歯車形軸継手\n- オルダム継手\n- ディスクカップリング\n- ベローズカップリング\n\n芯ずれの吸収、振動・衝撃の緩和、組立誤差の許容に使う。\n\n> [!IMPORTANT]\n> 軸継手は軸ずれを許容できても、軸受や軸へ生じる追加荷重を完全になくすわけではない。設計値以内に芯出しする必要がある。\n\n---\n\n## 偏心\n\n2本の軸の中心線が平行ではあるが、横方向へ距離 \\(e\\) だけずれている状態。\n\n\\[\n\\boxed{\n\\text{平行な2軸の中心線の位置ずれ}\n}\n\\]\n\nである。\n\n英語ではparallel misalignment、offset misalignment。\n\n偏心を許容する軸継手では、1回転ごとに部材が周期的に変形する。\n\n偏心が大きすぎると、\n\n- 軸受反力増加\n- カップリングの疲労\n- 振動\n- 発熱\n- シール損傷\n\nが起こる。\n\n---\n\n## 偏角\n\n2本の軸の中心線が同一直線上になく、互いに角度 \\(\\theta\\) を持つ状態。\n\n\\[\n\\boxed{\n\\text{2軸の中心線の角度誤差}\n}\n\\]\n\nである。\n\n英語ではangular misalignment。\n\nユニバーサルジョイント、歯車形、ディスク形などは一定の偏角を許容できる。\n\n偏角が大きすぎると、周期的な曲げ、速度変動、振動が生じる。\n\n---\n\n## エンドプレイ\n\n軸方向の相対変位または軸方向すきま。\n\n\\[\n\\boxed{\n\\text{2軸が互いに軸方向へ近づく、または離れる変位}\n}\n\\]\n\nである。\n\n英語ではaxial displacement、end play。\n\n発生原因：\n\n- 温度変化による軸の熱膨張\n- スラスト荷重\n- 軸受内部すきま\n- 組立誤差\n- 機械フレームの変形\n\n軸方向変位を許容しない継手で拘束すると、大きなスラスト力が軸受へ加わる。\n\n:::why title=\"モータと被駆動機を正確に芯出ししても、エンドプレイ対策が必要な理由\"\n運転中は軸が発熱して伸び、機械フレームも変形する。停止時に正しく芯出しされていても、運転温度では軸方向位置が変化する可能性がある。\n:::\n\n## 3種類のまとめ\n\n\\[\n\\boxed{\n\\begin{aligned}\n\\text{偏心：}&\n\\text{軸線は平行だが横へずれる}\\\\\n\\text{偏角：}&\n\\text{軸線同士に角度がある}\\\\\n\\text{エンドプレイ：}&\n\\text{軸方向へ相対移動する}\n\\end{aligned}\n}\n\\]\n\n実際には、これらが同時に生じる複合ミスアライメントもある。\n\n### 試験答案\n\n軸継手は、2本の軸を接続してトルクと回転運動を伝える機械要素であり、固定形とたわみ形がある。\n\n偏心は、2軸の中心線が平行なまま横方向へずれる誤差。\n\n偏角は、2軸の中心線が角度を持つ誤差。\n\nエンドプレイは、熱膨張やスラスト荷重などによって2軸が軸方向へ相対移動する誤差。\n\nたわみ軸継手は、これらを弾性変形などで一定範囲まで許容し、軸・軸受へ加わる過大な力を抑える。\n\n# 年度全体の重要ポイント\n\n- 歯車は高精度・高負荷、ベルトは静粛・長軸間、チェーンは確実なかみ合いと中長軸間が特徴。\n- バックラッシは円滑な運転に必要だが、大きすぎると位置決め誤差と衝撃を増やす。\n- 転位歯車は工具位置をずらして歯切りし、切下げ、強度、中心距離を調整する。\n- 締付け外力は、ボルト軸力の増加と被締結体締付力の減少へ分配される。\n- ボールねじは高効率・高精度だが、自己保持性が低く、防塵と潤滑が必要。\n- 基本動定格荷重 \\(C\\) は、寿命 \\(10^6\\) 回転に対応する基準荷重。\n- 軸受寿命は \\(L_{10}=(C/P)^p\\) で評価する。\n- 動圧軸受は相対運動、静圧軸受は外部ポンプで圧力を作る。\n- 軸径は、計算応力が許容応力以下となるように決める。\n- 軸継手は偏心、偏角、エンドプレイを一定範囲で許容する。",
              "major": "4",
              "why": [
                {
                  "title": "モータと被駆動機を正確に芯出ししても、エンドプレイ対策が必要な理由",
                  "markdown": "運転中は軸が発熱して伸び、機械フレームも変形する。停止時に正しく芯出しされていても、運転温度では軸方向位置が変化する可能性がある。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            }
          ]
        },
        {
          "year": 2021,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "小森",
            "平山"
          ],
          "status": "completed",
          "sourceFile": "設計工学1(小森・平山)2021.pdf",
          "sourcePages": [
            1
          ],
          "problemAssets": [
            "/exams/design-engineering-1/2021/page-1.webp"
          ],
          "localPdfUrl": "/pdfs/design-engineering-1/2021.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1-vAVkLF68QGFvpTVejJuw70-65lqsU0a/edit",
          "pdfSourceFile": "設計工学1(小森・平山)2021.pdf",
          "introMarkdown": "> [!NOTE]\n> 本試験は文章だけでなく図示を求める問題が多い。Webサイトでは問題原本とともに、本ファイルで指定した解答用SVGを表示する。\n\n\n## 1. 動力とトルク\n\n回転軸が伝える動力を \\(P\\)、トルクを \\(T\\)、角速度を \\(\\omega\\) とすると、\n\n\\[\n\\boxed{P=T\\omega}\n\\]\n\nである。\n\n回転数を \\(n\\,[\\mathrm{min^{-1}}]\\) とすれば、\n\n\\[\n\\omega=\\frac{2\\pi n}{60}\n\\]\n\nなので、\n\n\\[\n\\boxed{\nT=\\frac{60P}{2\\pi n}\n}\n\\]\n\nとなる。\n\n実務でよく使う形は、\n\n\\[\n\\boxed{\nT[\\mathrm{N\\,m}]\n=\n\\frac{9550P[\\mathrm{kW}]}\n{n[\\mathrm{min^{-1}}]}\n}\n\\]\n\nである。\n\n## 2. 伝動比\n\n滑りのない歯車・歯付きベルトでは、駆動側と従動側の回転数比が歯数比で決まる。\n\n\\[\n\\boxed{\n\\frac{n_1}{n_2}\n=\n\\frac{z_2}{z_1}\n}\n\\]\n\nである。\n\n## 3. 転がり軸受の基本寿命\n\n基本定格寿命は、\n\n\\[\n\\boxed{\nL_{10}\n=\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\nで求める。\n\n- \\(C\\)：基本動定格荷重\n- \\(P\\)：動等価荷重\n- \\(p=3\\)：玉軸受\n- \\(p=10/3\\)：ころ軸受\n- \\(L_{10}\\) の単位：\\(10^6\\) 回転\n\n## 4. 中実丸軸のねじり\n\n直径 \\(d\\) の中実丸軸にトルク \\(T\\) が作用すると、\n\n\\[\n\\boxed{\n\\tau_{\\max}\n=\n\\frac{16T}{\\pi d^3}\n}\n\\]\n\nである。\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-(1)",
              "title": "平歯車・はすば歯車・やまば歯車",
              "markdown": "## 解答図\n\n![平歯車・はすば歯車・やまば歯車](/exams/design-engineering-1/2021/gear-types.svg)\n\n## 平歯車\n\n歯すじが軸方向と平行な円筒歯車。\n\n### 特徴\n\n- 構造と製作が最も簡単\n- 伝達比が正確\n- 高効率\n- 軸方向の推力が原理的に生じない\n- 取付けと保守が比較的容易\n- 低速から中速の平行軸伝動に広く用いられる\n\n### 短所・注意点\n\n- かみ合い始めと終了が歯幅全体でほぼ同時に起こる\n- 歯への荷重変化が急で、高速では振動・騒音が増えやすい\n- 歯形誤差、ピッチ誤差、芯ずれの影響を受けやすい\n\n### 試験答案\n\n平歯車は歯すじが軸に平行な歯車で、製作が容易で高効率、軸方向力を生じない。一方、歯のかみ合いが急に始まるため、高速では騒音と振動が生じやすい。\n\n---\n\n## はすば歯車\n\n歯すじが軸方向に対してねじれ角 \\(\\beta\\) を持つ円筒歯車。\n\n### 特徴\n\n- 歯が端から徐々にかみ合う\n- 同時にかみ合う歯数が多い\n- 平歯車より静粛で滑らか\n- 歯幅方向へ荷重を分散でき、負荷能力が高い\n- 高速回転に適する\n\n### 短所・注意点\n\nねじれた歯面に作用する力によって、軸方向力が生じる。\n\n\\[\n\\boxed{\nF_a=F_t\\tan\\beta\n}\n\\]\n\n- \\(F_t\\)：円周方向力\n- \\(F_a\\)：軸方向力\n\nしたがって、スラスト荷重を支持できる軸受が必要。\n\n平歯車より、\n\n- 製作が難しい\n- 発熱と滑りがやや増える\n- 潤滑と歯当たり管理が重要\n\nである。\n\n:::why title=\"はすば歯車が平歯車より静かな理由\"\n歯が歯幅全体で一度に接触するのではなく、歯の端から連続的に接触面積が増えるため、荷重変化と衝撃が小さくなる。\n:::\n\n---\n\n## やまば歯車\n\n右ねじれと左ねじれのはすば歯車を、V字形に組み合わせた歯車。\n\nヘリンボーン歯車とも呼ばれる。\n\n### 特徴\n\n- 左右の歯面で生じる軸方向力が互いに打ち消し合う\n- はすば歯車と同様に静粛で滑らか\n- 大きな動力・トルクを伝えられる\n- 大形減速機、タービン、船舶などに適する\n\n### 短所・注意点\n\n- 歯切りと仕上げが難しい\n- 左右歯の位相と歯当たりを高精度に合わせる必要がある\n- 高価で、組立と保守が複雑\n- 軸と軸受のたわみで左右の荷重分担が偏らないようにする\n\n中央に工具逃げ溝を設ける構造と、溝のない連続V歯形がある。\n\n### 比較\n\n| 種類 | 歯すじ | 静粛性 | 負荷能力 | 軸方向力 | 製造 |\n|---|---|---:|---:|---:|---:|\n| 平歯車 | 軸に平行 | 普通 | 普通 | なし | 容易 |\n| はすば歯車 | 一方向へ斜め | 高い | 高い | 生じる | やや難しい |\n| やまば歯車 | 左右V字 | 高い | 非常に高い | 相殺 | 難しい |\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "はすば歯車が平歯車より静かな理由",
                  "markdown": "歯が歯幅全体で一度に接触するのではなく、歯の端から連続的に接触面積が増えるため、荷重変化と衝撃が小さくなる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q1-2",
              "label": "Q1-(2)",
              "title": "平ベルト・Vベルト・歯付きベルト",
              "markdown": "## 解答図\n\n![平ベルト・Vベルト・歯付きベルト](/exams/design-engineering-1/2021/belt-types.svg)\n\n## 平ベルト\n\n長方形断面の平らなベルトを平プーリへ巻き付け、摩擦で動力を伝える。\n\n### 特徴\n\n- 構造が簡単で安価\n- 長い軸間距離へ対応\n- 高速運転が可能\n- 振動と衝撃を吸収し、静粛\n- 交差掛けによって回転方向を反転できる\n\n### 短所・使用時の注意\n\n- 滑りと弾性クリープにより速度比が正確でない\n- 初張力が必要で軸受へラジアル荷重を加える\n- プーリにクラウンを付け、ベルトの蛇行・脱落を防ぐ\n- プーリの平行度と芯出しを良くする\n- 油、水、温度、劣化による摩擦係数低下に注意\n- 張り過ぎはベルト、軸、軸受の寿命を短くする\n\n---\n\n## Vベルト\n\n台形断面のベルトをV溝プーリへ掛ける。\n\n### くさび作用\n\nVベルトが溝へ押し込まれると、両側面の法線力が増加する。\n\nそのため、同じ初張力でも平ベルトより大きな摩擦力を得られる。\n\n\\[\n\\boxed{\n\\text{小さな装置で比較的大きな動力を伝達できる}\n}\n\\]\n\n### 特徴\n\n- コンパクト\n- 平ベルトより伝達能力が高い\n- 滑りにより過負荷保護が可能\n- 衝撃・振動を吸収\n- 複数本掛けで大動力に対応\n\n### 使用時の注意\n\n- 滑りがあるため同期位置決めには不向き\n- 適切な初張力が必要\n- ベルト底面を溝底へ接触させず、側面で力を伝える\n- 摩耗したプーリではくさび作用が低下する\n- 複数本掛けでは、長さがそろったマッチドセットを使用し、1本だけ交換しない\n- 小さすぎるプーリ径は曲げ疲労を増やす\n- 軸間距離、巻付角、芯出しを確認する\n\n---\n\n## 歯付きベルト\n\nベルト内面の歯と歯付きプーリをかみ合わせて伝動する。\n\nタイミングベルト、同期ベルトとも呼ばれる。\n\n### 特徴\n\n- 歯のかみ合いで伝えるため滑りがない\n- 速度比と位相関係が正確\n- ベルトなので歯車より長い軸間距離に対応\n- チェーンより静かで潤滑不要\n- 初張力を摩擦ベルトほど大きくする必要がない\n- 軽量で高速運転に適する\n\n### 使用時の注意\n\n- 正しい張力を与える\n- 張力不足では歯飛びが起こる\n- 過大張力ではベルト心線、軸、軸受へ過負荷\n- プーリの平行度とフランジ位置を管理する\n- 最小プーリ歯数、巻付歯数を確保する\n- 急激な衝撃で歯欠け・心線破断が起こる\n- 油、薬品、温度に適したベルト材料を選ぶ\n- 歯形とピッチが異なるベルト・プーリを組み合わせない\n\n:::why title=\"歯付きベルトは滑らないのに、張力が必要な理由\"\n動力伝達自体は歯のかみ合いで行うが、ベルトをプーリへ正しくかみ合わせ、歯飛びとたるみを防ぐために適切な張力が必要である。\n:::\n\n### 試験答案\n\n平ベルトは平プーリとの摩擦で伝動し、長い軸間距離、高速、静粛性に優れるが、滑りとクリープがあり、初張力と芯出しが必要。\n\nVベルトは台形断面によるくさび作用で平ベルトより大きな動力をコンパクトに伝える。滑りがあり、張力、溝摩耗、複数本の長さ合わせに注意する。\n\n歯付きベルトはベルト歯とプーリ歯のかみ合いで同期伝動するため速度比が正確で、潤滑不要。張力、巻付歯数、芯出し、歯飛び、衝撃荷重に注意する。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "歯付きベルトは滑らないのに、張力が必要な理由",
                  "markdown": "動力伝達自体は歯のかみ合いで行うが、ベルトをプーリへ正しくかみ合わせ、歯飛びとたるみを防ぐために適切な張力が必要である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-1",
              "label": "Q2-(1)",
              "title": "通しボルト・押さえボルト・植え込みボルト",
              "markdown": "## 解答図\n\n![通しボルト・押さえボルト・植え込みボルト](/exams/design-engineering-1/2021/bolt-fastening-methods.svg)\n\n## 通しボルト\n\n2つの部材へ通し穴を設け、ボルトを貫通させて反対側をナットで締める方法。\n\n### 特徴\n\n- 部材へめねじ加工が不要\n- ボルトとナットを交換でき、母材の修理が容易\n- 厚さや材料が異なる部材にも使いやすい\n- 両側から工具を当てる必要がある\n- 裏側へナットを置く空間が必要\n\n### 用途\n\nフランジ、機械フレーム、建築接合部など。\n\n---\n\n## 押さえボルト\n\n一方の部材は通し穴、もう一方の部材にはめねじを設け、ボルトを直接ねじ込んで締結する方法。\n\nキャップスクリューによる締結に相当する。\n\n### 特徴\n\n- ナットが不要\n- 裏側へ手が届かない構造に使える\n- 部品点数が少なく、外形をコンパクトにできる\n- めねじ側母材の強度とねじ込み長さが必要\n- 繰返し分解で母材ねじが摩耗・損傷しやすい\n- 軽合金や樹脂ではねじ山の引抜きに注意\n\n### ねじ込み長さ\n\n必要なねじ込み長さは、ボルト材と母材の強度によって決める。\n\n鋼製ボルトを軟らかいアルミ母材へ締め込む場合は、鋼母材より長いねじ込み長さが必要になる。\n\n---\n\n## 植え込みボルト\n\n両端にねじ部を持つボルトの一端を母材へ固定し、突出した他端へ相手部材を通してナットで締結する。\n\nスタッドボルトとも呼ばれる。\n\n### 特徴\n\n- 分解時にナットだけを回すため、母材のめねじを傷めにくい\n- 頻繁に分解・組立する箇所に適する\n- 重い部品をスタッドへ案内して組み付けられる\n- 高温で熱膨張差があるフランジにも使われる\n- 植込み側のゆるみ防止と適切なねじ込み長さが必要\n\n### 用途\n\nエンジンのシリンダヘッド、圧力容器、タービンケーシング、配管フランジ。\n\n### 比較\n\n| 締結法 | 母材めねじ | ナット | 両側工具 | 繰返し分解 |\n|---|---|---|---|---|\n| 通しボルト | 不要 | 必要 | 必要 | 良好 |\n| 押さえボルト | 必要 | 不要 | 原則片側 | 母材ねじに注意 |\n| 植え込みボルト | 必要 | 必要 | ナット側中心 | 非常に良好 |\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2",
              "label": "Q2-(2)",
              "title": "止めねじ・タッピングねじ",
              "markdown": "## 解答図\n\n![止めねじとタッピングねじ](/exams/design-engineering-1/2021/screw-types.svg)\n\n## 止めねじ\n\n頭部を持たない、または頭部が突出しないねじをハブへ半径方向にねじ込み、先端を軸へ押し付ける。\n\n### 目的\n\n- 軸とハブの軽荷重での回り止め\n- プーリ、歯車、ノブなどの軸方向位置決め\n- 調整部品の固定\n- キーの補助的な抜け止め\n\n### 先端形状\n\n- 平先\n- とがり先\n- くぼみ先\n- 棒先\n- 丸先\n\n用途と軸表面への損傷許容度で選ぶ。\n\n### 注意点\n\n- 摩擦と食込みだけで伝えるため、大トルクには不向き\n- 繰返し締付けで軸表面を傷つける\n- 軸へ平面またはくぼみを設けると位置が安定する\n- 振動下ではゆるみ止めを考慮\n- 偏心力を生じやすく、高精度回転体には慎重に用いる\n\n---\n\n## タッピングねじ\n\nあらかじめ雌ねじを加工していない下穴へねじ込み、ねじ自身で相手材へ雌ねじを形成するねじ。\n\n材料を塑性変形させてねじ山を作るねじ成形形と、切りくずを出してねじ山を作るねじ切削形がある。\n\n### 目的\n\n- 薄鋼板の締結\n- 樹脂部品の締結\n- 家電、車体、筐体の大量組立\n- ナットやタップ加工を省略した低コスト締結\n\n### 特徴\n\n- 部品点数と加工工程を削減\n- 片側から締結可能\n- 自動組立に向く\n- 下穴精度と材料特性へ強く依存する\n\n### 注意点\n\n- 下穴が小さすぎると締付トルクが過大となり、ねじ破断・材料割れ\n- 下穴が大きすぎると引抜き強度不足\n- 板厚が小さい場合は十分なかかり山数を確保\n- 何度も脱着すると相手材のねじ山が摩耗\n- 締付けトルクの管理が重要\n- 材料に合ったねじ形状を選ぶ\n\n### 試験答案\n\n止めねじはハブへ半径方向にねじ込み、先端を軸へ押し付けて、軽荷重での回り止めや軸方向位置決めを行う。大トルク伝達には不向きで、軸に平面やくぼみを設けることが望ましい。\n\nタッピングねじは、未加工の下穴へねじ込む際に相手材へ雌ねじを形成する。薄板や樹脂の低コスト組立に用いる。適正な下穴径、板厚、締付トルクを選び、繰返し脱着によるねじ山損傷へ注意する。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-3",
              "label": "Q2-(3)",
              "title": "軸継手の機能と例",
              "markdown": "## 解答図\n\n![フランジ形軸継手とオルダム軸継手](/exams/design-engineering-1/2021/coupling-examples.svg)\n\n## 軸継手の機能\n\n軸継手、カップリングは、2本の軸端を接続して、\n\n\\[\n\\boxed{\n\\text{回転運動とトルクを伝達する機械要素}\n}\n\\]\n\nである。\n\n主な機能：\n\n1. 原動軸と従動軸を接続する\n2. 分解・組立を可能にする\n3. 偏心・偏角・軸方向変位を一定範囲で許容する\n4. 衝撃とねじり振動を吸収する\n5. 軸、軸受、歯車へ加わる過大な拘束力を減らす\n6. 特殊な継手では過負荷時にトルクを遮断する\n\nすべての軸継手が全機能を持つわけではなく、固定軸継手とたわみ軸継手を目的に応じて選ぶ。\n\n---\n\n## 例1：フランジ形固定軸継手\n\n各軸端へフランジを取り付け、ボルトで2つのフランジを締結する。\n\n### 特徴\n\n- 高いねじり剛性\n- 大きなトルクを確実に伝達\n- 構造が簡単\n- 分解・組立が可能\n- 低速・大トルク軸や一般機械に使用\n\n### 注意点\n\n- 偏心・偏角をほとんど許容しない\n- 正確な芯出しが必要\n- 芯ずれがあると軸と軸受へ大きな曲げ荷重\n- ボルト、キー、フランジのせん断・面圧・疲労を確認する\n\n---\n\n## 例2：オルダム軸継手\n\n2つのハブに互いに直交する溝を設け、その間へ両面に直交した突起を持つ中間円板を入れる。\n\n中間円板が溝内を往復滑りすることで、平行偏心を吸収する。\n\n### 特徴\n\n- 比較的大きな平行偏心を許容\n- 入力軸と出力軸を平均的に等速で伝達\n- コンパクト\n- 位置決め機構にも用いられる\n\n### 注意点\n\n- 溝と中間円板の間で滑りが生じる\n- 摩耗、発熱、バックラッシに注意\n- 高速・大トルクでは遠心力と摩耗が増える\n- 金属製では潤滑、樹脂製では温度と寿命を確認\n\n:::why title=\"軸継手が軸ずれを許容できても、芯出しが必要な理由\"\n軸ずれを吸収する際には継手部材が周期的に変形・滑りを行う。許容値を超える芯ずれは、継手疲労、軸受荷重、振動、発熱を増加させる。\n:::\n\n### 試験答案\n\n軸継手は2本の軸を接続し、トルクと回転運動を伝える。形式により、分解性、芯ずれの吸収、衝撃・振動の緩和などの機能を持つ。\n\nフランジ形軸継手は、2つのフランジをボルトで結合する固定軸継手で、大トルクを高剛性で伝えるが芯ずれをほとんど許容しない。\n\nオルダム軸継手は、直交溝を持つ中間円板の滑りによって平行偏心を吸収するたわみ軸継手であるが、滑り部の摩耗へ注意する。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "軸継手が軸ずれを許容できても、芯出しが必要な理由",
                  "markdown": "軸ずれを吸収する際には継手部材が周期的に変形・滑りを行う。許容値を超える芯ずれは、継手疲労、軸受荷重、振動、発熱を増加させる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3-1",
              "label": "Q3-(1)",
              "title": "真円形すべり軸受の動圧支持",
              "markdown": "## 解答図\n\n![真円形すべり軸受の動圧発生](/exams/design-engineering-1/2021/hydrodynamic-bearing.svg)\n\n## 静止時\n\n軸、ジャーナルの直径は軸受内径より少し小さい。\n\nしたがって半径すきま、\n\n\\[\nc=R-r\n\\]\n\nが存在する。\n\n静止中は潤滑油の動圧が発生しないため、荷重を受けた軸は軸受下部へ接触または非常に接近する。\n\n## 回転開始\n\n軸が回転すると、軸表面と潤滑油の間の粘性によって、油が回転方向へ引きずられる。\n\n荷重により軸心が軸受中心から偏心しているため、軸と軸受のすきまは円周方向に一定でない。\n\n回転方向へ進むにつれてすきまが狭くなる、\n\n\\[\n\\boxed{\\text{収束くさび}}\n\\]\n\nが形成される。\n\n## 動圧の発生\n\n粘性流体が広いすきまから狭いすきまへ運び込まれると、連続の条件を満たすために圧力が上昇する。\n\n薄膜潤滑の定常一次元Reynolds方程式は、単純化すると、\n\n\\[\n\\boxed{\n\\frac{d}{dx}\n\\left(\nh^3\\frac{dp}{dx}\n\\right)\n=\n6\\mu U\\frac{dh}{dx}\n}\n\\]\n\nで表される。\n\n- \\(h(x)\\)：油膜厚さ\n- \\(p(x)\\)：油膜圧力\n- \\(\\mu\\)：潤滑油粘度\n- \\(U\\)：軸表面速度\n\n収束くさび領域に正の圧力分布が生じる。\n\nこの圧力を軸受面全体で積分した合力が、外部荷重とつり合う。\n\n\\[\n\\boxed{\n\\int_Ap\\,dA\n\\quad\\text{の合力}\n=\nW\n}\n\\]\n\n軸はわずかに偏心した位置で浮上し、軸と軸受面が油膜で完全に分離される。\n\n## 非接触支持の条件\n\n- 十分な回転速度\n- 適切な潤滑油粘度\n- 十分な油供給\n- 適切な軸受すきま\n- 過大でない荷重\n- 軸・軸受面の良好な形状と表面\n- 発熱と粘度低下を抑えられること\n\nこれらが満たされると、流体潤滑状態となり、摩擦と摩耗が小さくなる。\n\n## 始動・停止時\n\n回転速度が低いと動圧が不足する。\n\nそのため、\n\n- 境界潤滑\n- 混合潤滑\n- 軸と軸受面の接触\n\nが起こり得る。\n\n耐摩耗性を持つ軸受材料、適切な給油、必要に応じて補助ポンプを用いる。\n\n:::why title=\"軸と軸受が同心では動圧が発生しにくい理由\"\nすきまが円周方向に一定なら、油が流れ込む側と流れ出る側で圧力を作るくさび効果がない。荷重による偏心が収束すきまを作り、動圧を発生させる。\n:::\n\n### 試験答案\n\n荷重を受ける軸は軸受中心から偏心し、円周方向に収束する油膜すきまを作る。軸が回転すると、粘性によって潤滑油が収束くさびへ引き込まれる。\n\nReynolds方程式、\n\n\\[\n\\frac{d}{dx}\n\\left(\nh^3\\frac{dp}{dx}\n\\right)\n=\n6\\mu U\\frac{dh}{dx}\n\\]\n\nに従って油膜圧力が発生し、その圧力の積分値が外部荷重とつり合う。十分な速度では軸が油膜上に浮上し、軸と軸受面が非接触で支持される。\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "軸と軸受が同心では動圧が発生しにくい理由",
                  "markdown": "すきまが円周方向に一定なら、油が流れ込む側と流れ出る側で圧力を作るくさび効果がない。荷重による偏心が収束すきまを作り、動圧を発生させる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3-2",
              "label": "Q3-(2)",
              "title": "転がり軸受の寿命",
              "markdown": "## 転がり疲れ\n\n玉またはころと軌道面の接触部には、繰返し接触応力が作用する。\n\n疲労き裂が成長して軌道面がはがれるフレーキングが生じるまでの総回転数を、転がり疲れ寿命とする。\n\n寿命には統計的なばらつきがあるため、基本定格寿命 \\(L_{10}\\) を用いる。\n\n## 基本定格寿命 \\(L_{10}\\)\n\n同一仕様の軸受群を同一条件で運転したとき、\n\n\\[\n\\boxed{\n90\\%\\text{ が転がり疲れ損傷を起こさずに到達する寿命}\n}\n\\]\n\nである。\n\n10%が疲労損傷した時点の寿命ともいえる。\n\n## 動定格荷重、基本動定格荷重 \\(C\\)\n\n問題文の「動定格荷重」は、通常、基本動定格荷重 \\(C\\) を意味する。\n\n\\[\n\\boxed{\n\\text{基本定格寿命が }10^6\\text{ 回転となる一定荷重}\n}\n\\]\n\nである。\n\n- ラジアル軸受：一定の純ラジアル荷重\n- スラスト軸受：一定の純アキシアル荷重\n\n同一仕様の軸受群に対する90%信頼度を基準とする。\n\n\\(C\\) は軸受の寸法、内部形状、転動体数、材料などで決まり、メーカーのカタログに示される。\n\n## 動等価荷重 \\(P\\)\n\n実際には、ラジアル荷重 \\(F_r\\) とアキシアル荷重 \\(F_a\\) が同時に作用し、運転中に荷重条件が異なる。\n\nこれらを、\n\n\\[\n\\boxed{\n\\text{実際と同じ寿命を与える一定方向・一定大きさの仮想荷重}\n}\n\\]\n\nへ換算したものが動等価荷重 \\(P\\)。\n\n一般的には、\n\n\\[\n\\boxed{\nP=XF_r+YF_a\n}\n\\]\n\nで求める。\n\n- \\(X\\)：ラジアル荷重係数\n- \\(Y\\)：アキシアル荷重係数\n\n内輪と外輪のどちらが回転するかを考慮する回転係数 \\(V\\) を含め、\n\n\\[\nP=XVF_r+YF_a\n\\]\n\nと書く場合もある。\n\n係数は軸受形式、接触角、荷重比、内部すきまなどについてメーカー表から選ぶ。\n\n## 寿命式\n\n基本定格寿命は、\n\n\\[\n\\boxed{\nL_{10}\n=\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\nである。\n\nこの \\(L_{10}\\) は百万回転単位。\n\n- 玉軸受：\n\n\\[\n\\boxed{p=3}\n\\]\n\n- ころ軸受：\n\n\\[\n\\boxed{p=\\frac{10}{3}}\n\\]\n\n総回転数で書けば、\n\n\\[\n\\boxed{\nN_{10}\n=\n10^6\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\n回転。\n\n## 時間寿命\n\n回転数を \\(n\\,[\\mathrm{min^{-1}}]\\) とすると、\n\n\\[\n\\boxed{\nL_{10h}\n=\n\\frac{10^6}{60n}\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\n時間である。\n\n## 変動荷重\n\n複数の荷重 \\(P_i\\) が、それぞれ総運転時間の割合 \\(q_i\\) で作用する場合、寿命指数を用いて等価化する。\n\n\\[\n\\boxed{\nP_{\\mathrm{eq}}\n=\n\\left(\n\\sum_iq_iP_i^p\n\\right)^{1/p}\n}\n\\]\n\n各運転状態で回転数が異なる場合は、時間割合ではなく回転数割合を使う。\n\n## 実機での補正\n\n基本寿命式は転がり疲れを対象とする。\n\n実機では、\n\n- 潤滑油膜\n- 汚染\n- 水分\n- 温度\n- 取付誤差\n- 内部すきま\n- 衝撃\n- 信頼度\n- 材料品質\n\nを考慮し、修正定格寿命を用いる。\n\nシール摩耗、保持器破損、焼付きなどは基本定格寿命式だけでは予測できない。\n\n### 試験答案\n\n基本動定格荷重 \\(C\\) は、同一軸受群が90%の信頼度で基本定格寿命 \\(10^6\\) 回転に達する一定荷重である。\n\n動等価荷重 \\(P\\) は、実際のラジアル荷重とアキシアル荷重を、同じ寿命を与える一定荷重へ換算したもの。\n\n基本定格寿命は、\n\n\\[\n\\boxed{\nL_{10}\n=\n\\left(\n\\frac CP\n\\right)^p\n}\n\\]\n\n百万回転であり、\n\n\\[\np=3\n\\]\n\nは玉軸受、\n\n\\[\np=10/3\n\\]\n\nはころ軸受。\n\n時間寿命は、\n\n\\[\n\\boxed{\nL_{10h}\n=\n\\frac{10^6}{60n}\n\\left(\n\\frac CP\n\\right)^p\n}.\n\\]\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3-3",
              "label": "Q3-(3)",
              "title": "すべり軸受と転がり軸受の使い分け",
              "markdown": "## 転がり軸受を選びやすい条件\n\n- 始動摩擦を小さくしたい\n- 低速や断続運転\n- 標準部品で簡単に設計・交換したい\n- 軸方向位置を明確に決めたい\n- 給油装置を簡単にしたい\n- 寿命をカタログ式で見積もりたい\n- 一般機械、電動機、減速機\n\n### 長所\n\n- 静止摩擦と運転摩擦が小さい\n- 始動直後から軸を支持\n- 標準化され、互換性が高い\n- 保守と交換が容易\n- ラジアル荷重・アキシアル荷重用の形式が豊富\n- 必要な潤滑量が比較的小さい\n\n### 短所\n\n- 有限の転がり疲れ寿命\n- 接触応力が高く、衝撃や異物に弱い\n- 騒音・振動が生じやすい\n- 外径方向の設置空間が必要\n- 超高速・超大型では制約\n- 減衰性が小さい\n\n---\n\n## すべり軸受を選びやすい条件\n\n- 高速回転\n- 大径軸\n- 大荷重・衝撃荷重\n- 静粛性を重視\n- 振動を減衰したい\n- 軸受を分割構造にしたい\n- 外径方向のスペースが小さい\n- 長寿命な連続運転\n- 内燃機関、タービン、発電機、大形機械\n\n### 長所\n\n- 油膜面積で荷重を支持し、大荷重に対応\n- 非常に静か\n- 油膜の減衰作用が大きい\n- 大径軸でも製作しやすい\n- 分割構造が可能\n- 適切な流体潤滑下では摩耗が非常に小さい\n- 高速回転に適する\n\n### 短所\n\n- 始動・停止時に接触摩耗\n- 潤滑装置と油温管理が必要\n- 摩擦損失と発熱の管理が必要\n- すきま、粘度、給油量の設計が必要\n- 低速で動圧が得られにくい\n- 焼付きが起こると重大損傷になりやすい\n\n## おおまかな選定指針\n\n| 条件 | 適しやすい軸受 |\n|---|---|\n| 一般機械、標準化、容易な交換 | 転がり軸受 |\n| 低速・頻繁な始動停止 | 転がり軸受 |\n| 低始動トルク | 転がり軸受 |\n| 超高速連続運転 | すべり軸受 |\n| 大径・大荷重 | すべり軸受 |\n| 衝撃荷重・振動吸収 | すべり軸受 |\n| 低騒音 | すべり軸受 |\n| 寿命計算を容易にしたい | 転がり軸受 |\n| 分割構造が必要 | すべり軸受 |\n| 停止状態から油膜支持したい | 静圧すべり軸受 |\n\n### 注意\n\n「高速なら必ずすべり軸受」のように一つの条件だけで決めない。\n\n次を総合して選ぶ。\n\n- 荷重の方向・大きさ・変動\n- 回転数\n- 寿命\n- 精度\n- 剛性\n- 摩擦損失\n- 騒音・振動\n- 潤滑\n- 温度\n- 設置空間\n- 保守性\n- コスト\n\n### 試験答案\n\n転がり軸受は、始動摩擦が小さく、標準化されて交換が容易で、低速・断続運転や一般機械に適する。一方、有限の疲労寿命を持ち、衝撃、異物、騒音に注意する。\n\nすべり軸受は、油膜で広い面積に荷重を分散でき、大径・大荷重・高速連続運転に適し、静粛で減衰性が高い。一方、始動停止時の摩耗と、給油・冷却・すきま設計が必要。\n\nしたがって、一般用途と保守性を重視する場合は転がり軸受、高速・大荷重・大径・低騒音・高減衰を重視する場合はすべり軸受を選ぶ。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q4",
              "label": "Q4",
              "title": "軸径とキーの選定",
              "markdown": "## 問題文（原文）\n\n:::problem-original\n問4\n\n伝達したい動力と回転数が決まっているときの軸径およびキーの選定法に関して述べよ。\n\n可能であれば図と数式を用いて説明するのが望ましい。\n:::\n\n## 解答図\n\n![軸径とキーの選定手順](/exams/design-engineering-1/2021/shaft-key-selection.svg)\n\n## 1. 動力と回転数からトルクを求める\n\n伝達動力 \\(P\\)、回転数 \\(n\\) が与えられたら、\n\n\\[\nP=T\\omega\n\\]\n\n\\[\n\\omega=\\frac{2\\pi n}{60}\n\\]\n\nより、\n\n\\[\n\\boxed{\nT=\\frac{60P}{2\\pi n}\n}\n\\]\n\nを求める。\n\n単位を、\n\n- \\(P\\)：kW\n- \\(n\\)：min\\(^{-1}\\)\n- \\(T\\)：N m\n\nとする場合、\n\n\\[\n\\boxed{\nT=\\frac{9550P}{n}\n}\n\\]\n\nである。\n\n### 設計トルク\n\n実際には、始動、停止、衝撃、負荷変動を考慮して、\n\n\\[\n\\boxed{\nT_d=K_sT\n}\n\\]\n\nとする。\n\n- \\(T_d\\)：設計トルク\n- \\(K_s\\)：使用係数、衝撃係数\n\n係数は原動機、負荷機械、運転時間から選ぶ。\n\n---\n\n## 2. ねじり強度から軸径を求める\n\n中実丸軸の最大せん断応力は、\n\n\\[\n\\tau_{\\max}\n=\n\\frac{T_d(d/2)}{J}\n\\]\n\n\\[\nJ=\\frac{\\pi d^4}{32}\n\\]\n\nより、\n\n\\[\n\\boxed{\n\\tau_{\\max}\n=\n\\frac{16T_d}{\\pi d^3}\n}\n\\]\n\nである。\n\n許容せん断応力を \\([\\tau]\\) とすると、\n\n\\[\n\\frac{16T_d}{\\pi d^3}\n\\le[\\tau].\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nd\n\\ge\n\\left(\n\\frac{16T_d}{\\pi[\\tau]}\n\\right)^{1/3}\n}\n\\]\n\nである。\n\n計算値以上の標準軸径へ切り上げる。\n\n## 許容応力\n\n静荷重なら、材料の降伏強さを安全率で割って定める。\n\n繰返しトルクや回転曲げがある場合は、疲労限度を基準にして、\n\n- キー溝の応力集中\n- 表面粗さ\n- 寸法効果\n- 平均応力\n- 腐食\n- 信頼度\n\nを考慮する。\n\n:::why title=\"軸径がトルクの立方根に比例する理由\"\n丸軸のねじり抵抗は \\(d^3\\) に比例する断面係数で決まる。トルクを8倍にすると、同じ応力に保つには軸径を2倍にする必要がある。\n:::\n\n---\n\n## 3. 曲げが同時に作用する場合\n\n歯車、プーリ、ベルト張力が軸へ作用すると、トルクだけでなく曲げモーメント \\(M\\) が生じる。\n\n曲げ応力は、\n\n\\[\n\\sigma_b\n=\n\\frac{32M}{\\pi d^3}.\n\\]\n\nねじりせん断応力は、\n\n\\[\n\\tau\n=\n\\frac{16T_d}{\\pi d^3}.\n\\]\n\n延性材料についてvon Mises応力を用いれば、\n\n\\[\n\\sigma_{\\mathrm{eq}}\n=\n\\sqrt{\\sigma_b^2+3\\tau^2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\sigma_{\\mathrm{eq}}\n=\n\\frac{16}{\\pi d^3}\n\\sqrt{4M^2+3T_d^2}\n}\n\\]\n\nである。\n\n\\[\n\\sigma_{\\mathrm{eq}}\\le[\\sigma]\n\\]\n\nを満たすように、\n\n\\[\n\\boxed{\nd\n\\ge\n\\left[\n\\frac{\n16\\sqrt{4M^2+3T_d^2}\n}{\n\\pi[\\sigma]\n}\n\\right]^{1/3}\n}\n\\]\n\nとする。\n\n実務では、曲げ・ねじりの衝撃係数や疲労係数を用いた等価モーメント・等価トルク法も使う。\n\n---\n\n## 4. 剛性の確認\n\n強度だけで径を決めると、ねじれやたわみが大きすぎる場合がある。\n\n### ねじれ角\n\n軸長を \\(L\\)、横弾性係数を \\(G\\) とすると、\n\n\\[\n\\boxed{\n\\theta\n=\n\\frac{T_dL}{GJ}\n=\n\\frac{32T_dL}{\\pi Gd^4}\n}\n\\]\n\nである。\n\n許容ねじれ角以下になることを確認する。\n\n### 曲げたわみ・危険速度\n\n長い軸、高速軸では、\n\n- たわみ\n- 軸受部の傾き\n- 固有振動数\n- 危険速度\n\nも確認する。\n\n---\n\n## 5. 軸径からキーの断面寸法を選ぶ\n\n一般的な平行キーを考える。\n\nまず決定した軸径 \\(d\\) に対して、規格表から標準キー寸法、\n\n\\[\n\\boxed{b\\times h}\n\\]\n\nを選ぶ。\n\n- \\(b\\)：キー幅\n- \\(h\\)：キー高さ\n\nキーを過度に大きくすると軸とハブのキー溝が深くなり、軸強度を低下させるため、任意寸法ではなく標準寸法を用いる。\n\n## 6. 接線力\n\nキーが伝える円周方向力を \\(F_t\\) とする。\n\n軸半径は \\(d/2\\) なので、\n\n\\[\nT_d=F_t\\frac d2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nF_t=\\frac{2T_d}{d}\n}\n\\]\n\nである。\n\n---\n\n## 7. キーのせん断強度\n\nキー幅 \\(b\\)、有効長さ \\(l_e\\) のせん断面積は、\n\n\\[\nA_s=bl_e.\n\\]\n\nせん断応力は、\n\n\\[\n\\tau_k\n=\n\\frac{F_t}{bl_e}.\n\\]\n\n\\[\nF_t=\\frac{2T_d}{d}\n\\]\n\nを代入すると、\n\n\\[\n\\boxed{\n\\tau_k\n=\n\\frac{2T_d}{dbl_e}\n}\n\\]\n\nである。\n\n\\[\n\\tau_k\\le[\\tau_k]\n\\]\n\nより、\n\n\\[\n\\boxed{\nl_e\n\\ge\n\\frac{2T_d}\n{db[\\tau_k]}\n}\n\\]\n\nとなる。\n\n---\n\n## 8. キーの面圧強度\n\n沈みキーでは、キー高さの約半分がハブ側で荷重を受けると考える。\n\n投影接触面積は、\n\n\\[\nA_c=\\frac h2l_e.\n\\]\n\nしたがって面圧は、\n\n\\[\n\\sigma_c\n=\n\\frac{F_t}{(h/2)l_e}.\n\\]\n\n\\[\n\\boxed{\n\\sigma_c\n=\n\\frac{4T_d}{dhl_e}\n}\n\\]\n\nである。\n\n\\[\n\\sigma_c\\le[\\sigma_c]\n\\]\n\nより、\n\n\\[\n\\boxed{\nl_e\n\\ge\n\\frac{4T_d}\n{dh[\\sigma_c]}\n}\n\\]\n\nとなる。\n\n## 必要キー長さ\n\nせん断と面圧の両方を満たすように、\n\n\\[\n\\boxed{\nl_e\n\\ge\n\\max\n\\left[\n\\frac{2T_d}{db[\\tau_k]},\n\\frac{4T_d}{dh[\\sigma_c]}\n\\right]\n}\n\\]\n\nとする。\n\nその後、計算値以上の標準キー長さを選ぶ。\n\n### 有効長さ\n\nキー端部が丸形の場合、全長 \\(l\\) のすべてが有効ではない。\n\n規格・形状に応じて、\n\n- 平端：\\(l_e\\simeq l\\)\n- 丸端：概ね \\(l_e\\simeq l-b\\)\n\nなどとして扱う。\n\n使用する設計基準の定義に従う。\n\n---\n\n## 9. 最終確認\n\nキーと軸について、次を確認する。\n\n- ハブ長さ内へキーを配置できるか\n- キー溝による軸断面減少\n- キー溝端部の応力集中\n- 回転曲げ疲労\n- キーのがた・フレッティング\n- ハブの割れ、面圧\n- 軸方向の抜け止め\n- 組立・分解性\n- 高速時のバランス\n- 大トルクや正逆転ではスプライン等が適切でないか\n\nキー溝のある軸は、溝のない軸より疲労強度が低下する。\n\n軸径計算後にキー溝を追加するだけでなく、必要に応じて軸径を増やす。\n\n## 選定の流れ\n\n\\[\n\\boxed{\nP,n\n\\rightarrow\nT\n\\rightarrow\nT_d\n\\rightarrow\nd\n\\rightarrow\n\\text{標準キー }b\\times h\n\\rightarrow\nl_e\n\\rightarrow\n\\text{疲労・剛性・規格確認}\n}\n\\]\n\n### 試験答案\n\n動力 \\(P\\) と回転数 \\(n\\) から、\n\n\\[\nT=\\frac{60P}{2\\pi n}\n\\]\n\nを求め、使用係数を掛けて設計トルク \\(T_d\\) とする。\n\n中実丸軸の最大せん断応力は、\n\n\\[\n\\tau=\\frac{16T_d}{\\pi d^3}\n\\]\n\nなので、\n\n\\[\n\\boxed{\nd\\ge\n\\left(\n\\frac{16T_d}{\\pi[\\tau]}\n\\right)^{1/3}\n}\n\\]\n\nとし、標準径へ切り上げる。曲げがある場合は相当応力、さらにねじれ角、たわみ、危険速度を確認する。\n\n軸径から規格表により平行キーの \\(b\\times h\\) を選ぶ。キーの接線力は、\n\n\\[\nF_t=\\frac{2T_d}{d}.\n\\]\n\nせん断応力と面圧は、\n\n\\[\n\\boxed{\n\\tau_k=\\frac{2T_d}{dbl_e}\n}\n\\]\n\n\\[\n\\boxed{\n\\sigma_c=\\frac{4T_d}{dhl_e}\n}\n\\]\n\nなので、両方が許容値以下となるキー長さを求め、標準長さへ切り上げる。最後にキー溝による応力集中、軸の疲労強度、ハブ長さ、組立性を確認する。\n\n# 年度全体の重要ポイント\n\n- 平歯車は簡単で軸力なし、はすば歯車は静粛だが軸力あり、やまば歯車は軸力を相殺する。\n- 平ベルトとVベルトは摩擦伝動、歯付きベルトは同期かみ合い伝動。\n- 通しボルトはナット使用、押さえボルトは母材めねじ、植え込みボルトは母材ねじを保護して繰返し分解に向く。\n- 止めねじは軽荷重の回り止め、タッピングねじは下穴へ直接雌ねじを形成する。\n- 軸継手はトルク伝達に加え、形式により芯ずれと振動を吸収する。\n- 真円形すべり軸受では、偏心した軸が作る収束油膜くさびに動圧が発生する。\n- 基本動定格荷重 \\(C\\) と動等価荷重 \\(P\\) から、\\(L_{10}=(C/P)^p\\) で寿命を求める。\n- 一般機械・低始動摩擦・容易な交換は転がり軸受、高速・大荷重・低騒音・高減衰はすべり軸受が有利。\n- 軸径はトルクと許容応力から求め、キーは標準断面を選んだ後、せん断と面圧から長さを決める。",
              "major": "4",
              "why": [
                {
                  "title": "軸径がトルクの立方根に比例する理由",
                  "markdown": "丸軸のねじり抵抗は \\(d^3\\) に比例する断面係数で決まる。トルクを8倍にすると、同じ応力に保つには軸径を2倍にする必要がある。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            }
          ]
        }
      ]
    },
    {
      "name": "工業力学A",
      "slug": "engineering-mechanics-a",
      "years": [
        {
          "year": 2024,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "西原",
            "花崎"
          ],
          "status": "completed",
          "sourceFile": "工業力学A(西原·花崎)2024.pdf",
          "sourcePages": [
            1,
            2,
            3,
            4
          ],
          "problemAssets": [
            "/exams/engineering-mechanics-a/2024/page-1.webp",
            "/exams/engineering-mechanics-a/2024/page-2.webp",
            "/exams/engineering-mechanics-a/2024/page-3.webp",
            "/exams/engineering-mechanics-a/2024/page-4.webp"
          ],
          "localPdfUrl": "/pdfs/engineering-mechanics-a/2024.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1bShxwKoUTIisUW_fXotj-J7aebCXP8ZE/edit",
          "pdfSourceFile": "工業力学A(西原·花崎)2024.pdf",
          "introMarkdown": "> [!NOTE]\n> Webサイトでは各問題の原文と元PDF画像を表示する。解説は原文とは別の領域に表示する。\n\n\n## 1. ラグランジュ方程式\n\n一般化座標を \\(q_i\\)、ラグランジアンを\n\n\\[\nL=T-U\n\\]\n\nとすると、運動方程式は\n\n\\[\n\\boxed{\n\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot q_i}\\right)\n-\\frac{\\partial L}{\\partial q_i}=0\n}\n\\]\n\nである。\n\n:::why title=\"一般化座標とは？\"\n物体の状態を表すために必要な、互いに独立な座標のこと。直交座標 \\(x,y\\) だけでなく、極座標 \\(r,\\theta\\)、回転角 \\(\\phi\\) なども一般化座標として使える。\n:::\n\n## 2. 循環座標と保存量\n\nラグランジアンに座標 \\(q\\) が直接現れず、\\(\\dot q\\) だけが現れるとき、\n\n\\[\n\\frac{\\partial L}{\\partial q}=0\n\\]\n\nなので、\n\n\\[\n\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot q}\\right)=0.\n\\]\n\nしたがって、\n\n\\[\np_q=\\frac{\\partial L}{\\partial \\dot q}\n\\]\n\nが保存される。\n\n## 3. 平行軸の定理\n\n質量 \\(m\\) の物体について、重心を通る軸まわりの慣性モーメントを \\(I_G\\)、その軸と平行で距離 \\(d\\) だけ離れた軸まわりを \\(I\\) とすると、\n\n\\[\n\\boxed{I=I_G+md^2}\n\\]\n\nである。\n\n## 4. 小振動\n\n平衡位置からの変位ベクトルを \\(\\boldsymbol q\\) とし、\n\n\\[\nM\\ddot{\\boldsymbol q}+K\\boldsymbol q=0\n\\]\n\nと書けるとき、\n\n\\[\n\\boldsymbol q=\\boldsymbol a e^{i\\omega t}\n\\]\n\nを代入して、\n\n\\[\n(K-\\omega^2M)\\boldsymbol a=0.\n\\]\n\n非自明解が存在する条件は、\n\n\\[\n\\boxed{\\det(K-\\omega^2M)=0}\n\\]\n\nである。これを振動数方程式または永年方程式という。\n\n## 5. 複素速度ポテンシャル\n\n複素座標を\n\n\\[\nz=x+iy\n\\]\n\nとし、複素速度ポテンシャルを \\(f(z)\\) とすると、\n\n\\[\nu-iv=\\frac{df}{dz}\n\\]\n\nで速度場を表せる。\n\n---",
          "questions": [
            {
              "id": "q1-a",
              "label": "Q1-(a)",
              "title": "中心力場における保存量",
              "markdown": "### 解法方針\n\nラグランジアンを作り、座標 \\(\\theta\\) が循環座標であることを利用する。\n\n### ラグランジアン\n\n\\[\nL=T-U\n=\n\\frac12m(\\dot r^2+r^2\\dot\\theta^2)\n-\\frac12kr^2.\n\\]\n\nこの式には \\(\\theta\\) 自身は含まれない。\n\n\\[\n\\frac{\\partial L}{\\partial\\theta}=0.\n\\]\n\nしたがって、\\(\\theta\\) に関するラグランジュ方程式から、\n\n\\[\n\\frac{d}{dt}\n\\left(\n\\frac{\\partial L}{\\partial\\dot\\theta}\n\\right)=0.\n\\]\n\nここで、\n\n\\[\n\\frac{\\partial L}{\\partial\\dot\\theta}\n=mr^2\\dot\\theta.\n\\]\n\nよって、\n\n\\[\n\\boxed{mr^2\\dot\\theta=\\text{一定}}\n\\]\n\nである。\n\nこれは原点まわりの角運動量である。\n\n:::why title=\"なぜ θ が式に現れないの？\"\nポテンシャル \\(U=\\frac12kr^2\\) は原点からの距離だけで決まり、向きには依存しない。どの方向へ回転しても物理法則が変わらない回転対称性があるためである。\n:::\n\n### 最終解答\n\n\\[\n\\boxed{\\ell=mr^2\\dot\\theta}\n\\]\n\nは保存量である。\n\n### 試験答案\n\n\\[\nL=\\frac12m(\\dot r^2+r^2\\dot\\theta^2)-\\frac12kr^2.\n\\]\n\n\\(L\\) は \\(\\theta\\) を陽に含まないので、\n\n\\[\n\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot\\theta}\\right)=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{mr^2\\dot\\theta=\\text{const.}}\n\\]\n\nとなり、角運動量が保存される。\n\n### 重要ポイント\n\n- 座標がラグランジアンに現れなければ、その共役運動量が保存される。\n- 中心力場では角運動量保存を最初に疑う。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ θ が式に現れないの？",
                  "markdown": "ポテンシャル \\(U=\\frac12kr^2\\) は原点からの距離だけで決まり、向きには依存しない。どの方向へ回転しても物理法則が変わらない回転対称性があるためである。"
                }
              ],
              "importantPoints": [
                "座標がラグランジアンに現れなければ、その共役運動量が保存される。",
                "中心力場では角運動量保存を最初に疑う。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q1-b",
              "label": "Q1-(b)",
              "title": "二次元調和振動子の回帰時間",
              "markdown": "### 解法方針\n\n極座標のまま解くより、直交座標へ戻すと簡単になる。\n\n\\[\nr^2=x^2+y^2\n\\]\n\nなので、\n\n\\[\nU=\\frac12k(x^2+y^2).\n\\]\n\n運動エネルギーも、\n\n\\[\nT=\\frac12m(\\dot x^2+\\dot y^2)\n\\]\n\nである。\n\nしたがってラグランジアンは、\n\n\\[\nL=\n\\frac12m(\\dot x^2+\\dot y^2)\n-\\frac12k(x^2+y^2).\n\\]\n\n### 運動方程式\n\n\\(x\\) について、\n\n\\[\nm\\ddot x+kx=0.\n\\]\n\n\\(y\\) について、\n\n\\[\nm\\ddot y+ky=0.\n\\]\n\n固有角振動数を\n\n\\[\n\\omega=\\sqrt{\\frac{k}{m}}\n\\]\n\nと置く。\n\n一般解は、\n\n\\[\nx(t)=A\\cos\\omega t+B\\sin\\omega t\n\\]\n\n\\[\ny(t)=C\\cos\\omega t+D\\sin\\omega t.\n\\]\n\n三角関数は\n\n\\[\n\\cos(\\omega t+2\\pi)=\\cos\\omega t\n\\]\n\n\\[\n\\sin(\\omega t+2\\pi)=\\sin\\omega t\n\\]\n\nを満たすので、\n\n\\[\nx\\left(t+\\frac{2\\pi}{\\omega}\\right)=x(t)\n\\]\n\n\\[\ny\\left(t+\\frac{2\\pi}{\\omega}\\right)=y(t).\n\\]\n\nしたがって、質点の位置ベクトルは必ず同じ位置へ戻る。\n\n### 最終解答\n\n\\[\n\\boxed{\nT_{\\mathrm{return}}\n=\n\\frac{2\\pi}{\\omega}\n=\n2\\pi\\sqrt{\\frac{m}{k}}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ x と y の周期が同じなの？\"\nポテンシャルが \\(x^2+y^2\\) に比例する等方的なばねだからである。x方向とy方向のばね定数が同じなので、両方の角振動数が \\(\\sqrt{k/m}\\) になる。\n:::\n\n### 間違えやすい点\n\n- 動径 \\(r\\) の周期と、位置ベクトル \\((x,y)\\) の回帰時間は異なる。\n- 一般の位置へ戻る保証時間は \\(2\\pi/\\omega\\)。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ x と y の周期が同じなの？",
                  "markdown": "ポテンシャルが \\(x^2+y^2\\) に比例する等方的なばねだからである。x方向とy方向のばね定数が同じなので、両方の角振動数が \\(\\sqrt{k/m}\\) になる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-c",
              "label": "Q1-(c)",
              "title": "動径の周期",
              "markdown": "### 解法方針\n\n\\(r\\) ではなく \\(r^2=x^2+y^2\\) を計算する。\n\n\\[\nx=A\\cos\\omega t+B\\sin\\omega t\n\\]\n\n\\[\ny=C\\cos\\omega t+D\\sin\\omega t.\n\\]\n\nこれらを二乗して足すと、\n\n\\[\nr^2=x^2+y^2.\n\\]\n\n三角恒等式\n\n\\[\n\\cos^2\\omega t=\\frac{1+\\cos2\\omega t}{2}\n\\]\n\n\\[\n\\sin^2\\omega t=\\frac{1-\\cos2\\omega t}{2}\n\\]\n\n\\[\n2\\sin\\omega t\\cos\\omega t=\\sin2\\omega t\n\\]\n\nを使えば、\n\n\\[\nr^2(t)\n=\nC_0+C_1\\cos2\\omega t+C_2\\sin2\\omega t\n\\]\n\nと書ける。\n\nしたがって、\n\n\\[\nr^2\\left(t+\\frac{\\pi}{\\omega}\\right)=r^2(t).\n\\]\n\n\\(r\\ge0\\) なので、\n\n\\[\nr\\left(t+\\frac{\\pi}{\\omega}\\right)=r(t).\n\\]\n\n\\(r\\) が一定でない場合、その周期は、\n\n\\[\n\\boxed{\nT_r=\\frac{\\pi}{\\omega}\n=\n\\pi\\sqrt{\\frac{m}{k}}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ位置の周期の半分になるの？\"\n位置ベクトルが反対向きになっても、原点からの距離は同じである。時間 \\(\\pi/\\omega\\) 後には \\((x,y)\\to(-x,-y)\\) となるが、\\(r=\\sqrt{x^2+y^2}\\) は変わらない。\n:::\n\n### 最終解答\n\n\\[\n\\boxed{\nT_r=\\pi\\sqrt{\\frac{m}{k}}\n}\n\\]\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ位置の周期の半分になるの？",
                  "markdown": "位置ベクトルが反対向きになっても、原点からの距離は同じである。時間 \\(\\pi/\\omega\\) 後には \\((x,y)\\to(-x,-y)\\) となるが、\\(r=\\sqrt{x^2+y^2}\\) は変わらない。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-a",
              "label": "Q2-(a)",
              "title": "穴あき滑車の質量と慣性モーメント",
              "markdown": "### 質量\n\n穴を開ける前の円板の質量は、\n\n\\[\nm_0=\\rho\\pi r^2.\n\\]\n\n1個の穴の質量に相当する量は、\n\n\\[\nm_h\n=\n\\rho\\pi\\left(\\frac r4\\right)^2\n=\n\\frac{\\rho\\pi r^2}{16}.\n\\]\n\n穴は4個なので、\n\n\\[\nm\n=\nm_0-4m_h.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nm=\\frac34\\rho\\pi r^2\n}\n\\]\n\nである。\n\n### 慣性モーメント\n\n穴を開ける前の円板は、\n\n\\[\nI_0=\\frac12m_0r^2\n=\\frac12\\rho\\pi r^4.\n\\]\n\n1個の穴について、穴中心まわりの慣性モーメントは、\n\n\\[\nI_{h,G}\n=\n\\frac12m_h\\left(\\frac r4\\right)^2.\n\\]\n\n穴の中心は滑車中心から \\(r/2\\) 離れているので、平行軸の定理より、\n\n\\[\nI_h\n=\nI_{h,G}\n+\nm_h\\left(\\frac r2\\right)^2.\n\\]\n\n代入すると、\n\n\\[\nI_h\n=\nm_hr^2\\left(\\frac1{32}+\\frac14\\right)\n=\n\\frac9{32}m_hr^2.\n\\]\n\n\\[\nm_h=\\frac{\\rho\\pi r^2}{16}\n\\]\n\nより、\n\n\\[\nI_h=\\frac{9}{512}\\rho\\pi r^4.\n\\]\n\n穴は4個なので、\n\n\\[\nI\n=\nI_0-4I_h\n\\]\n\n\\[\n=\n\\frac12\\rho\\pi r^4\n-\n\\frac{36}{512}\\rho\\pi r^4.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nI=\\frac{55}{128}\\rho\\pi r^4\n}\n\\]\n\nである。\n\n\\(m\\) を用いれば、\n\n\\[\n\\boxed{\nI=\\frac{55}{96}mr^2\n}\n\\]\n\nとも書ける。\n\n### 重要ポイント\n\n- 穴は「負の質量」と考えて円板から引く。\n- 穴の慣性モーメントには平行軸の定理が必要。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [
                "穴は「負の質量」と考えて円板から引く。",
                "穴の慣性モーメントには平行軸の定理が必要。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-b",
              "label": "Q2-(b)",
              "title": "系全体の運動エネルギー",
              "markdown": "滑車の並進運動エネルギーは、\n\n\\[\n\\frac12m\\dot x^2.\n\\]\n\n滑車の回転運動エネルギーは、\n\n\\[\n\\frac12I\\dot\\phi^2.\n\\]\n\n\\[\n\\dot\\phi=\\frac{\\dot x}{r}\n\\]\n\nなので、\n\n\\[\n\\frac12I\\dot\\phi^2\n=\n\\frac12\\frac{I}{r^2}\\dot x^2.\n\\]\n\n重りの運動エネルギーは、\n\n\\[\n\\frac12M\\dot y^2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nT=\n\\frac12\\left(m+\\frac{I}{r^2}\\right)\\dot x^2\n+\n\\frac12M\\dot y^2\n}\n\\]\n\nである。\n\n:::why title=\"なぜ滑車の回転エネルギーも必要なの？\"\n滑車は中心が上下に移動するだけでなく、ロープとの非すべり条件によって回転もする。並進と回転の両方の運動エネルギーを足す必要がある。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ滑車の回転エネルギーも必要なの？",
                  "markdown": "滑車は中心が上下に移動するだけでなく、ロープとの非すべり条件によって回転もする。並進と回転の両方の運動エネルギーを足す必要がある。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-c",
              "label": "Q2-(c)",
              "title": "系全体のポテンシャルエネルギー",
              "markdown": "座標 \\(x,y\\) は下向きを正とする。\n\n### 上側ばね\n\n伸びは \\(2x\\) なので、\n\n\\[\nU_{\\mathrm{upper}}\n=\n\\frac12k(2x)^2\n=\n2kx^2.\n\\]\n\n### 下側ばね\n\n滑車中心と重りの相対変位は、\n\n\\[\ny-x\n\\]\n\nなので、\n\n\\[\nU_{\\mathrm{lower}}\n=\n\\frac12k(y-x)^2.\n\\]\n\n### 重力\n\n下向きを正としたため、\n\n\\[\nU_g=-mgx-Mgy.\n\\]\n\nしたがって、加法定数を除いて、\n\n\\[\n\\boxed{\nU=\n2kx^2\n+\\frac12k(y-x)^2\n-mgx-Mgy\n}\n\\]\n\nである。\n\n### 注意\n\n自然長や座標原点の取り方によって一次項・定数項の見え方は変わるが、平衡位置のまわりで線形化した振動数方程式は同じになる。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-d",
              "label": "Q2-(d)",
              "title": "振動数方程式",
              "markdown": "### ラグランジアン\n\n\\[\nL=T-U.\n\\]\n\n便利のため、\n\n\\[\nA=m+\\frac{I}{r^2}\n\\]\n\nと置く。\n\n### \\(x\\) の運動方程式\n\n\\[\n\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot x}\\right)\n-\n\\frac{\\partial L}{\\partial x}=0.\n\\]\n\n\\[\nA\\ddot x+5kx-ky-mg=0.\n\\]\n\n### \\(y\\) の運動方程式\n\n\\[\nM\\ddot y+ky-kx-Mg=0.\n\\]\n\n### 平衡位置\n\n平衡位置を \\(x_0,y_0\\) とすると、\n\n\\[\n5kx_0-ky_0-mg=0\n\\]\n\n\\[\nky_0-kx_0-Mg=0.\n\\]\n\n平衡位置からの微小変位を、\n\n\\[\n\\xi=x-x_0,\\qquad \\eta=y-y_0\n\\]\n\nと置くと、重力の定数項は消える。\n\n\\[\nA\\ddot\\xi+5k\\xi-k\\eta=0\n\\]\n\n\\[\nM\\ddot\\eta+k\\eta-k\\xi=0.\n\\]\n\n行列で、\n\n\\[\n\\begin{pmatrix}\nA&0\\\\\n0&M\n\\end{pmatrix}\n\\begin{pmatrix}\n\\ddot\\xi\\\\\n\\ddot\\eta\n\\end{pmatrix}\n+\nk\n\\begin{pmatrix}\n5&-1\\\\\n-1&1\n\\end{pmatrix}\n\\begin{pmatrix}\n\\xi\\\\\n\\eta\n\\end{pmatrix}\n=0.\n\\]\n\n調和解\n\n\\[\n\\begin{pmatrix}\n\\xi\\\\\n\\eta\n\\end{pmatrix}\n=\n\\begin{pmatrix}\nX\\\\\nY\n\\end{pmatrix}\ne^{i\\omega t}\n\\]\n\nを仮定すると、\n\n\\[\n\\begin{pmatrix}\n5k-A\\omega^2&-k\\\\\n-k&k-M\\omega^2\n\\end{pmatrix}\n\\begin{pmatrix}\nX\\\\\nY\n\\end{pmatrix}\n=0.\n\\]\n\n非自明解が存在する条件は、\n\n\\[\n\\boxed{\n\\begin{vmatrix}\n5k-A\\omega^2&-k\\\\\n-k&k-M\\omega^2\n\\end{vmatrix}\n=0\n}\n\\]\n\nである。\n\nしたがって振動数方程式は、\n\n\\[\n\\boxed{\n(5k-A\\omega^2)(k-M\\omega^2)-k^2=0\n}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\nAM\\omega^4\n-k(A+5M)\\omega^2\n+4k^2=0\n}\n\\]\n\nである。\n\nここで、\n\n\\[\n\\boxed{\nA=m+\\frac{I}{r^2}\n}\n\\]\n\nである。\n\n### 固有角振動数\n\n必要なら、\n\n\\[\n\\boxed{\n\\omega_{\\pm}^2\n=\n\\frac{k\\left[\nA+5M\n\\pm\n\\sqrt{(A+5M)^2-16AM}\n\\right]}\n{2AM}\n}\n\\]\n\nと求められる。\n\n### 試験答案\n\n非すべり条件より、\n\n\\[\n\\dot\\phi=\\frac{\\dot x}{r}\n\\]\n\nかつ上側ばねの伸びは \\(2x\\)。\n\n\\[\nT=\n\\frac12\\left(m+\\frac{I}{r^2}\\right)\\dot x^2\n+\\frac12M\\dot y^2\n\\]\n\n\\[\nU=\n2kx^2+\\frac12k(y-x)^2-mgx-Mgy.\n\\]\n\n平衡位置からの変位 \\(\\xi,\\eta\\) を用いると、\n\n\\[\n\\left(m+\\frac{I}{r^2}\\right)\\ddot\\xi+5k\\xi-k\\eta=0\n\\]\n\n\\[\nM\\ddot\\eta-k\\xi+k\\eta=0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\left|\n\\begin{array}{cc}\n5k-\\left(m+\\frac{I}{r^2}\\right)\\omega^2&-k\\\\\n-k&k-M\\omega^2\n\\end{array}\n\\right|=0\n}\n\\]\n\nを得る。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3-1",
              "label": "Q3-(1)",
              "title": "Liouvilleの定理",
              "markdown": "## 問題文（原文）\n\n:::problem-original\n一次元運動について、Liouvilleの定理の証明を考える。\n\n位相空間における閉領域の体積は、\n\n\\[\nV=\\int dpdq\n=\n\\int\n\\frac{\\partial(p,q)}{\\partial(c_1,c_2)}\ndc_1dc_2\n\\]\n\nである。\n\nここで、\n\n\\[\n\\frac{\\partial(p,q)}{\\partial(c_1,c_2)}\n=\n\\begin{vmatrix}\n\\dfrac{\\partial p}{\\partial c_1}\n&\n\\dfrac{\\partial p}{\\partial c_2}\n\\\\\n\\dfrac{\\partial q}{\\partial c_1}\n&\n\\dfrac{\\partial q}{\\partial c_2}\n\\end{vmatrix}\n\\]\n\nはヤコビアンである。\n\n\\(p=p(c_1,c_2,t)\\)、\\(q=q(c_1,c_2,t)\\) のとき、積分変数を \\((p,q)\\to(c_1,c_2)\\) に変えている。\n\n\\(c_1,c_2\\) は軌道を決定するパラメータで、\\(t\\) によらない。\n\n空欄 A〜E を求め、Liouvilleの定理 \\(dV/dt=0\\) を示せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-3.webp\nalt: 工業力学A 2024年度 問題3-1の原本\n:::\n\n## (1) AとB\n\nヤコビアンを時間微分する。\n\n\\[\nJ=\n\\frac{\\partial(p,q)}{\\partial(c_1,c_2)}\n=\np_{c_1}q_{c_2}-p_{c_2}q_{c_1}.\n\\]\n\n時間微分すると、\n\n\\[\n\\dot J\n=\n\\dot p_{c_1}q_{c_2}\n+p_{c_1}\\dot q_{c_2}\n-\\dot p_{c_2}q_{c_1}\n-p_{c_2}\\dot q_{c_1}.\n\\]\n\n前半は、\n\n\\[\n\\frac{\\partial(\\dot p,q)}{\\partial(c_1,c_2)}.\n\\]\n\n後半は、\n\n\\[\n\\frac{\\partial(p,\\dot q)}{\\partial(c_1,c_2)}\n=\n\\frac{\\partial(-\\dot q,p)}{\\partial(c_1,c_2)}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{A=\\dot p}\n\\]\n\n\\[\n\\boxed{B=-\\dot q}\n\\]\n\nである。\n\n:::why title=\"なぜ B は −q̇ なの？\"\n問題文では第2項が \\(\\partial(B,p)/\\partial(c_1,c_2)\\) の順番で書かれている。ヤコビアンは2つの引数を入れ替えると符号が反転するため、\\(\\partial(p,\\dot q) = \\partial(-\\dot q,p)\\) となる。\n:::\n\n## (2) CとD\n\n正準方程式は、\n\n\\[\n\\dot q=\\frac{\\partial H}{\\partial p}\n\\]\n\n\\[\n\\dot p=-\\frac{\\partial H}{\\partial q}.\n\\]\n\nしたがって、\n\n\\[\nA=\\dot p=-\\frac{\\partial H}{\\partial q}\n\\]\n\n\\[\nB=-\\dot q=-\\frac{\\partial H}{\\partial p}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nC=-\\frac{\\partial H}{\\partial q}\n}\n\\]\n\n\\[\n\\boxed{\nD=-\\frac{\\partial H}{\\partial p}\n}\n\\]\n\nである。\n\n## (3) Eと体積保存\n\nヤコビアンの連鎖則より、\n\n\\[\n\\frac{\\partial(C,q)}{\\partial(c_1,c_2)}\n=\n\\frac{\\partial(C,q)}{\\partial(p,q)}\n\\frac{\\partial(p,q)}{\\partial(c_1,c_2)}.\n\\]\n\n\\[\nC=-H_q\n\\]\n\nなので、\n\n\\[\n\\frac{\\partial(C,q)}{\\partial(p,q)}\n=\n-\\frac{\\partial^2H}{\\partial p\\partial q}.\n\\]\n\nしたがって第1項は、\n\n\\[\n-\\frac{\\partial^2H}{\\partial p\\partial q}\n\\frac{\\partial(p,q)}{\\partial(c_1,c_2)}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nE=\n-\\frac{\\partial^2H}{\\partial p\\partial q}\n\\frac{\\partial(p,q)}{\\partial(c_1,c_2)}\n}\n\\]\n\nである。\n\n一方、第2項は、\n\n\\[\n+\\frac{\\partial^2H}{\\partial q\\partial p}\n\\frac{\\partial(p,q)}{\\partial(c_1,c_2)}\n=-E\n\\]\n\nである。\n\n\\(H\\) が十分滑らかなら、混合偏微分は等しい。\n\n\\[\n\\frac{\\partial^2H}{\\partial p\\partial q}\n=\n\\frac{\\partial^2H}{\\partial q\\partial p}.\n\\]\n\nしたがって被積分関数は0となり、\n\n\\[\n\\boxed{\\frac{dV}{dt}=0}\n\\]\n\nを得る。\n\n### 空欄まとめ\n\n\\[\n\\boxed{A=\\dot p}\n\\]\n\n\\[\n\\boxed{B=-\\dot q}\n\\]\n\n\\[\n\\boxed{C=-H_q}\n\\]\n\n\\[\n\\boxed{D=-H_p}\n\\]\n\n\\[\n\\boxed{\nE=-H_{pq}\n\\frac{\\partial(p,q)}{\\partial(c_1,c_2)}\n}\n\\]\n\n### Liouvilleの定理の意味\n\nハミルトン力学に従って時間発展する点の集まりは、位相空間内で形が変形しても、体積は変化しない。\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "なぜ B は −q̇ なの？",
                  "markdown": "問題文では第2項が \\(\\partial(B,p)/\\partial(c_1,c_2)\\) の順番で書かれている。ヤコビアンは2つの引数を入れ替えると符号が反転するため、\\(\\partial(p,\\dot q) = \\partial(-\\dot q,p)\\) となる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2-1",
              "label": "Q3-(2)-(1)",
              "title": "三渦点の運動方程式",
              "markdown": "渦点 \\(k\\) は、自分以外の渦点が作る速度場で移動する。\n\n\\[\n\\frac{dz_k^*}{dt}\n=\n\\sum_{j\\ne k}\n\\frac{\\Gamma_j}{2\\pi i}\n\\frac1{z_k-z_j}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{dz_1^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{z_1-z_2}\n-\\frac2{z_1-z_3}\n\\right)\n}\n\\]\n\n\\[\n\\boxed{\n\\frac{dz_2^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{z_2-z_1}\n-\\frac2{z_2-z_3}\n\\right)\n}\n\\]\n\n\\[\n\\boxed{\n\\frac{dz_3^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{z_3-z_1}\n+\\frac1{z_3-z_2}\n\\right)\n}\n\\]\n\nである。\n\n### 間違えやすい点\n\n- 渦点自身が作る速度場は含めない。\n- 第3渦点の循環は \\(-2\\Gamma\\)。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2-2",
              "label": "Q3-(2)-(2)",
              "title": "重心と第3渦点の運動",
              "markdown": "\\[\nz_G=\\frac{z_1+z_2}{2}\n\\]\n\nなので、\n\n\\[\n\\frac{dz_G^*}{dt}\n=\n\\frac12\n\\left(\n\\frac{dz_1^*}{dt}\n+\n\\frac{dz_2^*}{dt}\n\\right).\n\\]\n\n\\(z_1,z_2\\) 間の相互作用は、\n\n\\[\n\\frac1{z_1-z_2}\n+\n\\frac1{z_2-z_1}=0\n\\]\n\nにより打ち消し合う。\n\n残りを整理すると、\n\n\\[\n\\frac{dz_G^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{z_3-z_1}\n+\n\\frac1{z_3-z_2}\n\\right).\n\\]\n\nこれは、\n\n\\[\n\\frac{dz_3^*}{dt}\n\\]\n\nと等しい。\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{dz_G}{dt}\n=\n\\frac{dz_3}{dt}\n}\n\\]\n\nである。\n\nよって、\n\n\\[\n\\boxed{\nz_G-z_3=\\text{一定}\n}\n\\]\n\nであり、\\(z_G\\) と \\(z_3\\) は同じ速度で並進し、相対位置を変えない。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2-3",
              "label": "Q3-(2)-(3)",
              "title": "等速度並進する配置",
              "markdown": "\\[\nz_1-z_G=c\n\\]\n\nと置く。\n\n\\[\nz_G=\\frac{z_1+z_2}{2}\n\\]\n\nなので、\n\n\\[\nz_2-z_G=-c.\n\\]\n\nまた、\n\n\\[\nz_3-z_G=a.\n\\]\n\nしたがって、\n\n\\[\nz_1=z_G+c,\\qquad\nz_2=z_G-c,\\qquad\nz_3=z_G+a.\n\\]\n\n### \\(z_1\\) の速度\n\n\\[\nz_1-z_2=2c\n\\]\n\n\\[\nz_1-z_3=c-a.\n\\]\n\nよって、\n\n\\[\n\\frac{dz_1^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{2c}\n-\\frac2{c-a}\n\\right).\n\\]\n\n### \\(z_G\\) の速度\n\n前問より \\(z_G\\) と \\(z_3\\) の速度は等しい。\n\n\\[\nz_3-z_1=a-c,\\qquad\nz_3-z_2=a+c.\n\\]\n\nしたがって、\n\n\\[\n\\frac{dz_G^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{a-c}\n+\n\\frac1{a+c}\n\\right).\n\\]\n\n\\(z_1\\) と \\(z_G\\) が同じ速度で移動するためには、\n\n\\[\n\\frac1{2c}\n-\\frac2{c-a}\n=\n\\frac1{a-c}\n+\n\\frac1{a+c}.\n\\]\n\n\\[\n-\\frac2{c-a}\n=\n\\frac2{a-c}\n\\]\n\nを用いて整理すると、\n\n\\[\n\\frac1{2c}\n+\n\\frac1{a-c}\n-\n\\frac1{a+c}\n=0.\n\\]\n\n\\[\n\\frac1{a-c}\n-\n\\frac1{a+c}\n=\n\\frac{2c}{a^2-c^2}\n\\]\n\nなので、\n\n\\[\n\\frac1{2c}\n+\n\\frac{2c}{a^2-c^2}\n=0.\n\\]\n\n両辺に \\(2c(a^2-c^2)\\) を掛けると、\n\n\\[\na^2-c^2+4c^2=0.\n\\]\n\nしたがって、\n\n\\[\na^2+3c^2=0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nc=\\pm\\frac{i}{\\sqrt3}a\n}\n\\]\n\nである。\n\n### 幾何学的意味\n\n\\(c\\) は \\(a\\) を90度回転させ、長さを \\(1/\\sqrt3\\) 倍したベクトルである。\n\n\\[\nz_1=z_G\\pm\\frac{i}{\\sqrt3}a\n\\]\n\n\\[\nz_2=z_G\\mp\\frac{i}{\\sqrt3}a\n\\]\n\n\\[\nz_3=z_G+a.\n\\]\n\n各点間距離を計算すると、\n\n\\[\n|z_1-z_2|\n=\n\\frac{2|a|}{\\sqrt3}\n\\]\n\n\\[\n|z_1-z_3|\n=\n\\left|a-\\frac{i}{\\sqrt3}a\\right|\n=\n\\frac{2|a|}{\\sqrt3}\n\\]\n\n\\[\n|z_2-z_3|\n=\n\\frac{2|a|}{\\sqrt3}.\n\\]\n\nしたがって、3つの渦点は正三角形の頂点に位置する。\n\n\\[\n\\boxed{\\text{等速度並進する配置は正三角形}}\n\\]\n\nである。\n\n:::why title=\"なぜ回転せず並進するの？\"\n3点がこの正三角形配置にあると、各渦点が他の2点から受ける速度が全く同じになる。そのため相対配置を変えず、全体が同じ速度で移動する。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "なぜ回転せず並進するの？",
                  "markdown": "3点がこの正三角形配置にあると、各渦点が他の2点から受ける速度が全く同じになる。そのため相対配置を変えず、全体が同じ速度で移動する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2-4",
              "label": "Q3-(2)-(4)",
              "title": "ハミルトニアン",
              "markdown": "正三角形の一辺の長さを \\(d\\) とすると、\n\n\\[\nd=\\frac{2|a|}{\\sqrt3}.\n\\]\n\nしたがって、\n\n\\[\nd^2=\\frac{4|a|^2}{3}.\n\\]\n\nハミルトニアンは順序付きの二重和なので、各組は2回ずつ数えられる。\n\n循環の積は、\n\n\\[\n\\Gamma_1\\Gamma_2=\\Gamma^2\n\\]\n\n\\[\n\\Gamma_1\\Gamma_3=-2\\Gamma^2\n\\]\n\n\\[\n\\Gamma_2\\Gamma_3=-2\\Gamma^2.\n\\]\n\nしたがって、\n\n\\[\nH\n=\n2\\left(\n\\Gamma^2-2\\Gamma^2-2\\Gamma^2\n\\right)\\log d^2.\n\\]\n\n\\[\n= -6\\Gamma^2\\log d^2.\n\\]\n\n\\[\nd^2=\\frac{4|a|^2}{3}\n\\]\n\nを代入して、\n\n\\[\n\\boxed{\nH\n=\n-6\\Gamma^2\n\\log\\left(\n\\frac{4|a|^2}{3}\n\\right)\n}\n\\]\n\nである。\n\n### 試験答案\n\n\\[\nc=\\pm\\frac{i}{\\sqrt3}a\n\\]\n\nより、3渦点は一辺\n\n\\[\nd=\\frac{2|a|}{\\sqrt3}\n\\]\n\nの正三角形を作る。\n\n二重和は各組を2回数えるので、\n\n\\[\nH\n=\n2(\\Gamma^2-2\\Gamma^2-2\\Gamma^2)\\log d^2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nH=-6\\Gamma^2\n\\log\\left(\\frac{4|a|^2}{3}\\right)\n}.\n\\]\n\n# 年度全体の重要ポイント\n\n- 等方調和振動子では、位置の周期と動径の周期が異なる。\n- 移動滑車では、並進速度と回転速度を非すべり条件で結ぶ。\n- 振動数方程式では、重力は平衡位置を変えるだけで固有振動数には現れない。\n- Liouvilleの定理では、正準方程式と混合偏微分の交換可能性が本質。\n- 渦点問題では、複素速度を自分以外の渦点の寄与の和で求める。",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            }
          ]
        },
        {
          "year": 2023,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "西原",
            "花崎"
          ],
          "status": "completed",
          "sourceFile": "物工・工業力学A(西原・花崎)2023.pdf",
          "sourcePages": [
            1,
            2,
            3
          ],
          "problemAssets": [
            "/exams/engineering-mechanics-a/2023/page-1.webp",
            "/exams/engineering-mechanics-a/2023/page-2.webp",
            "/exams/engineering-mechanics-a/2023/page-3.webp"
          ],
          "localPdfUrl": "/pdfs/engineering-mechanics-a/2023.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1oA86l2Iz_9zyNuBeRPqy_YMthSeC65rp/edit",
          "pdfSourceFile": "物工・工業力学A(西原・花崎)2023.pdf",
          "introMarkdown": "> [!NOTE]\n> Webサイトでは各問題の原文をそのまま表示し、元PDFをブラウザで開けるリンクも設置する。図を含む問題では、元PDFの該当ページ画像を併記する。\n\n\n## 1. ラグランジュ方程式\n\n一般化座標を \\(q\\)、運動エネルギーを \\(T\\)、ポテンシャルエネルギーを \\(U\\) とすると、\n\n\\[\nL=T-U\n\\]\n\nをラグランジアンという。\n\n運動方程式は、\n\n\\[\n\\boxed{\n\\frac{d}{dt}\n\\left(\n\\frac{\\partial L}{\\partial \\dot q}\n\\right)\n-\n\\frac{\\partial L}{\\partial q}\n=0\n}\n\\]\n\nで与えられる。\n\n## 2. 重心座標と相対座標\n\n質量が等しい2物体では、\n\n\\[\nX=\\frac{x_1+x_2}{2}\n\\]\n\nを重心座標、\n\n\\[\n\\xi=x_2-x_1\n\\]\n\nを相対座標として使うと、運動を分けて考えやすい。\n\n## 3. 剛体リンクの運動エネルギー\n\n質量 \\(m\\) の剛体について、重心速度を \\(v_G\\)、重心まわりの慣性モーメントを \\(I_G\\)、角速度を \\(\\omega\\) とすると、\n\n\\[\n\\boxed{\nT=\\frac12mv_G^2+\\frac12I_G\\omega^2\n}\n\\]\n\nである。\n\n一様な細い棒の重心まわりの慣性モーメントは、\n\n\\[\n\\boxed{\nI_G=\\frac1{12}m\\ell^2\n}\n\\]\n\nである。\n\n## 4. ハミルトニアン\n\n共役運動量を\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n\\]\n\nと定義する。\n\nハミルトニアンは、\n\n\\[\n\\boxed{\nH(q,p)=p\\dot q-L\n}\n\\]\n\nである。\n\n## 5. ポアソン括弧\n\n\\[\n\\boxed{\n[A,B]\n=\n\\frac{\\partial A}{\\partial q}\n\\frac{\\partial B}{\\partial p}\n-\n\\frac{\\partial A}{\\partial p}\n\\frac{\\partial B}{\\partial q}\n}\n\\]\n\nと定義する。\n\n時間に陽に依存しない物理量 \\(A(q,p)\\) について、\n\n\\[\n\\frac{dA}{dt}=[A,H]\n\\]\n\nなので、\n\n\\[\n[A,H]=0\n\\]\n\nならば \\(A\\) は保存量である。\n\n---",
          "questions": [
            {
              "id": "q1-a",
              "label": "Q1-(a)",
              "title": "左側台車が壁を離れるまでの時間",
              "markdown": "### まず状況を整理する\n\n左側台車が壁に押し付けられている間は、\n\n\\[\nx_1=0\n\\]\n\nのままで動かない。\n\nしたがって、壁を離れるまでは右側台車だけを考えればよい。\n\nばねの伸びは、\n\n\\[\nx_2-x_1=x_2\n\\]\n\nである。\n\n初期状態では、\n\n\\[\nx_2(0)=-d,\\qquad \\dot x_2(0)=0.\n\\]\n\n### ラグランジアン\n\n右側台車だけの運動エネルギーは、\n\n\\[\nT=\\frac12m\\dot x_2^2.\n\\]\n\nばねのポテンシャルエネルギーは、\n\n\\[\nU=\\frac12kx_2^2.\n\\]\n\nしたがって、\n\n\\[\nL=\\frac12m\\dot x_2^2-\\frac12kx_2^2.\n\\]\n\nラグランジュ方程式より、\n\n\\[\nm\\ddot x_2+kx_2=0.\n\\]\n\n固有角振動数を、\n\n\\[\n\\omega_0=\\sqrt{\\frac{k}{m}}\n\\]\n\nと置く。\n\n初期条件を満たす解は、\n\n\\[\n\\boxed{\nx_2(t)=-d\\cos\\omega_0t\n}\n\\]\n\nである。\n\n### 壁を離れる条件\n\nばねの左側台車に作用する力は、\n\n\\[\nF_1=k(x_2-x_1)=kx_2\n\\]\n\nである。\n\n\\(x_2<0\\) の間は、ばねが左側台車を左向きに押すため、台車は壁から離れない。\n\n初めて\n\n\\[\nx_2=0\n\\]\n\nとなる瞬間に、壁からの垂直抗力が0になる。\n\n\\[\n-d\\cos\\omega_0t=0.\n\\]\n\n最初の正の解は、\n\n\\[\n\\omega_0t=\\frac{\\pi}{2}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nt_{\\mathrm{detach}}\n=\n\\frac{\\pi}{2\\omega_0}\n=\n\\frac{\\pi}{2}\\sqrt{\\frac{m}{k}}\n}\n\\]\n\nである。\n\n:::why title=\"なぜばねが自然長になった瞬間に離れるの？\"\nばねが圧縮されている間は、左側台車を壁へ押す向きに力が働く。自然長になるとその力が0になり、その直後は右向きの力へ変わるため、台車が壁から離れる。\n:::\n\n### 離れる瞬間の速度\n\n後の小問で使うため、右側台車の速度も求める。\n\n\\[\n\\dot x_2(t)\n=\nd\\omega_0\\sin\\omega_0t.\n\\]\n\n壁を離れる瞬間では、\n\n\\[\n\\omega_0t=\\frac{\\pi}{2}\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\dot x_2=d\\omega_0\n=d\\sqrt{\\frac{k}{m}}\n}\n\\]\n\nである。\n\n左側台車はそれまで静止していたため、\n\n\\[\n\\dot x_1=0.\n\\]\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜばねが自然長になった瞬間に離れるの？",
                  "markdown": "ばねが圧縮されている間は、左側台車を壁へ押す向きに力が働く。自然長になるとその力が0になり、その直後は右向きの力へ変わるため、台車が壁から離れる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-b",
              "label": "Q1-(b)",
              "title": "壁を離れた後の保存量",
              "markdown": "壁を離れた後は、2台の台車とばねだけからなる系を考える。\n\n外部から水平方向の力は作用しない。\n\n### 運動方程式\n\nばねのポテンシャルエネルギーは、\n\n\\[\nU=\\frac12k(x_2-x_1)^2.\n\\]\n\n左側台車について、\n\n\\[\nm\\ddot x_1=k(x_2-x_1).\n\\]\n\n右側台車について、\n\n\\[\nm\\ddot x_2=-k(x_2-x_1).\n\\]\n\n2式を加えると、\n\n\\[\nm\\ddot x_1+m\\ddot x_2=0.\n\\]\n\nしたがって、\n\n\\[\n\\frac{d}{dt}\n\\left(\nm\\dot x_1+m\\dot x_2\n\\right)=0.\n\\]\n\n### 最終解答\n\n全運動量\n\n\\[\n\\boxed{\nP=m\\dot x_1+m\\dot x_2\n}\n\\]\n\nが保存される。\n\n壁を離れた瞬間の値を使えば、\n\n\\[\n\\boxed{\nP=md\\sqrt{\\frac{k}{m}}\n=d\\sqrt{mk}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ壁を離れる前は運動量が保存されないの？\"\n壁に接触している間は、壁から左側台車へ外力が作用している。壁を離れた後は水平方向の外力がなくなり、ばねの力は系の内部力なので、全運動量が保存される。\n:::\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ壁を離れる前は運動量が保存されないの？",
                  "markdown": "壁に接触している間は、壁から左側台車へ外力が作用している。壁を離れた後は水平方向の外力がなくなり、ばねの力は系の内部力なので、全運動量が保存される。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-c",
              "label": "Q1-(c)",
              "title": "壁を離れた後の台車の運動",
              "markdown": "壁を離れた瞬間を新しく\n\n\\[\nt=0\n\\]\n\nとする。\n\nその瞬間、\n\n\\[\nx_1(0)=0,\\qquad x_2(0)=0\n\\]\n\n\\[\n\\dot x_1(0)=0,\\qquad\n\\dot x_2(0)=v_0\n\\]\n\nであり、\n\n\\[\nv_0=d\\sqrt{\\frac{k}{m}}\n\\]\n\nである。\n\n### 重心座標\n\n\\[\nX=\\frac{x_1+x_2}{2}\n\\]\n\nと置く。\n\n2台の全運動量が保存されるので、\n\n\\[\n\\ddot X=0.\n\\]\n\n初期条件は、\n\n\\[\nX(0)=0\n\\]\n\n\\[\n\\dot X(0)=\\frac{v_0}{2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nX(t)=\\frac{v_0}{2}t\n}\n\\]\n\nである。\n\n### 相対座標\n\n\\[\n\\xi=x_2-x_1\n\\]\n\nと置く。\n\n2台の運動方程式の差を取ると、\n\n\\[\n\\ddot\\xi+\\frac{2k}{m}\\xi=0.\n\\]\n\n相対運動の角振動数を、\n\n\\[\n\\Omega=\\sqrt{\\frac{2k}{m}}\n\\]\n\nと置く。\n\n初期条件は、\n\n\\[\n\\xi(0)=0\n\\]\n\n\\[\n\\dot\\xi(0)=v_0.\n\\]\n\nしたがって、\n\n\\[\n\\xi(t)=\\frac{v_0}{\\Omega}\\sin\\Omega t.\n\\]\n\n\\[\n\\frac{v_0}{\\Omega}\n=\n\\frac{d\\sqrt{k/m}}{\\sqrt{2k/m}}\n=\n\\frac{d}{\\sqrt2}\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\xi(t)=\\frac{d}{\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right)\n}\n\\]\n\nである。\n\n### 元の座標へ戻す\n\n\\[\nx_1=X-\\frac{\\xi}{2}\n\\]\n\n\\[\nx_2=X+\\frac{\\xi}{2}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nx_1(t)\n=\n\\frac{d}{2}\\sqrt{\\frac{k}{m}}\\,t\n-\n\\frac{d}{2\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right)\n}\n\\]\n\n\\[\n\\boxed{\nx_2(t)\n=\n\\frac{d}{2}\\sqrt{\\frac{k}{m}}\\,t\n+\n\\frac{d}{2\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right)\n}\n\\]\n\nである。\n\n### 運動の意味\n\n- 系全体の重心は一定速度で右へ移動する。\n- 2台の間隔は角振動数\n\n\\[\n\\sqrt{\\frac{2k}{m}}\n\\]\n\nで振動する。\n- したがって、全体として右へ進みながら2台が互いに近づいたり離れたりする。\n\n### 試験答案\n\n壁を離れる瞬間を \\(t=0\\) とすると、\n\n\\[\nx_1=x_2=0,\\qquad\n\\dot x_1=0,\\qquad\n\\dot x_2=d\\sqrt{\\frac{k}{m}}.\n\\]\n\n重心座標 \\(X=(x_1+x_2)/2\\) と相対座標 \\(\\xi=x_2-x_1\\) を用いると、\n\n\\[\n\\ddot X=0,\\qquad\n\\ddot\\xi+\\frac{2k}{m}\\xi=0.\n\\]\n\nしたがって、\n\n\\[\nX=\\frac{d}{2}\\sqrt{\\frac{k}{m}}t\n\\]\n\n\\[\n\\xi=\\frac{d}{\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right).\n\\]\n\nよって、\n\n\\[\n\\boxed{\nx_{1,2}\n=\n\\frac{d}{2}\\sqrt{\\frac{k}{m}}t\n\\mp\n\\frac{d}{2\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right)\n}\n\\]\n\nとなる。\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-a",
              "label": "Q2-(a)",
              "title": "リンク機構の運動エネルギー",
              "markdown": "### 短いリンク\n\n長さ \\(a\\)、質量 \\(m\\) の一様な棒が、左端の固定支点まわりに回転する。\n\n支点まわりの慣性モーメントは、\n\n\\[\nI_O=\\frac13ma^2.\n\\]\n\nしたがって、\n\n\\[\nT_{\\mathrm{short}}\n=\n\\frac12I_O\\dot\\theta^2\n=\n\\frac16ma^2\\dot\\theta^2.\n\\]\n\n### 長いリンク\n\n長さ \\(2a\\)、質量 \\(2m\\) であり、重心は中央ジョイント \\(C\\) にある。\n\n重心速度の大きさは、\n\n\\[\nv_C=a\\dot\\theta.\n\\]\n\n並進運動エネルギーは、\n\n\\[\n\\frac12(2m)v_C^2\n=\nma^2\\dot\\theta^2.\n\\]\n\n重心まわりの慣性モーメントは、\n\n\\[\nI_C\n=\n\\frac1{12}(2m)(2a)^2\n=\n\\frac23ma^2.\n\\]\n\n回転運動エネルギーは、\n\n\\[\n\\frac12I_C\\dot\\theta^2\n=\n\\frac13ma^2\\dot\\theta^2.\n\\]\n\nよって、\n\n\\[\nT_{\\mathrm{long}}\n=\n\\frac43ma^2\\dot\\theta^2.\n\\]\n\n### 上側の剛体 \\(M\\)\n\n鉛直座標は、\n\n\\[\ny_L=2a\\sin\\alpha.\n\\]\n\nしたがって、\n\n\\[\n\\dot y_L\n=\n2a\\cos\\alpha\\,\\dot\\theta.\n\\]\n\n運動エネルギーは、\n\n\\[\nT_{\\mathrm{upper}}\n=\n\\frac12M(2a\\cos\\alpha)^2\\dot\\theta^2\n=\n2Ma^2\\cos^2\\alpha\\,\\dot\\theta^2.\n\\]\n\n### 台車 \\(M\\)\n\n水平座標は、\n\n\\[\nx_R=2a\\cos\\alpha.\n\\]\n\nしたがって、\n\n\\[\n\\dot x_R\n=\n-2a\\sin\\alpha\\,\\dot\\theta.\n\\]\n\n運動エネルギーは、\n\n\\[\nT_{\\mathrm{cart}}\n=\n2Ma^2\\sin^2\\alpha\\,\\dot\\theta^2.\n\\]\n\n### 合計\n\n\\[\nT_{\\mathrm{upper}}+T_{\\mathrm{cart}}\n=\n2Ma^2(\\cos^2\\alpha+\\sin^2\\alpha)\\dot\\theta^2\n=\n2Ma^2\\dot\\theta^2.\n\\]\n\nリンクの項を含めると、\n\n\\[\nT\n=\n\\left(\n\\frac16m+\\frac43m+2M\n\\right)\na^2\\dot\\theta^2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nT\n=\n\\frac12(3m+4M)a^2\\dot\\theta^2\n}\n\\]\n\nである。\n\n### 重要ポイント\n\n- 長いリンクは「重心の並進」と「重心まわりの回転」の両方を持つ。\n- 上側剛体と台車の項を足すと、三角関数が消えて一定の等価慣性になる。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [
                "長いリンクは「重心の並進」と「重心まわりの回転」の両方を持つ。",
                "上側剛体と台車の項を足すと、三角関数が消えて一定の等価慣性になる。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-b",
              "label": "Q2-(b)",
              "title": "リンク機構のポテンシャルエネルギー",
              "markdown": "## ばねのポテンシャルエネルギー\n\nばねが自然長のとき、\n\n\\[\n\\alpha_0=\\frac{\\pi}{6}\n\\]\n\nであり、\n\n\\[\n2a\\sin\\alpha_0=a.\n\\]\n\n角度 \\(\\alpha\\) のとき、上側剛体の鉛直位置の変化は、\n\n\\[\n\\Delta \\ell\n=\n2a\n\\left(\n\\sin\\alpha-\\frac12\n\\right).\n\\]\n\n符号はばねの伸び・縮みによって変わるが、エネルギーでは二乗するため、\n\n\\[\nU_{\\mathrm{spring}}\n=\n\\frac12k(\\Delta\\ell)^2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nU_{\\mathrm{spring}}\n=\n2ka^2\n\\left(\n\\sin\\alpha-\\frac12\n\\right)^2\n}\n\\]\n\nである。\n\n## 重力ポテンシャルエネルギー\n\n高さの基準による定数項は省略する。\n\n### 短いリンク\n\n重心の高さは、\n\n\\[\n\\frac{a}{2}\\sin\\alpha.\n\\]\n\nしたがって、\n\n\\[\nU_{\\mathrm{short}}\n=\n\\frac12mga\\sin\\alpha.\n\\]\n\n### 長いリンク\n\n質量は \\(2m\\)、重心の高さは \\(a\\sin\\alpha\\)。\n\n\\[\nU_{\\mathrm{long}}\n=\n2mga\\sin\\alpha.\n\\]\n\n### 上側剛体\n\n高さの変化は \\(2a\\sin\\alpha\\) なので、\n\n\\[\nU_{\\mathrm{upper}}\n=\n2Mga\\sin\\alpha.\n\\]\n\n台車の高さは一定なので、重力ポテンシャルは定数であり省略できる。\n\n### 合計\n\n\\[\nU_g\n=\n\\left(\n\\frac12m+2m+2M\n\\right)\nga\\sin\\alpha.\n\\]\n\n\\[\n\\boxed{\nU_g\n=\n\\frac{ga}{2}(5m+4M)\\sin\\alpha\n}\n\\]\n\nである。\n\nしたがって、系全体のポテンシャルエネルギーは、\n\n\\[\n\\boxed{\nU\n=\n2ka^2\n\\left(\n\\sin\\alpha-\\frac12\n\\right)^2\n+\n\\frac{ga}{2}(5m+4M)\\sin\\alpha\n}\n\\]\n\nである。\n\nここで、\n\n\\[\n\\alpha=\\frac{\\pi}{6}+\\theta.\n\\]\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-c",
              "label": "Q2-(c)",
              "title": "小振動の固有角振動数",
              "markdown": "\\[\n|\\theta|\\ll1\n\\]\n\nとして、\\(\\theta=0\\) の近くで2次まで展開する。\n\n### 三角関数の展開\n\n\\[\n\\sin\\left(\\frac{\\pi}{6}+\\theta\\right)\n\\approx\n\\frac12+\\frac{\\sqrt3}{2}\\theta-\\frac14\\theta^2.\n\\]\n\n### ばねエネルギー\n\n\\[\n\\sin\\alpha-\\frac12\n\\approx\n\\frac{\\sqrt3}{2}\\theta.\n\\]\n\nしたがって、\n\n\\[\nU_{\\mathrm{spring}}\n\\approx\n2ka^2\n\\left(\n\\frac{\\sqrt3}{2}\\theta\n\\right)^2\n=\n\\frac32ka^2\\theta^2.\n\\]\n\n### 重力エネルギー\n\n\\[\nU_g\n\\approx\n\\frac{ga}{2}(5m+4M)\n\\left(\n\\frac12\n+\n\\frac{\\sqrt3}{2}\\theta\n-\n\\frac14\\theta^2\n\\right).\n\\]\n\n定数項を無視すると、\n\n\\[\nU\n\\approx\n\\frac{\\sqrt3ga}{4}(5m+4M)\\theta\n+\n\\frac12K_{\\mathrm{eff}}\\theta^2\n\\]\n\nと書ける。\n\nここで、\n\n\\[\n\\boxed{\nK_{\\mathrm{eff}}\n=\n3ka^2\n-\n\\frac{ga}{4}(5m+4M)\n}\n\\]\n\nである。\n\n運動エネルギーは、\n\n\\[\nT\n=\n\\frac12I_{\\mathrm{eff}}\\dot\\theta^2\n\\]\n\n\\[\n\\boxed{\nI_{\\mathrm{eff}}\n=\n(3m+4M)a^2\n}\n\\]\n\nである。\n\n### 線形化した運動方程式\n\n\\[\nI_{\\mathrm{eff}}\\ddot\\theta\n+\nK_{\\mathrm{eff}}\\theta\n+\n\\frac{\\sqrt3ga}{4}(5m+4M)\n=0.\n\\]\n\n定数項は平衡位置をずらすだけである。\n\n線形近似での平衡角を \\(\\theta_{\\mathrm e}\\) とし、\n\n\\[\n\\eta=\\theta-\\theta_{\\mathrm e}\n\\]\n\nと置くと、\n\n\\[\nI_{\\mathrm{eff}}\\ddot\\eta\n+\nK_{\\mathrm{eff}}\\eta=0.\n\\]\n\nしたがって、固有角振動数は、\n\n\\[\n\\boxed{\n\\omega_n\n=\n\\sqrt{\n\\frac{\n3ka^2-\\dfrac{ga}{4}(5m+4M)\n}{\n(3m+4M)a^2\n}\n}\n}\n\\]\n\nである。\n\n分子・分母から \\(a\\) を整理すると、\n\n\\[\n\\boxed{\n\\omega_n\n=\n\\sqrt{\n\\frac{\n3ka-\\dfrac{g}{4}(5m+4M)\n}{\n(3m+4M)a\n}\n}\n}\n\\]\n\nとも書ける。\n\n### 安定条件\n\n実数の固有角振動数を持つためには、\n\n\\[\nK_{\\mathrm{eff}}>0\n\\]\n\nが必要である。\n\n\\[\n\\boxed{\n3ka^2>\n\\frac{ga}{4}(5m+4M)\n}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\n12ka>g(5m+4M)\n}\n\\]\n\nである。\n\n:::why title=\"なぜ重力の定数項は振動数に影響しないの？\"\n定数項は平衡位置をどこへ移すかを決める。一方、平衡位置の近くでどれだけ強く元へ戻そうとするかは二次項の係数で決まり、これが固有角振動数を決める。\n:::\n\n### 試験答案\n\n\\[\nT=\\frac12(3m+4M)a^2\\dot\\theta^2.\n\\]\n\n\\[\nU=\n2ka^2\n\\left[\n\\sin\\left(\\frac{\\pi}{6}+\\theta\\right)-\\frac12\n\\right]^2\n+\n\\frac{ga}{2}(5m+4M)\n\\sin\\left(\\frac{\\pi}{6}+\\theta\\right).\n\\]\n\n\\(|\\theta|\\ll1\\) として2次まで展開すると、\n\n\\[\nU\n=\n\\text{const.}\n+\n\\frac{\\sqrt3ga}{4}(5m+4M)\\theta\n+\n\\frac12\n\\left[\n3ka^2-\\frac{ga}{4}(5m+4M)\n\\right]\\theta^2.\n\\]\n\n平衡位置からの変位について、\n\n\\[\n(3m+4M)a^2\\ddot\\eta\n+\n\\left[\n3ka^2-\\frac{ga}{4}(5m+4M)\n\\right]\\eta=0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\omega_n\n=\n\\sqrt{\n\\frac{\n3ka^2-\\dfrac{ga}{4}(5m+4M)\n}{\n(3m+4M)a^2\n}\n}\n}.\n\\]\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ重力の定数項は振動数に影響しないの？",
                  "markdown": "定数項は平衡位置をどこへ移すかを決める。一方、平衡位置の近くでどれだけ強く元へ戻そうとするかは二次項の係数で決まり、これが固有角振動数を決める。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q3-1",
              "label": "Q3-(1)",
              "title": "ハミルトニアン",
              "markdown": "ラグランジアンは、\n\n\\[\nL=\\dot q^2-q^2.\n\\]\n\n共役運動量は、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n=2\\dot q.\n\\]\n\nしたがって、\n\n\\[\n\\dot q=\\frac p2.\n\\]\n\nハミルトニアンは、\n\n\\[\nH=p\\dot q-L.\n\\]\n\n\\[\n=p\\frac p2\n-\n\\left[\n\\left(\\frac p2\\right)^2-q^2\n\\right].\n\\]\n\n\\[\n=\\frac{p^2}{2}-\\frac{p^2}{4}+q^2.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nH(q,p)=\\frac{p^2}{4}+q^2\n}\n\\]\n\nである。\n\n:::why title=\"通常の調和振動子と係数が違うのはなぜ？\"\n問題のラグランジアンには通常の \\(1/2\\) が付いていない。そのため、共役運動量が \\(p=2\\dot q\\) となり、ハミルトニアンの運動量項が \\(p^2/4\\) になる。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "通常の調和振動子と係数が違うのはなぜ？",
                  "markdown": "問題のラグランジアンには通常の \\(1/2\\) が付いていない。そのため、共役運動量が \\(p=2\\dot q\\) となり、ハミルトニアンの運動量項が \\(p^2/4\\) になる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2",
              "label": "Q3-(2)",
              "title": "ポアソン括弧と保存量",
              "markdown": "任意の微分可能な関数 \\(F(H)\\) を考える。\n\n\\[\n[F(H),H]\n=\nF'(H)[H,H].\n\\]\n\nポアソン括弧の反対称性より、\n\n\\[\n[H,H]=0.\n\\]\n\nしたがって、\n\n\\[\n[F(H),H]=0.\n\\]\n\nよって、\\(F(H)\\) は保存量である。\n\n\\(H\\) の単なる定数倍ではない例として、\n\n\\[\nA=H^2\n\\]\n\nを選ぶ。\n\n\\[\n[A,H]=[H^2,H]\n=2H[H,H]=0.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nA(q,p)=H^2\n=\n\\left(\n\\frac{p^2}{4}+q^2\n\\right)^2\n}\n\\]\n\nは保存量である。\n\n### 補足\n\n1自由度の自律系では、時間に依存しない独立な保存量は通常エネルギー1つである。そのため、ここで得た \\(H^2\\) は \\(H\\) とは独立ではないが、「\\(H\\) の定数倍ではない保存量」という問題の条件を満たす。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-3",
              "label": "Q3-(3)",
              "title": "位相空間の軌道",
              "markdown": "\\[\nH=E\n\\]\n\nより、\n\n\\[\n\\frac{p^2}{4}+q^2=E.\n\\]\n\n標準形にすると、\n\n\\[\n\\boxed{\n\\frac{q^2}{E}\n+\n\\frac{p^2}{4E}\n=1\n}\n\\]\n\nである。\n\nしたがって、\\(q-p\\) 平面上の軌道は、\n\n- \\(q\\) 方向の半径：\\(\\sqrt E\\)\n- \\(p\\) 方向の半径：\\(2\\sqrt E\\)\n\nの楕円である。\n\n### 運動の向き\n\n正準方程式は、\n\n\\[\n\\dot q=\\frac{\\partial H}{\\partial p}=\\frac p2\n\\]\n\n\\[\n\\dot p=-\\frac{\\partial H}{\\partial q}=-2q.\n\\]\n\n例えば右端\n\n\\[\n(q,p)=(\\sqrt E,0)\n\\]\n\nでは、\n\n\\[\n\\dot q=0,\\qquad\n\\dot p=-2\\sqrt E<0.\n\\]\n\nしたがって、右端から下向きへ進む。\n\nよって軌道上の運動方向は、\n\n\\[\n\\boxed{\\text{時計回り}}\n\\]\n\nである。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-4",
              "label": "Q3-(4)",
              "title": "位相空間上の2点の運動",
              "markdown": "正準方程式は、\n\n\\[\n\\dot q=\\frac p2\n\\]\n\n\\[\n\\dot p=-2q.\n\\]\n\n第1式を時間微分すると、\n\n\\[\n\\ddot q=\\frac{\\dot p}{2}=-q.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\\ddot q+q=0}\n\\]\n\nである。\n\n角振動数は1。\n\n---\n\n### 点 \\(A\\)\n\n初期条件は、\n\n\\[\nq_A(0)=0,\\qquad\np_A(0)=p_0.\n\\]\n\n\\[\n\\dot q_A(0)=\\frac{p_0}{2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nq_A(t)=\\frac{p_0}{2}\\sin t\n}\n\\]\n\nである。\n\n\\[\np_A=2\\dot q_A\n\\]\n\nより、\n\n\\[\n\\boxed{\np_A(t)=p_0\\cos t\n}\n\\]\n\nである。\n\n---\n\n### 点 \\(B\\)\n\n初期条件は、\n\n\\[\nq_B(0)=q_0,\\qquad\np_B(0)=0.\n\\]\n\n\\[\n\\dot q_B(0)=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nq_B(t)=q_0\\cos t\n}\n\\]\n\nである。\n\n\\[\np_B=2\\dot q_B\n\\]\n\nより、\n\n\\[\n\\boxed{\np_B(t)=-2q_0\\sin t\n}\n\\]\n\nである。\n\n### 最終解答\n\n\\[\n\\boxed{\nA(t):\n\\left(\n\\frac{p_0}{2}\\sin t,\\ \np_0\\cos t\n\\right)\n}\n\\]\n\n\\[\n\\boxed{\nB(t):\n\\left(\nq_0\\cos t,\\ \n-2q_0\\sin t\n\\right)\n}\n\\]\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-5",
              "label": "Q3-(5)",
              "title": "Liouvilleの定理",
              "markdown": "原点を \\(O=(0,0)\\) とする。\n\n2つのベクトル\n\n\\[\n\\overrightarrow{OA}\n=\n\\begin{pmatrix}\nq_A\\\\\np_A\n\\end{pmatrix}\n\\]\n\n\\[\n\\overrightarrow{OB}\n=\n\\begin{pmatrix}\nq_B\\\\\np_B\n\\end{pmatrix}\n\\]\n\nが作る三角形の面積は、\n\n\\[\nS\n=\n\\frac12\n\\left|\nq_Ap_B-p_Aq_B\n\\right|.\n\\]\n\n前問の結果を代入する。\n\n\\[\nq_Ap_B\n=\n\\left(\n\\frac{p_0}{2}\\sin t\n\\right)\n\\left(\n-2q_0\\sin t\n\\right)\n=\n-p_0q_0\\sin^2t.\n\\]\n\n\\[\np_Aq_B\n=\n(p_0\\cos t)(q_0\\cos t)\n=\np_0q_0\\cos^2t.\n\\]\n\nしたがって、\n\n\\[\nq_Ap_B-p_Aq_B\n=\n-p_0q_0\n(\\sin^2t+\\cos^2t).\n\\]\n\n\\[\n=-p_0q_0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nS=\\frac12|p_0q_0|\n}\n\\]\n\nとなり、時間 \\(t\\) に依存しない。\n\nしたがって、\n\n\\[\n\\boxed{\n\\triangle OAB\\text{ の面積は運動によって不変}\n}\n\\]\n\nである。\n\n:::why title=\"これがLiouvilleの定理の例になる理由\"\nハミルトン力学の時間発展では、位相空間内の領域は引き伸ばされたり変形したりしても、その面積や体積を保つ。この問題では三角形の面積を直接計算することで確認している。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "これがLiouvilleの定理の例になる理由",
                  "markdown": "ハミルトン力学の時間発展では、位相空間内の領域は引き伸ばされたり変形したりしても、その面積や体積を保つ。この問題では三角形の面積を直接計算することで確認している。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-6",
              "label": "Q3-(6)",
              "title": "独立変数変換と偏微分",
              "markdown": "変数変換は、\n\n\\[\nQ=\\log\\left(\\frac{\\sin p}{q}\\right)\n\\]\n\n\\[\nP=q\\cot p\n\\]\n\nである。\n\n### \\(Q,P\\) の偏微分\n\n\\[\n\\frac{\\partial Q}{\\partial p}\n=\n\\cot p\n\\]\n\n\\[\n\\frac{\\partial Q}{\\partial q}\n=\n-\\frac1q\n\\]\n\n\\[\n\\frac{\\partial P}{\\partial p}\n=\n-q\\csc^2p\n\\]\n\n\\[\n\\frac{\\partial P}{\\partial q}\n=\n\\cot p.\n\\]\n\n### 連鎖律\n\n\\[\n\\frac{\\partial}{\\partial p}\n=\n\\frac{\\partial Q}{\\partial p}\n\\frac{\\partial}{\\partial Q}\n+\n\\frac{\\partial P}{\\partial p}\n\\frac{\\partial}{\\partial P}.\n\\]\n\nしたがって、\n\n\\[\n\\frac{\\partial}{\\partial p}\n=\n\\cot p\\frac{\\partial}{\\partial Q}\n-\nq\\csc^2p\\frac{\\partial}{\\partial P}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\frac{\\partial H}{\\partial p}\n=\n\\cot p\\frac{\\partial H}{\\partial Q}\n-\nq\\csc^2p\\frac{\\partial H}{\\partial P}\n}\n\\]\n\nである。\n\n同様に、\n\n\\[\n\\frac{\\partial}{\\partial q}\n=\n-\\frac1q\\frac{\\partial}{\\partial Q}\n+\n\\cot p\\frac{\\partial}{\\partial P}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\frac{\\partial H}{\\partial q}\n=\n-\\frac1q\\frac{\\partial H}{\\partial Q}\n+\n\\cot p\\frac{\\partial H}{\\partial P}\n}\n\\]\n\nである。\n\n### 間違えやすい点\n\n- \\(P=q\\cot p\\) の \\(p\\) 微分では、\n\n\\[\n\\frac{d}{dp}\\cot p=-\\csc^2p\n\\]\n\nを使う。\n- \\(\\partial H/\\partial p\\) を計算するときは、\\(Q\\) と \\(P\\) の両方が \\(p\\) に依存する。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-7",
              "label": "Q3-(7)",
              "title": "正準変換の証明",
              "markdown": "元の正準方程式は、\n\n\\[\n\\dot q=H_p\n\\]\n\n\\[\n\\dot p=-H_q\n\\]\n\nである。\n\nここで、\n\n\\[\nH_p=\\frac{\\partial H}{\\partial p},\n\\qquad\nH_q=\\frac{\\partial H}{\\partial q}.\n\\]\n\n---\n\n### \\(dQ/dt\\)\n\n連鎖律より、\n\n\\[\n\\dot Q\n=\nQ_q\\dot q+Q_p\\dot p.\n\\]\n\n\\[\n=\n-\\frac1qH_p\n+\n\\cot p(-H_q).\n\\]\n\n\\[\n=\n-\\frac1qH_p-\\cot pH_q.\n\\]\n\n前問の結果を代入する。\n\n\\[\n-\\frac1qH_p\n=\n-\\frac{\\cot p}{q}H_Q\n+\n\\csc^2pH_P.\n\\]\n\n\\[\n-\\cot pH_q\n=\n\\frac{\\cot p}{q}H_Q\n-\n\\cot^2pH_P.\n\\]\n\n足すと \\(H_Q\\) の項は消える。\n\n\\[\n\\dot Q\n=\n(\\csc^2p-\\cot^2p)H_P.\n\\]\n\n恒等式\n\n\\[\n\\csc^2p-\\cot^2p=1\n\\]\n\nより、\n\n\\[\n\\boxed{\n\\dot Q=\\frac{\\partial H}{\\partial P}\n}\n\\]\n\nを得る。\n\n---\n\n### \\(dP/dt\\)\n\n\\[\n\\dot P\n=\nP_q\\dot q+P_p\\dot p.\n\\]\n\n\\[\n=\n\\cot pH_p\n+\n(-q\\csc^2p)(-H_q).\n\\]\n\n\\[\n=\n\\cot pH_p\n+\nq\\csc^2pH_q.\n\\]\n\n前問の結果を代入する。\n\n\\[\n\\dot P\n=\n\\cot p\n\\left(\n\\cot pH_Q-q\\csc^2pH_P\n\\right)\n\\]\n\n\\[\n+\nq\\csc^2p\n\\left(\n-\\frac1qH_Q+\\cot pH_P\n\\right).\n\\]\n\n\\(H_P\\) の項は打ち消し合う。\n\n\\[\n\\dot P\n=\n(\\cot^2p-\\csc^2p)H_Q.\n\\]\n\n\\[\n\\cot^2p-\\csc^2p=-1\n\\]\n\nより、\n\n\\[\n\\boxed{\n\\dot P=-\\frac{\\partial H}{\\partial Q}\n}\n\\]\n\nを得る。\n\n---\n\n### 最終結論\n\n新しい変数 \\(Q,P\\) についても、\n\n\\[\n\\boxed{\n\\dot Q=\\frac{\\partial H}{\\partial P}\n}\n\\]\n\n\\[\n\\boxed{\n\\dot P=-\\frac{\\partial H}{\\partial Q}\n}\n\\]\n\nが成立する。\n\nしたがって、変換\n\n\\[\n\\boxed{\nQ=\\log\\left(\\frac{\\sin p}{q}\\right),\n\\qquad\nP=q\\cot p\n}\n\\]\n\nは正準変換である。\n\n# 年度全体の重要ポイント\n\n- 壁との接触中と離れた後では、系に作用する外力が変わる。\n- 2物体のばね運動は、重心運動と相対運動に分けると簡単になる。\n- リンク機構では、各剛体の重心座標と角速度を一般化座標で表す。\n- 小振動の固有振動数は、平衡位置近くのポテンシャルエネルギーの二次項で決まる。\n- ハミルトン力学では、位相空間の軌道と正準変換を連鎖律で扱う。",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            }
          ]
        }
      ]
    },
    {
      "name": "流体力学2",
      "slug": "fluid-mechanics-2",
      "years": [
        {
          "year": 2024,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "花崎",
            "沖野"
          ],
          "status": "completed",
          "sourceFile": "流体力学2(花崎・沖野)2024.pdf",
          "sourcePages": [
            1,
            2,
            3
          ],
          "problemAssets": [
            "/exams/fluid-mechanics-2/2024/page-1.webp",
            "/exams/fluid-mechanics-2/2024/page-2.webp",
            "/exams/fluid-mechanics-2/2024/page-3.webp"
          ],
          "localPdfUrl": "/pdfs/fluid-mechanics-2/2024.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1uSkyYCvEga1wjrD5cT7kZ8l7jl6H9UvI/edit",
          "pdfSourceFile": "流体力学2(花崎・沖野)2024.pdf",
          "introMarkdown": "> [!NOTE]\n> Webサイトでは問題文を元PDFどおりに表示し、解説とは別の領域に配置する。各年度ページに「PDFをブラウザで開く」と「元サイトで開く」のリンクを設置する。\n\n\n## 1. 複素速度ポテンシャル\n\n二次元の非圧縮・渦なし流れでは、複素座標\n\n\\[\nz=x+iy\n\\]\n\nを使い、複素速度ポテンシャルを\n\n\\[\nf(z)=\\phi(x,y)+i\\psi(x,y)\n\\]\n\nと表せる。\n\n- \\(\\phi\\)：速度ポテンシャル\n- \\(\\psi\\)：流れ関数\n\n複素速度との関係は、\n\n\\[\n\\boxed{\n\\frac{df}{dz}=u-iv\n}\n\\]\n\nである。\n\n流線は、\n\n\\[\n\\boxed{\\psi(x,y)=C}\n\\]\n\nで表される。\n\n## 2. 直交座標と極座標の速度成分\n\n\\[\n\\boldsymbol v=(u,v)\n\\]\n\nを極座標成分で表すと、\n\n\\[\n\\boxed{\nv_r=u\\cos\\theta+v\\sin\\theta\n}\n\\]\n\n\\[\n\\boxed{\nv_\\theta=-u\\sin\\theta+v\\cos\\theta\n}\n\\]\n\nである。\n\n逆に、\n\n\\[\nu=v_r\\cos\\theta-v_\\theta\\sin\\theta\n\\]\n\n\\[\nv=v_r\\sin\\theta+v_\\theta\\cos\\theta\n\\]\n\nである。\n\n## 3. 循環\n\n閉曲線 \\(C\\) に沿う循環は、\n\n\\[\n\\boxed{\n\\Gamma=\\oint_C\\boldsymbol v\\cdot d\\boldsymbol x\n}\n\\]\n\nで定義される。\n\n半径 \\(r\\) の円周上では、\n\n\\[\nd\\boldsymbol x=r\\,d\\theta\\,\\boldsymbol e_\\theta\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\Gamma=\\int_0^{2\\pi}v_\\theta r\\,d\\theta\n}\n\\]\n\nとなる。\n\n## 4. Navier-Stokes方程式\n\n非圧縮性Newton流体について、\n\n\\[\n\\boxed{\n\\rho\n\\left[\n\\frac{\\partial\\boldsymbol v}{\\partial t}\n+\n(\\boldsymbol v\\cdot\\nabla)\\boldsymbol v\n\\right]\n=\n-\\nabla p+\\mu\\nabla^2\\boldsymbol v\n}\n\\]\n\nである。\n\n- \\(\\rho\\)：密度\n- \\(p\\)：圧力\n- \\(\\mu\\)：粘性係数\n- \\(\\nu=\\mu/\\rho\\)：動粘性係数\n\n## 5. Stokes近似\n\n慣性項が粘性項に比べて十分小さい場合、\n\n\\[\n\\rho\n\\left[\n\\frac{\\partial\\boldsymbol v}{\\partial t}\n+\n(\\boldsymbol v\\cdot\\nabla)\\boldsymbol v\n\\right]\n\\]\n\nを無視して、\n\n\\[\n\\boxed{\n0=-\\nabla p+\\mu\\nabla^2\\boldsymbol v\n}\n\\]\n\nと近似する。\n\n## 6. 軸対称流のStokes流れ関数\n\n球座標 \\((r,\\theta)\\) で軸対称流を考える。\n\nStokes流れ関数 \\(\\psi(r,\\theta)\\) を用いると、\n\n\\[\n\\boxed{\nv_r=\n\\frac{1}{r^2\\sin\\theta}\n\\frac{\\partial\\psi}{\\partial\\theta}\n}\n\\]\n\n\\[\n\\boxed{\nv_\\theta=\n-\\frac{1}{r\\sin\\theta}\n\\frac{\\partial\\psi}{\\partial r}\n}\n\\]\n\nである。\n\nこの定義を使うと、非圧縮条件が自動的に満たされる。\n\n## 7. レイノルズ数\n\n代表速度を \\(U\\)、代表長さを \\(L\\) とすると、\n\n\\[\n\\boxed{\nRe=\\frac{\\rho UL}{\\mu}\n=\\frac{UL}{\\nu}\n}\n\\]\n\nである。\n\nレイノルズ数は、\n\n\\[\n\\boxed{\n\\frac{\\text{慣性力の大きさ}}\n{\\text{粘性力の大きさ}}\n}\n\\]\n\nを表す無次元数である。\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-1",
              "title": "二重湧き出しの流線",
              "markdown": "### 複素速度ポテンシャルを実部と虚部に分ける\n\n極座標では、\n\n\\[\nz=re^{i\\theta}\n\\]\n\nなので、\n\n\\[\n\\frac1z\n=\n\\frac1r e^{-i\\theta}\n=\n\\frac1r(\\cos\\theta-i\\sin\\theta).\n\\]\n\nしたがって、\n\n\\[\nf(z)\n=\n-\\frac{\\mu}{r}\n(\\cos\\theta-i\\sin\\theta).\n\\]\n\n\\[\n=\n-\\frac{\\mu}{r}\\cos\\theta\n+\ni\\frac{\\mu}{r}\\sin\\theta.\n\\]\n\n\\[\nf=\\phi+i\\psi\n\\]\n\nと比較すると、\n\n\\[\n\\boxed{\n\\phi=-\\frac{\\mu}{r}\\cos\\theta\n}\n\\]\n\n\\[\n\\boxed{\n\\psi=\\frac{\\mu}{r}\\sin\\theta\n}\n\\]\n\nである。\n\n### 流線条件\n\n流線は、\n\n\\[\n\\psi=C\n\\]\n\nなので、\n\n\\[\n\\frac{\\mu}{r}\\sin\\theta=C.\n\\]\n\n\\(C\\ne0\\) のとき、\n\n\\[\n\\boxed{\nr=\\frac{\\mu}{C}\\sin\\theta\n}\n\\]\n\nである。\n\n### 直交座標で表す\n\n\\[\n\\sin\\theta=\\frac{y}{r}\n\\]\n\nなので、\n\n\\[\nC=\\frac{\\mu y}{r^2}.\n\\]\n\n\\[\nr^2=x^2+y^2\n\\]\n\nより、\n\n\\[\nC(x^2+y^2)=\\mu y.\n\\]\n\n\\(C\\ne0\\) として整理する。\n\n\\[\nx^2+y^2-\\frac{\\mu}{C}y=0.\n\\]\n\n平方完成すると、\n\n\\[\n\\boxed{\nx^2+\n\\left(\ny-\\frac{\\mu}{2C}\n\\right)^2\n=\n\\left(\n\\frac{\\mu}{2C}\n\\right)^2\n}\n\\]\n\nである。\n\n### 流線の形\n\nこれは、\n\n- 中心：\n\n\\[\n\\left(\n0,\\frac{\\mu}{2C}\n\\right)\n\\]\n\n- 半径：\n\n\\[\n\\left|\n\\frac{\\mu}{2C}\n\\right|\n\\]\n\nの円である。\n\nすべての円が原点を通る。\n\n- \\(C>0\\)：上半平面側の円\n- \\(C<0\\)：下半平面側の円\n- \\(C=0\\)：\\(x\\) 軸上の流線\n\n### 最終解答\n\n\\[\n\\boxed{\n\\psi=\\frac{\\mu}{r}\\sin\\theta\n}\n\\]\n\n\\[\n\\boxed{\nr=\\frac{\\mu}{C}\\sin\\theta\n}\n\\]\n\nまたは、\n\n\\[\n\\boxed{\nx^2+\n\\left(\ny-\\frac{\\mu}{2C}\n\\right)^2\n=\n\\left(\n\\frac{\\mu}{2C}\n\\right)^2\n}\n\\]\n\nである。\n\n:::why title=\"なぜ流線が円になるの？\"\n極座標の式 \\(r=a\\sin\\theta\\) は、直交座標に直すと \\(x^2+(y-a/2)^2=(a/2)^2\\) となる。これは中心がy軸上にあり、原点を通る円の方程式である。\n:::\n\n### 試験答案\n\n\\[\nf(z)\n=\n-\\frac{\\mu}{r}e^{-i\\theta}\n=\n-\\frac{\\mu}{r}\\cos\\theta\n+\ni\\frac{\\mu}{r}\\sin\\theta.\n\\]\n\nしたがって、\n\n\\[\n\\psi=\\frac{\\mu}{r}\\sin\\theta.\n\\]\n\n\\[\n\\psi=C\n\\]\n\nより、\n\n\\[\nr=\\frac{\\mu}{C}\\sin\\theta.\n\\]\n\n直交座標では、\n\n\\[\n\\boxed{\nx^2+\n\\left(\ny-\\frac{\\mu}{2C}\n\\right)^2\n=\n\\left(\n\\frac{\\mu}{2C}\n\\right)^2\n}.\n\\]\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ流線が円になるの？",
                  "markdown": "極座標の式 \\(r=a\\sin\\theta\\) は、直交座標に直すと \\(x^2+(y-a/2)^2=(a/2)^2\\) となる。これは中心がy軸上にあり、原点を通る円の方程式である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q1-2",
              "label": "Q1-2",
              "title": "二重湧き出しの速度ベクトル",
              "markdown": "複素速度は、\n\n\\[\nu-iv=\\frac{df}{dz}.\n\\]\n\n\\[\nf(z)=-\\frac{\\mu}{z}\n\\]\n\nを微分すると、\n\n\\[\n\\frac{df}{dz}\n=\n\\frac{\\mu}{z^2}.\n\\]\n\n極座標では、\n\n\\[\nz^2=r^2e^{2i\\theta}.\n\\]\n\nしたがって、\n\n\\[\n\\frac{\\mu}{z^2}\n=\n\\frac{\\mu}{r^2}\ne^{-2i\\theta}.\n\\]\n\nEulerの公式を使うと、\n\n\\[\n\\frac{df}{dz}\n=\n\\frac{\\mu}{r^2}\n(\\cos2\\theta-i\\sin2\\theta).\n\\]\n\n\\[\nu-iv\n=\n\\frac{\\mu}{r^2}\n(\\cos2\\theta-i\\sin2\\theta)\n\\]\n\nと比較して、\n\n\\[\n\\boxed{\nu=\\frac{\\mu}{r^2}\\cos2\\theta\n}\n\\]\n\n\\[\n\\boxed{\nv=\\frac{\\mu}{r^2}\\sin2\\theta\n}\n\\]\n\nである。\n\n### 直交座標での表現\n\n\\[\n\\cos2\\theta\n=\n\\frac{x^2-y^2}{r^2}\n\\]\n\n\\[\n\\sin2\\theta\n=\n\\frac{2xy}{r^2}\n\\]\n\nより、\n\n\\[\n\\boxed{\nu=\n\\mu\\frac{x^2-y^2}{(x^2+y^2)^2}\n}\n\\]\n\n\\[\n\\boxed{\nv=\n\\mu\\frac{2xy}{(x^2+y^2)^2}\n}\n\\]\n\nとも書ける。\n\n:::why title=\"複素速度が u+iv ではなく u-iv なの？\"\n複素速度ポテンシャルを \\(f=\\phi+i\\psi\\) と定義すると、Cauchy-Riemannの関係から \\(df/dz=u-iv\\) となる。講義で別の符号規約を使う場合は定義を確認する必要がある。\n:::\n\n### 最終解答\n\n\\[\n\\boxed{\n\\boldsymbol v\n=\n\\left(\n\\frac{\\mu}{r^2}\\cos2\\theta,\\ \n\\frac{\\mu}{r^2}\\sin2\\theta\n\\right)\n}\n\\]\n\nである。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "複素速度が u+iv ではなく u-iv なの？",
                  "markdown": "複素速度ポテンシャルを \\(f=\\phi+i\\psi\\) と定義すると、Cauchy-Riemannの関係から \\(df/dz=u-iv\\) となる。講義で別の符号規約を使う場合は定義を確認する必要がある。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-3",
              "label": "Q1-3",
              "title": "周方向速度",
              "markdown": "### 接線単位ベクトル\n\n極座標の単位ベクトルは、\n\n\\[\n\\boldsymbol e_r\n=\n(\\cos\\theta,\\sin\\theta)\n\\]\n\n\\[\n\\boldsymbol e_\\theta\n=\n(-\\sin\\theta,\\cos\\theta).\n\\]\n\n問題文の接線単位ベクトル \\(\\boldsymbol l\\) は、\n\n\\[\n\\boxed{\n\\boldsymbol l=\\boldsymbol e_\\theta\n=\n(-\\sin\\theta,\\cos\\theta)\n}\n\\]\n\nである。\n\n### 内積を計算する\n\n\\[\nv_\\theta\n=\n\\boldsymbol v\\cdot\\boldsymbol e_\\theta.\n\\]\n\n\\[\n=\n-u\\sin\\theta+v\\cos\\theta.\n\\]\n\n前問の結果を代入する。\n\n\\[\nv_\\theta\n=\n-\\frac{\\mu}{r^2}\n\\cos2\\theta\\sin\\theta\n+\n\\frac{\\mu}{r^2}\n\\sin2\\theta\\cos\\theta.\n\\]\n\n\\[\n=\n\\frac{\\mu}{r^2}\n\\left[\n\\sin2\\theta\\cos\\theta\n-\n\\cos2\\theta\\sin\\theta\n\\right].\n\\]\n\n三角関数の公式、\n\n\\[\n\\sin A\\cos B-\\cos A\\sin B\n=\n\\sin(A-B)\n\\]\n\nを使うと、\n\n\\[\nv_\\theta\n=\n\\frac{\\mu}{r^2}\n\\sin(2\\theta-\\theta).\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nv_\\theta\n=\n\\frac{\\mu}{r^2}\\sin\\theta\n}\n\\]\n\nである。\n\n### 参考：動径方向速度\n\n同様に、\n\n\\[\nv_r\n=\nu\\cos\\theta+v\\sin\\theta\n\\]\n\nなので、\n\n\\[\n\\boxed{\nv_r\n=\n\\frac{\\mu}{r^2}\\cos\\theta\n}\n\\]\n\nである。\n\n:::why title=\"流れ関数から直接求められないの？\"\n二次元極座標の流れ関数では \\(v_r=(1/r)\\partial\\psi/\\partial\\theta\\)、\\(v_\\theta=-\\partial\\psi/\\partial r\\) を使える。今回 \\(\\psi=\\mu\\sin\\theta/r\\) なので、同じ答えがすぐ得られる。\n:::\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "流れ関数から直接求められないの？",
                  "markdown": "二次元極座標の流れ関数では \\(v_r=(1/r)\\partial\\psi/\\partial\\theta\\)、\\(v_\\theta=-\\partial\\psi/\\partial r\\) を使える。今回 \\(\\psi=\\mu\\sin\\theta/r\\) なので、同じ答えがすぐ得られる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-4",
              "label": "Q1-4",
              "title": "円周に沿う循環",
              "markdown": "前問より、\n\n\\[\nv_\\theta\n=\n\\frac{\\mu}{r^2}\\sin\\theta.\n\\]\n\nしたがって、\n\n\\[\n\\Gamma\n=\n\\int_0^{2\\pi}\nv_\\theta r\\,d\\theta.\n\\]\n\n\\[\n=\n\\frac{\\mu}{r}\n\\int_0^{2\\pi}\n\\sin\\theta\\,d\\theta.\n\\]\n\n\\[\n\\int_0^{2\\pi}\\sin\\theta\\,d\\theta=0\n\\]\n\nなので、\n\n### 最終解答\n\n\\[\n\\boxed{\\Gamma=0}\n\\]\n\nである。\n\n### 物理的な意味\n\n二重湧き出しは渦流れではなく、原点の外側では渦なし流れである。\n\n円周の上半分と下半分で周方向速度の寄与が打ち消し合うため、循環は0になる。\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-1",
              "label": "Q2-1",
              "title": "Stokes近似の適用条件",
              "markdown": "### 何を無視した近似か\n\nNavier-Stokes方程式は、\n\n\\[\n\\rho\n\\frac{\\partial\\boldsymbol v}{\\partial t}\n+\n\\rho\n(\\boldsymbol v\\cdot\\nabla)\\boldsymbol v\n=\n-\\nabla p+\\mu\\nabla^2\\boldsymbol v.\n\\]\n\n式 (2) では、非線形な移流慣性項、\n\n\\[\n\\rho\n(\\boldsymbol v\\cdot\\nabla)\\boldsymbol v\n\\]\n\nを無視している。\n\nしたがって、Stokes近似を使える条件は、\n\n\\[\n\\boxed{\n\\left|\n\\rho\n(\\boldsymbol v\\cdot\\nabla)\\boldsymbol v\n\\right|\n\\ll\n\\left|\n\\mu\\nabla^2\\boldsymbol v\n\\right|\n}\n\\]\n\nである。\n\n### オーダー評価\n\n代表速度を \\(U\\)、代表長さを \\(L\\) とする。\n\n移流慣性項の大きさは、\n\n\\[\n\\rho\n(\\boldsymbol v\\cdot\\nabla)\\boldsymbol v\n\\sim\n\\rho\\frac{U^2}{L}.\n\\]\n\n粘性項の大きさは、\n\n\\[\n\\mu\\nabla^2\\boldsymbol v\n\\sim\n\\mu\\frac{U}{L^2}.\n\\]\n\n比を取ると、\n\n\\[\n\\frac{\n\\rho U^2/L\n}{\n\\mu U/L^2\n}\n=\n\\frac{\\rho UL}{\\mu}\n=\nRe.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{Re\\ll1}\n\\]\n\nがStokes近似の基本的な適用条件である。\n\n### 非定常項について\n\n式 (2) では、\n\n\\[\n\\rho\n\\frac{\\partial\\boldsymbol v}{\\partial t}\n\\]\n\nは残している。\n\n代表時間を \\(T\\) とすると、\n\n\\[\n\\frac{\n\\text{移流慣性項}\n}{\n\\text{非定常慣性項}\n}\n\\sim\n\\frac{U^2/L}{U/T}\n=\n\\frac{UT}{L}.\n\\]\n\nしたがって、移流項を非定常項に対しても無視するには、\n\n\\[\n\\boxed{\n\\frac{UT}{L}\\ll1\n}\n\\]\n\nであることが望ましい。\n\n定常流では非定常項が0なので、単に、\n\n\\[\n\\boxed{Re\\ll1}\n\\]\n\nが重要になる。\n\n### 最終解答\n\nStokes近似は、\n\n- 代表速度が小さい\n- 代表長さが小さい\n- 粘性が大きい\n- 密度が小さい\n\nなどにより、\n\n\\[\n\\boxed{\nRe=\\frac{\\rho UL}{\\mu}\\ll1\n}\n\\]\n\nとなり、移流慣性項が粘性項に比べて無視できるときに適用できる。\n\n:::why title=\"『遅い流れ』だけでは条件として不十分なの？\"\n流速が小さくても、代表長さが非常に大きかったり粘性が非常に小さかったりするとReynolds数は大きくなる。Stokes近似の可否は速度だけでなく、\\(\\rho,U,L,\\mu\\) の組合せで決まる。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "『遅い流れ』だけでは条件として不十分なの？",
                  "markdown": "流速が小さくても、代表長さが非常に大きかったり粘性が非常に小さかったりするとReynolds数は大きくなる。Stokes近似の可否は速度だけでなく、\\(\\rho,U,L,\\mu\\) の組合せで決まる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2",
              "label": "Q2-2",
              "title": "球まわり一様流の遠方流れ",
              "markdown": "### 一様流を球座標成分へ分解する\n\n遠方の流れは、\n\n\\[\n\\boldsymbol v_\\infty\n=\nU\\boldsymbol e_x.\n\\]\n\n球座標の単位ベクトルとの関係は、\n\n\\[\n\\boldsymbol e_x\n=\n\\cos\\theta\\,\\boldsymbol e_r\n-\n\\sin\\theta\\,\\boldsymbol e_\\theta.\n\\]\n\nしたがって、\n\n\\[\n\\boldsymbol v_\\infty\n=\nU\\cos\\theta\\,\\boldsymbol e_r\n-\nU\\sin\\theta\\,\\boldsymbol e_\\theta.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\text{ア}=U\\cos\\theta\n}\n\\]\n\n\\[\n\\boxed{\n\\text{イ}=-U\\sin\\theta\n}\n\\]\n\nである。\n\n:::why title=\"なぜ vθ に負号が付くの？\"\n\\(\\boldsymbol e_\\theta\\) は \\(\\theta\\) が増える向きである。一様流 \\(+x\\) は、上半平面では \\(\\theta\\) を小さくする向きに成分を持つため、\\(v_\\theta\\) は負になる。\n:::\n\n### 遠方流れのStokes流れ関数\n\n\\[\nv_r\n=\n\\frac{1}{r^2\\sin\\theta}\n\\frac{\\partial\\psi_\\infty}{\\partial\\theta}\n=\nU\\cos\\theta.\n\\]\n\nしたがって、\n\n\\[\n\\frac{\\partial\\psi_\\infty}{\\partial\\theta}\n=\nUr^2\\sin\\theta\\cos\\theta.\n\\]\n\n\\(\\theta\\) で積分する。\n\n\\[\n\\psi_\\infty\n=\n\\frac12Ur^2\\sin^2\\theta\n+\nF(r).\n\\]\n\n流れ関数には任意の定数を加えても速度は変わらないので、\n\n\\[\nF(r)=0\n\\]\n\nと選べる。\n\n### 最終解答\n\n\\[\n\\boxed{\n\\psi_\\infty(r,\\theta)\n=\n\\frac12Ur^2\\sin^2\\theta\n}\n\\]\n\nである。\n\n### \\(v_\\theta\\) の確認\n\n\\[\nv_\\theta\n=\n-\\frac{1}{r\\sin\\theta}\n\\frac{\\partial}{\\partial r}\n\\left(\n\\frac12Ur^2\\sin^2\\theta\n\\right).\n\\]\n\n\\[\n=\n-\\frac{1}{r\\sin\\theta}\nUr\\sin^2\\theta.\n\\]\n\n\\[\n=-U\\sin\\theta.\n\\]\n\n遠方境界条件と一致する。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ vθ に負号が付くの？",
                  "markdown": "\\(\\boldsymbol e_\\theta\\) は \\(\\theta\\) が増える向きである。一様流 \\(+x\\) は、上半平面では \\(\\theta\\) を小さくする向きに成分を持つため、\\(v_\\theta\\) は負になる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-3",
              "label": "Q2-3",
              "title": "Stokes流の流れ関数",
              "markdown": "流れ関数を、\n\n\\[\n\\psi\n=\n\\left(\n\\frac12Ur^2+\\frac{A}{r}-Br\n\\right)\n\\sin^2\\theta\n\\]\n\nと書く。\n\n## 境界条件1：\\(\\psi(a,\\theta)=0\\)\n\n\\[\n\\left(\n\\frac12Ua^2+\\frac{A}{a}-Ba\n\\right)\n\\sin^2\\theta\n=\n0.\n\\]\n\n任意の \\(\\theta\\) で成立するため、\n\n\\[\n\\boxed{\n\\frac12Ua^2+\\frac{A}{a}-Ba=0\n}\n\\tag{I}\n\\]\n\nである。\n\n## 境界条件2：\\(\\partial\\psi/\\partial r=0\\)\n\n\\[\n\\frac{\\partial\\psi}{\\partial r}\n=\n\\left(\nUr-\\frac{A}{r^2}-B\n\\right)\n\\sin^2\\theta.\n\\]\n\n\\(r=a\\) で、\n\n\\[\n\\boxed{\nUa-\\frac{A}{a^2}-B=0\n}\n\\tag{II}\n\\]\n\nである。\n\n### 連立方程式を解く\n\n式 (II) より、\n\n\\[\nB=Ua-\\frac{A}{a^2}.\n\\]\n\nこれを式 (I) へ代入する。\n\n\\[\n\\frac12Ua^2+\\frac{A}{a}\n-\na\n\\left(\nUa-\\frac{A}{a^2}\n\\right)\n=0.\n\\]\n\n\\[\n\\frac12Ua^2+\\frac{A}{a}\n-Ua^2+\\frac{A}{a}\n=0.\n\\]\n\n\\[\n-\\frac12Ua^2+\\frac{2A}{a}=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nA=\\frac14Ua^3\n}\n\\]\n\nである。\n\nさらに、\n\n\\[\nB\n=\nUa-\\frac{Ua^3/4}{a^2}.\n\\]\n\n\\[\n=\nUa-\\frac14Ua.\n\\]\n\n\\[\n\\boxed{\nB=\\frac34Ua\n}\n\\]\n\nである。\n\n### 最終的な流れ関数\n\n\\[\n\\boxed{\n\\psi\n=\n\\left(\n\\frac12Ur^2\n-\\frac34Uar\n+\\frac14\\frac{Ua^3}{r}\n\\right)\n\\sin^2\\theta\n}\n\\]\n\nまたは、\n\n\\[\n\\boxed{\n\\psi\n=\n\\frac12Ur^2\\sin^2\\theta\n\\left[\n1-\\frac{3a}{2r}\n+\\frac{a^3}{2r^3}\n\\right]\n}\n\\]\n\nである。\n\n### 試験答案\n\n\\[\n\\psi(a,\\theta)=0\n\\]\n\nより、\n\n\\[\n\\frac12Ua^2+\\frac{A}{a}-Ba=0.\n\\]\n\nまた、\n\n\\[\n\\left.\n\\frac{\\partial\\psi}{\\partial r}\n\\right|_{r=a}=0\n\\]\n\nより、\n\n\\[\nUa-\\frac{A}{a^2}-B=0.\n\\]\n\n連立して、\n\n\\[\n\\boxed{\nA=\\frac14Ua^3,\n\\qquad\nB=\\frac34Ua\n}\n\\]\n\nを得る。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q2-4",
              "label": "Q2-4",
              "title": "球に働く摩擦抵抗",
              "markdown": "接線応力は、\n\n\\[\np_{r\\theta}\n=\n-\\frac{3\\mu U}{2a}\\sin\\theta.\n\\]\n\n### 接線方向の応力をx方向へ射影する\n\n球座標単位ベクトルについて、\n\n\\[\n\\boldsymbol e_x\n=\n\\cos\\theta\\,\\boldsymbol e_r\n-\n\\sin\\theta\\,\\boldsymbol e_\\theta.\n\\]\n\nしたがって、\n\n\\[\n\\boldsymbol e_\\theta\\cdot\\boldsymbol e_x\n=\n-\\sin\\theta.\n\\]\n\n接線応力のx方向成分は、\n\n\\[\np_{r\\theta}\n(\\boldsymbol e_\\theta\\cdot\\boldsymbol e_x).\n\\]\n\n\\[\n=\n\\left(\n-\\frac{3\\mu U}{2a}\\sin\\theta\n\\right)\n(-\\sin\\theta).\n\\]\n\n\\[\n=\n\\frac{3\\mu U}{2a}\n\\sin^2\\theta.\n\\]\n\n### 球面要素\n\n球面上の面積要素は、\n\n\\[\ndS\n=\na^2\\sin\\theta\\,d\\theta\\,d\\varphi.\n\\]\n\nしたがって、x方向成分の積分は、\n\n\\[\nD_f\n=\n\\int_0^{2\\pi}\n\\int_0^\\pi\n\\frac{3\\mu U}{2a}\n\\sin^2\\theta\na^2\\sin\\theta\n\\,d\\theta\\,d\\varphi.\n\\]\n\n\\[\n=\n\\frac{3\\mu Ua}{2}\n\\left(\n\\int_0^{2\\pi}d\\varphi\n\\right)\n\\left(\n\\int_0^\\pi\\sin^3\\theta\\,d\\theta\n\\right).\n\\]\n\n\\[\n\\int_0^{2\\pi}d\\varphi=2\\pi\n\\]\n\n\\[\n\\int_0^\\pi\\sin^3\\theta\\,d\\theta\n=\n\\frac43.\n\\]\n\nよって、\n\n\\[\nD_f\n=\n\\frac{3\\mu Ua}{2}\n(2\\pi)\n\\left(\n\\frac43\n\\right).\n\\]\n\n### 最終解答\n\n摩擦抵抗の大きさは、\n\n\\[\n\\boxed{\nD_f=4\\pi\\mu Ua\n}\n\\]\n\nである。\n\n球に働く力の向きまで書けば、流れに逆向きなので、\n\n\\[\n\\boxed{\n\\boldsymbol D_f\n=\n-4\\pi\\mu Ua\\,\\boldsymbol e_x\n}\n\\]\n\nである。\n\n:::why title=\"有名なStokes抵抗 6πμUa と違うの？\"\n\\(6\\pi\\mu Ua\\) は、接線応力による摩擦抵抗と圧力による形状抵抗を足した全抵抗である。この問題は \\(p_{r\\theta}\\) だけを積分するため、摩擦抵抗 \\(4\\pi\\mu Ua\\) を求めている。残りの圧力抵抗は \\(2\\pi\\mu Ua\\) である。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "有名なStokes抵抗 6πμUa と違うの？",
                  "markdown": "\\(6\\pi\\mu Ua\\) は、接線応力による摩擦抵抗と圧力による形状抵抗を足した全抵抗である。この問題は \\(p_{r\\theta}\\) だけを積分するため、摩擦抵抗 \\(4\\pi\\mu Ua\\) を求めている。残りの圧力抵抗は \\(2\\pi\\mu Ua\\) である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-1",
              "label": "Q3-1",
              "title": "レイノルズ数の意味",
              "markdown": "### 定義\n\n代表速度を \\(U\\)、代表長さを \\(L\\)、動粘性係数を\n\n\\[\n\\nu=\\frac{\\mu}{\\rho}\n\\]\n\nとする。\n\nレイノルズ数は、\n\n\\[\n\\boxed{\nRe\n=\n\\frac{\\rho UL}{\\mu}\n=\n\\frac{UL}{\\nu}\n}\n\\]\n\nである。\n\n### Navier-Stokes方程式の無次元化\n\n非圧縮性流体の運動方程式を、\n\n\\[\n\\rho\n\\left[\n\\frac{\\partial\\boldsymbol v}{\\partial t}\n+\n(\\boldsymbol v\\cdot\\nabla)\\boldsymbol v\n\\right]\n=\n-\\nabla p+\\mu\\nabla^2\\boldsymbol v\n\\]\n\nとする。\n\n無次元変数を、\n\n\\[\n\\boldsymbol x=L\\boldsymbol x^*\n\\]\n\n\\[\n\\boldsymbol v=U\\boldsymbol v^*\n\\]\n\n\\[\nt=\\frac{L}{U}t^*\n\\]\n\n\\[\np=\\rho U^2p^*\n\\]\n\nと定義する。\n\n各項を代入し、\\(\\rho U^2/L\\) で割ると、\n\n\\[\n\\boxed{\n\\frac{\\partial\\boldsymbol v^*}{\\partial t^*}\n+\n(\\boldsymbol v^*\\cdot\\nabla^*)\\boldsymbol v^*\n=\n-\\nabla^*p^*\n+\n\\frac1{Re}\n\\nabla^{*2}\\boldsymbol v^*\n}\n\\]\n\nとなる。\n\nこの式では、慣性項の係数を1に取ると、粘性項の前に \\(1/Re\\) が付く。\n\nしたがって、レイノルズ数は、\n\n\\[\n\\boxed{\nRe\n\\sim\n\\frac{\\text{慣性項}}\n{\\text{粘性項}}\n}\n\\]\n\nを表す。\n\n### オーダー評価でも確認する\n\n慣性項は、\n\n\\[\n\\rho\n(\\boldsymbol v\\cdot\\nabla)\\boldsymbol v\n\\sim\n\\rho\\frac{U^2}{L}.\n\\]\n\n粘性項は、\n\n\\[\n\\mu\\nabla^2\\boldsymbol v\n\\sim\n\\mu\\frac{U}{L^2}.\n\\]\n\n両者の比は、\n\n\\[\n\\frac{\n\\rho U^2/L\n}{\n\\mu U/L^2\n}\n=\n\\frac{\\rho UL}{\\mu}\n=\nRe.\n\\]\n\n### 物理的な意味\n\n- \\(Re\\ll1\\)\n  - 粘性効果が支配的\n  - 流れは滑らかで、乱れが減衰しやすい\n  - Stokes流が成立しやすい\n\n- \\(Re\\gg1\\)\n  - 慣性効果が支配的\n  - はく離、渦放出、乱流などが起こりやすい\n  - 粘性効果は物体表面近くの境界層に集中する\n\n### 最終解答\n\n\\[\n\\boxed{\nRe=\\frac{\\rho UL}{\\mu}=\\frac{UL}{\\nu}\n}\n\\]\n\nであり、非圧縮性流体の運動方程式における、\n\n\\[\n\\boxed{\n\\text{慣性力と粘性力の比}\n}\n\\]\n\nを表す。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2",
              "label": "Q3-2",
              "title": "円柱後流の変化",
              "markdown": "円柱直径を \\(D\\)、一様流速を \\(U\\) とすると、\n\n\\[\nRe_D=\\frac{\\rho UD}{\\mu}\n\\]\n\nを用いる。\n\nレイノルズ数が増えるにつれて、代表的に次のように変化する。\n\n## (a) 極めて小さい \\(Re_D\\)\n\n\\[\nRe_D\\ll1\n\\]\n\n- 粘性が支配的なほふく流れ\n- 流線は円柱の前後でほぼ対称\n- 明瞭なはく離や後流渦はない\n\n模式：\n\n```text\n──────→  ○  ──────→\n   流線は前後ほぼ対称\n```\n\n## (b) 小さいが有限の \\(Re_D\\)\n\nレイノルズ数が数程度を超えると、\n\n- 円柱後方ではく離が始まる\n- 後方に左右対称な一対の定常渦が形成される\n- レイノルズ数の増加とともに再循環領域が長くなる\n\n模式：\n\n```text\n────→  ○  (↺  ↻)  ───→\n          定常な双子渦\n```\n\n## (c) 中程度の \\(Re_D\\)\n\nおよそ、\n\n\\[\nRe_D\\simeq47\n\\]\n\nを超えると、定常な対称後流が不安定になる。\n\n- 上下の渦が交互に放出される\n- von Kármán渦列が形成される\n- 揚力が周期的に変動する\n\n模式：\n\n```text\n────→  ○   ↺      ↻      ↺\n            ↻      ↺      ↻\n        交互に放出される渦列\n```\n\n## (d) さらに大きい \\(Re_D\\)\n\n- 渦列が三次元化する\n- 後流が不規則になる\n- 乱流遷移が進む\n- 広い乱流後流が形成される\n\n模式：\n\n```text\n────→  ○  ≋≈≋≈≋≈≋≈\n          不規則な乱流後流\n```\n\n## 高レイノルズ数での補足\n\nさらにレイノルズ数が大きくなると、円柱表面の境界層が層流から乱流へ遷移する。\n\n乱流境界層は運動量を多く持ち、はく離が後方へ移るため、圧力抵抗が急減する場合がある。これをdrag crisisという。\n\n### 最終解答\n\nレイノルズ数の増加に伴い、\n\n\\[\n\\boxed{\n\\text{前後対称なほふく流}\n\\to\n\\text{定常な双子渦}\n\\to\n\\text{周期的な渦放出}\n\\to\n\\text{三次元・乱流後流}\n}\n\\]\n\nへ変化する。\n\n:::why title=\"なぜレイノルズ数が大きいと渦が発生しやすいの？\"\n粘性には速度差や乱れを拡散して滑らかにする働きがある。Reynolds数が大きくなると慣性効果が粘性効果より強くなり、はく離したせん断層の不安定性が成長して渦放出へ至る。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "なぜレイノルズ数が大きいと渦が発生しやすいの？",
                  "markdown": "粘性には速度差や乱れを拡散して滑らかにする働きがある。Reynolds数が大きくなると慣性効果が粘性効果より強くなり、はく離したせん断層の不安定性が成長して渦放出へ至る。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-3-i",
              "label": "Q3-3-(i)",
              "title": "境界層厚さとレイノルズ数",
              "markdown": "### スケール\n\n境界層内では、\n\n\\[\nx\\sim L\n\\]\n\n\\[\ny\\sim\\delta\n\\]\n\n\\[\nu\\sim U.\n\\]\n\nしたがって、\n\n\\[\n\\frac{\\partial}{\\partial x}\n\\sim\n\\frac1L\n\\]\n\n\\[\n\\frac{\\partial}{\\partial y}\n\\sim\n\\frac1\\delta.\n\\]\n\n### 連続の式から \\(v\\) の大きさを求める\n\n連続の式より、\n\n\\[\n\\frac{U}{L}\n\\sim\n\\frac{V}{\\delta}.\n\\]\n\nここで、\\(V\\) は境界層内の垂直速度の代表値。\n\nしたがって、\n\n\\[\n\\boxed{\nV\n\\sim\nU\\frac{\\delta}{L}\n}\n\\]\n\nである。\n\n境界層が薄い、\n\n\\[\n\\delta\\ll L\n\\]\n\nなら、\n\n\\[\nV\\ll U\n\\]\n\nである。\n\n:::why title=\"境界層内で v が u より小さいのはなぜ？\"\n流れは主に平板に沿って進み、薄い境界層の中で少しずつ外向きに押し出される。連続の式から、垂直速度は \\(U\\delta/L\\) 程度に抑えられる。\n:::\n\n### x方向慣性項の大きさ\n\n\\[\nu\\frac{\\partial u}{\\partial x}\n\\sim\n\\frac{U^2}{L}.\n\\]\n\nまた、\n\n\\[\nv\\frac{\\partial u}{\\partial y}\n\\sim\n\\left(\nU\\frac{\\delta}{L}\n\\right)\n\\frac{U}{\\delta}\n=\n\\frac{U^2}{L}.\n\\]\n\nしたがって、2つの慣性項は同じオーダーである。\n\n### 粘性項の比較\n\nx方向の粘性拡散は、\n\n\\[\n\\nu\n\\frac{\\partial^2u}{\\partial x^2}\n\\sim\n\\nu\\frac{U}{L^2}.\n\\]\n\ny方向の粘性拡散は、\n\n\\[\n\\nu\n\\frac{\\partial^2u}{\\partial y^2}\n\\sim\n\\nu\\frac{U}{\\delta^2}.\n\\]\n\n\\[\n\\delta\\ll L\n\\]\n\nなら、\n\n\\[\n\\frac{U}{\\delta^2}\n\\gg\n\\frac{U}{L^2}.\n\\]\n\nよって、境界層内ではy方向粘性拡散が支配的。\n\n### 慣性項と粘性項の釣り合い\n\n境界層の厚さは、\n\n\\[\n\\frac{U^2}{L}\n\\sim\n\\nu\\frac{U}{\\delta^2}\n\\]\n\nという釣り合いで決まる。\n\n両辺を \\(U\\) で割る。\n\n\\[\n\\frac{U}{L}\n\\sim\n\\frac{\\nu}{\\delta^2}.\n\\]\n\nしたがって、\n\n\\[\n\\delta^2\n\\sim\n\\frac{\\nu L}{U}.\n\\]\n\n\\[\n\\boxed{\n\\delta\n\\sim\n\\sqrt{\\frac{\\nu L}{U}}\n}\n\\]\n\nである。\n\nレイノルズ数、\n\n\\[\nRe_L=\\frac{UL}{\\nu}\n\\]\n\nを使うと、\n\n\\[\n\\frac{\\delta}{L}\n\\sim\n\\sqrt{\n\\frac{\\nu}{UL}\n}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\frac{\\delta}{L}\n\\sim\nRe_L^{-1/2}\n}\n\\]\n\nまたは、\n\n\\[\n\\boxed{\n\\delta\n\\sim\n\\frac{L}{\\sqrt{Re_L}}\n}\n\\]\n\nである。\n\n### 局所的な厚さ\n\n平板先端からの距離を \\(x\\) とすれば、\n\n\\[\nRe_x=\\frac{Ux}{\\nu}\n\\]\n\nに対して、\n\n\\[\n\\boxed{\n\\delta(x)\n\\sim\n\\sqrt{\\frac{\\nu x}{U}}\n=\n\\frac{x}{\\sqrt{Re_x}}\n}\n\\]\n\nである。\n\n> [!IMPORTANT]\n> この式はオーダーの見積もりである。Blasius解で境界層厚さを \\(u=0.99U\\) の位置と定義すると、係数を含めておよそ \\(\\delta\\simeq5x/\\sqrt{Re_x}\\) となる。\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "境界層内で v が u より小さいのはなぜ？",
                  "markdown": "流れは主に平板に沿って進み、薄い境界層の中で少しずつ外向きに押し出される。連続の式から、垂直速度は \\(U\\delta/L\\) 程度に抑えられる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-3-ii",
              "label": "Q3-3-(ii)",
              "title": "境界層方程式の導出",
              "markdown": "### 小さなパラメータ\n\n\\[\n\\varepsilon=\\frac{\\delta}{L}\\ll1\n\\]\n\nと置く。\n\nスケールは、\n\n\\[\nu\\sim U,\n\\qquad\nv\\sim\\varepsilon U.\n\\]\n\n### x方向運動方程式\n\n元の式は、\n\n\\[\nu u_x+v u_y\n=\n-\\frac1\\rho p_x\n+\n\\nu(u_{xx}+u_{yy}).\n\\]\n\n前節のオーダー評価より、\n\n\\[\nu u_x\n\\sim\nv u_y\n\\sim\n\\frac{U^2}{L}.\n\\]\n\n\\[\n\\nu u_{yy}\n\\sim\n\\frac{U^2}{L}.\n\\]\n\n一方、\n\n\\[\n\\nu u_{xx}\n\\sim\n\\nu\\frac{U}{L^2}.\n\\]\n\n境界層関係、\n\n\\[\n\\frac{\\nu}{UL}\n\\sim\n\\left(\n\\frac{\\delta}{L}\n\\right)^2\n=\n\\varepsilon^2\n\\]\n\nを使うと、\n\n\\[\n\\nu u_{xx}\n\\]\n\nは主要項より \\(\\varepsilon^2\\) 小さい。\n\nしたがって、\n\n\\[\n\\nu u_{xx}\n\\]\n\nを無視できる。\n\n### y方向運動方程式\n\ny方向慣性項は、\n\n\\[\nu v_x\n\\sim\n\\frac{\\varepsilon U^2}{L}.\n\\]\n\n\\[\nv v_y\n\\sim\n\\frac{\\varepsilon U^2}{L}.\n\\]\n\ny方向粘性項も同じく主要なx方向項より小さい。\n\n一方、圧力項は、\n\n\\[\n\\frac1\\rho p_y\n\\]\n\nである。\n\n主要オーダーでは、\n\n\\[\n\\boxed{\n\\frac{\\partial p}{\\partial y}=0\n}\n\\]\n\nとなる。\n\nしたがって、境界層内の圧力は厚さ方向にほぼ一定で、外部流の圧力、\n\n\\[\np(x,y)=p_e(x)\n\\]\n\nと等しい。\n\n:::why title=\"なぜ境界層内の圧力は外部流と同じなの？\"\n薄い境界層の厚さ方向には、圧力を大きく変化させるだけの主要な運動項がない。そのため圧力はy方向にほぼ一定となり、境界層の外側の圧力が内部へそのまま伝わる。\n:::\n\n### 境界層方程式\n\n主要項だけを残すと、\n\n\\[\n\\boxed{\n\\frac{\\partial u}{\\partial x}\n+\n\\frac{\\partial v}{\\partial y}\n=0\n}\n\\]\n\n\\[\n\\boxed{\nu\\frac{\\partial u}{\\partial x}\n+\nv\\frac{\\partial u}{\\partial y}\n=\n-\\frac1\\rho\n\\frac{dp_e}{dx}\n+\n\\nu\n\\frac{\\partial^2u}{\\partial y^2}\n}\n\\]\n\n\\[\n\\boxed{\n\\frac{\\partial p}{\\partial y}=0\n}\n\\]\n\nを得る。\n\nこれが定常二次元非圧縮性流体の境界層方程式である。\n\n### 平板上の一様流\n\n平板外側の流れが一様で、\n\n\\[\nU_e=\\text{一定}\n\\]\n\nなら、Euler方程式から、\n\n\\[\n\\frac{dp_e}{dx}=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nu\\frac{\\partial u}{\\partial x}\n+\nv\\frac{\\partial u}{\\partial y}\n=\n\\nu\n\\frac{\\partial^2u}{\\partial y^2}\n}\n\\]\n\nとなる。\n\n### 境界条件\n\n平板表面 \\(y=0\\) では、非すべり・非浸透条件より、\n\n\\[\n\\boxed{\nu(x,0)=0,\n\\qquad\nv(x,0)=0\n}\n\\]\n\nである。\n\n境界層外縁では、\n\n\\[\n\\boxed{\nu(x,y\\to\\infty)=U_e(x)\n}\n\\]\n\nである。\n\n### 試験答案\n\n\\[\nx\\sim L,\\quad y\\sim\\delta,\\quad\nu\\sim U.\n\\]\n\n連続の式から、\n\n\\[\nv\\sim U\\frac{\\delta}{L}.\n\\]\n\nx方向慣性項とy方向粘性項を釣り合わせると、\n\n\\[\n\\frac{U^2}{L}\n\\sim\n\\nu\\frac{U}{\\delta^2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{\\delta}{L}\\sim Re_L^{-1/2}\n}.\n\\]\n\nまた、\n\n\\[\n\\delta/L\\ll1\n\\]\n\nより、\n\n\\[\nu_{xx}\\ll u_{yy}\n\\]\n\nであり、y方向運動方程式の主要項から、\n\n\\[\np_y=0.\n\\]\n\nよって境界層方程式は、\n\n\\[\n\\boxed{\nu_x+v_y=0\n}\n\\]\n\n\\[\n\\boxed{\nu u_x+v u_y\n=\n-\\frac1\\rho\\frac{dp_e}{dx}\n+\\nu u_{yy}\n}\n\\]\n\n\\[\n\\boxed{\np_y=0\n}\n\\]\n\nである。\n\n# 年度全体の重要ポイント\n\n- 二重湧き出しの流線は、原点を通る円群となる。\n- 二重湧き出しの循環は0であり、渦流れではない。\n- Stokes近似の条件は \\(Re\\ll1\\)。\n- 球まわりStokes流の摩擦抵抗は \\(4\\pi\\mu Ua\\)、全抵抗は \\(6\\pi\\mu Ua\\)。\n- レイノルズ数は慣性力と粘性力の比を表す。\n- 円柱後流は、定常双子渦から周期的渦放出、さらに乱流後流へ変化する。\n- 層流境界層厚さは \\(\\delta/L\\sim Re^{-1/2}\\)。\n- 境界層方程式では、流れ方向粘性拡散を無視し、圧力は境界層厚さ方向に一定とする。",
              "major": "3",
              "why": [
                {
                  "title": "なぜ境界層内の圧力は外部流と同じなの？",
                  "markdown": "薄い境界層の厚さ方向には、圧力を大きく変化させるだけの主要な運動項がない。そのため圧力はy方向にほぼ一定となり、境界層の外側の圧力が内部へそのまま伝わる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            }
          ]
        }
      ]
    },
    {
      "name": "工業数学F2",
      "slug": "industrial-math-f2",
      "years": [
        {
          "year": 2023,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "瀬波"
          ],
          "status": "completed",
          "sourceFile": "工業数学F2(瀬波)2023.pdf",
          "sourcePages": [
            1,
            2
          ],
          "problemAssets": [
            "/exams/industrial-math-f2/2023/page-1.webp",
            "/exams/industrial-math-f2/2023/page-2.webp"
          ],
          "localPdfUrl": "/pdfs/industrial-math-f2/2023.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1lEWrJzkPy4YeRLF8-U01fpamJU2JGEAs/edit",
          "pdfSourceFile": "工業数学F2(瀬波)2023.pdf",
          "introMarkdown": "> [!NOTE]\n> Webサイトでは、各問題の原文を元PDFどおりに表示し、「原本を表示」から該当ページ画像も確認できるようにする。解説は問題文とは別の領域へ表示する。\n\n\n## この年度で必要な予備知識\n\n### 関数の内積\n\n\\[\n(f,g)=\\int_{-\\pi}^{\\pi}f(x)g(x)\\,dx\n\\]\n\nベクトルの内積を関数へ拡張したもの。内積が0になる関数同士を「直交する」という。\n\n### 正規直交基底\n\n\\[\ne_0=\\frac1{\\sqrt{2\\pi}},\\qquad\ne_1=\\frac{\\cos x}{\\sqrt\\pi},\\qquad\ne_2=\\frac{\\sin x}{\\sqrt\\pi}\n\\]\n\nこれらは\n\n\\[\n(e_i,e_j)=\n\\begin{cases}\n1&i=j\\\\\n0&i\\ne j\n\\end{cases}\n\\]\n\nを満たす。\n\n### フーリエ変換の定義\n\n\\[\n\\hat f(k)=\\int_{-\\infty}^{\\infty}f(x)e^{-ikx}\\,dx\n\\]\n\n\\[\nf(x)=\\frac1{2\\pi}\\int_{-\\infty}^{\\infty}\\hat f(k)e^{ikx}\\,dk\n\\]\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-1",
              "title": "関数の内積",
              "markdown": "### 解法方針\n\n\\(f_1,f_2\\) は同じ正規直交基底で展開されている。異なる基底同士の内積は0、同じ基底同士は1なので、対応する係数の積だけが残る。\n\n:::why title=\"なぜ交差項が消えるの？\"\n例えば定数と正弦の積、余弦と正弦の積は、対称区間 \\([-\\pi,\\pi]\\) で正負が打ち消し合い、積分が0になる。\n:::\n\n### 最終解答\n\n\\[\n\\boxed{(f_1,f_2)=a_0b_0+a_1b_1+a_2b_2}\n\\]\n\n### 試験答案\n\n正規直交性 \\((e_i,e_j)=\\delta_{ij}\\) より、\n\n\\[\n(f_1,f_2)\n=\\sum_{i,j=0}^{2}a_ib_j(e_i,e_j)\n=\\sum_{i=0}^{2}a_ib_i\n=a_0b_0+a_1b_1+a_2b_2.\n\\]\n\n### 重要ポイント\n\n- 正規直交基底では、関数の内積が係数ベクトルの内積になる。\n- 全9項を積分する必要はない。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ交差項が消えるの？",
                  "markdown": "例えば定数と正弦の積、余弦と正弦の積は、対称区間 \\([-\\pi,\\pi]\\) で正負が打ち消し合い、積分が0になる。"
                }
              ],
              "importantPoints": [
                "正規直交基底では、関数の内積が係数ベクトルの内積になる。",
                "全9項を積分する必要はない。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q1-2",
              "label": "Q1-2",
              "title": "微分演算子の行列表現",
              "markdown": "演算子を\n\n\\[\n\\hat O=\\frac d{dx}+\\frac{d^2}{dx^2}\n\\]\n\nとする。\n\n### 詳しい解説\n\n定数基底について、\n\n\\[\n\\hat Oe_0=0.\n\\]\n\n余弦基底について、\n\n\\[\n\\frac d{dx}e_1=-e_2,\\qquad\n\\frac{d^2}{dx^2}e_1=-e_1\n\\]\n\nなので、\n\n\\[\n\\hat Oe_1=-e_1-e_2.\n\\]\n\n正弦基底について、\n\n\\[\n\\frac d{dx}e_2=e_1,\\qquad\n\\frac{d^2}{dx^2}e_2=-e_2\n\\]\n\nなので、\n\n\\[\n\\hat Oe_2=e_1-e_2.\n\\]\n\n:::why title=\"なぜ各結果を列に並べるの？\"\n行列の第 \\(j\\) 列は、基底 \\(e_j\\) を作用させた結果の座標である。\n:::\n\n### 最終解答\n\n\\[\n\\boxed{\nA=\n\\begin{pmatrix}\n0&0&0\\\\\n0&-1&1\\\\\n0&-1&-1\n\\end{pmatrix}}\n\\]\n\n### 間違えやすい点\n\n- 各像の係数を「行」ではなく「列」に入れる。\n- \\((\\cos x)'=-\\sin x\\) の符号に注意する。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ各結果を列に並べるの？",
                  "markdown": "行列の第 \\(j\\) 列は、基底 \\(e_j\\) を作用させた結果の座標である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-3",
              "label": "Q1-3",
              "title": "絶対値関数のフーリエ近似",
              "markdown": "\\[\nh(x)=|x|\n\\]\n\nを\n\n\\[\ng_n(x)=\\frac{\\alpha_0}{2}\n+\\sum_{k=1}^{n}\n(\\alpha_k\\cos kx+\\beta_k\\sin kx)\n\\]\n\nで平均二乗近似する。\n\n### 解法方針\n\n平均二乗誤差を最小にする係数は、\\(h(x)\\) のフーリエ係数である。\n\n### 定数係数\n\n\\[\n\\alpha_0\n=\\frac1\\pi\\int_{-\\pi}^{\\pi}|x|\\,dx\n=\\frac2\\pi\\int_0^\\pi x\\,dx\n=\\pi.\n\\]\n\n:::why title=\"なぜ積分を2倍できるの？\"\n\\(|x|\\) は偶関数であり、グラフが \\(y\\) 軸対称だから、左半分と右半分の積分が等しい。\n:::\n\n### 正弦係数\n\n\\(|x|\\) は偶関数、\\(\\sin kx\\) は奇関数である。積は奇関数なので、\n\n\\[\n\\boxed{\\beta_k=0}.\n\\]\n\n### 余弦係数\n\n\\[\n\\alpha_k\n=\\frac2\\pi\\int_0^\\pi x\\cos kx\\,dx.\n\\]\n\n部分積分で\n\n\\[\nu=x,\\qquad dv=\\cos kx\\,dx\n\\]\n\nと置くと、\n\n\\[\ndu=dx,\\qquad v=\\frac{\\sin kx}{k}.\n\\]\n\nしたがって、\n\n\\[\n\\int_0^\\pi x\\cos kx\\,dx\n=\n\\left[\\frac{x\\sin kx}{k}\\right]_0^\\pi\n-\\frac1k\\int_0^\\pi\\sin kx\\,dx.\n\\]\n\n第1項は \\(\\sin(k\\pi)=0\\) により0。\n\n\\[\n-\\frac1k\\int_0^\\pi\\sin kx\\,dx\n=\n\\frac{(-1)^k-1}{k^2}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\alpha_k=\n\\frac{2\\{(-1)^k-1\\}}{\\pi k^2}}\n\\]\n\nである。\n\n### 最終解答\n\n\\[\n\\boxed{\n\\alpha_0=\\pi,\\qquad\n\\alpha_k=\\frac{2\\{(-1)^k-1\\}}{\\pi k^2},\\qquad\n\\beta_k=0}\n\\]\n\nまた、\n\n\\[\n\\boxed{\ng_n(x)=\\frac\\pi2-\\frac4\\pi\n\\sum_{\\substack{1\\le k\\le n\\\\k\\text{ odd}}}\n\\frac{\\cos kx}{k^2}}\n\\]\n\n### 重要ポイント\n\n- 偶関数のフーリエ級数では正弦係数が0。\n- \\(x\\cos kx\\) では部分積分を使う。\n- 偶数 \\(k\\) の余弦係数は0、奇数 \\(k\\) だけが残る。\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ積分を2倍できるの？",
                  "markdown": "\\(|x|\\) は偶関数であり、グラフが \\(y\\) 軸対称だから、左半分と右半分の積分が等しい。"
                }
              ],
              "importantPoints": [
                "偶関数のフーリエ級数では正弦係数が0。",
                "\\(x\\cos kx\\) では部分積分を使う。",
                "偶数 \\(k\\) の余弦係数は0、奇数 \\(k\\) だけが残る。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-4",
              "label": "Q1-4",
              "title": "フーリエ部分和のノルム",
              "markdown": "### 解法方針\n\n\\(g_n\\) は平均二乗の意味で \\(h(x)=|x|\\) へ収束するため、\n\n\\[\n(g_n,g_n)\\to(h,h).\n\\]\n\n### 計算\n\n\\[\n(h,h)\n=\\int_{-\\pi}^{\\pi}|x|^2\\,dx\n=\\int_{-\\pi}^{\\pi}x^2\\,dx\n=2\\int_0^\\pi x^2\\,dx\n=\\frac{2\\pi^3}{3}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\lim_{n\\to\\infty}(g_n,g_n)=\\frac{2\\pi^3}{3}}\n\\]\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-1",
              "label": "Q2-1",
              "title": "フーリエ変換の定義",
              "markdown": "\\[\n\\boxed{\n\\hat f(k)=\\int_{-\\infty}^{\\infty}f(x)e^{-ikx}\\,dx}\n\\]\n\n\\[\n\\boxed{\nf(x)=\\frac1{2\\pi}\\int_{-\\infty}^{\\infty}\\hat f(k)e^{ikx}\\,dk}\n\\]\n\n### 間違えやすい点\n\n- 授業によって \\(2\\pi\\) の配置が異なるので、必ず定義を先に書く。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2a",
              "label": "Q2-2(a)",
              "title": "定数関数のフーリエ変換",
              "markdown": "\\[\nf(x)=3+i.\n\\]\n\n通常の積分としては収束しないので、デルタ関数を使う超関数の意味で扱う。\n\n\\[\n\\mathcal F[1]=2\\pi\\delta(k).\n\\]\n\n線形性より、\n\n\\[\n\\boxed{\n\\hat f(k)=2\\pi(3+i)\\delta(k)}\n\\]\n\n:::why title=\"デルタ関数が出る理由\"\n定数関数には変化がなく、周波数0の成分だけを持つ。そのため、変換後は \\(k=0\\) に集中する。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "デルタ関数が出る理由",
                  "markdown": "定数関数には変化がなく、周波数0の成分だけを持つ。そのため、変換後は \\(k=0\\) に集中する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2b",
              "label": "Q2-2(b)",
              "title": "指数関数のフーリエ変換",
              "markdown": "\\[\nf(x)=e^{a|x|},\\qquad a<0.\n\\]\n\n偶関数なので、\n\n\\[\n\\hat f(k)\n=2\\int_0^\\infty e^{ax}\\cos kx\\,dx.\n\\]\n\n\\(a<0\\) より積分が収束し、\n\n\\[\n\\int_0^\\infty e^{ax}\\cos kx\\,dx\n=-\\frac{a}{a^2+k^2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\hat f(k)=\\frac{-2a}{a^2+k^2}}\n\\]\n\n### 重要ポイント\n\n- \\(a<0\\) は無限遠で指数関数を減衰させる条件。\n- 偶関数の変換は余弦積分だけで計算できる。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [
                "\\(a<0\\) は無限遠で指数関数を減衰させる条件。",
                "偶関数の変換は余弦積分だけで計算できる。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-1",
              "label": "Q3-1",
              "title": "波動方程式の進行波解",
              "markdown": "\\[\nu(x,t)=\\phi(x+ct)+\\psi(x-ct).\n\\]\n\n### 時間微分\n\n\\[\nu_t=c\\phi'(x+ct)-c\\psi'(x-ct)\n\\]\n\n\\[\nu_{tt}=c^2\\phi''(x+ct)+c^2\\psi''(x-ct).\n\\]\n\n### 空間微分\n\n\\[\nu_x=\\phi'(x+ct)+\\psi'(x-ct)\n\\]\n\n\\[\nu_{xx}=\\phi''(x+ct)+\\psi''(x-ct).\n\\]\n\nしたがって、\n\n\\[\n\\boxed{u_{tt}=c^2u_{xx}}.\n\\]\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2",
              "label": "Q3-2",
              "title": "ダランベールの公式",
              "markdown": "初期条件を\n\n\\[\nu(x,0)=f(x),\\qquad u_t(x,0)=g(x)\n\\]\n\nとする。\n\n\\(t=0\\) を代入すると、\n\n\\[\n\\phi(x)+\\psi(x)=f(x)\n\\]\n\n\\[\nc\\phi'(x)-c\\psi'(x)=g(x).\n\\]\n\n第2式を積分し、第1式と連立して \\(\\phi,\\psi\\) を求めると、\n\n\\[\n\\boxed{\nu(x,t)=\\frac12\\left[\nf(x+ct)+f(x-ct)\n+\\frac1c\\int_{x-ct}^{x+ct}g(y)\\,dy\n\\right]}\n\\]\n\nを得る。\n\n:::why title=\"なぜ積分区間が x-ct から x+ct なの？\"\n時刻 \\(t\\) に位置 \\(x\\) へ到達できる初期位置が、速度 \\(c\\) で左右へさかのぼった区間だからである。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "なぜ積分区間が x-ct から x+ct なの？",
                  "markdown": "時刻 \\(t\\) に位置 \\(x\\) へ到達できる初期位置が、速度 \\(c\\) で左右へさかのぼった区間だからである。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-3",
              "label": "Q3-3",
              "title": "具体的初期条件",
              "markdown": "\\[\nf(x)=\\sum_{n=1}^{\\infty}\\sin\\frac{n\\pi x}{l},\n\\qquad\ng(x)=\\sin\\frac{\\pi x}{l}.\n\\]\n\nダランベールの公式へ代入する。\n\n加法定理より、\n\n\\[\n\\frac12\\left[\n\\sin\\frac{n\\pi(x+ct)}l+\n\\sin\\frac{n\\pi(x-ct)}l\n\\right]\n=\n\\sin\\frac{n\\pi x}l\n\\cos\\frac{n\\pi ct}l.\n\\]\n\n速度項は、\n\n\\[\n\\frac1{2c}\n\\int_{x-ct}^{x+ct}\n\\sin\\frac{\\pi y}{l}\\,dy\n=\n\\frac{l}{\\pi c}\n\\sin\\frac{\\pi x}{l}\n\\sin\\frac{\\pi ct}{l}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nu(x,t)=\n\\sum_{n=1}^{\\infty}\n\\sin\\frac{n\\pi x}{l}\n\\cos\\frac{n\\pi ct}{l}\n+\n\\frac{l}{\\pi c}\n\\sin\\frac{\\pi x}{l}\n\\sin\\frac{\\pi ct}{l}}\n\\]\n\n### 確認事項\n\n元画像の総和記号には上下限が明示されていないように見えるため、本Markdownでは通常どおり \\(n=1,2,\\ldots\\) と解釈している。",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            }
          ]
        },
        {
          "year": 2021,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "瀬波"
          ],
          "status": "completed",
          "sourceFile": "工業数学F2(瀬波)2021.pdf",
          "sourcePages": [
            1
          ],
          "problemAssets": [
            "/exams/industrial-math-f2/2021/page-1.webp"
          ],
          "localPdfUrl": "/pdfs/industrial-math-f2/2021.pdf",
          "sourceUrl": "",
          "pdfSourceFile": "工業数学F2(灘波)2021.pdf",
          "introMarkdown": "> [!NOTE]\n> Webサイトでは、各問題の原文を元PDFどおりに表示し、「原本を表示」から該当ページ画像も確認できるようにする。解説は問題文とは別の領域へ表示する。\n\n\n## この年度で必要な予備知識\n\n### フーリエ級数\n\n\\[\nf(x)=\\frac{a_0}{2}\n+\\sum_{n=1}^{\\infty}\n(a_n\\cos nx+b_n\\sin nx)\n\\]\n\n\\[\na_n=\\frac1\\pi\\int_{-\\pi}^{\\pi}f(x)\\cos nx\\,dx\n\\]\n\n\\[\nb_n=\\frac1\\pi\\int_{-\\pi}^{\\pi}f(x)\\sin nx\\,dx\n\\]\n\n### 熱方程式\n\n\\[\nu_t=Du_{xx}\n\\]\n\n温度の凹凸が時間とともにならされる現象を表す。\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-1",
              "title": "正弦・余弦の直交性",
              "markdown": "内積を\n\n\\[\n(f,g)=\\int_{-\\pi}^{\\pi}f(x)g(x)\\,dx\n\\]\n\nと定める。\n\n\\[\n\\sin mx\\cos nx\n=\\frac12\\{\\sin((m+n)x)+\\sin((m-n)x)\\}\n\\]\n\nなので、対称区間で積分すると0。\n\nまた、\n\n\\[\n\\int_{-\\pi}^{\\pi}\\sin mx\\sin nx\\,dx\n=\n\\begin{cases}\n\\pi&m=n\\\\\n0&m\\ne n\n\\end{cases}\n\\]\n\n\\[\n\\int_{-\\pi}^{\\pi}\\cos mx\\cos nx\\,dx\n=\n\\begin{cases}\n\\pi&m=n\\\\\n0&m\\ne n\n\\end{cases}\n\\]\n\nである。\n\n### 結論\n\n異なる周波数の正弦・余弦は内積が0となるため直交する。この性質により、フーリエ係数を1つずつ独立に取り出せる。\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q1-2",
              "label": "Q1-2",
              "title": "段階関数のフーリエ級数",
              "markdown": "\\[\nf(x)=\n\\begin{cases}\n2&0<x<\\pi\\\\\n0&-\\pi<x<0\n\\end{cases}\n\\]\n\n### 定数係数\n\n\\[\na_0\n=\\frac1\\pi\\int_{-\\pi}^{\\pi}f(x)\\,dx\n=\\frac1\\pi\\int_0^\\pi2\\,dx\n=2.\n\\]\n\n### 余弦係数\n\n\\[\na_n\n=\\frac2\\pi\\int_0^\\pi\\cos nx\\,dx\n=0.\n\\]\n\n### 正弦係数\n\n\\[\nb_n\n=\\frac2\\pi\\int_0^\\pi\\sin nx\\,dx\n\\]\n\n\\[\n=\\frac2{\\pi n}\\{1-(-1)^n\\}.\n\\]\n\nしたがって、\n\n\\[\nb_n=\n\\begin{cases}\n0&n\\text{ が偶数}\\\\\n\\frac4{\\pi n}&n\\text{ が奇数}\n\\end{cases}\n\\]\n\nである。\n\n### 最終解答\n\n\\[\n\\boxed{\nf(x)=1+\\frac4\\pi\n\\left(\n\\sin x+\\frac{\\sin3x}{3}\n+\\frac{\\sin5x}{5}+\\cdots\n\\right)}\n\\]\n\n### 間違えやすい点\n\n- 定数項は \\(a_0\\) ではなく \\(a_0/2=1\\)。\n- 正弦係数では偶数項が0になる。\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-3",
              "label": "Q1-3",
              "title": "ライプニッツ級数",
              "markdown": "前問のフーリエ級数へ\n\n\\[\nx=\\frac\\pi2\n\\]\n\nを代入する。この点では \\(f(\\pi/2)=2\\)。\n\n\\[\n\\sin\\frac{(2m-1)\\pi}{2}\n=1,-1,1,-1,\\ldots\n\\]\n\nと交互になるので、\n\n\\[\n2\n=1+\\frac4\\pi\n\\left(\n1-\\frac13+\\frac15-\\frac17+\\cdots\n\\right).\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac\\pi4\n=\n1-\\frac13+\\frac15-\\frac17+\\cdots\n=\n\\sum_{n=1}^{\\infty}\n\\frac{(-1)^{n-1}}{2n-1}}\n\\]\n\nとなる。\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-1",
              "label": "Q2-1",
              "title": "フーリエ変換の定義",
              "markdown": "\\[\n\\boxed{\n\\hat f(k)=\\int_{-\\infty}^{\\infty}f(x)e^{-ikx}\\,dx}\n\\]\n\n\\[\n\\boxed{\nf(x)=\\frac1{2\\pi}\\int_{-\\infty}^{\\infty}\\hat f(k)e^{ikx}\\,dk}\n\\]\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2a",
              "label": "Q2-2(a)",
              "title": "指数関数のフーリエ変換",
              "markdown": "\\[\nf(x)=e^{-|x|}.\n\\]\n\n偶関数なので、\n\n\\[\n\\hat f(k)\n=2\\int_0^\\infty e^{-x}\\cos kx\\,dx.\n\\]\n\n基本積分\n\n\\[\n\\int_0^\\infty e^{-x}\\cos kx\\,dx\n=\\frac1{1+k^2}\n\\]\n\nより、\n\n\\[\n\\boxed{\n\\hat f(k)=\\frac2{1+k^2}}\n\\]\n\nとなる。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2b",
              "label": "Q2-2(b)",
              "title": "xのフーリエ変換",
              "markdown": "\\[\nf(x)=x.\n\\]\n\n通常の積分では収束しないため、超関数として扱う。\n\n### 微分則\n\n\\[\n\\mathcal F[xf(x)]\n=i\\frac d{dk}\\hat f(k).\n\\]\n\n\\[\n\\mathcal F[1]=2\\pi\\delta(k)\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\mathcal F[x]\n=2\\pi i\\,\\delta'(k)}\n\\]\n\nとなる。\n\n:::why title=\"なぜデルタ関数の微分が出るの？\"\n元の関数へ \\(x\\) を掛ける操作が、周波数側では \\(i\\,d/dk\\) に対応する。定数1の変換がデルタ関数なので、その微分になる。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜデルタ関数の微分が出るの？",
                  "markdown": "元の関数へ \\(x\\) を掛ける操作が、周波数側では \\(i\\,d/dk\\) に対応する。定数1の変換がデルタ関数なので、その微分になる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-1",
              "label": "Q3-1",
              "title": "周期境界条件つき熱方程式",
              "markdown": "\\[\nu_t=Du_{xx}\n\\]\n\n\\[\nu(x+2l,t)=u(x,t)\n\\]\n\nとする。\n\n### 変数分離\n\n\\[\nu(x,t)=X(x)T(t)\n\\]\n\nと仮定すると、\n\n\\[\nXT'=DX''T.\n\\]\n\n両辺を \\(DXT\\) で割り、\n\n\\[\n\\frac{T'}{DT}\n=\\frac{X''}{X}\n=-\\lambda.\n\\]\n\nしたがって、\n\n\\[\nX''+\\lambda X=0,\n\\qquad\nT'+D\\lambda T=0.\n\\]\n\n周期境界条件から、\n\n\\[\n\\lambda\n=\\left(\\frac{k\\pi}{l}\\right)^2,\n\\qquad k=1,2,\\ldots\n\\]\n\nとなる。\n\n空間解は、\n\n\\[\nX_k(x)\n=A_k\\cos\\frac{k\\pi x}{l}\n+B_k\\sin\\frac{k\\pi x}{l}.\n\\]\n\n時間解は、\n\n\\[\nT_k(t)\n=\\exp\\left(\n-\\frac{k^2\\pi^2D}{l^2}t\n\\right).\n\\]\n\nよって、\n\n\\[\n\\boxed{\nu(x,t)\n=\n\\sum_{k=1}^{\\infty}\n\\left(\nA_k\\cos\\frac{k\\pi x}{l}\n+B_k\\sin\\frac{k\\pi x}{l}\n\\right)\n\\exp\\left(\n-\\frac{k^2\\pi^2D}{l^2}t\n\\right)}\n\\]\n\nである。\n\n### 数学的補足\n\n一般の初期条件を完全に表すには、時間的に減衰しない定数モード \\(A_0\\) を加える場合がある。問題文は \\(k=1,2,\\ldots\\) の非定数モードを示している。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2",
              "label": "Q3-2",
              "title": "初期条件から係数を求める",
              "markdown": "\\(t=0\\) を代入すると、\n\n\\[\nf(x)\n=\nA_0+\n\\sum_{k=1}^{\\infty}\n\\left(\nA_k\\cos\\frac{k\\pi x}{l}\n+B_k\\sin\\frac{k\\pi x}{l}\n\\right).\n\\]\n\n直交性より、\n\n\\[\n\\boxed{\nA_0=\\frac1{2l}\\int_{-l}^{l}f(x)\\,dx}\n\\]\n\n\\[\n\\boxed{\nA_k=\\frac1l\n\\int_{-l}^{l}\nf(x)\\cos\\frac{k\\pi x}{l}\\,dx}\n\\]\n\n\\[\n\\boxed{\nB_k=\\frac1l\n\\int_{-l}^{l}\nf(x)\\sin\\frac{k\\pi x}{l}\\,dx}\n\\]\n\nとなる。\n\n:::why title=\"なぜ他の係数が混ざらないの？\"\n正弦・余弦の直交性により、求めたいモード以外の積分がすべて0になるからである。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "なぜ他の係数が混ざらないの？",
                  "markdown": "正弦・余弦の直交性により、求めたいモード以外の積分がすべて0になるからである。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-3",
              "label": "Q3-3",
              "title": "単一モードの解",
              "markdown": "\\[\nf(x)=\\sin\\frac{n\\pi x}{l}.\n\\]\n\n初期条件は正弦の第 \\(n\\) モードだけなので、\n\n\\[\nB_n=1\n\\]\n\nだけが残り、他の係数は0。\n\nしたがって、\n\n\\[\n\\boxed{\nu(x,t)\n=\n\\sin\\frac{n\\pi x}{l}\n\\exp\\left(\n-\\frac{n^2\\pi^2D}{l^2}t\n\\right)}\n\\]\n\nとなる。\n\n### 重要ポイント\n\n- \\(n\\) が大きいほど減衰率が \\(n^2\\) 倍になり、細かな温度分布ほど速くならされる。",
              "major": "3",
              "why": [],
              "importantPoints": [
                "\\(n\\) が大きいほど減衰率が \\(n^2\\) 倍になり、細かな温度分布ほど速くならされる。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            }
          ]
        }
      ]
    },
    {
      "name": "材料基礎学1",
      "slug": "materials-fundamentals-1",
      "years": [
        {
          "year": 2018,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "平方",
            "嶋田"
          ],
          "status": "completed",
          "sourceFile": "材料基礎学1(平方)2018.pdf",
          "sourcePages": [
            1,
            2
          ],
          "problemAssets": [
            "/exams/materials-fundamentals-1/2018/page-1.webp",
            "/exams/materials-fundamentals-1/2018/page-2.webp"
          ],
          "localPdfUrl": "/pdfs/materials-fundamentals-1/2018.pdf",
          "sourceUrl": "https://drive.google.com/file/d/17r7rU1vOiShf75A7BgMKIUQoGiNv1lcz/edit",
          "pdfSourceFile": "材料基礎学1(平方)2018.pdf",
          "introMarkdown": "> [!NOTE]\n> 問題文は元PDFの表現を維持して表示する。問1と問5は図が不可欠なので、元PDF画像を必ず併記する。問1の解答図として `/exams/materials-fundamentals-1/2018/q1-answer.png` を表示する。\n\n\n## 1. 結晶面と結晶方向\n\n結晶面は丸括弧、\n\n\\[\n(hkl)\n\\]\n\n結晶方向は角括弧、\n\n\\[\n[uvw]\n\\]\n\nで表す。\n\n同じ対称性を持つ面の集まりは、\n\n\\[\n\\{hkl\\}\n\\]\n\n同じ対称性を持つ方向の集まりは、\n\n\\[\n\\langle uvw\\rangle\n\\]\n\nと表す。\n\n## 2. 六方晶のミラー・ブラヴェ指数\n\n六方晶では、底面内に120度ずつ離れた3本の軸 \\(x,y,u\\) と、底面に垂直な \\(z\\) 軸を用いる。\n\n面は、\n\n\\[\n(hkil)\n\\]\n\n方向は、\n\n\\[\n[uvtw]\n\\]\n\nと4つの指数で表す。\n\n面については、\n\n\\[\n\\boxed{h+k+i=0}\n\\]\n\n方向については、\n\n\\[\n\\boxed{u+v+t=0}\n\\]\n\nが成り立つ。\n\n### 面の指数の求め方\n\n面が各軸を切る位置を格子定数単位で、\n\n\\[\np,\\ q,\\ r,\\ s\n\\]\n\nとしたとき、その逆数、\n\n\\[\n\\frac1p,\\ \\frac1q,\\ \\frac1r,\\ \\frac1s\n\\]\n\nを最小整数比へ直したものが \\((hkil)\\) である。\n\n軸と平行なら切片は無限大なので、対応する指数は0。\n\n負の側で軸を切る場合は、指数へバーを付ける。\n\n## 3. すべり系\n\n塑性変形は、転位が特定の面と方向に沿って移動することで起こる。\n\n- 転位が動く面：すべり面\n- 転位が動く方向：すべり方向\n- 両者の組：すべり系\n\n一般に、原子が最も密に並ぶ面と方向ほど、転位が移動しやすい。\n\n## 4. Schmidの法則\n\n単軸引張応力を \\(\\sigma\\) とする。\n\n引張軸とすべり面法線のなす角を \\(\\phi\\)、引張軸とすべり方向のなす角を \\(\\lambda\\) とすると、分解せん断応力は、\n\n\\[\n\\boxed{\n\\tau_{\\mathrm R}\n=\n\\sigma\\cos\\phi\\cos\\lambda\n}\n\\]\n\nである。\n\nSchmid因子は、\n\n\\[\n\\boxed{\nm=\\cos\\phi\\cos\\lambda\n}\n\\]\n\nである。\n\n## 5. てこの法則\n\n二相領域で、全体組成を \\(C_0\\)、左側相の組成を \\(C_\\alpha\\)、右側相の組成を \\(C_\\gamma\\) とすると、\n\n\\[\n\\boxed{\nW_\\alpha\n=\n\\frac{C_\\gamma-C_0}\n{C_\\gamma-C_\\alpha}\n}\n\\]\n\n\\[\n\\boxed{\nW_\\gamma\n=\n\\frac{C_0-C_\\alpha}\n{C_\\gamma-C_\\alpha}\n}\n\\]\n\nである。\n\n「求めたい相と反対側の線分の長さ」を使うと覚える。\n\n---",
          "questions": [
            {
              "id": "q1",
              "label": "Q1",
              "title": "六方晶のミラー・ブラヴェ指数",
              "markdown": "## 問題文（原文）\n\n:::problem-original\n下図に示した面 A、B、D のミラー・ブラヴェ指数を書きなさい。また、ミラー・ブラヴェ指数\n\n\\[\n(10\\bar11)\n\\]\n\nの面と、\n\n\\[\n[11\\bar20]\n\\]\n\nの方向を図中に示しなさい。\n:::\n\n:::problem-asset\nsrc: /exams/materials-fundamentals-1/2018/page-1.webp\nalt: 材料基礎学1 2018年度 問1の六方晶図\n:::\n\n## 解答図\n\n![問1の解答図](/exams/materials-fundamentals-1/2018/q1-answer.png)\n\n> 画像内ではバー付き指数を読みやすくするため、負の指数を `-1`、`-2` と表記している。\n\n---\n\n## 面A\n\n面Aは、\n\n- \\(x\\) 軸を \\(+1\\) で切る\n- \\(y\\) 軸に平行\n- \\(u\\) 軸を \\(-1\\) で切る\n- \\(z\\) 軸に平行\n\nである。\n\n切片は、\n\n\\[\n(1,\\ \\infty,\\ -1,\\ \\infty)\n\\]\n\nなので、その逆数は、\n\n\\[\n(1,\\ 0,\\ -1,\\ 0).\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nA=(10\\bar10)\n}\n\\]\n\nである。\n\n---\n\n## 面B\n\n面Bは、\n\n- \\(x\\) 軸を \\(+1\\) で切る\n- \\(y\\) 軸を \\(-1\\) で切る\n- \\(u\\) 軸に平行\n- \\(z\\) 軸に平行\n\nである。\n\n切片は、\n\n\\[\n(1,\\ -1,\\ \\infty,\\ \\infty)\n\\]\n\nなので、\n\n### 最終解答\n\n\\[\n\\boxed{\nB=(1\\bar100)\n}\n\\]\n\nである。\n\n全指数の符号を反転した、\n\n\\[\n(\\bar1100)\n\\]\n\nは、面法線を反対向きに取った同じ面方位を表す。\n\n---\n\n## 面D\n\n面Dは六方晶の底面に平行な面であり、\n\n- \\(x,y,u\\) 軸に平行\n- \\(z\\) 軸を \\(+1\\) で切る\n\nしたがって、\n\n### 最終解答\n\n\\[\n\\boxed{\nD=(0001)\n}\n\\]\n\nである。\n\nこれは基底面またはbasal planeと呼ばれる。\n\n---\n\n## 面 \\((10\\bar11)\\) の描き方\n\n指数から各軸の切片を読む。\n\n\\[\n(10\\bar11)\n\\]\n\nなので、\n\n- \\(x\\) 軸：\\(+1\\)\n- \\(y\\) 軸：平行\n- \\(u\\) 軸：\\(-1\\)\n- \\(z\\) 軸：\\(+1\\)\n\nである。\n\nしたがって、図中では、\n\n\\[\n\\boxed{\n+x,\\ -u,\\ +z\n}\n\\]\n\nの3点を通り、\\(y\\) 軸に平行な面として描く。\n\n解答図では青色で示している。\n\n:::why title=\"なぜ y 軸に平行になるの？\"\n第2指数 \\(k\\) が0なので、y軸との切片は \\(1/0=\\infty\\) となる。したがって面はy軸と交わらず、y軸に平行である。\n:::\n\n---\n\n## 方向 \\([11\\bar20]\\) の描き方\n\n方向ベクトルは、\n\n\\[\n\\boldsymbol r\n=\n\\boldsymbol a_x\n+\n\\boldsymbol a_y\n-\n2\\boldsymbol a_u.\n\\]\n\n六方晶底面の3軸には、\n\n\\[\n\\boldsymbol a_x\n+\n\\boldsymbol a_y\n+\n\\boldsymbol a_u\n=0\n\\]\n\nの関係がある。\n\nしたがって、\n\n\\[\n\\boldsymbol a_x+\\boldsymbol a_y\n=\n-\\boldsymbol a_u.\n\\]\n\nよって、\n\n\\[\n\\boldsymbol r\n=\n-\\boldsymbol a_u-2\\boldsymbol a_u\n=\n-3\\boldsymbol a_u.\n\\]\n\n方向では長さは意味を持たないので、\n\n\\[\n\\boxed{\n[11\\bar20]\\text{ は }+u\\text{ 軸と反対方向}\n}\n\\]\n\nである。\n\n解答図では、底面中心から \\(-u\\) の頂点へ向かう赤い矢印で示している。\n\n### 試験答案\n\n\\[\n\\boxed{\nA=(10\\bar10),\\quad\nB=(1\\bar100),\\quad\nD=(0001)\n}\n\\]\n\n\\[\n(10\\bar11):\n\\quad\n+x,\\ -u,\\ +z\n\\text{ を通り、}y\\text{ 軸に平行}\n\\]\n\n\\[\n[11\\bar20]:\n\\quad\n-u\\text{ 方向}\n\\]\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ y 軸に平行になるの？",
                  "markdown": "第2指数 \\(k\\) が0なので、y軸との切片は \\(1/0=\\infty\\) となる。したがって面はy軸と交わらず、y軸に平行である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q2",
              "label": "Q2",
              "title": "fccの結晶構造とすべり系",
              "markdown": "## 問題文（原文）\n\n:::problem-original\nfcc の結晶構造を図示し、fcc のすべり面とすべり方向のミラー指数を書きなさい。また、そうなる理由を説明しなさい。\n:::\n\n## fccの結晶構造\n\nfccはface-centered cubic、面心立方構造である。\n\n立方体の、\n\n- 8個の頂点\n- 6個の面の中心\n\nに原子が配置される。\n\n### 単位胞中の原子数\n\n頂点原子は8個の単位胞で共有されるので、\n\n\\[\n8\\times\\frac18=1.\n\\]\n\n面心原子は2個の単位胞で共有されるので、\n\n\\[\n6\\times\\frac12=3.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n1+3=4\\text{ 原子/単位胞}\n}\n\\]\n\nである。\n\n配位数は、\n\n\\[\n\\boxed{12}\n\\]\n\nである。\n\n## すべり面\n\nfccで最も原子密度が高い面は、\n\n\\[\n\\boxed{\\{111\\}}\n\\]\n\nである。\n\nしたがって、すべり面は、\n\n\\[\n\\boxed{\\{111\\}}\n\\]\n\nとなる。\n\n## すべり方向\n\n\\(\\{111\\}\\) 面内で最も原子が密に並ぶ方向は、\n\n\\[\n\\boxed{\\langle110\\rangle}\n\\]\n\nである。\n\nしたがって、すべり方向は、\n\n\\[\n\\boxed{\\langle110\\rangle}\n\\]\n\nとなる。\n\n完全転位のBurgersベクトルは、\n\n\\[\n\\boxed{\n\\boldsymbol b\n=\n\\frac a2\\langle110\\rangle\n}\n\\]\n\nであり、その大きさは、\n\n\\[\n|\\boldsymbol b|\n=\n\\frac a{\\sqrt2}.\n\\]\n\n### 例\n\n\\((111)\\) 面内には、\n\n\\[\n[\\bar110],\\quad\n[10\\bar1],\\quad\n[01\\bar1]\n\\]\n\nなどの \\(\\langle110\\rangle\\) 方向がある。\n\n方向が面内にあるかは、面法線との内積が0かで確認できる。\n\n例えば、\n\n\\[\n[111]\\cdot[\\bar110]\n=\n-1+1+0\n=0.\n\\]\n\nしたがって、\\([\\bar110]\\) は \\((111)\\) 面内にある。\n\n## すべり系の数\n\n独立な \\(\\{111\\}\\) 面は4面。\n\n各面に独立な \\(\\langle110\\rangle\\) 方向が3方向ある。\n\nしたがって、\n\n\\[\n\\boxed{\n4\\times3=12\\text{ すべり系}\n}\n\\]\n\nである。\n\n## なぜこの面と方向なのか\n\n転位の移動には、原子結合を順番に組み替える必要がある。\n\n- 原子が最も密な面では、面間の凹凸が小さい\n- 原子が最も密な方向では、隣の安定位置までの距離が短い\n- Burgersベクトルが短いほど、転位の弾性エネルギーが小さい\n\n転位のエネルギーは概ね、\n\n\\[\nE_{\\mathrm dislocation}\n\\propto\nGb^2\n\\]\n\nである。\n\nしたがって、最密面 \\(\\{111\\}\\) と最密方向 \\(\\langle110\\rangle\\) の組が最もすべりやすい。\n\n### 最終解答\n\n\\[\n\\boxed{\n\\text{fccのすべり系}\n=\n\\{111\\}\\langle110\\rangle\n}\n\\]\n\nすべり系は12個である。\n\n:::why title=\"すべり方向を [110] ではなく <110> と書くの？\"\nfccには結晶対称性によって等価な複数の110型方向がある。1本だけでなく等価な方向の集合を表すため、山括弧 \\(\\langle110\\rangle\\) を使う。\n:::\n\n### 試験答案\n\nfccは立方体の頂点と各面中心に原子を持つ面心立方構造である。\n\n最密面は、\n\n\\[\n\\{111\\}\n\\]\n\n最密方向は、\n\n\\[\n\\langle110\\rangle\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\{111\\}\\langle110\\rangle\n}\n\\]\n\nがすべり系となる。\n\nこれは原子密度が高く、完全転位のBurgersベクトル\n\n\\[\n\\boldsymbol b=\\frac a2\\langle110\\rangle\n\\]\n\nが短いため、転位が最も移動しやすいからである。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "すべり方向を [110] ではなく <110> と書くの？",
                  "markdown": "fccには結晶対称性によって等価な複数の110型方向がある。1本だけでなく等価な方向の集合を表すため、山括弧 \\(\\langle110\\rangle\\) を使う。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q3",
              "label": "Q3",
              "title": "bccのSchmid因子",
              "markdown": "## 問題文（原文）\n\n:::problem-original\nbcc の\n\n\\[\n[010]\n\\]\n\n方向に100 MPaの引っ張り応力を加えた。\n\n\\[\n(110)\n\\]\n\n面上、\n\n\\[\n[\\bar111]\n\\]\n\n方向のSchmid因子と分解せん断応力を答えなさい。\n:::\n\n## 解法方針\n\nSchmid因子は、\n\n\\[\nm=\\cos\\phi\\cos\\lambda\n\\]\n\nである。\n\n- \\(\\phi\\)：引張軸とすべり面法線の角度\n- \\(\\lambda\\)：引張軸とすべり方向の角度\n\n## 引張軸\n\n\\[\n\\boldsymbol t=[010].\n\\]\n\n## すべり面法線\n\n\\((110)\\) 面の法線方向は、\n\n\\[\n\\boldsymbol n=[110].\n\\]\n\nしたがって、\n\n\\[\n\\cos\\phi\n=\n\\frac{\n[010]\\cdot[110]\n}{\n|[010]||[110]|\n}.\n\\]\n\n内積は、\n\n\\[\n0\\cdot1+1\\cdot1+0\\cdot0=1.\n\\]\n\n大きさは、\n\n\\[\n|[010]|=1\n\\]\n\n\\[\n|[110]|=\\sqrt2.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\cos\\phi=\\frac1{\\sqrt2}\n}\n\\]\n\nである。\n\n## すべり方向\n\n\\[\n\\boldsymbol d=[\\bar111].\n\\]\n\n\\[\n\\cos\\lambda\n=\n\\frac{\n[010]\\cdot[\\bar111]\n}{\n|[010]||[\\bar111]|\n}.\n\\]\n\n内積は、\n\n\\[\n0(-1)+1(1)+0(1)=1.\n\\]\n\n\\[\n|[\\bar111]|=\\sqrt3.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\cos\\lambda=\\frac1{\\sqrt3}\n}\n\\]\n\nである。\n\n### 面内方向であることの確認\n\n\\[\n[110]\\cdot[\\bar111]\n=\n-1+1+0=0.\n\\]\n\nしたがって、指定された方向は確かに \\((110)\\) 面内にある。\n\n## Schmid因子\n\n\\[\nm\n=\n\\frac1{\\sqrt2}\n\\frac1{\\sqrt3}.\n\\]\n\n### 最終解答1\n\n\\[\n\\boxed{\nm=\\frac1{\\sqrt6}\\simeq0.408\n}\n\\]\n\nである。\n\n## 分解せん断応力\n\n\\[\n\\tau_{\\mathrm R}\n=\n\\sigma m.\n\\]\n\n\\[\n\\sigma=100\\,\\mathrm{MPa}\n\\]\n\nなので、\n\n\\[\n\\tau_{\\mathrm R}\n=\n100\n\\times\n\\frac1{\\sqrt6}.\n\\]\n\n### 最終解答2\n\n\\[\n\\boxed{\n\\tau_{\\mathrm R}\n\\simeq40.8\\,\\mathrm{MPa}\n}\n\\]\n\nである。\n\n:::why title=\"引張応力なのに、すべり面にはせん断応力が生じるの？\"\n斜めの面から見ると、引張力には面を垂直に引く成分だけでなく、面に沿ってずらす成分もある。この面内の成分が転位を動かす分解せん断応力である。\n:::\n\n### 試験答案\n\n\\[\n\\cos\\phi\n=\n\\frac{[010]\\cdot[110]}\n{|[010]||[110]|}\n=\n\\frac1{\\sqrt2}\n\\]\n\n\\[\n\\cos\\lambda\n=\n\\frac{[010]\\cdot[\\bar111]}\n{|[010]||[\\bar111]|}\n=\n\\frac1{\\sqrt3}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nm=\\cos\\phi\\cos\\lambda\n=\\frac1{\\sqrt6}\n=0.408\n}\n\\]\n\n\\[\n\\boxed{\n\\tau_{\\mathrm R}\n=\n100m\n=40.8\\,\\mathrm{MPa}\n}\n\\]\n\nとなる。\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "引張応力なのに、すべり面にはせん断応力が生じるの？",
                  "markdown": "斜めの面から見ると、引張力には面を垂直に引く成分だけでなく、面に沿ってずらす成分もある。この面内の成分が転位を動かす分解せん断応力である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q4",
              "label": "Q4",
              "title": "転位の消滅と交差すべり",
              "markdown": "## 問題文（原文）\n\n:::problem-original\n同じすべり面上に符号の異なる、すなわちBurgersベクトルが逆方向の刃状転位が1組存在する場合、最終的にどうなるか答えよ。\n\nまた、交差すべりが刃状転位では生じず、らせん転位では生じる理由を説明しなさい。\n:::\n\n## 符号の異なる刃状転位\n\nBurgersベクトルを、\n\n\\[\n+\\boldsymbol b\n\\]\n\nと、\n\n\\[\n-\\boldsymbol b\n\\]\n\nとする。\n\n符号が異なる転位の応力場は、互いを引き寄せる向きに力を及ぼす。\n\n同じすべり面上にあるため、両者はすべり運動によって近づくことができる。\n\n転位が同じ位置へ到達すると、Burgersベクトルの和は、\n\n\\[\n\\boldsymbol b+(-\\boldsymbol b)=0.\n\\]\n\nしたがって転位線が消える。\n\n### 最終解答\n\n\\[\n\\boxed{\n\\text{互いに引き合って接近し、最終的に対消滅する}\n}\n\\]\n\nその結果、余分な半原子面どうしが打ち消され、局所的には完全な結晶へ戻る。\n\n:::why title=\"同符号の転位ならどうなるの？\"\n同符号の刃状転位は同じ向きの応力場を持ち、同じすべり面上では互いに反発する。異符号の場合だけ、近づいて消滅できる。\n:::\n\n---\n\n## 交差すべり\n\n交差すべりとは、転位が元のすべり面から、別のすべり面へ移る現象である。\n\n## 刃状転位の場合\n\n刃状転位では、\n\n\\[\n\\boldsymbol b\\perp\\boldsymbol l\n\\]\n\nである。\n\nここで、\n\n- \\(\\boldsymbol b\\)：Burgersベクトル\n- \\(\\boldsymbol l\\)：転位線方向\n\nすべり面は、\n\n\\[\n\\boxed{\n\\boldsymbol b\\text{ と }\\boldsymbol l\n\\text{ の両方を含む面}\n}\n\\]\n\nでなければならない。\n\n互いに平行でない2本の方向ベクトルは、1つの平面を一意に決める。\n\nしたがって、刃状転位のすべり面は幾何学的に1つに定まり、別の面へすべることはできない。\n\n別の面へ移るには、原子空孔の拡散を伴う上昇運動、climbが必要になる。\n\n## らせん転位の場合\n\nらせん転位では、\n\n\\[\n\\boldsymbol b\\parallel\\boldsymbol l.\n\\]\n\nすべり面は \\(\\boldsymbol b\\) と転位線を含む必要があるが、両者が同一直線なので、その直線を含む面は複数存在する。\n\nしたがって、十分な分解せん断応力を持つ別のすべり面へ移ることができる。\n\n### 最終解答\n\n\\[\n\\boxed{\n\\begin{aligned}\n\\text{刃状転位：}&\n\\boldsymbol b\\perp\\boldsymbol l\n\\text{ なので、すべり面が一意に定まる}\\\\\n\\text{らせん転位：}&\n\\boldsymbol b\\parallel\\boldsymbol l\n\\text{ なので、同じ転位線を含む複数の面を選べる}\n\\end{aligned}\n}\n\\]\n\nよって交差すべりは、基本的にらせん転位で生じる。\n\n### 試験答案\n\n異符号の刃状転位は互いに引き合い、同じすべり面上を移動して接近する。接触すると、\n\n\\[\n\\boldsymbol b+(-\\boldsymbol b)=0\n\\]\n\nとなるため対消滅する。\n\n刃状転位では \\(\\boldsymbol b\\) と転位線が直交し、この2方向によってすべり面が一意に定まる。\n\nらせん転位では \\(\\boldsymbol b\\) と転位線が平行であり、その直線を含む複数のすべり面を取れるため、交差すべりが可能である。\n\n---",
              "major": "4",
              "why": [
                {
                  "title": "同符号の転位ならどうなるの？",
                  "markdown": "同符号の刃状転位は同じ向きの応力場を持ち、同じすべり面上では互いに反発する。異符号の場合だけ、近づいて消滅できる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q5",
              "label": "Q5",
              "title": "0.3%C炭素鋼の徐冷",
              "markdown": "## 問題文（原文）\n\n:::problem-original\n炭素含有量0.3%の炭素鋼を900℃から徐冷した。\n\n(1) 相と組織変化について述べなさい。\n\n(2) 領域Iに存在する相を答えなさい。また、727℃、A1点直上でのそれぞれの相の量比と炭素濃度を求めなさい。ただし、P点は0.02%、S点は0.77%とする。\n\nFe-C状態図では、点P、S、Gで囲まれる領域が領域Iである。\n:::\n\n:::problem-asset\nsrc: /exams/materials-fundamentals-1/2018/page-2.webp\nalt: 材料基礎学1 2018年度 問5のFe-C状態図\n:::\n\n## 鋼の分類\n\n共析組成は、\n\n\\[\n0.77\\%\\mathrm C\n\\]\n\nである。\n\n今回の鋼は、\n\n\\[\n0.30\\%\\mathrm C<0.77\\%\\mathrm C\n\\]\n\nなので、\n\n\\[\n\\boxed{\\text{亜共析鋼}}\n\\]\n\nである。\n\n---\n\n## Q5-(1) 相と組織の変化\n\n## 900℃\n\n0.3%C鋼では、900℃はA3変態点より高い。\n\nしたがって、\n\n\\[\n\\boxed{\n\\gamma\\text{ 単相}\n}\n\\]\n\nである。\n\n組織名は、\n\n\\[\n\\boxed{\\text{オーステナイト}}\n\\]\n\nである。\n\n## A3線を下回った後\n\n冷却してA3線を横切ると、オーステナイトからフェライトが析出し始める。\n\n相は、\n\n\\[\n\\boxed{\n\\alpha+\\gamma\n}\n\\]\n\nとなる。\n\n- \\(\\alpha\\)：フェライト\n- \\(\\gamma\\)：オーステナイト\n\n組織としては、\n\n\\[\n\\boxed{\n\\text{初析フェライト}\n+\n\\text{オーステナイト}\n}\n\\]\n\nである。\n\nフェライトは炭素をほとんど固溶できないため、析出したフェライトから炭素がオーステナイト側へ排出される。\n\nしたがって、残ったオーステナイトの炭素濃度は、冷却とともに0.77%へ近づく。\n\n:::why title=\"なぜ残ったオーステナイトの炭素濃度が上がるの？\"\nフェライトは炭素の固溶限が小さい。フェライトが析出すると、余った炭素がオーステナイトへ追い出されるため、オーステナイトが炭素濃化する。\n:::\n\n## 727℃、A1点\n\nA1点へ達すると、炭素濃度0.77%となった残留オーステナイトが共析変態を起こす。\n\n\\[\n\\boxed{\n\\gamma\n\\rightarrow\n\\alpha+\\mathrm{Fe}_3\\mathrm C\n}\n\\]\n\nこのフェライトとセメンタイトの層状組織を、\n\n\\[\n\\boxed{\\text{パーライト}}\n\\]\n\nという。\n\n## 727℃以下の最終組織\n\n相は、\n\n\\[\n\\boxed{\n\\alpha+\\mathrm{Fe}_3\\mathrm C\n}\n\\]\n\n組織は、\n\n\\[\n\\boxed{\n\\text{初析フェライト}\n+\n\\text{パーライト}\n}\n\\]\n\nとなる。\n\n### 変化のまとめ\n\n\\[\n\\boxed{\n\\begin{aligned}\n900^\\circ\\mathrm C:\\quad&\n\\gamma\\\\\nA_3\\text{ 以下}:\\quad&\n\\alpha+\\gamma\\\\\nA_1\\text{ 以下}:\\quad&\n\\alpha+\\mathrm{Fe}_3\\mathrm C\n\\end{aligned}\n}\n\\]\n\n組織名では、\n\n\\[\n\\boxed{\n\\text{オーステナイト}\n\\rightarrow\n\\text{初析フェライト+オーステナイト}\n\\rightarrow\n\\text{初析フェライト+パーライト}\n}\n\\]\n\nである。\n\n---\n\n## Q5-(2) A1点直上の相と量比\n\n領域Iは、\n\n\\[\n\\boxed{\n\\alpha+\\gamma\n}\n\\]\n\nの二相領域である。\n\nA1点直上で、\n\n\\[\nC_\\alpha=0.02\\%\n\\]\n\n\\[\nC_\\gamma=0.77\\%\n\\]\n\n\\[\nC_0=0.30\\%\n\\]\n\nである。\n\n### フェライトの質量分率\n\nてこの法則より、\n\n\\[\nW_\\alpha\n=\n\\frac{\nC_\\gamma-C_0\n}{\nC_\\gamma-C_\\alpha\n}.\n\\]\n\n\\[\n=\n\\frac{\n0.77-0.30\n}{\n0.77-0.02\n}.\n\\]\n\n\\[\n=\n\\frac{0.47}{0.75}\n=\n0.6267.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nW_\\alpha\\simeq62.7\\%\n}\n\\]\n\nである。\n\n### オーステナイトの質量分率\n\n\\[\nW_\\gamma\n=\n\\frac{\nC_0-C_\\alpha\n}{\nC_\\gamma-C_\\alpha\n}.\n\\]\n\n\\[\n=\n\\frac{\n0.30-0.02\n}{\n0.77-0.02\n}.\n\\]\n\n\\[\n=\n\\frac{0.28}{0.75}\n=\n0.3733.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nW_\\gamma\\simeq37.3\\%\n}\n\\]\n\nである。\n\n### 炭素濃度\n\n\\[\n\\boxed{\nC_\\alpha=0.02\\%\\mathrm C\n}\n\\]\n\n\\[\n\\boxed{\nC_\\gamma=0.77\\%\\mathrm C\n}\n\\]\n\nである。\n\n### A1変態後の組織割合\n\nA1点直上のオーステナイト37.3%が、A1点でパーライトへ変態する。\n\nしたがって、A1点直下の組織割合は概ね、\n\n\\[\n\\boxed{\n\\text{初析フェライト }62.7\\%\n}\n\\]\n\n\\[\n\\boxed{\n\\text{パーライト }37.3\\%\n}\n\\]\n\nである。\n\n### 参考：最終的な相割合\n\nセメンタイトの炭素濃度を6.67%とすると、全体としてのセメンタイト量は、\n\n\\[\nW_{\\mathrm{Fe_3C}}\n=\n\\frac{\n0.30-0.02\n}{\n6.67-0.02\n}\n\\simeq0.042.\n\\]\n\nしたがって、最終相割合は概ね、\n\n\\[\n\\boxed{\n\\alpha\\simeq95.8\\%,\\qquad\n\\mathrm{Fe}_3\\mathrm C\\simeq4.2\\%\n}\n\\]\n\nである。\n\n組織割合の「初析フェライト+パーライト」と、相割合の「フェライト+セメンタイト」を混同しないこと。\n\n### 試験答案\n\n0.3%C鋼は亜共析鋼である。\n\n900℃では \\(\\gamma\\) 単相。\n\nA3線以下で初析フェライトが析出し、\n\n\\[\n\\alpha+\\gamma\n\\]\n\nとなる。\n\n727℃で残留 \\(\\gamma\\) がパーライトへ共析変態するため、最終組織は初析フェライト+パーライトとなる。\n\nA1点直上では、\n\n\\[\nC_\\alpha=0.02\\%,\\qquad\nC_\\gamma=0.77\\%.\n\\]\n\nてこの法則より、\n\n\\[\n\\boxed{\nW_\\alpha\n=\n\\frac{0.77-0.30}{0.77-0.02}\n=0.627\n}\n\\]\n\n\\[\n\\boxed{\nW_\\gamma\n=\n\\frac{0.30-0.02}{0.77-0.02}\n=0.373\n}\n\\]\n\nである。\n\n---",
              "major": "5",
              "why": [
                {
                  "title": "なぜ残ったオーステナイトの炭素濃度が上がるの？",
                  "markdown": "フェライトは炭素の固溶限が小さい。フェライトが析出すると、余った炭素がオーステナイトへ追い出されるため、オーステナイトが炭素濃化する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q6-1",
              "label": "Q6-(1)",
              "title": "応力拡大係数と破壊じん性",
              "markdown": "## 応力拡大係数\n\nき裂先端の近くでは、応力が、\n\n\\[\n\\sigma_{ij}\n\\simeq\n\\frac{K}{\\sqrt{2\\pi r}}\nf_{ij}(\\theta)\n\\]\n\nの形で大きくなる。\n\n- \\(r\\)：き裂先端からの距離\n- \\(\\theta\\)：き裂先端まわりの角度\n- \\(K\\)：応力拡大係数\n\nモードI、開口型き裂では、\n\n\\[\n\\boxed{\nK_{\\mathrm I}\n=\nY\\sigma\\sqrt{\\pi a}\n}\n\\]\n\nと表される。\n\n- \\(\\sigma\\)：公称応力\n- \\(a\\)：き裂長さ\n- \\(Y\\)：試験片形状やき裂形状による補正係数\n\n単位は、\n\n\\[\n\\boxed{\n\\mathrm{MPa}\\sqrt{\\mathrm m}\n}\n\\]\n\nである。\n\n応力拡大係数は、\n\n\\[\n\\boxed{\n\\text{荷重、き裂寸法、形状によって決まる、き裂先端応力場の強さ}\n}\n\\]\n\nを表す。\n\n## 破壊じん性\n\n応力拡大係数が材料固有の限界値へ達すると、き裂が不安定に進展する。\n\n平面ひずみ条件での限界値を、\n\n\\[\n\\boxed{\nK_{\\mathrm{IC}}\n}\n\\]\n\nと表し、破壊じん性という。\n\n\\[\n\\boxed{\nK_{\\mathrm I}\\ge K_{\\mathrm{IC}}\n}\n\\]\n\nで不安定破壊が始まる。\n\n破壊じん性が高い材料は、き裂が存在しても破壊しにくい。\n\n### 違い\n\n\\[\n\\boxed{\n\\begin{aligned}\nK_{\\mathrm I}:&\n\\text{ 現在の荷重とき裂による状態量}\\\\\nK_{\\mathrm{IC}}:&\n\\text{ 材料のき裂進展抵抗を表す材料特性}\n\\end{aligned}\n}\n\\]\n\n:::why title=\"単純な最大応力だけではき裂破壊を評価できないの？\"\nき裂先端の応力は、き裂長さや形状によって非常に大きく集中する。公称応力が同じでも、き裂が長いほど破壊しやすいため、\\(\\sigma\\sqrt a\\) を含む応力拡大係数で評価する。\n:::\n\n### 試験答案\n\n応力拡大係数 \\(K\\) は、き裂先端近傍の特異応力場の強さを表し、モードIでは、\n\n\\[\nK_{\\mathrm I}=Y\\sigma\\sqrt{\\pi a}\n\\]\n\nである。\n\n破壊じん性 \\(K_{\\mathrm{IC}}\\) は、平面ひずみ条件で不安定き裂進展が開始する限界応力拡大係数であり、材料のき裂に対する抵抗を表す。\n\n---",
              "major": "6",
              "why": [
                {
                  "title": "単純な最大応力だけではき裂破壊を評価できないの？",
                  "markdown": "き裂先端の応力は、き裂長さや形状によって非常に大きく集中する。公称応力が同じでも、き裂が長いほど破壊しやすいため、\\(\\sigma\\sqrt a\\) を含む応力拡大係数で評価する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": true
            },
            {
              "id": "q6-2",
              "label": "Q6-(2)",
              "title": "マルテンサイトが硬い理由",
              "markdown": "マルテンサイトは、オーステナイトを急冷したときに生じる、拡散を伴わない変態組織である。\n\n主な強化要因は次のとおり。\n\n## 1. 炭素の過飽和固溶\n\n急冷では炭素が拡散してセメンタイトを形成する時間がない。\n\nそのため、本来の平衡固溶限を超える炭素が鉄格子中へ閉じ込められる。\n\n侵入型炭素原子が大きな弾性ひずみ場を作り、転位の移動を妨げる。\n\n\\[\n\\boxed{\\text{侵入型固溶強化}}\n\\]\n\nである。\n\n## 2. 体心正方格子、BCTの格子ひずみ\n\n炭素が特定の八面体位置へ入るため、bcc格子の一軸が伸び、body-centered tetragonal、BCT構造となる。\n\n正方晶ひずみが大きいほど、転位の移動に必要な応力が増える。\n\n## 3. 高い転位密度\n\nマルテンサイト変態では大きなせん断変形と体積変化が生じる。\n\n変態ひずみを緩和するため、非常に多くの転位が導入される。\n\n転位同士が絡み合い、他の転位の移動を妨げる。\n\n\\[\n\\boxed{\\text{転位強化}}\n\\]\n\nである。\n\n## 4. 微細なラス・プレート組織\n\nマルテンサイトは、細かいラス状または板状に形成される。\n\nラス境界、ブロック境界、パケット境界が転位運動の障害となる。\n\nHall-Petch型の微細組織強化が働く。\n\n## 5. 双晶・内部欠陥\n\n高炭素マルテンサイトでは変態双晶が形成される場合がある。\n\n双晶境界も転位の移動を妨げる。\n\n## 6. 変態に伴う残留応力\n\n急冷による温度差と変態膨張により、大きな内部応力が残る。\n\nこれは硬さへ寄与する一方で、割れやすさの原因にもなる。\n\n### 最終解答\n\nマルテンサイトが強く硬い主な理由は、\n\n\\[\n\\boxed{\n\\begin{aligned}\n&\\text{炭素の過飽和固溶}\\\\\n&\\text{BCT格子の大きなひずみ}\\\\\n&\\text{高い転位密度}\\\\\n&\\text{微細なラス・プレート組織}\\\\\n&\\text{双晶などの高密度な内部境界}\n\\end{aligned}\n}\n\\]\n\nである。\n\n### 注意\n\nマルテンサイトは非常に硬いが、そのままではじん性が低く、脆い。\n\n実用鋼では焼戻しによって、硬さとじん性のバランスを調整することが多い。\n\n---",
              "major": "6",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q6-3",
              "label": "Q6-(3)",
              "title": "日本刀の材料学的特徴",
              "markdown": "日本刀の性能は、材料特性と形状の両方によって生じる。\n\n## 1. 刃先が硬い\n\n刃先は焼入れによって主にマルテンサイト組織となる。\n\nしたがって、\n\n- 高硬度\n- 高強度\n- 耐摩耗性\n- 刃先が塑性変形しにくい\n\nという特徴を持つ。\n\n鋭い刃先を長く維持できる。\n\n## 2. 棟・心部が比較的軟らかく、じん性が高い\n\n粘土を用いた差し焼入れでは、刃先が速く冷え、棟側は比較的ゆっくり冷える。\n\n棟・心部にはフェライト、パーライト、焼戻し組織など、刃先より軟らかくじん性のある組織が残る。\n\nそのため、衝撃を受けても刀全体が一気に脆性破壊しにくい。\n\n## 3. 硬さとじん性を空間的に分けている\n\n\\[\n\\boxed{\n\\text{硬い刃先}\n+\n\\text{粘り強い内部・棟}\n}\n\\]\n\nという傾斜的な材料設計になっている。\n\n単一の均質材料では両立しにくい、\n\n- 切れ味\n- 耐摩耗性\n- 耐衝撃性\n- 折れにくさ\n\nを同時に得ている。\n\n## 4. 鍛錬と接合構造\n\n折り返し鍛錬によって、\n\n- 組成を均一化する\n- スラグや空隙を細かく分散・圧着する\n- 組織を細かくする\n\n効果が得られる。\n\nまた、硬い鋼と比較的軟らかい鋼を組み合わせる構造により、性能を分担できる。\n\n## 5. 刃の形状と湾曲\n\n鋭い刃角は小さな面積へ力を集中させる。\n\n湾曲した片刃を引くように動かすと、刃が対象物へ接触する位置が連続的に移動し、押し切りだけでなく引き切りが働く。\n\nこれにより、局所的な応力を高めながら切断を進められる。\n\n### 最終解答\n\n日本刀が優れる主な理由は、\n\n\\[\n\\boxed{\n\\text{マルテンサイトによる硬い刃先と、じん性の高い棟・心部を組み合わせた複合的構造}\n}\n\\]\n\nにある。\n\nさらに、鍛錬による欠陥低減と、鋭い刃角・湾曲形状による応力集中と引き切り効果が、切断性能を高める。\n\n:::why title=\"刀全体を最も硬いマルテンサイトにしないの？\"\n硬さを上げるほど、一般にじん性が低下して欠けや折損が起こりやすくなる。刃先だけを硬くし、他の部分へ粘りを持たせることで、切れ味と折れにくさを両立する。\n:::\n\n---",
              "major": "6",
              "why": [
                {
                  "title": "刀全体を最も硬いマルテンサイトにしないの？",
                  "markdown": "硬さを上げるほど、一般にじん性が低下して欠けや折損が起こりやすくなる。刃先だけを硬くし、他の部分へ粘りを持たせることで、切れ味と折れにくさを両立する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q6-4",
              "label": "Q6-(4)",
              "title": "オーステナイト系ステンレス",
              "markdown": "代表例は、\n\n\\[\n\\boxed{\\mathrm{SUS304}}\n\\]\n\nであり、18Cr-8Ni系ステンレスとも呼ばれる。\n\n## 1. 室温でオーステナイト組織\n\nNiなどのオーステナイト安定化元素を添加し、室温でもfcc構造のオーステナイト、\\(\\gamma\\)相を安定化している。\n\n## 2. 優れた耐食性\n\n約18%のCrを含み、表面へ薄く緻密なCr酸化物の不動態皮膜を形成する。\n\nこの皮膜が破れても、酸素があれば再形成される。\n\nそのため、大気、水、各種薬品に対して良好な耐食性を示す。\n\n## 3. 高い延性・じん性・加工性\n\nfcc構造はすべり系が多い。\n\nしたがって、\n\n- 延性が高い\n- 成形加工しやすい\n- 低温でもじん性が高い\n- 明瞭な延性脆性遷移を起こしにくい\n\nという特徴を持つ。\n\n## 4. 通常は非磁性\n\n溶体化処理した安定なオーステナイト状態では、基本的に非磁性である。\n\nただし、強い冷間加工により加工誘起マルテンサイトが生じると、磁性を帯びる場合がある。\n\n## 5. 熱処理だけでは硬化しにくい\n\n通常の焼入れによるマルテンサイト硬化は利用できない。\n\n強度を高めるには、\n\n- 冷間加工\n- 固溶強化\n- 析出硬化型合金での時効処理\n\nなどを使う。\n\n## 6. 溶接性が良い\n\n一般に溶接・加工しやすく、建築、食品設備、化学装置、家庭用品など広く使われる。\n\n## 7. 注意すべき弱点\n\n### 塩化物環境での応力腐食割れ\n\n引張応力と塩化物イオンが共存すると、応力腐食割れを生じる場合がある。\n\n### 孔食・すきま腐食\n\n塩化物によって不動態皮膜が局所的に破れることがある。\n\n### 鋭敏化\n\nおよそ500〜800℃付近で保持されると、粒界へCr炭化物が析出する場合がある。\n\n粒界周辺でCrが不足し、粒界腐食が起こりやすくなる。\n\n低炭素材や安定化鋼、適切な溶体化処理で対策する。\n\n### 最終解答\n\nオーステナイト系ステンレスは、\n\n\\[\n\\boxed{\n\\text{CrとNiにより室温でfccオーステナイトを安定化した、耐食性・延性・じん性・加工性に優れる鋼}\n}\n\\]\n\nである。\n\n通常は非磁性で、低温じん性と溶接性にも優れる。\n\n一方、焼入れ硬化しにくく、塩化物応力腐食割れや鋭敏化へ注意が必要である。\n\n# 年度全体の重要ポイント\n\n- 六方晶の面では \\(h+k+i=0\\)、方向では \\(u+v+t=0\\)。\n- fccのすべり系は \\(\\{111\\}\\langle110\\rangle\\) で、全部で12系。\n- Schmid因子は、引張軸と面法線・すべり方向の方向余弦の積。\n- 異符号の転位は対消滅し、交差すべりは主にらせん転位で起こる。\n- 亜共析鋼の徐冷組織は、初析フェライト+パーライト。\n- 相の割合と組織の割合を混同しない。\n- 応力拡大係数はき裂先端の状態量、破壊じん性は材料の限界値。\n- マルテンサイトの硬さは、炭素過飽和・BCTひずみ・高転位密度・微細組織などによる。\n- 日本刀は硬い刃先とじん性の高い棟・心部によって、切れ味と折れにくさを両立する。\n- オーステナイト系ステンレスは、耐食性・延性・低温じん性に優れる。",
              "major": "6",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            }
          ]
        }
      ]
    },
    {
      "name": "統計熱力学",
      "slug": "statistical-thermodynamics",
      "years": [
        {
          "year": 2026,
          "contentType": "lecture_summary",
          "displayLabel": "2026 授業資料まとめ",
          "teachers": [
            "松本充弘"
          ],
          "status": "completed",
          "sourceFile": "StatPhys2026_00-10.pdf・report2026.pdf・report2026answer.pdf",
          "sourcePages": [],
          "problemAssets": [],
          "localPdfUrl": "",
          "sourceUrl": "",
          "pdfSourceFile": "",
          "introMarkdown": "> [!NOTE]\n> 2026年度の講義ノート第0〜10章、レポート課題、略解を、期末試験対策用にA4約5枚相当へ圧縮したまとめである。定義だけでなく、「どの条件で、何を足し上げ、どの熱力学量へ変換するか」を軸に整理した。\n\n> [!IMPORTANT]\n> このまとめでは、提供された2026年度講義ノートとレポート略解を主な根拠とする。2011・2023年度過去問との対応は、同じサイトに収録された過去問から確認できた範囲で示す。一般的な教科書知識を補う場合は「資料外の補足」と明記する。\n\n## 資料全体を確認して分かったこと\n\n### 1. 授業回・章・テーマの一覧\n\n| 資料 | 主なテーマ | この章の役割 |\n|---|---|---|\n| 第0部 | 授業案内、統計熱力学の目的 | 熱力学と微視的描像を結ぶ科目全体の導入 |\n| 第1章 | 統計学の応用、二項分布、正規分布、Stirling公式 | 巨視的な揺らぎが小さく見える理由を学ぶ |\n| 第2章 | 巨視的状態、微視的状態、多重度 | 「状態を数える」という統計力学の出発点 |\n| 第3章 | エントロピー、温度、熱平衡 | 多重度から熱力学量を定義する |\n| 第4章 | 熱浴、Boltzmann分布、分配関数 | 温度一定の系を計算する道具を作る |\n| 第5章 | Legendre変換、Helmholtz・Gibbs自由エネルギー | 外部条件に合った熱力学関数を選ぶ |\n| 第6章 | 化学ポテンシャル、4統計集団、大分配関数 | 粒子が出入りする系まで扱えるようにする |\n| 第7章 | Fermi粒子、Fermi-Dirac分布、自由電子 | 電子系へ統計力学を応用する |\n| 第8章 | Bose粒子、Bose-Einstein分布、古典極限 | 量子統計同士と古典統計を比較する |\n| 第9章 | フォトン、フォノン、Planck則、Debye模型 | 放射と固体熱容量を量子統計で説明する |\n| 第10章 | バンド理論、半導体、p-n接合、エネルギー変換 | 電子統計を工学的な固体素子へ応用する |\n| レポート | 3次元調和振動子、重力場中の理想気体 | Boltzmann分布と古典分配関数の総合演習 |\n\n### 2. 科目全体の流れ\n\n前半では、まず「1つの巨視的状態を実現する微視的状態が何通りあるか」を数え、多重度 (g) からエントロピー (S) と温度 (T) を導入する。次に、外界とエネルギー・体積・粒子を交換する場合へ条件を広げ、Boltzmann分布、分配関数、自由エネルギー、化学ポテンシャルを導く。後半では、その道具をFermi粒子、Bose粒子、フォトン、フォノン、半導体へ応用する。\n\n### 3. 各テーマ同士のつながり\n\n\\[\n\\boxed{\n\\begin{gathered}\n\\text{確率・状態数}\n\\longrightarrow g(E)\n\\longrightarrow S=k_{\\mathrm B}\\ln g\n\\longrightarrow T,\\\\\n\\text{外部条件}\n\\longrightarrow \\text{統計集団}\n\\longrightarrow Z,Y,\\Xi\n\\longrightarrow F,G,J,\\\\\n\\text{分布関数と状態密度}\n\\longrightarrow \\text{電子・放射・固体・半導体の物性}\n\\end{gathered}\n}\n\\]\n\n特に「状態密度 (g(\\epsilon)) × 平均占有数 (f(\\epsilon)) × 1状態あたりの物理量」を積分する考え方は、第7〜10章を貫く共通手順である。\n\n### 4. 試験対策上の重要範囲\n\n- **最優先**：Boltzmann分布、分配関数、平均エネルギー、自由エネルギー、4統計集団。\n- **最優先**：Fermi-Dirac分布、Bose-Einstein分布、古典極限の条件と比較。\n- **最優先**：レポート2題。途中式を含めて自力で再現できるようにする。\n- **重要**：多重度からエントロピー・温度・熱平衡条件を導く流れ。\n- **重要**：Fermi温度、電子熱容量、Planck則、Debyeの (T^3) 則、半導体キャリアの温度依存性。\n- **発展**：Bose-Einstein凝縮、Langmuir吸着、クラスター展開、半導体素子の詳細。\n\nこの優先度は、講義資料での反復、章末まとめ、演習量、提供されたレポート、および収録済み過去問との重なりから判断した推定であり、2026年度試験の出題を断定するものではない。\n\n### 5. 不足または確認できない箇所\n\n- 2026年度期末試験の正式な出題範囲、持込可否、問題数、選択方式は提供資料から確認できない。\n- 講義案内に記載された高分子物理のゲスト講義資料は、今回のPDF一式には見当たらない。\n- 講義中に口頭で強調された箇所、板書、追加演習、試験に関する発言は確認できない。\n- 図はPDF内に存在するが、このまとめでは全図を転載していない。軸・数値を使う問題には原図の再確認が必要。\n\n### 6. 追加するとよい資料\n\n- 2026年度シラバスと試験案内\n- 高分子物理の配布資料\n- 授業中の板書・先生の発言メモ\n- 今年度の小テストや追加演習\n- より多くの同担当教員の過去問\n- 数値計算問題が出る場合は、授業で使用した計算プログラム\n\n## 最初に覚える一本の流れ\n\n\\[\n\\boxed{\n\\text{微視的状態を数える}\n\\to g(E)\n\\to S=k_{\\mathrm B}\\ln g\n\\to \\text{確率分布}\n\\to \\text{分配関数}\n\\to \\text{熱力学量}\n}\n\\]\n\n統計熱力学の計算は、ほぼ必ず次の順で進む。\n\n- 系の外部条件 (E,T,P,\\mu,N,V) のうち、固定されている量を確認する。\n- 使う統計集団と確率の重みを決める。\n- 微視的状態の和または位相空間積分から分配関数を作る。\n- (ln Z) などを微分し、平均エネルギー・圧力・エントロピー・熱容量を得る。\n- 高温・低温、希薄、粒子数大などの近似条件を最後に確認する。\n\n## 優先順位\n\n1. Boltzmann分布と分配関数から平均値を出せること。\n2. 4つの統計集団と対応する自由エネルギーを区別できること。\n3. Fermi-Dirac、Bose-Einstein、古典極限を比較できること。\n4. レポート2題を途中式から再現できること。\n5. フォトン・フォノン・半導体の代表的な温度依存性を説明できること。",
          "questions": [
            {
              "id": "q1",
              "label": "第1部",
              "title": "確率・多重度・エントロピー",
              "markdown": "## この範囲で学ぶこと\n\n粒子1個ずつの状態は激しく変動しているのに、圧力や温度などの巨視的な量がほぼ一定に見える理由を、確率と状態数から理解する。最終目標は、多重度からエントロピーと温度を定義し、熱平衡と熱の流れる向きを説明できるようになることである。\n\n## 前提知識\n\n- 階乗 (N!) と組合せ ({}_NC_n=N!/[n!(N-n)!])\n- 平均、分散、標準偏差\n- 対数の性質 (ln(ab)=\\ln a+\\ln b)\n- 1変数関数の極大条件：一階微分が0、安定な極大では二階微分が負\n- 偏微分：他の変数を固定して1つの変数だけを変化させる微分\n\n## 重要用語\n\n| 用語 | 定義・簡単な意味 | 何のために使うか | 間違えやすい点 |\n|---|---|---|---|\n| 巨視的状態 | (E,V,N,T,P) など少数の量で指定した状態 | 実験で観測する系の状態を表す | 粒子ごとの情報は含まない |\n| 微視的状態 | 全粒子の位置・運動量や量子状態を指定した状態 | 巨視的状態の背後にある場合の数を数える | 巨視的状態1つに多数対応する |\n| 多重度 (g) | 同じ巨視的条件を満たす微視的状態数 | 状態の出現しやすさを評価する | 確率そのものではない |\n| 揺らぎ | 平均値からの一時的なずれ | 巨視的極限の安定性を評価する | 絶対揺らぎと相対揺らぎを区別する |\n| エントロピー (S) | (S=k_{\\mathrm B}\\ln g) | 多重度を加算可能な熱力学量へ変換する | 単に「乱雑さ」とだけ覚えない |\n| 示量変数 | 系の大きさに比例する量 | (E,V,N,S) などを分類する | 温度・圧力は示強変数 |\n\n## 重要公式の使い分け\n\n| 公式 | 記号・単位 | 条件 | 使う問題 | よくある間違い |\n|---|---|---|---|---|\n| (P_N(n)=\\binom Nn p^nq^{N-n}) | (p,q)：無次元確率 | 独立な二値試行 | 粒子の左右分布、スピン数 | (q=1-p) を忘れる |\n| (ln N!\\simeq N\\ln N-N) | (N)：無次元 | (N\\gg1) | 多重度の近似 | 小さい (N) に無条件で使わない |\n| (S=k_{\\mathrm B}\\ln g) | (S)：J/K、(k_{\\mathrm B})：J/K | 平衡統計力学 | 多重度からエントロピー | (g) に単位がある場合の扱いに注意 |\n| (1/T=(\\partial S/\\partial E)_{N,V}) | (T)：K、(E)：J | (N,V) 固定 | 温度・熱平衡の導出 | 固定する変数を書き落とす |\n\n## 1. 二項分布から正規分布へ\n\n独立な試行を (N) 回行い、成功確率を (p)、失敗確率を (q=1-p) とする。成功回数が (n) である確率は\n\n\\[\nP_N(n)=\\binom{N}{n}p^nq^{N-n}.\n\\]\n\n平均と分散は\n\n\\[\n\\boxed{\\langle n\\rangle=Np},\\qquad\n\\boxed{\\langle(\\Delta n)^2\\rangle=Npq}.\n\\]\n\n(N) が大きいとき、Stirling公式\n\n\\[\n\\boxed{\\ln N!\\simeq N\\ln N-N+\\frac12\\ln(2\\pi N)}\n\\]\n\nを使えば、二項分布は\n\n\\[\nP_N(n)\\simeq\n\\frac{1}{\\sqrt{2\\pi Npq}}\n\\exp\\left[-\\frac{(n-Np)^2}{2Npq}\\right]\n\\]\n\nという正規分布で近似できる。標準偏差は √N に比例するが、相対揺らぎは\n\n\\[\n\\frac{\\sqrt{\\langle(\\Delta n)^2\\rangle}}{\\langle n\\rangle}\n=\\sqrt{\\frac{q}{Np}}\\propto N^{-1/2}\n\\]\n\nなので、巨視的な粒子数では密度がほぼ一定に見える。\n\n## 2. 巨視的状態と微視的状態\n\n- 巨視的状態：(E,V,N,T,P) など少数の熱力学変数で指定する状態。\n- 微視的状態：各粒子の位置・運動量、または量子状態の占有数まで指定した状態。\n- 多重度 (g(E))：同じ巨視的エネルギー (E) を実現する微視的状態の数または密度。\n\n観測されやすい巨視的状態は、「対応する微視的状態が多い状態」である。独立な2系では多重度が掛け算になる。\n\n\\[\ng_{\\mathrm{tot}}(E_1,E_2)=g_1(E_1)g_2(E_2).\n\\]\n\n積より対数の方が扱いやすいため、平衡条件は (ln g) で考える。\n\n## 3. エントロピーと温度\n\nBoltzmannの関係式は\n\n\\[\n\\boxed{S(E)=k_{\\mathrm B}\\ln g(E)},\\qquad\n\\boxed{g(E)=\\exp\\left(\\frac{S}{k_{\\mathrm B}}\\right)}.\n\\]\n\n独立な系では (g=g_1g_2) なので (S=S_1+S_2)。これによりエントロピーの示量性が説明できる。\n\n全エネルギー一定の2系を接触させると、平衡では (g_1(E_1)g_2(E-E_1)) が最大になる。微分して\n\n\\[\n\\frac{\\partial\\ln g_1}{\\partial E_1}\n=\n\\frac{\\partial\\ln g_2}{\\partial E_2}.\n\\]\n\nここから温度を\n\n\\[\n\\boxed{\n\\frac1T=k_{\\mathrm B}\\left(\\frac{\\partial\\ln g}{\\partial E}\\right)_{N,V}\n=\\left(\\frac{\\partial S}{\\partial E}\\right)_{N,V}\n}\n\\]\n\nと定義する。高温系1から低温系2へ (Delta E>0) が移ると\n\n\\[\n\\Delta S_{\\mathrm{tot}}simeq\n\\left(\\frac1{T_2}-\\frac1{T_1}\\right)\\Delta E>0\n\\]\n\nとなる。つまり「熱は高温から低温へ流れる」と「孤立系のエントロピーは増える」は、多重度の大きい状態へ移るという同じ事実の表現である。\n\n:::why title=\"なぜエントロピーは多重度そのものではなく対数なのか\"\n独立な系を合わせると多重度は掛け算になるが、熱力学のエントロピーは足し算できなければならない。対数を取れば \\(\\ln(g_1g_2)=\\ln g_1+\\ln g_2\\) となり、示量性と両立する。\n:::\n\n### 重要ポイント\n\n- 最確状態は (g) または (ln g) を最大にする状態。\n- 巨視的極限では相対揺らぎが (N^{-1/2}) で小さくなる。\n- (S=k_{\\mathrm B}\\ln g) と (1/T=(\\partial S/\\partial E)_{N,V}) は必ず組で覚える。\n\n## 図・グラフの読み方\n\n二項分布または多重度のグラフでは、横軸が粒子数差やエネルギー、縦軸が確率または多重度である。粒子数 (N) を増やすとピークの絶対幅は広がるが、平均に対する相対幅は狭くなる。試験では「グラフのピークが平衡状態を表す理由」「巨視的系で揺らぎが見えにくい理由」が問われやすい。原資料の具体的な軸・数値を使う場合は図を再確認すること。\n\n## 試験重要度\n\n- **重要度A**：巨視的・微視的状態、多重度、(S=k_{\\mathrm B}\\ln g)、温度の定義。後続全章の基礎だから。\n- **重要度A**：2系を接触させたときの多重度最大化。熱平衡条件の導出問題になるから。\n- **重要度B**：二項分布から正規分布への近似。多重度計算と揺らぎの説明に使うから。\n- **重要度C**：歴史的説明や個別の数値例。概念理解には有用だが、中心的な計算道具ではないから。\n\n## 出題パターン\n\n- **用語説明**：「巨視的状態と微視的状態の違い」「多重度とは何か」を例付きで述べる。\n- **導出**：(g_1(E_1)g_2(E-E_1)) を最大化して温度一致を示す。\n- **計算**：二項係数からスピン系や左右に分かれた粒子の多重度を求める。\n- **理由説明**：相対揺らぎが粒子数増加とともに小さくなる理由を述べる。\n- **正誤**：「最もエネルギーが低い状態が常に最も出現しやすい」などを、多重度を考慮して判定する。\n\n## 練習問題（解答なし）\n\n1. 巨視的状態と微視的状態を、箱の中の気体を例に説明せよ。\n2. (N) 個の独立なスピンのうち上向きが (n) 個である多重度を求めよ。\n3. 二項分布の相対標準偏差が (N^{-1/2}) に比例することを示せ。\n4. 接触した2系の全多重度を最大化し、熱平衡で (T_1=T_2) となることを示せ。\n5. 「孤立系のエントロピーは増大する」を多重度の言葉で説明せよ。",
              "major": "1",
              "why": [
                {
                  "title": "なぜエントロピーは多重度そのものではなく対数なのか",
                  "markdown": "独立な系を合わせると多重度は掛け算になるが、熱力学のエントロピーは足し算できなければならない。対数を取れば \\(\\ln(g_1g_2)=\\ln g_1+\\ln g_2\\) となり、示量性と両立する。"
                }
              ],
              "importantPoints": [
                "最確状態は (g) または (ln g) を最大にする状態。",
                "巨視的極限では相対揺らぎが (N^{-1/2}) で小さくなる。",
                "(S=k_{\\mathrm B}\\ln g) と (1/T=(\\partial S/\\partial E)_{N,V}) は必ず組で覚える。",
                "**重要度A**：巨視的・微視的状態、多重度、(S=k_{\\mathrm B}\\ln g)、温度の定義。後続全章の基礎だから。",
                "**重要度A**：2系を接触させたときの多重度最大化。熱平衡条件の導出問題になるから。",
                "**重要度B**：二項分布から正規分布への近似。多重度計算と揺らぎの説明に使うから。",
                "**重要度C**：歴史的説明や個別の数値例。概念理解には有用だが、中心的な計算道具ではないから。",
                "**用語説明**：「巨視的状態と微視的状態の違い」「多重度とは何か」を例付きで述べる。",
                "**導出**：(g_1(E_1)g_2(E-E_1)) を最大化して温度一致を示す。",
                "**計算**：二項係数からスピン系や左右に分かれた粒子の多重度を求める。",
                "**理由説明**：相対揺らぎが粒子数増加とともに小さくなる理由を述べる。",
                "**正誤**：「最もエネルギーが低い状態が常に最も出現しやすい」などを、多重度を考慮して判定する。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2",
              "label": "第2部",
              "title": "Boltzmann分布・分配関数・古典極限",
              "markdown": "## この範囲で学ぶこと\n\n温度一定の熱浴に接した系について、各状態がどの確率で現れるかを求める。分配関数 (Z) を計算すれば、平均エネルギー、自由エネルギー、圧力、熱容量などをまとめて求められることを理解する。\n\n## 前提知識\n\n- 指数関数と対数の微分\n- Gaussian積分と変数分離\n- 量子力学のエネルギー固有値という考え方\n- Hamiltonian (H)：系の全エネルギーを位置と運動量で表した関数\n\n## 重要用語\n\n| 用語 | 定義・意味 | 用途 | 間違えやすい点 |\n|---|---|---|---|\n| 熱浴 | エネルギーを交換しても温度がほぼ変わらない大きな系 | 温度一定の条件を作る | 小さい注目系と区別する |\n| Boltzmann因子 | (e^{-E/(k_{\\mathrm B}T)}) | 高エネルギー状態の確率を重み付けする | 多重度 (g(E)) も必要な場合がある |\n| 分配関数 (Z) | 全状態のBoltzmann重みの和 | 確率の規格化と熱力学量の計算 | 状態を漏れなく数える |\n| 位相空間 | 位置と運動量を座標とする空間 | 古典系の全状態を積分する | (h^{3N}) による無次元化が必要 |\n| 古典極限 | 量子統計の違いを無視できる希薄・高温極限 | Maxwell-Boltzmann統計を使う | 単に「温度が高い」だけでは不十分 |\n\n## 重要公式の使い分け\n\n| 公式 | 条件 | 何を求めるか | よくある間違い |\n|---|---|---|---|\n| (p_i=e^{-\\beta E_i}/Z) | 正準集団 | 微視的状態 (i) の確率 | エネルギー準位の縮退を忘れる |\n| (U=-\\partial_\\beta\\ln Z) | (V,N) 固定 | 平均エネルギー | (Z) を直接微分する |\n| (F=-k_{\\mathrm B}T\\ln Z) | 正準集団 | Helmholtz自由エネルギー | 負号を落とす |\n| (C_V=\\mathrm{Var}(E)/(k_{\\mathrm B}T^2)) | 正準集団 | 熱容量・エネルギー揺らぎ | 分母の (T^2) を落とす |\n| (Z_N=(N!h^{3N})^{-1}\\int d\\Gamma e^{-\\beta H}) | 同種古典粒子 | 古典分配関数 | (N!)、(h^{3N}) を忘れる |\n| 1つの2次項あたり (k_{\\mathrm B}T/2) | 古典・2次形式 | 等分配則 | 低温量子系へ適用する |\n\n## 1. 熱浴と接した系\n\n温度 (T) の非常に大きな熱浴と接した小さい系を考える。小系が微視的状態 (i)、エネルギー (E_i) を取る確率は\n\n\\[\n\\boxed{p_i=\\frac{e^{-\\beta E_i}}{Z}},\\qquad\n\\beta\\equiv\\frac1{k_{\\mathrm B}T},\n\\]\n\n\\[\n\\boxed{Z=\\sum_i e^{-\\beta E_i}\n=\\sum_E g(E)e^{-\\beta E}}.\n\\]\n\n(e^{-\\beta E}) がBoltzmann因子、(Z) が正準分配関数である。連続状態なら和を積分に置き換える。\n\n## 2. 分配関数から得られる量\n\n\\[\n\\boxed{U=\\langle E\\rangle=-\\frac{\\partial\\ln Z}{\\partial\\beta}\n=k_{\\mathrm B}T^2\\frac{\\partial\\ln Z}{\\partial T}}\n\\]\n\n\\[\n\\boxed{F=-k_{\\mathrm B}T\\ln Z},\\qquad\n\\boxed{S=-\\left(\\frac{\\partial F}{\\partial T}\\right)_{V,N}}\n\\]\n\n\\[\n\\boxed{P=-\\left(\\frac{\\partial F}{\\partial V}\\right)_{T,N}\n=k_{\\mathrm B}T\\left(\\frac{\\partial\\ln Z}{\\partial V}\\right)_{T,N}}\n\\]\n\n熱容量とエネルギー揺らぎは\n\n\\[\n\\boxed{C_V=\\left(\\frac{\\partial U}{\\partial T}\\right)_V\n=\\frac{\\langle E^2\\rangle-\\langle E\\rangle^2}{k_{\\mathrm B}T^2}}.\n\\]\n\n熱容量が正なら、正準集団のエネルギー揺らぎも正である。\n\n## 3. エネルギー等分配則\n\n古典系でHamiltonianに独立な2次項 (a x^2) が含まれると、その項の平均エネルギーは\n\n\\[\n\\boxed{\\langle ax^2\\rangle=\\frac12k_{\\mathrm B}T}.\n\\]\n\n3次元自由粒子では運動量の3つの2次項から\n\n\\[\n\\langle K\\rangle=\\frac32k_{\\mathrm B}T.\n\\]\n\n3次元等方調和振動子\n\n\\[\nH=\\frac{p_x^2+p_y^2+p_z^2}{2m}+\\frac c2(x^2+y^2+z^2)\n\\]\n\nには6個の2次項があるため\n\n\\[\n\\boxed{\\langle K\\rangle=\\frac32k_{\\mathrm B}T},\\quad\n\\boxed{\\langle U\\rangle=\\frac32k_{\\mathrm B}T},\\quad\n\\boxed{\\langle H\\rangle=3k_{\\mathrm B}T}.\n\\]\n\n## 4. 古典理想気体の分配関数\n\n同種粒子 (N) 個では、粒子交換の重複を除く (N!) と、位相空間を無次元化する (h^{3N}) が必要である。\n\n\\[\n\\boxed{\nZ_N=\\frac1{N!h^{3N}}\n\\int d^{3N}r\\,d^{3N}p\\,e^{-\\beta H}\n}\n\\]\n\n相互作用のない単原子理想気体なら\n\n\\[\n\\boxed{\nZ_N=\\frac1{N!}\n\\left[\\frac{V}{\\lambda_T^3}\\right]^N},\\qquad\n\\lambda_T=\\frac{h}{\\sqrt{2\\pi mk_{\\mathrm B}T}}.\n\\]\n\n古典極限の目安は\n\n\\[\n\\boxed{n\\lambda_T^3\\ll1}\n\\]\n\nであり、「1つの量子状態の平均占有数が十分小さい」ことを意味する。\n\n## 5. 量子調和振動子\n\n(E_n=(n+1/2)\\hbar\\omega) なので\n\n\\[\nZ=\\sum_{n=0}^{\\infty}e^{-\\beta\\hbar\\omega(n+1/2)}\n=\\frac{e^{-\\beta\\hbar\\omega/2}}{1-e^{-\\beta\\hbar\\omega}}.\n\\]\n\n\\[\n\\boxed{U=\\frac{\\hbar\\omega}{2}\n\\coth\\left(\\frac{\\hbar\\omega}{2k_{\\mathrm B}T}\\right)}.\n\\]\n\n高温 (k_{\\mathrm B}T\\gg\\hbar\\omega) では (U\\to k_{\\mathrm B}T)、(C_V\\to k_{\\mathrm B}) となり、古典等分配則へ戻る。低温では励起が凍結し、熱容量が小さくなる。\n\n### 重要ポイント\n\n- (Z) は「許される全状態のBoltzmann重みの和」。\n- 平均エネルギーは (-\\partial_\\beta\\ln Z)、自由エネルギーは (-k_{\\mathrm B}T\\ln Z)。\n- 等分配則を使う前に、古典極限かつHamiltonianが2次形式かを確認する。\n\n## 図・グラフの読み方\n\n量子調和振動子のグラフでは、横軸が温度、縦軸が平均エネルギーまたは熱容量である。低温では励起準位へ上がれず熱容量が小さい。高温では準位間隔が相対的に小さく見え、古典値 (C_V=k_{\\mathrm B}) に近づく。グラフ問題では、変化が起きる温度の目安 (k_{\\mathrm B}T\\sim\\hbar\\omega) を示す。\n\n## 試験重要度\n\n- **重要度A**：Boltzmann分布、(Z)、(U=-\\partial_\\beta\\ln Z)、(F=-k_{\\mathrm B}T\\ln Z)。計算問題の中心だから。\n- **重要度A**：等分配則と3次元調和振動子。レポートで直接扱われているから。\n- **重要度A**：古典理想気体の位相空間積分。重力場問題の基礎だから。\n- **重要度B**：量子調和振動子と高温極限。2011・2023過去問との対応が確認できるから。\n\n## 出題パターン\n\n- **穴埋め**：(Z,F,U,C_V) の関係式を完成させる。\n- **計算**：与えられた離散準位から (Z) と平均エネルギーを求める。\n- **導出**：Gaussian積分から等分配則を示す。\n- **比較**：古典調和振動子と量子調和振動子の低温・高温挙動を説明する。\n- **応用**：外場 (U(z)) を含む位相空間積分から密度や熱容量を求める。\n\n## 練習問題（解答なし）\n\n1. エネルギー (0,\\epsilon) の2準位系について (Z) と各状態の確率を求めよ。\n2. (U=-\\partial_\\beta\\ln Z) を確率平均の定義から導け。\n3. 1次元古典調和振動子の平均運動・ポテンシャルエネルギーを求めよ。\n4. 量子調和振動子の分配関数を等比級数から求め、高温極限を調べよ。\n5. 古典理想気体の分配関数に (1/N!) と (1/h^{3N}) が必要な理由を説明せよ。",
              "major": "2",
              "why": [],
              "importantPoints": [
                "(Z) は「許される全状態のBoltzmann重みの和」。",
                "平均エネルギーは (-\\partial_\\beta\\ln Z)、自由エネルギーは (-k_{\\mathrm B}T\\ln Z)。",
                "等分配則を使う前に、古典極限かつHamiltonianが2次形式かを確認する。",
                "**重要度A**：Boltzmann分布、(Z)、(U=-\\partial_\\beta\\ln Z)、(F=-k_{\\mathrm B}T\\ln Z)。計算問題の中心だから。",
                "**重要度A**：等分配則と3次元調和振動子。レポートで直接扱われているから。",
                "**重要度A**：古典理想気体の位相空間積分。重力場問題の基礎だから。",
                "**重要度B**：量子調和振動子と高温極限。2011・2023過去問との対応が確認できるから。",
                "**穴埋め**：(Z,F,U,C_V) の関係式を完成させる。",
                "**計算**：与えられた離散準位から (Z) と平均エネルギーを求める。",
                "**導出**：Gaussian積分から等分配則を示す。",
                "**比較**：古典調和振動子と量子調和振動子の低温・高温挙動を説明する。",
                "**応用**：外場 (U(z)) を含む位相空間積分から密度や熱容量を求める。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3",
              "label": "第3部",
              "title": "統計集団・自由エネルギー・化学ポテンシャル",
              "markdown": "## この範囲で学ぶこと\n\n実験で固定される量に応じて、使う統計集団と自由エネルギーを選び分ける。エネルギーだけでなく、体積や粒子数も外界と交換できる場合の確率分布を理解し、化学ポテンシャルと大分配関数を使えるようにする。\n\n## 前提知識\n\n- 熱力学第一法則と基本式 (dE=TdS-PdV+\\mu dN)\n- 全微分と偏微分\n- Legendre変換：独立変数を共役な別の変数へ取り替える操作\n- 共役変数 (E\\leftrightarrow T)、(V\\leftrightarrow P)、(N\\leftrightarrow\\mu)\n\n## 重要用語\n\n| 用語 | 定義・意味 | 何のために使うか | 間違えやすい点 |\n|---|---|---|---|\n| 統計集団 | 同じ巨視的条件を満たす微視的状態の集合 | 外部条件別に確率を整理する | 現実の多数の系が必要という意味ではない |\n| 自然変数 | 熱力学関数を最も自然に表す独立変数 | 微分から物理量を得る | (F(T,V,N)) など引数を確認する |\n| 化学ポテンシャル (μ) | 粒子を1個増やすときの自由エネルギー変化 | 粒子交換・相平衡を扱う | 単位は1粒子表現ならJ |\n| 大正準集団 | (T,V,\\mu) 一定の統計集団 | 粒子数が変動する系を扱う | (N) は固定されず平均値を求める |\n| グランドポテンシャル (J) | (J=F-\\mu N) | 大正準集団に対応する熱力学関数 | 一様系では (J=-PV) |\n\n## 重要公式の使い分け\n\n| 外部条件 | 重み・分配関数 | 熱力学関数 | 使用例 |\n|---|---|---|---|\n| (N,V,E) | 多重度 (g(E)) | (S=k_{\\mathrm B}\\ln g) | 完全な孤立系 |\n| (N,V,T) | (e^{-\\beta E})、(Z) | (F=-k_{\\mathrm B}T\\ln Z) | 熱浴に接した固体・気体 |\n| (N,P,T) | (e^{-\\beta(E+PV)})、(Y) | (G=-k_{\\mathrm B}T\\ln Y) | 定温定圧過程 |\n| (μ,V,T) | (e^{-\\beta(E-\\mu N)})、(Ξ) | (J=-k_{\\mathrm B}T\\ln\\Xi) | 吸着、量子理想気体 |\n\n記号の単位は、(E,F,G,J,\\mu N) がJ、(S) がJ/K、(T) がK、(P) がPa、(V) がm³である。指数関数の中身は必ず無次元になる。\n\n## 1. 4つの統計集団\n\n| 外部条件 | 統計集団 | 状態の重み | 規格化因子 | 対応する熱力学関数 |\n|---|---|---|---|---|\n| (N,V,E) | 小正準 | (g(E)) | 多重度 (g) | (S=k_{\\mathrm B}\\ln g) |\n| (N,V,T) | 正準 | (g(E)e^{-\\beta E}) | (Z) | (F=-k_{\\mathrm B}T\\ln Z) |\n| (N,P,T) | (T-P) | (g(E,V)e^{-\\beta(E+PV)}) | (Y) | (G=-k_{\\mathrm B}T\\ln Y) |\n| (μ,V,T) | 大正準 | (g(N,E)e^{-\\beta(E-\\mu N)}) | (Ξ) | (J=-k_{\\mathrm B}T\\ln\\Xi) |\n\n> [!IMPORTANT]\n> (T-P) 集団の指数は (-\\beta(E+PV))、大正準集団は (-\\beta(E-\\mu N))。(PV) と (μN) の符号を混同しやすい。\n\n## 2. Legendre変換と自由エネルギー\n\n熱力学の基本式は\n\n\\[\n\\boxed{dE=TdS-PdV+\\mu dN}.\n\\]\n\n自然変数を変えるために\n\n\\[\nF=E-TS,\\qquad G=E-TS+PV,\\qquad J=F-\\mu N\n\\]\n\nを定義する。微分形は\n\n\\[\ndF=-S\\,dT-P\\,dV+\\mu\\,dN,\n\\]\n\n\\[\ndG=-S\\,dT+V\\,dP+\\mu\\,dN,\n\\]\n\n\\[\ndJ=-S\\,dT-P\\,dV-N\\,d\\mu.\n\\]\n\nよって\n\n\\[\nS=-\\left(\\frac{\\partial F}{\\partial T}\\right)_{V,N},\\quad\nP=-\\left(\\frac{\\partial F}{\\partial V}\\right)_{T,N},\\quad\n\\mu=\\left(\\frac{\\partial F}{\\partial N}\\right)_{T,V}.\n\\]\n\n一様な巨視的系では (G=\\mu N)、グランドポテンシャルは (J=-PV) となる。\n\n## 3. 大正準集団\n\n粒子溜・熱浴と接し、(T,V,\\mu) が一定の系では\n\n\\[\n\\boxed{\nP(N,i)=\\frac{e^{-\\beta(E_{N,i}-\\mu N)}}{\\Xi}},\n\\]\n\n\\[\n\\boxed{\n\\Xi=\\sum_N e^{\\beta\\mu N}Z_N}.\n\\]\n\n平均粒子数は\n\n\\[\n\\boxed{\n\\langle N\\rangle\n=\\frac1\\beta\\frac{\\partial\\ln\\Xi}{\\partial\\mu}}.\n\\]\n\n## 4. Langmuir吸着\n\n吸着サイトが (M) 個あり、各サイトに最大1分子、吸着エネルギーが (-\\epsilon) のとき\n\n\\[\n\\Xi=\\left[1+e^{\\beta(\\mu+\\epsilon)}\\right]^M,\n\\]\n\n\\[\n\\boxed{\n\\frac{\\langle N\\rangle}{M}\n=\\frac{e^{\\beta(\\mu+\\epsilon)}}{1+e^{\\beta(\\mu+\\epsilon)}}}.\n\\]\n\n理想気体の (μ-μ_0=k_{\\mathrm B}T\\ln(P/P_0)) を代入すると、被覆率は圧力とともに0から1へ飽和する。これはLangmuir吸着等温線である。\n\n## 5. 解法の選び方\n\n- 「孤立・(E)一定」なら多重度最大化。\n- 「熱浴・(T)一定」なら (Z,F)。\n- 「温度と圧力一定」なら (Y,G)。\n- 「粒子が出入り・(μ)一定」なら (Ξ,J)。\n\n:::why title=\"自由エネルギーが何種類も必要な理由\"\n実験で固定しやすい外部条件が異なるからである。固定したい自然変数に合わせてLegendre変換すると、平衡条件と微分公式を最も簡単に書ける。\n:::\n\n### 重要ポイント\n\n- 統計集団は外部条件から選ぶ。\n- 分配関数の対数と自由エネルギーが対応する。\n- 共役な組は (E\\leftrightarrow T)、(V\\leftrightarrow P)、(N\\leftrightarrow\\mu)。\n\n## 図・グラフの読み方\n\nLangmuir吸着等温線では、横軸が気体圧力 (P)、縦軸が被覆率 (θ=\\langle N\\rangle/M)。低圧では (θ\\propto P)、高圧では全サイトが埋まり (θ\\to1) へ飽和する。温度や吸着エネルギーを変えると立ち上がり位置が変わる。試験では低圧・高圧極限と飽和理由を説明できるようにする。\n\n## 試験重要度\n\n- **重要度A**：4統計集団の固定条件、重み、分配関数、熱力学関数の対応。章6の総まとめ表として強調されているから。\n- **重要度A**：(dE,dF,dG,dJ) と自然変数。偏微分公式の符号を決めるから。\n- **重要度A**：大正準分布と (Ξ)。Fermi・Bose分布の導出に直結するから。\n- **重要度B**：Langmuir吸着。大正準集団の典型的な計算例だから。\n- **重要度C**：多層吸着や一般的な積分変換。講義上は発展的話題だから。\n\n## 出題パターン\n\n- **対応問題**：与えられた固定条件から統計集団と自由エネルギーを選ぶ。\n- **穴埋め**：(F,G,J) の定義、微分形、分配関数との関係を埋める。\n- **導出**：熱浴・粒子溜の多重度展開から (e^{-\\beta(E-\\mu N)}) を得る。\n- **計算**：(Ξ) を (μ) で微分して平均粒子数を求める。\n- **グラフ説明**：Langmuir吸着等温線の低圧・高圧極限を説明する。\n\n## 練習問題（解答なし）\n\n1. (F,G,J) の自然変数をそれぞれ答え、微分形を導け。\n2. 定温定圧の系で、なぜ指数が (e^{-\\beta(E+PV)}) になるか説明せよ。\n3. 大正準集団の確率と大分配関数を書き、平均粒子数の式を導け。\n4. 1サイト吸着モデルの (Ξ) と平均占有数を求めよ。\n5. 4つの統計集団を、固定条件・分配関数・熱力学関数の3項目で比較せよ。",
              "major": "3",
              "why": [
                {
                  "title": "自由エネルギーが何種類も必要な理由",
                  "markdown": "実験で固定しやすい外部条件が異なるからである。固定したい自然変数に合わせてLegendre変換すると、平衡条件と微分公式を最も簡単に書ける。"
                }
              ],
              "importantPoints": [
                "統計集団は外部条件から選ぶ。",
                "分配関数の対数と自由エネルギーが対応する。",
                "共役な組は (E\\leftrightarrow T)、(V\\leftrightarrow P)、(N\\leftrightarrow\\mu)。",
                "**重要度A**：4統計集団の固定条件、重み、分配関数、熱力学関数の対応。章6の総まとめ表として強調されているから。",
                "**重要度A**：(dE,dF,dG,dJ) と自然変数。偏微分公式の符号を決めるから。",
                "**重要度A**：大正準分布と (Ξ)。Fermi・Bose分布の導出に直結するから。",
                "**重要度B**：Langmuir吸着。大正準集団の典型的な計算例だから。",
                "**重要度C**：多層吸着や一般的な積分変換。講義上は発展的話題だから。",
                "**対応問題**：与えられた固定条件から統計集団と自由エネルギーを選ぶ。",
                "**穴埋め**：(F,G,J) の定義、微分形、分配関数との関係を埋める。",
                "**導出**：熱浴・粒子溜の多重度展開から (e^{-\\beta(E-\\mu N)}) を得る。",
                "**計算**：(Ξ) を (μ) で微分して平均粒子数を求める。",
                "**グラフ説明**：Langmuir吸着等温線の低圧・高圧極限を説明する。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q4",
              "label": "第4部",
              "title": "Fermi粒子・Bose粒子・フォトン・フォノン",
              "markdown": "## この範囲で学ぶこと\n\n量子力学的に区別できない粒子には2種類の統計があり、その違いが電子の熱容量、Bose凝縮、熱放射、固体熱容量として現れることを学ぶ。分布関数を暗記するだけでなく、状態密度と組み合わせて巨視的物理量を求める手順を身につける。\n\n## 前提知識\n\n- 同種粒子は粒子番号を交換しても物理的に区別できないこと\n- エネルギー固有状態と占有数 (n_k)\n- 状態密度 (g(\\epsilon))：単位エネルギー幅に存在する1粒子状態数\n- 積分による総和 (∑_k\\to\\int g(\\epsilon)d\\epsilon)\n- 低温・高温極限で指数関数を近似する考え方\n\n## 重要用語\n\n| 用語 | 定義・意味 | 用途 | 間違えやすい点 |\n|---|---|---|---|\n| Fermi粒子 | 交換で波動関数の符号が反転する粒子 | 電子・陽子などを扱う | 1状態の占有数は0または1 |\n| Bose粒子 | 交換で波動関数が不変な粒子 | フォトン・フォノンなどを扱う | 同一状態へ多数入れる |\n| Pauli排他律 | 同じ1粒子状態を複数Fermi粒子が占有できない | 電子の準位充填を決める | エネルギーだけでなく全量子数が同じ状態を指す |\n| Fermiエネルギー | (T=0) で占有された最高エネルギー | 金属電子の尺度 | 平均エネルギーそのものではない |\n| Fermi温度 | (T_F=\\epsilon_F/k_{\\mathrm B}) | 量子縮退の強さを判断する | 実際の電子温度ではない |\n| フォトン・フォノン | 電磁場・格子振動の量子 | 放射・固体熱容量を粒子として扱う | 粒子数非保存なので (μ=0) |\n\n## 重要公式の使い分け\n\n| 公式 | 条件・記号 | 使う問題 | よくある間違い |\n|---|---|---|---|\n| (f_{\\mathrm{FD}}=[e^{\\beta(\\epsilon-\\mu)}+1]^{-1}) | Fermi粒子 | 電子の占有、金属、半導体 | 分母を (-1) にしない |\n| (f_{\\mathrm{BE}}=[e^{\\beta(\\epsilon-\\mu)}-1]^{-1}) | Bose粒子 | Bose気体、フォトン、フォノン | (μ) の許容範囲に注意 |\n| (f_{\\mathrm{MB}}\\simeq e^{-\\beta(\\epsilon-\\mu)}) | 占有数 (≪1) | 希薄・高温の古典極限 | FD・BEとの差を無条件で消さない |\n| (ε_F=\\hbar^2(3\\pi^2n)^{2/3}/(2m)) | 3次元自由電子、スピン縮退2 | Fermi温度の計算 | (h) と (ħ) を混同する |\n| Debye熱容量積分 | 音響分散、切断周波数 (ω_D) | 固体熱容量 | 高温・低温の極限を逆にしない |\n\n物理量の総和は一般に\n\n\\[\n\\boxed{\nA=\\int_0^\\infty\ng(\\epsilon)f(\\epsilon)a(\\epsilon)\\,d\\epsilon\n}\n\\]\n\nと書ける。(g) は状態密度、(f) は平均占有数、(a) は1粒子状態が持つ物理量である。\n\n## 1. Fermi粒子とBose粒子\n\n同種粒子交換に対して、Fermi粒子の波動関数は反対称、Bose粒子は対称である。\n\n- Fermi粒子：各1粒子状態の占有数は (n_k=0,1)。Pauliの排他律に従う。\n- Bose粒子：(n_k=0,1,2,\\ldots)。同一状態へ多数入れる。\n\n平均占有数は\n\n\\[\n\\boxed{f_{\\mathrm{FD}}(\\epsilon)=\n\\frac1{e^{(\\epsilon-\\mu)/(k_{\\mathrm B}T)}+1}}\n\\]\n\n\\[\n\\boxed{f_{\\mathrm{BE}}(\\epsilon)=\n\\frac1{e^{(\\epsilon-\\mu)/(k_{\\mathrm B}T)}-1}}.\n\\]\n\n占有数が十分小さい (e^{(\\epsilon-\\mu)/(k_{\\mathrm B}T)}\\gg1) では、両者とも\n\n\\[\n\\boxed{f_{\\mathrm{MB}}(\\epsilon)\\simeq e^{-(\\epsilon-\\mu)/(k_{\\mathrm B}T)}}\n\\]\n\nというMaxwell-Boltzmann型の古典極限になる。\n\n## 2. 自由電子気体\n\n3次元自由粒子の状態密度は\n\n\\[\n\\boxed{g(\\epsilon)\\propto V\\sqrt{\\epsilon}}.\n\\]\n\n(T=0) では低エネルギー準位からFermiエネルギー (epsilon_{\\mathrm F}) まで詰まる。\n\n\\[\n\\boxed{\n\\epsilon_{\\mathrm F}=\\frac{\\hbar^2}{2m}(3\\pi^2n)^{2/3}},\\qquad\n\\boxed{T_{\\mathrm F}=\\frac{\\epsilon_{\\mathrm F}}{k_{\\mathrm B}}}.\n\\]\n\n金属では通常 (T\\ll T_{\\mathrm F})。熱励起されるのはFermi準位近傍の幅 (\\sim k_{\\mathrm B}T) の電子だけなので、電子熱容量は古典値より小さく\n\n\\[\n\\boxed{C_{V,e}\\propto NT/T_{\\mathrm F}}\n\\]\n\nと温度に比例する。正確な数係数は近似法に依存するため、答案では授業で指定された式を用いる。\n\n## 3. Bose-Einstein凝縮\n\nBose粒子では低温・高密度になると励起状態だけでは全粒子を収容できず、基底状態に巨視的粒子数が集まる。これがBose-Einstein凝縮である。化学ポテンシャルは基底エネルギーを0とした場合 (μ\\le0) で、凝縮点に近づくと (μ\\to0)。\n\n## 4. フォトン\n\nフォトンは粒子数が保存されないBose粒子なので\n\n\\[\n\\boxed{\\mu=0},\\qquad\n\\boxed{\\bar n(\\omega)=\\frac1{e^{\\hbar\\omega/(k_{\\mathrm B}T)}-1}}.\n\\]\n\n電磁波の状態密度 (g(\\omega)\\propto V\\omega^2/c^3) と掛けるとPlanckの放射則が得られる。全周波数で積分すると\n\n\\[\n\\boxed{u(T)\\propto T^4},\\qquad\n\\boxed{j=\\sigma T^4}\n\\]\n\nというStefan-Boltzmann則になる。試験では「分布関数だけ」ではなく「1量子のエネルギー (hbar\\omega)」「状態密度」「平均占有数」の3つを掛ける。\n\n## 5. フォノンと固体熱容量\n\nフォノンも粒子数非保存のBose粒子で (μ=0)。\n\n- Einsteinモデル：全振動子が同じ角振動数。低温で励起が凍結し、高温で (C_V\\to3Nk_{\\mathrm B})。\n- Debyeモデル：音響分散 (ω=ck)、状態密度 (g(\\omega)\\propto\\omega^2)、最大角振動数 (ω_D) を導入する。\n\nDebye温度 (Θ_D=hbar\\omega_D/k_{\\mathrm B}) を使うと\n\n\\[\nC_V=9Nk_{\\mathrm B}\\left(\\frac{T}{\\Theta_D}\\right)^3\n\\int_0^{\\Theta_D/T}\\frac{x^4e^x}{(e^x-1)^2}\\,dx.\n\\]\n\n極限は必須である。\n\n\\[\n\\boxed{T\\gg\\Theta_D:\\ C_V\\to3Nk_{\\mathrm B}}\n\\]\n\n\\[\n\\boxed{T\\ll\\Theta_D:\\ C_V\\simeq\n\\frac{12\\pi^4}{5}Nk_{\\mathrm B}\n\\left(\\frac{T}{\\Theta_D}\\right)^3}.\n\\]\n\n### 比較まとめ\n\n| 対象 | 統計 | 化学ポテンシャル | 低温で重要な結果 |\n|---|---|---|---|\n| 金属中の電子 | Fermi-Dirac | (\\mu\\simeq\\epsilon_F) | (C_{V,e}\\propto T) |\n| Bose気体 | Bose-Einstein | (μ\\to0) | Bose凝縮 |\n| フォトン | Bose-Einstein | (μ=0) | 放射エネルギー (∝T^4) |\n| フォノン | Bose-Einstein | (μ=0) | (C_V\\propto T^3) |\n\n### 重要ポイント\n\n- 分布関数の分母の (+1)、(-1) を区別する。\n- 物理量の総和は原則として (∫ g(\\epsilon)f(\\epsilon)(\\text{1粒子あたりの量})d\\epsilon)。\n- フォトンとフォノンは粒子数非保存なので (μ=0)。\n\n## 図・グラフの読み方\n\n- **Fermi-Dirac分布**：横軸 (ε)、縦軸 (f)。(T=0) では (ε_F) で1から0へ段差状に変化し、温度上昇で幅 (〜k_{\\mathrm B}T) の範囲がなまる。\n- **Bose-Einstein分布**：低エネルギー側の占有数が大きく、(μ) が基底エネルギーへ近づくと基底状態占有が増える。\n- **Planck分布**：横軸が角振動数、縦軸が放射スペクトル。温度上昇で全強度が増え、ピークが高周波側へ移る。\n- **Debye熱容量**：横軸 (T/\\Theta_D)、縦軸 (C_V/(3Nk_{\\mathrm B}))。低温で (T^3)、高温で1へ飽和する。\n\n## 試験重要度\n\n- **重要度A**：FD・BE分布の式、占有制限、古典極限。量子統計の中心だから。\n- **重要度A**：Fermiエネルギー・Fermi温度と低温電子熱容量。2023過去問との対応があるから。\n- **重要度A**：フォトン・フォノンで (μ=0) となる理由、Debyeの高温・低温極限。\n- **重要度B**：Planck則から (T^4)、Debye模型から (T^3) が出る流れ。\n- **重要度C**：Bose凝縮温度の詳細計算や弱い粒子間相互作用。資料上で発展扱いだから。\n\n## 出題パターン\n\n- **比較説明**：Fermi粒子・Bose粒子・古典粒子の占有数を比較する。\n- **グラフ**：異なる温度のFD分布を描き、変化する範囲を示す。\n- **計算**：数密度から (ε_F,T_F) を求める。\n- **導出**：1状態の大分配関数からFDまたはBE分布を導く。\n- **極限**：Debye熱容量の高温 (3Nk_{\\mathrm B}) と低温 (T^3) を示す。\n- **理由説明**：金属電子の熱容量が古典値より小さい理由をPauli排他律から述べる。\n\n## 練習問題（解答なし）\n\n1. FD分布とBE分布を式と粒子の例を含めて比較せよ。\n2. 両分布が古典極限で同じ形になる条件を説明せよ。\n3. 電子数密度 (n) からFermiエネルギーとFermi温度を求めよ。\n4. 金属電子の熱容量が低温で (T) に比例する理由を説明せよ。\n5. フォトンとフォノンの化学ポテンシャルが0である理由を述べよ。\n6. Debye模型の高温極限と低温極限を求め、それぞれの物理的意味を説明せよ。",
              "major": "4",
              "why": [],
              "importantPoints": [
                "分布関数の分母の (+1)、(-1) を区別する。",
                "物理量の総和は原則として (∫ g(\\epsilon)f(\\epsilon)(\\text{1粒子あたりの量})d\\epsilon)。",
                "フォトンとフォノンは粒子数非保存なので (μ=0)。",
                "**Fermi-Dirac分布**：横軸 (ε)、縦軸 (f)。(T=0) では (ε_F) で1から0へ段差状に変化し、温度上昇で幅 (〜k_{\\mathrm B}T) の範囲がなまる。",
                "**Bose-Einstein分布**：低エネルギー側の占有数が大きく、(μ) が基底エネルギーへ近づくと基底状態占有が増える。",
                "**Planck分布**：横軸が角振動数、縦軸が放射スペクトル。温度上昇で全強度が増え、ピークが高周波側へ移る。",
                "**Debye熱容量**：横軸 (T/\\Theta_D)、縦軸 (C_V/(3Nk_{\\mathrm B}))。低温で (T^3)、高温で1へ飽和する。",
                "**重要度A**：FD・BE分布の式、占有制限、古典極限。量子統計の中心だから。",
                "**重要度A**：Fermiエネルギー・Fermi温度と低温電子熱容量。2023過去問との対応があるから。",
                "**重要度A**：フォトン・フォノンで (μ=0) となる理由、Debyeの高温・低温極限。",
                "**重要度B**：Planck則から (T^4)、Debye模型から (T^3) が出る流れ。",
                "**重要度C**：Bose凝縮温度の詳細計算や弱い粒子間相互作用。資料上で発展扱いだから。",
                "**比較説明**：Fermi粒子・Bose粒子・古典粒子の占有数を比較する。",
                "**グラフ**：異なる温度のFD分布を描き、変化する範囲を示す。",
                "**計算**：数密度から (ε_F,T_F) を求める。",
                "**導出**：1状態の大分配関数からFDまたはBE分布を導く。",
                "**極限**：Debye熱容量の高温 (3Nk_{\\mathrm B}) と低温 (T^3) を示す。",
                "**理由説明**：金属電子の熱容量が古典値より小さい理由をPauli排他律から述べる。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q5",
              "label": "第5部",
              "title": "半導体・レポート課題・直前チェック",
              "markdown": "## この範囲で学ぶこと\n\nFermi-Dirac分布とバンド理論を使って、金属・絶縁体・半導体の違いを説明する。さらに、今年度レポートで扱われた2つの古典統計問題を、分配関数を立てる段階から自力で解けるようにする。\n\n## 前提知識\n\n- 原子中の電子準位と結晶中のエネルギーバンド\n- 電子の電荷とエネルギー単位 (1\\,\\mathrm{eV}=1.602\\times10^{-19}\\,\\mathrm J)\n- Fermi-Dirac分布と化学ポテンシャル\n- Gaussian積分、Stirling公式、位相空間積分\n- 極限を取る順序が結果へ影響する場合があること\n\n## 重要用語\n\n| 用語 | 定義・意味 | 用途 | 間違えやすい点 |\n|---|---|---|---|\n| 価電子帯 | 低温で電子に満たされた上側のバンド | 結合電子・ホールを考える | 伝導帯と区別する |\n| 伝導帯 | 電子が移動して電流を運べるバンド | 伝導電子を考える | 電子が存在しなければ伝導しない |\n| バンドギャップ (E_g) | 価電子帯上端と伝導帯下端のエネルギー差 | 熱・光励起のしやすさを決める | 単位はeVまたはJ |\n| ホール | 価電子帯の電子の空席を正電荷粒子として表したもの | p型伝導を記述する | 実在する陽子ではない |\n| ドナー・アクセプター | 電子を供給・受容する不純物準位 | キャリア密度を制御する | n型・p型との対応を逆にしない |\n| 空乏層 | p-n界面で移動キャリアが少ない領域 | 整流障壁を作る | 電荷が完全にゼロという意味ではない |\n\n## 重要公式の使い分け\n\n| 公式 | 条件 | 使用場面 | 注意点 |\n|---|---|---|---|\n| (n_i\\propto T^{3/2}e^{-E_g/(2k_{\\mathrm B}T)}) | 非縮退・真性半導体の近似 | キャリア密度の温度依存 | 指数が (E_g) ではなく (E_g/2) |\n| (h\\nu\\gtrsim E_g) | 光励起 | 吸収端、光電変換 | (h) と (ħ)、(ν) と (ω) を区別する |\n| (Z=(N!h^{3N})^{-1}\\int d\\Gamma e^{-\\beta H}) | 古典同種粒子 | レポート2 | 外場の位置積分を忘れない |\n| (\\langle ax^2\\rangle=k_{\\mathrm B}T/2) | 古典的2次項 | レポート1 | 非調和ポテンシャルには一般に使えない |\n\n## 1. バンド理論と半導体\n\n結晶の周期ポテンシャル中では、電子のエネルギーは許容帯と禁制帯に分かれる。\n\n- 金属：許容帯が部分的に占有され、すぐ上に空状態がある。\n- 絶縁体：価電子帯が満杯で、伝導帯までのバンドギャップ (E_g) が大きい。\n- 半導体：(E_g) が比較的小さく、熱・光・電場でキャリアを励起できる。\n\n真性半導体では電子密度とホール密度が等しく、概略\n\n\\[\n\\boxed{n_i\\propto T^{3/2}\\exp\\left(-\\frac{E_g}{2k_{\\mathrm B}T}\\right)}.\n\\]\n\n指数に (E_g/2) が出るのは、Fermi準位がほぼギャップ中央にあり、電子とホールを対で生成するためである。\n\n## 2. ドーピングとp-n接合\n\n- n型：ドナー準位から伝導帯へ電子を供給し、電子が多数キャリア。\n- p型：アクセプター準位が価電子帯から電子を受け取り、ホールが多数キャリア。\n- p-n接合：界面付近でキャリアが拡散し、空乏層と内蔵電場ができる。\n- 順方向バイアス：障壁が下がり、大きな電流が流れる。\n- 逆方向バイアス：障壁が上がり、電流は小さい。\n\n応用はダイオード、トランジスタ、太陽電池、LED、熱電変換である。光電変換では (h\\nu\\gtrsim E_g) が励起の目安になる。\n\n## 3. レポート課題1：3次元調和振動子\n\n確率密度は\n\n\\[\nP(\\boldsymbol r,\\boldsymbol p)\\propto\n\\exp\\left[-\\beta\\left(\n\\frac{p^2}{2m}+\\frac{cr^2}{2}\n\\right)\\right].\n\\]\n\nGaussian積分\n\n\\[\n\\int_{-\\infty}^{\\infty}e^{-ax^2}dx=\\sqrt{\\frac\\pi a},\\qquad\n\\int_{-\\infty}^{\\infty}x^2e^{-ax^2}dx\n=\\frac{\\sqrt\\pi}{2a^{3/2}}\n\\]\n\nを分子・分母に使えば\n\n\\[\n\\left\\langle\\frac{p_i^2}{2m}\\right\\rangle\n=\\frac12k_{\\mathrm B}T,\\qquad\n\\left\\langle\\frac{cx_i^2}{2}\\right\\rangle\n=\\frac12k_{\\mathrm B}T.\n\\]\n\n3方向を足して\n\n\\[\n\\boxed{\\langle K\\rangle=\\frac32k_{\\mathrm B}T},\\qquad\n\\boxed{\\langle U\\rangle=\\frac32k_{\\mathrm B}T}.\n\\]\n\n答案では「他の変数の積分は分子・分母で相殺される」ことを書くとよい。\n\n## 4. レポート課題2：重力場中の古典理想気体\n\n断面積 (A)、高さ (H)、外場 (mgz) の容器では\n\n\\[\nZ=\\frac1{N!h^{3N}}(2\\pi mk_{\\mathrm B}T)^{3N/2}A^N\n\\left[\n\\frac{k_{\\mathrm B}T}{mg}\n\\left(1-e^{-mgH/(k_{\\mathrm B}T)}\\right)\n\\right]^N.\n\\]\n\n(H\\to\\infty) なら\n\n\\[\nZ=\\frac1{N!h^{3N}}(2\\pi mk_{\\mathrm B}T)^{3N/2}A^N\n\\left(\\frac{k_{\\mathrm B}T}{mg}\\right)^N.\n\\]\n\nしたがって\n\n\\[\n\\boxed{U=\\frac52Nk_{\\mathrm B}T},\\qquad\n\\boxed{C_V=\\frac52Nk_{\\mathrm B}}.\n\\]\n\n内訳は並進運動 (3Nk_{\\mathrm B}T/2) と重力ポテンシャル (Nk_{\\mathrm B}T)。密度分布は\n\n\\[\n\\boxed{n(z)\\propto e^{-mgz/(k_{\\mathrm B}T)}}.\n\\]\n\n> [!IMPORTANT]\n> (H\\to\\infty) を先に取った式で、その後 (g\\to0) として通常の理想気体へ戻すことはできない。(g\\to0) と (H\\to\\infty) の極限は交換できず、(z) 積分の収束性が変わる。\n\n## 5. 過去問とのつながり\n\n- 2023問1・2011問1：調和振動子、Boltzmann分布、分配関数、古典極限。\n- 2023問2：Fermiエネルギー、Fermi温度、Seebeck係数。\n- 2011問2：等分配則、Maxwell速度分布。\n- 2011問3：半導体の熱励起とキャリア密度。\n- 2023問3・2011問4：確率・情報エントロピー・拡散。\n- 2023問4：Gaussian鎖の多重度とエントロピー弾性。\n\n## 6. 導出問題の答案テンプレート\n\n1. 固定条件を書き、統計集団を宣言する。\n2. エネルギー (H) と状態の数え方 (g) を書く。\n3. 確率の重み (e^{-\\beta E}) または (e^{-\\beta(E-\\mu N)}) を書く。\n4. 分配関数を「全状態の和」として書く。\n5. (λ_T)、Stirling公式、積分近似など、使う近似と成立条件を明記する。\n6. (⟨E\\rangle=-\\partial_\\beta\\ln Z) などで熱力学量へ変換する。\n7. 単位、高温・低温極限、符号を確認する。\n\n## 7. 最終公式チェック\n\n\\[\n\\boxed{\n\\begin{gathered}\nS=k_{\\mathrm B}\\ln g,\n\\qquad\n\\frac1T=\\left(\\frac{\\partial S}{\\partial E}\\right)_{N,V},\\\\\nZ=\\sum_i e^{-\\beta E_i},\n\\qquad\nF=-k_{\\mathrm B}T\\ln Z,\n\\qquad\nU=-\\frac{\\partial\\ln Z}{\\partial\\beta},\\\\\n\\Xi=\\sum_N e^{\\beta\\mu N}Z_N,\n\\qquad\nJ=-k_{\\mathrm B}T\\ln\\Xi=-PV,\\\\\nf_{\\mathrm{FD}}=\\frac1{e^{\\beta(\\epsilon-\\mu)}+1},\n\\qquad\nf_{\\mathrm{BE}}=\\frac1{e^{\\beta(\\epsilon-\\mu)}-1},\\\\\n\\epsilon_F=\\frac{\\hbar^2}{2m}(3\\pi^2n)^{2/3},\n\\qquad\nT_F=\\epsilon_F/k_{\\mathrm B}.\n\\end{gathered}\n}\n\\]\n\n### 間違えやすい点\n\n- (g(E)) と確率を混同しない。正準集団のエネルギー確率は (g(E)e^{-\\beta E}/Z)。\n- (F=-k_{\\mathrm B}T\\ln Z) の負号を落とさない。\n- (U=-\\partial_\\beta\\ln Z) で、(Z) そのものではなく (\\ln Z) を微分する。\n- 同種古典粒子の (1/N!) と位相空間の (1/h^{3N}) を忘れない。\n- Fermi-Diracは分母 (+1)、Bose-Einsteinは (-1)。\n- フォトン・フォノンは (μ=0)。電子は一般に (μ\\ne0)。\n- 等分配則は量子凍結が無視できる高温の古典極限で使う。\n- 極限を取る順序で結果が変わる場合がある。\n\n### 重要ポイント\n\n- レポート2題は分配関数とGaussian積分の総合練習なので、自力で再計算する。\n- 公式だけでなく、固定条件・近似条件・物理的意味を1文ずつ説明できるようにする。\n- 過去問2011・2023の対応問題を、このまとめの各部を読んだ直後に解く。\n\n## 図・グラフの読み方\n\n- **バンド図**：縦軸は電子エネルギー。価電子帯、禁制帯、伝導帯、Fermi準位の相対位置を見る。\n- **p-n接合図**：空間方向に対するバンドの曲がりまたは電位障壁を見る。順方向では障壁が下がり、逆方向では上がる。\n- **キャリア密度の温度依存**：ln n_i を 1/T に対して描けば、指数因子から傾きに E_g の情報が現れる。\n- **重力場中の密度**：横軸または縦軸が高さ (z)、密度が (e^{-mgz/(k_{\\mathrm B}T)}) で減衰する。温度が高いほど分布は緩やかになる。\n\n## 試験重要度\n\n- **重要度A**：レポート課題1・2。2026年度に実際に課され、略解も配布されているから。\n- **重要度A**：金属・絶縁体・半導体のバンドによる分類、真性キャリア密度の温度依存。\n- **重要度B**：n型・p型、p-n接合、順方向・逆方向バイアス。\n- **重要度B**：光電・熱電変換の原理。章後半の工学応用としてまとまっているから。\n- **重要度C**：各デバイスの構造・材料の細部。資料上の概説範囲を超える詳細は優先度を下げる。\n\n## 出題パターン\n\n- **用語説明**：バンドギャップ、ホール、ドーピング、空乏層を説明する。\n- **比較**：金属・絶縁体・半導体、n型・p型、順・逆バイアスを比較する。\n- **計算**：(E_g) を温度または光の波長へ換算する。\n- **導出**：Gaussian積分から調和振動子の等分配則を示す。\n- **総合計算**：重力場を含む (Z) を求め、(F,U,C_V) を計算する。\n- **考察**：(g\\to0) と (H\\to\\infty) の極限を交換できない理由を説明する。\n\n## 練習問題（解答なし）\n\n1. 金属・絶縁体・半導体をバンド占有とバンドギャップから比較せよ。\n2. 真性半導体のキャリア密度が温度に強く依存する理由を説明せよ。\n3. n型・p型半導体の多数キャリアと不純物準位を答えよ。\n4. 3次元調和振動子について、Gaussian積分から (⟨K\\rangle) と (⟨U\\rangle) を求めよ。\n5. 重力場中の古典理想気体の分配関数を有限高さ (H) で導け。\n6. 前問から (H\\to\\infty) で (U=5Nk_{\\mathrm B}T/2) となることを示し、エネルギーの内訳を説明せよ。\n7. (H\\to\\infty) と (g\\to0) の極限を交換できない理由を位置積分から考察せよ。\n\n## 資料外の補足\n\n一般的な半導体物理では、有効状態密度を用いて (n=N_Ce^{-(E_C-\\mu)/(k_{\\mathrm B}T)})、(p=N_Ve^{-(\\mu-E_V)/(k_{\\mathrm B}T)}) と表す。ただし、これらの詳細式を答案に使う場合は、2026年度講義で採用された記号・近似と一致するか原資料を確認すること。\n\n## 学習後の理解度チェック用質問\n\n1. 多重度から温度をどのように定義するか。\n2. 外部条件が (N,V,T) のとき、どの統計集団・分配関数・自由エネルギーを使うか。\n3. Fermi-Dirac分布とBose-Einstein分布の違いは分母の符号以外に何を意味するか。\n4. なぜフォノンの熱容量は低温で (T^3) に比例するか。\n5. 重力場中の理想気体で、通常の並進エネルギー以外の (Nk_{\\mathrm B}T) はどこから生じるか。",
              "major": "5",
              "why": [],
              "importantPoints": [
                "レポート2題は分配関数とGaussian積分の総合練習なので、自力で再計算する。",
                "公式だけでなく、固定条件・近似条件・物理的意味を1文ずつ説明できるようにする。",
                "過去問2011・2023の対応問題を、このまとめの各部を読んだ直後に解く。",
                "**バンド図**：縦軸は電子エネルギー。価電子帯、禁制帯、伝導帯、Fermi準位の相対位置を見る。",
                "**p-n接合図**：空間方向に対するバンドの曲がりまたは電位障壁を見る。順方向では障壁が下がり、逆方向では上がる。",
                "**キャリア密度の温度依存**：ln n_i を 1/T に対して描けば、指数因子から傾きに E_g の情報が現れる。",
                "**重力場中の密度**：横軸または縦軸が高さ (z)、密度が (e^{-mgz/(k_{\\mathrm B}T)}) で減衰する。温度が高いほど分布は緩やかになる。",
                "**重要度A**：レポート課題1・2。2026年度に実際に課され、略解も配布されているから。",
                "**重要度A**：金属・絶縁体・半導体のバンドによる分類、真性キャリア密度の温度依存。",
                "**重要度B**：n型・p型、p-n接合、順方向・逆方向バイアス。",
                "**重要度B**：光電・熱電変換の原理。章後半の工学応用としてまとまっているから。",
                "**重要度C**：各デバイスの構造・材料の細部。資料上の概説範囲を超える詳細は優先度を下げる。",
                "**用語説明**：バンドギャップ、ホール、ドーピング、空乏層を説明する。",
                "**比較**：金属・絶縁体・半導体、n型・p型、順・逆バイアスを比較する。",
                "**計算**：(E_g) を温度または光の波長へ換算する。",
                "**導出**：Gaussian積分から調和振動子の等分配則を示す。",
                "**総合計算**：重力場を含む (Z) を求め、(F,U,C_V) を計算する。",
                "**考察**：(g\\to0) と (H\\to\\infty) の極限を交換できない理由を説明する。"
              ],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            }
          ]
        },
        {
          "year": 2023,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "松本",
            "井上"
          ],
          "status": "completed",
          "sourceFile": "物工・統計熱力学(松本・井上)2023.pdf",
          "sourcePages": [
            1,
            2,
            3,
            4
          ],
          "problemAssets": [
            "/exams/statistical-thermodynamics/2023/page-1.webp",
            "/exams/statistical-thermodynamics/2023/page-2.webp",
            "/exams/statistical-thermodynamics/2023/page-3.webp",
            "/exams/statistical-thermodynamics/2023/page-4.webp"
          ],
          "localPdfUrl": "/pdfs/statistical-thermodynamics/2023.pdf",
          "sourceUrl": "https://drive.google.com/file/d/12H8VOiLQUZFytWqt08UZHWBXc26MoxOO/edit",
          "pdfSourceFile": "物工・統計熱力学(松本・井上)2023.pdf",
          "introMarkdown": "> [!NOTE]\n> 試験は問1〜問4から3問を選択する形式であるが、この解説では全4問を扱う。元PDFには問題の後に略解も収録されており、本解説ではその内容を確認しながら、初学者向けに途中式と考え方を補っている。\n\n\n## 1. Canonical分布と分配関数\n\n温度 \\(T\\) の熱浴と平衡にある系で、微視的状態のエネルギーを \\(E\\) とすると、状態の重みは\n\n\\[\n\\exp\\left(-\\frac{E}{k_{\\mathrm B}T}\\right)\n\\]\n\nに比例する。\n\n分配関数は、その重みをすべての状態について足し合わせたもの：\n\n\\[\n\\boxed{\nZ=\\sum_{\\text{states}}\n\\exp\\left(-\\frac{E}{k_{\\mathrm B}T}\\right)\n}\n\\]\n\n連続変数の場合は和を積分へ置き換える。\n\n## 2. Helmholtz自由エネルギー\n\nCanonical分布において、\n\n\\[\n\\boxed{\nF=-k_{\\mathrm B}T\\ln Z\n}\n\\]\n\nである。\n\nまた、\n\n\\[\n\\boxed{\nF=U-TS\n}\n\\]\n\nなので、自由エネルギーは内部エネルギーとエントロピーの競合を表す。\n\n## 3. 平均値\n\n物理量 \\(A\\) の平均は、\n\n\\[\n\\boxed{\n\\langle A\\rangle\n=\n\\frac{\n\\int A e^{-E/(k_{\\mathrm B}T)}d\\Gamma\n}{\n\\int e^{-E/(k_{\\mathrm B}T)}d\\Gamma\n}\n}\n\\]\n\nで求められる。\n\n## 4. Gaussian積分\n\n\\[\n\\int_{-\\infty}^{\\infty}e^{-ax^2}dx\n=\n\\sqrt{\\frac{\\pi}{a}}\n\\qquad(a>0)\n\\]\n\n\\[\n\\int_{-\\infty}^{\\infty}x^2e^{-ax^2}dx\n=\n\\frac{\\sqrt\\pi}{2a^{3/2}}\n\\]\n\nを使う。\n\n## 5. Fermi分布\n\n電子の占有確率は、\n\n\\[\n\\boxed{\nf(\\epsilon)\n=\n\\frac1{\n\\exp[(\\epsilon-\\mu)/(k_{\\mathrm B}T)]+1\n}\n}\n\\]\n\nである。\n\n絶対零度では、\n\n\\[\nf(\\epsilon)=\n\\begin{cases}\n1 & \\epsilon\\le\\mu_0\\\\\n0 & \\epsilon>\\mu_0\n\\end{cases}\n\\]\n\nという階段関数になる。\n\n## 6. Shannonの情報エントロピー\n\n確率 \\(p_i\\) の事象について、\n\n\\[\n\\boxed{\nS=-\\sum_i p_i\\log_2p_i\n}\n\\]\n\nである。\n\n単位は bit。\n\n- 結果がほぼ確定：\\(S\\) は小さい\n- 結果が同程度に起こる：\\(S\\) は大きい\n\n二択で確率が \\(1/2,1/2\\) なら最大値 \\(1\\) bit。\n\n## 7. Bayesの定理\n\n\\[\n\\boxed{\np(x|y)\n=\n\\frac{p(y|x)p(x)}\n{\\sum_xp(y|x)p(x)}\n}\n\\]\n\nである。\n\n「原因から結果」の確率 \\(p(y|x)\\) と事前確率 \\(p(x)\\) から、「結果を見た後の原因」の確率 \\(p(x|y)\\) を求める。\n\n## 8. Gaussian鎖\n\n長さ \\(b\\) のセグメントがランダムな方向を取る鎖をGaussian鎖という。\n\nセグメント数が \\(N\\) のとき、末端間距離の二乗平均は、\n\n\\[\n\\boxed{\n\\langle x^2\\rangle=Nb^2\n}\n\\]\n\nしたがって、典型的な広がりは、\n\n\\[\n\\boxed{\n\\sqrt{\\langle x^2\\rangle}=\\sqrt N\\,b\n}\n\\]\n\nである。\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-1",
              "title": "古典調和振動子の分配関数",
              "markdown": "### 解法方針\n\n指数関数の中は、\n\n\\[\n\\frac12cx^2+\\frac{p^2}{2m}\n\\]\n\nという、\\(x\\) だけの項と \\(p\\) だけの項の和である。\n\nしたがって、\n\n\\[\ne^{-(E_x+E_p)/(k_{\\mathrm B}T)}\n=\ne^{-E_x/(k_{\\mathrm B}T)}\ne^{-E_p/(k_{\\mathrm B}T)}\n\\]\n\nとなり、二重積分を2つのGaussian積分へ分離できる。\n\n### 積分の分離\n\n\\[\nZ(T)\n=\n\\frac1h\n\\left[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{cx^2}{2k_{\\mathrm B}T}\n\\right)dx\n\\right]\n\\left[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{p^2}{2mk_{\\mathrm B}T}\n\\right)dp\n\\right].\n\\]\n\n1つ目の積分は、\n\n\\[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{cx^2}{2k_{\\mathrm B}T}\n\\right)dx\n=\n\\sqrt{\\frac{2\\pi k_{\\mathrm B}T}{c}}.\n\\]\n\n2つ目は、\n\n\\[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{p^2}{2mk_{\\mathrm B}T}\n\\right)dp\n=\n\\sqrt{2\\pi mk_{\\mathrm B}T}.\n\\]\n\nしたがって、\n\n\\[\nZ(T)\n=\n\\frac1h\n\\sqrt{\\frac{2\\pi k_{\\mathrm B}T}{c}}\n\\sqrt{2\\pi mk_{\\mathrm B}T}.\n\\]\n\n\\[\n=\n\\frac{2\\pi k_{\\mathrm B}T}{h}\n\\sqrt{\\frac{m}{c}}.\n\\]\n\n調和振動子の角振動数を、\n\n\\[\n\\omega=\\sqrt{\\frac{c}{m}}\n\\]\n\nとすると、\n\n\\[\n\\sqrt{\\frac{m}{c}}=\\frac1\\omega.\n\\]\n\nまた、\n\n\\[\n\\hbar=\\frac{h}{2\\pi}\n\\]\n\nなので、\n\n### 最終解答\n\n\\[\n\\boxed{\nZ(T)\n=\n\\frac{2\\pi k_{\\mathrm B}T}{h}\n\\sqrt{\\frac{m}{c}}\n=\n\\frac{k_{\\mathrm B}T}{\\hbar\\omega}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ分配関数を h で割るの？\"\n古典位相空間では状態が連続に無限個あるため、そのまま積分すると状態数の単位が残る。量子力学の不確定性原理では位相空間の1状態がおよそ \\(h\\) の面積を占めるので、\\(\\int dx\\,dp\\) を \\(h\\) で割って状態数を無次元化する。\n:::\n\n### 試験答案\n\n\\[\nZ\n=\n\\frac1h\n\\sqrt{\\frac{2\\pi k_{\\mathrm B}T}{c}}\n\\sqrt{2\\pi mk_{\\mathrm B}T}\n=\n\\frac{2\\pi k_{\\mathrm B}T}{h}\n\\sqrt{\\frac mc}.\n\\]\n\n\\[\n\\omega=\\sqrt{c/m},\n\\qquad\n\\hbar=h/(2\\pi)\n\\]\n\nより、\n\n\\[\n\\boxed{\nZ(T)=\\frac{k_{\\mathrm B}T}{\\hbar\\omega}\n}.\n\\]\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ分配関数を h で割るの？",
                  "markdown": "古典位相空間では状態が連続に無限個あるため、そのまま積分すると状態数の単位が残る。量子力学の不確定性原理では位相空間の1状態がおよそ \\(h\\) の面積を占めるので、\\(\\int dx\\,dp\\) を \\(h\\) で割って状態数を無次元化する。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q1-2",
              "label": "Q1-2",
              "title": "Helmholtz自由エネルギー",
              "markdown": "\\[\nF(T)=-k_{\\mathrm B}T\\ln Z(T).\n\\]\n\n前問の結果を代入すると、\n\n\\[\n\\boxed{\nF(T)\n=\n-k_{\\mathrm B}T\n\\ln\\left(\n\\frac{2\\pi k_{\\mathrm B}T}{h}\n\\sqrt{\\frac mc}\n\\right)\n}\n\\]\n\nまたは、\n\n\\[\n\\boxed{\nF(T)\n=\n-k_{\\mathrm B}T\n\\ln\\left(\n\\frac{k_{\\mathrm B}T}{\\hbar\\omega}\n\\right)\n}\n\\]\n\nである。\n\n### 無次元化\n\n\\[\nX=\\frac{k_{\\mathrm B}T}{\\hbar\\omega}\n\\]\n\nと置くと、\n\n\\[\n\\boxed{\n\\frac{F}{\\hbar\\omega}\n=\n-X\\ln X\n}\n\\]\n\nとなる。\n\n### グラフの特徴\n\n関数\n\n\\[\nY=-X\\ln X\n\\qquad(X>0)\n\\]\n\nを考える。\n\n- \\(X\\to0+0\\)：\n\n\\[\n-X\\ln X\\to0\n\\]\n\n- \\(X=e^{-1}\\) で最大：\n\n\\[\nY_{\\max}=\\frac1e\n\\]\n\n- \\(X=1\\) で：\n\n\\[\nY=0\n\\]\n\n- \\(X>1\\) では負\n- \\(X\\to\\infty\\) では：\n\n\\[\nY\\to-\\infty\n\\]\n\n模式図：\n\n```text\nF/(ℏω)\n  │       ● 最大\n  │     ／  ＼\n0 ├────┘─────＼──────── X=kBT/(ℏω)\n  │             ＼\n  │               ＼\n```\n\n### 微分\n\n\\[\n\\frac{dF}{dT}\n=\n-k_{\\mathrm B}\n\\left[\n\\ln\\left(\n\\frac{k_{\\mathrm B}T}{\\hbar\\omega}\n\\right)+1\n\\right].\n\\]\n\n\\(T\\to0+0\\) では、\n\n\\[\n\\frac{dF}{dT}\\to+\\infty.\n\\]\n\nただし、この低温での発散的な挙動は、古典近似を低温まで無理に延長したために生じる。実際の量子調和振動子では低温挙動が異なる。\n\n:::why title=\"なぜ T→0 で F は0なのに、傾きは無限大になるの？\"\n\\(T\\ln T\\to0\\) なので関数値は0へ近づくが、微分には \\(\\ln T\\) が残り、\\(\\ln T\\to-\\infty\\) となるからである。\n:::\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ T→0 で F は0なのに、傾きは無限大になるの？",
                  "markdown": "\\(T\\ln T\\to0\\) なので関数値は0へ近づくが、微分には \\(\\ln T\\) が残り、\\(\\ln T\\to-\\infty\\) となるからである。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q1-3",
              "label": "Q1-3",
              "title": "エネルギー等分配則",
              "markdown": "## ポテンシャルエネルギー\n\n\\[\nU_{\\mathrm p}\n=\n\\frac12cx^2.\n\\]\n\n平均は、\n\n\\[\n\\left\\langle\n\\frac12cx^2\n\\right\\rangle\n=\n\\frac{\n\\int dx\\int dp\\,\n\\frac12cx^2\ne^{-[cx^2/2+p^2/(2m)]/(k_{\\mathrm B}T)}\n}{\n\\int dx\\int dp\\,\ne^{-[cx^2/2+p^2/(2m)]/(k_{\\mathrm B}T)}\n}.\n\\]\n\np積分は分子と分母で共通なので打ち消し合う。\n\n\\[\n=\n\\frac{\n\\frac c2\n\\int_{-\\infty}^{\\infty}\nx^2e^{-cx^2/(2k_{\\mathrm B}T)}dx\n}{\n\\int_{-\\infty}^{\\infty}\ne^{-cx^2/(2k_{\\mathrm B}T)}dx\n}.\n\\]\n\nGaussian積分を用いると、\n\n\\[\n\\boxed{\n\\left\\langle\n\\frac12cx^2\n\\right\\rangle\n=\n\\frac12k_{\\mathrm B}T\n}\n\\]\n\nである。\n\n## 運動エネルギー\n\n同様に、\n\n\\[\n\\boxed{\n\\left\\langle\n\\frac{p^2}{2m}\n\\right\\rangle\n=\n\\frac12k_{\\mathrm B}T\n}\n\\]\n\nである。\n\n### 全平均エネルギー\n\n\\[\n\\boxed{\n\\langle E\\rangle\n=\n\\frac12k_{\\mathrm B}T\n+\n\\frac12k_{\\mathrm B}T\n=\nk_{\\mathrm B}T\n}\n\\]\n\nとなる。\n\n### 最終結論\n\n座標 \\(x\\) の二次項と運動量 \\(p\\) の二次項に、それぞれ等しく、\n\n\\[\n\\boxed{\n\\frac12k_{\\mathrm B}T\n}\n\\]\n\nずつエネルギーが分配される。\n\nこれが、この系におけるエネルギー等分配則である。\n\n> [!IMPORTANT]\n> 等分配則は「二次形式で現れる独立な自由度1つにつき \\(\\frac12k_{\\mathrm B}T\\)」である。任意のポテンシャルで常に位置エネルギーと運動エネルギーが等しくなるわけではない。\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q2-1",
              "label": "Q2-1",
              "title": "絶対零度の化学ポテンシャル",
              "markdown": "絶対零度では、\n\n\\[\nf(\\epsilon)=\n\\begin{cases}\n1 & 0\\le\\epsilon\\le\\mu_0\\\\\n0 & \\epsilon>\\mu_0\n\\end{cases}\n\\]\n\nである。\n\nしたがって、\n\n\\[\nN\n=\n\\frac{\n2^{7/2}\\pi m_e^{3/2}V\n}{\nh^3\n}\n\\int_0^{\\mu_0}\\sqrt\\epsilon\\,d\\epsilon.\n\\]\n\n\\[\n\\int_0^{\\mu_0}\\sqrt\\epsilon\\,d\\epsilon\n=\n\\frac23\\mu_0^{3/2}.\n\\]\n\nよって、\n\n\\[\nN\n=\n\\frac{\n2^{7/2}\\pi m_e^{3/2}V\n}{\nh^3\n}\n\\frac23\\mu_0^{3/2}.\n\\]\n\n\\(\\mu_0\\) について解く。\n\n\\[\n\\mu_0^{3/2}\n=\n\\frac{\n3h^3\n}{\n2^{9/2}\\pi m_e^{3/2}\n}\n\\frac NV.\n\\]\n\n両辺を \\(2/3\\) 乗すると、\n\n### 最終解答\n\n\\[\n\\boxed{\n\\mu_0\n=\n\\left(\n\\frac3\\pi\n\\right)^{2/3}\n\\frac{h^2}{8m_e}\n\\left(\n\\frac NV\n\\right)^{2/3}\n}\n\\]\n\nである。\n\n\\(\\hbar=h/(2\\pi)\\) を使う標準形では、\n\n\\[\n\\boxed{\n\\mu_0\n=\n\\frac{\\hbar^2}{2m_e}\n\\left(\n3\\pi^2\\frac NV\n\\right)^{2/3}\n}\n\\]\n\nとなる。\n\n:::why title=\"絶対零度で μ0 がFermiエネルギーになるの？\"\n絶対零度では低いエネルギー状態から順に電子が詰まり、占有されている最も高いエネルギーが境界 \\(\\mu_0\\) になる。このエネルギーをFermiエネルギーという。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "絶対零度で μ0 がFermiエネルギーになるの？",
                  "markdown": "絶対零度では低いエネルギー状態から順に電子が詰まり、占有されている最も高いエネルギーが境界 \\(\\mu_0\\) になる。このエネルギーをFermiエネルギーという。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2",
              "label": "Q2-2",
              "title": "銅のFermi温度",
              "markdown": "### 電子数密度\n\n銅原子1個につき伝導電子1個なので、電子数密度は原子数密度と等しい。\n\n\\[\n\\frac NV\n=\n\\frac{\\rho}{M}N_{\\mathrm A}.\n\\]\n\n問題の値を使う：\n\n\\[\n\\rho=8.92\\,\\mathrm{g/cm^3},\n\\qquad\nM=53.5\\,\\mathrm{g/mol}.\n\\]\n\nSI単位へ変換して計算すると、\n\n\\[\n\\frac NV\n=\n\\frac{\n8.92\\,\\mathrm{g/cm^3}\n}{\n53.5\\,\\mathrm{g/mol}\n}\n\\frac{6.02\\times10^{23}}{10^{-6}\\,\\mathrm{m^3/cm^3}}.\n\\]\n\n\\[\n\\boxed{\n\\frac NV\n\\simeq\n1.00\\times10^{29}\\,\\mathrm{m^{-3}}\n}\n\\]\n\nである。\n\n### Fermiエネルギー\n\n前問の式へ代入すると、\n\n\\[\n\\boxed{\n\\mu_0\n\\simeq\n1.26\\times10^{-18}\\,\\mathrm J\n}\n\\]\n\nである。\n\n電子ボルトでは、\n\n\\[\n\\mu_0\n\\simeq\n\\frac{1.26\\times10^{-18}}\n{1.60\\times10^{-19}}\n\\simeq\n7.9\\,\\mathrm{eV}.\n\\]\n\n### Fermi温度\n\n\\[\n\\boxed{\nT_F=\\frac{\\mu_0}{k_{\\mathrm B}}\n}\n\\]\n\nなので、\n\n\\[\nT_F\n=\n\\frac{\n1.26\\times10^{-18}\n}{\n1.38\\times10^{-23}\n}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nT_F\n\\simeq\n9.13\\times10^4\\,\\mathrm K\n}\n\\]\n\nである。\n\n> [!NOTE]\n> 実際の銅の原子量や有効質量を使うと数値は少し変化する。この問題では、問題文に与えられた \\(53.5\\,\\mathrm{g/mol}\\) と自由電子質量をそのまま用いる。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-3",
              "label": "Q2-3",
              "title": "Seebeck係数の導出",
              "markdown": "まず式 (2-5) の両辺へ \\(k_{\\mathrm B}T\\) を掛ける。\n\n\\[\n\\epsilon-eV(T)-\\mu(T)\n=\nDk_{\\mathrm B}T.\n\\]\n\n両辺を \\(T\\) で微分する。\n\n\\(\\epsilon\\) は微視的エネルギー変数であり、ここでは \\(T\\) に依存しないとする。\n\n\\[\n-e\\frac{dV}{dT}\n-\n\\frac{d\\mu}{dT}\n=\nDk_{\\mathrm B}.\n\\]\n\nしたがって、\n\n\\[\n\\frac{dV}{dT}\n=\n-\\frac1e\n\\left(\n\\frac{d\\mu}{dT}\n+\nDk_{\\mathrm B}\n\\right).\n\\]\n\n式 (2-4) を展開すると、\n\n\\[\n\\mu(T)\n=\n\\mu_0\n+\n\\frac{Ak_{\\mathrm B}^2T^2}{\\mu_0}.\n\\]\n\nよって、\n\n\\[\n\\frac{d\\mu}{dT}\n=\n\\frac{2Ak_{\\mathrm B}^2T}{\\mu_0}.\n\\]\n\nこれを代入する。\n\n### 最終解答\n\n\\[\n\\boxed{\n\\frac{dV}{dT}\n=\n-\\frac{k_{\\mathrm B}}e\n\\left[\n\\frac{2Ak_{\\mathrm B}T}{\\mu_0}\n+\nD\n\\right]\n}\n\\]\n\nである。\n\nFermi温度\n\n\\[\nT_F=\\frac{\\mu_0}{k_{\\mathrm B}}\n\\]\n\nを用いれば、\n\n\\[\n\\boxed{\n\\frac{dV}{dT}\n=\n-\\frac{k_{\\mathrm B}}e\n\\left(\n\\frac{2AT}{T_F}+D\n\\right)\n}\n\\]\n\nとも書ける。\n\n:::why title=\"なぜ符号が負になるの？\"\n電子の電荷が \\(-e\\) であり、電位エネルギーが \\(-eV\\) と書かれるためである。この単純な電子モデルでは温度上昇に対して負のSeebeck係数が得られる。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ符号が負になるの？",
                  "markdown": "電子の電荷が \\(-e\\) であり、電位エネルギーが \\(-eV\\) と書かれるためである。この単純な電子モデルでは温度上昇に対して負のSeebeck係数が得られる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-4",
              "label": "Q2-4",
              "title": "銅のSeebeck係数",
              "markdown": "条件は、\n\n\\[\nA=1,\\qquad D=0,\n\\qquad T=300\\,\\mathrm K.\n\\]\n\n前問より、\n\n\\[\n\\frac{dV}{dT}\n=\n-\\frac{k_{\\mathrm B}}e\n\\frac{2T}{T_F}.\n\\]\n\n\\[\n\\frac{k_{\\mathrm B}}e\n=\n\\frac{\n1.38\\times10^{-23}\n}{\n1.60\\times10^{-19}\n}\n=\n8.63\\times10^{-5}\\,\\mathrm{V/K}.\n\\]\n\n\\[\n\\frac{2T}{T_F}\n=\n\\frac{600}{9.13\\times10^4}\n\\simeq\n6.57\\times10^{-3}.\n\\]\n\nしたがって、\n\n### 最終解答\n\n\\[\n\\boxed{\n\\frac{dV}{dT}\n\\simeq\n-5.67\\times10^{-7}\\,\\mathrm{V/K}\n}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\n\\frac{dV}{dT}\n\\simeq\n-0.57\\,\\mu\\mathrm{V/K}\n}\n\\]\n\nである。\n\n金属のSeebeck係数が \\(10^{-6}\\,\\mathrm{V/K}\\) 程度であるという説明と同じオーダーになる。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-1",
              "label": "Q3-1",
              "title": "不良品レポートの情報エントロピー",
              "markdown": "## ラインA\n\n良品の確率は、\n\n\\[\np_A(\\mathrm{良})=0.90\n\\]\n\n不良品の確率は、\n\n\\[\np_A(\\mathrm{不良})=0.10.\n\\]\n\nしたがって、\n\n\\[\nS_A\n=\n-\\left[\n0.90\\log_20.90\n+\n0.10\\log_20.10\n\\right].\n\\]\n\n数値計算すると、\n\n\\[\n\\boxed{\nS_A\\simeq0.469\\,\\mathrm{bit}\n}\n\\]\n\n有効数字2桁では、\n\n\\[\n\\boxed{\nS_A\\simeq0.47\\,\\mathrm{bit}\n}\n\\]\n\nである。\n\n## ラインB\n\n\\[\np_B(\\mathrm{良})=0.95,\n\\qquad\np_B(\\mathrm{不良})=0.05.\n\\]\n\n\\[\nS_B\n=\n-\\left[\n0.95\\log_20.95\n+\n0.05\\log_20.05\n\\right].\n\\]\n\n\\[\n\\boxed{\nS_B\\simeq0.286\\,\\mathrm{bit}\n}\n\\]\n\n有効数字2桁では、\n\n\\[\n\\boxed{\nS_B\\simeq0.29\\,\\mathrm{bit}\n}\n\\]\n\nである。\n\n### 大小の議論\n\n\\[\n\\boxed{S_A>S_B}\n\\]\n\nである。\n\nラインAのほうが不良率が高く、良・不良の確率がラインBよりも \\(1/2,1/2\\) に近い。\n\n二択の結果が予測しにくいほどエントロピーは大きいため、ラインAのレポートのほうが多くの情報を与える。\n\n:::why title=\"不良品が多いほど必ず情報量が大きいの？\"\n二択では、不良率が0から50%へ近づく間はエントロピーが増えるが、50%を超えて100%へ近づくと再び減る。最大は良品と不良品が半々のときである。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "不良品が多いほど必ず情報量が大きいの？",
                  "markdown": "二択では、不良率が0から50%へ近づく間はエントロピーが増えるが、50%を超えて100%へ近づくと再び減る。最大は良品と不良品が半々のときである。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2-1",
              "label": "Q3-2-1",
              "title": "Bayesの定理",
              "markdown": "結合確率 \\(p(x,y)\\) を2通りに表す。\n\n\\[\np(x,y)=p(x|y)p(y)\n\\]\n\nまた、\n\n\\[\np(x,y)=p(y|x)p(x).\n\\]\n\nしたがって、\n\n\\[\np(x|y)p(y)\n=\np(y|x)p(x).\n\\]\n\nよって、\n\n\\[\np(x|y)\n=\n\\frac{p(y|x)p(x)}{p(y)}.\n\\]\n\n全確率の公式より、\n\n\\[\np(y)\n=\n\\sum_xp(y|x)p(x).\n\\]\n\nしたがって、\n\n### 最終解答\n\n\\[\n\\boxed{\np(x|y)\n=\n\\frac{p(y|x)p(x)}\n{\\sum_xp(y|x)p(x)}\n}\n\\]\n\nである。\n\n:::why title=\"分母の和は何を表すの？\"\n事象 \\(y\\) が起こる可能性を、すべての原因 \\(x\\) について足し合わせた全確率 \\(p(y)\\) である。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "分母の和は何を表すの？",
                  "markdown": "事象 \\(y\\) が起こる可能性を、すべての原因 \\(x\\) について足し合わせた全確率 \\(p(y)\\) である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2-2",
              "label": "Q3-2-2",
              "title": "不良品がラインA製である確率",
              "markdown": "両ラインの製造速度が同じなので、事前確率は、\n\n\\[\np(A)=p(B)=\\frac12.\n\\]\n\n不良率は、\n\n\\[\np(\\mathrm{不良}|A)=0.10\n\\]\n\n\\[\np(\\mathrm{不良}|B)=0.05.\n\\]\n\nBayesの定理より、\n\n\\[\np(A|\\mathrm{不良})\n=\n\\frac{\np(\\mathrm{不良}|A)p(A)\n}{\np(\\mathrm{不良}|A)p(A)\n+\np(\\mathrm{不良}|B)p(B)\n}.\n\\]\n\n\\[\n=\n\\frac{\n0.10\\times\\frac12\n}{\n0.10\\times\\frac12\n+\n0.05\\times\\frac12\n}.\n\\]\n\n\\[\n=\n\\frac{0.10}{0.15}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\np(A|\\mathrm{不良})\n=\n\\frac23\n\\simeq0.667\n}\n\\]\n\nである。\n\nしたがって、不良品を見つけた場合、それがラインAで作られた確率は約67%。\n\n### 直感的な説明\n\n両ラインから100個ずつ作ったと考える。\n\n- Aの不良品：10個\n- Bの不良品：5個\n\n不良品は合計15個で、そのうち10個がA製。\n\n\\[\n\\frac{10}{15}=\\frac23.\n\\]\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-3",
              "label": "Q3-3",
              "title": "出荷製品レポートの情報量",
              "markdown": "出荷される製品は良品と確定している。\n\nしたがって、レポートに残る不確定性は、\n\n\\[\n\\boxed{\\text{その良品がA製かB製か}}\n\\]\n\nである。\n\n### 良品であるときの製造ラインの確率\n\nBayesの定理より、\n\n\\[\np(A|\\mathrm{良})\n=\n\\frac{\n0.90\\times\\frac12\n}{\n0.90\\times\\frac12\n+\n0.95\\times\\frac12\n}.\n\\]\n\n\\[\n=\n\\frac{0.90}{1.85}\n\\simeq0.48649.\n\\]\n\n\\[\n\\boxed{\np(A|\\mathrm{良})\n\\simeq0.4865\n}\n\\]\n\n同様に、\n\n\\[\n\\boxed{\np(B|\\mathrm{良})\n=\n\\frac{0.95}{1.85}\n\\simeq0.5135\n}\n\\]\n\nである。\n\n### 条件付きエントロピー\n\n\\[\nS(X|\\mathrm{良})\n=\n-\\left[\np(A|\\mathrm{良})\n\\log_2p(A|\\mathrm{良})\n+\np(B|\\mathrm{良})\n\\log_2p(B|\\mathrm{良})\n\\right].\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nS(X|\\mathrm{良})\n\\simeq0.99947\\,\\mathrm{bit}\n}\n\\]\n\nほぼ、\n\n\\[\n\\boxed{1\\,\\mathrm{bit}}\n\\]\n\nである。\n\n### 全製品のレポートとの比較\n\n製造ラインと品質を両方含めた4つの事象は、\n\n\\[\np(A,\\mathrm{良})=0.5\\times0.90=0.45\n\\]\n\n\\[\np(A,\\mathrm{不良})=0.5\\times0.10=0.05\n\\]\n\n\\[\np(B,\\mathrm{良})=0.5\\times0.95=0.475\n\\]\n\n\\[\np(B,\\mathrm{不良})=0.5\\times0.05=0.025.\n\\]\n\nしたがって、全製品のレポートの情報エントロピーは、\n\n\\[\nS_{\\mathrm{all}}\n=\n-\\sum p\\log_2p.\n\\]\n\n\\[\n\\boxed{\nS_{\\mathrm{all}}\n\\simeq1.3777\\,\\mathrm{bit}\n}\n\\]\n\nである。\n\nよって、\n\n\\[\n\\boxed{\nS(X|\\mathrm{良})\n<\nS_{\\mathrm{all}}\n}\n\\]\n\nとなる。\n\n### 違いの意味\n\n出荷製品では「良品である」ことがすでに判明しているため、品質についての不確定性が消えている。\n\nそのため、ラインと品質の両方が不明な全製品の場合より、レポートの情報量は小さい。\n\n一方、AとBの良品率は90%と95%で大きくは違わないので、良品であることを知っても製造ラインはほぼ半々のままであり、ラインに関するエントロピーはほぼ1 bitになる。\n\n> [!IMPORTANT]\n> 有効数字2桁だけで計算すると \\(0.99947\\) bitも \\(1.00\\) bitに見え、差が分からなくなる。この小問では、ライン差によるわずかな情報量の低下を見るため、少し多めの桁で計算する。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q4-1",
              "label": "Q4-1",
              "title": "Gaussian鎖の張力",
              "markdown": "### 鎖の微視的状態数\n\n各セグメントは1次元上で、\n\n- \\(+b\\) 方向\n- \\(-b\\) 方向\n\nのどちらかを向くとする。\n\nプラス方向のセグメント数を \\(n_+\\)、マイナス方向を \\(n_-\\) とする。\n\n\\[\nN=n_++n_-\n\\]\n\n末端間距離は、\n\n\\[\nx=(n_+-n_-)b.\n\\]\n\nこの2式を解くと、\n\n\\[\nn_+\n=\n\\frac N2\n\\left(\n1+\\frac{x}{Nb}\n\\right)\n\\]\n\n\\[\nn_-\n=\n\\frac N2\n\\left(\n1-\\frac{x}{Nb}\n\\right).\n\\]\n\nこの配置を作る場合の数は、\n\n\\[\n\\boxed{\nW(x)\n=\n\\frac{N!}{n_+!n_-!}\n}\n\\]\n\nである。\n\n### エントロピー\n\n\\[\nS(x)=k_{\\mathrm B}\\ln W(x).\n\\]\n\nセグメント間に相互作用がない理想鎖では、内部エネルギーを位置によらない定数とみなせる。\n\nしたがって、自由エネルギーの \\(x\\) 依存性は、\n\n\\[\nF(x)=-TS(x)+\\text{定数}\n\\]\n\nである。\n\n張力は、鎖を伸ばすために必要な力として、\n\n\\[\nf=\\frac{\\partial F}{\\partial x}\n\\]\n\nと定義する。\n\nStirlingの公式、\n\n\\[\n\\ln n!\\simeq n\\ln n-n\n\\]\n\nを使って微分すると、\n\n\\[\n\\boxed{\nf(x)\n=\n\\frac{k_{\\mathrm B}T}{2b}\n\\ln\n\\left(\n\\frac{1+x/(Nb)}\n{1-x/(Nb)}\n\\right)\n}\n\\]\n\nを得る。\n\n### 小変形 \\(x\\ll Nb\\) の近似\n\n\\[\nu=\\frac{x}{Nb}\\ll1\n\\]\n\nと置く。\n\n\\[\n\\ln\\left(\\frac{1+u}{1-u}\\right)\n=\n2u+\\frac{2u^3}{3}+\\cdots.\n\\]\n\n1次まで残すと、\n\n\\[\n\\ln\\left(\\frac{1+u}{1-u}\\right)\n\\simeq2u.\n\\]\n\nしたがって、\n\n\\[\nf\n\\simeq\n\\frac{k_{\\mathrm B}T}{2b}\n2\\frac{x}{Nb}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nf\n\\simeq\n\\frac{k_{\\mathrm B}T}{Nb^2}x\n}\n\\qquad(x\\ll Nb)\n\\]\n\nである。\n\nこれはHookeの法則と同じ形であり、等価ばね定数は、\n\n\\[\n\\boxed{\nk_{\\mathrm{eff}}\n=\n\\frac{k_{\\mathrm B}T}{Nb^2}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ相互作用のない鎖にも張力が生じるの？\"\n鎖を伸ばすと、取り得る折れ曲がり方の数が減ってエントロピーが低下する。系はエントロピーの大きい縮れた状態へ戻ろうとするため、エントロピー起源の復元力が生じる。\n:::\n\n### 温度依存性\n\n\\[\nk_{\\mathrm{eff}}\\propto T.\n\\]\n\nしたがって、理想Gaussian鎖のエントロピー弾性では、温度が高いほど同じ伸びに対する張力が大きくなる。\n\n金属ばねの弾性とは異なる特徴である。\n\n### 試験答案\n\n\\[\nx=(n_+-n_-)b,\n\\qquad\nN=n_++n_-.\n\\]\n\nしたがって、\n\n\\[\nn_\\pm\n=\n\\frac N2\n\\left(\n1\\pm\\frac{x}{Nb}\n\\right).\n\\]\n\n\\[\nW=\\frac{N!}{n_+!n_-!},\n\\qquad\nF=-k_{\\mathrm B}T\\ln W.\n\\]\n\nStirling近似を用いて、\n\n\\[\nf=\\frac{\\partial F}{\\partial x}\n=\n\\frac{k_{\\mathrm B}T}{2b}\n\\ln\n\\frac{1+x/(Nb)}{1-x/(Nb)}.\n\\]\n\n\\(x\\ll Nb\\) では、\n\n\\[\n\\boxed{\nf\\simeq\\frac{k_{\\mathrm B}T}{Nb^2}x\n}.\n\\]\n\n---",
              "major": "4",
              "why": [
                {
                  "title": "なぜ相互作用のない鎖にも張力が生じるの？",
                  "markdown": "鎖を伸ばすと、取り得る折れ曲がり方の数が減ってエントロピーが低下する。系はエントロピーの大きい縮れた状態へ戻ろうとするため、エントロピー起源の復元力が生じる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": true
            },
            {
              "id": "q4-2",
              "label": "Q4-2",
              "title": "DNAの広がりと核内収納",
              "markdown": "### Gaussian鎖としての広がり\n\nセグメント数は、\n\n\\[\nN=6.0\\times10^9.\n\\]\n\nセグメント長は、\n\n\\[\nb=0.34\\,\\mathrm{nm}\n=\n0.34\\times10^{-9}\\,\\mathrm m.\n\\]\n\nGaussian鎖の末端間二乗平均は、\n\n\\[\n\\langle x^2\\rangle=Nb^2.\n\\]\n\nしたがって、\n\n\\[\nR_{\\mathrm{rms}}\n=\n\\sqrt{\\langle x^2\\rangle}\n=\n\\sqrt N\\,b.\n\\]\n\n\\[\n\\sqrt{6.0\\times10^9}\n=\n\\sqrt{60}\\times10^4\n\\simeq\n7.75\\times10^4.\n\\]\n\nよって、\n\n\\[\nR_{\\mathrm{rms}}\n\\simeq\n(7.75\\times10^4)\n(0.34\\times10^{-9})\\,\\mathrm m.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nR_{\\mathrm{rms}}\n\\simeq\n2.6\\times10^{-5}\\,\\mathrm m\n=\n26\\,\\mu\\mathrm m\n}\n\\]\n\nである。\n\n細胞核の半径は、\n\n\\[\n3\\,\\mu\\mathrm m\n\\]\n\nなので、相互作用のないGaussian鎖としての自然な広がりは、核半径の約9倍である。\n\n### 参考：DNAの輪郭長\n\n全セグメントを直線状へ並べた長さは、\n\n\\[\nL=Nb.\n\\]\n\n\\[\n=\n(6.0\\times10^9)(0.34\\,\\mathrm{nm})\n\\simeq2.0\\,\\mathrm m.\n\\]\n\n約2 mのDNAが、数 \\(\\mu\\mathrm m\\) の細胞核へ収まっていることになる。\n\n---\n\n## 自由エネルギーを使った収納の議論\n\n自由エネルギーは、\n\n\\[\n\\boxed{\nF=U-TS\n}\n\\]\n\nである。\n\n### 1. エントロピー\n\nDNAを自然な広がり \\(26\\,\\mu\\mathrm m\\) より小さい半径 \\(3\\,\\mu\\mathrm m\\) の領域へ閉じ込めると、取り得る立体配置の数が減る。\n\nしたがって、\n\n\\[\n\\boxed{\\Delta S<0}\n\\]\n\nである。\n\nその結果、\n\n\\[\n-T\\Delta S>0\n\\]\n\nとなり、エントロピー項は自由エネルギーを上昇させる。\n\nつまり、エントロピーだけを考えれば、DNAは核内へ強く圧縮されることを嫌う。\n\n### 2. 内部エネルギー\n\nDNAと核内タンパク質の間に引力的相互作用があると、巻き付いたり凝縮したりすることで内部エネルギーが下がる。\n\n\\[\n\\boxed{\\Delta U<0}\n\\]\n\n例えばDNAは、正電荷を持つヒストンタンパク質へ巻き付き、ヌクレオソームを形成する。\n\nさらに高次のクロマチン構造へ折り畳まれる。\n\n### 3. 自由エネルギー\n\n収納が自発的に起こるには、\n\n\\[\n\\boxed{\n\\Delta F\n=\n\\Delta U-T\\Delta S<0\n}\n\\]\n\nでなければならない。\n\n圧縮によるエントロピー低下は、\n\n\\[\n-T\\Delta S>0\n\\]\n\nとして不利に働く。\n\nしかし、DNA-ヒストン間の引力などによる内部エネルギーの低下が十分大きければ、\n\n\\[\n|\\Delta U|>|T\\Delta S|\n\\]\n\nとなり、全体として自由エネルギーが低下する。\n\n### 最終結論\n\n\\[\n\\boxed{\n\\text{DNAは、エントロピー損失を上回る内部エネルギー低下によって、核内へ安定に収納される}\n}\n\\]\n\nと考えられる。\n\n:::why title=\"DNAをただ押し込むだけでは安定しないの？\"\n単に狭い空間へ閉じ込めると、DNAの配置の自由度が減り、自由エネルギーが増える。ヒストンへの巻き付きや分子間相互作用によって内部エネルギーを下げる仕組みが必要である。\n:::\n\n# 年度全体の重要ポイント\n\n- 古典調和振動子の分配関数は \\(Z=k_{\\mathrm B}T/(\\hbar\\omega)\\)。\n- 二次形式の自由度1つにつき平均エネルギーは \\(\\frac12k_{\\mathrm B}T\\)。\n- 絶対零度の自由電子気体では、化学ポテンシャルはFermiエネルギーに等しい。\n- 銅のFermi温度は室温より非常に高く、室温でも強く縮退している。\n- Seebeck係数は化学ポテンシャルの温度依存性から導ける。\n- 情報エントロピーは、結果が予測しにくいほど大きい。\n- Bayesの定理は、観測結果から原因の確率を更新する。\n- Gaussian鎖の弾性は、内部エネルギーではなく主としてエントロピーに由来する。\n- DNAの核内収納には、エントロピー損失を補う内部エネルギー低下が必要である。",
              "major": "4",
              "why": [
                {
                  "title": "DNAをただ押し込むだけでは安定しないの？",
                  "markdown": "単に狭い空間へ閉じ込めると、DNAの配置の自由度が減り、自由エネルギーが増える。ヒストンへの巻き付きや分子間相互作用によって内部エネルギーを下げる仕組みが必要である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            }
          ]
        },
        {
          "year": 2011,
          "contentType": "exam",
          "displayLabel": "",
          "teachers": [
            "松本充弘"
          ],
          "status": "completed",
          "sourceFile": "統計熱力学(松本)2011.pdf",
          "sourcePages": [
            1,
            2,
            3,
            4
          ],
          "problemAssets": [
            "/exams/statistical-thermodynamics/2011/page-1.webp",
            "/exams/statistical-thermodynamics/2011/page-2.webp",
            "/exams/statistical-thermodynamics/2011/page-3.webp",
            "/exams/statistical-thermodynamics/2011/page-4.webp"
          ],
          "localPdfUrl": "/pdfs/statistical-thermodynamics/2011.pdf",
          "sourceUrl": "https://drive.google.com/file/d/1tQZJdxghjRSHtWbSVARI_2RCy4Hixwl-/edit",
          "pdfSourceFile": "統計熱力学(松本)2011.pdf",
          "introMarkdown": "> [!NOTE]\n> 試験では問1〜問4から3問を選択する形式だが、この解説では全4問を扱う。Webサイトでは問題文原文と元PDF画像を表示し、解説とは別の領域に配置する。\n\n\n## 1. Boltzmann分布\n\n温度 \\(T\\) の熱浴と平衡にある系が、エネルギー \\(E\\) の状態を取る確率は、\n\n\\[\nP\\propto\n\\exp\\left(\n-\\frac{E}{k_{\\mathrm B}T}\n\\right)\n\\]\n\nである。\n\n正規化定数を求めるために、分配関数\n\n\\[\nZ=\\sum_i\n\\exp\\left(\n-\\frac{E_i}{k_{\\mathrm B}T}\n\\right)\n\\]\n\nまたは連続変数では、\n\n\\[\nZ=\\int\n\\exp\\left(\n-\\frac{E}{k_{\\mathrm B}T}\n\\right)d\\Gamma\n\\]\n\nを使う。\n\n正規化後は、\n\n\\[\n\\boxed{\nP_i=\\frac1Z\n\\exp\\left(\n-\\frac{E_i}{k_{\\mathrm B}T}\n\\right)\n}\n\\]\n\nである。\n\n## 2. 平均エネルギー\n\n離散状態なら、\n\n\\[\n\\langle E\\rangle\n=\n\\sum_iE_iP_i.\n\\]\n\n連続変数なら、\n\n\\[\n\\langle E\\rangle\n=\n\\int EP\\,d\\Gamma.\n\\]\n\n分配関数を用いると、\n\n\\[\n\\boxed{\n\\langle E\\rangle\n=\n-\\frac{\\partial}{\\partial\\beta}\n\\ln Z\n}\n\\]\n\nただし、\n\n\\[\n\\beta=\\frac1{k_{\\mathrm B}T}\n\\]\n\nである。\n\n## 3. Gaussian積分\n\n\\[\n\\int_{-\\infty}^{\\infty}\ne^{-ax^2}dx\n=\n\\sqrt{\\frac{\\pi}{a}}\n\\qquad(a>0)\n\\]\n\n\\[\n\\int_{-\\infty}^{\\infty}\nx^2e^{-ax^2}dx\n=\n\\frac{\\sqrt\\pi}{2a^{3/2}}\n\\]\n\nを使う。\n\n## 4. Maxwell速度分布\n\n熱平衡状態にある質量 \\(m\\) の分子の速度成分分布は、\n\n\\[\nP(v_x,v_y,v_z)\n=\n\\left(\n\\frac{m}{2\\pi k_{\\mathrm B}T}\n\\right)^{3/2}\n\\exp\\left[\n-\\frac{m(v_x^2+v_y^2+v_z^2)}\n{2k_{\\mathrm B}T}\n\\right].\n\\]\n\n速さ \\(v\\) の分布は、\n\n\\[\n\\boxed{\nP(v)\n=\n4\\pi\n\\left(\n\\frac{m}{2\\pi k_{\\mathrm B}T}\n\\right)^{3/2}\nv^2\n\\exp\\left(\n-\\frac{mv^2}{2k_{\\mathrm B}T}\n\\right)\n}\n\\]\n\nである。\n\n## 5. Fermi分布\n\n電子のエネルギー占有確率は、\n\n\\[\n\\boxed{\nf(E)\n=\n\\frac1{\n\\exp[(E-\\mu)/(k_{\\mathrm B}T)]+1\n}\n}\n\\]\n\nである。\n\n\\[\nE-\\mu\\gg k_{\\mathrm B}T\n\\]\n\nなら、\n\n\\[\n\\boxed{\nf(E)\n\\simeq\n\\exp\\left[\n-\\frac{E-\\mu}{k_{\\mathrm B}T}\n\\right]\n}\n\\]\n\nとBoltzmann分布で近似できる。\n\n## 6. 情報エントロピー\n\n連続確率密度 \\(p(x)\\) の情報エントロピーを、\n\n\\[\n\\boxed{\nS=-\\int p(x)\\ln p(x)\\,dx\n}\n\\]\n\nと定義する。\n\n---",
          "questions": [
            {
              "id": "q1-1",
              "label": "Q1-1",
              "title": "古典調和振動子の確率分布",
              "markdown": "### 分配関数\n\nエネルギーを、\n\n\\[\nE(x,p)\n=\n\\frac12kx^2+\\frac{p^2}{2m}\n\\]\n\nとする。\n\n正規化定数を求めるため、\n\n\\[\nZ_c\n=\n\\int_{-\\infty}^{\\infty}dx\n\\int_{-\\infty}^{\\infty}dp\\,\n\\exp\\left[\n-\\frac{\nkx^2/2+p^2/(2m)\n}{\nk_{\\mathrm B}T\n}\n\\right]\n\\]\n\nを計算する。\n\nxとpの積に分離できる。\n\n\\[\nZ_c\n=\n\\left[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{kx^2}{2k_{\\mathrm B}T}\n\\right)dx\n\\right]\n\\left[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{p^2}{2mk_{\\mathrm B}T}\n\\right)dp\n\\right].\n\\]\n\nGaussian積分より、\n\n\\[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{kx^2}{2k_{\\mathrm B}T}\n\\right)dx\n=\n\\sqrt{\n\\frac{2\\pi k_{\\mathrm B}T}{k}\n}.\n\\]\n\n\\[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{p^2}{2mk_{\\mathrm B}T}\n\\right)dp\n=\n\\sqrt{\n2\\pi mk_{\\mathrm B}T\n}.\n\\]\n\nしたがって、\n\n\\[\nZ_c\n=\n2\\pi k_{\\mathrm B}T\n\\sqrt{\\frac{m}{k}}.\n\\]\n\n\\[\n\\omega=\\sqrt{\\frac{k}{m}}\n\\]\n\nなので、\n\n\\[\n\\boxed{\nZ_c=\\frac{2\\pi k_{\\mathrm B}T}{\\omega}\n}\n\\]\n\nである。\n\n### 最終解答\n\n\\[\n\\boxed{\nP_c(x,p)\n=\n\\frac{\\omega}{2\\pi k_{\\mathrm B}T}\n\\exp\\left[\n-\\frac{\nkx^2/2+p^2/(2m)\n}{\nk_{\\mathrm B}T\n}\n\\right]\n}\n\\]\n\nである。\n\n:::why title=\"なぜ x と p の積分を別々にできるの？\"\n指数関数の中でエネルギーが \\(E_x(x)+E_p(p)\\) の和になっているため、\\(e^{-(E_x+E_p)/(kT)}=e^{-E_x/(kT)}e^{-E_p/(kT)}\\) と分離できる。\n:::\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ x と p の積分を別々にできるの？",
                  "markdown": "指数関数の中でエネルギーが \\(E_x(x)+E_p(p)\\) の和になっているため、\\(e^{-(E_x+E_p)/(kT)}=e^{-E_x/(kT)}e^{-E_p/(kT)}\\) と分離できる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-2",
              "label": "Q1-2",
              "title": "古典調和振動子の平均エネルギー",
              "markdown": "### 等分配則による方法\n\nエネルギーは、\n\n\\[\nE=\n\\frac12kx^2+\\frac{p^2}{2m}\n\\]\n\nであり、2つの独立した二次形式からなる。\n\n古典統計力学のエネルギー等分配則より、1つの二次形式につき、\n\n\\[\n\\frac12k_{\\mathrm B}T\n\\]\n\nが平均エネルギーとして割り当てられる。\n\nしたがって、\n\n\\[\n\\left\\langle\\frac12kx^2\\right\\rangle\n=\n\\frac12k_{\\mathrm B}T\n\\]\n\n\\[\n\\left\\langle\\frac{p^2}{2m}\\right\\rangle\n=\n\\frac12k_{\\mathrm B}T.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nE_c=k_{\\mathrm B}T\n}\n\\]\n\nである。\n\n### 分配関数による確認\n\n\\[\n\\beta=\\frac1{k_{\\mathrm B}T}\n\\]\n\nとすると、\n\n\\[\nZ_c\n=\n\\frac{2\\pi}{\\beta\\omega}.\n\\]\n\n\\[\nE_c\n=\n-\\frac{\\partial}{\\partial\\beta}\n\\ln Z_c\n=\n-\\frac{\\partial}{\\partial\\beta}\n\\left[\n\\ln\\left(\\frac{2\\pi}{\\omega}\\right)\n-\\ln\\beta\n\\right].\n\\]\n\n\\[\nE_c=\\frac1\\beta=k_{\\mathrm B}T.\n\\]\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-3",
              "label": "Q1-3",
              "title": "量子調和振動子の確率分布",
              "markdown": "\\[\nP_q(n)\n=\nC\n\\exp\\left(\n-\\frac{n\\hbar\\omega}{k_{\\mathrm B}T}\n\\right)\n\\]\n\nと置く。\n\n便利のため、\n\n\\[\nq\n=\n\\exp\\left(\n-\\frac{\\hbar\\omega}{k_{\\mathrm B}T}\n\\right)\n\\]\n\nと定義する。\n\n\\[\n0<q<1\n\\]\n\nである。\n\n正規化条件は、\n\n\\[\n\\sum_{n=0}^{\\infty}P_q(n)=1.\n\\]\n\nしたがって、\n\n\\[\nC\\sum_{n=0}^{\\infty}q^n=1.\n\\]\n\n無限等比級数より、\n\n\\[\n\\sum_{n=0}^{\\infty}q^n\n=\n\\frac1{1-q}.\n\\]\n\nよって、\n\n\\[\nC=1-q.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nP_q(n)\n=\n\\left[\n1-\n\\exp\\left(\n-\\frac{\\hbar\\omega}{k_{\\mathrm B}T}\n\\right)\n\\right]\n\\exp\\left(\n-\\frac{n\\hbar\\omega}{k_{\\mathrm B}T}\n\\right)\n}\n\\]\n\nである。\n\n:::why title=\"なぜ n=0 から足すの？\"\nゼロ点エネルギーをエネルギーの原点へ移しているが、基底状態そのものは残る。基底状態は \\(n=0\\)、第1励起状態は \\(n=1\\) である。\n:::\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ n=0 から足すの？",
                  "markdown": "ゼロ点エネルギーをエネルギーの原点へ移しているが、基底状態そのものは残る。基底状態は \\(n=0\\)、第1励起状態は \\(n=1\\) である。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-4",
              "label": "Q1-4",
              "title": "量子調和振動子の平均エネルギー",
              "markdown": "\\[\nE_q\n=\n\\sum_{n=0}^{\\infty}\nn\\hbar\\omega P_q(n).\n\\]\n\n\\[\n=\n\\hbar\\omega(1-q)\n\\sum_{n=0}^{\\infty}nq^n.\n\\]\n\n等比級数をqで微分すると、\n\n\\[\n\\sum_{n=0}^{\\infty}nq^n\n=\n\\frac{q}{(1-q)^2}.\n\\]\n\nしたがって、\n\n\\[\nE_q\n=\n\\hbar\\omega(1-q)\n\\frac{q}{(1-q)^2}.\n\\]\n\n\\[\n=\n\\hbar\\omega\n\\frac{q}{1-q}.\n\\]\n\n\\(q=e^{-\\hbar\\omega/(k_{\\mathrm B}T)}\\) を戻す。\n\n### 最終解答\n\n\\[\n\\boxed{\nE_q\n=\n\\frac{\\hbar\\omega}{\n\\exp[\n\\hbar\\omega/(k_{\\mathrm B}T)\n]-1\n}\n}\n\\]\n\nである。\n\n### 補足\n\nゼロ点エネルギー \\(\\hbar\\omega/2\\) を含める通常の量子調和振動子では、\n\n\\[\n\\langle E\\rangle\n=\n\\frac{\\hbar\\omega}{2}\n+\n\\frac{\\hbar\\omega}{\ne^{\\hbar\\omega/(k_{\\mathrm B}T)}-1\n}\n\\]\n\nとなる。\n\nこの問題ではゼロ点エネルギーを原点へ移しているため、第1項はない。\n\n---",
              "major": "1",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q1-5",
              "label": "Q1-5",
              "title": "古典極限",
              "markdown": "\\[\nx\n=\n\\frac{\\hbar\\omega}{k_{\\mathrm B}T}\n\\]\n\nと置く。\n\n\\[\n\\hbar\\to0\n\\]\n\nでは、\n\n\\[\nx\\to0.\n\\]\n\n指数関数を展開すると、\n\n\\[\ne^x\n=\n1+x+\\frac{x^2}{2}+\\cdots.\n\\]\n\nしたがって、\n\n\\[\ne^x-1\n\\simeq x.\n\\]\n\nよって、\n\n\\[\nE_q\n=\n\\frac{\\hbar\\omega}{e^x-1}\n\\simeq\n\\frac{\\hbar\\omega}{x}.\n\\]\n\n\\[\n=\n\\frac{\\hbar\\omega}{\n\\hbar\\omega/(k_{\\mathrm B}T)\n}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\lim_{\\hbar\\to0}E_q\n=\nk_{\\mathrm B}T\n=\nE_c\n}\n\\]\n\nである。\n\n:::why title=\"なぜ \\(\\hbar\\to0\\) が古典極限なの？\"\n量子化されたエネルギー間隔は \\(\\hbar\\omega\\) である。\\(\\hbar\\omega\\) が熱エネルギー \\(k_{\\mathrm B}T\\) に比べて十分小さくなると、離散準位の間隔が事実上見えなくなり、連続的な古典系に近づく。\n:::\n\n---",
              "major": "1",
              "why": [
                {
                  "title": "なぜ \\(\\hbar\\to0\\) が古典極限なの？",
                  "markdown": "量子化されたエネルギー間隔は \\(\\hbar\\omega\\) である。\\(\\hbar\\omega\\) が熱エネルギー \\(k_{\\mathrm B}T\\) に比べて十分小さくなると、離散準位の間隔が事実上見えなくなり、連続的な古典系に近づく。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-1",
              "label": "Q2-1",
              "title": "エネルギー等分配則",
              "markdown": "### 正規化された速度分布\n\n3方向は独立なので、\n\n\\[\n\\boxed{\nP(v_x,v_y,v_z)\n=\n\\left(\n\\frac{m}{2\\pi k_{\\mathrm B}T}\n\\right)^{3/2}\n\\exp\\left[\n-\\frac{\nm(v_x^2+v_y^2+v_z^2)\n}{\n2k_{\\mathrm B}T\n}\n\\right]\n}\n\\]\n\nである。\n\n### 1方向の平均二乗速度\n\nx方向について、\n\n\\[\n\\langle v_x^2\\rangle\n=\n\\frac{\n\\int_{-\\infty}^{\\infty}\nv_x^2\ne^{-mv_x^2/(2k_{\\mathrm B}T)}dv_x\n}{\n\\int_{-\\infty}^{\\infty}\ne^{-mv_x^2/(2k_{\\mathrm B}T)}dv_x\n}.\n\\]\n\nGaussian積分を使うと、\n\n\\[\n\\boxed{\n\\langle v_x^2\\rangle\n=\n\\frac{k_{\\mathrm B}T}{m}\n}\n\\]\n\nである。\n\n対称性から、\n\n\\[\n\\langle v_y^2\\rangle\n=\n\\langle v_z^2\\rangle\n=\n\\frac{k_{\\mathrm B}T}{m}.\n\\]\n\nしたがって、\n\n\\[\n\\langle v^2\\rangle\n=\n\\langle v_x^2+v_y^2+v_z^2\\rangle\n=\n\\frac{3k_{\\mathrm B}T}{m}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\left\\langle\n\\frac12mv^2\n\\right\\rangle\n=\n\\frac12m\n\\frac{3k_{\\mathrm B}T}{m}\n=\n\\frac32k_{\\mathrm B}T\n}\n\\]\n\nである。\n\n:::why title=\"なぜ1方向あたり \\(k_{\\mathrm B}T/2\\) になるの？\"\n運動エネルギーは \\(mv_x^2/2\\)、\\(mv_y^2/2\\)、\\(mv_z^2/2\\) という3つの独立な二次形式の和である。等分配則により各項へ \\(k_{\\mathrm B}T/2\\) が割り当てられる。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ1方向あたり \\(k_{\\mathrm B}T/2\\) になるの？",
                  "markdown": "運動エネルギーは \\(mv_x^2/2\\)、\\(mv_y^2/2\\)、\\(mv_z^2/2\\) という3つの独立な二次形式の和である。等分配則により各項へ \\(k_{\\mathrm B}T/2\\) が割り当てられる。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-2",
              "label": "Q2-2",
              "title": "酸素分子の根平均二乗速さ",
              "markdown": "酸素分子のモル質量は、\n\n\\[\nM=32\\,\\mathrm{g/mol}\n=\n3.2\\times10^{-2}\\,\\mathrm{kg/mol}.\n\\]\n\n1分子の質量は、\n\n\\[\nm=\\frac{M}{N_{\\mathrm A}}.\n\\]\n\n\\[\n=\n\\frac{3.2\\times10^{-2}}\n{6.02\\times10^{23}}\n\\simeq\n5.32\\times10^{-26}\\,\\mathrm{kg}.\n\\]\n\n根平均二乗速さは、\n\n\\[\nv_{\\mathrm{rms}}\n=\n\\sqrt{\\langle v^2\\rangle}\n=\n\\sqrt{\n\\frac{3k_{\\mathrm B}T}{m}\n}.\n\\]\n\n\\(T=300\\,\\mathrm K\\) を代入する。\n\n\\[\nv_{\\mathrm{rms}}\n=\n\\sqrt{\n\\frac{\n3(1.38\\times10^{-23})(300)\n}{\n5.32\\times10^{-26}\n}\n}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nv_{\\mathrm{rms}}\n\\simeq\n4.8\\times10^2\\,\\mathrm{m/s}\n}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\nv_{\\mathrm{rms}}\n\\simeq\n480\\,\\mathrm{m/s}\n}\n\\]\n\nである。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-3",
              "label": "Q2-3",
              "title": "Maxwell速度分布と最頻速さ",
              "markdown": "### Q2-3.1 速さの分布\n\n速度空間の球座標では、\n\n\\[\ndv_x\\,dv_y\\,dv_z\n=\nv^2\\sin\\theta\\,dv\\,d\\theta\\,d\\phi.\n\\]\n\nしたがって、速さが \\(v\\) から \\(v+dv\\) の範囲にある確率は、半径 \\(v\\)、厚さ \\(dv\\) の球殻を積分して求める。\n\n\\[\nP(v)dv\n=\n\\left(\n\\frac{m}{2\\pi k_{\\mathrm B}T}\n\\right)^{3/2}\ne^{-mv^2/(2k_{\\mathrm B}T)}\nv^2dv\n\\int_0^\\pi\\sin\\theta\\,d\\theta\n\\int_0^{2\\pi}d\\phi.\n\\]\n\n角度積分は、\n\n\\[\n\\int_0^\\pi\\sin\\theta\\,d\\theta=2\n\\]\n\n\\[\n\\int_0^{2\\pi}d\\phi=2\\pi.\n\\]\n\nよって、\n\n### 最終解答\n\n\\[\n\\boxed{\nP(v)\n=\n4\\pi\n\\left(\n\\frac{m}{2\\pi k_{\\mathrm B}T}\n\\right)^{3/2}\nv^2\n\\exp\\left(\n-\\frac{mv^2}{2k_{\\mathrm B}T}\n\\right)\n}\n\\qquad(v\\ge0)\n\\]\n\nである。\n\n:::why title=\"なぜ \\(v^2\\) が付くの？\"\n同じ速さ \\(v\\) を持つ速度ベクトルは、速度空間で半径 \\(v\\) の球面上に多数存在する。球殻の面積が \\(4\\pi v^2\\) に比例するため、速さの分布には \\(v^2\\) が付く。\n:::\n\n### Q2-3.2 最頻速さ\n\n定数部分を除いて、\n\n\\[\nP(v)\\propto\nv^2e^{-av^2}\n\\]\n\nただし、\n\n\\[\na=\\frac{m}{2k_{\\mathrm B}T}.\n\\]\n\n微分する。\n\n\\[\n\\frac{d}{dv}\n\\left(\nv^2e^{-av^2}\n\\right)\n=\n2ve^{-av^2}\n-\n2av^3e^{-av^2}.\n\\]\n\n\\[\n=\n2ve^{-av^2}\n(1-av^2).\n\\]\n\n\\(v>0\\) の最大点は、\n\n\\[\n1-av^2=0.\n\\]\n\nしたがって、\n\n\\[\nv_m^2=\\frac1a\n=\n\\frac{2k_{\\mathrm B}T}{m}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nv_m\n=\n\\sqrt{\n\\frac{2k_{\\mathrm B}T}{m}\n}\n}\n\\]\n\nである。\n\n### Q2-3.3 酸素分子での値\n\n\\[\nv_m\n=\n\\sqrt{\n\\frac{\n2(1.38\\times10^{-23})(300)\n}{\n5.32\\times10^{-26}\n}\n}.\n\\]\n\n\\[\n\\boxed{\nv_m\n\\simeq\n3.9\\times10^2\\,\\mathrm{m/s}\n}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\nv_m\\simeq395\\,\\mathrm{m/s}\n}\n\\]\n\nである。\n\n根平均二乗速さとの比は、\n\n\\[\n\\frac{v_m}{v_{\\mathrm{rms}}}\n=\n\\sqrt{\\frac23}\n\\simeq0.816.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nv_m<v_{\\mathrm{rms}}\n}\n\\]\n\nである。\n\nこれは、速い分子が二乗平均へ強く寄与するためである。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ \\(v^2\\) が付くの？",
                  "markdown": "同じ速さ \\(v\\) を持つ速度ベクトルは、速度空間で半径 \\(v\\) の球面上に多数存在する。球殻の面積が \\(4\\pi v^2\\) に比例するため、速さの分布には \\(v^2\\) が付く。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-4",
              "label": "Q2-4",
              "title": "巨視的流れと平均運動エネルギー",
              "markdown": "x方向の熱運動速度を、\n\n\\[\nu_x=v_x-V_0\n\\]\n\nと置く。\n\n式 (2-4) は \\(u_x\\) について中心0のGaussian分布なので、\n\n\\[\n\\langle u_x\\rangle=0\n\\]\n\n\\[\n\\langle u_x^2\\rangle\n=\n\\frac{k_{\\mathrm B}T}{m}.\n\\]\n\n\\[\nv_x=V_0+u_x\n\\]\n\nより、\n\n\\[\n\\langle v_x^2\\rangle\n=\n\\langle(V_0+u_x)^2\\rangle.\n\\]\n\n\\[\n=\nV_0^2\n+\n2V_0\\langle u_x\\rangle\n+\n\\langle u_x^2\\rangle.\n\\]\n\n\\[\n=\nV_0^2+\\frac{k_{\\mathrm B}T}{m}.\n\\]\n\nしたがって、\n\n### 最終解答\n\n\\[\n\\boxed{\n\\left\\langle\n\\frac12mv_x^2\n\\right\\rangle\n=\n\\frac12mV_0^2\n+\n\\frac12k_{\\mathrm B}T\n}\n\\]\n\nである。\n\n通常の等分配則の値、\n\n\\[\n\\frac12k_{\\mathrm B}T\n\\]\n\nに、巨視的流れの運動エネルギー、\n\n\\[\n\\frac12mV_0^2\n\\]\n\nが追加される。\n\n### 正確な解釈\n\n熱運動を流れに対する相対速度で表せば、\n\n\\[\n\\left\\langle\n\\frac12m(v_x-V_0)^2\n\\right\\rangle\n=\n\\frac12k_{\\mathrm B}T\n\\]\n\nであり、熱運動部分については等分配則は成立している。\n\n「成立しなくなる」のは、実験室系での全速度 \\(v_x\\) に対し、単純に \\(\\frac12k_{\\mathrm B}T\\) と置けないという意味である。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q2-5",
              "label": "Q2-5",
              "title": "飛行中の温度測定誤差",
              "markdown": "### 流れを含む平均運動エネルギー\n\n3方向の平均運動エネルギーは、\n\n\\[\n\\left\\langle\n\\frac12mv^2\n\\right\\rangle\n=\n\\frac32k_{\\mathrm B}T\n+\n\\frac12mV_0^2.\n\\]\n\n温度計がこの全運動エネルギーを平衡温度へ換算すると仮定する。\n\n表示温度を \\(T_{\\mathrm{meas}}\\) とすると、\n\n\\[\n\\frac32k_{\\mathrm B}T_{\\mathrm{meas}}\n=\n\\frac32k_{\\mathrm B}T\n+\n\\frac12mV_0^2.\n\\]\n\nしたがって、\n\n\\[\nT_{\\mathrm{meas}}\n=\nT+\n\\frac{mV_0^2}{3k_{\\mathrm B}}.\n\\]\n\n温度誤差は、\n\n\\[\n\\boxed{\n\\Delta T\n=\n\\frac{mV_0^2}{3k_{\\mathrm B}}\n}\n\\]\n\nである。\n\n### 数値計算\n\n\\[\nV_0=1000\\,\\mathrm{km/h}\n=\n\\frac{1000\\times10^3}{3600}\\,\\mathrm{m/s}\n\\simeq278\\,\\mathrm{m/s}.\n\\]\n\n\\[\nm\\simeq5.32\\times10^{-26}\\,\\mathrm{kg}.\n\\]\n\nしたがって、\n\n\\[\n\\Delta T\n=\n\\frac{\n(5.32\\times10^{-26})(278)^2\n}{\n3(1.38\\times10^{-23})\n}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\Delta T\\simeq9.9\\times10^1\\,\\mathrm K\n}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\n\\Delta T\\simeq99\\,\\mathrm K\n}\n\\]\n\nである。\n\nしたがって表示温度は、\n\n\\[\n\\boxed{\nT_{\\mathrm{meas}}\n\\simeq399\\,\\mathrm K\n}\n\\]\n\nとなる。\n\n> [!WARNING]\n> これは、流れの巨視的運動エネルギーがすべて温度計の熱エネルギーへ換算されるという単純化したモデルである。実際の航空機の温度測定では、圧縮、熱伝達、回復係数なども考慮する。\n\n---",
              "major": "2",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-1",
              "label": "Q3-1",
              "title": "シリコンのバンドギャップの温度換算",
              "markdown": "エネルギーと温度は、\n\n\\[\nE=k_{\\mathrm B}T\n\\]\n\nで換算する。\n\n\\[\n\\Delta E_g=2\\,\\mathrm{eV}.\n\\]\n\n\\[\n1\\,\\mathrm{eV}\n=\n1.60\\times10^{-19}\\,\\mathrm J.\n\\]\n\nしたがって、\n\n\\[\n\\Delta E_g\n=\n3.20\\times10^{-19}\\,\\mathrm J.\n\\]\n\n対応する温度は、\n\n\\[\nT_g\n=\n\\frac{\\Delta E_g}{k_{\\mathrm B}}.\n\\]\n\n\\[\n=\n\\frac{\n3.20\\times10^{-19}\n}{\n1.38\\times10^{-23}\n}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nT_g\\simeq2.3\\times10^4\\,\\mathrm K\n}\n\\]\n\nである。\n\n:::why title=\"バンドギャップが大きいと熱励起が起こりにくいの？\"\n室温の熱エネルギーは \\(k_{\\mathrm B}T\\simeq0.026\\,\\mathrm{eV}\\) しかない。2 eVはその約77倍なので、熱だけで電子が伝導帯へ上がる確率は指数関数的に小さい。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "バンドギャップが大きいと熱励起が起こりにくいの？",
                  "markdown": "室温の熱エネルギーは \\(k_{\\mathrm B}T\\simeq0.026\\,\\mathrm{eV}\\) しかない。2 eVはその約77倍なので、熱だけで電子が伝導帯へ上がる確率は指数関数的に小さい。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-2",
              "label": "Q3-2",
              "title": "真性シリコンの励起電子密度",
              "markdown": "### Fermi分布のBoltzmann近似\n\n真性半導体では、\n\n\\[\nE_c-\\mu\n=\n\\frac{\\Delta E_g}{2}\n=\n1.0\\,\\mathrm{eV}.\n\\]\n\n\\[\nE-\\mu\n=\n(E-E_c)+(E_c-\\mu).\n\\]\n\nBoltzmann近似を使うと、\n\n\\[\nf(E)\n\\simeq\n\\exp\\left[\n-\\frac{E-E_c}{k_{\\mathrm B}T}\n\\right]\n\\exp\\left[\n-\\frac{E_c-\\mu}{k_{\\mathrm B}T}\n\\right].\n\\]\n\n### 積分\n\n\\[\n\\frac{N_c}{V}\n=\n\\frac{\n2^{7/2}\\pi m_e^{3/2}\n}{\nh^3\n}\n\\exp\\left[\n-\\frac{E_c-\\mu}{k_{\\mathrm B}T}\n\\right]\n\\int_{E_c}^{\\infty}\n\\sqrt{E-E_c}\n\\exp\\left[\n-\\frac{E-E_c}{k_{\\mathrm B}T}\n\\right]dE.\n\\]\n\n\\[\n\\varepsilon=E-E_c\n\\]\n\nと置く。\n\n\\[\n\\frac{N_c}{V}\n=\n\\frac{\n2^{7/2}\\pi m_e^{3/2}\n}{\nh^3\n}\ne^{-(E_c-\\mu)/(k_{\\mathrm B}T)}\n\\int_0^\\infty\n\\varepsilon^{1/2}\ne^{-\\varepsilon/(k_{\\mathrm B}T)}\nd\\varepsilon.\n\\]\n\n積分は、\n\n\\[\n\\int_0^\\infty\n\\varepsilon^{1/2}\ne^{-\\varepsilon/(k_{\\mathrm B}T)}\nd\\varepsilon\n=\n\\frac{\\sqrt\\pi}{2}\n(k_{\\mathrm B}T)^{3/2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{N_c}{V}\n=\n\\frac{\n2^{5/2}\\pi^{3/2}m_e^{3/2}\n}{\nh^3\n}\n(k_{\\mathrm B}T)^{3/2}\n\\exp\\left[\n-\\frac{E_c-\\mu}{k_{\\mathrm B}T}\n\\right]\n}\n\\]\n\nである。\n\nこれは通常、\n\n\\[\n\\frac{N_c}{V}\n=\n2\n\\left(\n\\frac{2\\pi m_ek_{\\mathrm B}T}{h^2}\n\\right)^{3/2}\n\\exp\\left[\n-\\frac{E_c-\\mu}{k_{\\mathrm B}T}\n\\right]\n\\]\n\nとも書かれる。\n\n### 数値計算\n\n\\[\nT=300\\,\\mathrm K\n\\]\n\n\\[\nE_c-\\mu=1.0\\,\\mathrm{eV}\n=\n1.60\\times10^{-19}\\,\\mathrm J.\n\\]\n\n与えられた定数を代入すると、\n\n\\[\n\\boxed{\n\\frac{N_c}{V}\n\\simeq\n4.1\\times10^8\\,\\mathrm{m^{-3}}\n}\n\\]\n\nとなる。\n\ncm単位では、\n\n\\[\n\\boxed{\n\\frac{N_c}{V}\n\\simeq\n4.1\\times10^2\\,\\mathrm{cm^{-3}}\n}\n\\]\n\nである。\n\n### シリコン原子密度\n\n密度は、\n\n\\[\n\\rho_{\\mathrm{Si}}\n=\n2.33\\,\\mathrm{g/cm^3}\n=\n2.33\\times10^3\\,\\mathrm{kg/m^3}.\n\\]\n\nモル質量は、\n\n\\[\nM_{\\mathrm{Si}}\n=\n28.1\\,\\mathrm{g/mol}\n=\n2.81\\times10^{-2}\\,\\mathrm{kg/mol}.\n\\]\n\n原子数密度は、\n\n\\[\nn_{\\mathrm{Si}}\n=\n\\frac{\\rho_{\\mathrm{Si}}}{M_{\\mathrm{Si}}}\nN_{\\mathrm A}.\n\\]\n\n\\[\n\\simeq\n\\frac{\n2.33\\times10^3\n}{\n2.81\\times10^{-2}\n}\n(6.02\\times10^{23}).\n\\]\n\n\\[\n\\boxed{\nn_{\\mathrm{Si}}\n\\simeq\n5.0\\times10^{28}\\,\\mathrm{m^{-3}}\n}\n\\]\n\nである。\n\n最外殻電子は1原子あたり4個なので、その数密度は、\n\n\\[\n4n_{\\mathrm{Si}}\n\\simeq\n2.0\\times10^{29}\\,\\mathrm{m^{-3}}.\n\\]\n\n### 励起電子の割合\n\n\\[\n\\frac{\nN_c/V\n}{\n4n_{\\mathrm{Si}}\n}\n\\simeq\n\\frac{\n4.1\\times10^8\n}{\n2.0\\times10^{29}\n}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\text{励起割合}\n\\simeq\n2.1\\times10^{-21}\n}\n\\]\n\nである。\n\n### 注意\n\nこの結果が実際のシリコンより極端に小さいのは、問題のモデルが、\n\n- バンドギャップを2 eV\n- 有効質量ではなく自由電子質量\n\nとして単純化しているためである。\n\n---",
              "major": "3",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q3-3",
              "label": "Q3-3",
              "title": "リンドープによる励起電子増加",
              "markdown": "### 化学ポテンシャル\n\n\\[\nE_c-E_d=0.2\\,\\mathrm{eV}.\n\\]\n\n\\(\\mu\\) が \\(E_d\\) と \\(E_c\\) の中央にあるので、\n\n\\[\nE_c-\\mu=0.1\\,\\mathrm{eV}.\n\\]\n\n前問と同じ式を使う。\n\n\\[\n\\frac{N_c^{\\mathrm{dope}}}{V}\n=\n2\n\\left(\n\\frac{2\\pi m_ek_{\\mathrm B}T}{h^2}\n\\right)^{3/2}\n\\exp\\left[\n-\\frac{0.1\\,\\mathrm{eV}}{k_{\\mathrm B}T}\n\\right].\n\\]\n\n\\(T=300\\,\\mathrm K\\) を代入すると、\n\n### 励起電子密度\n\n\\[\n\\boxed{\n\\frac{N_c^{\\mathrm{dope}}}{V}\n\\simeq\n5.2\\times10^{23}\\,\\mathrm{m^{-3}}\n}\n\\]\n\nである。\n\ncm単位では、\n\n\\[\n\\boxed{\n\\frac{N_c^{\\mathrm{dope}}}{V}\n\\simeq\n5.2\\times10^{17}\\,\\mathrm{cm^{-3}}\n}\n\\]\n\nである。\n\n### 増加倍率\n\n前問の真性シリコンに対する比は、\n\n\\[\n\\frac{\nN_c^{\\mathrm{dope}}\n}{\nN_c^{\\mathrm{pure}}\n}\n=\n\\exp\\left[\n\\frac{\n(1.0-0.1)\\,\\mathrm{eV}\n}{\nk_{\\mathrm B}T\n}\n\\right].\n\\]\n\n\\[\n=\n\\exp\\left[\n\\frac{\n0.9(1.60\\times10^{-19})\n}{\n(1.38\\times10^{-23})(300)\n}\n\\right].\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\frac{\nN_c^{\\mathrm{dope}}\n}{\nN_c^{\\mathrm{pure}}\n}\n\\simeq\n1.3\\times10^{15}\n}\n\\]\n\nである。\n\nすなわち、単純モデルでは、\n\n\\[\n\\boxed{\n\\text{励起電子数は約 }10^{15}\\text{ 倍に増える}\n}\n\\]\n\nと見積もられる。\n\n:::why title=\"少量のドープで電子数が非常に大きく増えるの？\"\n励起確率は \\(\\exp[-(E_c-\\mu)/(kT)]\\) に比例する。化学ポテンシャルが伝導帯へ近づくと、指数の中のエネルギー差が大きく減り、電子数が指数関数的に増える。\n:::\n\n---",
              "major": "3",
              "why": [
                {
                  "title": "少量のドープで電子数が非常に大きく増えるの？",
                  "markdown": "励起確率は \\(\\exp[-(E_c-\\mu)/(kT)]\\) に比例する。化学ポテンシャルが伝導帯へ近づくと、指数の中のエネルギー差が大きく減り、電子数が指数関数的に増える。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q4-1",
              "label": "Q4-1",
              "title": "拡散方程式の確率保存",
              "markdown": "全確率を、\n\n\\[\nN(t)\n=\n\\int_{-\\infty}^{\\infty}\np(x,t)dx\n\\]\n\nと置く。\n\n時間微分する。\n\n\\[\n\\frac{dN}{dt}\n=\n\\int_{-\\infty}^{\\infty}\n\\frac{\\partial p}{\\partial t}dx.\n\\]\n\n拡散方程式、\n\n\\[\n\\frac{\\partial p}{\\partial t}\n=\nD\\frac{\\partial^2p}{\\partial x^2}\n\\]\n\nを代入する。\n\n\\[\n\\frac{dN}{dt}\n=\nD\n\\int_{-\\infty}^{\\infty}\n\\frac{\\partial^2p}{\\partial x^2}dx.\n\\]\n\n積分すると、\n\n\\[\n\\frac{dN}{dt}\n=\nD\n\\left[\n\\frac{\\partial p}{\\partial x}\n\\right]_{-\\infty}^{\\infty}.\n\\]\n\n無限遠で確率密度とその勾配が十分速く0へ近づくと仮定すれば、\n\n\\[\n\\left.\n\\frac{\\partial p}{\\partial x}\n\\right|_{x=\\pm\\infty}\n=0.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\n\\frac{d}{dt}\n\\int_{-\\infty}^{\\infty}\np(x,t)dx\n=0\n}\n\\]\n\nである。\n\n:::why title=\"確率保存は拡散方程式のどこに含まれているの？\"\n拡散方程式は連続の式 \\(\\partial_tp+\\partial_xJ=0\\) と書け、確率流は \\(J=-D\\partial_xp\\) である。無限遠から確率が出入りしなければ、全確率は変わらない。\n:::\n\n---",
              "major": "4",
              "why": [
                {
                  "title": "確率保存は拡散方程式のどこに含まれているの？",
                  "markdown": "拡散方程式は連続の式 \\(\\partial_tp+\\partial_xJ=0\\) と書け、確率流は \\(J=-D\\partial_xp\\) である。無限遠から確率が出入りしなければ、全確率は変わらない。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q4-2",
              "label": "Q4-2",
              "title": "ガウス分布解の確認",
              "markdown": "\\[\np(x,t)\n=\n\\frac1{\\sqrt{4\\pi Dt}}\n\\exp\\left(\n-\\frac{x^2}{4Dt}\n\\right).\n\\]\n\n### 拡散方程式を満たすことの確認\n\n対数微分を使うと、\n\n\\[\n\\ln p\n=\n-\\frac12\\ln(4\\pi Dt)\n-\\frac{x^2}{4Dt}.\n\\]\n\n時間微分は、\n\n\\[\n\\frac1p\n\\frac{\\partial p}{\\partial t}\n=\n-\\frac1{2t}\n+\n\\frac{x^2}{4Dt^2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{\\partial p}{\\partial t}\n=\np\n\\left(\n-\\frac1{2t}\n+\n\\frac{x^2}{4Dt^2}\n\\right)\n}\n\\]\n\nである。\n\nx微分は、\n\n\\[\n\\frac{\\partial p}{\\partial x}\n=\n-\\frac{x}{2Dt}p.\n\\]\n\nもう一度微分して、\n\n\\[\n\\frac{\\partial^2p}{\\partial x^2}\n=\n-\\frac1{2Dt}p\n+\n\\frac{x^2}{4D^2t^2}p.\n\\]\n\nDを掛ける。\n\n\\[\nD\\frac{\\partial^2p}{\\partial x^2}\n=\np\n\\left(\n-\\frac1{2t}\n+\n\\frac{x^2}{4Dt^2}\n\\right).\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{\\partial p}{\\partial t}\n=\nD\\frac{\\partial^2p}{\\partial x^2}\n}\n\\]\n\nである。\n\n### 規格化\n\n\\[\n\\int_{-\\infty}^{\\infty}\np(x,t)dx\n=\n\\frac1{\\sqrt{4\\pi Dt}}\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{x^2}{4Dt}\n\\right)dx.\n\\]\n\nGaussian積分より、\n\n\\[\n\\int_{-\\infty}^{\\infty}\n\\exp\\left(\n-\\frac{x^2}{4Dt}\n\\right)dx\n=\n\\sqrt{4\\pi Dt}.\n\\]\n\nしたがって、\n\n### 最終解答\n\n\\[\n\\boxed{\n\\int_{-\\infty}^{\\infty}\np(x,t)dx=1\n}\n\\]\n\nである。\n\n---",
              "major": "4",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q4-3",
              "label": "Q4-3",
              "title": "初期条件",
              "markdown": "\\(t\\to0+0\\) では、\n\n- 分布の幅は0へ近づく\n- \\(x\\ne0\\) では \\(p(x,t)\\to0\\)\n- 全積分は常に1\n\nである。\n\nしたがって、分布は原点へ集中する。\n\n### 最終解答\n\n\\[\n\\boxed{\np(x,0)=\\delta(x)\n}\n\\]\n\nに対応する。\n\n物理的には、時刻0に確率またはインクがすべて、\n\n\\[\n\\boxed{x=0}\n\\]\n\nへ集中している初期条件である。\n\n:::why title=\"高さが無限大になるのに確率が1のままなの？\"\n幅が0へ縮むのと同時に高さが増え、面積だけは1に保たれる。この極限をDiracのデルタ関数で表す。\n:::\n\n---",
              "major": "4",
              "why": [
                {
                  "title": "高さが無限大になるのに確率が1のままなの？",
                  "markdown": "幅が0へ縮むのと同時に高さが増え、面積だけは1に保たれる。この極限をDiracのデルタ関数で表す。"
                }
              ],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q4-4",
              "label": "Q4-4",
              "title": "拡散過程の情報エントロピー",
              "markdown": "\\[\nS(t)\n=\n-\\int_{-\\infty}^{\\infty}\np(x,t)\\ln p(x,t)dx.\n\\]\n\n\\[\n\\ln p\n=\n-\\frac12\\ln(4\\pi Dt)\n-\\frac{x^2}{4Dt}.\n\\]\n\nしたがって、\n\n\\[\n-p\\ln p\n=\np\n\\left[\n\\frac12\\ln(4\\pi Dt)\n+\n\\frac{x^2}{4Dt}\n\\right].\n\\]\n\n積分する。\n\n\\[\nS(t)\n=\n\\frac12\\ln(4\\pi Dt)\n\\int p\\,dx\n+\n\\frac1{4Dt}\n\\int x^2p\\,dx.\n\\]\n\n規格化より、\n\n\\[\n\\int p\\,dx=1.\n\\]\n\nこのGaussian分布の分散は、\n\n\\[\n\\langle x^2\\rangle=2Dt.\n\\]\n\nしたがって、\n\n\\[\nS(t)\n=\n\\frac12\\ln(4\\pi Dt)\n+\n\\frac{2Dt}{4Dt}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nS(t)\n=\n\\frac12\\ln(4\\pi Dt)\n+\n\\frac12\n}\n\\]\n\nである。\n\nまとめると、\n\n\\[\n\\boxed{\nS(t)\n=\n\\frac12\n\\ln(4\\pi eDt)\n}\n\\]\n\nである。\n\n### 分散から見る一般式\n\n1次元Gaussian分布の分散を、\n\n\\[\n\\sigma^2=2Dt\n\\]\n\nとすると、\n\n\\[\nS\n=\n\\frac12\\ln(2\\pi e\\sigma^2)\n\\]\n\nであり、同じ式となる。\n\n---",
              "major": "4",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": true,
              "hasExamAnswer": false
            },
            {
              "id": "q4-5",
              "label": "Q4-5",
              "title": "エントロピー増大の意味",
              "markdown": "\\[\nS(t)\n=\n\\frac12\\ln(4\\pi eDt).\n\\]\n\n時間微分は、\n\n\\[\n\\boxed{\n\\frac{dS}{dt}\n=\n\\frac1{2t}>0\n}\n\\]\n\nである。\n\nしたがって、\\(S(t)\\) は時間とともに単調増加する。\n\n2階微分は、\n\n\\[\n\\frac{d^2S}{dt^2}\n=\n-\\frac1{2t^2}<0.\n\\]\n\nしたがって、上に凸ではなく、傾きが徐々に小さくなる対数曲線である。\n\n### グラフの概形\n\n```text\nS\n│                 ______\n│            ____/\n│         __/\n│      __/\n│   __/\n│__/\n└────────────────── t\n  0+\n```\n\n厳密には、\n\n\\[\nt\\to0+0\n\\]\n\nで、\n\n\\[\nS(t)\\to-\\infty.\n\\]\n\n\\[\nt\\to\\infty\n\\]\n\nで、\n\n\\[\nS(t)\\to\\infty\n\\]\n\nだが、増加は対数的に遅くなる。\n\n### 物理的意味\n\n初期には確率が原点へ集中しているため、位置に関する不確定性が小さい。\n\n時間が経つと拡散により分布幅、\n\n\\[\n\\sigma=\\sqrt{2Dt}\n\\]\n\nが増え、粒子がどこにいるか分かりにくくなる。\n\nしたがって、\n\n\\[\n\\boxed{\n\\text{拡散によって位置情報が失われ、情報エントロピーが増加する}\n}\n\\]\n\nと解釈できる。\n\n### 連続エントロピーについての注意\n\n連続分布のエントロピーは微分エントロピーであり、座標の単位変更によって定数だけ変化する。\n\nそのため、絶対値よりも、\n\n\\[\nS(t_2)-S(t_1)\n=\n\\frac12\\ln\\frac{t_2}{t_1}\n\\]\n\nや、\n\n\\[\n\\frac{dS}{dt}>0\n\\]\n\nという増加傾向に物理的意味がある。\n\n# 年度全体の重要ポイント\n\n- 古典調和振動子の平均エネルギーは \\(k_{\\mathrm B}T\\)。\n- 量子調和振動子は、\\(\\hbar\\omega\\ll k_{\\mathrm B}T\\) で古典極限へ近づく。\n- Maxwell分布では、最頻速さより根平均二乗速さの方が大きい。\n- 巨視的流れの運動エネルギーは温度として数えてはいけない。\n- 半導体の励起電子数は、化学ポテンシャルと伝導帯端の差へ指数関数的に依存する。\n- ドープによって化学ポテンシャルが伝導帯へ近づくと、電子数が桁違いに増える。\n- 拡散方程式は全確率を保存しながら分布を広げる。\n- 拡散するGaussian分布の情報エントロピーは \\(\\frac12\\ln(4\\pi eDt)\\) で増加する。",
              "major": "4",
              "why": [],
              "importantPoints": [],
              "relatedKnowledge": [],
              "tags": [],
              "hasFinalAnswer": false,
              "hasExamAnswer": false
            }
          ]
        }
      ]
    }
  ],
  "pdfs": [
    {
      "subject": "工業数学F2",
      "year": 2023,
      "localPdfUrl": "/pdfs/industrial-math-f2/2023.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1lEWrJzkPy4YeRLF8-U01fpamJU2JGEAs/edit",
      "available": true,
      "sourceFileName": "工業数学F2(瀬波)2023.pdf"
    },
    {
      "subject": "工業数学F2",
      "year": 2021,
      "localPdfUrl": "/pdfs/industrial-math-f2/2021.pdf",
      "sourceUrl": "",
      "available": true,
      "sourceFileName": "工業数学F2(灘波)2021.pdf"
    },
    {
      "subject": "制御工学1",
      "year": 2023,
      "localPdfUrl": "/pdfs/control-engineering-1/2023.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1BaFlggmAz37l-M8YR6Q8X_leOXJUqHfA/edit",
      "available": true,
      "sourceFileName": "物工・制御工学1(細田・遠藤)2023.pdf"
    },
    {
      "subject": "工業力学A",
      "year": 2024,
      "localPdfUrl": "/pdfs/engineering-mechanics-a/2024.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1bShxwKoUTIisUW_fXotj-J7aebCXP8ZE/edit",
      "available": true,
      "sourceFileName": "工業力学A(西原·花崎)2024.pdf"
    },
    {
      "subject": "工業力学A",
      "year": 2023,
      "localPdfUrl": "/pdfs/engineering-mechanics-a/2023.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1oA86l2Iz_9zyNuBeRPqy_YMthSeC65rp/edit",
      "available": true,
      "sourceFileName": "物工・工業力学A(西原・花崎)2023.pdf"
    },
    {
      "subject": "設計工学1",
      "year": 2023,
      "localPdfUrl": "/pdfs/design-engineering-1/2023.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1IChMhcor6fkc2BK_0GTWkTLrAisWx_Eh/edit",
      "available": true,
      "sourceFileName": "設計工学1(小森・平山)2023.pdf"
    },
    {
      "subject": "設計工学1",
      "year": 2021,
      "localPdfUrl": "/pdfs/design-engineering-1/2021.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1-vAVkLF68QGFvpTVejJuw70-65lqsU0a/edit",
      "available": true,
      "sourceFileName": "設計工学1(小森・平山)2021.pdf"
    },
    {
      "subject": "応用電磁気学",
      "year": 2024,
      "localPdfUrl": "/pdfs/applied-electromagnetics/2024.pdf",
      "sourceUrl": "https://drive.google.com/file/d/10LQ2H957-cAqFR5iaB9lHxRAU4Qcch06/edit",
      "available": true,
      "sourceFileName": "応用電磁気学(四竃)2024.pdf"
    },
    {
      "subject": "応用電磁気学",
      "year": 2023,
      "localPdfUrl": "/pdfs/applied-electromagnetics/2023.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1obW9TWGTKLiZGkQM-5Tz8IiL08On4j77/edit",
      "available": true,
      "sourceFileName": "物工・応用電磁気学(四竃)2023.pdf"
    },
    {
      "subject": "流体力学2",
      "year": 2024,
      "localPdfUrl": "/pdfs/fluid-mechanics-2/2024.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1uSkyYCvEga1wjrD5cT7kZ8l7jl6H9UvI/edit",
      "available": true,
      "sourceFileName": "流体力学2(花崎・沖野)2024.pdf"
    },
    {
      "subject": "統計熱力学",
      "year": 2023,
      "localPdfUrl": "/pdfs/statistical-thermodynamics/2023.pdf",
      "sourceUrl": "https://drive.google.com/file/d/12H8VOiLQUZFytWqt08UZHWBXc26MoxOO/edit",
      "available": true,
      "sourceFileName": "物工・統計熱力学(松本・井上)2023.pdf"
    },
    {
      "subject": "統計熱力学",
      "year": 2011,
      "localPdfUrl": "/pdfs/statistical-thermodynamics/2011.pdf",
      "sourceUrl": "https://drive.google.com/file/d/1tQZJdxghjRSHtWbSVARI_2RCy4Hixwl-/edit",
      "available": true,
      "sourceFileName": "統計熱力学(松本)2011.pdf"
    },
    {
      "subject": "材料基礎学1",
      "year": 2018,
      "localPdfUrl": "/pdfs/materials-fundamentals-1/2018.pdf",
      "sourceUrl": "https://drive.google.com/file/d/17r7rU1vOiShf75A7BgMKIUQoGiNv1lcz/edit",
      "available": true,
      "sourceFileName": "材料基礎学1(平方)2018.pdf"
    }
  ]
};
