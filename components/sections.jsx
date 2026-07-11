// Header with brand + lang toggle + nav
function Header({ lang, setLang, dark }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
  { href: "#news", en: "News", jp: "新着" },
  { href: "#gallery", en: "Works", jp: "全作品" },
  { href: "#about", en: "About", jp: "About" }];



  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="OTODESK home">
        <span className="brand-mark">●</span>
        <span className="brand-name">OTODESK</span>
      </a>
      <nav className="site-nav">
        {links.map((l) =>
        <a key={l.href} href={l.href}>
            {l[lang]}
          </a>
        )}
      </nav>
      <div className="header-right">
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === "en" ? "jp" : "en")}
          aria-label="Toggle language">
          
          <span className={lang === "en" ? "on" : ""}>EN</span>
          <span className="sep">/</span>
          <span className={lang === "jp" ? "on" : ""}>JP</span>
        </button>
      </div>
    </header>);

}

function Hero({ lang }) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const y = window.scrollY;
      setT(Math.min(1, y / 600));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const C = window.COPY;
  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero-grid">
        <div className="hero-meta">
          <div className="hero-meta-row">
            <span>OTODESK / 2026</span>
            <span>WORKS — 17</span>
          </div>
        </div>

        <h1 className="hero-title">
          <span className="hero-line" style={{ transform: `translateY(${-t * 8}px)` }}>
            {lang === "jp" ? <><span className="hl-accent" style={{ "--hl": "#e0506a" }}>物足りない</span>なら、</> : <>If it's <span className="hl-accent" style={{ "--hl": "#e0506a" }}>not enough,</span></>}
          </span>
          <span className="hero-line" style={{ transform: `translateY(${-t * 16}px)` }}>
            {lang === "jp" ? <><span className="hl-accent" style={{ "--hl": "#3d8bbf" }}>自分で</span>作る。</> : <>I'll <span className="hl-accent" style={{ "--hl": "#3d8bbf" }}>build it myself.</span></>}
          </span>
        </h1>

        <div className="hero-sub">
          <Reveal delay={0.2}>
            <p>{C.heroSub[lang]}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="hero-actions">
              <a href="#gallery" className="btn-primary">
                {lang === "jp" ? "プラグインを見る" : "View plugins"}
                <span className="arrow">→</span>
              </a>
              <a href="https://github.com/OTODESK4193" target="_blank" rel="noreferrer" className="btn-ghost">
                GitHub <span className="arrow">↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hero-footer">
          <div className="big-mono">{window.COPY.compatNote[lang]}</div>
        </div>
      </div>

      <div className="scroll-cue" style={{ opacity: 1 - t * 2 }}>
        <span>{lang === "jp" ? "スクロール" : "Scroll"}</span>
        <span className="line" />
      </div>
    </section>);

}

function IndexList({ lang, plugins, onSelect }) {
  const [hover, setHover] = React.useState(null);
  const C = window.COPY;
  return (
    <section id="index" className="section index-section">
      <div className="section-head">
        <Reveal>
          <div className="eyebrow">— {C.sections.index[lang]} / 17</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            {lang === "jp" ? <>ぜんぶ自作の<br /><span className="hl-accent" style={{ "--hl": "#5fb89f" }}>17</span>個の<span className="hl-accent" style={{ "--hl": "#5fb89f" }}>音響道具</span>。</> : <>Thirteen plugins,<br /><span className="hl-accent" style={{ "--hl": "#5fb89f" }}>all hand-built.</span></>}
          </h2>
        </Reveal>
      </div>

      <ol className="index-list" onMouseLeave={() => setHover(null)}>
        {plugins.map((p, i) =>
        <li
          key={p.id}
          className={`index-row${hover === p.id ? " is-hover" : ""}${hover && hover !== p.id ? " is-dim" : ""}${p.featured ? " is-featured" : ""}`}
          onMouseEnter={() => setHover(p.id)}
          onClick={() => onSelect(p.id)}>
          
            <Reveal delay={i * 0.04} className="index-row-inner">
              <span className="ir-num">{p.num}</span>
              <span className="ir-name">
                {p.name}
                {p.featured &&
              <span className="ir-badge" style={{ color: p.accent, borderColor: p.accent }}>
                    {lang === "jp" ? "新作" : "NEW"}
                  </span>
              }
              </span>
              <span className="ir-cat">{p.category[lang]}</span>
              <span className="ir-type">{p.type}</span>
              <span className="ir-year">{p.year}</span>
              <span className="ir-go" style={{ color: p.accent }}>
                {p.featureUrl ? "↗" : "→"}
              </span>
            </Reveal>
          </li>
        )}
      </ol>
    </section>);

}

function CatalogDetail({ lang, plugins }) {
  const C = window.COPY;
  return (
    <section id="catalog" className="section catalog-section">
      <div className="section-head">
        <Reveal>
          <div className="eyebrow">— {C.sections.detail[lang]}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            {lang === "jp" ? <>一つずつ、<br /><span className="hl-accent" style={{ "--hl": "#d9a14a" }}>丁寧に</span>。</> : <>Every plugin,<br /><span className="hl-accent" style={{ "--hl": "#d9a14a" }}>in detail.</span></>}
          </h2>
        </Reveal>
      </div>

      <div className="catalog-stack">
        {plugins.map((p, i) =>
        <PluginCard key={p.id} plugin={p} lang={lang} index={i} />
        )}
      </div>
    </section>);

}

