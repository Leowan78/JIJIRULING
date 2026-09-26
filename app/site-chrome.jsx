export function SiteHeader() {
  return (<>
      <a className="skip-link" href="#main-content">Skip to content</a>

    <div className="announcement">
      <p>Ancient Patterns, Modern Self-Awareness</p>
      <span aria-hidden="true">✦</span>
      <p>Reconnect With Your Natural Energy</p>
    </div>

    <header className="site-header">
      <a className="brand" href="/" aria-label="JIJI RULING home">
        <img className="brand-ceramic" src="/brand-ceramic.webp" alt="" width="384" height="384" />
        <img className="brand-wordmark" src="/brand-wordmark-transparent.png" alt="JIJI RULING" width="2170" height="725" />
      </a>

      <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
        <span>Menu</span><i aria-hidden="true"></i>
      </button>

      <nav id="primary-navigation" aria-label="Primary navigation">
        <details className="shop-menu">
          <summary>Shop</summary>
          <ul aria-label="Shop products">
            <li><a href="/free-bazi">BaZi Readings</a></li>
            <li><a href="/compatibility">Compatibility</a></li>
            <li><a href="/feng-shui">Feng Shui</a></li>
          </ul>
        </details>
        <a href="/learn">Learn</a>
        <a href="/philosophy">Philosophy</a>
        <a href="/about">About</a>
        <a href="/#faq">FAQ</a>
      </nav>

      <a className="header-cta" href="/free-bazi">Begin <span aria-hidden="true">↗</span></a>
    </header>

  </>);
}

export function SiteFooter() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <a className="brand footer-brand" href="/" aria-label="JIJI RULING home"><img className="brand-wordmark" src="/brand-wordmark-transparent.png" alt="JIJI RULING" width="2170" height="725" /><img className="footer-seal-layer" src="/brand-wordmark-transparent.png" alt="" aria-hidden="true" width="2170" height="725" /></a>
        <p>Ancient Patterns,<br />Modern Self-Awareness.</p>
        <nav aria-label="Footer navigation">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/readings">Readings</a>
          <a href="/philosophy">Philosophy</a>
          <a href="/#faq">FAQ</a>
        </nav>
      </div>
      <div className="disclaimer">
        <p className="disclaimer-label">Official Disclaimer</p>
        <p>
          This website provides educational and self-reflective content based on traditional Chinese cultural philosophy.
          All analysis and reports are for entertainment and personal growth reference only.
          We do not predict future events, fortune, finance, or medical outcomes.
          All readings are philosophical interpretations, not scientific or professional advice.
        </p>
      </div>
      <div className="footer-bottom">
        <span>© 2026 JIJI RULING</span>
        <span>For reflection, not prediction.</span>
      </div>
    </footer>
  );
}
