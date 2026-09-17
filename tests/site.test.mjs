import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { daysInMonth, formatBirthDate, formatBirthTime } from "../app/homepage-interactions.mjs";

const response = await fetch(process.env.SITE_URL || "http://127.0.0.1:3000");
assert.equal(response.status, 200);
// Check rendered markup, excluding Next.js hydration payloads that repeat content.
const html = (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");

test("contains the required homepage sections and compliance copy", () => {
  for (const id of ["top", "services", "faq", "footer"]) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
  assert.match(html, /Ancient Chinese Wisdom, Reimagined for Modern Life/);
  assert.match(html, /Understand Yourself/);
  assert.match(
    html,
    /We do not predict future events, fortune, finance, or medical outcomes\./,
  );
});

test("presents exactly three core products with prototype pricing", () => {
  assert.equal((html.match(/class="service-card/g) || []).length, 3);

  for (const content of [
    "BaZi",
    "Understand Yourself",
    "$29–39",
    "Compatibility",
    "Understand Your Relationships",
    "$39–59",
    "Feng Shui",
    "Understand Your Space",
    "$49–99",
  ]) {
    assert.ok(html.includes(content), `missing product content: ${content}`);
  }

  assert.doesNotMatch(html, /Chinese Zodiac Personality Insight/);
  assert.doesNotMatch(html, /Dual Eastern &amp; Western Reading/);
});

test("uses semantic and accessible controls", () => {
  assert.match(html, /<header\b/);
  assert.match(html, /<main\b/);
  assert.match(html, /<footer\b/);
  assert.match(html, /rel=["']icon["']/);
  assert.equal((html.match(/<details\b/g) || []).length, 3);
});

test("defines the required palette and responsive behavior", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  for (const token of [
    "--almond",
    "--stone",
    "--ochre",
    "--moss",
    "--slate",
    "--copper",
  ]) {
    assert.match(css, new RegExp(`${token}:`));
  }
  assert.match(css, /@media\s*\(max-width:\s*900px\)/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});

test("enhances reveal elements without blocking unsupported browsers", async () => {
  const js = await readFile(new URL("../app/homepage-interactions.mjs", import.meta.url), "utf8");

  assert.match(js, /IntersectionObserver/);
  assert.match(js, /classList\.add\("is-visible"\)/);
  assert.match(js, /documentElement\.classList\.add\("js"\)/);
});

test("links to the calculator without collecting details on the homepage", () => {
  assert.ok(html.includes('href="/free-bazi"'));
  assert.doesNotMatch(html, /id="free-reading-form"|name="fullName"|name="birthDate"|Nothing is uploaded/);
});
test("formats wheel dates and handles leap years", () => {

  assert.equal(daysInMonth(2024, 2), 29);
  assert.equal(daysInMonth(2025, 2), 28);
  assert.equal(formatBirthDate({ year: 1992, month: 8, day: 4 }), "1992-08-04");
  assert.equal(formatBirthTime({ hour: 2, minute: 5, period: "PM" }), "14:05");
  assert.equal(formatBirthTime({ hour: 12, minute: 0, period: "AM" }), "00:00");
});

test("keeps three homepage sections and moves the other content to secondary pages", async () => {
  const base = process.env.SITE_URL || "http://127.0.0.1:3000";
  const pages = { "/": html };
  for (const route of ["/readings", "/philosophy", "/about", "/privacy", "/terms", "/free-bazi"]) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200);
    pages[route] = (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  }
  assert.equal((html.match(/<section\b/g) || []).length, 3);
  assert.doesNotMatch(html, /A simple beginning|Sample report|id="philosophy"|id="difference"|id="closing-title"/);
  assert.match(pages["/free-bazi"], /type="date"/);
  assert.match(pages["/free-bazi"], /type="time"/);
  assert.match(pages["/free-bazi"], /name="consent"/);
  assert.match(pages["/free-bazi"], /Search cities/);
  assert.doesNotMatch(pages["/free-bazi"], /name="fullName"/);
  assert.match(pages["/readings"], /id="sample-report"/);
  assert.match(pages["/readings"], /Demonstration only — no BaZi calculation has been performed\./);
  for (const title of ["intro-title", "philosophy-title", "difference-title", "closing-title"]) {
    assert.ok(pages["/philosophy"].includes('id="' + title + '"'));
  }
  assert.equal((pages["/philosophy"].match(/<section\b/g) || []).length, 4);
  assert.equal((pages["/privacy"].match(/<h2\b/g) || []).length, 16);
  assert.equal((pages["/terms"].match(/<h2\b/g) || []).length, 19);
  assert.match(pages["/terms"], /European and UK Consumers/);
  assert.match(pages["/terms"], /January 2026/);
  assert.match(pages["/privacy"], /January 2026/);
  assert.match(pages["/privacy"], /mailto:hello@jijiruling.com/);
  for (const [route, markup] of Object.entries(pages)) {
    assert.equal((markup.match(/<h1\b/g) || []).length, 1);
    assert.match(markup, /href="\/readings">Readings/);
    assert.match(markup, /href="\/philosophy">Philosophy/);
    assert.match(markup, /href="\/about">About/);
    assert.match(markup, /<footer\b[\s\S]*href="\/privacy">Privacy/);
    assert.match(markup, /<footer\b[\s\S]*href="\/terms">Terms/);
    for (const [, href] of markup.matchAll(/href="([^" ]+)"/g)) {
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const target = new URL(href, base + route);
      if (!target.hash) continue;
      assert.ok(pages[target.pathname]?.includes('id="' + target.hash.slice(1) + '"'), 'Broken link: ' + route + ' -> ' + href);
    }
  }
});
