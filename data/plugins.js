// Plugin catalog — updated with detailed descriptions from official docs.
// All plugins: Windows / VST3 only. Ableton Live verified. Other DAWs unverified.
window.PLUGINS = [
  {
    id: "ambience",
    num: "01",
    name: "Ambience",
    category: { en: "Algorithmic Reverb — 16-Channel FDN", jp: "アルゴリズミック・リバーブ — 16ch FDN" },
    type: "Effect",
    year: "2026",
    version: "1.0.1",
    status: "Released",
    comingSoon: false,
    featured: true,
    featureUrl: "ambience.html",
    screenshot: "assets/ambience-screenshot-1.jpg",
    screenshotPro: "assets/ambience-screenshot-2.jpg",
    tagline: {
      en: "World-class halls in 16 channels of FDN. Free.",
      jp: "世界の名ホールを、16ch FDN に閉じ込めた。無料で。"
    },
    description: {
      en: "A research-grade open-source algorithmic reverb built on a 16-channel Feedback Delay Network. 21 factory presets modeled after Abbey Road, Vienna Musikverein, Concertgebouw, Carnegie Hall and more — at zero cost.",
      jp: "16 チャンネル Feedback Delay Network を核に据えた、リサーチグレードのオープンソース・アルゴリズミック・リバーブ。Abbey Road、Vienna Musikverein、Concertgebouw、Carnegie Hall など 21 種の名空間プリセットを、無料で。"
    },
    features: [
      { en: "16-channel FDN with FWHT feedback matrix", jp: "FWHT 帰還行列の 16ch FDN" },
      { en: "7 algorithms — ROOM1/2 · HALL1/2 · PLATE · SPRING · GOLDFOIL", jp: "7 アルゴリズム — ROOM1/2 ／ HALL1/2 ／ PLATE ／ SPRING ／ GOLDFOIL" },
      { en: "21 factory presets (Abbey Road, Musikverein, Carnegie etc.)", jp: "21 ファクトリプリセット (Abbey Road、Musikverein、Carnegie 他)" },
      { en: "10-band Välimäki-Liski GEQ absorption per channel", jp: "チャンネルごとの 10 バンド Välimäki-Liski GEQ 吸収" },
      { en: "ISM-based Early Reflections w/ per-algorithm tuning", jp: "ISM ベース Early Reflections (アルゴリズムごとに最適化)" },
      { en: "ADAA Saturator — Warm / Tape / Tube / Hard", jp: "ADAA サチュレータ — Warm／Tape／Tube／Hard" },
      { en: "Real-time D50 / C50 / C80 / EDT readouts", jp: "リアルタイム D50 ／ C50 ／ C80 ／ EDT 計測表示" },
      { en: "Pro Mode — 10-band RT60 multipliers + Tilt EQ", jp: "Pro モード — 10 バンド RT60 倍率 ＋ Tilt EQ" },
      { en: "Ableton-hardened — zero heap alloc, jitter-protected", jp: "Ableton 対応堅牢化 — ヒープ確保ゼロ、ジッタ保護" }
    ],
    repo: "https://github.com/OTODESK4193/Ambience1.0.1",
    accent: "#ff8a3c"
  },
  {
    id: "basssynth",
    num: "02",
    name: "BassSynth",
    category: { en: "Next-Gen Wavetable Bass Synthesizer", jp: "次世代ウェーブテーブル・ベース・シンセ" },
    type: "Instrument",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "Crushing low end meets crystalline top textures.",
      jp: "圧倒的な低域と、結晶のような高域のテクスチャ。"
    },
    description: {
      en: "A next-generation wavetable bass synthesizer built in C++ and JUCE for modern electronic music producers. Combines crushing low end with crystal-clear top textures in an intuitive Ableton-style dark UI.",
      jp: "C++ と JUCE で構築された次世代ウェーブテーブル・ベース・シンセ。圧倒的な低域とクリスタルクリアな高域を、直感的な Ableton スタイルのダーク UI で操作できます。"
    },
    features: [
      { en: "10 factory morphing tables (64-frame, zero-latency)", jp: "10 種ファクトリーモーフィングテーブル (64 フレーム / ゼロレイテンシ)" },
      { en: "Custom .wav wavetable import w/ band-limited interp", jp: "カスタム .wav インポート (帯域制限補間)" },
      { en: "13 spectral morph modes across A / B / C slots", jp: "A / B / C スロット × 13 モーフモード" },
      { en: "Color IR Engine — auto chord-learning convolution", jp: "Color IR エンジン — MIDI コード自動学習 → IR 生成" },
      { en: "Sparkle Arp — harmony-aware high-freq arpeggiator", jp: "Sparkle Arp — 学習コードに連動する高周波アルペジエータ" },
      { en: "Dual state-variable filter (serial / parallel)", jp: "デュアル状態可変フィルタ (直列／並列)" },
      { en: "MSEG × 2 + 3 LFO + 3 mod envelopes", jp: "MSEG × 2 ＋ LFO × 3 ＋ Mod Env × 3" },
      { en: "10-slot modulation matrix", jp: "10 スロット・モジュレーション・マトリクス" },
      { en: "True OTT + Soothe-style resonance suppressor", jp: "真の OTT ＋ Soothe スタイル共振抑制" },
      { en: "Zero-latency brickwall peak limiter", jp: "ゼロレイテンシ・ブリックウォール・リミッタ" }
    ],
    repo: "https://github.com/OTODESK4193/BassSynth",
    accent: "#00d4ff"
  },
  {
    id: "neoto-pre",
    num: "03",
    name: "NEOTO Pre",
    category: { en: "Analog-Modeled Preamp & Transformer Saturator", jp: "アナログモデリング・プリアンプ／トランス・サチュレータ" },
    type: "Effect",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "Physical modeling of magnetic hysteresis. Not waveshaping.",
      jp: "磁気ヒステリシスの物理モデリング。ただの波形整形ではない。"
    },
    description: {
      en: "An open-source, finely-tuned analog-modeled preamp & transformer saturation plugin. Built on rigorous DSP and physical modeling of magnetic hysteresis and discrete component behavior — not static waveshapers — with state-of-the-art anti-aliasing.",
      jp: "オープンソースの精密なアナログモデリング・プリアンプ／トランスサチュレーション・プラグイン。静的な波形整形器ではなく、磁気ヒステリシスと個別部品挙動の物理モデリング、最先端のアンチエイリアシングを組み合わせています。"
    },
    features: [
      { en: "6 preamp models — API / Neve / Vintage Tube / SSL / Modern 1&2", jp: "6 種プリアンプ — API / Neve / Vintage Tube / SSL / Modern 1&2" },
      { en: "Independent input & output transformer selection", jp: "入力／出力トランスを独立選択" },
      { en: "6 transformer models — Nickel / Steel / Iron / Amorphous / Carnhill / Cinemag", jp: "6 種トランス — Nickel / Steel / Iron / Amorphous / Carnhill / Cinemag" },
      { en: "Jiles-Atherton & Tellinen hysteresis models", jp: "Jiles-Atherton ＋ Tellinen ヒステリシスモデル" },
      { en: "Drive & Character — even/odd harmonic balance", jp: "Drive ＆ Character — 偶数／奇数倍音バランス" },
      { en: "Color & Air — transformer-specific biquad shelves", jp: "Color ＆ Air — トランス専用バイカッドシェルフ" },
      { en: "Aging — dynamic HP/LP for component wear", jp: "Aging — 動的 HP/LP で経年劣化シミュレート" }
    ],
    repo: "https://github.com/OTODESK4193/NEOTO_Pre",
    accent: "#ff7a3a"
  },
  {
    id: "lumina",
    num: "04",
    name: "LUMINA",
    category: { en: "Spectral Dynamics", jp: "スペクトル・ダイナミクス" },
    type: "Effect",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "Psychoacoustic precision. Surgical, not broad.",
      jp: "心理音響モデルによる外科的精度。広帯域には頼らない。"
    },
    description: {
      en: "An open-source next-gen spectral dynamics & glitch resynthesizer. Combines a high-resolution Kaiser-Bessel WOLA STFT engine with a 24-band Bark-scale psychoacoustic masking model for absolute precision in resonance control, harmonic/percussive manipulation, and dynamic spatial depth.",
      jp: "オープンソースの次世代スペクトル・ダイナミクス／グリッチ・リシンセサイザー。高解像度 Kaiser-Bessel WOLA STFT エンジンと 24 バンド Bark スケール心理音響マスキングモデルを組み合わせ、共鳴制御・ハーモニック/パーカッシブ操作・空間表現で絶対的な精度を実現。"
    },
    features: [
      { en: "24-band Bark-scale mutual masking — only suppresses clashing freqs", jp: "24 バンド Bark スケール相互マスキング — 衝突周波数のみ抑制" },
      { en: "TPT zero-delay-feedback envelope follower (artifact-free)", jp: "TPT ゼロ遅延フィードバック・エンベロープ追従" },
      { en: "Harmonic / Percussive Source Separation (HPSS)", jp: "Harmonic / Percussive Source Separation (HPSS)" },
      { en: "Spectral flux onset detection, alloc-free", jp: "スペクトル・フラックス onset 検出 (割当なし)" },
      { en: "Intelligent Auto-band — finds optimal crossovers", jp: "Intelligent Auto-band — 最適クロスオーバー自動検出" },
      { en: "M/S Width + Schroeder all-pass decoherence", jp: "M/S Width ＋ Schroeder オールパス・デコヒーレンス" },
      { en: "TPT Linkwitz-Riley crossover — phase-coherent, zero latency stack", jp: "TPT Linkwitz-Riley クロスオーバー — 位相整合・レイテンシ蓄積なし" },
      { en: "Pro mode — independent HPSS/M-S/band-link control", jp: "Pro モード — HPSS／M-S／バンドリンク独立制御" }
    ],
    repo: "https://github.com/OTODESK4193/LUMINA",
    accent: "#9be7ff"
  },
  {
    id: "next-gen-kick",
    num: "05",
    name: "NEXT GEN KICK",
    category: { en: "Professional Kick Drum Synthesizer", jp: "プロフェッショナル・キックドラム・シンセ" },
    type: "Instrument",
    year: "2026",
    version: "1.2.1",
    status: "Released",
    tagline: {
      en: "Attack, Body, Sub — synthesized, not sampled.",
      jp: "アタック、ボディ、サブを合成で組み立てる。"
    },
    description: {
      en: "A professional kick drum synthesizer plugin. PolyBLEP oscillators apply anti-aliasing at waveform generation, with up to 8x oversampling and TPT filters for excellent phase response.",
      jp: "プロフェッショナル・キックドラム・シンセ。PolyBLEP オシレータが波形生成段階でアンチエイリアシングを適用、最大 8 倍オーバーサンプリングと位相特性に優れた TPT フィルタを搭載。"
    },
    features: [
      { en: "3-layer engine — Attack / Body / Sub", jp: "3 層エンジン — Attack ／ Body ／ Sub" },
      { en: "PolyBLEP anti-aliased oscillators", jp: "PolyBLEP アンチエイリアシング・オシレータ" },
      { en: "Up to 8× oversampling (Ultra mode)", jp: "最大 8 倍オーバーサンプリング (Ultra モード)" },
      { en: "TPT filters — topology-preserving, phase-accurate", jp: "TPT フィルタ — 位相特性に優れた構造保存型" },
      { en: "11 saturation models w/ ADAA — soft-tan / hard-clip / triode / tape / wavefold / JFET / BJT / exciter etc.", jp: "11 種サチュレーション (ADAA 適用)" },
      { en: "Physical modeling — Bessel membrane theory", jp: "物理モデリング — Bessel 関数膜理論応用" },
      { en: "Per-layer interference visualizer", jp: "レイヤー間干渉ビジュアライザ" },
      { en: "Look-ahead limiter (transient-preserving)", jp: "ルックアヘッド・リミッタ (トランジェント保持)" },
      { en: "Detailed Japanese PDF manual included", jp: "詳細な日本語 PDF マニュアル同梱" }
    ],
    repo: "https://github.com/OTODESK4193/next-gen-kick",
    accent: "#ffd166"
  },
  {
    id: "otodesk-sampler",
    num: "06",
    name: "Otodesk Sampler",
    category: { en: "Advanced Multi-Slot Sampler", jp: "高度なマルチスロット・サンプラー" },
    type: "Instrument",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "Eight slots. Pitch-detected, time-stretched, modulated.",
      jp: "8 スロット。自動キー検出、タイムストレッチ、モジュレーション完備。"
    },
    description: {
      en: "An advanced sampler plugin designed for the modern production workflow. Multi-slot playback, intelligent pitch detection, real-time time-stretching and a deep modulation/effects system — all optimized for Ableton Live.",
      jp: "現代の音楽制作ワークフロー向けに設計された高度なサンプラー。マルチスロット再生、インテリジェントなピッチ検出、リアルタイム・タイムストレッチ、深いモジュレーション／エフェクトシステム搭載。Ableton Live に最適化。"
    },
    features: [
      { en: "8 independent sample slots, layerable", jp: "8 つの独立サンプルスロット (レイヤー可)" },
      { en: "Intelligent pitch detection — auto root key", jp: "インテリジェント・ピッチ検出 — ルートキー自動判定" },
      { en: "RubberBand-integrated time-stretching", jp: "RubberBand 統合タイムストレッチ" },
      { en: "Zero-cross loop detection w/ crossfade automation", jp: "ゼロクロス検出ループ ＋ クロスフェード・オートメーション" },
      { en: "3 LFOs per slot → 13+ targets", jp: "スロットごと 3 LFO → 13 種以上のターゲット" },
      { en: "4 FX slots — Ring Mod / Phantom Delay / Freeze / Hall Reverb / Limiter", jp: "4 エフェクトスロット — Ring Mod／Phantom Delay／Freeze／Hall Reverb／Limiter" },
      { en: "Aegis Limiter — adaptive soft-clip protection", jp: "Aegis Limiter — 適応型ソフトクリップ保護" },
      { en: "Material detection — auto-optimized processing", jp: "マテリアル検出 — サンプル自動分析" }
    ],
    repo: "https://github.com/OTODESK4193/OtodeskSampler",
    accent: "#c2b5ff"
  },
  {
    id: "glitchnexus",
    num: "07",
    name: "GlitchNexus",
    category: { en: "Instant IDM Machine — Controlled Destruction", jp: "即席 IDM マシン — 制御された破壊" },
    type: "Effect",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "Controlled destruction. Rhythmic integrity intact.",
      jp: "制御された破壊。リズムの整合性はそのまま。"
    },
    description: {
      en: "Not just a random noise generator — an instant IDM machine that transforms simple loops into complex, evolving textures while preserving rhythmic integrity.",
      jp: "ただのランダムノイズジェネレータではない。シンプルなループを複雑で変化に富んだテクスチャに変換しながら、リズムの整合性を維持する即席 IDM マシン。"
    },
    features: [
      { en: "Hi-fi granular engine — Density / Spread / Direction", jp: "高忠実度グラニュラーエンジン — Density ／ Spread ／ Direction" },
      { en: "4 window shapes — triangular / sine / square / saw", jp: "4 種ウィンドウ — 三角／正弦／矩形／鋸歯" },
      { en: "X-Mod engine — Spectral wavefolder / AM diode-ring / FM delay-line", jp: "X-Mod エンジン — Spectral wavefolder／AM diode-ring／FM delay-line" },
      { en: "16-step sequencer w/ Mute / Trigger / Freeze / Random / Stutter states", jp: "16 ステップシーケンサ — Mute／Trigger／Freeze／Random／Stutter" },
      { en: "Musical Random — safe randomization, never breaks gain staging", jp: "Musical Random — ゲインを壊さない安全ランダマイズ" },
      { en: "Dual visualizer — Ghost Horizon (in/out overlay) & Grain Scanner", jp: "デュアル・ビジュアライザ — Ghost Horizon ＋ Grain Scanner" },
      { en: "Master FX — Resonator / BitCrush / Downsample / Drive / Tilt EQ", jp: "マスター FX — Resonator／BitCrush／Downsample／Drive／Tilt EQ" }
    ],
    repo: "https://github.com/OTODESK4193/GlitchNexus",
    accent: "#ff3aa3"
  },
  {
    id: "rhythm-matrix",
    num: "08",
    name: "Rhythm Matrix",
    category: { en: "Generative Drum Sequencer", jp: "ジェネレーティブ・ドラム・シーケンサ" },
    type: "MIDI",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "26 genre algorithms. Drop in samples, drag out MIDI.",
      jp: "26 ジャンル・アルゴリズム。サンプルを入れて、MIDI を引き出す。"
    },
    description: {
      en: "Originally built as a personal tool to speed up my own production workflow — turned out to be a powerful and inspiring generative sequencer, so I'm sharing it for free.",
      jp: "もともと自分の音楽制作ワークフローを効率化するために作った個人ツール。あまりに強力でインスピレーションを引き出すジェネレーティブシーケンサーになったので、完全無料で公開しました。"
    },
    features: [
      { en: "26 genre algorithms — UK Drill / Breakcore / Amapiano / Techno / Math Rock etc.", jp: "26 ジャンルアルゴリズム — UK Drill／Breakcore／Amapiano／Techno／Math Rock 他" },
      { en: "Polyrhythm + Euclidean matrix w/ humanized ghost notes", jp: "ポリリズム ＋ ユークリッド・マトリクス、人間味あるゴーストノート" },
      { en: "Per-track complexity & entropy control", jp: "トラックごとの複雑度／エントロピー制御" },
      { en: "Drag & drop .wav / .mp3 / .aif into 8 tracks", jp: "8 トラックへ .wav／.mp3／.aif をドラッグ＆ドロップ" },
      { en: "MIDI drag-out — drop patterns straight onto DAW timeline", jp: "MIDI ドラッグアウト — DAW タイムラインへ直接ドロップ" },
      { en: "Lightweight UI — smooth even with many instances", jp: "軽量 UI — 複数インスタンスでもスムーズ" }
    ],
    repo: "https://github.com/OTODESK4193/OTODESK-Rhythm-Matrix",
    accent: "#7bff8a"
  },
  {
    id: "multi-oto",
    num: "09",
    name: "MULTI-OTO",
    category: { en: "Extreme Multiband Dynamics & Saturation", jp: "極限マルチバンド・ダイナミクス／サチュレーション" },
    type: "Effect",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "Up to 128 cascaded multiband compressors. Yes, really.",
      jp: "最大 128 段のマルチバンド・カスケード。本当に。"
    },
    description: {
      en: "An open-source, extreme multiband dynamics & saturation VST3. Cascade up to 128 multiband compression nodes in series — built for Color Bass, Riddim and Neurofunk, where you need microscopic textures, infinite spectral sweeps, and phase-dispersion glitch artifacts that standard dynamics can't reach.",
      jp: "オープンソースの極限マルチバンド・ダイナミクス／サチュレーション VST3。最大 128 段のマルチバンドコンプを直列にカスケード可能。Color Bass、Riddim、Neurofunk 向けに、微小なテクスチャの抽出、無限のスペクトル・スイープ、位相分散グリッチなど、通常のダイナミクスでは到達できない領域を狙う。"
    },
    features: [
      { en: "Cascade 2 / 4 / 8 / 16 / 32 / 64 / 128 OTT nodes", jp: "カスケード段数 2／4／8／16／32／64／128 を選択" },
      { en: "True OTT engine — upward + downward compression", jp: "真の OTT エンジン — アップワード／ダウンワード両対応" },
      { en: "RMS envelopes — no ripple even at 128×", jp: "RMS エンベロープ — 128 倍でもリップル歪なし" },
      { en: "Upward range cap +36 dB — no runaway", jp: "アップワード上限 +36dB — 暴走防止" },
      { en: "Micro-dither at −144 dB — tails evolve forever", jp: "マイクロディザ −144dB — テール永続進化" },
      { en: "Color Phase — uncompensated LR crossovers for glitch", jp: "Color Phase — 非補正 LR クロスオーバーでグリッチ生成" },
      { en: "Pre-Drive ADAA saturation (Drive / Odd / Even)", jp: "Pre-Drive ADAA サチュレーション (Drive／Odd／Even)" },
      { en: "AVX2 SIMD — 8 samples in parallel, real-time safe", jp: "AVX2 SIMD — 8 サンプル並列、リアルタイムセーフ" },
      { en: "Zero heap alloc during playback", jp: "再生中ヒープアロケーション完全ゼロ" },
      { en: "JP & EN PDF user manuals included", jp: "日本語／英語 PDF マニュアル同梱" }
    ],
    repo: "https://github.com/OTODESK4193/MULTI-OTO",
    accent: "#ff2d6f"
  },
  {
    id: "chimera-filter",
    num: "10",
    name: "CHIMERA Filter",
    category: { en: "4-Head Morphing Filter", jp: "4 ヘッド・モーフィング・フィルタ" },
    type: "Effect",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "Four filter heads. Twenty-one models. One morph knob.",
      jp: "4 つのフィルターヘッド、21 種類のモデル、1 つの MORPH ノブ。"
    },
    description: {
      en: "An innovative morphing filter plugin with 4 independent filter heads (A/B/C/D), each selecting from 21 filter types. The MORPH knob smoothly transitions between all four.",
      jp: "4 つの独立フィルターヘッド (A／B／C／D) を搭載した革新的なモーフィングフィルタ。各ヘッドは 21 種類のフィルタータイプから選択でき、MORPH ノブで 4 つを滑らかに行き来できます。"
    },
    features: [
      { en: "4-head morphing architecture — smooth crossfade across all", jp: "4 ヘッド・モーフィング・アーキテクチャ — 全フィルタを滑らかにクロスフェード" },
      { en: "21 filter types — SVF / Moog / TB-303-style etc.", jp: "21 種フィルタータイプ — SVF／Moog／TB-303 風 他" },
      { en: "6 physical models — apply physical sim to the morph", jp: "6 種物理モード — モーフ動作に物理シミュ適用" },
      { en: "Color Mode — polyphonic tonal generation via self-oscillation", jp: "Color モード — 自己発振によるポリフォニック楽音生成" },
      { en: "1× / 2× / 4× oversampling", jp: "オーバーサンプリング 1×／2×／4×" },
      { en: "Built-in output limiter", jp: "内蔵リミッタ — 出力保護" }
    ],
    repo: "https://github.com/OTODESK4193/CHIMERA_Filter",
    accent: "#00d4ff"
  },
  {
    id: "chordmatrix",
    num: "11",
    name: "ChordMatrix",
    category: { en: "Algorithmic MIDI Chord Sequencer", jp: "アルゴリズム MIDI コード・シーケンサ" },
    type: "MIDI",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "Viterbi-optimized voice leading. 90 presets. 55 scales.",
      jp: "Viterbi 最適化ボイスリーディング、90 プリセット、55 スケール。"
    },
    description: {
      en: "An advanced algorithmic MIDI chord sequencer driven by Music Set Theory. Treats harmony not as static blocks but as a continuous topological space, modeling pro keyboard performance via a global Viterbi algorithm — automating voice leading, avoiding avoid-notes, and creating smooth modulation lines across 90 presets and 55 musical scales.",
      jp: "Music Set Theory に基づく高度なアルゴリズム MIDI コード・シーケンサ。和声を静的なブロックではなく連続的な位相空間として扱い、Viterbi アルゴリズムでプロのキーボード演奏をモデル化。90 プリセット ／ 55 スケールにわたるボイスリーディング自動化と滑らかな転調を実現します。"
    },
    features: [
      { en: "Global Viterbi voice-leading optimization", jp: "Viterbi アルゴリズムによるグローバル・ボイスリーディング最適化" },
      { en: "5 OPTIMIZE personas — Balance / Melody / Bass / Cluster / Alt", jp: "5 種 OPTIMIZE ペルソナ — Balance／Melody／Bass／Cluster／Alt" },
      { en: "Context-aware modulation engine — Pivot / SubV7 / vii°7", jp: "コンテキスト認識転調エンジン — Pivot／SubV7／vii°7" },
      { en: "Neo-Riemannian transforms (P, L, R)", jp: "Neo-Riemannian 変換 (P, L, R)" },
      { en: "Target-aware AI combo suggestions (ii°-V7♭9 etc.)", jp: "ターゲット認識 AI コンボ提案 (ii°-V7♭9 等)" },
      { en: "Self-evolving tension (♭9 / ♭13 auto-selection)", jp: "自己進化テンション生成 (♭9 ／ ♭13 自動選択)" },
      { en: "90 presets · 55 scales (Diatonic / Bebop / Symmetrical / World)", jp: "90 プリセット ・ 55 スケール (教会旋法／Bebop／対称／世界の音階)" },
      { en: "Lock-free double-buffered DSP, zero heap alloc", jp: "Lock-Free ダブルバッファ DSP、ヒープアロケーションゼロ" },
      { en: "VBlank-driven UI sync, AVX2 SIMD", jp: "VBlank 駆動 UI 同期、AVX2 SIMD" },
      { en: "Bilingual PDF manual (JP / EN) included", jp: "日英 PDF マニュアル同梱" }
    ],
    repo: "https://github.com/OTODESK4193/ChordMatrix",
    accent: "#b76cff"
  },
  {
    id: "basslinematrix",
    num: "12",
    name: "BassLineMatrix",
    category: { en: "Algorithmic Bassline Sequencer + Synth", jp: "アルゴリズム・ベースライン・シーケンサ ＋ シンセ" },
    type: "MIDI",
    year: "2026",
    version: "1.0",
    status: "Released",
    tagline: {
      en: "23 genres of DNA. Drop a chord, get a bassline.",
      jp: "23 ジャンルの DNA。コードを置けば、ベースラインが生まれる。"
    },
    description: {
      en: "An open-source algorithmic MIDI sequencer with a built-in synthesizer. Instantly conjure everything from hypnotic Melodic Techno rolling basses and aggressive Drum & Bass neuro-lines to soulful Neo-Soul walks and deeply syncopated Amapiano log-drums — all based on deeply researched genre DNA.",
      jp: "オープンソースのアルゴリズム MIDI シーケンサ＆内蔵シンセ。Melodic Techno のローリングベース、Drum & Bass のニューロライン、Neo-Soul のウォーキング、Amapiano のログドラムまで、徹底的にリサーチされたジャンル DNA から瞬時に生成します。"
    },
    features: [
      { en: "23 genre DNA algorithms — Techno / DnB / Trap / Amapiano / Neo-Soul …", jp: "23 ジャンル DNA — Techno／DnB／Trap／Amapiano／Neo-Soul 他" },
      { en: "Per-genre velocity / swing / note-length / glide profiles", jp: "ジャンルごとのベロシティ／スウィング／ノート長／グライドプロファイル" },
      { en: "4 independent slots — seamless A/B/C/D switching", jp: "4 独立スロット — シームレス A／B／C／D 切替" },
      { en: "Time-sig / bars (up to 8) / Complexity / Entropy / Auto-Glide", jp: "拍子／小節数 (最大 8) ／ Complexity ／ Entropy ／ Auto-Glide" },
      { en: "40 scales + Chord Mode (15 qualities w/ inversions)", jp: "40 スケール ＋ Chord モード (15 種コード＆転回)" },
      { en: "Built-in TPT / ZDF synthesizer — analog-like, phase-warp free", jp: "内蔵 TPT／ZDF シンセ — アナログ風、位相ワープなし" },
      { en: "Mono truncation + variable glide + staccato gating", jp: "Mono トランケート ＋ 可変グライド ＋ スタッカートゲート" },
      { en: "MIDI drag & drop — Bass + Chord sequences to DAW timeline", jp: "MIDI ドラッグ＆ドロップ — Bass ＋ Chord シーケンスを DAW へ直接" },
      { en: "Lock-free double-buffered DSP, AVX2-optimized", jp: "Lock-Free ダブルバッファ DSP、AVX2 最適化" },
      { en: "Bilingual PDF manual (JP / EN) included", jp: "日英 PDF マニュアル同梱" }
    ],
    repo: "https://github.com/OTODESK4193/BassLineMatrix",
    accent: "#ffb347"
  }
];

window.COPY = {
  brand: "OTODESK",
  tagline: {
    en: "If it's not enough, I'll build it myself.",
    jp: "物足りないなら、自分で作る。"
  },
  heroSub: {
    en: "Open-source VST3 plugins, hand-built in C++ and JUCE. Windows · Ableton Live.",
    jp: "C++ と JUCE でハンドビルドした、オープンソースの VST3 プラグイン。Windows ・ Ableton Live 専用。"
  },
  compatNote: {
    en: "Windows / VST3 only · Built and tested for Ableton Live · Other DAWs unverified · macOS / AU not supported",
    jp: "Windows ／ VST3 のみ ・ Ableton Live で動作確認済 ・ 他 DAW は未検証 ・ macOS／AU は非対応"
  },
  sections: {
    index: { en: "Plugins", jp: "プラグイン" },
    detail: { en: "Catalog", jp: "詳細" },
    features: { en: "Built different", jp: "つくりの違い" },
    about: { en: "About", jp: "開発者について" },
    download: { en: "Download", jp: "ダウンロード" }
  }
};
