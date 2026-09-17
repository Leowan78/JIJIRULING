"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { setupPage } from "./homepage-interactions.mjs";

export default function HomepageEffects() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => setupPage((url) => router.push(url)), [pathname, router]);
  return null;
}
