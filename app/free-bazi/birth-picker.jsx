"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./calculator.module.css";
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const pad = n => String(n).padStart(2, "0");
function Wheel({ label, values, value, onChange }) {
  const ref = useRef(null);
  useEffect(() => { const frame = requestAnimationFrame(() => { ref.current.scrollTop = Math.max(0, values.indexOf(value)) * 44; }); return () => cancelAnimationFrame(frame); }, []);
  function move(i) { const index = Math.max(0, Math.min(values.length - 1, i)); ref.current.scrollTop = index * 44; onChange(values[index]); }
  return <div className={styles.wheelColumn}><span>{label}</span><div className={styles.wheel} ref={ref} role="spinbutton" tabIndex={0} aria-label={label} aria-valuemin={values[0]} aria-valuemax={values.at(-1)} aria-valuenow={value}
    onKeyDown={e => { if (["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) { e.preventDefault(); move(e.key === "Home" ? 0 : e.key === "End" ? values.length - 1 : values.indexOf(value) + (e.key === "ArrowDown" ? 1 : -1)); } }}
    onScroll={e => onChange(values[Math.max(0, Math.min(values.length - 1, Math.round(e.currentTarget.scrollTop / 44)))])}>
    {values.map((n, i) => <div key={n} className={n === value ? styles.wheelSelected : undefined} onClick={() => move(i)} aria-hidden="true">{pad(n)}</div>)}
  </div></div>;
}
export default function BirthPicker({ kind, value, onConfirm, onCancel }) {
  const ref = useRef(null), isDate = kind === "date";
  const [draft, setDraft] = useState(() => value ? value.split(isDate ? "-" : ":").map(Number) : isDate ? [2000, 1, 1] : [12, 0]);
  useEffect(() => {
    const overflow = document.body.style.overflow, previousFocus = document.activeElement, dialog = ref.current;
    document.body.style.overflow = "hidden"; dialog.showModal();
    return () => { dialog.close(); document.body.style.overflow = overflow; previousFocus?.focus(); };
  }, []);
  const days = isDate ? new Date(Date.UTC(draft[0], draft[1], 0)).getUTCDate() : 0;
  function update(i, n) { setDraft(current => { const next = [...current]; next[i] = n; if (isDate) next[2] = Math.min(next[2], new Date(Date.UTC(next[0], next[1], 0)).getUTCDate()); return next; }); }
  return <dialog className={styles.picker} ref={ref} aria-labelledby="birth-picker-title" onCancel={onCancel}>
    <h2 id="birth-picker-title">{isDate ? "Select Date Of Birth" : "Select Local Birth Time"}</h2>
    <p className={styles.note}>{isDate ? "Scroll to choose your Gregorian birth date." : "24-hour clock. Choose your recorded time. If unsure, cancel and select unknown birth time."}</p>
    <div className={styles.wheels}>{isDate ? <>
      <Wheel label="Year" values={range(1900, new Date().getUTCFullYear() - 18)} value={draft[0]} onChange={n => update(0, n)} />
      <Wheel label="Month" values={range(1, 12)} value={draft[1]} onChange={n => update(1, n)} />
      <Wheel key={days} label="Day" values={range(1, days)} value={draft[2]} onChange={n => update(2, n)} />
    </> : <>
      <Wheel label="Hour" values={range(0, 23)} value={draft[0]} onChange={n => update(0, n)} />
      <Wheel label="Minute" values={range(0, 59)} value={draft[1]} onChange={n => update(1, n)} />
    </>}</div>
    <p className={styles.pickerValue} aria-live="polite">{draft.map(pad).join(isDate ? "-" : ":")}</p>
    <div className={styles.pickerActions}><button type="button" onClick={onCancel}>Cancel</button><button type="button" onClick={() => onConfirm(draft.map(pad).join(isDate ? "-" : ":"))}>Confirm</button></div>
  </dialog>;
}
