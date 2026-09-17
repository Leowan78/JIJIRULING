export const metadata = { title: "Philosophy — JIJI RULING" };

export default function PhilosophyPage() {
  return (
    <main id="main-content">
      <section className="introduction section-shell" aria-labelledby="intro-title">
        <div className="section-index" data-reveal="">
          <span>01</span>
          <p>Our approach</p>
        </div>
        <div className="intro-copy" data-reveal="">
          <h1 id="intro-title">Understand Yourself Through <em>Timeless Eastern Philosophy</em></h1>
          <div className="copy-columns">
            <p>
              For thousands of years, Chinese ancient wisdom has decoded human personalities,
              natural tendencies, and personal energy patterns.
            </p>
            <div>
              <p>
                We modernize this traditional knowledge into clear, gentle, and actionable
                self-awareness analysis.
              </p>
              <p>
                Our readings help you understand your strengths, weaknesses, natural temperament,
                and life rhythm — so you can make decisions that align with your authentic self.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy" id="philosophy" aria-labelledby="philosophy-title">
        <div className="philosophy-orbit" aria-hidden="true">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <span>SELF</span>
        </div>
        <div className="philosophy-copy" data-reveal="">
          <p className="eyebrow"><span>02</span> Our philosophy</p>
          <h2 id="philosophy-title">Wisdom for Self-Growth, <em>Not Prediction</em></h2>
          <p className="mission">Our mission is simple:<br />To bring ancient Chinese philosophical wisdom into modern self-development.</p>
          <p>
            We do not predict fortune or future events. Instead, we focus on personality analysis,
            energy pattern interpretation, and self-understanding.
          </p>
          <p>Every reading is designed for self-reflection, personal growth, and deeper self-awareness.</p>
          <a className="text-link light-link" href="#difference">How we work <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="difference section-shell" id="difference" aria-labelledby="difference-title">
        <div className="section-heading" data-reveal="">
          <div>
            <p className="eyebrow"><span>03</span> Why JIJI RULING</p>
            <h2 id="difference-title">Why Our Readings <em>Are Different</em></h2>
          </div>
          <p>Ancient frameworks deserve a modern standard: thoughtful interpretation, responsible language, and clarity you can use.</p>
        </div>

        <ol className="value-list">
          <li data-reveal="">
            <span className="value-number">01</span>
            <h3>Rooted in Traditional Philosophy</h3>
            <p>All systems are based on authentic ancient Chinese Five Elements and BaZi theories.</p>
            <span className="value-mark" aria-hidden="true">木</span>
          </li>
          <li data-reveal="">
            <span className="value-number">02</span>
            <h3>Modern &amp; Easy to Understand</h3>
            <p>We translate complex ancient knowledge into simple, clear, modern language.</p>
            <span className="value-mark" aria-hidden="true">火</span>
          </li>
          <li data-reveal="">
            <span className="value-number">03</span>
            <h3>Personalized &amp; Unique</h3>
            <p>Every report is generated based on individual birth data, never generic templates.</p>
            <span className="value-mark" aria-hidden="true">土</span>
          </li>
          <li data-reveal="">
            <span className="value-number">04</span>
            <h3>Focus on Growth &amp; Self-Awareness</h3>
            <p>Safe, positive, and supportive content for personal development.</p>
            <span className="value-mark" aria-hidden="true">水</span>
          </li>
        </ol>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div data-reveal="">
          <p className="eyebrow"><span>04</span> Your nature, made clearer</p>
          <h2 id="closing-title">Wisdom to Know <em>Yourself Better</em></h2>
          <a className="button button-light" href="/#free-reading">Start Your Reading <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
