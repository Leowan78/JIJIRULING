export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="hero-copy" data-reveal="">
          <p className="eyebrow"><span>01</span> The art of knowing yourself</p>
          <h1>Ancient Chinese Wisdom, Reimagined for Modern Life</h1>
          <p className="hero-lede">
            Discover your true personality, natural traits, and life patterns through
            traditional BaZi, Five Elements, and Zodiac philosophy.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#free-reading">
              Start Your Reading <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="/philosophy">Our philosophy <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-note">
            <span aria-hidden="true">○</span>
            Personalized analysis based on your birth information. No fluff, pure insight.
          </p>
        </div>

        <div className="hero-art reading-panel" id="free-reading" data-reveal="">
          <div className="reading-panel-head">
            <div>
              <p className="form-kicker">Free BaZi reading</p>
              <h2>Start with your birth details.</h2>
            </div>
            <div className="mini-orbit" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
          </div>
          <p>Discover your Four Pillars, Day Master, and Five Elements through a calculated birth chart.</p>
          <a className="button form-submit" href="/free-bazi">Open Free BaZi Calculator <span aria-hidden="true">↗</span></a>
          <p className="form-privacy">No account required · Ages 18+</p>
          <p className="form-prototype">Your birth details are processed on our server. Review the privacy consent before calculating.</p>
        </div>
      </section>

      <section className="services section-shell" id="services" aria-labelledby="services-title">
        <div className="section-heading" data-reveal="">
          <div>
            <p className="eyebrow"><span>02</span> Core offerings</p>
            <h2 id="services-title">Three ways to understand <em>what shapes your life.</em></h2>
          </div>
          <p>Begin with the lens closest to you now: your inner nature, your relationships, or the space around you.</p>
        </div>

        <div className="service-grid">
          <article className="service-card card-bazi" data-reveal="">
            <div className="card-topline"><span>01</span><span>Self knowledge</span></div>
            <div className="service-symbol" aria-hidden="true">
              <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="43"></circle><path d="M60 17v86M17 60h86M30 30l60 60M90 30 30 90"></path><circle cx="60" cy="60" r="8"></circle></svg>
            </div>
            <div className="card-copy">
              <p className="product-name">BaZi</p>
              <h3>Understand Yourself</h3>
              <p>Explore your natural temperament, core strengths, and recurring energy patterns through your personal birth chart.</p>
            </div>
            <p className="product-price"><span>Personal report</span><strong>$29–39</strong></p>
            <a href="#free-reading" aria-label="Explore BaZi">Start free <span aria-hidden="true">↗</span></a>
          </article>

          <article className="service-card card-compatibility" data-reveal="">
            <div className="card-topline"><span>02</span><span>Shared dynamics</span></div>
            <div className="service-symbol" aria-hidden="true">
              <svg viewBox="0 0 120 120"><circle cx="46" cy="60" r="32"></circle><circle cx="74" cy="60" r="32"></circle><path d="M60 32c11 7 18 17 18 28S71 81 60 88C49 81 42 71 42 60s7-21 18-28Z"></path></svg>
            </div>
            <div className="card-copy">
              <p className="product-name">Compatibility</p>
              <h3>Understand Your Relationships</h3>
              <p>See how two personal energy patterns connect, communicate, support one another, and create natural friction.</p>
            </div>
            <p className="product-price"><span>Two-person report</span><strong>$39–59</strong></p>
            <a href="#free-reading" aria-label="Explore Compatibility">Explore <span aria-hidden="true">↗</span></a>
          </article>

          <article className="service-card card-fengshui" data-reveal="">
            <div className="card-topline"><span>03</span><span>Spatial harmony</span></div>
            <div className="service-symbol" aria-hidden="true">
              <svg viewBox="0 0 120 120"><rect x="24" y="24" width="72" height="72" rx="4"></rect><circle cx="60" cy="60" r="23"></circle><path d="M60 24v13M60 83v13M24 60h13M83 60h13M44 44l9 9M67 67l9 9M76 44l-9 9M53 67l-9 9"></path><circle cx="60" cy="60" r="5"></circle></svg>
            </div>
            <div className="card-copy">
              <p className="product-name">Feng Shui</p>
              <h3>Understand Your Space</h3>
              <p>Discover how layout, direction, and elemental balance can shape the feeling and function of your everyday environment.</p>
            </div>
            <p className="product-price"><span>Space audit</span><strong>$49–99</strong></p>
            <a href="#free-reading" aria-label="Explore Feng Shui">Explore <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="faq section-shell" id="faq" aria-labelledby="faq-title">
        <div className="faq-intro" data-reveal="">
          <p className="eyebrow"><span>03</span> Common questions</p>
          <h2 id="faq-title">A clearer way to <em>begin.</em></h2>
          <p>Simple answers before you explore your personal reading.</p>
        </div>
        <div className="faq-list" data-reveal="">
          <details>
            <summary><span>Is this fortune-telling?</span><i aria-hidden="true"></i></summary>
            <p>No. This is personality and life pattern analysis based on traditional Chinese philosophy, not future prediction.</p>
          </details>
          <details>
            <summary><span>How accurate is the reading?</span><i aria-hidden="true"></i></summary>
            <p>The result depends on your accurate birth information. It reflects your inherent personality traits and natural tendencies.</p>
          </details>
          <details>
            <summary><span>Is my personal data safe?</span><i aria-hidden="true"></i></summary>
            <p>The calculator processes birth details on our server. An optional AI explanation uses only a minimized chart. Read our Privacy Policy for details.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
