import styles from './report.module.css';
import { reflectionContent } from './report-content.mjs';

const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
export default function Report({ result, details, onEdit }) {
  const { chart, explanation } = result;
  const reading = reflectionContent(explanation);
  const total = elements.reduce((sum, element) => sum + chart.elements[element], 0);
  return <article className={styles.report} aria-label="Your free BaZi report">
    <header>
      <p className="eyebrow">01 · Your chart overview</p>
      <h2>{details.name?.trim() ? `${details.name.trim()}’s BaZi report` : 'Your BaZi report'}</h2>
      <p>A starting point for self-understanding, grounded in your calculated Four Pillars.</p>
      <span className={styles.badge}>{chart.complete ? 'Four pillars available' : 'Partial chart · uncertain pillars omitted'}</span>
      <dl className={styles.details}>
        <div><dt>Gregorian birth date</dt><dd>{details.birthDate}</dd></div>
        <div><dt>Local birth time</dt><dd>{details.unknown ? 'Unknown · hour pillar omitted' : details.birthTime}</dd></div>
        <div><dt>Selected birth city</dt><dd>{details.city}</dd></div>
      </dl>
      <button className={styles.edit} type="button" onClick={onEdit}>Edit birth details</button>
      {chart.warnings.length > 0 && <aside className={styles.notice} aria-label="Calculation limitations"><strong>Before you read</strong><ul>{chart.warnings.map((warning, i) => <li key={i}>{warning}</li>)}</ul></aside>}
    </header>
    <section className={styles.section}>
      <p className="eyebrow">02 · Four Pillars &amp; Day Master</p>
      <h3>Your calculated foundation</h3>
      <p>Each pillar pairs a Heavenly Stem with an Earthly Branch. A dash means the pillar is unknown or uncertain.</p>
      <div className={styles.pillars}>{chart.pillars.map(p => <div key={p.key}><h4>{p.label}</h4><strong>{p.stem ?? '—'}{p.branch ?? '—'}</strong><p>{p.stem ? `${p.stemElement} · ${p.branchElement}` : 'Omitted'}</p></div>)}</div>
      <div className={styles.master}><span aria-hidden="true">{chart.dayMaster.stem}</span><div><h4>Your Day Master</h4><p>{chart.dayMaster.stem} · {chart.dayMaster.polarity} {chart.dayMaster.element}</p><small>The Heavenly Stem of your Day Pillar: the central reference point in a traditional BaZi reading, not a fixed personality label.</small></div></div>
    </section>
    <section className={styles.section}>
      <p className="eyebrow">03 · Five Elements</p><h3>The elements in your available pillars</h3>
      <div className={styles.elements}>{elements.map(element => <div key={element}><span>{element}</span><div className={styles.track} aria-hidden="true"><i style={{width: `${total ? chart.elements[element] / total * 100 : 0}%`}} /></div><strong>{chart.elements[element]}</strong></div>)}</div>
      <p className={styles.note}>These {total} counts include one main stem element and one main branch element per available pillar. They are not weighted strength scores; zero does not mean an element is absent from every layer of the chart. No hidden stems or seasonal weighting are included.</p>
    </section>
    <section className={styles.section}>
      <p className="eyebrow">04 · Self-understanding</p><h3>A perspective to consider</h3>
      {reading.personalized ? <><p>{reading.summary}</p><p className={styles.note}>AI-assisted interpretation can contain errors. Compare it with your own experience.</p></> : <p className={styles.notice}>{reading.notice} No personal traits have been inferred in its place.</p>}
    </section>
    <section className={styles.section}>
      <p className="eyebrow">05 · Strengths to explore</p><h3>Possibilities, not fixed labels</h3>
      {reading.personalized ? <ul>{reading.strengths.map((strength, i) => <li key={i}>{strength}</li>)}</ul> : <p>Personalized strengths will appear here when AI interpretation is available. Your element counts alone are not a personality assessment.</p>}
    </section>
    <section className={`${styles.section} ${styles.reflection}`}>
      <p className="eyebrow">06 · A Moment for Reflection</p><h3>Make room for your own experience</h3>
      <p>{reading.personalized ? 'Use these questions to consider what fits your lived experience and what does not.' : 'These are general reflection prompts for everyone, not conclusions drawn from your chart.'}</p>
      <ol>{reading.questions.map((question, i) => <li key={i}>{question}</li>)}</ol>
      <p className={styles.note}>No answers are requested or collected. Your experience matters more than any description in this report.</p>
    </section>
    <section className={styles.section}>
      <p className="eyebrow">07 · About This Reading</p><h3>Context and limitations</h3>
      <ul><li>The chart is calculated by a deterministic program. AI, when enabled, explains the supplied chart and does not calculate its pillars.</li><li>BaZi is a traditional cultural framework, not a scientifically validated prediction or medical, legal, financial, or other professional advice.</li><li>This free report does not include luck cycles, future predictions or guaranteed outcomes.</li></ul>
      {details.unknown && <p className={styles.notice}><strong>Birth time unknown.</strong> The hour pillar is omitted. Any year or month pillar that cannot be resolved across the possible birth-day interval is also omitted.</p>}
      <details className={styles.rules}><summary>View calculation details</summary><ul><li>Gregorian dates and historical local civil time, including recorded daylight-saving changes; no true solar-time correction.</li><li>The day changes at local midnight. Year and month boundaries follow solar terms, with a two-minute uncertainty guard.</li><li>Ambiguous or nonexistent local times require correction or the unknown-time option. Historical timezone records may be incomplete.</li><li>Rule version: {chart.rulesVersion}.</li></ul></details>
      <p className={styles.note}>Your optional name stays in the browser. Birth details are processed to calculate this chart; the application does not persist submissions or reports. See the <a href="/privacy">Privacy Policy</a> for provider processing details. Refreshing or leaving clears this report.</p>
    </section>
    <footer className={styles.next}><p className="eyebrow">Continue Your Exploration</p><h3>See what a personal report can include</h3><p>Explore the format and depth of our sample report, at your own pace.</p><a className="button" href="/readings">View a Sample Report <span aria-hidden="true">↗</span></a></footer>
  </article>;
}
