"use client";

import { useEffect, useState } from "react";

export default function ProductPoster({ href, label, children }) {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return <div className="bazi-poster">{desktop
    ? <a className="product-image-link" href={href} aria-label={label}>{children}</a>
    : children}</div>;
}
