'use client';
import { useState } from 'react';
import styles from '../../wood-bracelet/product.module.css';

export default function CheckoutPreview({ size, style, quantity }) {
  const [result, setResult] = useState('');
  const total = (68 * quantity).toFixed(2);
  return <main className={`${styles.page} ${styles.checkoutPage}`} id="main-content">
    <nav className={styles.breadcrumb}><a href="/products/earth-bracelet">← Back to bracelet</a><span>/ Checkout preview</span></nav>
    <p className={styles.previewNotice}>DEMO CHECKOUT · No order is created and no payment is processed.</p>
    <h1>A little intention,<br /><em>ready to go with you.</em></h1>
    <div className={styles.checkoutGrid}>
      <section className={styles.checkoutPanel}><h2>Delivery & payment</h2><p>This is a preview of the purchasing journey. Please do not enter personal or payment information.</p><div className={styles.demoBlock}><h3>01 / Delivery</h3><p>Example recipient · Sample address</p><small>Shipping destinations, rates and delivery times are pending confirmation.</small></div><div className={styles.demoBlock}><h3>02 / Payment</h3><p>Simulated payment</p><small>A real payment provider will be connected after approval. No card details are collected here.</small></div>
      <button className={styles.checkoutLink} onClick={() => setResult('success')}>Simulate successful payment <span>${total} →</span></button><button className={styles.textButton} onClick={() => setResult('declined')}>Try declined payment</button><button className={styles.textButton} onClick={() => setResult('cancelled')}>Cancel demo payment</button>
      <div role="status" aria-live="polite" className={result ? styles.result : undefined}>{result === 'success' && <><h2>Preview complete.</h2><p>Your simulated payment succeeded. No money was charged, no order was placed and nothing will be shipped.</p></>}{result === 'declined' && <><h2>Demo payment declined.</h2><p>Your selection is still here. You can retry the success simulation above.</p></>}{result === 'cancelled' && <><h2>Demo payment cancelled.</h2><p>No charge or order was created. Return to the bracelet or try again.</p></>}</div></section>
      <aside className={styles.checkoutPanel}><h2>Your selection</h2><img className={styles.orderImage} src="/images/products/earth-bracelet.webp" alt="Smoky & Black Bead Bracelet with silver-tone accents" width="1254" height="1254"/><h3>Smoky & Black Bead Bracelet</h3><p>{style} · {size} · Qty {quantity}</p><p className={styles.helper}>Reference photograph: Signature accents. All sizes, styles and prices are demonstration values.</p><dl className={styles.totals}><div><dt>Items</dt><dd>${total}</dd></div><div><dt>Shipping & tax</dt><dd>Not calculated in demo</dd></div><div><dt>Demo subtotal (USD)</dt><dd>${total}</dd></div></dl></aside>
    </div>
  </main>;
}
