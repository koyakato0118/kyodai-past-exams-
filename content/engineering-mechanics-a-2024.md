---
subject: 工業力学A
subject_slug: engineering-mechanics-a
year: 2024
teachers:
  - 西原
  - 花崎
source_file: 工業力学A(西原·花崎)2024.pdf
source_url: https://drive.google.com/file/d/1bShxwKoUTIisUW_fXotj-J7aebCXP8ZE/edit
problem_display: verbatim
source_pages:
  - 1
  - 2
  - 3
  - 4
problem_assets:
  - /exams/engineering-mechanics-a/2024/page-1.webp
  - /exams/engineering-mechanics-a/2024/page-2.webp
  - /exams/engineering-mechanics-a/2024/page-3.webp
  - /exams/engineering-mechanics-a/2024/page-4.webp
status: completed
questions:
  - id: q1-a
    title: 中心力場における保存量
  - id: q1-b
    title: 二次元調和振動子の回帰時間
  - id: q1-c
    title: 動径の周期
  - id: q2-a
    title: 穴あき滑車の質量と慣性モーメント
  - id: q2-b
    title: 系全体の運動エネルギー
  - id: q2-c
    title: 系全体のポテンシャルエネルギー
  - id: q2-d
    title: 振動数方程式
  - id: q3-1
    title: Liouvilleの定理
  - id: q3-2-1
    title: 三渦点の運動方程式
  - id: q3-2-2
    title: 重心と第3渦点の運動
  - id: q3-2-3
    title: 等速度並進する配置
  - id: q3-2-4
    title: ハミルトニアン
---

# 工業力学A 2024年度

> [!NOTE]
> Webサイトでは各問題の原文と元PDF画像を表示する。解説は原文とは別の領域に表示する。

# この年度で必要な予備知識

## 1. ラグランジュ方程式

一般化座標を \(q_i\)、ラグランジアンを

\[
L=T-U
\]

とすると、運動方程式は

\[
\boxed{
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot q_i}\right)
-\frac{\partial L}{\partial q_i}=0
}
\]

である。

:::why title="一般化座標とは？"
物体の状態を表すために必要な、互いに独立な座標のこと。直交座標 \(x,y\) だけでなく、極座標 \(r,\theta\)、回転角 \(\phi\) なども一般化座標として使える。
:::

## 2. 循環座標と保存量

ラグランジアンに座標 \(q\) が直接現れず、\(\dot q\) だけが現れるとき、

\[
\frac{\partial L}{\partial q}=0
\]

なので、

\[
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot q}\right)=0.
\]

したがって、

\[
p_q=\frac{\partial L}{\partial \dot q}
\]

が保存される。

## 3. 平行軸の定理

質量 \(m\) の物体について、重心を通る軸まわりの慣性モーメントを \(I_G\)、その軸と平行で距離 \(d\) だけ離れた軸まわりを \(I\) とすると、

\[
\boxed{I=I_G+md^2}
\]

である。

## 4. 小振動

平衡位置からの変位ベクトルを \(\boldsymbol q\) とし、

\[
M\ddot{\boldsymbol q}+K\boldsymbol q=0
\]

と書けるとき、

\[
\boldsymbol q=\boldsymbol a e^{i\omega t}
\]

を代入して、

\[
(K-\omega^2M)\boldsymbol a=0.
\]

非自明解が存在する条件は、

\[
\boxed{\det(K-\omega^2M)=0}
\]

である。これを振動数方程式または永年方程式という。

## 5. 複素速度ポテンシャル

複素座標を

\[
z=x+iy
\]

とし、複素速度ポテンシャルを \(f(z)\) とすると、

\[
u-iv=\frac{df}{dz}
\]

で速度場を表せる。

---

# Q1 二次元等方調和振動子

## 問題文（原文）

:::problem-original
平面内を運動する質量 \(m\) の質点について、動径の長さ \(r\) と角 \(\theta\) による極座標で位置を表現する。運動エネルギー \(T\) とポテンシャルエネルギー \(U\) を次のように仮定する。

\[
T=\frac12m(\dot r^2+r^2\dot\theta^2)
\]

\[
U=\frac12kr^2
\]

