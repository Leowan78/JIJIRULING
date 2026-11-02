import ProductGallery from './product-gallery';
import styles from './product.module.css';

export const metadata = {
  title: 'Green Bead & Pixiu Bracelet — JIJI RULING',
  description: 'Explore a green and clear bead bracelet with a carved Pixiu-inspired charm, from the JIJI RULING Wood collection.',
  robots: { index: false, follow: false },
};

export default function WoodBraceletPage() {
  return <main className={styles.page} id="main-content">
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#featured">The collection</a><span>/</span><span aria-current="page">Wood</span></nav>
    <section className={styles.product} aria-labelledby="product-title">
      <ProductGallery />
      <div className={styles.info}>
        <p className={styles.eyebrow}>THE WOOD COLLECTION · 木</p>
        <h1 id="product-title">Green Bead &amp;<br /><em>Pixiu Bracelet</em></h1>
        <p className={styles.themes}>Growth <span>·</span> Renewal <span>·</span> Intention</p>
        <div className={styles.availability}><span>Coming soon</span><span>Price to be announced</span></div>
        <p className={styles.description}>Deep forest greens meet translucent beads and a softly carved centrepiece. A quiet statement, chosen for the meaning you bring to it.</p>
        <div className={styles.option}><span>Colour</span><span><i aria-hidden="true" /> Forest green</span></div>
        <div className={styles.option}><span>Size</span><span>Details coming soon</span></div>
        <button className={styles.purchase} type="button" disabled>Available soon</button>
        <p className={styles.purchaseNote}>This piece is not yet available to order.</p>
        <a className={styles.readingLink} href="/free-bazi">Discover your Five Elements <span aria-hidden="true">↗</span></a>
        <div className={styles.accordions}>
          <details open><summary>About this piece</summary><p>A palette of green and clear beads frames a pale green, Pixiu-inspired charm. The polished surfaces and contrasting tones give the piece its distinctive character.</p><p>Wear it as a personal expression of your connection to the Wood collection.</p></details>
          <details><summary>Product details &amp; sizing</summary><dl><div><dt>Collection</dt><dd>Wood</dd></div><div><dt>Style</dt><dd>Beaded bracelet with carved charm</dd></div><div><dt>Colour</dt><dd>Green and clear tones</dd></div></dl><p>Material composition, bead measurements and wrist sizes will be listed before this piece becomes available.</p></details>
          <details><summary>Care for your piece</summary><p>Keep your piece in a soft pouch when not in use. Handle gently and avoid contact with perfume or harsh cleaning products. Material-specific care instructions will accompany the final product details.</p></details>
          <details><summary>Shipping &amp; returns</summary><p>Delivery options, shipping charges and the applicable return policy will be available before orders open.</p></details>
        </div>
      </div>
    </section>
    <section className={styles.story} aria-labelledby="story-title">
      <div className={styles.storyHeading}><p className={styles.eyebrow}>A LITTLE MEANING, EVERY DAY</p><h2 id="story-title">Room to grow.<br /><em>A reason to begin.</em></h2><a href="/learn/five-elements">Explore the Five Elements <span aria-hidden="true">↗</span></a></div>
      <div className={styles.storyText}><p>In the Five Elements tradition, Wood is associated with growth and new beginnings. Here, that idea finds expression in a fresh green palette and a piece you can make your own.</p><p>Let it be a small reminder to approach each day with curiosity, to make space for change, and to return to what matters to you.</p><p className={styles.note}>The meaning is symbolic and personal; wearing this piece does not promise a particular outcome.</p></div>
    </section>
    <section className={styles.closing}><p className={styles.eyebrow}>YOUR NEXT CHAPTER</p><h2>Start with a little self-discovery.</h2><a href="/free-bazi">Begin your free reading <span aria-hidden="true">↗</span></a><a className={styles.back} href="/#featured">Back to the collection</a></section>
  </main>;
}
