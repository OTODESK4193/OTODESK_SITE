// Plugin catalog — updated with detailed descriptions from official docs.
// All plugins: Windows / VST3 only. Ableton Live verified. Other DAWs unverified.
window.PLUGINS = [
  {
    id: "picosampler",
    num: "01",
    name: "PicoSampler",
    category: { en: "8-Slot / 32-Voice Creative Sampler", jp: "8スロット・32ボイス・クリエイティブサンプラー" },
    type: "Instrument",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "1.1.0",
    status: "Released",
    comingSoon: false,
    featured: false,
    featureUrl: "picosampler.html",
    downloadUrl: "https://github.com/OTODESK4193/PicoSampler/releases",
    sourceUrl: "https://github.com/OTODESK4193/PicoSampler",
    screenshot: "screenshots/picosampler-main.jpg",
    tagline: {
      en: "A creative, intuitive sampler. Sample-accurate editing that never fights you.",
      jp: "クリエイティブな簡易サンプラー。サブピクセル単位の精密エディットとスケールアルペジエイター。"
    },
    description: {
      en: "8SLOTに配置した音をランダムに再生したり、スケールクオンタイズされたアルペジエイターを使い、アナタの想像力を解放します。49アンカーのタイムストレッチ、3モデルフィルター、16スロットModMatrix、5スロットFXラックを凝縮。",
      jp: "8SLOTに配置した音をランダムに再生したり、スケールクオンタイズされたアルペジエイターを使い、アナタの想像力を解放します。49アンカーのタイムストレッチ、3モデルフィルター、16スロットModMatrix、5スロットFXラックを凝縮。"
    },
    features: [
      { en: "8 slots × 32 voices — Single, Layer, and Random playback modes", jp: "8スロット × 32ボイス — Single / Layer / Random 再生モード" },
      { en: "Continuous parameters & zero-crossing snap at 100,000× zoom", jp: "連続パラメータ ＆ 10万倍ズーム対応ゼロクロススナップ" },
      { en: "Signalsmith Time-Stretch — 49 anchor buffers spanning -24 to +24 semitones", jp: "Signalsmith タイムストレッチ — -24〜+24半音の49アンカーバッファ" },
      { en: "Auto-slice transient detection & smart distribution", jp: "自動スライス過渡音検出 ＆ ゼロクロス境界面分割" },
      { en: "13-pattern Arpeggiator & 16-scale Scale Quantizer", jp: "13パターン・アルペジエイター ＆ 16スケール・クオンタイザー" },
      { en: "16-slot Modulation Matrix & 5-slot drag-to-reorder FX rack", jp: "16スロット ModMatrix ＆ 自由に並び替え可能な5スロットFXラック" }
    ],
    repo: "https://github.com/OTODESK4193/PicoSampler",
    accent: "#00e5a0"
  },
  {
    id: "spectra8",
    num: "02",
    name: "SPECTRA8",
    category: { en: "Dual Engine Polyphonic Vocoder", jp: "デュアルエンジン・ポリフォニックVocoder" },
    type: "Effect/Instrument",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "v1.0.0 (Coming Soon)",
    status: "ComingSoon",
    comingSoon: true,
    featured: false,
    featureUrl: "spectra8.html",
    downloadUrl: "https://github.com/OTODESK4193/SPECTRA8/releases",
    sourceUrl: "https://github.com/OTODESK4193/SPECTRA8",
    screenshot: "screenshots/spectra8-vocoder.jpg",
    tagline: {
      en: "An innovative vocoder is born! Dual engines, Wavetables, and scale quantization.",
      jp: "革新的なVocoderが誕生！8ボイスポリフォニック、Wavetable、ModMatrix搭載の変態仕様。"
    },
    description: {
      en: "8ボイスでコントロール可能なポリフォニックVocoder。基本波形のほかに任意のWavetableを使用することも可能。2種類（FilterBank/LPC）のVocoderを切り替え可能。ModMatrixやスケールクオンタイズも搭載した変態仕様。アナタの想像力をスクラップ＆ビルドします。",
      jp: "8ボイスでコントロール可能なポリフォニックVocoder。基本波形のほかに任意のWavetableを使用することも可能。2種類（FilterBank/LPC）のVocoderを切り替え可能。ModMatrixやスケールクオンタイズも搭載した変態仕様。アナタの想像力をスクラップ＆ビルドします。"
    },
    features: [
      { en: "Dual engines: Filterbank (8–48 bands) & LPC (order 8–16 speech model)", jp: "デュアルエンジン: Filterbank (8〜48バンド) ＆ LPC (8〜16次モデル)" },
      { en: "8-voice polyphonic carrier with PolyBLEP & Custom Wavetable support", jp: "PolyBLEP ＆ カスタムWavetable対応8ボイス・ポリフォニックキャリア" },
      { en: "3 morph modes: Bend, Sync, and Vowel Formant filtering", jp: "3種のMorph機能 (Bend / Sync / Vowel)" },
      { en: "MPM pitch tracker & 20-scale pitch quantizer (auto-tune)", jp: "MPMピッチトラッカー ＆ 20スケール対応オートチューン" },
      { en: "Spectral Resonator with Chord/MIDI/Free modes & Shimmer", jp: "Chord / MIDI / Free モード＆シュマー搭載 Spectral Resonator" },
      { en: "320-band constant-Q spectrum analyzer", jp: "320バンド Constant-Q スペクトラム・アナライザ" }
    ],
    repo: "https://github.com/OTODESK4193/SPECTRA8",
    accent: "#b76cff"
  },
  {
    id: "granular",
    num: "03",
    name: "Granular",
    category: { en: "24-Voice Granular Synthesizer", jp: "24ボイス・グラニュラー・シンセサイザー" },
    type: "Instrument",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "v1.0.0 (Coming Soon)",
    status: "ComingSoon",
    comingSoon: true,
    featured: false,
    featureUrl: "granular.html",
    downloadUrl: "https://github.com/OTODESK4193/Granular/releases",
    sourceUrl: "https://github.com/OTODESK4193/Granular",
    screenshot: "screenshots/granular-main.jpg",
    tagline: {
      en: "Harmony meets chaos. Post-modulation scale quantization keeps grains in tune.",
      jp: "カオスと調和の実現。24ボイスグラニュラー。好きなサンプルを粒状にして音を再構築。"
    },
    description: {
      en: "24ボイスのグラニュラーシンセサイザー。好きなサンプルを粒状にして音を再構築します。ベースがPADになったり、声がベースになったり。使い方次第でアナタの想像力を異次元へと拡張します。",
      jp: "24ボイスのグラニュラーシンセサイザー。好きなサンプルを粒状にして音を再構築します。ベースがPADになったり、声がベースになったり。使い方次第でアナタの想像力を異次元へと拡張します。"
    },
    features: [
      { en: "24 voices × up to 100 grains (1200 grain CPU budget)", jp: "24ボイス × 各最大100グレイン (最大1200グレイン予算)" },
      { en: "Post-modulation scale quantizer across 16 scales", jp: "変調後に適用される16スケール対応ピッチクオンタイザー" },
      { en: "P-SYNC pitch-synchronous grain firing for noise playable pitch", jp: "ノイズも音程化する P-SYNC ピッチ同期グレイン発音" },
      { en: "Note-tuned TONE comb resonator & Hermite 4-point interpolation", jp: "ノート音程同調 TONE コムレゾネーター ＆ 4点エルミート補間" },
      { en: "Dot-matrix waveform display colored by frequency content", jp: "周波数成分に応じたカラーリングドットマトリクス波形表示" },
      { en: "16-slot modulation matrix & 5-slot FX rack", jp: "16スロット ModMatrix ＆ 5スロット FXラック" }
    ],
    repo: "https://github.com/OTODESK4193/Granular",
    accent: "#ff2d75"
  },
  {
    id: "lift-x",
    num: "04",
    name: "LIFT-X",
    category: { en: "Riser-Dedicated Synthesizer — 41 Envelopes", jp: "ライザー特化型シンセサイザー — 41マルチENV" },
    type: "Instrument",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "v1.0.0 (Coming Soon)",
    status: "ComingSoon",
    comingSoon: true,
    featured: false,
    featureUrl: "lift-x.html",
    downloadUrl: "https://github.com/OTODESK4193/LIFT-X/releases",
    sourceUrl: "https://github.com/OTODESK4193/LIFT-X",
    screenshot: "screenshots/liftx-main.jpg",
    tagline: {
      en: "A riser is not an envelope — it is forty-one envelopes moving together.",
      jp: "ライザーはエンベロープではない——41個のカーブが同時に動く音楽的展開である。"
    },
    description: {
      en: "41 multi-point envelope curves evaluated on a single playhead. Features REPEAT x1-32 curve LFOs, absolute-pitch Start->End keys, 70-scale quantize, Vowel & Comb filters, Beat Stutter FX, 134 factory presets, and DAW WAV drag export.",
      jp: "1つの進行軸（LIFT）に同期連動する41個の多点エンベロープ。カーブ単位のリピート（REPEAT ×1–32）、絶対ピッチ、70スケールクオンタイズ、Vowel/Combフィルター、Beat Stutter、134ファクトリープリセット、DAW直結WAVドラッグを搭載。"
    },
    features: [
      { en: "41 multi-point envelope curves evaluated on a single playhead", jp: "1つの進行軸に完全同期連動する41個の多点エンベロープカーブ" },
      { en: "REPEAT ×1–32 per curve — instant tempo-synced LFO & gates", jp: "カーブ単位の REPEAT ×1–32 — テンポ同期LFOやゲートを即座に構築" },
      { en: "Absolute pitch risers (Start Key → End Key) & 1-button REVERSE", jp: "絶対ピッチ構造 (Start→End) ＆ 全カーブ反転 REVERSE ボタン" },
      { en: "Scale Quantize across 70 scales for stepped, in-key climbs", jp: "70スケール対応スケールクオンタイズによるステップ上昇" },
      { en: "Vowel & Comb filters + 4-filter per-source routing matrix", jp: "Vowel(人声) ＆ Comb(音階共振) フィルター含む 4フィルターマトリクス" },
      { en: "5-slot FX rack with Beat Stutter, 10 ADAA saturations & WAV drag", jp: "Beat Stutter ＆ 10 ADAA サチュレーション搭載 5スロット FX ＆ WAV ドラッグ" }
    ],
    repo: "https://github.com/OTODESK4193/LIFT-X",
    accent: "#ff8a3c"
  },
  {
    id: "wavetable",
    num: "05",
    name: "Wavetable",
    category: { en: "Polyphonic Wavetable Synth — 3 Morph Slots", jp: "ポリフォニック・ウェーブテーブル・シンセ" },
    type: "Instrument",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "v1.0.0 (Coming Soon)",
    status: "ComingSoon",
    comingSoon: true,
    featured: false,
    featureUrl: "wavetable.html",
    downloadUrl: "https://github.com/OTODESK4193/Wavetable/releases",
    sourceUrl: "https://github.com/OTODESK4193/Wavetable",
    screenshot: "screenshots/wavetable-main.jpg",
    tagline: {
      en: "This might be a monster. 3 Morph slots, Color Engine, OTT & Soothe inside.",
      jp: "これはモンスターかもしれない。3Morphスロット、Colorエンジン、OTT/Soothe搭載。"
    },
    description: {
      en: "1×OSCに3つのMorphing。他社シンセでは見かけないColorエンジン、OTTやSOOTHEも標準搭載！カスタムWavetableの追加や各種Mod（3×LFO、2×MSEG、3×ENV）を駆使し様々なパラメーターにアサインが可能。Bass、Lead、Pluck、Stab、Padなど、アナタの想像力に革命を!!",
      jp: "1×OSCに3つのMorphing。他社シンセでは見かけないColorエンジン、OTTやSOOTHEも標準搭載！カスタムWavetableの追加や各種Mod（3×LFO、2×MSEG、3×ENV）を駆使し様々なパラメーターにアサインが可能。Bass、Lead、Pluck、Stab、Padなど、アナタの想像力に革命を!!"
    },
    features: [
      { en: "Wavetable OSC with 3 Morph slots × 18 spectral processing modes", jp: "18の処理モードを備えた3つの Morph スロット付き Wavetable OSC" },
      { en: "Dual multi-mode filters (9 types) with serial/parallel routing", jp: "9タイプ対応デュアルマルチモードフィルター (直列/並列切り替え)" },
      { en: "Deep Modulation — 3 LFOs, 2 MSEGs (32 nodes), 3 Mod Envelopes, 18-slot matrix", jp: "3 LFO ＋ 2 MSEG ＋ 3 ModENV ＋ 18スロット ModMatrix" },
      { en: "IR-based Color Engine with 8 tone types & Learn mode", jp: "8タイプの音色IR ＆ 演奏学習機能を備えた Color エンジン" },
      { en: "3-band OTT compressor & 12-band Soothe resonance suppressor", jp: "3バンド OTT コンプレッサー ＆ 12バンド Soothe レゾナンス抑制" },
      { en: "70-scale Pitch Quantizer & 10 switchable color themes", jp: "70スケール対応ピッチクオンタイザー ＆ 10種のカラーテーマ" }
    ],
    repo: "https://github.com/OTODESK4193/Wavetable",
    accent: "#00d4ff"
  },
  {
    id: "next-gen-kick-2",
    num: "06",
    name: "NEXT GEN KICK 2",
    category: { en: "Professional Kick & Percussion Synthesizer", jp: "プロフェッショナル・キック＆パーカッション・シンセ" },
    type: "Instrument",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "1.0.0",
    status: "Released",
    comingSoon: false,
    featured: false,
    featureUrl: "next-gen-kick-2.html",
    downloadUrl: "https://github.com/OTODESK4193/NextGenKick2/releases",
    sourceUrl: "https://github.com/OTODESK4193/NextGenKick2",
    screenshot: "screenshots/NextGenKick2Main.jpg",
    tagline: {
      en: "The ultimate kick synthesizer. 7 months of AI-driven mastery, distilled.",
      jp: "最強のキックシンセ降臨。AI との対話 7 ヶ月分のノウハウを全て注ぎ込んだ最高傑作。"
    },
    description: {
      en: "The ultimate evolution of NEXT GEN KICK — seven months after the original, every lesson from AI-assisted development has been distilled into one masterpiece instrument. A three-layer synthesis engine (Attack / Body / Sub), 70 factory presets, multi-point bezier envelope editor, per-layer FX rack with 10-algorithm ADAA saturation, and a 480-band spectrum analyzer with fundamental-pitch readout. Everything you need to design any kick you can imagine, at zero latency.",
      jp: "NEXT GEN KICK から 7 ヶ月。AI との対話による開発で積み上げてきた全てのノウハウを一本に注ぎ込んだ、OTODESK の最高傑作。3 層合成エンジン（Attack ／ Body ／ Sub）、70 ファクトリプリセット、多点ベジェ・エンベロープエディタ、10 アルゴリズム ADAA サチュレーション搭載のレイヤー別 FX ラック、480 バンド・スペクトラム・アナライザ——頭の中にあるキックを、全てゼロレイテンシで形にできる。"
    },
    features: [
      { en: "3-layer pure synthesis engine — Attack (click/transient) · Body (tone/punch) · Sub (low-end weight)", jp: "3 層ピュア合成エンジン — Attack（クリック）・Body（音色／パンチ）・Sub（低域）" },
      { en: "70 factory presets — Kick / Snare / Clap / Tom / Bass / Hat / Special FX", jp: "70 ファクトリプリセット — Kick ／ Snare ／ Clap ／ Tom ／ Bass ／ Hat ／ Special FX" },
      { en: "Multi-point envelope editor — Amp & Pitch per layer, bezier curves, 11 Amp + 11 Pitch shape presets", jp: "多点エンベロープエディタ — レイヤーごと Amp ＋ Pitch、ベジェ曲線、形状プリセット 22 種" },
      { en: "Per-layer FX rack — ADAA Saturation (10 algorithms), OTT Multiband, Glue Compressor, Limiter, Transient Shaper, Noise", jp: "レイヤー別 FX ラック — ADAA サチュレーション 10 種、OTT、Glue、Limiter、Transient Shaper、Noise" },
      { en: "480-band log spectrum analyzer — peak-hold, hover readout, fundamental-pitch display, maximize", jp: "480 バンド対数スペクトラム・アナライザ — ピークホールド、ホバー表示、基音表示、全面最大化" },
      { en: "Preset browser — Factory + User, category/subcategory filter, favorites, search, save/load", jp: "プリセットブラウザ — Factory＋User、カテゴリフィルタ、お気に入り、検索、保存／読込" },
      { en: "Per-layer WAV drag & drop export straight into DAW", jp: "レイヤー別 WAV ドラッグ＆ドロップ — DAW タイムラインへ直接書き出し" },
      { en: "Zero-latency · velocity-sensitive · multi-instance safe", jp: "ゼロレイテンシ ・ ベロシティ対応 ・ マルチインスタンス安全" }
    ],
    repo: "https://github.com/OTODESK4193/NextGenKick2",
    accent: "#ffd166"
  },
  {
    id: "ambience",
    num: "07",
    name: "Ambience",
    category: { en: "Algorithmic Reverb — 16-Channel FDN", jp: "アルゴリズミック・リバーブ — 16ch FDN" },
    type: "Effect",
    year: "2026",
    version: "1.1.0",
    status: "Released",
    comingSoon: false,
    featured: false,
    featureUrl: "ambience.html",
    screenshot: "screenshots/ambience.jpg",
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
    id: "quad-morph",
    num: "08",
    name: "Quad Morph Filter",
    category: { en: "28-Model Real-Time Morphing Filter", jp: "28モデル・リアルタイムモーフィング・フィルター" },
    type: "Effect",
    year: "2026",
    version: "1.0.0",
    status: "Released",
    comingSoon: false,
    featured: true,
    featureUrl: "quad-morph.html",
    downloadUrl: "https://github.com/OTODESK4193/QuadMorphFilter/releases/",
    sourceUrl: "https://github.com/OTODESK4193/QuadMorphFilter",
    screenshot: "screenshots/quad-morph.jpg",
    tagline: {
      en: "Dance, Filters! Command every spatial frequency.",
      jp: "踊れ、フィルター！あらゆる空間周波数を支配する。"
    },
    description: {
      en: "A high-performance VST3 plugin featuring 28 meticulously modeled filter algorithms that morph together in real-time on an XY pad. Moog Ladder, TB-303, Z-Plane 2D Morph, Bode Frequency Shifter — all morphable with 19 LFO waveforms, real-time frequency response visualization, and equal-power blending.",
      jp: "28個のハンドクラフトされたフィルターモデルをリアルタイムでXYパッドでモーフィング。Moog Ladder、TB-303、Z-Plane 2D Morph、Bode Frequency Shifterを、19種LFO、周波数応答リアルタイム表示、イコールパワーブレンドで操調する高性能VST3。"
    },
    features: [
      { en: "28 handcrafted filter models — Ladder / SVF / Analog / Digital / Spectral", jp: "28個のハンドクラフト・フィルター — Ladder／SVF／Analog／Digital／Spectral" },
      { en: "Real-time 4-way XY morphing with equal-power blending", jp: "リアルタイム4ウェイXYモーフィング (イコールパワーブレンド)" },
      { en: "4 morph blend algorithms — Equal Power / Linear / Smoothstep / Radial", jp: "4種ブレンドアルゴリズム — Equal Power／Linear／Smoothstep／Radial" },
      { en: "19 LFO waveforms + 5 modulation engines (LFO1-5)", jp: "19種LFO ＋ 5種モジュレーション・エンジン (LFO1-5)" },
      { en: "Live frequency response graph (1024-point FFT)", jp: "リアルタイム周波数応答グラフ (1024ポイントFFT)" },
      { en: "4× oversampling, ADAA anti-aliasing", jp: "4倍オーバーサンプリング、ADAA アンチエイリアシング" },
      { en: "Envelope Follower — sidechain-style input tracking", jp: "Envelope Follower — サイドチェーン式入力追従" },
      { en: "Hand-drawn LFO recording on morph pad", jp: "モーフパッド上での手書きLFO記録" }
    ],
    repo: "https://github.com/OTODESK4193/QuadMorphFilter",
    accent: "#00d9ff"
  },
  {
    id: "anatomy",
    num: "09",
    name: "ANATOMY",
    category: { en: "Transient / Tonal Separation Sampler", jp: "過渡音/音色 分離サンプラー" },
    type: "Sampler",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "1.0",
    status: "Released",
    comingSoon: false,
    featured: false,
    featureUrl: "anatomy.html",
    downloadUrl: "https://github.com/OTODESK4193/ANATOMY/releases",
    sourceUrl: "https://github.com/OTODESK4193/ANATOMY",
    screenshot: "screenshots/anatomy.jpg",
    tagline: {
      en: "Dissect your samples.",
      jp: "サンプルを解剖しませんか？"
    },
    description: {
      en: "Real-time transient/tonal separation engine using mathematically lossless cos\u00b2 crossfade. Three independent signal lanes \u2014 Transient, Tonal, Full Mix \u2014 each with pitch, gain, shape controls and 6-slot FX chains.",
      jp: "数学的に完璧な cos\u00b2 クロスフェード分離を使用した、リアルタイム過渡音/音色分離エンジン。トランジェント・トーン・フルミックスの 3 レーンに独立ピッチ/ゲイン/シェイプ制御と 6 スロットエフェクトチェーン。"
    },
    features: [
      { en: "Lossless cos\u00b2 crossfade separation \u2014 transient + tonal = original, zero artefacts", jp: "エネルギー損失ゼロの cos\u00b2 分離" },
      { en: "3 independent lanes \u00d7 6-slot FX chains each (18 total)", jp: "3 レーン \u00d7 6 エフェクトチェーン（合計 18）" },
      { en: "Drag & drop WAV loading \u2014 auto-analyzed and separated", jp: "WAV ドラッグ&ドロップ → 自動分析・分離" },
      { en: "Custom sample replacement per lane (Transient / Tonal browser)", jp: "レーンごとのカスタムサンプル置換" },
      { en: "Tone Offset slider \u2014 fill gaps or create intentional overlaps", jp: "トーンオフセットスライダー（\u00b1500ms）" },
      { en: "Waveform zoom up to 32\u00d7 for precise transient inspection", jp: "波形ズーム 最大 32\u00d7" }
    ],
    repo: "https://github.com/OTODESK4193/ANATOMY",
    accent: "#c084fc"
  },
  {
    id: "lowcut-police",
    num: "10",
    name: "LowCut Police",
    category: { en: "Minimum-Phase IIR Highpass + Ultra-High-Res Analyzer", jp: "ミニマムフェーズ IIR ハイパス＋超高解像度アナライザー" },
    type: "Effect",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "1.0.0",
    status: "Released",
    comingSoon: false,
    featured: false,
    featureUrl: "lowcut-police.html",
    downloadUrl: "https://github.com/OTODESK4193/HighPrecisionEQ/releases/tag/V1.0.0",
    sourceUrl: "https://github.com/OTODESK4193/HighPrecisionEQ",
    screenshot: "screenshots/LowCutPolice.jpg",
    tagline: {
      en: "Low-cut without fear. Zero-phase, zero compromise.",
      jp: "もうローカットを恐れる必要はない。ゼロフェーズ、ゼロ妥協。"
    },
    description: {
      en: "Stop losing your lows. LowCut Police is a zero-phase IIR highpass filter with built-in step servo control, delivering perfect frequency precision and instant phase coherence. Surgical low-end cleanup without coloration or unwanted artifacts — free, open-source, and precision-engineered.",
      jp: "低域を切りすぎることはもうない。ゼロフェーズ IIR ハイパスと内蔵ステップサーボで、完全な周波数制御と瞬時フェーズコヒーレンスを実現。着色なし、アーティファクトなし、外科的な低域整理を無料で。"
    },
    features: [
      { en: "Zero-phase IIR highpass — no phase distortion, no smearing", jp: "ゼロフェーズ IIR ハイパス — 位相歪みなし、スメアリングなし" },
      { en: "Built-in step servo control — instant frequency precision", jp: "内蔵ステップサーボ制御 — 瞬時の周波数精度" },
      { en: "Perfect phase coherence — safe for parallel processing", jp: "完全なフェーズコヒーレンス — パラレル処理でも安全" },
      { en: "Surgical low-end cleanup without coloration", jp: "着色なしの外科的な低域整理" },
      { en: "Zero latency · lightweight CPU footprint", jp: "ゼロレイテンシ・軽量CPU負荷" },
      { en: "Free & open-source (AGPLv3)", jp: "無料＆オープンソース（AGPLv3）" }
    ],
    repo: "https://github.com/OTODESK4193/HighPrecisionEQ",
    accent: "#ff6b4a"
  },
  {
    id: "basssynth",
    num: "11",
    name: "BassSynth",
    category: { en: "Next-Gen Wavetable Bass Synthesizer", jp: "次世代ウェーブテーブル・ベース・シンセ" },
    type: "Instrument",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "1.0.2",
    status: "Released",
    comingSoon: false,
    featured: false,
    downloadUrl: "https://github.com/OTODESK4193/BassSynth/releases",
    sourceUrl: "https://github.com/OTODESK4193/BassSynth",
    screenshot: "screenshots/basssynth.jpg",
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
    num: "12",
    name: "NEOTO Pre",
    category: { en: "Analog-Modeled Preamp & Transformer Saturator", jp: "アナログモデリング・プリアンプ／トランス・サチュレータ" },
    type: "Effect",
    year: "2026",
    version: "1.1.0",
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
    num: "13",
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
    num: "14",
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
    num: "15",
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
    num: "16",
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
    num: "17",
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
    num: "18",
    name: "MULTI-OTO",
    category: { en: "Extreme Multiband Dynamics & Saturation", jp: "極限マルチバンド・ダイナミクス／サチュレーション" },
    type: "Effect",
    platform: { en: "Windows / VST3", jp: "Windows / VST3" },
    year: "2026",
    version: "1.1.0",
    status: "Released",
    comingSoon: false,
    downloadUrl: "https://github.com/OTODESK4193/MULTI-OTO/releases",
    sourceUrl: "https://github.com/OTODESK4193/MULTI-OTO",
    screenshot: "screenshots/multi-oto.jpg",
    tagline: {
      en: "Up to 128 cascaded multiband compressors with Modulation Matrix.",
      jp: "最大 128 段カスケード ＋ モジュレーション・マトリクス搭載の極限ダイナミクス。"
    },
    description: {
      en: "Cascade up to 128 multiband compression nodes in series. Version 1.1.0 introduces an 8-slot Modulation Matrix with LFO self-modulation, independent per-stage crossovers, musical RANDOM, 30 factory presets, silence bug fixes, and a doubled-size redesigned UI.",
      jp: "最大128段のマルチバンドコンプを直列カスケード。v1.1.0では8スロットModMatrix（LFO間変調対応）、ステージ別独立クロスオーバー、音楽的RANDOM、30ファクトリープリセット、無音化バグ解消、倍大GUI刷新を導入。"
    },
    features: [
      { en: "Cascade 2 / 4 / 8 / 16 / 32 / 64 / 128 OTT nodes in series", jp: "最大 128 段のマルチバンドコンプをカスケード直列処理" },
      { en: "8-slot Modulation Matrix — 4 LFOs, Env Follow, Drift to 30 targets & LFO rate mod", jp: "8スロット ModMatrix — 4 LFO ＋ EnvFollow ＋ Drift（LFO速度相互変調対応）" },
      { en: "Independent per-stage crossovers with on-meter dragging", jp: "ステージ別独立クロスオーバー ＆ メーター直感ドラッグ操作" },
      { en: "Musical RANDOM button — rerolls main parameters without breaking gain", jp: "音楽的 RANDOM ボタン — ゲイン破綻を起こさないスマートランダマイズ" },
      { en: "30 factory presets & 10 color themes with redesigned doubled-size UI", jp: "30 ファクトリープリセット ＆ 10 カラーテーマ ＆ 倍大GUI刷新" },
      { en: "Silence bug & smoother fixes with AVX2 SIMD 8-lane acceleration", jp: "無音化バグ・パラメーター応答完全修復 ＆ AVX2 SIMD 8レーン並列加速" }
    ],
    repo: "https://github.com/OTODESK4193/MULTI-OTO",
    accent: "#ff2d6f"
  },
  {
    id: "chimera-filter",
    num: "19",
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
    num: "20",
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
    num: "21",
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
  },
  {
    id: "scoreviewer",
    num: "22",
    name: "ScoreViewer",
    category: { en: "Real-time MIDI Score Display for Ableton Live", jp: "Ableton Live専用 リアルタイムMIDI譜面表示デバイス" },
    type: "Max for Live",
    platform: { en: "Windows / Max for Live", jp: "Windows / Max for Live" },
    year: "2026",
    version: "1.0.0",
    status: "Released",
    comingSoon: false,
    featured: false,
    featureUrl: "scoreviewer.html",
    downloadUrl: "https://github.com/OTODESK4193/ScoreViewer/releases",
    sourceUrl: "https://github.com/OTODESK4193/ScoreViewer",
    screenshot: "screenshots/score-viewer.jpg",
    tagline: {
      en: "Real-time score display for Ableton Live.",
      jp: "Ableton Live用 リアルタイムMIDI譜面表示デバイス。"
    },
    description: {
      en: "LiveScoreViewer is a Max for Live device that displays MIDI clip contents in musical notation in real time. Select or play a MIDI clip — notation renders instantly with chords, rests, dotted notes, beaming, and tuplets.",
      jp: "LiveScoreViewer は、MIDIクリップの内容をリアルタイムに五線譜表記でビジュアル表示する Max for Live デバイス。MIDIクリップを選択・演奏すると、和音・休符・付点・連符を含む楽譜が即座に描画されます。"
    },
    features: [
      { en: "Real-time MIDI clip score display in Ableton Live", jp: "Ableton Live 上でのリアルタイム MIDI クリップ五線譜表示" },
      { en: "Automatic chord, rest, dotted note & beaming rendering", jp: "和音・休符・付点・連符の自動五線譜描画" },
      { en: "Lightweight Max for Live device architecture", jp: "軽量な Max for Live デバイス構造" },
      { en: "Free & open-source on GitHub", jp: "完全無料 ＆ GitHubオープンソース" }
    ],
    repo: "https://github.com/OTODESK4193/ScoreViewer",
    accent: "#00e5a0"
  }
];

window.COPY = {
  brand: "OTODESK",
  tagline: {
    en: "If it's not enough, I'll build it myself.",
    jp: "物足りないなら、自分で作る。"
  },
  heroSub: {
    en: "Open-source VST3 plugins + Max for Live devices, hand-built in C++ and JUCE. 22 acoustic tools. Windows · Ableton Live.",
    jp: "C++ と JUCE でハンドビルドした、オープンソースの VST3 プラグイン ＋ Max for Live デバイス。22個の音響道具。Windows ・ Ableton Live 専用。"
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
