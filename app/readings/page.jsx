export const metadata = { title: "Readings — JIJI RULING" };

export default function ReadingsPage() {
  return (
    <main id="main-content">
      <section className="sample-report section-shell" id="sample-report" aria-labelledby="report-heading">
        <div className="report-intro" data-reveal="">
          <div>
            <p className="eyebrow"><span>01</span> Sample report</p>
            <h1 id="report-heading">Your Example Reading</h1>
            <p id="report-details">Example data · San Francisco, USA</p>
          </div>
          <p className="report-notice" id="report-notice" role="status">Demonstration only — no BaZi calculation has been performed.</p>
        </div>
        <div className="report-card" data-reveal="">
          <div className="report-profile">
            <p>Core archetype</p>
            <h3>The Visionary</h3>
            <span>Yin Wood · Example profile</span>
            <p className="profile-copy">You tend to grow through curiosity, adaptability, and a quiet determination to create meaningful progress.</p>
          </div>
          <div className="pillars" aria-label="Example Four Pillars">
            <div><span>Hour</span><strong>乙</strong><small>Wood</small></div>
            <div><span>Day</span><strong>甲</strong><small>Wood</small></div>
            <div><span>Month</span><strong>壬</strong><small>Water</small></div>
            <div><span>Year</span><strong>戊</strong><small>Earth</small></div>
          </div>
          <div className="element-balance">
            <div className="balance-heading"><h3>Example Balance</h3><span>Five Elements</span></div>
            <div className="balance-row"><span>Wood</span><i><b style={{ "--value": "78%" }}></b></i><em>78</em></div>
            <div className="balance-row"><span>Fire</span><i><b style={{ "--value": "56%" }}></b></i><em>56</em></div>
            <div className="balance-row"><span>Earth</span><i><b style={{ "--value": "42%" }}></b></i><em>42</em></div>
            <div className="balance-row"><span>Metal</span><i><b style={{ "--value": "34%" }}></b></i><em>34</em></div>
            <div className="balance-row"><span>Water</span><i><b style={{ "--value": "64%" }}></b></i><em>64</em></div>
          </div>
          <div className="report-insights">
            <article><span>01</span><h3>Natural Strength</h3><p>Patient growth and the ability to see possibility before others do.</p></article>
            <article><span>02</span><h3>Connection Style</h3><p>Warm, observant, and most open when trust develops at a natural pace.</p></article>
            <article><span>03</span><h3>Growth Edge</h3><p>Ground bright ideas in steady routines and clear personal boundaries.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