ここで、\(k\) は正の定数とする。質点には \(U\) による保存力だけが作用する。以下の設問に答えよ。

(a) 時間の経過により変化しない力学変数をひとつ見つけて、それが保存量であることを示せ。

(b) 質点は一定時間後に必ず同じ位置に戻ってくることを示して、このような回帰の所要時間を答えよ。

(c) 動径の長さ \(r\) が一定にならない場合、周期的に変化することを示せ。その周期を答えよ。
:::

:::problem-asset
src: /exams/engineering-mechanics-a/2024/page-1.webp
alt: 工業力学A 2024年度 問題1の原本
:::

## Q1-(a) 保存量

### 解法方針

ラグランジアンを作り、座標 \(\theta\) が循環座標であることを利用する。

### ラグランジアン

\[
L=T-U
=
\frac12m(\dot r^2+r^2\dot\theta^2)
-\frac12kr^2.
\]

この式には \(\theta\) 自身は含まれない。

\[
\frac{\partial L}{\partial\theta}=0.
\]

したがって、\(\theta\) に関するラグランジュ方程式から、

\[
\frac{d}{dt}
\left(
\frac{\partial L}{\partial\dot\theta}
\right)=0.
\]

ここで、

\[
\frac{\partial L}{\partial\dot\theta}
=mr^2\dot\theta.
\]

よって、

\[
\boxed{mr^2\dot\theta=\text{一定}}
\]

である。

これは原点まわりの角運動量である。

:::why title="なぜ θ が式に現れないの？"
ポテンシャル \(U=\frac12kr^2\) は原点からの距離だけで決まり、向きには依存しない。どの方向へ回転しても物理法則が変わらない回転対称性があるためである。
:::

### 最終解答

\[
\boxed{\ell=mr^2\dot\theta}
\]

は保存量である。

### 試験答案

\[
L=\frac12m(\dot r^2+r^2\dot\theta^2)-\frac12kr^2.
\]

\(L\) は \(\theta\) を陽に含まないので、

\[
\frac{d}{dt}\left(\frac{\partial L}{\partial\dot\theta}\right)=0.
\]

したがって、

\[
\boxed{mr^2\dot\theta=\text{const.}}
\]

となり、角運動量が保存される。

### 重要ポイント

- 座標がラグランジアンに現れなければ、その共役運動量が保存される。
- 中心力場では角運動量保存を最初に疑う。

---

## Q1-(b) 同じ位置へ戻る時間

### 解法方針

極座標のまま解くより、直交座標へ戻すと簡単になる。

\[
r^2=x^2+y^2
\]

なので、

\[
U=\frac12k(x^2+y^2).
\]

運動エネルギーも、

\[
T=\frac12m(\dot x^2+\dot y^2)
\]

である。

したがってラグランジアンは、

\[
L=
\frac12m(\dot x^2+\dot y^2)
-\frac12k(x^2+y^2).
\]

### 運動方程式

\(x\) について、

\[
m\ddot x+kx=0.
\]

\(y\) について、

\[
m\ddot y+ky=0.
\]

固有角振動数を

\[
\omega=\sqrt{\frac{k}{m}}
\]

と置く。

一般解は、

\[
x(t)=A\cos\omega t+B\sin\omega t
\]

\[
y(t)=C\cos\omega t+D\sin\omega t.
\]

三角関数は

\[
\cos(\omega t+2\pi)=\cos\omega t
\]

\[
\sin(\omega t+2\pi)=\sin\omega t
\]

を満たすので、

\[
x\left(t+\frac{2\pi}{\omega}\right)=x(t)
\]

\[
y\left(t+\frac{2\pi}{\omega}\right)=y(t).
\]

したがって、質点の位置ベクトルは必ず同じ位置へ戻る。

### 最終解答

\[
\boxed{
T_{\mathrm{return}}
=
\frac{2\pi}{\omega}
=
2\pi\sqrt{\frac{m}{k}}
}
\]

である。

:::why title="なぜ x と y の周期が同じなの？"
ポテンシャルが \(x^2+y^2\) に比例する等方的なばねだからである。x方向とy方向のばね定数が同じなので、両方の角振動数が \(\sqrt{k/m}\) になる。
:::

### 間違えやすい点

