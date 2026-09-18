"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./calculator.module.css";
import BirthPicker from "./birth-picker";
import Report from "./report";

const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
const text = (value) => typeof value === "string" && value.length <= 3000;
const texts = (value) => Array.isArray(value) && value.length <= 20 && value.every(text);
function validResult(value) {
  const c = value?.chart, e = value?.explanation;
  return c && text(c.rulesVersion) && typeof c.complete === "boolean" && texts(c.warnings)
    && text(c.timeZone) && c.timeZone.length > 0 && Array.isArray(c.utcOffsets) && c.utcOffsets.length >= 1 && c.utcOffsets.length <= 2
    && c.utcOffsets.every(offset => typeof offset === "string" && /^[+-]\d{2}:\d{2}(?::\d{2})?$/.test(offset))
    && text(c.dayMaster?.stem) && text(c.dayMaster?.element) && text(c.dayMaster?.polarity)
    && elements.every((key) => Number.isInteger(c.elements?.[key]) && c.elements[key] >= 0 && c.elements[key] <= 8)
    && Array.isArray(c.pillars) && c.pillars.length === 4
    && c.pillars.every((p, i) => p.key === ["year", "month", "day", "hour"][i] && text(p.label)
      && [p.stem, p.branch, p.stemElement, p.branchElement].every((v) => v === null || text(v)))
    && ["available", "unavailable", "disabled"].includes(e?.status)
    && (e.status !== "available" || (text(e.summary) && texts(e.strengths) && texts(e.reflections)));
}
const errors = {
  INVALID_INPUT: "Check your birth details and consent, then try again.",
  INVALID_PLACE: "Please search again and select a city from the results.",
  RATE_LIMITED: "Too many requests. Please wait a moment before trying again.",
  UNSUPPORTED_DATE: "This date is outside the supported range.",
  LOCAL_TIME: "This local time is ambiguous or does not exist because of a clock change. Check the time or choose unknown birth time for a partial chart.",
};
async function post(url, body, signal) {
  const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal, cache: "no-store" });
  const data = await response.json();
  if (!response.ok) throw new Error(errors[data?.error?.code] || "The service is unavailable. Please try again later.");
  return data;
}

