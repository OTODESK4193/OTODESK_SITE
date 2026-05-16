// Header with brand + lang toggle + nav
function Header({ lang, setLang, dark }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
  { href: "#index", en: "Index", jp: "一覧" },
  { href: "#catalog", en: "Catalog", jp: "詳細" },
  { href: "#features", en: "Built", jp: "つくり" },
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
            <span>WORKS — 09</span>
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
              <a href="#index" className="btn-primary">
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
          <div className="eyebrow">— {C.sections.index[lang]} / 09</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            {lang === "jp" ? <>ぜんぶ自作の<br /><span className="hl-accent" style={{ "--hl": "#5fb89f" }}>9</span>つの<span className="hl-accent" style={{ "--hl": "#5fb89f" }}>音響道具</span>。</> : <>Nine plugins,<br /><span className="hl-accent" style={{ "--hl": "#5fb89f" }}>all hand-built.</span></>}
          </h2>
        </Reveal>
      </div>

      <ol className="index-list" onMouseLeave={() => setHover(null)}>
        {plugins.map((p, i) =>
        <li
          key={p.id}
          className={`index-row${hover === p.id ? " is-hover" : ""}${hover && hover !== p.id ? " is-dim" : ""}`}
          onMouseEnter={() => setHover(p.id)}
          onClick={() => onSelect(p.id)}>
          
            <Reveal delay={i * 0.04} className="index-row-inner">
              <span className="ir-num">{p.num}</span>
              <span className="ir-name">{p.name}</span>
              <span className="ir-cat">{p.category[lang]}</span>
              <span className="ir-type">{p.type}</span>
              <span className="ir-year">{p.year}</span>
              <span className="ir-go" style={{ color: p.accent }}>
                →
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
          <a href={plugin.repo} target="_blank" rel="noreferrer" className="btn-primary">
            {lang === "jp" ? "ダウンロード" : "Download"} <span className="arrow">↓</span>
          </a>
          <a href={plugin.repo} target="_blank" rel="noreferrer" className="btn-ghost">
            {lang === "jp" ? "ソースコード" : "Source"} <span className="arrow">↗</span>
          </a>
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
          <p>
            {lang === "jp" ?
            "OTODESK は、ひとりのプロデューサーが自分の制作のためにつくっている DSP プロジェクトです。" :
            "OTODESK is a one-person DSP project — a producer building tools for their own productions."}
          </p>
          <p>
            {lang === "jp" ?
            "公開しているプラグインはすべて、実際の楽曲制作で使うことを念頭に設計し、テストしています。" :
            "Every released plugin has been designed and tested against real production work — not as a tech demo, but as a tool I actually reach for."}
          </p>
          <p>
            {lang === "jp" ?
            "気になるバグや要望があれば、GitHub の Issues か X(Twitter) で気軽にどうぞ。" :
            "Bugs and feature requests are welcome on GitHub Issues or X (Twitter)."}
          </p>
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
          </div>
        </Reveal>
      </div>
    </section>);

}

function Footer({ lang }) {
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
          {window.PLUGINS.map((p) =>
          <a key={p.id} href={`#${p.id}`}>{p.name}</a>
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
          <a href="#">GPLv3</a>
          <a href="#">Built with JUCE</a>
        </div>
      </div>
      <div className="ft-bottom">
        <span>© 2026 OTODESK</span>
        <span>VST3 is a trademark of Steinberg Media Technologies GmbH</span>
      </div>
    </footer>);

}

Object.assign(window, { Header, Hero, IndexList, CatalogDetail, PluginCard, Features, About, Footer });