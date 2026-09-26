import ProductPoster from "./product-poster";
import Image from "next/image";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="hero-copy" data-reveal="">
          <p className="eyebrow"><span>01</span> The art of knowing yourself</p>
          <h1>Ancient Chinese Wisdom, Reimagined For Modern Life</h1>
          <p className="hero-lede">
            Discover your true personality, natural traits, and life patterns through
            traditional BaZi, Five Elements, and Zodiac philosophy.
          </p>
          <div className="hero-actions">
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
              <h2>Start With Your Birth Details</h2>
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
            <h2 id="services-title">Three Ways To Understand <em>What Shapes Your Life</em></h2>
          </div>
          <p>Begin with the lens closest to you now: your inner nature, your relationships, or the space around you.</p>
        </div>

        <div className="service-grid">
          <article className="service-card card-bazi" data-reveal="">
            <div className="card-topline"><span>01</span><span>Self knowledge</span></div>
            <h3 className="bazi-accessible-title">BaZi — Understand Yourself</h3>
            <ProductPoster href="/free-bazi" label="Explore Understand Yourself">
              <Image src="/understand-yourself.png" width={1024} height={1536} sizes="(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 30vw" alt="Ancient wisdom, modern life. Understand Yourself. Discover your true nature, strengths and life purpose through the wisdom of Chinese metaphysics. Personality insights; strengths and opportunities; life purpose guidance. Your journey inward." />
            </ProductPoster>
            <p className="product-price"><span>Personal report</span><strong>$29.99</strong></p>
            <a href="/free-bazi" aria-label="Explore BaZi">Start free <span aria-hidden="true">↗</span></a>
          </article>

          <article className="service-card card-compatibility" data-reveal="">
            <div className="card-topline"><span>02</span><span>Shared dynamics</span></div>
            <h3 className="bazi-accessible-title">Compatibility — Understand Your Relationships</h3>
            <ProductPoster href="/compatibility" label="Explore Understand Your Relationships">
              <Image src="/understand-relationships.png" width={1024} height={1536} sizes="(max-width: 900px) 90vw, 30vw" alt="Ancient wisdom, modern life. Understand Your Relationships. Gain clarity in love, family and friendships with personalized insights from Chinese wisdom. Love and compatibility; family harmony; friendship and communication. Better connections." />
            </ProductPoster>
            <p className="product-price"><span>Two-person report</span><strong>$39.99</strong></p>
            <a href="/compatibility" aria-label="Explore Compatibility">Explore <span aria-hidden="true">↗</span></a>
          </article>

          <article className="service-card card-fengshui" data-reveal="">
            <div className="card-topline"><span>03</span><span>Spatial harmony</span></div>
            <h3 className="bazi-accessible-title">Feng Shui — Understand Your Space</h3>
            <ProductPoster href="/feng-shui" label="Explore Understand Your Space">
              <Image src="/understand-space.png" width={1024} height={1536} sizes="(max-width: 900px) 90vw, 30vw" alt="Ancient wisdom, modern life. Understand Your Space. Create balance, harmony and positive energy in your home or office with expert feng shui guidance. Home energy optimization; health and well-being; prosperity and success. A harmonious environment." />
            </ProductPoster>
            <p className="product-price"><span>Space audit</span><strong>$49.99</strong></p>
            <a href="/feng-shui" aria-label="Explore Feng Shui">Explore <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="faq section-shell" id="faq" aria-labelledby="faq-title">
        <div className="faq-intro" data-reveal="">
          <p className="eyebrow"><span>03</span> Common questions</p>
          <h2 id="faq-title">A Clearer Way To <em>Begin</em></h2>
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
