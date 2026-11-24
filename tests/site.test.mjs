import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { daysInMonth, formatBirthDate, formatBirthTime } from '../app/homepage-interactions.mjs';
const base = process.env.SITE_URL || 'http://127.0.0.1:3000';
async function page(route) {
  const response = await fetch(base + route);
  assert.equal(response.status, 200, route);
  return (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
}
const html = await page('/');
test('current storefront has six sections and three linked bracelet products', () => {
  assert.equal((html.match(/<section\b/g) || []).length, 6);
  for (const id of ['main-content', 'collection', 'featured']) assert.ok(html.includes(`id="${id}"`));
  assert.match(html, /Objects For Your/);
  const featured = html.split('id="featured"')[1].split('</section>')[0];
  assert.equal((featured.match(/<article\b/g) || []).length, 3);
  for (const slug of ['wood', 'fire', 'earth']) {
    assert.equal((featured.match(new RegExp(`href="/products/${slug}-bracelet"`, 'g')) || []).length, 2);
    assert.ok(featured.includes(`/images/products/${slug}-bracelet.webp`));
  }
  assert.doesNotMatch(html, /Cinnabar-toned charm pendant|Ceramic grounding object/);
});
test('homepage keeps accessible landmarks, disclaimer and reading entry', () => {
  for (const tag of ['header', 'main', 'footer']) assert.match(html, new RegExp(`<${tag}\\b`));
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /rel="icon"/);
  assert.ok(html.includes('href="/free-bazi"'));
  assert.doesNotMatch(html, /name="birthPlace"|name="birthDate"/);
  assert.match(html, /We do not predict future events, fortune, finance, or medical outcomes\./);
});
test('responsive styling and reduced motion remain available', async () => {
  const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
  for (const token of ['--almond','--stone','--ochre','--moss','--slate','--copper']) assert.ok(css.includes(token + ':'));
  assert.match(css, /@media\s*\(max-width:\s*900px\)/);
  assert.match(css, /prefers-reduced-motion/);
});
test('date helpers retain leap-year and time formatting behavior', () => {
  assert.equal(daysInMonth(2024,2),29); assert.equal(daysInMonth(2025,2),28);
  assert.equal(formatBirthDate({year:1992,month:8,day:4}),'1992-08-04');
  assert.equal(formatBirthTime({hour:2,minute:5,period:'PM'}),'14:05');
  assert.equal(formatBirthTime({hour:12,minute:0,period:'AM'}),'00:00');
});
test('secondary pages remain reachable with a single primary heading', async () => {
  for (const route of ['/readings','/philosophy','/about','/privacy','/terms','/free-bazi']) {
    const body = await page(route);
    assert.equal((body.match(/<h1\b/g) || []).length,1,route);
    assert.ok(body.includes('href="/privacy"')); assert.ok(body.includes('href="/terms"'));
  }
});
for (const slug of ['wood','fire','earth']) {
  test(`${slug} detail and checkout preserve product selection and demo boundaries`, async () => {
    const detail = await page(`/products/${slug}-bracelet`);
    assert.match(detail,/INTERACTIVE PREVIEW/); assert.match(detail,/Demo price/);
    assert.ok(detail.includes(`/images/products/${slug}-bracelet.webp`));
    assert.ok(detail.includes(`/images/products/${slug}-bracelet-scene.png`));
    assert.ok(detail.includes(`/products/${slug}-bracelet/checkout?`));
    const checkout = await page(`/products/${slug}-bracelet/checkout?size=18%20cm&style=Minimal%20beads&quantity=2`);
    assert.match(checkout,/136\.00/); assert.match(checkout,/18 cm/); assert.match(checkout,/Minimal beads/);
    assert.match(checkout,/No order is created and no payment is processed/);
    assert.doesNotMatch(checkout,/<input\b/);
    const invalid = await page(`/products/${slug}-bracelet/checkout?quantity=-1&size=invalid`);
    assert.match(invalid,/68\.00/); assert.match(invalid,/16 cm/);
    for (const suffix of ['webp','png']) {
      const asset = await fetch(`${base}/images/products/${slug}-bracelet${suffix === 'png' ? '-scene' : ''}.${suffix}`);
      assert.equal(asset.status,200); assert.match(asset.headers.get('content-type'),/^image\//);
    }
  });
}