- 動径 \(r\) の周期と、位置ベクトル \((x,y)\) の回帰時間は異なる。
- 一般の位置へ戻る保証時間は \(2\pi/\omega\)。

---

## Q1-(c) 動径の周期

### 解法方針

\(r\) ではなく \(r^2=x^2+y^2\) を計算する。

\[
x=A\cos\omega t+B\sin\omega t
\]

\[
y=C\cos\omega t+D\sin\omega t.
\]

これらを二乗して足すと、

\[
r^2=x^2+y^2.
\]

三角恒等式

\[
\cos^2\omega t=\frac{1+\cos2\omega t}{2}
\]

\[
\sin^2\omega t=\frac{1-\cos2\omega t}{2}
\]

\[
2\sin\omega t\cos\omega t=\sin2\omega t
\]

を使えば、

\[
r^2(t)
=
C_0+C_1\cos2\omega t+C_2\sin2\omega t
\]

と書ける。

したがって、

\[
r^2\left(t+\frac{\pi}{\omega}\right)=r^2(t).
\]

\(r\ge0\) なので、

\[
r\left(t+\frac{\pi}{\omega}\right)=r(t).
\]

\(r\) が一定でない場合、その周期は、

\[
\boxed{
T_r=\frac{\pi}{\omega}
=
\pi\sqrt{\frac{m}{k}}
}
\]

である。

:::why title="なぜ位置の周期の半分になるの？"
位置ベクトルが反対向きになっても、原点からの距離は同じである。時間 \(\pi/\omega\) 後には \((x,y)\to(-x,-y)\) となるが、\(r=\sqrt{x^2+y^2}\) は変わらない。
:::

### 最終解答

\[
\boxed{
T_r=\pi\sqrt{\frac{m}{k}}
}
\]

---

# Q2 穴あき滑車と2つのばね

## 問題文（原文）

:::problem-original
図1に示すように滑車の両側にかけられたロープがいずれも鉛直方向に伸びている。

左側のロープ上端は天井に固定されている。右側のロープは天井から吊り下げられたばね定数 \(k\) の線形ばねに接続されている。ロープと滑車にすべりは生じない。

滑車は面密度 \(\rho\) の均質な材質で作られており、半径は \(r\) である。滑車には半径が \(r/4\) の円形ホール4個が均等に開けられており、ホールの中心は滑車の中心から \(r/2\) の位置にある。

滑車の中心からばね定数 \(k\) のばねを介して、質量 \(M\) の重りが吊り下げられている。

摩擦や空気抵抗などによるエネルギー散逸は生じないものと仮定する。ばね、ロープ、重りを吊り下げている糸の質量は無視できる。重力加速度を \(g\) とおく。

解答にはラグランジュの方程式を用いること。

(a) 滑車の質量 \(m\)、滑車の中心についての慣性モーメント \(I\) を求めよ。なお、(b)以降の設問には \(m,I\) を用いて答えてよい。

(b) 系全体の運動エネルギー \(T\) を求めよ。

(c) 系全体のポテンシャルエネルギー \(U\) を求めよ。

(d) この系の振動数方程式（永年方程式）を導け。
:::

:::problem-asset
src: /exams/engineering-mechanics-a/2024/page-2.webp
alt: 工業力学A 2024年度 問題2の原本と滑車の図
:::

## 座標の定義

下向きを正とする。

- 滑車中心の変位：\(x\)
- 重り \(M\) の変位：\(y\)
- 滑車の時計回り回転角：\(\phi\)

とする。

左側ロープは固定され、ロープと滑車はすべらない。

滑車左端の接触点の速度が0なので、

\[
\dot x-r\dot\phi=0.
\]

したがって、

\[
\boxed{\dot\phi=\frac{\dot x}{r}}.
\]

右端接触点の速度は、

\[
\dot x+r\dot\phi
=
2\dot x.
\]

よって、上側ばねの伸びの変化量は \(2x\) である。

:::why title="なぜ上側ばねは滑車変位の2倍伸びるの？"
滑車が \(x\) 下がると左側ロープ部分が \(x\) 長くなる。ロープ全長は一定なので、右側のばね端はさらに \(x\) 下がる必要があり、合計で \(2x\) 動く。
:::

## Q2-(a) 質量と慣性モーメント

### 質量

