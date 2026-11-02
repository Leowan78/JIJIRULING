'use client';

import { useRef, useState } from 'react';
import styles from './product.module.css';

const photo = '/images/products/wood-bracelet.webp';
const description = 'Green and clear bead bracelet with a pale green carved Pixiu-inspired charm';

export default function ProductGallery() {
  const [detail, setDetail] = useState(false);
  const dialog = useRef(null);
  return <div className={styles.gallery}>
    <button className={`${styles.mainImage} ${detail ? styles.detailView : ''}`} type="button" onClick={() => dialog.current.showModal()} aria-label="Enlarge bracelet image">
      <img src={photo} alt={description} width="1254" height="1254" fetchPriority="high" />
      <span className={styles.imageLabel}>WOOD / 01</span><span className={styles.zoomLabel}>View larger <span aria-hidden="true">＋</span></span>
    </button>
    <div className={styles.galleryFooter}>
      <div className={styles.thumbnails} aria-label="Product image views">
        <button type="button" aria-label="Full bracelet view" aria-pressed={!detail} onClick={() => setDetail(false)}><img src={photo} alt="" width="64" height="64" /></button>
        <button className={styles.detailThumb} type="button" aria-label="Charm detail crop" aria-pressed={detail} onClick={() => setDetail(true)}><img src={photo} alt="" width="64" height="64" /></button>
      </div>
      <p>{detail ? 'Charm detail · cropped from main image' : 'Full bracelet view'}<br /><span>Click the image to explore the details</span></p>
    </div>
    <dialog ref={dialog} className={styles.lightbox} aria-label="Enlarged bracelet photograph" onClick={event => { if (event.target === event.currentTarget) dialog.current.close(); }}>
      <form method="dialog"><button aria-label="Close enlarged image" autoFocus>Close ×</button></form>
      <img src={photo} alt={description} width="1254" height="1254" />
    </dialog>
  </div>;
}
