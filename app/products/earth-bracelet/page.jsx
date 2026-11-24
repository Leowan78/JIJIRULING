import ProductGallery from './product-gallery';
import PurchasePreview from './purchase-preview';
import styles from '../wood-bracelet/product.module.css';

export const metadata = {
  title: 'Smoky & Black Bead Bracelet — JIJI RULING',
  description: 'Explore a black, brown and translucent bead bracelet with silver-tone accents, from the JIJI RULING Earth collection.',
  robots: { index: false, follow: false },
};

export default function WoodBraceletPage() {
  return <main className={styles.page} id="main-content">
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#featured">The collection</a><span>/</span><span aria-current="page">Earth</span></nav>
    <section className={styles.product} aria-labelledby="product-title">
      <ProductGallery />
      <div className={styles.info}>
        <p className={styles.eyebrow}>THE EARTH COLLECTION · 土</p>
        <h1 id="product-title">Smoky &amp; Black<br /><em>Bracelet</em></h1>
        <p className={styles.themes}>Steadiness · Connection · Intention</p>
        <p className={styles.description}>Polished black, brown and translucent beads meet delicate silver-tone accents. A personal statement, chosen for the meaning you bring to it.</p>
        <PurchasePreview />
        <a className={styles.readingLink} href="/free-bazi">Discover your Five Elements <span aria-hidden="true">↗</span></a>
        <div className={styles.accordions}>
          <details open><summary>About this piece</summary><p>A palette of black, brown and translucent beads is punctuated by silver-tone accents. The polished surfaces and contrasting tones give the piece its distinctive character.</p><p>Wear it as a personal expression of your connection to the Earth collection.</p></details>
          <details><summary>Product details &amp; sizing</summary><dl><div><dt>Collection</dt><dd>Earth</dd></div><div><dt>Style</dt><dd>Beaded bracelet with silver-tone accents</dd></div><div><dt>Colour</dt><dd>Smoky brown and black tones</dd></div></dl><p>Material composition, bead measurements and wrist sizes will be listed before this piece becomes available.</p></details>
          <details><summary>Care for your piece</summary><p>Keep your piece in a soft pouch when not in use. Handle gently and avoid contact with perfume or harsh cleaning products. Material-specific care instructions will accompany the final product details.</p></details>
          <details><summary>Shipping &amp; returns</summary><p>Delivery options, shipping charges and the applicable return policy will be available before orders open.</p></details>
        </div>
      </div>
    </section>
    <figure className={styles.scene}><img src="/images/products/earth-bracelet-scene.png" width="1254" height="1254" alt="Lifestyle concept of the black, brown and translucent bracelet in a lifestyle setting" loading="lazy"/><figcaption>A quiet moment, made yours. · AI-generated lifestyle concept; refer to the main photograph for product details.</figcaption></figure>
    <section className={styles.story} aria-labelledby="story-title">
      <div className={styles.storyHeading}><p className={styles.eyebrow}>A LITTLE MEANING, EVERY DAY</p><h2 id="story-title">Find your centre.<br /><em>A moment of calm.</em></h2><a href="/learn/five-elements">Explore the Five Elements <span aria-hidden="true">↗</span></a></div>
      <div className={styles.storyText}><p>In the Five Elements tradition, Earth is associated with steadiness and connection. Here, that idea finds expression in a grounded, earthy palette and a piece you can make your own.</p><p>Let it be a small reminder to approach each day with curiosity, to make space for change, and to return to what matters to you.</p><p className={styles.note}>The meaning is symbolic and personal; wearing this piece does not promise a particular outcome.</p></div>
    </section>
    <section className={styles.closing}><p className={styles.eyebrow}>YOUR NEXT CHAPTER</p><h2>Start with a little self-discovery.</h2><a href="/free-bazi">Begin your free reading <span aria-hidden="true">↗</span></a><a className={styles.back} href="/#featured">Back to the collection</a></section>
  </main>;
}