export default function Calculator({ embedded = false }) {
  const [name, setName] = useState("");
  const [picker, setPicker] = useState(null);
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [unknown, setUnknown] = useState(false);
  const [query, setQuery] = useState("");
  const [place, setPlace] = useState(null);
  const [places, setPlaces] = useState([]);
  const [consent, setConsent] = useState(false);
  const [searchStatus, setSearchStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const searchRequest = useRef(null), chartRequest = useRef(null);
  const reportFocus = useRef(null), formFocus = useRef(null);
  useEffect(() => { if (result) { reportFocus.current?.focus(); reportFocus.current?.scrollIntoView({ behavior: "auto", block: "start" }); } }, [result]);
  useEffect(() => () => { searchRequest.current?.abort(); chartRequest.current?.abort(); }, []);
  function edit() {
    searchRequest.current?.abort(); chartRequest.current?.abort();
    setPlaces([]); setSearchStatus(""); setLoading(false); setResult(null); setError("");
  }
  async function search() {
    edit(); setPlace(null);
    const value = query.trim();
    if (value.length < 2 || value.length > 80) { setSearchStatus("Enter 2–80 characters to search for a city."); return; }
    const request = new AbortController(); searchRequest.current = request;
    setSearchStatus("Searching cities…");
    try {
      const data = await post("/api/places", { query: value }, request.signal);
      if (request.signal.aborted) return;
      if (!Array.isArray(data?.places) || data.places.length > 30 || !data.places.every((p) => text(p.id) && text(p.label))) throw new Error();
      setPlaces(data.places); setSearchStatus(data.places.length ? "Choose your city below." : "No cities found. Try a nearby city or include the country.");
    } catch (err) { if (!request.signal.aborted) setSearchStatus(errors[err?.code] || "City search is unavailable. Please try again."); }
  }
  async function calculate(event) {
    event.preventDefault(); edit();
    const date = new Date(`${birthDate}T00:00:00Z`);
    const today = new Date();
    const cutoff = `${today.getUTCFullYear() - 18}-${String(today.getUTCMonth() + 1).padStart(2, "0")}-${String(today.getUTCDate()).padStart(2, "0")}`;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== birthDate || birthDate < "1900-01-01" || birthDate > cutoff) {
      setError("Enter a valid Gregorian birth date from 1900 onward. This service is for adults aged 18 or older."); return;
    }
    if (!unknown && !/^([01]\d|2[0-3]):[0-5]\d$/.test(birthTime)) { setError("Enter your birth time or select ‘I don’t know my birth time’."); return; }
    if (!place || !consent) { setError("Select a city from search results and agree to the privacy consent."); return; }
    const request = new AbortController(); chartRequest.current = request; setLoading(true);
    try {
      const data = await post("/api/bazi", { birthDate, timeKnown: !unknown, birthTime: unknown ? null : birthTime, placeId: place.id, consent: true }, request.signal);
      if (request.signal.aborted) return;
      if (!validResult(data)) throw new Error();
      setResult(data);
    } catch (err) {
      if (!request.signal.aborted) setError(Object.values(errors).includes(err.message) ? err.message : "The calculator is unavailable. Please try again later.");
    } finally { if (!request.signal.aborted) setLoading(false); }
  }
  return <div className={embedded ? styles.embedded : styles.shell}>
    {picker && <BirthPicker kind={picker} value={picker === "date" ? birthDate : birthTime} onCancel={() => setPicker(null)} onConfirm={value => { edit(); if (picker === "date") setBirthDate(value); else setBirthTime(value); setPicker(null); }} />}
    {!embedded && <header className={styles.intro}><p className="eyebrow">A moment of self-discovery</p><h1>Your birth chart.<br /><em>A new perspective.</em></h1><p>Explore your Four Pillars and Five Elements with a free BaZi calculation. A cultural lens for reflection, not a prediction of your future.</p></header>}
    <div className={result ? styles.reportLayout : embedded ? styles.embeddedLayout : styles.layout}>
      <form ref={formFocus} tabIndex={-1} hidden={Boolean(result)} className={`${styles.panel} ${embedded ? styles.embeddedPanel : ""}`} onSubmit={calculate}>
        <p className="form-kicker">Free BaZi calculator</p><h2>Begin with your birth details.</h2>
        <p className={styles.note}>Gregorian calendar · Ages 18+ · No account required</p>
        <label>Name (optional)<input name="displayName" autoComplete="off" maxLength={80} placeholder="How would you like to be addressed?" value={name} onChange={e => setName(e.target.value)} /></label>
        <p className={styles.note}>Your name stays on this page and is not sent to our server.</p>
        <div className={styles.fields}>
          <div><span id="birth-date-label">Date of birth</span><button className={styles.pickerTrigger} type="button" aria-labelledby="birth-date-label birth-date-value" aria-haspopup="dialog" onClick={() => setPicker("date")}><span id="birth-date-value">{birthDate || "Select year / month / day"}</span><span aria-hidden="true">⌄</span></button></div>
          <div><span id="birth-time-label">Local time of birth</span><button className={styles.pickerTrigger} type="button" disabled={unknown} aria-labelledby="birth-time-label birth-time-value" aria-haspopup="dialog" onClick={() => setPicker("time")}><span id="birth-time-value">{unknown ? "Unknown" : birthTime || "Select hour / minute"}</span><span aria-hidden="true">⌄</span></button></div>
        </div>
        <label className={styles.check}><input type="checkbox" checked={unknown} onChange={(e) => { edit(); setUnknown(e.target.checked); setBirthTime(""); }} /><span>I don’t know my birth time</span></label>
        <p className={styles.note}>Unknown times produce a partial chart. Uncertain pillars are omitted.</p>
        <label className={styles.city}>City of birth<input name="birthPlace" value={query} maxLength={80} autoComplete="off" placeholder="City, country" aria-describedby="city-status" onChange={(e) => { edit(); setQuery(e.target.value); setPlace(null); }} /></label>
        <button className={styles.search} type="button" onClick={search}>Search cities</button>
        <p id="city-status" role="status" className={styles.note}>{place ? `Selected: ${place.label}` : searchStatus}</p>
        {places.length > 0 && <ul className={styles.candidates} aria-label="City search results">{places.map((p) => <li key={p.id}><button type="button" onClick={() => { edit(); setPlace(p); setQuery(p.label); }}>{p.label}</button></li>)}</ul>}
        <label className={styles.check}><input name="consent" type="checkbox" required checked={consent} onChange={(e) => { edit(); setConsent(e.target.checked); }} /><span>I agree to server processing of my birth details to calculate my chart. If enabled, OpenAI receives only a minimized chart for an optional explanation, not my birth date, time, or city. See our <a href="/privacy">Privacy Policy</a>.</span></label>
        <button className="button form-submit" type="submit" disabled={loading}>{loading ? "Calculating…" : "Calculate My Chart"}<span aria-hidden="true">↗</span></button>
        <p role="status" className={styles.note}>{loading ? "Calculating your chart. You can edit details to cancel." : ""}</p>
        {error && <p role="alert" className={styles.error}>{error}</p>}
      </form>
      {(!embedded || result) && <div ref={reportFocus} tabIndex={-1} className={styles.results} aria-live="polite" aria-busy={loading}>
        {!result ? <div className={styles.empty}><div className={styles.orbit} aria-hidden="true">木 · 火 · 土 · 金 · 水</div><p className="form-kicker">Your free report</p><h2>A clearer view of<br /><em>your starting point.</em></h2><p>Calculate your chart to explore your Four Pillars, Day Master and Five Elements, with reflection prompts and transparent calculation details.</p></div> : <Report result={result} details={{name, birthDate, birthTime, unknown, city:place?.label}} onEdit={() => { edit(); requestAnimationFrame(() => formFocus.current?.focus()); }} />}
      </div>}
    </div>
    <p className={styles.disclaimer}>For cultural education and personal reflection only. BaZi is not scientifically validated and is not medical, legal, financial, or other professional advice. City data: <a href="https://www.geonames.org/">GeoNames</a>, adapted under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</p>
  </div>;
}
