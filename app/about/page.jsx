import styles from "./about.module.css";
export const metadata = { title: "About — JIJI RULING" };

export default function AboutPage() {
  return (
    <main id="main-content" className={`privacy-page ${styles.about}`}>
      <article aria-labelledby="about-title">
        <h1 id="about-title">ABOUT JIJI RULING</h1>
        <p><strong>Free your mind from distractions</strong></p>
        <p>
          JIJI RULING originates from an ancient Chinese philosophical proverb with a history of thousands of years.
        </p>
        <p>
          Originally a classic ancient Chinese motto representing rapid positivity and inner alignment, the brand reinterprets this traditional essence with a modern lifestyle philosophy.
        </p>
        <p>
          Rooted in Eastern minimalism and gentle spirituality, JIJIRULING advocates a lifestyle of self-awareness, freedom, and inner serenity — letting everyone live purely, lightly, and confidently.
        </p>
      </article>
    </main>
  );
}
