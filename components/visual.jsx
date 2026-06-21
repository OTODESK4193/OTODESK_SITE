// Reusable visual components

// Animated reveal — fades + slides element up when it enters the viewport
function Reveal({ children, delay = 0, as: As = "div", className = "", style = {}, threshold = 0.15 }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(true);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px", root: document.scrollingElement || document.body }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return (
    <As
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.9s cubic-bezier(.2,.7,.2,1) ${delay}s, transform 0.9s cubic-bezier(.2,.7,.2,1) ${delay}s`,
      }}
    >
      {children}
    </As>
  );
}

// SVG placeholder mockup of a plugin UI — gives each card real presence
// without inventing fake screenshots
function PluginMockup({ plugin, dark = true, compact = false }) {
  const bg = dark ? "#0f0f10" : "#fafaf8";
  const fg = dark ? "#e9e9e6" : "#101010";
  const dim = dark ? "#3a3a3c" : "#cfcfcc";
  const stroke = dark ? "#2a2a2c" : "#dedcd6";
  const accent = plugin.accent;

  return (
    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="640" height="360" fill={bg} />
      {/* top bar */}
      <line x1="0" y1="44" x2="640" y2="44" stroke={stroke} />
      <text x="20" y="28" fill={fg} fontFamily="Geist Mono, monospace" fontSize="11" letterSpacing="0.18em">
        OTODESK / {plugin.name.toUpperCase()}
      </text>
      <text x="620" y="28" textAnchor="end" fill={dim} fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="0.14em">
        v{plugin.version} · {plugin.type.toUpperCase()}
      </text>

      {/* main visual region — different per type */}
      {plugin.type === "Instrument" && (
        <g>
          <rect x="20" y="60" width="380" height="180" fill="none" stroke={stroke} />
          {/* waveform */}
          <path
            d={(() => {
              const pts = [];
              for (let i = 0; i < 200; i++) {
                const x = 20 + (i / 199) * 380;
                const t = i / 199;
                const y =
                  150 +
                  Math.sin(t * Math.PI * 6) * 40 * (1 - Math.abs(t - 0.5) * 1.6) +
                  Math.sin(t * Math.PI * 14) * 15;
                pts.push(`${i === 0 ? "M" : "L"}${x} ${y}`);
              }
              return pts.join(" ");
            })()}
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
          />
          {/* keyboard */}
          <g>
            {Array.from({ length: 24 }).map((_, i) => {
              const x = 20 + i * (380 / 24);
              const isBlack = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22].includes(i % 24);
              return (
                <rect key={i} x={x} y="250" width={380 / 24 - 1} height={isBlack ? 22 : 36} fill={isBlack ? fg : "transparent"} stroke={stroke} />
              );
            })}
          </g>
        </g>
      )}
      {plugin.type === "Effect" && (
        <g>
          {/* spectrum bars */}
          {Array.from({ length: 56 }).map((_, i) => {
            const x = 20 + i * 6.8;
            const h = 20 + Math.sin(i * 0.3) * 30 + Math.cos(i * 0.7) * 20 + Math.random() * 30;
            return <rect key={i} x={x} y={220 - h} width="4" height={h} fill={i % 7 === 0 ? accent : dim} />;
          })}
          <line x1="20" y1="220" x2="420" y2="220" stroke={stroke} />
        </g>
      )}
      {plugin.type === "MIDI" && (
        <g>
          {/* step grid */}
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 16 }).map((__, col) => {
              const x = 20 + col * 23.5;
              const y = 70 + row * 21;
              const on = (row * 5 + col * 3) % 7 === 0 || (col + row) % 11 === 0;
              return <rect key={`${row}-${col}`} x={x} y={y} width="20" height="17" fill={on ? accent : dim} opacity={on ? 1 : 0.25} />;
            })
          )}
        </g>
      )}

      {/* right-side knobs / params */}
      <g transform="translate(420, 60)">
        <line x1="0" y1="0" x2="0" y2="280" stroke={stroke} />
        {["DRIVE", "TONE", "MIX", "OUT"].map((label, i) => {
          const cy = 40 + i * 60;
          const ang = -130 + ((i * 73) % 260);
          const rad = (ang * Math.PI) / 180;
          return (
            <g key={label} transform={`translate(110, ${cy})`}>
              <circle r="22" fill="none" stroke={dim} />
              <circle r="22" fill="none" stroke={accent} strokeWidth="2" strokeDasharray={`${Math.abs(ang + 130) * 0.6} 200`} transform="rotate(135)" />
              <line x1="0" y1="0" x2={Math.cos(rad) * 18} y2={Math.sin(rad) * 18} stroke={fg} strokeWidth="2" />
              <text x="55" y="5" fill={dim} fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="0.18em">
                {label}
              </text>
            </g>
          );
        })}
      </g>

      {/* bottom bar */}
      <line x1="0" y1="316" x2="640" y2="316" stroke={stroke} />
      <text x="20" y="338" fill={dim} fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="0.18em">
        VST3 · WIN · ABLETON · JUCE
      </text>
      <circle cx="610" cy="332" r="3" fill={accent} />
      <text x="600" y="336" textAnchor="end" fill={dim} fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="0.14em">
        {plugin.status.toUpperCase()}
      </text>
    </svg>
  );
}

// Tiny mono badge with key/value
function MetaRow({ k, v }) {
  return (
    <div className="meta-row">
      <span className="meta-k">{k}</span>
      <span className="meta-rule" />
      <span className="meta-v">{v}</span>
    </div>
  );
}

// Numbered chip
function Numbered({ children }) {
  return <span className="num-chip">{children}</span>;
}

Object.assign(window, { Reveal, PluginMockup, MetaRow, Numbered });
