import "./globals.css";
import HomepageEffects from "./homepage-effects";
import { SiteHeader, SiteFooter } from "./site-chrome";

export const metadata = {
  title: "JIJI RULING — Ancient Patterns, Modern Self-Awareness",
  description: "Personalized BaZi, Five Elements, and Zodiac insights for modern self-awareness.",
  icons: { icon: "/icon.svg" },
};

export const viewport = { themeColor: "#e8ddcc" };

export default function RootLayout({ children }) {
  return <html lang="en"><body><HomepageEffects /><SiteHeader />{children}<SiteFooter /></body></html>;
}
