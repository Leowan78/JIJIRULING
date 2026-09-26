import Image from "next/image";
import ProductPoster from "./product-poster";
import styles from "./taste-preview/preview.module.css";

export default function HomePage() {
  return (
    <main id="main-content" className={styles.preview}>
      <section className={styles.hero} id="top" aria-labelledby="preview-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>The art of knowing yourself</p>
          <h1 id="preview-title"><span>Ancient Chinese Wisdom</span><span>Reimagined For Modern Life</span></h1>
          <p className={styles.intro}>Explore your nature, relationships, and surroundings through BaZi and the Five Elements of traditional Chinese philosophy.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="/free-bazi">Discover your BaZi <span aria-hidden="true">↗</span></a>
            <a className={styles.textLink} href="/philosophy">Our philosophy <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure className={styles.heroArt}>
          <Image src="/images/report/ceramic-emblem.webp" alt="A glazed ceramic plate representing Wood, Fire, Earth, Metal, and Water" width={804} height={782} sizes="(max-width: 760px) 90vw, 46vw" preload />
          <figcaption>Five elements. One individual balance.</figcaption>
        </figure>
      </section>

      <section className={styles.freeReading} id="free-reading" aria-labelledby="free-title">
        <div><h2 id="free-title">Your first insight starts here.</h2><p>A free birth chart with your Four Pillars, Day Master, and Five Elements.</p></div>
        <div className={styles.readingAction}><a className={styles.primary} href="/free-bazi">Open Free BaZi Calculator <span aria-hidden="true">↗</span></a><span>No account required · Ages 18+</span></div>
        <p className={styles.privacy}>Your birth details are processed on our server. Review the privacy consent before calculating.</p>
      </section>

      <section className="services section-shell" id="services" aria-labelledby="services-title">
        <div className="section-heading" data-reveal="">
          <div>
            <p className={styles.eyebrow}>Core offerings</p>
            <h2 id="services-title">Three Ways To Understand<br /><em>What Shapes Your Life</em></h2>
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

      <section className={styles.faq} id="faq" aria-labelledby="faq-title">
        <div><h2 id="faq-title">A clearer way<br />to begin.</h2><p>Simple answers before your personal reading.</p></div>
        <div className={styles.questions}>
          <details><summary>Is this fortune-telling?</summary><p>No. This is personality and life pattern analysis based on traditional Chinese philosophy, not future prediction.</p></details>
          <details><summary>How accurate is the reading?</summary><p>The result depends on your accurate birth information. It reflects your inherent personality traits and natural tendencies.</p></details>
          <details><summary>Is my personal data safe?</summary><p>The calculator processes birth details on our server. An optional AI explanation uses only a minimized chart. Read our <a href="/privacy">Privacy Policy</a> for details.</p></details>
        </div>
      </section>
    </main>
  );
}