穴を開ける前の円板の質量は、

\[
m_0=\rho\pi r^2.
\]

1個の穴の質量に相当する量は、

\[
m_h
=
\rho\pi\left(\frac r4\right)^2
=
\frac{\rho\pi r^2}{16}.
\]

穴は4個なので、

\[
m
=
m_0-4m_h.
\]

したがって、

\[
\boxed{
m=\frac34\rho\pi r^2
}
\]

である。

### 慣性モーメント

穴を開ける前の円板は、

\[
I_0=\frac12m_0r^2
=\frac12\rho\pi r^4.
\]

1個の穴について、穴中心まわりの慣性モーメントは、

\[
I_{h,G}
=
\frac12m_h\left(\frac r4\right)^2.
\]

穴の中心は滑車中心から \(r/2\) 離れているので、平行軸の定理より、

\[
I_h
=
I_{h,G}
+
m_h\left(\frac r2\right)^2.
\]

代入すると、

\[
I_h
=
m_hr^2\left(\frac1{32}+\frac14\right)
=
\frac9{32}m_hr^2.
\]

\[
m_h=\frac{\rho\pi r^2}{16}
\]

より、

\[
I_h=\frac{9}{512}\rho\pi r^4.
\]

穴は4個なので、

\[
I
=
I_0-4I_h
\]

\[
=
\frac12\rho\pi r^4
-
\frac{36}{512}\rho\pi r^4.
\]

したがって、

\[
\boxed{
I=\frac{55}{128}\rho\pi r^4
}
\]

である。

\(m\) を用いれば、

\[
\boxed{
I=\frac{55}{96}mr^2
}
\]

とも書ける。

### 重要ポイント

- 穴は「負の質量」と考えて円板から引く。
- 穴の慣性モーメントには平行軸の定理が必要。

---

## Q2-(b) 運動エネルギー

滑車の並進運動エネルギーは、

\[
\frac12m\dot x^2.
\]

滑車の回転運動エネルギーは、

\[
\frac12I\dot\phi^2.
\]

\[
\dot\phi=\frac{\dot x}{r}
\]

なので、

\[
\frac12I\dot\phi^2
=
\frac12\frac{I}{r^2}\dot x^2.
\]

重りの運動エネルギーは、

\[
\frac12M\dot y^2.
\]

したがって、

\[
\boxed{
T=
\frac12\left(m+\frac{I}{r^2}\right)\dot x^2
+
\frac12M\dot y^2
}
\]

である。

:::why title="なぜ滑車の回転エネルギーも必要なの？"
滑車は中心が上下に移動するだけでなく、ロープとの非すべり条件によって回転もする。並進と回転の両方の運動エネルギーを足す必要がある。
:::

---

## Q2-(c) ポテンシャルエネルギー

座標 \(x,y\) は下向きを正とする。

### 上側ばね

伸びは \(2x\) なので、

\[
U_{\mathrm{upper}}
=
\frac12k(2x)^2
=
2kx^2.
\]

### 下側ばね

滑車中心と重りの相対変位は、

\[
y-x
\]

なので、

\[
U_{\mathrm{lower}}
=
\frac12k(y-x)^2.
\]

### 重力

下向きを正としたため、

\[
U_g=-mgx-Mgy.
\]

したがって、加法定数を除いて、

\[
\boxed{
U=
2kx^2
+\frac12k(y-x)^2
-mgx-Mgy
}
\]

である。

### 注意

自然長や座標原点の取り方によって一次項・定数項の見え方は変わるが、平衡位置のまわりで線形化した振動数方程式は同じになる。

---

## Q2-(d) 振動数方程式

### ラグランジアン

\[
L=T-U.
\]

便利のため、

\[
A=m+\frac{I}{r^2}
\]

と置く。

### \(x\) の運動方程式

\[
\frac{d}{dt}\left(\frac{\partial L}{\partial\dot x}\right)
-
\frac{\partial L}{\partial x}=0.
\]

\[
A\ddot x+5kx-ky-mg=0.
\]

### \(y\) の運動方程式

\[
M\ddot y+ky-kx-Mg=0.
\]

### 平衡位置

平衡位置を \(x_0,y_0\) とすると、

\[
5kx_0-ky_0-mg=0
\]

