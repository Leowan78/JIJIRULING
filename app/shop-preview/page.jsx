import styles from './shop-preview.module.css';

const collections = [
  ['Wear Your Elements', 'Bracelets & adornments', 'For the qualities you want to carry with you.', 'five-elements-bracelet.webp', 'Five Elements bracelet with green, red, yellow, white and blue stone beads'],
  ['Objects For Your Space', 'Home & Feng Shui objects', 'Thoughtful forms for rest, focus, and daily rituals.', 'home-objects.webp', 'Ivory lucky cat and pale green pixiu ornaments on a wooden console'],
  ['Gifts With Intention', 'Meaningful giving', 'A considered way to mark a new beginning or a shared moment.', 'meaningful-gifts.webp', 'Gold traditional lock necklace, charm and bead bracelet in a cream gift arrangement'],
];

const products = [
  ['Wood', 'Green stone & sandalwood bracelet', '$—', 'wood-bracelet.webp', 'Green and clear bead bracelet with a pale green carved charm'],
  ['Fire', 'Cinnabar-toned charm pendant', '$—', 'fire-bracelet.webp', 'Red, orange and pink bead bracelet with silver accents'],
  ['Earth', 'Ceramic grounding object', '$—', 'earth-bracelet.webp', 'Black and brown bead bracelet with silver accents on a light brown surface'],
];

export default function ShopPreview() {
  return <main className={styles.page} id="main-content">
    <section className={`${styles.hero} ${styles.braceletHero}`}>
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>ANCIENT WISDOM · EVERYDAY OBJECTS</p>
        <h1>Objects For Your<br/><em>Everyday Balance</em></h1>
        <p className={styles.lede}>Discover the Five Elements within your birth chart and surroundings. Begin with a complimentary reading, then explore thoughtfully chosen adornments and objects made to accompany your everyday life.</p>
        <div className={styles.actions}><a href="/free-bazi" className={styles.primary}>Begin Your Free Reading <span aria-hidden="true">↗︎</span></a><a href="#collection" className={styles.textLink}>Explore The Collection <span aria-hidden="true">↓︎</span></a></div>
      </div>
    </section>

    <section className={styles.introduction}>
      <p className={styles.kicker}>A MORE PERSONAL WAY TO CHOOSE</p>
      <h2>Your Reading, Translated<br/>Into Everyday Objects</h2>
      <p>Traditional Chinese wisdom can offer a fresh perspective on your natural rhythm. We use it as a starting point for choosing pieces that feel meaningful, useful, and true to your own taste.</p>
    </section>

    <section className={styles.statement}>
      <img className={styles.necklaceImage} src="/images/cafe-bracelets/stacked.webp" alt="Woman wearing blue-green and red bead bracelets while holding coffee at a European sidewalk cafe" width="1254" height="1254" loading="lazy" />
      <div><p className={styles.kicker}>COMPLIMENTARY GUIDANCE</p><h2>Wear What Supports<br/><em>Your Nature</em></h2><p>Every reading remains free. If you wish, it can lead you to a small selection of pieces connected to the elemental themes in your chart or your space.</p><a className={styles.textLink} href="/free-bazi">Discover Your Elements <span aria-hidden="true">↗︎</span></a></div>
    </section>

    <section className={styles.collections} id="collection">
      <div className={styles.collectionTitle}><p className={styles.kicker}>SHOP BY INTENTION</p><h2>Objects That Meet You<br/>Where You Are</h2></div>
      <div className={styles.collectionGrid}>{collections.map(([title, label, copy, image, alt]) => <article key={title}><img className={styles.collectionPhoto} src={`/images/collections/${image}`} alt={alt} width="1254" height="1254" loading="lazy" /><p className={styles.kicker}>{label}</p><h3>{title}</h3><p>{copy}</p><a href="#featured">Explore <span aria-hidden="true">↗︎</span></a></article>)}</div>
    </section>

    <section className={styles.featured} id="featured">
      <div className={styles.featuredHead}><p className={styles.kicker}>A FIRST COLLECTION</p><h2>Made To Accompany<br/>Your Everyday Life</h2><p>Image and product details will be added here when your collection is ready.</p></div>
      <div className={styles.productGrid}>{products.map(([element, title, price, image, alt]) => <article key={element}><img className={styles.productPhoto} src={`/images/products/${image}`} alt={alt} width="1254" height="1254" loading="lazy" /><p className={styles.element}>{element}</p><h3>{title}</h3><span>{price}</span></article>)}</div>
    </section>

    <section className={styles.closing}><p className={styles.kicker}>BEGIN WITH YOURSELF</p><h2>A Reading Is A Beginning.<br/><em>The Rest Is Yours.</em></h2><a className={styles.primary} href="/free-bazi">Begin Your Free Reading <span aria-hidden="true">↗︎</span></a></section>
  </main>;
}
