window.__PAST_EXAM_CONTENT__ = {
  "generatedAt": "2026-07-10T04:54:10.966Z",
  "subjects": [
    {
      "name": "制御工学1",
      "slug": "control-engineering-1",
      "years": [
        {
          "year": 2023,
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
      "name": "工業力学A",
      "slug": "engineering-mechanics-a",
      "years": [
        {
          "year": 2024,
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n平面内を運動する質量 \\(m\\) の質点について、動径の長さ \\(r\\) と角 \\(\\theta\\) による極座標で位置を表現する。運動エネルギー \\(T\\) とポテンシャルエネルギー \\(U\\) を次のように仮定する。\n\n\\[\nT=\\frac12m(\\dot r^2+r^2\\dot\\theta^2)\n\\]\n\n\\[\nU=\\frac12kr^2\n\\]\n\nここで、\\(k\\) は正の定数とする。質点には \\(U\\) による保存力だけが作用する。以下の設問に答えよ。\n\n(a) 時間の経過により変化しない力学変数をひとつ見つけて、それが保存量であることを示せ。\n\n(b) 質点は一定時間後に必ず同じ位置に戻ってくることを示して、このような回帰の所要時間を答えよ。\n\n(c) 動径の長さ \\(r\\) が一定にならない場合、周期的に変化することを示せ。その周期を答えよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-1.webp\nalt: 工業力学A 2024年度 問題1の原本\n:::\n\n---\n\n### 解法方針\n\nラグランジアンを作り、座標 \\(\\theta\\) が循環座標であることを利用する。\n\n### ラグランジアン\n\n\\[\nL=T-U\n=\n\\frac12m(\\dot r^2+r^2\\dot\\theta^2)\n-\\frac12kr^2.\n\\]\n\nこの式には \\(\\theta\\) 自身は含まれない。\n\n\\[\n\\frac{\\partial L}{\\partial\\theta}=0.\n\\]\n\nしたがって、\\(\\theta\\) に関するラグランジュ方程式から、\n\n\\[\n\\frac{d}{dt}\n\\left(\n\\frac{\\partial L}{\\partial\\dot\\theta}\n\\right)=0.\n\\]\n\nここで、\n\n\\[\n\\frac{\\partial L}{\\partial\\dot\\theta}\n=mr^2\\dot\\theta.\n\\]\n\nよって、\n\n\\[\n\\boxed{mr^2\\dot\\theta=\\text{一定}}\n\\]\n\nである。\n\nこれは原点まわりの角運動量である。\n\n:::why title=\"なぜ θ が式に現れないの？\"\nポテンシャル \\(U=\\frac12kr^2\\) は原点からの距離だけで決まり、向きには依存しない。どの方向へ回転しても物理法則が変わらない回転対称性があるためである。\n:::\n\n### 最終解答\n\n\\[\n\\boxed{\\ell=mr^2\\dot\\theta}\n\\]\n\nは保存量である。\n\n### 試験答案\n\n\\[\nL=\\frac12m(\\dot r^2+r^2\\dot\\theta^2)-\\frac12kr^2.\n\\]\n\n\\(L\\) は \\(\\theta\\) を陽に含まないので、\n\n\\[\n\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot\\theta}\\right)=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{mr^2\\dot\\theta=\\text{const.}}\n\\]\n\nとなり、角運動量が保存される。\n\n### 重要ポイント\n\n- 座標がラグランジアンに現れなければ、その共役運動量が保存される。\n- 中心力場では角運動量保存を最初に疑う。\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n平面内を運動する質量 \\(m\\) の質点について、動径の長さ \\(r\\) と角 \\(\\theta\\) による極座標で位置を表現する。運動エネルギー \\(T\\) とポテンシャルエネルギー \\(U\\) を次のように仮定する。\n\n\\[\nT=\\frac12m(\\dot r^2+r^2\\dot\\theta^2)\n\\]\n\n\\[\nU=\\frac12kr^2\n\\]\n\nここで、\\(k\\) は正の定数とする。質点には \\(U\\) による保存力だけが作用する。以下の設問に答えよ。\n\n(a) 時間の経過により変化しない力学変数をひとつ見つけて、それが保存量であることを示せ。\n\n(b) 質点は一定時間後に必ず同じ位置に戻ってくることを示して、このような回帰の所要時間を答えよ。\n\n(c) 動径の長さ \\(r\\) が一定にならない場合、周期的に変化することを示せ。その周期を答えよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-1.webp\nalt: 工業力学A 2024年度 問題1の原本\n:::\n\n---\n\n### 解法方針\n\n極座標のまま解くより、直交座標へ戻すと簡単になる。\n\n\\[\nr^2=x^2+y^2\n\\]\n\nなので、\n\n\\[\nU=\\frac12k(x^2+y^2).\n\\]\n\n運動エネルギーも、\n\n\\[\nT=\\frac12m(\\dot x^2+\\dot y^2)\n\\]\n\nである。\n\nしたがってラグランジアンは、\n\n\\[\nL=\n\\frac12m(\\dot x^2+\\dot y^2)\n-\\frac12k(x^2+y^2).\n\\]\n\n### 運動方程式\n\n\\(x\\) について、\n\n\\[\nm\\ddot x+kx=0.\n\\]\n\n\\(y\\) について、\n\n\\[\nm\\ddot y+ky=0.\n\\]\n\n固有角振動数を\n\n\\[\n\\omega=\\sqrt{\\frac{k}{m}}\n\\]\n\nと置く。\n\n一般解は、\n\n\\[\nx(t)=A\\cos\\omega t+B\\sin\\omega t\n\\]\n\n\\[\ny(t)=C\\cos\\omega t+D\\sin\\omega t.\n\\]\n\n三角関数は\n\n\\[\n\\cos(\\omega t+2\\pi)=\\cos\\omega t\n\\]\n\n\\[\n\\sin(\\omega t+2\\pi)=\\sin\\omega t\n\\]\n\nを満たすので、\n\n\\[\nx\\left(t+\\frac{2\\pi}{\\omega}\\right)=x(t)\n\\]\n\n\\[\ny\\left(t+\\frac{2\\pi}{\\omega}\\right)=y(t).\n\\]\n\nしたがって、質点の位置ベクトルは必ず同じ位置へ戻る。\n\n### 最終解答\n\n\\[\n\\boxed{\nT_{\\mathrm{return}}\n=\n\\frac{2\\pi}{\\omega}\n=\n2\\pi\\sqrt{\\frac{m}{k}}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ x と y の周期が同じなの？\"\nポテンシャルが \\(x^2+y^2\\) に比例する等方的なばねだからである。x方向とy方向のばね定数が同じなので、両方の角振動数が \\(\\sqrt{k/m}\\) になる。\n:::\n\n### 間違えやすい点\n\n- 動径 \\(r\\) の周期と、位置ベクトル \\((x,y)\\) の回帰時間は異なる。\n- 一般の位置へ戻る保証時間は \\(2\\pi/\\omega\\)。\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n平面内を運動する質量 \\(m\\) の質点について、動径の長さ \\(r\\) と角 \\(\\theta\\) による極座標で位置を表現する。運動エネルギー \\(T\\) とポテンシャルエネルギー \\(U\\) を次のように仮定する。\n\n\\[\nT=\\frac12m(\\dot r^2+r^2\\dot\\theta^2)\n\\]\n\n\\[\nU=\\frac12kr^2\n\\]\n\nここで、\\(k\\) は正の定数とする。質点には \\(U\\) による保存力だけが作用する。以下の設問に答えよ。\n\n(a) 時間の経過により変化しない力学変数をひとつ見つけて、それが保存量であることを示せ。\n\n(b) 質点は一定時間後に必ず同じ位置に戻ってくることを示して、このような回帰の所要時間を答えよ。\n\n(c) 動径の長さ \\(r\\) が一定にならない場合、周期的に変化することを示せ。その周期を答えよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-1.webp\nalt: 工業力学A 2024年度 問題1の原本\n:::\n\n---\n\n### 解法方針\n\n\\(r\\) ではなく \\(r^2=x^2+y^2\\) を計算する。\n\n\\[\nx=A\\cos\\omega t+B\\sin\\omega t\n\\]\n\n\\[\ny=C\\cos\\omega t+D\\sin\\omega t.\n\\]\n\nこれらを二乗して足すと、\n\n\\[\nr^2=x^2+y^2.\n\\]\n\n三角恒等式\n\n\\[\n\\cos^2\\omega t=\\frac{1+\\cos2\\omega t}{2}\n\\]\n\n\\[\n\\sin^2\\omega t=\\frac{1-\\cos2\\omega t}{2}\n\\]\n\n\\[\n2\\sin\\omega t\\cos\\omega t=\\sin2\\omega t\n\\]\n\nを使えば、\n\n\\[\nr^2(t)\n=\nC_0+C_1\\cos2\\omega t+C_2\\sin2\\omega t\n\\]\n\nと書ける。\n\nしたがって、\n\n\\[\nr^2\\left(t+\\frac{\\pi}{\\omega}\\right)=r^2(t).\n\\]\n\n\\(r\\ge0\\) なので、\n\n\\[\nr\\left(t+\\frac{\\pi}{\\omega}\\right)=r(t).\n\\]\n\n\\(r\\) が一定でない場合、その周期は、\n\n\\[\n\\boxed{\nT_r=\\frac{\\pi}{\\omega}\n=\n\\pi\\sqrt{\\frac{m}{k}}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ位置の周期の半分になるの？\"\n位置ベクトルが反対向きになっても、原点からの距離は同じである。時間 \\(\\pi/\\omega\\) 後には \\((x,y)\\to(-x,-y)\\) となるが、\\(r=\\sqrt{x^2+y^2}\\) は変わらない。\n:::\n\n### 最終解答\n\n\\[\n\\boxed{\nT_r=\\pi\\sqrt{\\frac{m}{k}}\n}\n\\]\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図1に示すように滑車の両側にかけられたロープがいずれも鉛直方向に伸びている。\n\n左側のロープ上端は天井に固定されている。右側のロープは天井から吊り下げられたばね定数 \\(k\\) の線形ばねに接続されている。ロープと滑車にすべりは生じない。\n\n滑車は面密度 \\(\\rho\\) の均質な材質で作られており、半径は \\(r\\) である。滑車には半径が \\(r/4\\) の円形ホール4個が均等に開けられており、ホールの中心は滑車の中心から \\(r/2\\) の位置にある。\n\n滑車の中心からばね定数 \\(k\\) のばねを介して、質量 \\(M\\) の重りが吊り下げられている。\n\n摩擦や空気抵抗などによるエネルギー散逸は生じないものと仮定する。ばね、ロープ、重りを吊り下げている糸の質量は無視できる。重力加速度を \\(g\\) とおく。\n\n解答にはラグランジュの方程式を用いること。\n\n(a) 滑車の質量 \\(m\\)、滑車の中心についての慣性モーメント \\(I\\) を求めよ。なお、(b)以降の設問には \\(m,I\\) を用いて答えてよい。\n\n(b) 系全体の運動エネルギー \\(T\\) を求めよ。\n\n(c) 系全体のポテンシャルエネルギー \\(U\\) を求めよ。\n\n(d) この系の振動数方程式（永年方程式）を導け。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-2.webp\nalt: 工業力学A 2024年度 問題2の原本と滑車の図\n:::\n\n## 座標の定義\n\n下向きを正とする。\n\n- 滑車中心の変位：\\(x\\)\n- 重り \\(M\\) の変位：\\(y\\)\n- 滑車の時計回り回転角：\\(\\phi\\)\n\nとする。\n\n左側ロープは固定され、ロープと滑車はすべらない。\n\n滑車左端の接触点の速度が0なので、\n\n\\[\n\\dot x-r\\dot\\phi=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\\dot\\phi=\\frac{\\dot x}{r}}.\n\\]\n\n右端接触点の速度は、\n\n\\[\n\\dot x+r\\dot\\phi\n=\n2\\dot x.\n\\]\n\nよって、上側ばねの伸びの変化量は \\(2x\\) である。\n\n:::why title=\"なぜ上側ばねは滑車変位の2倍伸びるの？\"\n滑車が \\(x\\) 下がると左側ロープ部分が \\(x\\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \\(x\\) 下がる必要があり、合計で \\(2x\\) 動く。\n:::\n\n---\n\n### 質量\n\n穴を開ける前の円板の質量は、\n\n\\[\nm_0=\\rho\\pi r^2.\n\\]\n\n1個の穴の質量に相当する量は、\n\n\\[\nm_h\n=\n\\rho\\pi\\left(\\frac r4\\right)^2\n=\n\\frac{\\rho\\pi r^2}{16}.\n\\]\n\n穴は4個なので、\n\n\\[\nm\n=\nm_0-4m_h.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nm=\\frac34\\rho\\pi r^2\n}\n\\]\n\nである。\n\n### 慣性モーメント\n\n穴を開ける前の円板は、\n\n\\[\nI_0=\\frac12m_0r^2\n=\\frac12\\rho\\pi r^4.\n\\]\n\n1個の穴について、穴中心まわりの慣性モーメントは、\n\n\\[\nI_{h,G}\n=\n\\frac12m_h\\left(\\frac r4\\right)^2.\n\\]\n\n穴の中心は滑車中心から \\(r/2\\) 離れているので、平行軸の定理より、\n\n\\[\nI_h\n=\nI_{h,G}\n+\nm_h\\left(\\frac r2\\right)^2.\n\\]\n\n代入すると、\n\n\\[\nI_h\n=\nm_hr^2\\left(\\frac1{32}+\\frac14\\right)\n=\n\\frac9{32}m_hr^2.\n\\]\n\n\\[\nm_h=\\frac{\\rho\\pi r^2}{16}\n\\]\n\nより、\n\n\\[\nI_h=\\frac{9}{512}\\rho\\pi r^4.\n\\]\n\n穴は4個なので、\n\n\\[\nI\n=\nI_0-4I_h\n\\]\n\n\\[\n=\n\\frac12\\rho\\pi r^4\n-\n\\frac{36}{512}\\rho\\pi r^4.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nI=\\frac{55}{128}\\rho\\pi r^4\n}\n\\]\n\nである。\n\n\\(m\\) を用いれば、\n\n\\[\n\\boxed{\nI=\\frac{55}{96}mr^2\n}\n\\]\n\nとも書ける。\n\n### 重要ポイント\n\n- 穴は「負の質量」と考えて円板から引く。\n- 穴の慣性モーメントには平行軸の定理が必要。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ上側ばねは滑車変位の2倍伸びるの？",
                  "markdown": "滑車が \\(x\\) 下がると左側ロープ部分が \\(x\\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \\(x\\) 下がる必要があり、合計で \\(2x\\) 動く。"
                }
              ],
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図1に示すように滑車の両側にかけられたロープがいずれも鉛直方向に伸びている。\n\n左側のロープ上端は天井に固定されている。右側のロープは天井から吊り下げられたばね定数 \\(k\\) の線形ばねに接続されている。ロープと滑車にすべりは生じない。\n\n滑車は面密度 \\(\\rho\\) の均質な材質で作られており、半径は \\(r\\) である。滑車には半径が \\(r/4\\) の円形ホール4個が均等に開けられており、ホールの中心は滑車の中心から \\(r/2\\) の位置にある。\n\n滑車の中心からばね定数 \\(k\\) のばねを介して、質量 \\(M\\) の重りが吊り下げられている。\n\n摩擦や空気抵抗などによるエネルギー散逸は生じないものと仮定する。ばね、ロープ、重りを吊り下げている糸の質量は無視できる。重力加速度を \\(g\\) とおく。\n\n解答にはラグランジュの方程式を用いること。\n\n(a) 滑車の質量 \\(m\\)、滑車の中心についての慣性モーメント \\(I\\) を求めよ。なお、(b)以降の設問には \\(m,I\\) を用いて答えてよい。\n\n(b) 系全体の運動エネルギー \\(T\\) を求めよ。\n\n(c) 系全体のポテンシャルエネルギー \\(U\\) を求めよ。\n\n(d) この系の振動数方程式（永年方程式）を導け。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-2.webp\nalt: 工業力学A 2024年度 問題2の原本と滑車の図\n:::\n\n## 座標の定義\n\n下向きを正とする。\n\n- 滑車中心の変位：\\(x\\)\n- 重り \\(M\\) の変位：\\(y\\)\n- 滑車の時計回り回転角：\\(\\phi\\)\n\nとする。\n\n左側ロープは固定され、ロープと滑車はすべらない。\n\n滑車左端の接触点の速度が0なので、\n\n\\[\n\\dot x-r\\dot\\phi=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\\dot\\phi=\\frac{\\dot x}{r}}.\n\\]\n\n右端接触点の速度は、\n\n\\[\n\\dot x+r\\dot\\phi\n=\n2\\dot x.\n\\]\n\nよって、上側ばねの伸びの変化量は \\(2x\\) である。\n\n:::why title=\"なぜ上側ばねは滑車変位の2倍伸びるの？\"\n滑車が \\(x\\) 下がると左側ロープ部分が \\(x\\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \\(x\\) 下がる必要があり、合計で \\(2x\\) 動く。\n:::\n\n---\n\n滑車の並進運動エネルギーは、\n\n\\[\n\\frac12m\\dot x^2.\n\\]\n\n滑車の回転運動エネルギーは、\n\n\\[\n\\frac12I\\dot\\phi^2.\n\\]\n\n\\[\n\\dot\\phi=\\frac{\\dot x}{r}\n\\]\n\nなので、\n\n\\[\n\\frac12I\\dot\\phi^2\n=\n\\frac12\\frac{I}{r^2}\\dot x^2.\n\\]\n\n重りの運動エネルギーは、\n\n\\[\n\\frac12M\\dot y^2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nT=\n\\frac12\\left(m+\\frac{I}{r^2}\\right)\\dot x^2\n+\n\\frac12M\\dot y^2\n}\n\\]\n\nである。\n\n:::why title=\"なぜ滑車の回転エネルギーも必要なの？\"\n滑車は中心が上下に移動するだけでなく、ロープとの非すべり条件によって回転もする。並進と回転の両方の運動エネルギーを足す必要がある。\n:::\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ上側ばねは滑車変位の2倍伸びるの？",
                  "markdown": "滑車が \\(x\\) 下がると左側ロープ部分が \\(x\\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \\(x\\) 下がる必要があり、合計で \\(2x\\) 動く。"
                },
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図1に示すように滑車の両側にかけられたロープがいずれも鉛直方向に伸びている。\n\n左側のロープ上端は天井に固定されている。右側のロープは天井から吊り下げられたばね定数 \\(k\\) の線形ばねに接続されている。ロープと滑車にすべりは生じない。\n\n滑車は面密度 \\(\\rho\\) の均質な材質で作られており、半径は \\(r\\) である。滑車には半径が \\(r/4\\) の円形ホール4個が均等に開けられており、ホールの中心は滑車の中心から \\(r/2\\) の位置にある。\n\n滑車の中心からばね定数 \\(k\\) のばねを介して、質量 \\(M\\) の重りが吊り下げられている。\n\n摩擦や空気抵抗などによるエネルギー散逸は生じないものと仮定する。ばね、ロープ、重りを吊り下げている糸の質量は無視できる。重力加速度を \\(g\\) とおく。\n\n解答にはラグランジュの方程式を用いること。\n\n(a) 滑車の質量 \\(m\\)、滑車の中心についての慣性モーメント \\(I\\) を求めよ。なお、(b)以降の設問には \\(m,I\\) を用いて答えてよい。\n\n(b) 系全体の運動エネルギー \\(T\\) を求めよ。\n\n(c) 系全体のポテンシャルエネルギー \\(U\\) を求めよ。\n\n(d) この系の振動数方程式（永年方程式）を導け。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-2.webp\nalt: 工業力学A 2024年度 問題2の原本と滑車の図\n:::\n\n## 座標の定義\n\n下向きを正とする。\n\n- 滑車中心の変位：\\(x\\)\n- 重り \\(M\\) の変位：\\(y\\)\n- 滑車の時計回り回転角：\\(\\phi\\)\n\nとする。\n\n左側ロープは固定され、ロープと滑車はすべらない。\n\n滑車左端の接触点の速度が0なので、\n\n\\[\n\\dot x-r\\dot\\phi=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\\dot\\phi=\\frac{\\dot x}{r}}.\n\\]\n\n右端接触点の速度は、\n\n\\[\n\\dot x+r\\dot\\phi\n=\n2\\dot x.\n\\]\n\nよって、上側ばねの伸びの変化量は \\(2x\\) である。\n\n:::why title=\"なぜ上側ばねは滑車変位の2倍伸びるの？\"\n滑車が \\(x\\) 下がると左側ロープ部分が \\(x\\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \\(x\\) 下がる必要があり、合計で \\(2x\\) 動く。\n:::\n\n---\n\n座標 \\(x,y\\) は下向きを正とする。\n\n### 上側ばね\n\n伸びは \\(2x\\) なので、\n\n\\[\nU_{\\mathrm{upper}}\n=\n\\frac12k(2x)^2\n=\n2kx^2.\n\\]\n\n### 下側ばね\n\n滑車中心と重りの相対変位は、\n\n\\[\ny-x\n\\]\n\nなので、\n\n\\[\nU_{\\mathrm{lower}}\n=\n\\frac12k(y-x)^2.\n\\]\n\n### 重力\n\n下向きを正としたため、\n\n\\[\nU_g=-mgx-Mgy.\n\\]\n\nしたがって、加法定数を除いて、\n\n\\[\n\\boxed{\nU=\n2kx^2\n+\\frac12k(y-x)^2\n-mgx-Mgy\n}\n\\]\n\nである。\n\n### 注意\n\n自然長や座標原点の取り方によって一次項・定数項の見え方は変わるが、平衡位置のまわりで線形化した振動数方程式は同じになる。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ上側ばねは滑車変位の2倍伸びるの？",
                  "markdown": "滑車が \\(x\\) 下がると左側ロープ部分が \\(x\\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \\(x\\) 下がる必要があり、合計で \\(2x\\) 動く。"
                }
              ],
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図1に示すように滑車の両側にかけられたロープがいずれも鉛直方向に伸びている。\n\n左側のロープ上端は天井に固定されている。右側のロープは天井から吊り下げられたばね定数 \\(k\\) の線形ばねに接続されている。ロープと滑車にすべりは生じない。\n\n滑車は面密度 \\(\\rho\\) の均質な材質で作られており、半径は \\(r\\) である。滑車には半径が \\(r/4\\) の円形ホール4個が均等に開けられており、ホールの中心は滑車の中心から \\(r/2\\) の位置にある。\n\n滑車の中心からばね定数 \\(k\\) のばねを介して、質量 \\(M\\) の重りが吊り下げられている。\n\n摩擦や空気抵抗などによるエネルギー散逸は生じないものと仮定する。ばね、ロープ、重りを吊り下げている糸の質量は無視できる。重力加速度を \\(g\\) とおく。\n\n解答にはラグランジュの方程式を用いること。\n\n(a) 滑車の質量 \\(m\\)、滑車の中心についての慣性モーメント \\(I\\) を求めよ。なお、(b)以降の設問には \\(m,I\\) を用いて答えてよい。\n\n(b) 系全体の運動エネルギー \\(T\\) を求めよ。\n\n(c) 系全体のポテンシャルエネルギー \\(U\\) を求めよ。\n\n(d) この系の振動数方程式（永年方程式）を導け。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-2.webp\nalt: 工業力学A 2024年度 問題2の原本と滑車の図\n:::\n\n## 座標の定義\n\n下向きを正とする。\n\n- 滑車中心の変位：\\(x\\)\n- 重り \\(M\\) の変位：\\(y\\)\n- 滑車の時計回り回転角：\\(\\phi\\)\n\nとする。\n\n左側ロープは固定され、ロープと滑車はすべらない。\n\n滑車左端の接触点の速度が0なので、\n\n\\[\n\\dot x-r\\dot\\phi=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\\dot\\phi=\\frac{\\dot x}{r}}.\n\\]\n\n右端接触点の速度は、\n\n\\[\n\\dot x+r\\dot\\phi\n=\n2\\dot x.\n\\]\n\nよって、上側ばねの伸びの変化量は \\(2x\\) である。\n\n:::why title=\"なぜ上側ばねは滑車変位の2倍伸びるの？\"\n滑車が \\(x\\) 下がると左側ロープ部分が \\(x\\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \\(x\\) 下がる必要があり、合計で \\(2x\\) 動く。\n:::\n\n---\n\n### ラグランジアン\n\n\\[\nL=T-U.\n\\]\n\n便利のため、\n\n\\[\nA=m+\\frac{I}{r^2}\n\\]\n\nと置く。\n\n### \\(x\\) の運動方程式\n\n\\[\n\\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial\\dot x}\\right)\n-\n\\frac{\\partial L}{\\partial x}=0.\n\\]\n\n\\[\nA\\ddot x+5kx-ky-mg=0.\n\\]\n\n### \\(y\\) の運動方程式\n\n\\[\nM\\ddot y+ky-kx-Mg=0.\n\\]\n\n### 平衡位置\n\n平衡位置を \\(x_0,y_0\\) とすると、\n\n\\[\n5kx_0-ky_0-mg=0\n\\]\n\n\\[\nky_0-kx_0-Mg=0.\n\\]\n\n平衡位置からの微小変位を、\n\n\\[\n\\xi=x-x_0,\\qquad \\eta=y-y_0\n\\]\n\nと置くと、重力の定数項は消える。\n\n\\[\nA\\ddot\\xi+5k\\xi-k\\eta=0\n\\]\n\n\\[\nM\\ddot\\eta+k\\eta-k\\xi=0.\n\\]\n\n行列で、\n\n\\[\n\\begin{pmatrix}\nA&0\\\\\n0&M\n\\end{pmatrix}\n\\begin{pmatrix}\n\\ddot\\xi\\\\\n\\ddot\\eta\n\\end{pmatrix}\n+\nk\n\\begin{pmatrix}\n5&-1\\\\\n-1&1\n\\end{pmatrix}\n\\begin{pmatrix}\n\\xi\\\\\n\\eta\n\\end{pmatrix}\n=0.\n\\]\n\n調和解\n\n\\[\n\\begin{pmatrix}\n\\xi\\\\\n\\eta\n\\end{pmatrix}\n=\n\\begin{pmatrix}\nX\\\\\nY\n\\end{pmatrix}\ne^{i\\omega t}\n\\]\n\nを仮定すると、\n\n\\[\n\\begin{pmatrix}\n5k-A\\omega^2&-k\\\\\n-k&k-M\\omega^2\n\\end{pmatrix}\n\\begin{pmatrix}\nX\\\\\nY\n\\end{pmatrix}\n=0.\n\\]\n\n非自明解が存在する条件は、\n\n\\[\n\\boxed{\n\\begin{vmatrix}\n5k-A\\omega^2&-k\\\\\n-k&k-M\\omega^2\n\\end{vmatrix}\n=0\n}\n\\]\n\nである。\n\nしたがって振動数方程式は、\n\n\\[\n\\boxed{\n(5k-A\\omega^2)(k-M\\omega^2)-k^2=0\n}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\nAM\\omega^4\n-k(A+5M)\\omega^2\n+4k^2=0\n}\n\\]\n\nである。\n\nここで、\n\n\\[\n\\boxed{\nA=m+\\frac{I}{r^2}\n}\n\\]\n\nである。\n\n### 固有角振動数\n\n必要なら、\n\n\\[\n\\boxed{\n\\omega_{\\pm}^2\n=\n\\frac{k\\left[\nA+5M\n\\pm\n\\sqrt{(A+5M)^2-16AM}\n\\right]}\n{2AM}\n}\n\\]\n\nと求められる。\n\n### 試験答案\n\n非すべり条件より、\n\n\\[\n\\dot\\phi=\\frac{\\dot x}{r}\n\\]\n\nかつ上側ばねの伸びは \\(2x\\)。\n\n\\[\nT=\n\\frac12\\left(m+\\frac{I}{r^2}\\right)\\dot x^2\n+\\frac12M\\dot y^2\n\\]\n\n\\[\nU=\n2kx^2+\\frac12k(y-x)^2-mgx-Mgy.\n\\]\n\n平衡位置からの変位 \\(\\xi,\\eta\\) を用いると、\n\n\\[\n\\left(m+\\frac{I}{r^2}\\right)\\ddot\\xi+5k\\xi-k\\eta=0\n\\]\n\n\\[\nM\\ddot\\eta-k\\xi+k\\eta=0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\left|\n\\begin{array}{cc}\n5k-\\left(m+\\frac{I}{r^2}\\right)\\omega^2&-k\\\\\n-k&k-M\\omega^2\n\\end{array}\n\\right|=0\n}\n\\]\n\nを得る。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ上側ばねは滑車変位の2倍伸びるの？",
                  "markdown": "滑車が \\(x\\) 下がると左側ロープ部分が \\(x\\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \\(x\\) 下がる必要があり、合計で \\(2x\\) 動く。"
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n点 \\(z_1(=x_1+iy_1)\\) と \\(z_2\\) にある渦点の循環が\n\n\\[\n\\Gamma_1=\\Gamma_2=\\Gamma\n\\]\n\n\\(z_3\\) にある渦点の循環が\n\n\\[\n\\Gamma_3=-2\\Gamma\n\\]\n\nのとき、各渦点が生成する複素速度ポテンシャルは、\n\n\\[\nf_1(z)=\\frac{\\Gamma}{2\\pi i}\\log(z-z_1)\n\\]\n\n\\[\nf_2(z)=\\frac{\\Gamma}{2\\pi i}\\log(z-z_2)\n\\]\n\n\\[\nf_3(z)=-\\frac{2\\Gamma}{2\\pi i}\\log(z-z_3)\n\\]\n\nである。\n\n(1) \\(dz_k^*/dt\\) を \\(\\Gamma\\) と \\(z_k\\) を用いて表す式を書け。\n\n(2) \\(z_1,z_2\\) の循環で重みづけした重心を\n\n\\[\nz_G=\\frac{z_1+z_2}{2}\n\\]\n\nと定義するとき、重心 \\(z_G\\) と渦点 \\(z_3\\) の運動はどんな関係にあるか。\n\n(3) \\(z_1\\) が \\(z_G\\) と同じ速度で移動する条件を導出し、そのときの位置関係を図示せよ。まず\n\n\\[\nz_1-z_G=c,\\qquad z_3-z_G=a\n\\]\n\nとし、\\(c\\) を \\(a\\) で表せ。\n\n(4) ハミルトニアンを\n\n\\[\nH=\n\\sum_{m=1}^{3}\n\\sum_{\\substack{l=1\\\\l\\ne m}}^{3}\n\\Gamma_m\\Gamma_l\n\\log|z_m-z_l|^2\n\\]\n\nで定義するとき、(3)のときの \\(H\\) の値を \\(\\Gamma,a\\) で表せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-4.webp\nalt: 工業力学A 2024年度 問題3-2の原本\n:::\n\n---\n\n渦点 \\(k\\) は、自分以外の渦点が作る速度場で移動する。\n\n\\[\n\\frac{dz_k^*}{dt}\n=\n\\sum_{j\\ne k}\n\\frac{\\Gamma_j}{2\\pi i}\n\\frac1{z_k-z_j}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{dz_1^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{z_1-z_2}\n-\\frac2{z_1-z_3}\n\\right)\n}\n\\]\n\n\\[\n\\boxed{\n\\frac{dz_2^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{z_2-z_1}\n-\\frac2{z_2-z_3}\n\\right)\n}\n\\]\n\n\\[\n\\boxed{\n\\frac{dz_3^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{z_3-z_1}\n+\\frac1{z_3-z_2}\n\\right)\n}\n\\]\n\nである。\n\n### 間違えやすい点\n\n- 渦点自身が作る速度場は含めない。\n- 第3渦点の循環は \\(-2\\Gamma\\)。\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n点 \\(z_1(=x_1+iy_1)\\) と \\(z_2\\) にある渦点の循環が\n\n\\[\n\\Gamma_1=\\Gamma_2=\\Gamma\n\\]\n\n\\(z_3\\) にある渦点の循環が\n\n\\[\n\\Gamma_3=-2\\Gamma\n\\]\n\nのとき、各渦点が生成する複素速度ポテンシャルは、\n\n\\[\nf_1(z)=\\frac{\\Gamma}{2\\pi i}\\log(z-z_1)\n\\]\n\n\\[\nf_2(z)=\\frac{\\Gamma}{2\\pi i}\\log(z-z_2)\n\\]\n\n\\[\nf_3(z)=-\\frac{2\\Gamma}{2\\pi i}\\log(z-z_3)\n\\]\n\nである。\n\n(1) \\(dz_k^*/dt\\) を \\(\\Gamma\\) と \\(z_k\\) を用いて表す式を書け。\n\n(2) \\(z_1,z_2\\) の循環で重みづけした重心を\n\n\\[\nz_G=\\frac{z_1+z_2}{2}\n\\]\n\nと定義するとき、重心 \\(z_G\\) と渦点 \\(z_3\\) の運動はどんな関係にあるか。\n\n(3) \\(z_1\\) が \\(z_G\\) と同じ速度で移動する条件を導出し、そのときの位置関係を図示せよ。まず\n\n\\[\nz_1-z_G=c,\\qquad z_3-z_G=a\n\\]\n\nとし、\\(c\\) を \\(a\\) で表せ。\n\n(4) ハミルトニアンを\n\n\\[\nH=\n\\sum_{m=1}^{3}\n\\sum_{\\substack{l=1\\\\l\\ne m}}^{3}\n\\Gamma_m\\Gamma_l\n\\log|z_m-z_l|^2\n\\]\n\nで定義するとき、(3)のときの \\(H\\) の値を \\(\\Gamma,a\\) で表せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-4.webp\nalt: 工業力学A 2024年度 問題3-2の原本\n:::\n\n---\n\n\\[\nz_G=\\frac{z_1+z_2}{2}\n\\]\n\nなので、\n\n\\[\n\\frac{dz_G^*}{dt}\n=\n\\frac12\n\\left(\n\\frac{dz_1^*}{dt}\n+\n\\frac{dz_2^*}{dt}\n\\right).\n\\]\n\n\\(z_1,z_2\\) 間の相互作用は、\n\n\\[\n\\frac1{z_1-z_2}\n+\n\\frac1{z_2-z_1}=0\n\\]\n\nにより打ち消し合う。\n\n残りを整理すると、\n\n\\[\n\\frac{dz_G^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{z_3-z_1}\n+\n\\frac1{z_3-z_2}\n\\right).\n\\]\n\nこれは、\n\n\\[\n\\frac{dz_3^*}{dt}\n\\]\n\nと等しい。\n\nしたがって、\n\n\\[\n\\boxed{\n\\frac{dz_G}{dt}\n=\n\\frac{dz_3}{dt}\n}\n\\]\n\nである。\n\nよって、\n\n\\[\n\\boxed{\nz_G-z_3=\\text{一定}\n}\n\\]\n\nであり、\\(z_G\\) と \\(z_3\\) は同じ速度で並進し、相対位置を変えない。\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n点 \\(z_1(=x_1+iy_1)\\) と \\(z_2\\) にある渦点の循環が\n\n\\[\n\\Gamma_1=\\Gamma_2=\\Gamma\n\\]\n\n\\(z_3\\) にある渦点の循環が\n\n\\[\n\\Gamma_3=-2\\Gamma\n\\]\n\nのとき、各渦点が生成する複素速度ポテンシャルは、\n\n\\[\nf_1(z)=\\frac{\\Gamma}{2\\pi i}\\log(z-z_1)\n\\]\n\n\\[\nf_2(z)=\\frac{\\Gamma}{2\\pi i}\\log(z-z_2)\n\\]\n\n\\[\nf_3(z)=-\\frac{2\\Gamma}{2\\pi i}\\log(z-z_3)\n\\]\n\nである。\n\n(1) \\(dz_k^*/dt\\) を \\(\\Gamma\\) と \\(z_k\\) を用いて表す式を書け。\n\n(2) \\(z_1,z_2\\) の循環で重みづけした重心を\n\n\\[\nz_G=\\frac{z_1+z_2}{2}\n\\]\n\nと定義するとき、重心 \\(z_G\\) と渦点 \\(z_3\\) の運動はどんな関係にあるか。\n\n(3) \\(z_1\\) が \\(z_G\\) と同じ速度で移動する条件を導出し、そのときの位置関係を図示せよ。まず\n\n\\[\nz_1-z_G=c,\\qquad z_3-z_G=a\n\\]\n\nとし、\\(c\\) を \\(a\\) で表せ。\n\n(4) ハミルトニアンを\n\n\\[\nH=\n\\sum_{m=1}^{3}\n\\sum_{\\substack{l=1\\\\l\\ne m}}^{3}\n\\Gamma_m\\Gamma_l\n\\log|z_m-z_l|^2\n\\]\n\nで定義するとき、(3)のときの \\(H\\) の値を \\(\\Gamma,a\\) で表せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-4.webp\nalt: 工業力学A 2024年度 問題3-2の原本\n:::\n\n---\n\n\\[\nz_1-z_G=c\n\\]\n\nと置く。\n\n\\[\nz_G=\\frac{z_1+z_2}{2}\n\\]\n\nなので、\n\n\\[\nz_2-z_G=-c.\n\\]\n\nまた、\n\n\\[\nz_3-z_G=a.\n\\]\n\nしたがって、\n\n\\[\nz_1=z_G+c,\\qquad\nz_2=z_G-c,\\qquad\nz_3=z_G+a.\n\\]\n\n### \\(z_1\\) の速度\n\n\\[\nz_1-z_2=2c\n\\]\n\n\\[\nz_1-z_3=c-a.\n\\]\n\nよって、\n\n\\[\n\\frac{dz_1^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{2c}\n-\\frac2{c-a}\n\\right).\n\\]\n\n### \\(z_G\\) の速度\n\n前問より \\(z_G\\) と \\(z_3\\) の速度は等しい。\n\n\\[\nz_3-z_1=a-c,\\qquad\nz_3-z_2=a+c.\n\\]\n\nしたがって、\n\n\\[\n\\frac{dz_G^*}{dt}\n=\n\\frac{\\Gamma}{2\\pi i}\n\\left(\n\\frac1{a-c}\n+\n\\frac1{a+c}\n\\right).\n\\]\n\n\\(z_1\\) と \\(z_G\\) が同じ速度で移動するためには、\n\n\\[\n\\frac1{2c}\n-\\frac2{c-a}\n=\n\\frac1{a-c}\n+\n\\frac1{a+c}.\n\\]\n\n\\[\n-\\frac2{c-a}\n=\n\\frac2{a-c}\n\\]\n\nを用いて整理すると、\n\n\\[\n\\frac1{2c}\n+\n\\frac1{a-c}\n-\n\\frac1{a+c}\n=0.\n\\]\n\n\\[\n\\frac1{a-c}\n-\n\\frac1{a+c}\n=\n\\frac{2c}{a^2-c^2}\n\\]\n\nなので、\n\n\\[\n\\frac1{2c}\n+\n\\frac{2c}{a^2-c^2}\n=0.\n\\]\n\n両辺に \\(2c(a^2-c^2)\\) を掛けると、\n\n\\[\na^2-c^2+4c^2=0.\n\\]\n\nしたがって、\n\n\\[\na^2+3c^2=0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nc=\\pm\\frac{i}{\\sqrt3}a\n}\n\\]\n\nである。\n\n### 幾何学的意味\n\n\\(c\\) は \\(a\\) を90度回転させ、長さを \\(1/\\sqrt3\\) 倍したベクトルである。\n\n\\[\nz_1=z_G\\pm\\frac{i}{\\sqrt3}a\n\\]\n\n\\[\nz_2=z_G\\mp\\frac{i}{\\sqrt3}a\n\\]\n\n\\[\nz_3=z_G+a.\n\\]\n\n各点間距離を計算すると、\n\n\\[\n|z_1-z_2|\n=\n\\frac{2|a|}{\\sqrt3}\n\\]\n\n\\[\n|z_1-z_3|\n=\n\\left|a-\\frac{i}{\\sqrt3}a\\right|\n=\n\\frac{2|a|}{\\sqrt3}\n\\]\n\n\\[\n|z_2-z_3|\n=\n\\frac{2|a|}{\\sqrt3}.\n\\]\n\nしたがって、3つの渦点は正三角形の頂点に位置する。\n\n\\[\n\\boxed{\\text{等速度並進する配置は正三角形}}\n\\]\n\nである。\n\n:::why title=\"なぜ回転せず並進するの？\"\n3点がこの正三角形配置にあると、各渦点が他の2点から受ける速度が全く同じになる。そのため相対配置を変えず、全体が同じ速度で移動する。\n:::\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n点 \\(z_1(=x_1+iy_1)\\) と \\(z_2\\) にある渦点の循環が\n\n\\[\n\\Gamma_1=\\Gamma_2=\\Gamma\n\\]\n\n\\(z_3\\) にある渦点の循環が\n\n\\[\n\\Gamma_3=-2\\Gamma\n\\]\n\nのとき、各渦点が生成する複素速度ポテンシャルは、\n\n\\[\nf_1(z)=\\frac{\\Gamma}{2\\pi i}\\log(z-z_1)\n\\]\n\n\\[\nf_2(z)=\\frac{\\Gamma}{2\\pi i}\\log(z-z_2)\n\\]\n\n\\[\nf_3(z)=-\\frac{2\\Gamma}{2\\pi i}\\log(z-z_3)\n\\]\n\nである。\n\n(1) \\(dz_k^*/dt\\) を \\(\\Gamma\\) と \\(z_k\\) を用いて表す式を書け。\n\n(2) \\(z_1,z_2\\) の循環で重みづけした重心を\n\n\\[\nz_G=\\frac{z_1+z_2}{2}\n\\]\n\nと定義するとき、重心 \\(z_G\\) と渦点 \\(z_3\\) の運動はどんな関係にあるか。\n\n(3) \\(z_1\\) が \\(z_G\\) と同じ速度で移動する条件を導出し、そのときの位置関係を図示せよ。まず\n\n\\[\nz_1-z_G=c,\\qquad z_3-z_G=a\n\\]\n\nとし、\\(c\\) を \\(a\\) で表せ。\n\n(4) ハミルトニアンを\n\n\\[\nH=\n\\sum_{m=1}^{3}\n\\sum_{\\substack{l=1\\\\l\\ne m}}^{3}\n\\Gamma_m\\Gamma_l\n\\log|z_m-z_l|^2\n\\]\n\nで定義するとき、(3)のときの \\(H\\) の値を \\(\\Gamma,a\\) で表せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2024/page-4.webp\nalt: 工業力学A 2024年度 問題3-2の原本\n:::\n\n---\n\n正三角形の一辺の長さを \\(d\\) とすると、\n\n\\[\nd=\\frac{2|a|}{\\sqrt3}.\n\\]\n\nしたがって、\n\n\\[\nd^2=\\frac{4|a|^2}{3}.\n\\]\n\nハミルトニアンは順序付きの二重和なので、各組は2回ずつ数えられる。\n\n循環の積は、\n\n\\[\n\\Gamma_1\\Gamma_2=\\Gamma^2\n\\]\n\n\\[\n\\Gamma_1\\Gamma_3=-2\\Gamma^2\n\\]\n\n\\[\n\\Gamma_2\\Gamma_3=-2\\Gamma^2.\n\\]\n\nしたがって、\n\n\\[\nH\n=\n2\\left(\n\\Gamma^2-2\\Gamma^2-2\\Gamma^2\n\\right)\\log d^2.\n\\]\n\n\\[\n= -6\\Gamma^2\\log d^2.\n\\]\n\n\\[\nd^2=\\frac{4|a|^2}{3}\n\\]\n\nを代入して、\n\n\\[\n\\boxed{\nH\n=\n-6\\Gamma^2\n\\log\\left(\n\\frac{4|a|^2}{3}\n\\right)\n}\n\\]\n\nである。\n\n### 試験答案\n\n\\[\nc=\\pm\\frac{i}{\\sqrt3}a\n\\]\n\nより、3渦点は一辺\n\n\\[\nd=\\frac{2|a|}{\\sqrt3}\n\\]\n\nの正三角形を作る。\n\n二重和は各組を2回数えるので、\n\n\\[\nH\n=\n2(\\Gamma^2-2\\Gamma^2-2\\Gamma^2)\\log d^2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nH=-6\\Gamma^2\n\\log\\left(\\frac{4|a|^2}{3}\\right)\n}.\n\\]\n\n# 年度全体の重要ポイント\n\n- 等方調和振動子では、位置の周期と動径の周期が異なる。\n- 移動滑車では、並進速度と回転速度を非すべり条件で結ぶ。\n- 振動数方程式では、重力は平衡位置を変えるだけで固有振動数には現れない。\n- Liouvilleの定理では、正準方程式と混合偏微分の交換可能性が本質。\n- 渦点問題では、複素速度を自分以外の渦点の寄与の和で求める。",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図1に示すように、二つの力学台車がばね定数 \\(k\\) のばねで連結されている。いずれも質量は \\(m\\) で水平面上にある。\n\n最初は右側の台車に外力が作用して、左側の台車が剛体壁に押し付けられている状態にある。その後、右側の台車が静かに解放されて外力が作用しなくなると、右側の台車が右方向へ移動していき、続いて左側の台車が壁から離れる。\n\n図のようにばねの自然長を基準として台車の重心位置を \\(x_1,x_2\\) とおく。すなわち、初期状態ではばねが圧縮されて\n\n\\[\nx_1=0,\\qquad x_2=-d\n\\]\n\nとなっている。\n\n解答においてはラグランジュの運動方程式を用いること。台車の運動には摩擦などの抵抗力は作用しないとする。\n\n(a) 右側の台車が解放されてから左の台車が壁から離れるまでに経過する時間を求めよ。\n\n(b) 左側の台車が壁を離れた後は一定値となる力学変数を示せ。\n\n(c) 左側の台車が壁を離れた瞬間を時刻 \\(t=0\\) とする。その後の台車の動きを調べて、座標 \\(x_1,x_2\\) を \\(t\\) の関数として与えよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-1.webp\nalt: 工業力学A 2023年度 問題1の原本と2台の台車の図\n:::\n\n---\n\n---\n\n### まず状況を整理する\n\n左側台車が壁に押し付けられている間は、\n\n\\[\nx_1=0\n\\]\n\nのままで動かない。\n\nしたがって、壁を離れるまでは右側台車だけを考えればよい。\n\nばねの伸びは、\n\n\\[\nx_2-x_1=x_2\n\\]\n\nである。\n\n初期状態では、\n\n\\[\nx_2(0)=-d,\\qquad \\dot x_2(0)=0.\n\\]\n\n### ラグランジアン\n\n右側台車だけの運動エネルギーは、\n\n\\[\nT=\\frac12m\\dot x_2^2.\n\\]\n\nばねのポテンシャルエネルギーは、\n\n\\[\nU=\\frac12kx_2^2.\n\\]\n\nしたがって、\n\n\\[\nL=\\frac12m\\dot x_2^2-\\frac12kx_2^2.\n\\]\n\nラグランジュ方程式より、\n\n\\[\nm\\ddot x_2+kx_2=0.\n\\]\n\n固有角振動数を、\n\n\\[\n\\omega_0=\\sqrt{\\frac{k}{m}}\n\\]\n\nと置く。\n\n初期条件を満たす解は、\n\n\\[\n\\boxed{\nx_2(t)=-d\\cos\\omega_0t\n}\n\\]\n\nである。\n\n### 壁を離れる条件\n\nばねの左側台車に作用する力は、\n\n\\[\nF_1=k(x_2-x_1)=kx_2\n\\]\n\nである。\n\n\\(x_2<0\\) の間は、ばねが左側台車を左向きに押すため、台車は壁から離れない。\n\n初めて\n\n\\[\nx_2=0\n\\]\n\nとなる瞬間に、壁からの垂直抗力が0になる。\n\n\\[\n-d\\cos\\omega_0t=0.\n\\]\n\n最初の正の解は、\n\n\\[\n\\omega_0t=\\frac{\\pi}{2}.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nt_{\\mathrm{detach}}\n=\n\\frac{\\pi}{2\\omega_0}\n=\n\\frac{\\pi}{2}\\sqrt{\\frac{m}{k}}\n}\n\\]\n\nである。\n\n:::why title=\"なぜばねが自然長になった瞬間に離れるの？\"\nばねが圧縮されている間は、左側台車を壁へ押す向きに力が働く。自然長になるとその力が0になり、その直後は右向きの力へ変わるため、台車が壁から離れる。\n:::\n\n### 離れる瞬間の速度\n\n後の小問で使うため、右側台車の速度も求める。\n\n\\[\n\\dot x_2(t)\n=\nd\\omega_0\\sin\\omega_0t.\n\\]\n\n壁を離れる瞬間では、\n\n\\[\n\\omega_0t=\\frac{\\pi}{2}\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\dot x_2=d\\omega_0\n=d\\sqrt{\\frac{k}{m}}\n}\n\\]\n\nである。\n\n左側台車はそれまで静止していたため、\n\n\\[\n\\dot x_1=0.\n\\]\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図1に示すように、二つの力学台車がばね定数 \\(k\\) のばねで連結されている。いずれも質量は \\(m\\) で水平面上にある。\n\n最初は右側の台車に外力が作用して、左側の台車が剛体壁に押し付けられている状態にある。その後、右側の台車が静かに解放されて外力が作用しなくなると、右側の台車が右方向へ移動していき、続いて左側の台車が壁から離れる。\n\n図のようにばねの自然長を基準として台車の重心位置を \\(x_1,x_2\\) とおく。すなわち、初期状態ではばねが圧縮されて\n\n\\[\nx_1=0,\\qquad x_2=-d\n\\]\n\nとなっている。\n\n解答においてはラグランジュの運動方程式を用いること。台車の運動には摩擦などの抵抗力は作用しないとする。\n\n(a) 右側の台車が解放されてから左の台車が壁から離れるまでに経過する時間を求めよ。\n\n(b) 左側の台車が壁を離れた後は一定値となる力学変数を示せ。\n\n(c) 左側の台車が壁を離れた瞬間を時刻 \\(t=0\\) とする。その後の台車の動きを調べて、座標 \\(x_1,x_2\\) を \\(t\\) の関数として与えよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-1.webp\nalt: 工業力学A 2023年度 問題1の原本と2台の台車の図\n:::\n\n---\n\n---\n\n壁を離れた後は、2台の台車とばねだけからなる系を考える。\n\n外部から水平方向の力は作用しない。\n\n### 運動方程式\n\nばねのポテンシャルエネルギーは、\n\n\\[\nU=\\frac12k(x_2-x_1)^2.\n\\]\n\n左側台車について、\n\n\\[\nm\\ddot x_1=k(x_2-x_1).\n\\]\n\n右側台車について、\n\n\\[\nm\\ddot x_2=-k(x_2-x_1).\n\\]\n\n2式を加えると、\n\n\\[\nm\\ddot x_1+m\\ddot x_2=0.\n\\]\n\nしたがって、\n\n\\[\n\\frac{d}{dt}\n\\left(\nm\\dot x_1+m\\dot x_2\n\\right)=0.\n\\]\n\n### 最終解答\n\n全運動量\n\n\\[\n\\boxed{\nP=m\\dot x_1+m\\dot x_2\n}\n\\]\n\nが保存される。\n\n壁を離れた瞬間の値を使えば、\n\n\\[\n\\boxed{\nP=md\\sqrt{\\frac{k}{m}}\n=d\\sqrt{mk}\n}\n\\]\n\nである。\n\n:::why title=\"なぜ壁を離れる前は運動量が保存されないの？\"\n壁に接触している間は、壁から左側台車へ外力が作用している。壁を離れた後は水平方向の外力がなくなり、ばねの力は系の内部力なので、全運動量が保存される。\n:::\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図1に示すように、二つの力学台車がばね定数 \\(k\\) のばねで連結されている。いずれも質量は \\(m\\) で水平面上にある。\n\n最初は右側の台車に外力が作用して、左側の台車が剛体壁に押し付けられている状態にある。その後、右側の台車が静かに解放されて外力が作用しなくなると、右側の台車が右方向へ移動していき、続いて左側の台車が壁から離れる。\n\n図のようにばねの自然長を基準として台車の重心位置を \\(x_1,x_2\\) とおく。すなわち、初期状態ではばねが圧縮されて\n\n\\[\nx_1=0,\\qquad x_2=-d\n\\]\n\nとなっている。\n\n解答においてはラグランジュの運動方程式を用いること。台車の運動には摩擦などの抵抗力は作用しないとする。\n\n(a) 右側の台車が解放されてから左の台車が壁から離れるまでに経過する時間を求めよ。\n\n(b) 左側の台車が壁を離れた後は一定値となる力学変数を示せ。\n\n(c) 左側の台車が壁を離れた瞬間を時刻 \\(t=0\\) とする。その後の台車の動きを調べて、座標 \\(x_1,x_2\\) を \\(t\\) の関数として与えよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-1.webp\nalt: 工業力学A 2023年度 問題1の原本と2台の台車の図\n:::\n\n---\n\n---\n\n壁を離れた瞬間を新しく\n\n\\[\nt=0\n\\]\n\nとする。\n\nその瞬間、\n\n\\[\nx_1(0)=0,\\qquad x_2(0)=0\n\\]\n\n\\[\n\\dot x_1(0)=0,\\qquad\n\\dot x_2(0)=v_0\n\\]\n\nであり、\n\n\\[\nv_0=d\\sqrt{\\frac{k}{m}}\n\\]\n\nである。\n\n### 重心座標\n\n\\[\nX=\\frac{x_1+x_2}{2}\n\\]\n\nと置く。\n\n2台の全運動量が保存されるので、\n\n\\[\n\\ddot X=0.\n\\]\n\n初期条件は、\n\n\\[\nX(0)=0\n\\]\n\n\\[\n\\dot X(0)=\\frac{v_0}{2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nX(t)=\\frac{v_0}{2}t\n}\n\\]\n\nである。\n\n### 相対座標\n\n\\[\n\\xi=x_2-x_1\n\\]\n\nと置く。\n\n2台の運動方程式の差を取ると、\n\n\\[\n\\ddot\\xi+\\frac{2k}{m}\\xi=0.\n\\]\n\n相対運動の角振動数を、\n\n\\[\n\\Omega=\\sqrt{\\frac{2k}{m}}\n\\]\n\nと置く。\n\n初期条件は、\n\n\\[\n\\xi(0)=0\n\\]\n\n\\[\n\\dot\\xi(0)=v_0.\n\\]\n\nしたがって、\n\n\\[\n\\xi(t)=\\frac{v_0}{\\Omega}\\sin\\Omega t.\n\\]\n\n\\[\n\\frac{v_0}{\\Omega}\n=\n\\frac{d\\sqrt{k/m}}{\\sqrt{2k/m}}\n=\n\\frac{d}{\\sqrt2}\n\\]\n\nなので、\n\n\\[\n\\boxed{\n\\xi(t)=\\frac{d}{\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right)\n}\n\\]\n\nである。\n\n### 元の座標へ戻す\n\n\\[\nx_1=X-\\frac{\\xi}{2}\n\\]\n\n\\[\nx_2=X+\\frac{\\xi}{2}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nx_1(t)\n=\n\\frac{d}{2}\\sqrt{\\frac{k}{m}}\\,t\n-\n\\frac{d}{2\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right)\n}\n\\]\n\n\\[\n\\boxed{\nx_2(t)\n=\n\\frac{d}{2}\\sqrt{\\frac{k}{m}}\\,t\n+\n\\frac{d}{2\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right)\n}\n\\]\n\nである。\n\n### 運動の意味\n\n- 系全体の重心は一定速度で右へ移動する。\n- 2台の間隔は角振動数\n\n\\[\n\\sqrt{\\frac{2k}{m}}\n\\]\n\nで振動する。\n- したがって、全体として右へ進みながら2台が互いに近づいたり離れたりする。\n\n### 試験答案\n\n壁を離れる瞬間を \\(t=0\\) とすると、\n\n\\[\nx_1=x_2=0,\\qquad\n\\dot x_1=0,\\qquad\n\\dot x_2=d\\sqrt{\\frac{k}{m}}.\n\\]\n\n重心座標 \\(X=(x_1+x_2)/2\\) と相対座標 \\(\\xi=x_2-x_1\\) を用いると、\n\n\\[\n\\ddot X=0,\\qquad\n\\ddot\\xi+\\frac{2k}{m}\\xi=0.\n\\]\n\nしたがって、\n\n\\[\nX=\\frac{d}{2}\\sqrt{\\frac{k}{m}}t\n\\]\n\n\\[\n\\xi=\\frac{d}{\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right).\n\\]\n\nよって、\n\n\\[\n\\boxed{\nx_{1,2}\n=\n\\frac{d}{2}\\sqrt{\\frac{k}{m}}t\n\\mp\n\\frac{d}{2\\sqrt2}\n\\sin\\left(\\sqrt{\\frac{2k}{m}}t\\right)\n}\n\\]\n\nとなる。\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図2に示すように二つのリンクと力学台車、剛体、ばねがジョイントで接続され、鉛直面内に配置された一自由度振動系を仮定する。\n\nばね定数 \\(k\\) のばね上端は天井に固定されている。長さが \\(a\\) のリンクは両端にジョイントがあり、長さが \\(2a\\) のリンクは両端と中央にジョイントがある。\n\nリンクの質量はそれぞれ \\(m,2m\\) であり、質量が均等に分布する剛体と仮定する。\n\n力学台車は質量が \\(M\\) であり、水平面上を走行する。長さが \\(2a\\) のリンクの左端は鉛直方向に運動し、ばねはこの鉛直軸上にあることに注意する。質量 \\(M\\) の剛体の重心もこの軸上にある。\n\n重力加速度は \\(g\\) とする。ばねが自然長のとき、リンクの傾斜角は \\(\\pi/6\\) とする。ジョイントの回転などでエネルギーは散逸しないと仮定する。\n\n(a) 図のように長さが \\(a\\) のリンクの傾斜角を \\(\\pi/6+\\theta\\) とおくとき、系全体の運動エネルギー \\(T\\) を求めよ。\n\n(b) 系全体のポテンシャルエネルギー \\(U\\) を求めよ。\n\n(c) 角 \\(\\theta\\) の絶対値が小さいとして系の固有角振動数を求めよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-2.webp\nalt: 工業力学A 2023年度 問題2の原本とリンク機構の図\n:::\n\n---\n\n## 幾何学的な関係\n\n短いリンクの角度を、\n\n\\[\n\\alpha=\\frac{\\pi}{6}+\\theta\n\\]\n\nと置く。\n\n左下の固定支点を原点とする。\n\n短いリンクの先端、すなわち長いリンクの中央ジョイントの座標は、\n\n\\[\nC=(a\\cos\\alpha,\\ a\\sin\\alpha)\n\\]\n\nである。\n\n長いリンクは長さ \\(2a\\) で、中央ジョイントから左右端までの長さはそれぞれ \\(a\\)。\n\n右端は水平面上にあるので、\n\n\\[\nR=(2a\\cos\\alpha,\\ 0)\n\\]\n\nとなる。\n\n左端は鉛直軸上にあるので、\n\n\\[\nL=(0,\\ 2a\\sin\\alpha)\n\\]\n\nとなる。\n\nしたがって、\n\n- 台車の水平変位は \\(2a\\cos\\alpha\\)\n- 上側剛体の鉛直変位は \\(2a\\sin\\alpha\\)\n\nで表される。\n\n:::why title=\"なぜ左右端の座標がこの形になるの？\"\n中央ジョイントから右端へのベクトルは、長さが \\(a\\) で水平成分 \\(a\\cos\\alpha\\)、鉛直成分 \\(-a\\sin\\alpha\\)。中央座標へ足すと右端は \\((2a\\cos\\alpha,0)\\) になる。左端は反対向きなので \\((0,2a\\sin\\alpha)\\) になる。\n:::\n\n---\n\n---\n\n### 短いリンク\n\n長さ \\(a\\)、質量 \\(m\\) の一様な棒が、左端の固定支点まわりに回転する。\n\n支点まわりの慣性モーメントは、\n\n\\[\nI_O=\\frac13ma^2.\n\\]\n\nしたがって、\n\n\\[\nT_{\\mathrm{short}}\n=\n\\frac12I_O\\dot\\theta^2\n=\n\\frac16ma^2\\dot\\theta^2.\n\\]\n\n### 長いリンク\n\n長さ \\(2a\\)、質量 \\(2m\\) であり、重心は中央ジョイント \\(C\\) にある。\n\n重心速度の大きさは、\n\n\\[\nv_C=a\\dot\\theta.\n\\]\n\n並進運動エネルギーは、\n\n\\[\n\\frac12(2m)v_C^2\n=\nma^2\\dot\\theta^2.\n\\]\n\n重心まわりの慣性モーメントは、\n\n\\[\nI_C\n=\n\\frac1{12}(2m)(2a)^2\n=\n\\frac23ma^2.\n\\]\n\n回転運動エネルギーは、\n\n\\[\n\\frac12I_C\\dot\\theta^2\n=\n\\frac13ma^2\\dot\\theta^2.\n\\]\n\nよって、\n\n\\[\nT_{\\mathrm{long}}\n=\n\\frac43ma^2\\dot\\theta^2.\n\\]\n\n### 上側の剛体 \\(M\\)\n\n鉛直座標は、\n\n\\[\ny_L=2a\\sin\\alpha.\n\\]\n\nしたがって、\n\n\\[\n\\dot y_L\n=\n2a\\cos\\alpha\\,\\dot\\theta.\n\\]\n\n運動エネルギーは、\n\n\\[\nT_{\\mathrm{upper}}\n=\n\\frac12M(2a\\cos\\alpha)^2\\dot\\theta^2\n=\n2Ma^2\\cos^2\\alpha\\,\\dot\\theta^2.\n\\]\n\n### 台車 \\(M\\)\n\n水平座標は、\n\n\\[\nx_R=2a\\cos\\alpha.\n\\]\n\nしたがって、\n\n\\[\n\\dot x_R\n=\n-2a\\sin\\alpha\\,\\dot\\theta.\n\\]\n\n運動エネルギーは、\n\n\\[\nT_{\\mathrm{cart}}\n=\n2Ma^2\\sin^2\\alpha\\,\\dot\\theta^2.\n\\]\n\n### 合計\n\n\\[\nT_{\\mathrm{upper}}+T_{\\mathrm{cart}}\n=\n2Ma^2(\\cos^2\\alpha+\\sin^2\\alpha)\\dot\\theta^2\n=\n2Ma^2\\dot\\theta^2.\n\\]\n\nリンクの項を含めると、\n\n\\[\nT\n=\n\\left(\n\\frac16m+\\frac43m+2M\n\\right)\na^2\\dot\\theta^2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nT\n=\n\\frac12(3m+4M)a^2\\dot\\theta^2\n}\n\\]\n\nである。\n\n### 重要ポイント\n\n- 長いリンクは「重心の並進」と「重心まわりの回転」の両方を持つ。\n- 上側剛体と台車の項を足すと、三角関数が消えて一定の等価慣性になる。\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ左右端の座標がこの形になるの？",
                  "markdown": "中央ジョイントから右端へのベクトルは、長さが \\(a\\) で水平成分 \\(a\\cos\\alpha\\)、鉛直成分 \\(-a\\sin\\alpha\\)。中央座標へ足すと右端は \\((2a\\cos\\alpha,0)\\) になる。左端は反対向きなので \\((0,2a\\sin\\alpha)\\) になる。"
                }
              ],
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図2に示すように二つのリンクと力学台車、剛体、ばねがジョイントで接続され、鉛直面内に配置された一自由度振動系を仮定する。\n\nばね定数 \\(k\\) のばね上端は天井に固定されている。長さが \\(a\\) のリンクは両端にジョイントがあり、長さが \\(2a\\) のリンクは両端と中央にジョイントがある。\n\nリンクの質量はそれぞれ \\(m,2m\\) であり、質量が均等に分布する剛体と仮定する。\n\n力学台車は質量が \\(M\\) であり、水平面上を走行する。長さが \\(2a\\) のリンクの左端は鉛直方向に運動し、ばねはこの鉛直軸上にあることに注意する。質量 \\(M\\) の剛体の重心もこの軸上にある。\n\n重力加速度は \\(g\\) とする。ばねが自然長のとき、リンクの傾斜角は \\(\\pi/6\\) とする。ジョイントの回転などでエネルギーは散逸しないと仮定する。\n\n(a) 図のように長さが \\(a\\) のリンクの傾斜角を \\(\\pi/6+\\theta\\) とおくとき、系全体の運動エネルギー \\(T\\) を求めよ。\n\n(b) 系全体のポテンシャルエネルギー \\(U\\) を求めよ。\n\n(c) 角 \\(\\theta\\) の絶対値が小さいとして系の固有角振動数を求めよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-2.webp\nalt: 工業力学A 2023年度 問題2の原本とリンク機構の図\n:::\n\n---\n\n## 幾何学的な関係\n\n短いリンクの角度を、\n\n\\[\n\\alpha=\\frac{\\pi}{6}+\\theta\n\\]\n\nと置く。\n\n左下の固定支点を原点とする。\n\n短いリンクの先端、すなわち長いリンクの中央ジョイントの座標は、\n\n\\[\nC=(a\\cos\\alpha,\\ a\\sin\\alpha)\n\\]\n\nである。\n\n長いリンクは長さ \\(2a\\) で、中央ジョイントから左右端までの長さはそれぞれ \\(a\\)。\n\n右端は水平面上にあるので、\n\n\\[\nR=(2a\\cos\\alpha,\\ 0)\n\\]\n\nとなる。\n\n左端は鉛直軸上にあるので、\n\n\\[\nL=(0,\\ 2a\\sin\\alpha)\n\\]\n\nとなる。\n\nしたがって、\n\n- 台車の水平変位は \\(2a\\cos\\alpha\\)\n- 上側剛体の鉛直変位は \\(2a\\sin\\alpha\\)\n\nで表される。\n\n:::why title=\"なぜ左右端の座標がこの形になるの？\"\n中央ジョイントから右端へのベクトルは、長さが \\(a\\) で水平成分 \\(a\\cos\\alpha\\)、鉛直成分 \\(-a\\sin\\alpha\\)。中央座標へ足すと右端は \\((2a\\cos\\alpha,0)\\) になる。左端は反対向きなので \\((0,2a\\sin\\alpha)\\) になる。\n:::\n\n---\n\n---\n\n## ばねのポテンシャルエネルギー\n\nばねが自然長のとき、\n\n\\[\n\\alpha_0=\\frac{\\pi}{6}\n\\]\n\nであり、\n\n\\[\n2a\\sin\\alpha_0=a.\n\\]\n\n角度 \\(\\alpha\\) のとき、上側剛体の鉛直位置の変化は、\n\n\\[\n\\Delta \\ell\n=\n2a\n\\left(\n\\sin\\alpha-\\frac12\n\\right).\n\\]\n\n符号はばねの伸び・縮みによって変わるが、エネルギーでは二乗するため、\n\n\\[\nU_{\\mathrm{spring}}\n=\n\\frac12k(\\Delta\\ell)^2.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nU_{\\mathrm{spring}}\n=\n2ka^2\n\\left(\n\\sin\\alpha-\\frac12\n\\right)^2\n}\n\\]\n\nである。\n\n## 重力ポテンシャルエネルギー\n\n高さの基準による定数項は省略する。\n\n### 短いリンク\n\n重心の高さは、\n\n\\[\n\\frac{a}{2}\\sin\\alpha.\n\\]\n\nしたがって、\n\n\\[\nU_{\\mathrm{short}}\n=\n\\frac12mga\\sin\\alpha.\n\\]\n\n### 長いリンク\n\n質量は \\(2m\\)、重心の高さは \\(a\\sin\\alpha\\)。\n\n\\[\nU_{\\mathrm{long}}\n=\n2mga\\sin\\alpha.\n\\]\n\n### 上側剛体\n\n高さの変化は \\(2a\\sin\\alpha\\) なので、\n\n\\[\nU_{\\mathrm{upper}}\n=\n2Mga\\sin\\alpha.\n\\]\n\n台車の高さは一定なので、重力ポテンシャルは定数であり省略できる。\n\n### 合計\n\n\\[\nU_g\n=\n\\left(\n\\frac12m+2m+2M\n\\right)\nga\\sin\\alpha.\n\\]\n\n\\[\n\\boxed{\nU_g\n=\n\\frac{ga}{2}(5m+4M)\\sin\\alpha\n}\n\\]\n\nである。\n\nしたがって、系全体のポテンシャルエネルギーは、\n\n\\[\n\\boxed{\nU\n=\n2ka^2\n\\left(\n\\sin\\alpha-\\frac12\n\\right)^2\n+\n\\frac{ga}{2}(5m+4M)\\sin\\alpha\n}\n\\]\n\nである。\n\nここで、\n\n\\[\n\\alpha=\\frac{\\pi}{6}+\\theta.\n\\]\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ左右端の座標がこの形になるの？",
                  "markdown": "中央ジョイントから右端へのベクトルは、長さが \\(a\\) で水平成分 \\(a\\cos\\alpha\\)、鉛直成分 \\(-a\\sin\\alpha\\)。中央座標へ足すと右端は \\((2a\\cos\\alpha,0)\\) になる。左端は反対向きなので \\((0,2a\\sin\\alpha)\\) になる。"
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
              "title": "小振動の固有角振動数",
              "markdown": "## 問題文（原文）\n\n:::problem-original\n図2に示すように二つのリンクと力学台車、剛体、ばねがジョイントで接続され、鉛直面内に配置された一自由度振動系を仮定する。\n\nばね定数 \\(k\\) のばね上端は天井に固定されている。長さが \\(a\\) のリンクは両端にジョイントがあり、長さが \\(2a\\) のリンクは両端と中央にジョイントがある。\n\nリンクの質量はそれぞれ \\(m,2m\\) であり、質量が均等に分布する剛体と仮定する。\n\n力学台車は質量が \\(M\\) であり、水平面上を走行する。長さが \\(2a\\) のリンクの左端は鉛直方向に運動し、ばねはこの鉛直軸上にあることに注意する。質量 \\(M\\) の剛体の重心もこの軸上にある。\n\n重力加速度は \\(g\\) とする。ばねが自然長のとき、リンクの傾斜角は \\(\\pi/6\\) とする。ジョイントの回転などでエネルギーは散逸しないと仮定する。\n\n(a) 図のように長さが \\(a\\) のリンクの傾斜角を \\(\\pi/6+\\theta\\) とおくとき、系全体の運動エネルギー \\(T\\) を求めよ。\n\n(b) 系全体のポテンシャルエネルギー \\(U\\) を求めよ。\n\n(c) 角 \\(\\theta\\) の絶対値が小さいとして系の固有角振動数を求めよ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-2.webp\nalt: 工業力学A 2023年度 問題2の原本とリンク機構の図\n:::\n\n---\n\n## 幾何学的な関係\n\n短いリンクの角度を、\n\n\\[\n\\alpha=\\frac{\\pi}{6}+\\theta\n\\]\n\nと置く。\n\n左下の固定支点を原点とする。\n\n短いリンクの先端、すなわち長いリンクの中央ジョイントの座標は、\n\n\\[\nC=(a\\cos\\alpha,\\ a\\sin\\alpha)\n\\]\n\nである。\n\n長いリンクは長さ \\(2a\\) で、中央ジョイントから左右端までの長さはそれぞれ \\(a\\)。\n\n右端は水平面上にあるので、\n\n\\[\nR=(2a\\cos\\alpha,\\ 0)\n\\]\n\nとなる。\n\n左端は鉛直軸上にあるので、\n\n\\[\nL=(0,\\ 2a\\sin\\alpha)\n\\]\n\nとなる。\n\nしたがって、\n\n- 台車の水平変位は \\(2a\\cos\\alpha\\)\n- 上側剛体の鉛直変位は \\(2a\\sin\\alpha\\)\n\nで表される。\n\n:::why title=\"なぜ左右端の座標がこの形になるの？\"\n中央ジョイントから右端へのベクトルは、長さが \\(a\\) で水平成分 \\(a\\cos\\alpha\\)、鉛直成分 \\(-a\\sin\\alpha\\)。中央座標へ足すと右端は \\((2a\\cos\\alpha,0)\\) になる。左端は反対向きなので \\((0,2a\\sin\\alpha)\\) になる。\n:::\n\n---\n\n---\n\n\\[\n|\\theta|\\ll1\n\\]\n\nとして、\\(\\theta=0\\) の近くで2次まで展開する。\n\n### 三角関数の展開\n\n\\[\n\\sin\\left(\\frac{\\pi}{6}+\\theta\\right)\n\\approx\n\\frac12+\\frac{\\sqrt3}{2}\\theta-\\frac14\\theta^2.\n\\]\n\n### ばねエネルギー\n\n\\[\n\\sin\\alpha-\\frac12\n\\approx\n\\frac{\\sqrt3}{2}\\theta.\n\\]\n\nしたがって、\n\n\\[\nU_{\\mathrm{spring}}\n\\approx\n2ka^2\n\\left(\n\\frac{\\sqrt3}{2}\\theta\n\\right)^2\n=\n\\frac32ka^2\\theta^2.\n\\]\n\n### 重力エネルギー\n\n\\[\nU_g\n\\approx\n\\frac{ga}{2}(5m+4M)\n\\left(\n\\frac12\n+\n\\frac{\\sqrt3}{2}\\theta\n-\n\\frac14\\theta^2\n\\right).\n\\]\n\n定数項を無視すると、\n\n\\[\nU\n\\approx\n\\frac{\\sqrt3ga}{4}(5m+4M)\\theta\n+\n\\frac12K_{\\mathrm{eff}}\\theta^2\n\\]\n\nと書ける。\n\nここで、\n\n\\[\n\\boxed{\nK_{\\mathrm{eff}}\n=\n3ka^2\n-\n\\frac{ga}{4}(5m+4M)\n}\n\\]\n\nである。\n\n運動エネルギーは、\n\n\\[\nT\n=\n\\frac12I_{\\mathrm{eff}}\\dot\\theta^2\n\\]\n\n\\[\n\\boxed{\nI_{\\mathrm{eff}}\n=\n(3m+4M)a^2\n}\n\\]\n\nである。\n\n### 線形化した運動方程式\n\n\\[\nI_{\\mathrm{eff}}\\ddot\\theta\n+\nK_{\\mathrm{eff}}\\theta\n+\n\\frac{\\sqrt3ga}{4}(5m+4M)\n=0.\n\\]\n\n定数項は平衡位置をずらすだけである。\n\n線形近似での平衡角を \\(\\theta_{\\mathrm e}\\) とし、\n\n\\[\n\\eta=\\theta-\\theta_{\\mathrm e}\n\\]\n\nと置くと、\n\n\\[\nI_{\\mathrm{eff}}\\ddot\\eta\n+\nK_{\\mathrm{eff}}\\eta=0.\n\\]\n\nしたがって、固有角振動数は、\n\n\\[\n\\boxed{\n\\omega_n\n=\n\\sqrt{\n\\frac{\n3ka^2-\\dfrac{ga}{4}(5m+4M)\n}{\n(3m+4M)a^2\n}\n}\n}\n\\]\n\nである。\n\n分子・分母から \\(a\\) を整理すると、\n\n\\[\n\\boxed{\n\\omega_n\n=\n\\sqrt{\n\\frac{\n3ka-\\dfrac{g}{4}(5m+4M)\n}{\n(3m+4M)a\n}\n}\n}\n\\]\n\nとも書ける。\n\n### 安定条件\n\n実数の固有角振動数を持つためには、\n\n\\[\nK_{\\mathrm{eff}}>0\n\\]\n\nが必要である。\n\n\\[\n\\boxed{\n3ka^2>\n\\frac{ga}{4}(5m+4M)\n}\n\\]\n\nすなわち、\n\n\\[\n\\boxed{\n12ka>g(5m+4M)\n}\n\\]\n\nである。\n\n:::why title=\"なぜ重力の定数項は振動数に影響しないの？\"\n定数項は平衡位置をどこへ移すかを決める。一方、平衡位置の近くでどれだけ強く元へ戻そうとするかは二次項の係数で決まり、これが固有角振動数を決める。\n:::\n\n### 試験答案\n\n\\[\nT=\\frac12(3m+4M)a^2\\dot\\theta^2.\n\\]\n\n\\[\nU=\n2ka^2\n\\left[\n\\sin\\left(\\frac{\\pi}{6}+\\theta\\right)-\\frac12\n\\right]^2\n+\n\\frac{ga}{2}(5m+4M)\n\\sin\\left(\\frac{\\pi}{6}+\\theta\\right).\n\\]\n\n\\(|\\theta|\\ll1\\) として2次まで展開すると、\n\n\\[\nU\n=\n\\text{const.}\n+\n\\frac{\\sqrt3ga}{4}(5m+4M)\\theta\n+\n\\frac12\n\\left[\n3ka^2-\\frac{ga}{4}(5m+4M)\n\\right]\\theta^2.\n\\]\n\n平衡位置からの変位について、\n\n\\[\n(3m+4M)a^2\\ddot\\eta\n+\n\\left[\n3ka^2-\\frac{ga}{4}(5m+4M)\n\\right]\\eta=0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\omega_n\n=\n\\sqrt{\n\\frac{\n3ka^2-\\dfrac{ga}{4}(5m+4M)\n}{\n(3m+4M)a^2\n}\n}\n}.\n\\]\n\n---",
              "major": "2",
              "why": [
                {
                  "title": "なぜ左右端の座標がこの形になるの？",
                  "markdown": "中央ジョイントから右端へのベクトルは、長さが \\(a\\) で水平成分 \\(a\\cos\\alpha\\)、鉛直成分 \\(-a\\sin\\alpha\\)。中央座標へ足すと右端は \\((2a\\cos\\alpha,0)\\) になる。左端は反対向きなので \\((0,2a\\sin\\alpha)\\) になる。"
                },
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n1次元運動のラグランジアンが\n\n\\[\nL(q,\\dot q)=\\dot q^2-q^2\n\\]\n\nで与えられるとき、以下の問いに答えよ。\n\n(1) \\(q\\) と \\(p\\) の関数であるハミルトニアン\n\n\\[\nH(q,p)=p\\dot q-L\n\\]\n\nを求めよ。ただし、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n\\]\n\nとする。\n\n(2) ポアソン括弧式\n\n\\[\n[A,B]\n=\n\\frac{\\partial A}{\\partial q}\n\\frac{\\partial B}{\\partial p}\n-\n\\frac{\\partial A}{\\partial p}\n\\frac{\\partial B}{\\partial q}\n\\]\n\nを考えることにより、この運動の保存量（\\(H\\) の定数倍を除く）を1つ求めよ。\n\n\\(q,p\\) を正準変数とする正準方程式は、\n\n\\[\n\\frac{dq}{dt}=\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{dp}{dt}=-\\frac{\\partial H}{\\partial q}\n\\tag{A}\n\\]\n\nである。\n\n(3) (1) の \\(H=E\\)（正の定数）のとき、位相空間（\\(q-p\\) 面）内での軌道を図示せよ。その際、軌道上の運動の向きも矢印で記入すること。\n\n(4) 軌道上の2点 \\(A\\) と \\(B\\) が、初期 \\(t=0\\) にそれぞれ\n\n\\[\nA(0,p_0),\\qquad B(q_0,0)\n\\]\n\nにあったとき、任意の時刻 \\(t\\) におけるそれぞれの座標 \\((q,p)\\) を求めよ。\n\n(5) 位相空間の原点 \\(O(0,0)\\) は位相空間内での不動点である。(4) の結果を用いて、\\(\\triangle OAB\\) の面積が運動によって不変であることを示せ（Liouvilleの定理の例）。\n\n(1) のハミルトニアン \\(H(q,p)\\) において、\n\n\\[\nQ=\\log\\left(\\frac1q\\sin p\\right),\n\\qquad\nP=q\\cot p\n\\tag{B}\n\\]\n\nで定義される \\((q,p)\\to(Q,P)\\) の独立変数変換を行う。\n\n(6)\n\n\\[\n\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{\\partial H}{\\partial q}\n\\]\n\nをそれぞれ、\n\n\\[\n\\frac{\\partial H}{\\partial P},\n\\qquad\n\\frac{\\partial H}{\\partial Q}\n\\]\n\nを用いて表せ。\n\n(7) 正準方程式 (A) と (6) の結果を用いて、\n\n\\[\n\\frac{dQ}{dt},\n\\qquad\n\\frac{dP}{dt}\n\\]\n\nを計算し、変換 (B) が正準変換であることを示せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-3.webp\nalt: 工業力学A 2023年度 問題3の原本\n:::\n\n---\n\n---\n\nラグランジアンは、\n\n\\[\nL=\\dot q^2-q^2.\n\\]\n\n共役運動量は、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n=2\\dot q.\n\\]\n\nしたがって、\n\n\\[\n\\dot q=\\frac p2.\n\\]\n\nハミルトニアンは、\n\n\\[\nH=p\\dot q-L.\n\\]\n\n\\[\n=p\\frac p2\n-\n\\left[\n\\left(\\frac p2\\right)^2-q^2\n\\right].\n\\]\n\n\\[\n=\\frac{p^2}{2}-\\frac{p^2}{4}+q^2.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nH(q,p)=\\frac{p^2}{4}+q^2\n}\n\\]\n\nである。\n\n:::why title=\"通常の調和振動子と係数が違うのはなぜ？\"\n問題のラグランジアンには通常の \\(1/2\\) が付いていない。そのため、共役運動量が \\(p=2\\dot q\\) となり、ハミルトニアンの運動量項が \\(p^2/4\\) になる。\n:::\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n1次元運動のラグランジアンが\n\n\\[\nL(q,\\dot q)=\\dot q^2-q^2\n\\]\n\nで与えられるとき、以下の問いに答えよ。\n\n(1) \\(q\\) と \\(p\\) の関数であるハミルトニアン\n\n\\[\nH(q,p)=p\\dot q-L\n\\]\n\nを求めよ。ただし、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n\\]\n\nとする。\n\n(2) ポアソン括弧式\n\n\\[\n[A,B]\n=\n\\frac{\\partial A}{\\partial q}\n\\frac{\\partial B}{\\partial p}\n-\n\\frac{\\partial A}{\\partial p}\n\\frac{\\partial B}{\\partial q}\n\\]\n\nを考えることにより、この運動の保存量（\\(H\\) の定数倍を除く）を1つ求めよ。\n\n\\(q,p\\) を正準変数とする正準方程式は、\n\n\\[\n\\frac{dq}{dt}=\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{dp}{dt}=-\\frac{\\partial H}{\\partial q}\n\\tag{A}\n\\]\n\nである。\n\n(3) (1) の \\(H=E\\)（正の定数）のとき、位相空間（\\(q-p\\) 面）内での軌道を図示せよ。その際、軌道上の運動の向きも矢印で記入すること。\n\n(4) 軌道上の2点 \\(A\\) と \\(B\\) が、初期 \\(t=0\\) にそれぞれ\n\n\\[\nA(0,p_0),\\qquad B(q_0,0)\n\\]\n\nにあったとき、任意の時刻 \\(t\\) におけるそれぞれの座標 \\((q,p)\\) を求めよ。\n\n(5) 位相空間の原点 \\(O(0,0)\\) は位相空間内での不動点である。(4) の結果を用いて、\\(\\triangle OAB\\) の面積が運動によって不変であることを示せ（Liouvilleの定理の例）。\n\n(1) のハミルトニアン \\(H(q,p)\\) において、\n\n\\[\nQ=\\log\\left(\\frac1q\\sin p\\right),\n\\qquad\nP=q\\cot p\n\\tag{B}\n\\]\n\nで定義される \\((q,p)\\to(Q,P)\\) の独立変数変換を行う。\n\n(6)\n\n\\[\n\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{\\partial H}{\\partial q}\n\\]\n\nをそれぞれ、\n\n\\[\n\\frac{\\partial H}{\\partial P},\n\\qquad\n\\frac{\\partial H}{\\partial Q}\n\\]\n\nを用いて表せ。\n\n(7) 正準方程式 (A) と (6) の結果を用いて、\n\n\\[\n\\frac{dQ}{dt},\n\\qquad\n\\frac{dP}{dt}\n\\]\n\nを計算し、変換 (B) が正準変換であることを示せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-3.webp\nalt: 工業力学A 2023年度 問題3の原本\n:::\n\n---\n\n---\n\n任意の微分可能な関数 \\(F(H)\\) を考える。\n\n\\[\n[F(H),H]\n=\nF'(H)[H,H].\n\\]\n\nポアソン括弧の反対称性より、\n\n\\[\n[H,H]=0.\n\\]\n\nしたがって、\n\n\\[\n[F(H),H]=0.\n\\]\n\nよって、\\(F(H)\\) は保存量である。\n\n\\(H\\) の単なる定数倍ではない例として、\n\n\\[\nA=H^2\n\\]\n\nを選ぶ。\n\n\\[\n[A,H]=[H^2,H]\n=2H[H,H]=0.\n\\]\n\n### 最終解答\n\n\\[\n\\boxed{\nA(q,p)=H^2\n=\n\\left(\n\\frac{p^2}{4}+q^2\n\\right)^2\n}\n\\]\n\nは保存量である。\n\n### 補足\n\n1自由度の自律系では、時間に依存しない独立な保存量は通常エネルギー1つである。そのため、ここで得た \\(H^2\\) は \\(H\\) とは独立ではないが、「\\(H\\) の定数倍ではない保存量」という問題の条件を満たす。\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n1次元運動のラグランジアンが\n\n\\[\nL(q,\\dot q)=\\dot q^2-q^2\n\\]\n\nで与えられるとき、以下の問いに答えよ。\n\n(1) \\(q\\) と \\(p\\) の関数であるハミルトニアン\n\n\\[\nH(q,p)=p\\dot q-L\n\\]\n\nを求めよ。ただし、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n\\]\n\nとする。\n\n(2) ポアソン括弧式\n\n\\[\n[A,B]\n=\n\\frac{\\partial A}{\\partial q}\n\\frac{\\partial B}{\\partial p}\n-\n\\frac{\\partial A}{\\partial p}\n\\frac{\\partial B}{\\partial q}\n\\]\n\nを考えることにより、この運動の保存量（\\(H\\) の定数倍を除く）を1つ求めよ。\n\n\\(q,p\\) を正準変数とする正準方程式は、\n\n\\[\n\\frac{dq}{dt}=\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{dp}{dt}=-\\frac{\\partial H}{\\partial q}\n\\tag{A}\n\\]\n\nである。\n\n(3) (1) の \\(H=E\\)（正の定数）のとき、位相空間（\\(q-p\\) 面）内での軌道を図示せよ。その際、軌道上の運動の向きも矢印で記入すること。\n\n(4) 軌道上の2点 \\(A\\) と \\(B\\) が、初期 \\(t=0\\) にそれぞれ\n\n\\[\nA(0,p_0),\\qquad B(q_0,0)\n\\]\n\nにあったとき、任意の時刻 \\(t\\) におけるそれぞれの座標 \\((q,p)\\) を求めよ。\n\n(5) 位相空間の原点 \\(O(0,0)\\) は位相空間内での不動点である。(4) の結果を用いて、\\(\\triangle OAB\\) の面積が運動によって不変であることを示せ（Liouvilleの定理の例）。\n\n(1) のハミルトニアン \\(H(q,p)\\) において、\n\n\\[\nQ=\\log\\left(\\frac1q\\sin p\\right),\n\\qquad\nP=q\\cot p\n\\tag{B}\n\\]\n\nで定義される \\((q,p)\\to(Q,P)\\) の独立変数変換を行う。\n\n(6)\n\n\\[\n\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{\\partial H}{\\partial q}\n\\]\n\nをそれぞれ、\n\n\\[\n\\frac{\\partial H}{\\partial P},\n\\qquad\n\\frac{\\partial H}{\\partial Q}\n\\]\n\nを用いて表せ。\n\n(7) 正準方程式 (A) と (6) の結果を用いて、\n\n\\[\n\\frac{dQ}{dt},\n\\qquad\n\\frac{dP}{dt}\n\\]\n\nを計算し、変換 (B) が正準変換であることを示せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-3.webp\nalt: 工業力学A 2023年度 問題3の原本\n:::\n\n---\n\n---\n\n\\[\nH=E\n\\]\n\nより、\n\n\\[\n\\frac{p^2}{4}+q^2=E.\n\\]\n\n標準形にすると、\n\n\\[\n\\boxed{\n\\frac{q^2}{E}\n+\n\\frac{p^2}{4E}\n=1\n}\n\\]\n\nである。\n\nしたがって、\\(q-p\\) 平面上の軌道は、\n\n- \\(q\\) 方向の半径：\\(\\sqrt E\\)\n- \\(p\\) 方向の半径：\\(2\\sqrt E\\)\n\nの楕円である。\n\n### 運動の向き\n\n正準方程式は、\n\n\\[\n\\dot q=\\frac{\\partial H}{\\partial p}=\\frac p2\n\\]\n\n\\[\n\\dot p=-\\frac{\\partial H}{\\partial q}=-2q.\n\\]\n\n例えば右端\n\n\\[\n(q,p)=(\\sqrt E,0)\n\\]\n\nでは、\n\n\\[\n\\dot q=0,\\qquad\n\\dot p=-2\\sqrt E<0.\n\\]\n\nしたがって、右端から下向きへ進む。\n\nよって軌道上の運動方向は、\n\n\\[\n\\boxed{\\text{時計回り}}\n\\]\n\nである。\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n1次元運動のラグランジアンが\n\n\\[\nL(q,\\dot q)=\\dot q^2-q^2\n\\]\n\nで与えられるとき、以下の問いに答えよ。\n\n(1) \\(q\\) と \\(p\\) の関数であるハミルトニアン\n\n\\[\nH(q,p)=p\\dot q-L\n\\]\n\nを求めよ。ただし、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n\\]\n\nとする。\n\n(2) ポアソン括弧式\n\n\\[\n[A,B]\n=\n\\frac{\\partial A}{\\partial q}\n\\frac{\\partial B}{\\partial p}\n-\n\\frac{\\partial A}{\\partial p}\n\\frac{\\partial B}{\\partial q}\n\\]\n\nを考えることにより、この運動の保存量（\\(H\\) の定数倍を除く）を1つ求めよ。\n\n\\(q,p\\) を正準変数とする正準方程式は、\n\n\\[\n\\frac{dq}{dt}=\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{dp}{dt}=-\\frac{\\partial H}{\\partial q}\n\\tag{A}\n\\]\n\nである。\n\n(3) (1) の \\(H=E\\)（正の定数）のとき、位相空間（\\(q-p\\) 面）内での軌道を図示せよ。その際、軌道上の運動の向きも矢印で記入すること。\n\n(4) 軌道上の2点 \\(A\\) と \\(B\\) が、初期 \\(t=0\\) にそれぞれ\n\n\\[\nA(0,p_0),\\qquad B(q_0,0)\n\\]\n\nにあったとき、任意の時刻 \\(t\\) におけるそれぞれの座標 \\((q,p)\\) を求めよ。\n\n(5) 位相空間の原点 \\(O(0,0)\\) は位相空間内での不動点である。(4) の結果を用いて、\\(\\triangle OAB\\) の面積が運動によって不変であることを示せ（Liouvilleの定理の例）。\n\n(1) のハミルトニアン \\(H(q,p)\\) において、\n\n\\[\nQ=\\log\\left(\\frac1q\\sin p\\right),\n\\qquad\nP=q\\cot p\n\\tag{B}\n\\]\n\nで定義される \\((q,p)\\to(Q,P)\\) の独立変数変換を行う。\n\n(6)\n\n\\[\n\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{\\partial H}{\\partial q}\n\\]\n\nをそれぞれ、\n\n\\[\n\\frac{\\partial H}{\\partial P},\n\\qquad\n\\frac{\\partial H}{\\partial Q}\n\\]\n\nを用いて表せ。\n\n(7) 正準方程式 (A) と (6) の結果を用いて、\n\n\\[\n\\frac{dQ}{dt},\n\\qquad\n\\frac{dP}{dt}\n\\]\n\nを計算し、変換 (B) が正準変換であることを示せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-3.webp\nalt: 工業力学A 2023年度 問題3の原本\n:::\n\n---\n\n---\n\n正準方程式は、\n\n\\[\n\\dot q=\\frac p2\n\\]\n\n\\[\n\\dot p=-2q.\n\\]\n\n第1式を時間微分すると、\n\n\\[\n\\ddot q=\\frac{\\dot p}{2}=-q.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\\ddot q+q=0}\n\\]\n\nである。\n\n角振動数は1。\n\n---\n\n### 点 \\(A\\)\n\n初期条件は、\n\n\\[\nq_A(0)=0,\\qquad\np_A(0)=p_0.\n\\]\n\n\\[\n\\dot q_A(0)=\\frac{p_0}{2}.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nq_A(t)=\\frac{p_0}{2}\\sin t\n}\n\\]\n\nである。\n\n\\[\np_A=2\\dot q_A\n\\]\n\nより、\n\n\\[\n\\boxed{\np_A(t)=p_0\\cos t\n}\n\\]\n\nである。\n\n---\n\n### 点 \\(B\\)\n\n初期条件は、\n\n\\[\nq_B(0)=q_0,\\qquad\np_B(0)=0.\n\\]\n\n\\[\n\\dot q_B(0)=0.\n\\]\n\nしたがって、\n\n\\[\n\\boxed{\nq_B(t)=q_0\\cos t\n}\n\\]\n\nである。\n\n\\[\np_B=2\\dot q_B\n\\]\n\nより、\n\n\\[\n\\boxed{\np_B(t)=-2q_0\\sin t\n}\n\\]\n\nである。\n\n### 最終解答\n\n\\[\n\\boxed{\nA(t):\n\\left(\n\\frac{p_0}{2}\\sin t,\\ \np_0\\cos t\n\\right)\n}\n\\]\n\n\\[\n\\boxed{\nB(t):\n\\left(\nq_0\\cos t,\\ \n-2q_0\\sin t\n\\right)\n}\n\\]\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n1次元運動のラグランジアンが\n\n\\[\nL(q,\\dot q)=\\dot q^2-q^2\n\\]\n\nで与えられるとき、以下の問いに答えよ。\n\n(1) \\(q\\) と \\(p\\) の関数であるハミルトニアン\n\n\\[\nH(q,p)=p\\dot q-L\n\\]\n\nを求めよ。ただし、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n\\]\n\nとする。\n\n(2) ポアソン括弧式\n\n\\[\n[A,B]\n=\n\\frac{\\partial A}{\\partial q}\n\\frac{\\partial B}{\\partial p}\n-\n\\frac{\\partial A}{\\partial p}\n\\frac{\\partial B}{\\partial q}\n\\]\n\nを考えることにより、この運動の保存量（\\(H\\) の定数倍を除く）を1つ求めよ。\n\n\\(q,p\\) を正準変数とする正準方程式は、\n\n\\[\n\\frac{dq}{dt}=\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{dp}{dt}=-\\frac{\\partial H}{\\partial q}\n\\tag{A}\n\\]\n\nである。\n\n(3) (1) の \\(H=E\\)（正の定数）のとき、位相空間（\\(q-p\\) 面）内での軌道を図示せよ。その際、軌道上の運動の向きも矢印で記入すること。\n\n(4) 軌道上の2点 \\(A\\) と \\(B\\) が、初期 \\(t=0\\) にそれぞれ\n\n\\[\nA(0,p_0),\\qquad B(q_0,0)\n\\]\n\nにあったとき、任意の時刻 \\(t\\) におけるそれぞれの座標 \\((q,p)\\) を求めよ。\n\n(5) 位相空間の原点 \\(O(0,0)\\) は位相空間内での不動点である。(4) の結果を用いて、\\(\\triangle OAB\\) の面積が運動によって不変であることを示せ（Liouvilleの定理の例）。\n\n(1) のハミルトニアン \\(H(q,p)\\) において、\n\n\\[\nQ=\\log\\left(\\frac1q\\sin p\\right),\n\\qquad\nP=q\\cot p\n\\tag{B}\n\\]\n\nで定義される \\((q,p)\\to(Q,P)\\) の独立変数変換を行う。\n\n(6)\n\n\\[\n\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{\\partial H}{\\partial q}\n\\]\n\nをそれぞれ、\n\n\\[\n\\frac{\\partial H}{\\partial P},\n\\qquad\n\\frac{\\partial H}{\\partial Q}\n\\]\n\nを用いて表せ。\n\n(7) 正準方程式 (A) と (6) の結果を用いて、\n\n\\[\n\\frac{dQ}{dt},\n\\qquad\n\\frac{dP}{dt}\n\\]\n\nを計算し、変換 (B) が正準変換であることを示せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-3.webp\nalt: 工業力学A 2023年度 問題3の原本\n:::\n\n---\n\n---\n\n原点を \\(O=(0,0)\\) とする。\n\n2つのベクトル\n\n\\[\n\\overrightarrow{OA}\n=\n\\begin{pmatrix}\nq_A\\\\\np_A\n\\end{pmatrix}\n\\]\n\n\\[\n\\overrightarrow{OB}\n=\n\\begin{pmatrix}\nq_B\\\\\np_B\n\\end{pmatrix}\n\\]\n\nが作る三角形の面積は、\n\n\\[\nS\n=\n\\frac12\n\\left|\nq_Ap_B-p_Aq_B\n\\right|.\n\\]\n\n前問の結果を代入する。\n\n\\[\nq_Ap_B\n=\n\\left(\n\\frac{p_0}{2}\\sin t\n\\right)\n\\left(\n-2q_0\\sin t\n\\right)\n=\n-p_0q_0\\sin^2t.\n\\]\n\n\\[\np_Aq_B\n=\n(p_0\\cos t)(q_0\\cos t)\n=\np_0q_0\\cos^2t.\n\\]\n\nしたがって、\n\n\\[\nq_Ap_B-p_Aq_B\n=\n-p_0q_0\n(\\sin^2t+\\cos^2t).\n\\]\n\n\\[\n=-p_0q_0.\n\\]\n\nよって、\n\n\\[\n\\boxed{\nS=\\frac12|p_0q_0|\n}\n\\]\n\nとなり、時間 \\(t\\) に依存しない。\n\nしたがって、\n\n\\[\n\\boxed{\n\\triangle OAB\\text{ の面積は運動によって不変}\n}\n\\]\n\nである。\n\n:::why title=\"これがLiouvilleの定理の例になる理由\"\nハミルトン力学の時間発展では、位相空間内の領域は引き伸ばされたり変形したりしても、その面積や体積を保つ。この問題では三角形の面積を直接計算することで確認している。\n:::\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n1次元運動のラグランジアンが\n\n\\[\nL(q,\\dot q)=\\dot q^2-q^2\n\\]\n\nで与えられるとき、以下の問いに答えよ。\n\n(1) \\(q\\) と \\(p\\) の関数であるハミルトニアン\n\n\\[\nH(q,p)=p\\dot q-L\n\\]\n\nを求めよ。ただし、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n\\]\n\nとする。\n\n(2) ポアソン括弧式\n\n\\[\n[A,B]\n=\n\\frac{\\partial A}{\\partial q}\n\\frac{\\partial B}{\\partial p}\n-\n\\frac{\\partial A}{\\partial p}\n\\frac{\\partial B}{\\partial q}\n\\]\n\nを考えることにより、この運動の保存量（\\(H\\) の定数倍を除く）を1つ求めよ。\n\n\\(q,p\\) を正準変数とする正準方程式は、\n\n\\[\n\\frac{dq}{dt}=\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{dp}{dt}=-\\frac{\\partial H}{\\partial q}\n\\tag{A}\n\\]\n\nである。\n\n(3) (1) の \\(H=E\\)（正の定数）のとき、位相空間（\\(q-p\\) 面）内での軌道を図示せよ。その際、軌道上の運動の向きも矢印で記入すること。\n\n(4) 軌道上の2点 \\(A\\) と \\(B\\) が、初期 \\(t=0\\) にそれぞれ\n\n\\[\nA(0,p_0),\\qquad B(q_0,0)\n\\]\n\nにあったとき、任意の時刻 \\(t\\) におけるそれぞれの座標 \\((q,p)\\) を求めよ。\n\n(5) 位相空間の原点 \\(O(0,0)\\) は位相空間内での不動点である。(4) の結果を用いて、\\(\\triangle OAB\\) の面積が運動によって不変であることを示せ（Liouvilleの定理の例）。\n\n(1) のハミルトニアン \\(H(q,p)\\) において、\n\n\\[\nQ=\\log\\left(\\frac1q\\sin p\\right),\n\\qquad\nP=q\\cot p\n\\tag{B}\n\\]\n\nで定義される \\((q,p)\\to(Q,P)\\) の独立変数変換を行う。\n\n(6)\n\n\\[\n\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{\\partial H}{\\partial q}\n\\]\n\nをそれぞれ、\n\n\\[\n\\frac{\\partial H}{\\partial P},\n\\qquad\n\\frac{\\partial H}{\\partial Q}\n\\]\n\nを用いて表せ。\n\n(7) 正準方程式 (A) と (6) の結果を用いて、\n\n\\[\n\\frac{dQ}{dt},\n\\qquad\n\\frac{dP}{dt}\n\\]\n\nを計算し、変換 (B) が正準変換であることを示せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-3.webp\nalt: 工業力学A 2023年度 問題3の原本\n:::\n\n---\n\n---\n\n変数変換は、\n\n\\[\nQ=\\log\\left(\\frac{\\sin p}{q}\\right)\n\\]\n\n\\[\nP=q\\cot p\n\\]\n\nである。\n\n### \\(Q,P\\) の偏微分\n\n\\[\n\\frac{\\partial Q}{\\partial p}\n=\n\\cot p\n\\]\n\n\\[\n\\frac{\\partial Q}{\\partial q}\n=\n-\\frac1q\n\\]\n\n\\[\n\\frac{\\partial P}{\\partial p}\n=\n-q\\csc^2p\n\\]\n\n\\[\n\\frac{\\partial P}{\\partial q}\n=\n\\cot p.\n\\]\n\n### 連鎖律\n\n\\[\n\\frac{\\partial}{\\partial p}\n=\n\\frac{\\partial Q}{\\partial p}\n\\frac{\\partial}{\\partial Q}\n+\n\\frac{\\partial P}{\\partial p}\n\\frac{\\partial}{\\partial P}.\n\\]\n\nしたがって、\n\n\\[\n\\frac{\\partial}{\\partial p}\n=\n\\cot p\\frac{\\partial}{\\partial Q}\n-\nq\\csc^2p\\frac{\\partial}{\\partial P}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\frac{\\partial H}{\\partial p}\n=\n\\cot p\\frac{\\partial H}{\\partial Q}\n-\nq\\csc^2p\\frac{\\partial H}{\\partial P}\n}\n\\]\n\nである。\n\n同様に、\n\n\\[\n\\frac{\\partial}{\\partial q}\n=\n-\\frac1q\\frac{\\partial}{\\partial Q}\n+\n\\cot p\\frac{\\partial}{\\partial P}.\n\\]\n\nよって、\n\n\\[\n\\boxed{\n\\frac{\\partial H}{\\partial q}\n=\n-\\frac1q\\frac{\\partial H}{\\partial Q}\n+\n\\cot p\\frac{\\partial H}{\\partial P}\n}\n\\]\n\nである。\n\n### 間違えやすい点\n\n- \\(P=q\\cot p\\) の \\(p\\) 微分では、\n\n\\[\n\\frac{d}{dp}\\cot p=-\\csc^2p\n\\]\n\nを使う。\n- \\(\\partial H/\\partial p\\) を計算するときは、\\(Q\\) と \\(P\\) の両方が \\(p\\) に依存する。\n\n---",
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
              "markdown": "## 問題文（原文）\n\n:::problem-original\n1次元運動のラグランジアンが\n\n\\[\nL(q,\\dot q)=\\dot q^2-q^2\n\\]\n\nで与えられるとき、以下の問いに答えよ。\n\n(1) \\(q\\) と \\(p\\) の関数であるハミルトニアン\n\n\\[\nH(q,p)=p\\dot q-L\n\\]\n\nを求めよ。ただし、\n\n\\[\np=\\frac{\\partial L}{\\partial\\dot q}\n\\]\n\nとする。\n\n(2) ポアソン括弧式\n\n\\[\n[A,B]\n=\n\\frac{\\partial A}{\\partial q}\n\\frac{\\partial B}{\\partial p}\n-\n\\frac{\\partial A}{\\partial p}\n\\frac{\\partial B}{\\partial q}\n\\]\n\nを考えることにより、この運動の保存量（\\(H\\) の定数倍を除く）を1つ求めよ。\n\n\\(q,p\\) を正準変数とする正準方程式は、\n\n\\[\n\\frac{dq}{dt}=\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{dp}{dt}=-\\frac{\\partial H}{\\partial q}\n\\tag{A}\n\\]\n\nである。\n\n(3) (1) の \\(H=E\\)（正の定数）のとき、位相空間（\\(q-p\\) 面）内での軌道を図示せよ。その際、軌道上の運動の向きも矢印で記入すること。\n\n(4) 軌道上の2点 \\(A\\) と \\(B\\) が、初期 \\(t=0\\) にそれぞれ\n\n\\[\nA(0,p_0),\\qquad B(q_0,0)\n\\]\n\nにあったとき、任意の時刻 \\(t\\) におけるそれぞれの座標 \\((q,p)\\) を求めよ。\n\n(5) 位相空間の原点 \\(O(0,0)\\) は位相空間内での不動点である。(4) の結果を用いて、\\(\\triangle OAB\\) の面積が運動によって不変であることを示せ（Liouvilleの定理の例）。\n\n(1) のハミルトニアン \\(H(q,p)\\) において、\n\n\\[\nQ=\\log\\left(\\frac1q\\sin p\\right),\n\\qquad\nP=q\\cot p\n\\tag{B}\n\\]\n\nで定義される \\((q,p)\\to(Q,P)\\) の独立変数変換を行う。\n\n(6)\n\n\\[\n\\frac{\\partial H}{\\partial p},\n\\qquad\n\\frac{\\partial H}{\\partial q}\n\\]\n\nをそれぞれ、\n\n\\[\n\\frac{\\partial H}{\\partial P},\n\\qquad\n\\frac{\\partial H}{\\partial Q}\n\\]\n\nを用いて表せ。\n\n(7) 正準方程式 (A) と (6) の結果を用いて、\n\n\\[\n\\frac{dQ}{dt},\n\\qquad\n\\frac{dP}{dt}\n\\]\n\nを計算し、変換 (B) が正準変換であることを示せ。\n:::\n\n:::problem-asset\nsrc: /exams/engineering-mechanics-a/2023/page-3.webp\nalt: 工業力学A 2023年度 問題3の原本\n:::\n\n---\n\n---\n\n元の正準方程式は、\n\n\\[\n\\dot q=H_p\n\\]\n\n\\[\n\\dot p=-H_q\n\\]\n\nである。\n\nここで、\n\n\\[\nH_p=\\frac{\\partial H}{\\partial p},\n\\qquad\nH_q=\\frac{\\partial H}{\\partial q}.\n\\]\n\n---\n\n### \\(dQ/dt\\)\n\n連鎖律より、\n\n\\[\n\\dot Q\n=\nQ_q\\dot q+Q_p\\dot p.\n\\]\n\n\\[\n=\n-\\frac1qH_p\n+\n\\cot p(-H_q).\n\\]\n\n\\[\n=\n-\\frac1qH_p-\\cot pH_q.\n\\]\n\n前問の結果を代入する。\n\n\\[\n-\\frac1qH_p\n=\n-\\frac{\\cot p}{q}H_Q\n+\n\\csc^2pH_P.\n\\]\n\n\\[\n-\\cot pH_q\n=\n\\frac{\\cot p}{q}H_Q\n-\n\\cot^2pH_P.\n\\]\n\n足すと \\(H_Q\\) の項は消える。\n\n\\[\n\\dot Q\n=\n(\\csc^2p-\\cot^2p)H_P.\n\\]\n\n恒等式\n\n\\[\n\\csc^2p-\\cot^2p=1\n\\]\n\nより、\n\n\\[\n\\boxed{\n\\dot Q=\\frac{\\partial H}{\\partial P}\n}\n\\]\n\nを得る。\n\n---\n\n### \\(dP/dt\\)\n\n\\[\n\\dot P\n=\nP_q\\dot q+P_p\\dot p.\n\\]\n\n\\[\n=\n\\cot pH_p\n+\n(-q\\csc^2p)(-H_q).\n\\]\n\n\\[\n=\n\\cot pH_p\n+\nq\\csc^2pH_q.\n\\]\n\n前問の結果を代入する。\n\n\\[\n\\dot P\n=\n\\cot p\n\\left(\n\\cot pH_Q-q\\csc^2pH_P\n\\right)\n\\]\n\n\\[\n+\nq\\csc^2p\n\\left(\n-\\frac1qH_Q+\\cot pH_P\n\\right).\n\\]\n\n\\(H_P\\) の項は打ち消し合う。\n\n\\[\n\\dot P\n=\n(\\cot^2p-\\csc^2p)H_Q.\n\\]\n\n\\[\n\\cot^2p-\\csc^2p=-1\n\\]\n\nより、\n\n\\[\n\\boxed{\n\\dot P=-\\frac{\\partial H}{\\partial Q}\n}\n\\]\n\nを得る。\n\n---\n\n### 最終結論\n\n新しい変数 \\(Q,P\\) についても、\n\n\\[\n\\boxed{\n\\dot Q=\\frac{\\partial H}{\\partial P}\n}\n\\]\n\n\\[\n\\boxed{\n\\dot P=-\\frac{\\partial H}{\\partial Q}\n}\n\\]\n\nが成立する。\n\nしたがって、変換\n\n\\[\n\\boxed{\nQ=\\log\\left(\\frac{\\sin p}{q}\\right),\n\\qquad\nP=q\\cot p\n}\n\\]\n\nは正準変換である。\n\n# 年度全体の重要ポイント\n\n- 壁との接触中と離れた後では、系に作用する外力が変わる。\n- 2物体のばね運動は、重心運動と相対運動に分けると簡単になる。\n- リンク機構では、各剛体の重心座標と角速度を一般化座標で表す。\n- 小振動の固有振動数は、平衡位置近くのポテンシャルエネルギーの二次項で決まる。\n- ハミルトン力学では、位相空間の軌道と正準変換を連鎖律で扱う。",
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
      "name": "工業数学F2",
      "slug": "industrial-math-f2",
      "years": [
        {
          "year": 2023,
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