\[
ky_0-kx_0-Mg=0.
\]

平衡位置からの微小変位を、

\[
\xi=x-x_0,\qquad \eta=y-y_0
\]

と置くと、重力の定数項は消える。

\[
A\ddot\xi+5k\xi-k\eta=0
\]

\[
M\ddot\eta+k\eta-k\xi=0.
\]

行列で、

\[
\begin{pmatrix}
A&0\\
0&M
\end{pmatrix}
\begin{pmatrix}
\ddot\xi\\
\ddot\eta
\end{pmatrix}
+
k
\begin{pmatrix}
5&-1\\
-1&1
\end{pmatrix}
\begin{pmatrix}
\xi\\
\eta
\end{pmatrix}
=0.
\]

調和解

\[
\begin{pmatrix}
\xi\\
\eta
\end{pmatrix}
=
\begin{pmatrix}
X\\
Y
\end{pmatrix}
e^{i\omega t}
\]

を仮定すると、

\[
\begin{pmatrix}
5k-A\omega^2&-k\\
-k&k-M\omega^2
\end{pmatrix}
\begin{pmatrix}
X\\
Y
\end{pmatrix}
=0.
\]

非自明解が存在する条件は、

\[
\boxed{
\begin{vmatrix}
5k-A\omega^2&-k\\
-k&k-M\omega^2
\end{vmatrix}
=0
}
\]

である。

したがって振動数方程式は、

\[
\boxed{
(5k-A\omega^2)(k-M\omega^2)-k^2=0
}
\]

すなわち、

\[
\boxed{
AM\omega^4
-k(A+5M)\omega^2
+4k^2=0
}
\]

である。

ここで、

\[
\boxed{
A=m+\frac{I}{r^2}
}
\]

である。

### 固有角振動数

必要なら、

\[
\boxed{
\omega_{\pm}^2
=
\frac{k\left[
A+5M
\pm
\sqrt{(A+5M)^2-16AM}
\right]}
{2AM}
}
\]

と求められる。

### 試験答案

非すべり条件より、

\[
\dot\phi=\frac{\dot x}{r}
\]

かつ上側ばねの伸びは \(2x\)。

\[
T=
\frac12\left(m+\frac{I}{r^2}\right)\dot x^2
+\frac12M\dot y^2
\]

\[
U=
2kx^2+\frac12k(y-x)^2-mgx-Mgy.
\]

平衡位置からの変位 \(\xi,\eta\) を用いると、

\[
\left(m+\frac{I}{r^2}\right)\ddot\xi+5k\xi-k\eta=0
\]

\[
M\ddot\eta-k\xi+k\eta=0.
\]

よって、

\[
\boxed{
\left|
\begin{array}{cc}
5k-\left(m+\frac{I}{r^2}\right)\omega^2&-k\\
-k&k-M\omega^2
\end{array}
\right|=0
}
\]

を得る。

---

# Q3-(1) Liouvilleの定理

## 問題文（原文）

:::problem-original
一次元運動について、Liouvilleの定理の証明を考える。

位相空間における閉領域の体積は、

\[
V=\int dpdq
=
\int
\frac{\partial(p,q)}{\partial(c_1,c_2)}
dc_1dc_2
\]

である。

ここで、

\[
\frac{\partial(p,q)}{\partial(c_1,c_2)}
=
\begin{vmatrix}
\dfrac{\partial p}{\partial c_1}
&
\dfrac{\partial p}{\partial c_2}
\\
\dfrac{\partial q}{\partial c_1}
&
\dfrac{\partial q}{\partial c_2}
\end{vmatrix}
\]

はヤコビアンである。

\(p=p(c_1,c_2,t)\)、\(q=q(c_1,c_2,t)\) のとき、積分変数を \((p,q)\to(c_1,c_2)\) に変えている。

\(c_1,c_2\) は軌道を決定するパラメータで、\(t\) によらない。

空欄 A〜E を求め、Liouvilleの定理 \(dV/dt=0\) を示せ。
:::

:::problem-asset
src: /exams/engineering-mechanics-a/2024/page-3.webp
alt: 工業力学A 2024年度 問題3-1の原本
:::

## (1) AとB

ヤコビアンを時間微分する。

