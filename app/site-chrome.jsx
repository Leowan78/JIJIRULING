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
        <svg aria-hidden="true" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15"></circle>
          <circle cx="18" cy="5" r="2.5"></circle>
          <circle cx="30.4" cy="14" r="2.5"></circle>
          <circle cx="25.7" cy="28.5" r="2.5"></circle>
          <circle cx="10.3" cy="28.5" r="2.5"></circle>
          <circle cx="5.6" cy="14" r="2.5"></circle>
        </svg>
        <span>JIJI RULING</span>
      </a>

      <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
        <span>Menu</span><i aria-hidden="true"></i>
      </button>

      <nav id="primary-navigation" aria-label="Primary navigation">
        <a href="/readings">Readings</a>
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
        <a className="brand footer-brand" href="/" aria-label="JIJI RULING home">JIJI RULING</a>
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
