import styles from '../what-is-bazi/article.module.css';
import learnStyles from '../learn.module.css';

export const metadata = { title: 'How To Observe Feng Shui In A Room — JIJI RULING' };

const sections = [
  ['flow', 'Feel The Qi Flow'],
  ['paths', 'Check Clutter And Blocked Paths'],
  ['position', 'Find The Commanding Position'],
  ['corners', 'Watch For Sharp Corners'],
  ['light', 'Check Light, Mirrors And Broken Items'],
  ['balance', 'Balance The Five Elements'],
];

export default function RoomFlowGuide() {
  return <main id="main-content" className={styles.page}>
    <a className={styles.back} href="/learn#space">←︎ Back To Learning Guides</a>
    <header className={styles.header}>
      <p className={styles.meta}>ROOM FLOW · 4 MIN READ · BEGINNER</p>
      <h1>How To Observe Feng Shui<br/><em>In A Room</em></h1>
      <p className={styles.intro}>Beginner-Friendly English For Western Learners</p>
      <p>Feng Shui is about checking how Qi (life energy) moves inside a room. You can start your observation simply by walking into the room and using your eyes and feelings. You do not need special tools or a compass for this basic check.</p>
    </header>
    <div className={styles.layout}>
      <nav className={styles.contents} aria-label="In this guide">
        <span>IN THIS GUIDE</span>
        {sections.map(([id, title]) => <a key={id} href={`#${id}`}>{title}</a>)}
        <a href="#checklist">Your Quick Checklist</a>
      </nav>
      <article className={styles.body}>
        <section id="flow">
          <p className={styles.number}>STEP 01 / FIRST IMPRESSIONS</p>
          <h2>Feel The Qi Flow</h2>
          <p>Qi should curve and circulate gently. It should not rush straight in, get trapped, or leak out quickly.</p>
          <div className={styles.comparison}>
            <div><h3>Good Sign</h3><p>When you enter, the room feels calm, open, and easy to move around.</p></div>
            <div><h3>Bad Sign</h3><p>You feel tense, cramped, or distracted.</p></div>
          </div>
          <aside className={styles.important}><h3>A Door And Window Example</h3><p>If the room door opens directly facing a big window. Qi enters and immediately flows straight out. It is hard for energy to stay and nourish you. A simple fix: place a tall plant or curtain to slow the straight energy path.</p></aside>
        </section>
        <section id="paths">
          <p className={styles.number}>STEP 02 / MAKE ROOM TO MOVE</p>
          <h2>Check Clutter And Blocked Paths</h2>
          <p>Clutter traps stale Qi. Walk the main path from the door to the area where you spend most time (bed, sofa, desk).</p>
          <div className={styles.comparison}>
            <div><h3>Good Sign</h3><p>The walkway is wide and clear. Doors can open fully.</p></div>
            <div><h3>Bad Sign</h3><p>Piles of boxes, shoes, or messy stacks block your way.</p></div>
          </div>
          <aside className={styles.important}><h3>A Bedroom Example</h3><p>If your bedroom door cannot open all the way because of piled laundry. Fresh Qi cannot easily come into the room, and stale energy builds up. Clear the space behind the door.</p></aside>
        </section>
        <section id="position">
          <p className={styles.number}>STEP 03 / A SENSE OF SUPPORT</p>
          <h2>Find The Commanding Position</h2>
          <p>This is the most important furniture placement rule. For your bed, desk, or sofa:</p>
          <div className={styles.comparison}>
            <div><h3>Look For</h3><p>You can see the door from this spot.</p><p>Your back rests against a solid wall (like having a mountain behind you, giving support).</p></div>
            <div><h3>Avoid</h3><p>Do NOT sit or sleep with your back facing the door.</p></div>
          </div>
          <aside className={styles.important}><h3>A Home Office Example</h3><p>Imagine your home office. If your desk sits with your back to the door, you cannot see people entering. You may feel nervous and easily interrupted. Move the desk diagonally, so you can see the door while a solid wall stays behind you.</p></aside>
        </section>
        <section id="corners">
          <p className={styles.number}>STEP 04 / SOFTEN THE EDGES</p>
          <h2>Watch For Sharp “Poison Arrow” Energy (Sha Qi)</h2>
          <p>Sharp corners from shelves, cabinets, or walls pointing directly at where you sit or sleep create sharp, uncomfortable energy.</p>
          <aside className={styles.important}><h3>A Bookshelf Example</h3><p>A sharp corner of a bookshelf points straight toward your pillow. This creates subtle pressure. You can soften it by placing a round plant or cloth over the sharp edge.</p></aside>
        </section>
        <section id="light">
          <p className={styles.number}>STEP 05 / EVERYDAY DETAILS</p>
          <h2>Check Light, Mirrors And Broken Items</h2>
          <p><strong>Light:</strong> Natural soft light is good. A dark room has weak Qi. Add warm lamps.</p>
          <p><strong>Mirrors:</strong> Mirrors bounce energy. A mirror directly facing your bed can disturb sleep.</p>
          <p><strong>Repair And Refresh:</strong> Broken, cracked or dead plants hold stale energy. Repair or remove them.</p>
        </section>
        <section id="balance">
          <p className={styles.number}>STEP 06 / THE BIGGER PICTURE</p>
          <h2>Balance The Five Elements</h2>
          <p>Look around and see what energy dominates the room. Aim for gentle balance, not all one type.</p>
          <aside className={styles.important}><h3>A Basement Example</h3><p>A basement room is dark and cold, heavy Water energy. Add warm earth-colored decor and wooden furniture (Earth and Wood) to balance it.</p></aside>
        </section>
        <section id="checklist">
          <p className={styles.number}>A MOMENT TO REFLECT</p>
          <h2>Simple Quick Checklist For Any Room</h2>
          <ol>
            <li><p>Can I walk from the door to my main seat without obstacles?</p></li>
            <li><p>Can I see the door from my bed or desk?</p></li>
            <li><p>Are there sharp corners pointing at me?</p></li>
            <li><p>Is there clutter, broken things or dead plants?</p></li>
            <li><p>Does light feel balanced — not too dark, not harsh?</p></li>
          </ol>
        </section>
        <aside className={styles.important}><h2>Important Note</h2><p>Feng Shui is ancient Chinese philosophy, not modern science. It focuses on designing spaces that make you feel safer, calmer and more focused. It cannot magically bring wealth or fix all your problems. Good Feng Shui supports you, but your choices still matter most.</p></aside>
        <div className={styles.end}><a href="/learn#space">←︎ Continue Learning</a><a className={learnStyles.spaceCta} href="/feng-shui">Understand Your Space <span aria-hidden="true">↗︎</span></a></div>
      </article>
    </div>
  </main>;
}