\[
J=
\frac{\partial(p,q)}{\partial(c_1,c_2)}
=
p_{c_1}q_{c_2}-p_{c_2}q_{c_1}.
\]

時間微分すると、

\[
\dot J
=
\dot p_{c_1}q_{c_2}
+p_{c_1}\dot q_{c_2}
-\dot p_{c_2}q_{c_1}
-p_{c_2}\dot q_{c_1}.
\]

前半は、

\[
\frac{\partial(\dot p,q)}{\partial(c_1,c_2)}.
\]

後半は、

\[
\frac{\partial(p,\dot q)}{\partial(c_1,c_2)}
=
\frac{\partial(-\dot q,p)}{\partial(c_1,c_2)}.
\]

したがって、

\[
\boxed{A=\dot p}
\]

\[
\boxed{B=-\dot q}
\]

である。

:::why title="なぜ B は −q̇ なの？"
問題文では第2項が \(\partial(B,p)/\partial(c_1,c_2)\) の順番で書かれている。ヤコビアンは2つの引数を入れ替えると符号が反転するため、\(\partial(p,\dot q) = \partial(-\dot q,p)\) となる。
:::

## (2) CとD

正準方程式は、

\[
\dot q=\frac{\partial H}{\partial p}
\]

\[
\dot p=-\frac{\partial H}{\partial q}.
\]

したがって、

\[
A=\dot p=-\frac{\partial H}{\partial q}
\]

\[
B=-\dot q=-\frac{\partial H}{\partial p}.
\]

よって、

\[
\boxed{
C=-\frac{\partial H}{\partial q}
}
\]

\[
\boxed{
D=-\frac{\partial H}{\partial p}
}
\]

である。

## (3) Eと体積保存

ヤコビアンの連鎖則より、

\[
\frac{\partial(C,q)}{\partial(c_1,c_2)}
=
\frac{\partial(C,q)}{\partial(p,q)}
\frac{\partial(p,q)}{\partial(c_1,c_2)}.
\]

\[
C=-H_q
\]

なので、

\[
\frac{\partial(C,q)}{\partial(p,q)}
=
-\frac{\partial^2H}{\partial p\partial q}.
\]

したがって第1項は、

\[
-\frac{\partial^2H}{\partial p\partial q}
\frac{\partial(p,q)}{\partial(c_1,c_2)}.
\]

よって、

\[
\boxed{
E=
-\frac{\partial^2H}{\partial p\partial q}
\frac{\partial(p,q)}{\partial(c_1,c_2)}
}
\]

である。

一方、第2項は、

\[
+\frac{\partial^2H}{\partial q\partial p}
\frac{\partial(p,q)}{\partial(c_1,c_2)}
=-E
\]

である。

\(H\) が十分滑らかなら、混合偏微分は等しい。

\[
\frac{\partial^2H}{\partial p\partial q}
=
\frac{\partial^2H}{\partial q\partial p}.
\]

したがって被積分関数は0となり、

\[
\boxed{\frac{dV}{dt}=0}
\]

を得る。

### 空欄まとめ

\[
\boxed{A=\dot p}
\]

\[
\boxed{B=-\dot q}
\]

\[
\boxed{C=-H_q}
\]

\[
\boxed{D=-H_p}
\]

\[
\boxed{
E=-H_{pq}
\frac{\partial(p,q)}{\partial(c_1,c_2)}
}
\]

### Liouvilleの定理の意味

ハミルトン力学に従って時間発展する点の集まりは、位相空間内で形が変形しても、体積は変化しない。

---

# Q3-(2) 3つの渦点

## 問題文（原文）

:::problem-original
点 \(z_1(=x_1+iy_1)\) と \(z_2\) にある渦点の循環が

\[
\Gamma_1=\Gamma_2=\Gamma
\]

\(z_3\) にある渦点の循環が

\[
\Gamma_3=-2\Gamma
\]

のとき、各渦点が生成する複素速度ポテンシャルは、

\[
f_1(z)=\frac{\Gamma}{2\pi i}\log(z-z_1)
\]

\[
f_2(z)=\frac{\Gamma}{2\pi i}\log(z-z_2)
\]

\[
f_3(z)=-\frac{2\Gamma}{2\pi i}\log(z-z_3)
\]

