import { useEffect, useState } from "react";
import styles from "../style/NotFound.module.css";

const NotFound = () => {
  const [canGoBack] = useState(() => typeof window !== "undefined" && window.history.length > 1);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page not found | Sachkriya";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.logo} aria-label="Sachkriya General Trading W.L.L, home">
          <svg viewBox="0 0 60 60" className={styles.logoMark} aria-hidden="true">
            <circle cx="21" cy="39" r="16" />
            <circle cx="48" cy="12" r="9" />
            <path d="M30 28 42 17l3 3-11 12z" />
          </svg>
          <span>
            <span className={styles.logoName}>Sachkriya</span>
            <span className={styles.logoSub}>General Trading W.L.L</span>
          </span>
        </a>
      </header>

      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <h1 className={styles.heading}>
              <span className={styles.code}>
                <span className={styles.srOnly}>Error </span>404
              </span>
              <span className={styles.title}>This page is off course.</span>
            </h1>

            <p className={styles.text}>
              We couldn’t find the page you requested. It may have been moved, renamed or no longer exists.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Back to homepage
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>

              {canGoBack && (
                <button type="button" className={styles.secondary} onClick={() => window.history.back()}>
                  Go back
                </button>
              )}
            </div>
          </div>

          <div className={styles.art}>
            <svg
              viewBox="0 0 560 520"
              className={styles.map}
              role="img"
              aria-label="A globe of trade routes. Four connected locations form a network, while one route leads to a destination that cannot be found."
            >
              <defs>
                <radialGradient id="nf-globe" cx="38%" cy="32%" r="80%">
                  <stop offset="0" stopColor="#1f3328" />
                  <stop offset="1" stopColor="#0b1411" />
                </radialGradient>
                <clipPath id="nf-clip">
                  <circle cx="280" cy="260" r="210" />
                </clipPath>
              </defs>

              <circle cx="280" cy="260" r="210" fill="url(#nf-globe)" />
              <g clipPath="url(#nf-clip)" className={styles.grid}>
                <ellipse cx="280" cy="260" rx="70" ry="210" />
                <ellipse cx="280" cy="260" rx="140" ry="210" />
                <ellipse cx="280" cy="260" rx="210" ry="70" />
                <ellipse cx="280" cy="260" rx="210" ry="140" />
                <line x1="280" y1="50" x2="280" y2="470" />
                <line x1="70" y1="260" x2="490" y2="260" />
              </g>
              <circle cx="280" cy="260" r="210" className={styles.rim} />

              <g className={styles.routes}>
                <path d="M190 170 Q290 100 385 150" />
                <path d="M190 170 Q140 260 210 345" />
                <path d="M385 150 Q450 250 370 330" />
                <path d="M210 345 Q290 400 370 330" />
              </g>

              <path d="M370 330 Q450 340 505 425" className={styles.routeLost} />

              {[
                [190, 170],
                [385, 150],
                [210, 345],
                [370, 330],
              ].map(([x, y]) => (
                <g key={`${x}-${y}`} className={styles.node}>
                  <circle cx={x} cy={y} r="15" className={styles.halo} />
                  <circle cx={x} cy={y} r="6.5" />
                </g>
              ))}

              <circle cx="516" cy="446" r="16" className={styles.marker} />
              <text x="516" y="452" textAnchor="middle" className={styles.markerText}>
                ?
              </text>
              <text x="480" y="492" textAnchor="middle" className={styles.mapNote}>
                Destination not found
              </text>
            </svg>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 Sachkriya. All Rights Reserved.</span>
        <span>One centre. Many possibilities. Always moving.</span>
      </footer>
    </div>
  );
};

export default NotFound;