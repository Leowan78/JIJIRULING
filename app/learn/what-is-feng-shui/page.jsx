import styles from '../what-is-bazi/article.module.css';
import learnStyles from '../learn.module.css';

export const metadata = { title: 'What Is Feng Shui? A Practical Introduction — JIJI RULING' };

export default function FengShuiGuide() {
  return <main id="main-content" className={styles.page}>
    <a className={styles.back} href="/learn#space">←︎ Back To Learning Guides</a>
    <header className={styles.header}>
      <p className={styles.meta}>FENG SHUI FOUNDATIONS · 5 MIN READ · BEGINNER</p>
      <h1>What Is Feng Shui?<br/><em>A Practical Introduction</em></h1>
      <p className={styles.intro}>Beginner-Friendly English For Western Learners</p>
      <p>Feng Shui (pronounced “fung shway”) is an ancient Chinese practice about arranging spaces to work with natural energy called Qi (chi).</p>
    </header>
    <div className={styles.layout}>
      <nav className={styles.contents} aria-label="In this guide">
        <span>IN THIS GUIDE</span>
        <a href="#qi">Understanding Qi</a>
        <a href="#rules">Core Simple Rules</a>
        <a href="#misunderstandings">Common Misunderstandings</a>
        <a href="#origins">Where Feng Shui Comes From</a>
      </nav>
      <article className={styles.body}>
        <section id="qi">
          <p className={styles.number}>01 / WIND AND WATER</p>
          <h2>Understanding Qi</h2>
          <p>Qi is the invisible life energy that flows through everything, like wind moving through trees or water flowing down a river.</p>
          <p>Feng Shui literally means <strong>Wind and Water</strong>. The old idea: good Qi moves gently with wind and gathers with water. When Qi flows well, people living or working there feel more balanced. If Qi is stuck or rushing too fast, people may feel stressed or drained.</p>
        </section>
        <section id="rules">
          <p className={styles.number}>02 / IDEAS IN PRACTICE</p>
          <h2>Core Simple Rules</h2>
          <h3>1. Qi Should Flow Smoothly</h3>
          <p>Qi should flow smoothly, not race or get trapped.</p>
          <aside className={styles.important}><h3>A Hallway Example</h3><p>A long straight hallway pointing directly at your front door. Qi rushes straight in and quickly shoots out. This can make people inside feel restless. A simple fix: add a small plant or decor to slow down the energy flow.</p></aside>
          <h3>2. Balance The Five Elements (Wu Xing)</h3>
          <p>Wood, Fire, Earth, Metal, Water are used in Feng Shui too. Each element matches colors, shapes and materials.</p>
          <aside className={styles.important}><h3>A Lighting Example</h3><p>A dark basement with no sunlight has heavy Water energy. You can add warm lighting, terracotta decor (Earth element) to bring more balance.</p></aside>
          <h3>3. Your Space Supports You</h3>
          <p>Your home and office shape how you feel, focus and rest.</p>
          <aside className={styles.important}><h3>A Bedroom Example</h3><p>Do not place your bed directly in line with the front door. In Feng Shui, your bed is your resting place. If the door points straight at it, Qi hits your bed directly. You may find it harder to relax and sleep deeply.</p></aside>
        </section>
        <section id="misunderstandings">
          <p className={styles.number}>03 / KEEPING PERSPECTIVE</p>
          <h2>Common Misunderstandings</h2>
          <div className={styles.comparison}>
            <div><h3>Comfort, Not Magic</h3><p>Feng Shui is not magic. It is originally about landscape planning, home layout and creating comfortable living environments.</p></div>
            <div><h3>No Instant Solutions</h3><p>It cannot make you instantly rich or solve all your problems. It adjusts your surrounding energy to help you feel better.</p></div>
          </div>
        </section>
        <section id="origins">
          <p className={styles.number}>04 / ROOTS OF THE PRACTICE</p>
          <h2>Where Feng Shui Comes From</h2>
          <p>Long ago, Chinese people used Feng Shui to pick good locations for villages, tombs and houses. They observed hills, rivers and wind direction. Later people used it for room arrangement, furniture placement and decor choices.</p>
        </section>
        <aside className={styles.important}><h2>Disclaimer</h2><p>Feng Shui is ancient Chinese traditional philosophy. It is not modern science. It is a way to design spaces for comfort and mindfulness, not absolute truth.</p></aside>
        <div className={styles.end}><a href="/learn#space">←︎ Continue Learning</a><a className={learnStyles.spaceCta} href="/feng-shui">Understand Your Space <span aria-hidden="true">↗︎</span></a></div>
      </article>
    </div>
  </main>;
}