である。

(1) \(dz_k^*/dt\) を \(\Gamma\) と \(z_k\) を用いて表す式を書け。

(2) \(z_1,z_2\) の循環で重みづけした重心を

\[
z_G=\frac{z_1+z_2}{2}
\]

と定義するとき、重心 \(z_G\) と渦点 \(z_3\) の運動はどんな関係にあるか。

(3) \(z_1\) が \(z_G\) と同じ速度で移動する条件を導出し、そのときの位置関係を図示せよ。まず

\[
z_1-z_G=c,\qquad z_3-z_G=a
\]

とし、\(c\) を \(a\) で表せ。

(4) ハミルトニアンを

\[
H=
\sum_{m=1}^{3}
\sum_{\substack{l=1\\l\ne m}}^{3}
\Gamma_m\Gamma_l
\log|z_m-z_l|^2
\]

で定義するとき、(3)のときの \(H\) の値を \(\Gamma,a\) で表せ。
:::

:::problem-asset
src: /exams/engineering-mechanics-a/2024/page-4.webp
alt: 工業力学A 2024年度 問題3-2の原本
:::

## Q3-(2)-(1) 各渦点の運動方程式

渦点 \(k\) は、自分以外の渦点が作る速度場で移動する。

\[
\frac{dz_k^*}{dt}
=
\sum_{j\ne k}
\frac{\Gamma_j}{2\pi i}
\frac1{z_k-z_j}.
\]

したがって、

\[
\boxed{
\frac{dz_1^*}{dt}
=
\frac{\Gamma}{2\pi i}
\left(
\frac1{z_1-z_2}
-\frac2{z_1-z_3}
\right)
}
\]

\[
\boxed{
\frac{dz_2^*}{dt}
=
\frac{\Gamma}{2\pi i}
\left(
\frac1{z_2-z_1}
-\frac2{z_2-z_3}
\right)
}
\]

\[
\boxed{
\frac{dz_3^*}{dt}
=
\frac{\Gamma}{2\pi i}
\left(
\frac1{z_3-z_1}
+\frac1{z_3-z_2}
\right)
}
\]

である。

### 間違えやすい点

- 渦点自身が作る速度場は含めない。
- 第3渦点の循環は \(-2\Gamma\)。

---

## Q3-(2)-(2) 重心と第3渦点

\[
z_G=\frac{z_1+z_2}{2}
\]

なので、

\[
\frac{dz_G^*}{dt}
=
\frac12
\left(
\frac{dz_1^*}{dt}
+
\frac{dz_2^*}{dt}
\right).
\]

\(z_1,z_2\) 間の相互作用は、

\[
\frac1{z_1-z_2}
+
\frac1{z_2-z_1}=0
\]

により打ち消し合う。

残りを整理すると、

\[
\frac{dz_G^*}{dt}
=
\frac{\Gamma}{2\pi i}
\left(
\frac1{z_3-z_1}
+
\frac1{z_3-z_2}
\right).
\]

これは、

\[
\frac{dz_3^*}{dt}
\]

と等しい。

したがって、

\[
\boxed{
\frac{dz_G}{dt}
=
\frac{dz_3}{dt}
}
\]

である。

よって、

\[
\boxed{
z_G-z_3=\text{一定}
}
\]

であり、\(z_G\) と \(z_3\) は同じ速度で並進し、相対位置を変えない。

---

## Q3-(2)-(3) 全渦点が同じ速度で移動する配置

\[
z_1-z_G=c
\]

と置く。

\[
z_G=\frac{z_1+z_2}{2}
\]

なので、

\[
z_2-z_G=-c.
\]

また、

\[
z_3-z_G=a.
\]

したがって、

\[
z_1=z_G+c,\qquad
z_2=z_G-c,\qquad
z_3=z_G+a.
\]

### \(z_1\) の速度

\[
z_1-z_2=2c
\]

\[
z_1-z_3=c-a.
\]

よって、

\[
\frac{dz_1^*}{dt}
=
\frac{\Gamma}{2\pi i}
\left(
\frac1{2c}
-\frac2{c-a}
\right).
\]

### \(z_G\) の速度

前問より \(z_G\) と \(z_3\) の速度は等しい。

