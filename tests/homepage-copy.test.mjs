import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const homepage = readFileSync(new URL('../src/components/ProductIntroduction.tsx', import.meta.url), 'utf8');
const homePage = readFileSync(new URL('../src/app/page.tsx', import.meta.url), 'utf8');
const safetyPage = readFileSync(new URL('../src/app/safety/page.tsx', import.meta.url), 'utf8');

const sandboxPdf = 'https://ico.org.uk/media2/qf3lrg30/regulatory-sandbox-final-report-zebbingo.pdf';

test('homepage omits the ICO sandbox paragraph and its PDF link', () => {
  assert.equal(homepage.includes('Regulatory Sandbox'), false);
  assert.equal(homepage.includes('Read the ICO'), false);
  assert.equal(homepage.includes(sandboxPdf), false);
});

test('homepage keeps both safety links and the remaining Safety by design copy', () => {
  assert.match(homePage, /href="\/safety\/"[\s\S]*?>\s*Safety\s*</);
  assert.match(homepage, /Safety, privacy and parental control are central to how we design/);
  assert.match(homepage, /The Stage has no screen\. Children can explore stories, songs and/);
  assert.match(homepage, /href="\/safety\/"[\s\S]*?>\s*Read about Spark safety and parental control\s*</);
});

test('safety page keeps its ICO sandbox introduction and PDF link', () => {
  assert.equal(
    safetyPage.includes('To develop these principles, we have participated in the ICO’s Regulatory Sandbox.'),
    true,
  );
  assert.equal(safetyPage.includes(`href="${sandboxPdf}"`), true);
  assert.equal(safetyPage.includes('available here (PDF)'), true);
});

test('homepage display and alt text use T-Rex', () => {
  assert.equal(homepage.includes('T Rex'), false);
  assert.equal(homepage.match(/T-Rex/g)?.length, 3);
  assert.match(homepage, /a puppy, a T-Rex, a cat/);
  assert.match(homepage, /alt="Four Zebbingo figurines: an explorer in a white suit, a doctor, Julius Caesar and a blue T-Rex"/);
  assert.match(homepage, /ask the T-Rex about life as a dinosaur/);
});