function PluginCard({ plugin, lang, index }) {
  const reversed = index % 2 === 1;
  return (
    <article id={plugin.id} className={`plugin-card${reversed ? " reversed" : ""}`}>
      <Reveal className="pc-mockup-wrap">
        <div className="pc-mockup" style={{ "--accent": plugin.accent }}>
          <PluginMockup plugin={plugin} dark={true} />
        </div>
      </Reveal>

      <div className="pc-info">
        <Reveal delay={0.05}>
          <div className="pc-num">{plugin.num}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="pc-name">{plugin.name}</h3>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="pc-cat">{plugin.category[lang]}</div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="pc-tagline"><span className="hl-accent" style={{ "--accent": plugin.accent }}>{plugin.tagline[lang]}</span></p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="pc-desc">{plugin.description[lang]}</p>
        </Reveal>

        <Reveal delay={0.3} className="pc-features">
          <ul>
            {plugin.features.map((f, i) =>
            <li key={i}>
                <span className="pc-feat-num">/{String(i + 1).padStart(2, "0")}</span>
                <span>{f[lang]}</span>
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal delay={0.35} className="pc-meta">
          <MetaRow k={lang === "jp" ? "形式" : "Format"} v="VST3" />
          <MetaRow k={lang === "jp" ? "OS" : "OS"} v="Windows" />
          <MetaRow k={lang === "jp" ? "動作確認" : "Tested on"} v="Ableton Live" />
        </Reveal>

        <Reveal delay={0.4} className="pc-actions">
          {plugin.featureUrl &&
          <a href={plugin.featureUrl} className="btn-primary">
              {lang === "jp" ? "内容を詳しく" : "Learn more"} <span className="arrow">→</span>
            </a>
          }
          <a
            href={plugin.repo + "/releases"}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            onClick={() => {
              try {
                counterUp(`dl-${plugin.id}`);
                window.dispatchEvent(new CustomEvent("dlbump", { detail: plugin.id }));
              } catch (e) {}
            }}>
            
            {lang === "jp" ? "ダウンロード" : "Download"} <span className="arrow">↓</span>
          </a>
          <a href={plugin.repo} target="_blank" rel="noreferrer" className="btn-ghost">
            {lang === "jp" ? "ソースコード" : "Source"} <span className="arrow">↗</span>
          </a>
          <DownloadChip pluginId={plugin.id} lang={lang} />
        </Reveal>

        <Reveal delay={0.45} className="pc-nudge">
          <span className="pc-nudge-text">
            {lang === "jp" ? "新作が出たら最初に知らせます ──" : "Get the next release first ──"}
          </span>
          <a href="https://x.com/kijyoumusic" target="_blank" rel="noreferrer">X</a>
          <span className="pc-nudge-sep">/</span>
          <a href="https://note.com/pain_modulation" target="_blank" rel="noreferrer">note</a>
        </Reveal>
      </div>
    </article>);

}

function Features({ lang }) {
  const items = [
  {
    k: "01",
    title: { en: "Built in C++ & JUCE", jp: "C++ × JUCE でビルド" },
    body: {
      en: "Every plugin is hand-coded in C++ on the JUCE framework — the same toolkit behind countless studio-grade products.",
      jp: "全プラグインを JUCE フレームワーク上で C++ ハンドコーディング。数多くのスタジオ品質製品と同じ土台。"
    }
  },
  {
    k: "02",
    title: { en: "Windows · Ableton Live", jp: "Windows × Ableton Live" },
    body: {
      en: "Designed and tested on Windows with Ableton Live. Other DAWs are likely to work but unverified — bug reports welcome. macOS / AU is not supported.",
      jp: "Windows × Ableton Live で設計・テストしています。他の DAW でも動作する見込みですが、動作確認は取れていません—動作報告は歓迎です。macOS／AU には非対応です。"
    }
  },
  {
    k: "03",
    title: { en: "Free & open-source", jp: "無料・オープンソース" },
    body: {
      en: "Free to use. Every line of source code lives on GitHub — inspect it, fork it, learn from it.",
      jp: "完全無料。すべてのソースコードを GitHub に公開しています。中身を読んで、フォークして、学んでください。"
    }
  }];


  return (
    <section id="features" className="section features-section">
      <div className="section-head">
        <Reveal>
          <div className="eyebrow">— {window.COPY.sections.features[lang]}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            {lang === "jp" ? <>つくり方が、<br /><span className="hl-accent" style={{ "--hl": "#9a7ad9" }}>音</span>をつくる。</> : <>How it's<br />how the <span className="hl-accent" style={{ "--hl": "#9a7ad9" }}>sound</span> is made.</>}
          </h2>
        </Reveal>
      </div>

      <div className="features-grid">
        {items.map((it, i) =>
        <Reveal key={it.k} delay={i * 0.08} className="feature-cell">
            <div className="fc-k">{it.k}</div>
            <h3 className="fc-title">{it.title[lang]}</h3>
            <p className="fc-body">{it.body[lang]}</p>
          </Reveal>
        )}
      </div>
    </section>);

}

function About({ lang }) {
  return (
    <section id="about" className="section about-section">
      <div className="section-head">
        <Reveal>
          <div className="eyebrow">— {window.COPY.sections.about[lang]}</div>
        </Reveal>
      </div>
      <div className="about-grid">
        <Reveal delay={0.1}>
          <h2 className="about-title">
            {lang === "jp" ?
            <>市販プラグインは<br /><span className="hl-accent" style={{ "--hl": "#e0506a" }}>物足りない</span><br />だから<span className="hl-accent" style={{ "--hl": "#3d8bbf" }}>自分で作った</span>だけ。</> :

            <>Commercial plugins<br />weren't <span className="hl-accent" style={{ "--hl": "#e0506a" }}>enough</span>.<br />So I just <span className="hl-accent" style={{ "--hl": "#3d8bbf" }}>built my own</span>.</>
            }
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="about-text">
          {lang === "jp" ?
          <>
              <p>
                <span className="about-lead">OTODESK</span> は、一人の音楽プロデューサーが、自身の制作のためだけに立ち上げた DSP プロジェクトです。公開しているすべてのプラグインは、デモやコンセプトではなく、実際の楽曲制作の現場で「足りない」と感じた瞬間から逆算して設計され、繰り返し使い倒した上でリリースしています。
              </p>
              <p>
                開発者は音響工学の専門教育を受けたエンジニアではありません。サラリーマンとして働き、家庭では子の良き父であり、ただ音楽が好きな一個人です。<span className="about-em">耳を頼りに、AI を壁打ち相手に</span>、Gemini や Claude と対話を重ねながら、JUCE のドキュメント、DSP の論文、プロエンジニアのブログを読み込み、難解な専門用語を一つずつ自分の言葉に翻訳して、設計と実装を進めてきました。
              </p>
              <p>
                ビルドエラーは、もはや数えていません。それでも諦めなかったのは、頭の中で鳴っている音を、誰かが作ってくれるのを待っていられなかったから。<span className="about-em">執念だけは、誰にも負けない自信があります。</span>
              </p>
              <p>
                バグの報告や機能のリクエスト、感想は、GitHub Issues か X (旧 Twitter) までお気軽にどうぞ。ご連絡いただけると、開発者は素直に喜びます。
              </p>
              <p className="about-aside">
                <span className="about-aside-mark">＊</span>
                誰にも再生されていない自作曲を、YouTube で公開しています。再生やコメントをいただけると、犬のように「ワンっ」と吠えて喜びます。
              </p>
            </> :

          <>
              <p>
                <span className="about-lead">OTODESK</span> is a solo DSP project — a one-person studio building tools for one person's productions. Every released plugin is reverse-engineered from real moments of "this isn't quite enough" in real sessions. Nothing ships as a concept demo; every plugin has been used in actual production work before it goes public.
              </p>
              <p>
                The developer isn't an audio-engineering graduate. He's a salaryman by day, a dad at home, and a music lover at heart. <span className="about-em">Working by ear, sparring with AI</span> — Gemini and Claude as conversation partners — he reads JUCE docs, DSP papers, and pro-engineer blogs, translating the jargon into his own words and turning it into code, one stubborn build error at a time.
              </p>
              <p>
                He stopped counting the build failures a long time ago. What he hasn't run out of is patience: <span className="about-em">if no one's going to build the sound in his head, he'll just keep at it until he builds it himself.</span>
              </p>
              <p>
                Bug reports, feature requests, and just-saying-hi messages are welcome via GitHub Issues or X (formerly Twitter). The developer will read every single one.
              </p>
              <p className="about-aside">
                <span className="about-aside-mark">*</span>
                He also uploads original tracks that nobody plays to YouTube. A view or a comment makes him bark like a happy dog.
              </p>
            </>
          }
          <div className="about-links">
            <a href="https://github.com/OTODESK4193" target="_blank" rel="noreferrer">
              github.com/OTODESK4193 <span className="arrow">↗</span>
            </a>
            <a href="https://x.com/kijyoumusic" target="_blank" rel="noreferrer">
              x.com/kijyoumusic <span className="arrow">↗</span>
            </a>
            <a href="https://note.com/pain_modulation" target="_blank" rel="noreferrer">
              note.com/pain_modulation <span className="arrow">↗</span>
            </a>
            <a href="https://youtube.com/playlist?list=PLaG0gX-K8LJMSJC8AxC4TmWKgA3-KHZze" target="_blank" rel="noreferrer">
              YouTube — {lang === "jp" ? "自作曲プレイリスト" : "Original tracks"} <span className="arrow">↗</span>
            </a>
          </div>

          <a className="note-card" href="https://note.com/pain_modulation/n/ncab34d152a3a" target="_blank" rel="noreferrer">
            <div className="note-card-k">note — {lang === "jp" ? "開発日記" : "Dev diary"}</div>
            <div className="note-card-title">
              {lang === "jp" ?
              "このサイトをどう作ったか、note に書きました。" :
              "How this whole site was built — the full story on note."}
            </div>
            <div className="note-card-desc">
              {lang === "jp" ?
              "素人が AI と二人三脚で 17 個のプラグインと公式サイトを作るまでの全記録。" :
              "A self-taught hobbyist, AI, and 17 plugins — the complete making-of."}
            </div>
            <div className="note-card-go">{lang === "jp" ? "記事を読む" : "Read the article"} <span className="arrow">↗</span></div>
          </a>
        </Reveal>
      </div>
    </section>);

}

function Footer({ lang }) {
  const visits = useVisitorCount();
  return (
    <footer className="site-footer" style={{ backgroundColor: "rgba(113, 255, 176, 0.275)" }}>
      <div className="ft-top">
        <div className="ft-brand">
          <span className="brand-mark">●</span> OTODESK
        </div>
        <div className="ft-tag">
          {lang === "jp" ? <><span className="hl-accent" style={{ "--hl": "#e0506a" }}>物足りない</span>なら、<span className="hl-accent" style={{ "--hl": "#3d8bbf" }}>自分で作る</span>。</> : <>If it's <span className="hl-accent" style={{ "--hl": "#e0506a" }}>not enough</span>, I'll <span className="hl-accent" style={{ "--hl": "#3d8bbf" }}>build it myself</span>.</>}
        </div>
      </div>
      <div className="ft-grid">
        <div>
          <div className="ft-h">{lang === "jp" ? "プラグイン" : "Plugins"}</div>
          {window.PLUGINS.filter((p) => p.id).map((p) =>
          <a key={p.id} href={p.featureUrl || "plugin.html?id=" + p.id}>{p.name}</a>
          )}
        </div>
        <div>
          <div className="ft-h">Links</div>
          <a href="https://github.com/OTODESK4193" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://x.com/kijyoumusic" target="_blank" rel="noreferrer">X (Twitter) ↗</a>
          <a href="https://note.com/pain_modulation" target="_blank" rel="noreferrer">note ↗</a>
        </div>
        <div>
          <div className="ft-h">Legal</div>
          <a href="https://www.gnu.org/licenses/agpl-3.0.ja.html#license-text" target="_blank" rel="noreferrer">AGPLv3</a>
          <a href="https://juce.com/" target="_blank" rel="noreferrer">Built with JUCE</a>
        </div>
      </div>
      <div className="ft-bottom">
        <span>© 2026 OTODESK</span>
        <span>VST3 is a trademark of Steinberg Media Technologies GmbH</span>
      </div>

      <div className="follow-block">
        <div className="follow-head">
          <div className="ft-h">{lang === "jp" ? "OTODESK をフォロー" : "Follow OTODESK"}</div>
          <p className="follow-lead">
            {lang === "jp" ?
            "新作が出たら、最初に知らせます。" :
            "Be the first to know when something new ships."}
          </p>
        </div>
        <div className="follow-grid">
          <a className="follow-card" href="https://x.com/kijyoumusic" target="_blank" rel="noreferrer">
            <span className="fc-net">X</span>
            <span className="fc-desc">{lang === "jp" ? "開発の裏側と、新作速報。" : "Dev updates & release news."}</span>
            <span className="fc-go">↗</span>
          </a>
          <a className="follow-card" href="https://note.com/pain_modulation" target="_blank" rel="noreferrer">
            <span className="fc-net">note</span>
            <span className="fc-desc">{lang === "jp" ? "制作秘話と技術解説（長文）。" : "Build stories & deep-dives."}</span>
            <span className="fc-go">↗</span>
          </a>
          <a className="follow-card" href="https://youtube.com/playlist?list=PLaG0gX-K8LJMSJC8AxC4TmWKgA3-KHZze" target="_blank" rel="noreferrer">
            <span className="fc-net">YouTube</span>
            <span className="fc-desc">{lang === "jp" ? "デモ動画と、自作曲。" : "Demos & original tracks."}</span>
            <span className="fc-go">↗</span>
          </a>
        </div>
      </div>

      <div className="visitor-wrap">
        <div className="visitor-card">
          <div className="vc-grid">
            <div className="vc-label">
              <span className="vc-dot" />
              <span>{lang === "jp" ? "訪問回数" : "Total visits"}</span>
            </div>
            <div className="vc-divider" />
            <div className="vc-number">
              <CountNumber value={visits} pad={6} />
            </div>
          </div>
          <div className="vc-foot">
            <span>{lang === "jp" ? "訪問ありがとうございます。" : "Thanks for stopping by."}</span>
            <span className="vc-tick">● LIVE</span>
          </div>
        </div>
      </div>
    </footer>);

}

function Featured({ lang, plugin }) {
  if (!plugin) return null;

  // Featured-specific content based on plugin ID
  const getFeaturedContent = () => {
    if (plugin.id === "quad-morph") {
      return {
        mainTitle: lang === "jp" ? "踊れ、フィルター！" : "Dance, Filters!",
        subtitle: lang === "jp" ?
        "あらゆる空間周波数を支配する、28のフィルター。リアルタイムモーフィング。" :
        "Command every spatial frequency with 28 algorithms. Real-time morphing.",
        flagText: lang === "jp" ? "リリース公開" : "Now Available",
        bullets: [
        { k: "28", v: lang === "jp" ? "ハンドクラフト・フィルター" : "handcrafted filters" },
        { k: "19", v: lang === "jp" ? "LFO波形 + モジュレーション" : "LFO waveforms + mods" },
        { k: "4×", v: lang === "jp" ? "オーバーサンプリング" : "oversampling" },
        { k: "∞", v: lang === "ja" ? "無料 ・ オープンソース" : "free & open-source" }],

        statusText: lang === "jp" ? "v1.0.0 公開中" : "v1.0.0 Available",
        showDL: true,
        showVideo: true
      };
    }

    // Ambience (fallback/default)
    return {
      mainTitle: lang === "jp" ?
      <>
            <span className="ft-line">最強の</span>
            <span className="ft-line"><span className="hl-accent" style={{ "--hl": "#ff8a3c" }}>アルゴリズム Reverb</span> を</span>
            <span className="ft-line"><span className="hl-accent" style={{ "--hl": "#3d8bbf" }}>無料</span>で。</span>
          </> :
      <>
            <span className="ft-line">The strongest</span>
            <span className="ft-line"><span className="hl-accent" style={{ "--hl": "#ff8a3c" }}>algorithmic reverb</span></span>
            <span className="ft-line">for <span className="hl-accent" style={{ "--hl": "#3d8bbf" }}>free</span>.</span>
          </>,
      subtitle: lang === "jp" ?
      "──有料のものと、違いが分かりますか？" :
      "──Can you tell it apart from the paid ones?",
      flagText: lang === "jp" ? "リリース中" : "Out now",
      bullets: [
      { k: "16ch", v: "Feedback Delay Network" },
      { k: "21", v: lang === "jp" ? "世界の名空間プリセット" : "world-class hall presets" },
      { k: "7", v: lang === "jp" ? "リバーブアルゴリズム" : "reverb algorithms" },
      { k: "∞", v: lang === "jp" ? "完全無料 ・ オープンソース" : "free & open-source" }],

      statusText: lang === "jp" ? "GPLv3 · 完全無料" : "GPLv3 · Free forever",
      showDL: true,
      showVideo: false
    };
  };

  const content = getFeaturedContent();

  return (
    <section id="featured" className="section featured-section">
      <div className="featured-grid">
        <div className="featured-media">
          {plugin.id === "quad-morph" ?
          <Reveal>
              <div className="featured-video">
                <iframe
                src="https://www.youtube.com/embed/DlfUTYyS-48?rel=0&modestbranding=1"
                title={lang === "jp" ? "Quad Morph Filter — 概要編" : "Quad Morph Filter — Overview"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen />
              </div>
            </Reveal> :

          <>
              <Reveal>
                <div className="featured-shot" style={{ "--accent": plugin.accent }}>
                  <img src={plugin.screenshot} alt={plugin.name} />
                  <div className="featured-shot-overlay">
                    <span className="fs-tag">UI · NORMAL MODE</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="featured-video">
                  <iframe
                  src="https://www.youtube.com/embed/9UfD9NzSE3c?rel=0&modestbranding=1"
                  title={plugin.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen />
                
                </div>
              </Reveal>
            </>
          }
        </div>

        <div className="featured-info">
          <Reveal>
            <div className="featured-flag">
              <span className="ff-dot" style={{ background: plugin.accent }} />
              <span>{content.flagText}</span>
              <span className="ff-sep">/</span>
              <span>{plugin.name.toUpperCase()}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="featured-title">
              {typeof content.mainTitle === 'string' ?
              content.mainTitle :
              content.mainTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="featured-sub">{content.subtitle}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="featured-bullets">
              {content.bullets.map((b, i) =>
              <li key={i}><span className="fb-k">{b.k}</span> <span>{b.v}</span></li>
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="featured-actions">
              <a href={plugin.featureUrl} className="btn-primary featured-cta">
                {lang === "jp" ?
                plugin.id === "quad-morph" ? "詳細を知る" : "内容を知る" :
                plugin.id === "quad-morph" ? "Learn more" : "Read the story"} 
                <span className="arrow">→</span>
              </a>
              {content.showDL &&
              <>
                  <a
                  href={plugin.repo + "/releases/latest"}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost featured-dl"
                  onClick={() => {
                    try {
                      counterUp(`dl-${plugin.id}`);
                      window.dispatchEvent(new CustomEvent("dlbump", { detail: plugin.id }));
                    } catch (e) {}
                  }}>
                  
                    {lang === "jp" ? "ダウンロード" : "Download"} <span className="arrow">↓</span>
                  </a>
                  <DownloadChip pluginId={plugin.id} lang={lang} />
                </>
              }
              <span className="featured-status">
                <span className="fs-dot" />
                {content.statusText}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="featured-nudge">
              <span className="pc-nudge-text">
                {lang === "jp" ? "新作が出たら最初に知らせます ──" : "Get the next release first ──"}
              </span>
              <a href="https://x.com/kijyoumusic" target="_blank" rel="noreferrer">X</a>
              <span className="pc-nudge-sep">/</span>
              <a href="https://note.com/pain_modulation" target="_blank" rel="noreferrer">note</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

// =========================================================
// NEWS SECTION
// =========================================================
function NewsSection({ lang }) {
  var newsItems = [
  {
    id: "next-gen-kick-2",
    badge: { jp: "VST3 · 7/11 リリース！", en: "VST3 · RELEASED 7/11" },
    date: "2026.07.11",
    title: { jp: "最強のキックシンセ本日公開！", en: "The Ultimate Kick Synth is Out Now." },
    sub: { jp: "NEXT GEN KICK 2 — 3レイヤー合成エンジン × 70プリセット × 480バンドアナライザ", en: "NEXT GEN KICK 2 — 3-Layer Synthesis × 70 Factory Presets × 480-Band Analyzer" },
    excerpt: {
      jp: "本日7/11リリース！動画も公開。NEXT GEN KICK から 7 ヶ月。AI との対話による開発で積み上げてきたすべてのノウハウを一本に注ぎ込んだ、OTODESK の最高傑作。3 層合成エンジン（Attack / Body / Sub）、70 ファクトリプリセット、多点ベジェ・エンベロープエディタ、レイヤー別 FX ラック（ADAA サチュレーション 10 種 / OTT / Glue / Limiter）、480 バンド・スペクトラム・アナライザ——頭の中にあるキックを、全てゼロレイテンシで形にできる。",
      en: "Released today 7/11! Demo video live. Seven months after NEXT GEN KICK, every lesson from AI-assisted development distilled into one masterpiece. 3-layer synthesis (Attack / Body / Sub), 70 factory presets, multi-point bezier envelope editor, per-layer FX rack (10-algorithm ADAA saturation / OTT / Glue / Limiter), 480-band spectrum analyzer. Design any kick you can imagine — at zero latency."
    },
    img: "screenshots/NextGenKick2Main.jpg",
    url: "next-gen-kick-2.html",
    accent: "#ffd166",
    isNew: true,
    comingSoon: false
  },
  {
    id: "basssynth-1-2-0",
    badge: { jp: "VST3 · Coming Soon", en: "VST3 · Coming Soon" },
    date: "2026.07",
    title: { jp: "次世代ウェーブテーブル・ベースシンセが劇的進化！", en: "Next-Gen Wavetable Bass Synth Evolves." },
    sub: { jp: "BassSynth v1.2.0 — ポリフォニック化 × 数式ウェーブテーブル × エフェクト順変更", en: "BassSynth v1.2.0 — Polyphony × Formula WT × Swappable FX Chain" },
    excerpt: {
      jp: "BassSynth の巨大な進化。最大 24 ボイスのポリフォニック対応により豊かな和音やパッド演奏が可能となり、打鍵速度やランダム等の拡張モジュレーション・マトリクス、クリックノイズを防ぐスムージング、数式からウェーブテーブルをリアルタイム生成する数式エディタ、順番を入れ替え可能な3系統の空間エフェクト（Chorus / Delay / Reverb）、バイナリ埋め込みによる高速なアセット読み込みを搭載。ゼロレイテンシで圧倒的な低音を。",
      en: "A massive evolutionary leap for BassSynth. Now supporting up to 24-voice polyphony for rich chords and pads, an advanced modulation matrix with performance-oriented sources (Velocity, threshold gate, trigger random), smoothing controls to eliminate clicks, a real-time mathematical formula editor for custom wavetable generation, a swappable 3-slot FX routing engine (Chorus, Delay, Reverb), and hardcoded factory assets for portable zero-dependency speed. Zero-latency and optimized."
    },
    img: "screenshots/basssynth-1-2-0.jpg",
    url: "basssynth-1-2-0.html",
    accent: "#00d4ff",
    isNew: true,
    comingSoon: true
  },
  {
    id: "anatomy",
    badge: { jp: "VST3 · 6/21公開", en: "VST3 · 6/21 RELEASED" },
    date: "2026.06.21",
    title: { jp: "サンプルを解剖しませんか？", en: "Dissect Your Samples." },
    sub: { jp: "ANATOMY — リアルタイム過渡音/音色分離エンジン", en: "ANATOMY — Real-time Transient / Tonal Separation Engine" },
    excerpt: {
      jp: "読み込んだオーディオを cos² クロスフェードでトランジェント・トーン・フルミックスの 3 レーンにエネルギー損失ゼロで分離。各レーンに独立ピッチ/ゲインと 6 スロットエフェクトチェーン。サンプルの構造そのものを解剖する、まったく新しい発想のサンプラー。6/21公開（動画も公開）。",
      en: "Splits any audio into Transient, Tonal, and Full Mix lanes via lossless cos\u00b2 crossfade \u2014 zero energy loss, zero overlap artefacts. 6 FX chains per lane, independent pitch & gain. A sampler that dissects the anatomy of sound."
    },
    img: "screenshots/anatomy.jpg",
    url: "anatomy.html",
    accent: "#c084fc",
    isNew: true,
    comingSoon: false
  },
  {
    id: "lowcut-police",
    badge: { jp: "VST3 · 7/4 リリース！", en: "VST3 · RELEASED 7/4" },
    date: "2026.07.04",
    title: { jp: "ローカット警察は怖くない！！", en: "LowCut Police — Released." },
    sub: { jp: "LowCut Police — ミニマムフェーズ IIR ハイパス＋超高解像度アナライザー（1Hz〜）", en: "LowCut Police — Minimum-Phase IIR Highpass + Ultra-High-Res Analyzer" },
    excerpt: {
      jp: "本日 7/4 リリース！動画も公開。ミニマムフェーズ IIR ハイパスと 1Hz まで表示できる超高解像度アナライザーで、低域の問題を可視化して精確にクリーンアップ。着色なし、アーティファクトなし、完全無料。",
      en: "Released today 7/4! Video now live. Minimum-phase IIR highpass + ultra-high-resolution analyzer down to 1 Hz — visualize low-end problems and clean them up with surgical precision. No coloration, no artifacts, completely free."
    },
    img: "screenshots/LowCutPolice.jpg",
    url: "lowcut-police.html",
    accent: "#ff6b4a",
    isNew: true,
    comingSoon: false
  },
  {
    id: "neoto-pre-update",
    badge: { jp: "VST3 · UPDATE", en: "VST3 · UPDATE" },
    date: "2026.06.13",
    title: { jp: "NEOTO Pre v1.1.0 リリース。", en: "NEOTO Pre v1.1.0 Released." },
    sub: { jp: "NEOTO Pre — アナログモデリング・プリアンプ／トランス・サチュレータ\n動画公開！！", en: "NEOTO Pre — Analog-Modeled Preamp & Transformer Saturator" },
    excerpt: {
      jp: "磁気ヒステリシスの物理モデリングと最先端アンチエイリアシングを組み合わせた精密なプリアンプ／トランスサチュレーション。Jiles-Atherton と Tellinen ヒステリシスモデル、6 種プリアンプ、6 種トランスモデルで、静的な波形整形では到達できない有機的なサチュレーション・キャラクタを実現します。",
      en: "Physical modeling of magnetic hysteresis meets state-of-the-art anti-aliasing. Jiles-Atherton & Tellinen hysteresis models, 6 preamp architectures, 6 transformer topologies — organic saturation that static waveshapers can\u2019t reach."
    },
    img: "screenshots/neoto-pre.jpg",
    url: "plugin.html?id=neoto-pre",
    accent: "#ff7a3a",
    isNew: true
  },
  {
    id: "ambience",
    badge: { jp: "VST3 · UPDATE", en: "VST3 · UPDATE" },
    date: "2026.06.13",
    title: { jp: "Ambience v1.1.0 リリース。", en: "Ambience v1.1.0 Released." },
    sub: { jp: "PreDelay 修正・金属系アーティファクト解消・音質向上\n動画公開！！", en: "PreDelay fix, metallic artefact fix, FDN quality upgrade" },
    excerpt: {
      jp: "PreDelay が DSP に正しく反映されないバグを修正。長い DecayTime で為が付いた金属系リンギングも解消。コーラス LFO・3段オールパス・ Thiran補間により、テールの密度と貧乏テクスチャが大幅向上。",
      en: "PreDelay now correctly feeds both ER and FDN paths. Metallic ringing at long decay times resolved via DC blocker + micro-saturation. Chorus LFO, 3-stage allpass, and Thiran interpolation deliver richer, more organic tails."
    },
    img: "screenshots/ambience.jpg",
    url: "ambience.html",
    accent: "#ff8a3c",
    isNew: true
  },
  {
    id: "quad-morph",
    badge: { jp: "VST3 \u00b7 \u516c\u958b\u4e2d", en: "VST3 \u00b7 RELEASED" },
    date: "2026.06",
    title: { jp: "\u8e0a\u308c\u3001\u30d5\u30a3\u30eb\u30bf\u30fc\uff01", en: "Dance, Filters!" },
    sub: { jp: "Quad Morph Filter \u2014 28\u30e2\u30c7\u30eb\u30fb\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30fc\u30d5\u30a3\u30f3\u30b0", en: "Quad Morph Filter \u2014 28 Models, Real-time Morphing" },
    excerpt: {
      jp: "28 \u500b\u306e\u30cf\u30f3\u30c9\u30af\u30e9\u30d5\u30c8\u30d5\u30a3\u30eb\u30bf\u30fc\u3092 XY \u30d1\u30c3\u30c9\u3067\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u30e2\u30fc\u30d5\u30a3\u30f3\u30b0\u3002Moog Ladder\u3001TB-303\u3001Z-Plane 2D\u2026 19 \u7a2e LFO\u30014\u00d7 \u30aa\u30fc\u30d0\u30fc\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3002\u5b8c\u5168\u7121\u6599\u3002",
      en: "28 handcrafted filter topologies morphing live on an XY pad. Moog Ladder, TB-303, Z-Plane 2D, and more \u2014 19 LFO waveforms, 4\u00d7 oversampling. Completely free."
    },
    img: "screenshots/quad-morph.jpg",
    url: "quad-morph.html",
    accent: "#00d9ff",
    isNew: false
  }];


  return (
    <section id="news" className="section news-section">
      <div className="news-inner">
        <div className="section-head">
          <div className="eyebrow">{"\u2014 "}{lang === "jp" ? "\u6700\u8fd1\u306e\u30ea\u30ea\u30fc\u30b9" : "RECENT RELEASES"}{" / 2026"}</div>
          <h2 className="section-title">
            {lang === "jp" ?
            <><span className="hl-accent" style={{ "--hl": "var(--accent)" }}>{"新しいものを"}</span>{"、届けています。"}</> :
            <>New tools, <span className="hl-accent" style={{ "--hl": "var(--accent)" }}>regularly shipped.</span></>}
          </h2>
        </div>
        <div className="news-grid">
          <NewsCard item={newsItems[0]} lang={lang} size="large" />
          <div className="news-side">
            <NewsCard item={newsItems[1]} lang={lang} size="small" />
            <NewsCard item={newsItems[2]} lang={lang} size="small" />
            <NewsCard item={newsItems[3]} lang={lang} size="small" />
          </div>
        </div>
      </div>
    </section>);

}

function NewsCard({ item, lang, size }) {
  var [imgErr, setImgErr] = React.useState(false);
  return (
    <Reveal>
      <article className={"news-card news-card--" + size} style={{ "--nc-accent": item.accent, fontSize: "40px" }}>
        <a href={item.url} className="news-card-img-wrap">
          {!imgErr ?
          <img src={item.img} alt={item.title[lang]} className="news-card-img"
          onError={function () {setImgErr(true);}} loading="lazy" /> :
          <div className="news-img-fallback" style={{ background: item.accent + "22" }}>
                <span style={{ color: item.accent, fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.1em" }}>
                  {item.id.toUpperCase()}
                </span>
              </div>
          }
          <div className="news-card-overlay" />
          {item.isNew && <div className="news-new-badge">NEW</div>}
          {item.comingSoon &&
          <div style={{
            position: "absolute", inset: 0, overflow: "hidden",
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none"
          }}>
              <div style={{
              position: "absolute",
              width: "160%",
              textAlign: "center",
              transform: "rotate(-35deg) translateY(-10%)",
              background: "rgba(255,255,255,0.95)",
              color: "#111",
              fontFamily: "var(--mono, monospace)",
              fontSize: "clamp(16px, 3vw, 22px)",
              fontWeight: "700",
              letterSpacing: "0.2em",
              padding: "13px 0",
              textTransform: "uppercase",
              userSelect: "none",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)"
            }}>COMING SOON</div>
            </div>
          }
        </a>
        <div className="news-card-body">
          <div className="news-card-meta">
            <span className="news-card-type" style={{ color: item.accent }}>{item.badge[lang]}</span>
            <time className="news-card-date">{item.date}</time>
          </div>
          <h3 className="news-card-title">{item.title[lang]}</h3>
          {size === "large" && <p className="news-card-excerpt" style={{ fontSize: "20px" }}>{item.excerpt[lang]}</p>}
          <p className="news-card-sub" style={{ fontSize: "20px" }}>{item.sub[lang]}</p>
          {!item.hideLink &&
          <a href={item.url} className="news-card-cta">
            {lang === "jp" ? "詳しく見る" : "Learn more"} <span className="arrow">{"\u2192"}</span>
          </a>
          }
        </div>
      </article>
    </Reveal>);

}

// =========================================================
// PLUGIN GALLERY
// =========================================================
function PluginGallery({ lang }) {
  var plugins = window.PLUGINS;
  return (
    <section id="gallery" className="section gallery-section">
      <div className="gallery-inner">
        <div className="section-head">
          <div className="eyebrow">{"\u2014 "}{lang === "jp" ? "\u5168\u4f5c\u54c1 / " + plugins.length : "ALL WORKS / " + plugins.length}</div>
          <h2 className="section-title">
            {lang === "jp" ?
            <>{"ぜんぶ自作の"}<br /><span className="hl-accent" style={{ "--hl": "#5fb89f" }}>17</span>{"個の"}<span className="hl-accent" style={{ "--hl": "#5fb89f" }}>{"音響道具"}</span>{"。"}</> :
            <>Seventeen tools,<br /><span className="hl-accent" style={{ "--hl": "#5fb89f" }}>all hand-built.</span></>}
          </h2>
        </div>
        <div className="pgallery-grid">
          {plugins.filter((p) => p.id).map(function (p) {return <GalleryCard key={p.id} plugin={p} lang={lang} />;})}
        </div>
      </div>
    </section>);

}

function GalleryCard({ plugin, lang }) {
  var [imgErr, setImgErr] = React.useState(false);
  var [dlCount, setDlCount] = React.useState(function () {return parseInt(localStorage.getItem("dl-" + plugin.id) || "0");});
  var [srcCount, setSrcCount] = React.useState(function () {return parseInt(localStorage.getItem("src-" + plugin.id) || "0");});
  var screenshotPath = plugin.screenshot || "screenshots/" + plugin.id + ".jpg";
  var isMFL = plugin.type === "Max for Live";

  // Derive URLs — use explicit fields or fall back to repo
  var detailUrl = plugin.featureUrl || "plugin.html?id=" + plugin.id;
  var dlUrl = plugin.downloadUrl || (plugin.repo ? plugin.repo + "/releases/latest" : null);
  var srcUrl = plugin.sourceUrl || plugin.repo || null;

  var handleDL = function () {
    if (plugin.comingSoon) return;
    try {counterUp("dl-" + plugin.id);window.dispatchEvent(new CustomEvent("dlbump", { detail: plugin.id }));} catch (e) {}
    var n = dlCount + 1;localStorage.setItem("dl-" + plugin.id, n);setDlCount(n);
  };
  var handleSrc = function () {
    try {counterUp("src-" + plugin.id);window.dispatchEvent(new CustomEvent("srcbump", { detail: plugin.id }));} catch (e) {}
    var n = srcCount + 1;localStorage.setItem("src-" + plugin.id, n);setSrcCount(n);
  };

  var imgNode = !imgErr ?
  <img src={screenshotPath} alt={plugin.name} className="pgcard-img"
  onError={function () {setImgErr(true);}} loading="lazy" /> :
  <div className="pgcard-img-fallback" style={{ background: (plugin.accent || "#888") + "22" }}>
        <span style={{ color: plugin.accent || "var(--accent)", fontFamily: "var(--mono)", fontSize: "10px" }}>
          {plugin.name.toUpperCase()}
        </span>
      </div>;

  return (
    <Reveal>
      <div className={"pgcard" + (plugin.comingSoon ? " pgcard--soon" : "")}
      style={{ "--pg-accent": plugin.accent || "var(--accent)" }}>
        <div className="pgcard-img-wrap">
          <a href={detailUrl} className="pgcard-img-link">{imgNode}</a>
          <div className="pgcard-num">{plugin.num}</div>
          {isMFL && <div className="pgcard-badge pgcard-badge--mfl">M4L</div>}
          {plugin.comingSoon && !isMFL && <div className="pgcard-badge pgcard-badge--soon">Soon</div>}
        </div>
        <div className="pgcard-body">
          <div className="pgcard-head-row">
            <a href={detailUrl} className="pgcard-name" style={{ color: "inherit", textDecoration: "none" }}>{plugin.name}</a>
            <span className="pgcard-version">v{plugin.version}</span>
          </div>
          <p className="pgcard-cat">{plugin.category[lang === "jp" ? "jp" : "en"]}</p>
          <div className="pgcard-actions">
            <a href={detailUrl} className="pgcard-btn pgcard-btn--detail">
              {lang === "jp" ? "詳細" : "Info"}
            </a>
            {plugin.comingSoon ?
            <span className="pgcard-btn pgcard-btn--soon">Coming Soon</span> :
            dlUrl ?
            <a href={dlUrl} target="_blank" rel="noreferrer"
            className="pgcard-btn pgcard-btn--dl" onClick={handleDL}>{"DL ↓"}</a> :
            null}
            {srcUrl && !plugin.comingSoon &&
            <a href={srcUrl} target="_blank" rel="noreferrer"
            className="pgcard-btn pgcard-btn--src" onClick={handleSrc}>src</a>}
          </div>
        </div>
      </div>
    </Reveal>);

}

Object.assign(window, { Header, Hero, IndexList, CatalogDetail, PluginCard, Features, About, Footer, Featured });