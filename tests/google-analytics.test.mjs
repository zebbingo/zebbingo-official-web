import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

test('queued commands use the Google SDK arguments-object contract', () => {
  const source = readFileSync(new URL('../src/lib/google-analytics.ts', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const scripts = [];
  const context = vm.createContext({
    exports: {}, window: {},
    document: {
      title: 'Zebbingo', getElementById: () => null,
      createElement: () => ({}), head: { appendChild: script => scripts.push(script) },
    },
  });
  vm.runInContext(compiled, context);
  context.exports.sendPageView('G-TEST123456', 'https://www.zebbingo.com/', '');
  // gtag's command dispatcher distinguishes Arguments from arrays: arrays invoke
  // data-layer object methods and never reach the consent/config/event handlers.
  // Contract: https://developers.google.com/tag-platform/gtagjs/install
  const commands = context.window.dataLayer.filter(entry => Object.prototype.toString.call(entry) === '[object Arguments]');
  assert.equal(commands.length, 5, 'Google must recognize every queued command');
  assert.deepEqual(Array.from(commands, entry => entry[0]), ['consent', 'js', 'consent', 'config', 'event']);
  assert.equal(commands[3][2].send_page_view, false);
  assert.equal(commands[4][1], 'page_view');
  assert.equal(commands[4][2].send_to, 'G-TEST123456');
  assert.equal(scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-TEST123456');
});
