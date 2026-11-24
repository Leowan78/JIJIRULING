'use client';

import { useState } from 'react';
import styles from '../wood-bracelet/product.module.css';

export default function PurchasePreview() {
  const [size, setSize] = useState('16 cm');
  const [finish, setFinish] = useState('Signature accents');
  const [quantity, setQuantity] = useState(1);
  const total = (68 * quantity).toFixed(2);
  return <section className={styles.purchasePreview} aria-label="Choose your bracelet">
    <p className={styles.previewNotice}>INTERACTIVE PREVIEW · Example price and options, not a live offer.</p>
    <div className={styles.price}><span>$68.00 <small>USD</small></span><small>Demo price</small></div>
    <fieldset><legend>Wrist size <span>— demo options</span></legend><div className={styles.choices}>{['15 cm', '16 cm', '17 cm', '18 cm'].map(value => <button key={value} type="button" aria-pressed={size === value} onClick={() => setSize(value)}>{value}</button>)}</div></fieldset>
    <details className={styles.sizeGuide}><summary>How to measure your wrist</summary><p>Wrap a soft tape around your wrist, just below the wrist bone. These options demonstrate the selector only; final bracelet measurements and fit guidance are pending.</p></details>
    <fieldset><legend>Style <span>— demo options</span></legend><div className={styles.choices}>{['Signature accents', 'Minimal beads'].map(value => <button key={value} type="button" aria-pressed={finish === value} onClick={() => setFinish(value)}>{value}</button>)}</div><p className={styles.helper}>Photography shows Signature accents. Minimal beads is a concept option only.</p></fieldset>
    <div className={styles.quantityRow}><span>Quantity</span><div className={styles.quantity}><button type="button" aria-label="Decrease quantity" disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>−</button><output aria-live="polite">{quantity}</output><button type="button" aria-label="Increase quantity" disabled={quantity === 5} onClick={() => setQuantity(quantity + 1)}>+</button></div></div>
    <a className={styles.checkoutLink} href={`/products/earth-bracelet/checkout?size=${encodeURIComponent(size)}&style=${encodeURIComponent(finish)}&quantity=${quantity}`}>Preview checkout <span>${total} →</span></a>
    <p className={styles.purchaseNote}>Demo only · No charge · No personal information required</p>
  </section>;
}
