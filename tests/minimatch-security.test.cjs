const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createRequire } = require('node:module');

const eslintRequire = createRequire(require.resolve('eslint/package.json'));

test('ESLint minimatch bounds globstar parent expansion', () => {
  const { Minimatch } = eslintRequire('minimatch');
  const matcher = new Minimatch('x', { optimizationLevel: 2, braceExpandMax: 1 });
  const patterns = [['**', '..', 'x', '**', '..', 'y', '**', '..', 'z']];
  matcher.firstPhasePreProcess(patterns);
  assert.equal(patterns.length, 1);
});