\[
z_3-z_1=a-c,\qquad
z_3-z_2=a+c.
\]

したがって、

\[
\frac{dz_G^*}{dt}
=
\frac{\Gamma}{2\pi i}
\left(
\frac1{a-c}
+
\frac1{a+c}
\right).
\]

\(z_1\) と \(z_G\) が同じ速度で移動するためには、

\[
\frac1{2c}
-\frac2{c-a}
=
\frac1{a-c}
+
\frac1{a+c}.
\]

\[
-\frac2{c-a}
=
\frac2{a-c}
\]

を用いて整理すると、

\[
\frac1{2c}
+
\frac1{a-c}
-
\frac1{a+c}
=0.
\]

\[
\frac1{a-c}
-
\frac1{a+c}
=
\frac{2c}{a^2-c^2}
\]

なので、

\[
\frac1{2c}
+
\frac{2c}{a^2-c^2}
=0.
\]

両辺に \(2c(a^2-c^2)\) を掛けると、

\[
a^2-c^2+4c^2=0.
\]

したがって、

\[
a^2+3c^2=0.
\]

よって、

\[
\boxed{
c=\pm\frac{i}{\sqrt3}a
}
\]

である。

### 幾何学的意味

\(c\) は \(a\) を90度回転させ、長さを \(1/\sqrt3\) 倍したベクトルである。

\[
z_1=z_G\pm\frac{i}{\sqrt3}a
\]

\[
z_2=z_G\mp\frac{i}{\sqrt3}a
\]

\[
z_3=z_G+a.
\]

各点間距離を計算すると、

\[
|z_1-z_2|
=
\frac{2|a|}{\sqrt3}
\]

\[
|z_1-z_3|
=
\left|a-\frac{i}{\sqrt3}a\right|
=
\frac{2|a|}{\sqrt3}
\]

\[
|z_2-z_3|
=
\frac{2|a|}{\sqrt3}.
\]

したがって、3つの渦点は正三角形の頂点に位置する。

\[
\boxed{\text{等速度並進する配置は正三角形}}
\]

である。

:::why title="なぜ回転せず並進するの？"
3点がこの正三角形配置にあると、各渦点が他の2点から受ける速度が全く同じになる。そのため相対配置を変えず、全体が同じ速度で移動する。
:::

---

## Q3-(2)-(4) ハミルトニアン

正三角形の一辺の長さを \(d\) とすると、

\[
d=\frac{2|a|}{\sqrt3}.
\]

したがって、

\[
d^2=\frac{4|a|^2}{3}.
\]

ハミルトニアンは順序付きの二重和なので、各組は2回ずつ数えられる。

循環の積は、

\[
\Gamma_1\Gamma_2=\Gamma^2
\]

\[
\Gamma_1\Gamma_3=-2\Gamma^2
\]

\[
\Gamma_2\Gamma_3=-2\Gamma^2.
\]

したがって、

\[
H
=
2\left(
\Gamma^2-2\Gamma^2-2\Gamma^2
\right)\log d^2.
\]

\[
= -6\Gamma^2\log d^2.
\]

\[
d^2=\frac{4|a|^2}{3}
\]

を代入して、

\[
\boxed{
H
=
-6\Gamma^2
\log\left(
\frac{4|a|^2}{3}
\right)
}
\]

である。

### 試験答案

\[
c=\pm\frac{i}{\sqrt3}a
\]

より、3渦点は一辺

\[
d=\frac{2|a|}{\sqrt3}
\]

の正三角形を作る。

二重和は各組を2回数えるので、

\[
H
=
2(\Gamma^2-2\Gamma^2-2\Gamma^2)\log d^2.
\]

したがって、

\[
\boxed{
H=-6\Gamma^2
\log\left(\frac{4|a|^2}{3}\right)
}.
\]

# 年度全体の重要ポイント

- 等方調和振動子では、位置の周期と動径の周期が異なる。
- 移動滑車では、並進速度と回転速度を非すべり条件で結ぶ。
- 振動数方程式では、重力は平衡位置を変えるだけで固有振動数には現れない。
- Liouvilleの定理では、正準方程式と混合偏微分の交換可能性が本質。
- 渦点問題では、複素速度を自分以外の渦点の寄与の和で求める。
