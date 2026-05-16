// Lightweight cross-visitor counter using abacus.jasoncameron.dev (free, no auth).
// - useVisitorCount: increments once per session, returns current global count
// - useClickCount(key): returns [count, bump] — bump() increments
const COUNTER_NAMESPACE = "otodesk4193";

async function counterRead(key) {
  try {
    const r = await fetch(`https://abacus.jasoncameron.dev/get/${COUNTER_NAMESPACE}/${key}`);
    const j = await r.json().catch(() => null);
    if (!j) return null;
    // Key that has never been hit returns {error: "Key not found"} — treat as 0
    if (typeof j.value === "number") return j.value;
    if (typeof j.error === "string") return 0;
    return null;
  } catch (e) { return null; }
}
async function counterUp(key) {
  try {
    const r = await fetch(`https://abacus.jasoncameron.dev/hit/${COUNTER_NAMESPACE}/${key}`);
    if (!r.ok) return null;
    const j = await r.json();
    return typeof j.value === "number" ? j.value : null;
  } catch (e) { return null; }
}

function useVisitorCount() {
  const [count, setCount] = React.useState(null);
  React.useEffect(() => {
    let cancelled = false;
    const SESSION_KEY = "otodesk_visit_v1";
    const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1";
    (async () => {
      const n = alreadyCounted ? await counterRead("visits") : await counterUp("visits");
      if (!cancelled && n !== null) {
        setCount(n);
        if (!alreadyCounted) sessionStorage.setItem(SESSION_KEY, "1");
      }
    })();
    return () => { cancelled = true; };
  }, []);
  return count;
}

function useClickCount(key) {
  const [count, setCount] = React.useState(null);
  React.useEffect(() => {
    let cancelled = false;
    counterRead(key).then((n) => { if (!cancelled && n !== null) setCount(n); });
    return () => { cancelled = true; };
  }, [key]);
  const bump = React.useCallback(async () => {
    // optimistic
    setCount((c) => (typeof c === "number" ? c + 1 : c));
    const n = await counterUp(key);
    if (n !== null) setCount(n);
  }, [key]);
  return [count, bump];
}

// Animated odometer-style number — gently rolls into place
function CountNumber({ value, pad = 0, className = "" }) {
  const [displayed, setDisplayed] = React.useState(value || 0);
  React.useEffect(() => {
    if (value === null || value === undefined) return;
    const start = displayed;
    const end = value;
    if (start === end) return;
    const dur = Math.min(900, 250 + Math.abs(end - start) * 30);
    const t0 = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayed(Math.round(start + (end - start) * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  const str = value === null ? "—" : String(displayed).padStart(pad, "0");
  return <span className={className}>{str}</span>;
}

// Download counter chip — passive display, increments when the Download button
// next to it is clicked (the parent posts to the same key via counterUp).
function DownloadChip({ pluginId, lang }) {
  const [count, setCount] = React.useState(null);
  const key = `dl-${pluginId}`;
  React.useEffect(() => {
    let cancelled = false;
    counterRead(key).then((n) => { if (!cancelled && n !== null) setCount(n); });
    return () => { cancelled = true; };
  }, [key]);
  // Watch its sibling Download button — when clicked, optimistically bump and re-read
  React.useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest && e.target.closest(`a[href*="${pluginId === 'multi-oto' ? 'MULTI-OTO' : pluginId}"]`);
      // Simple solution: listen for any click on the parent's Download button
    };
    // Instead, expose a global bump fn keyed by pluginId
    const onBump = (ev) => {
      if (ev.detail !== pluginId) return;
      setCount((c) => (typeof c === "number" ? c + 1 : 1));
      // re-sync after server processed
      setTimeout(() => counterRead(key).then((n) => { if (n !== null) setCount(n); }), 800);
    };
    window.addEventListener("dlbump", onBump);
    return () => window.removeEventListener("dlbump", onBump);
  }, [pluginId, key]);
  return (
    <div className="click-chip is-passive" title={lang === "jp" ? "ダウンロード数" : "Downloads"}>
      <span className="cc-dot" />
      <span className="cc-label">{lang === "jp" ? "DL数" : "Downloads"}</span>
      <CountNumber value={count} pad={4} className="cc-num" />
    </div>
  );
}

// Click counter chip — sits next to the "Source" button.
// Renders nothing visible until first count read returns to avoid layout flicker.
function ClickChip({ pluginId, lang }) {
  const [count, bump] = useClickCount(`click-${pluginId}`);
  return (
    <button
      type="button"
      className="click-chip"
      onClick={(e) => {
        e.preventDefault();
        bump();
        // open repo in new tab after slight delay so the count increments visibly
        const a = e.currentTarget.closest(".pc-actions")?.querySelector('a[href*="github.com"]');
        if (a) window.open(a.href, "_blank", "noreferrer");
      }}
      title={lang === "jp" ? "クリック数" : "Clicks"}
    >
      <span className="cc-dot" />
      <span className="cc-label">{lang === "jp" ? "クリック" : "Clicks"}</span>
      <CountNumber value={count} pad={4} className="cc-num" />
    </button>
  );
}

Object.assign(window, { useVisitorCount, useClickCount, CountNumber, ClickChip, DownloadChip, counterUp, counterRead });
