import { test } from 'node:test';
import assert from 'node:assert/strict';
import { negotiateLocale } from './index.js';

test('negotiateLocale', async (t) => {
  await t.test('returns null for empty or null input', () => {
    assert.strictEqual(negotiateLocale(null), null);
    assert.strictEqual(negotiateLocale(''), null);
  });

  await t.test('returns exact match for supported languages', () => {
    assert.strictEqual(negotiateLocale('zh-cn'), 'zh-cn');
    assert.strictEqual(negotiateLocale('zh-tw'), 'zh-tw');
    assert.strictEqual(negotiateLocale('en-us'), 'en-us');
    assert.strictEqual(negotiateLocale('ja-jp'), 'ja-jp');
  });

  await t.test('is case-insensitive', () => {
    assert.strictEqual(negotiateLocale('ZH-CN'), 'zh-cn');
    assert.strictEqual(negotiateLocale('En-Us'), 'en-us');
  });

  await t.test('handles fallback to base language', () => {
    // zh-hk should match zh-cn as it is the first zh-* in SUPPORTED
    assert.strictEqual(negotiateLocale('zh-hk'), 'zh-cn');
    // en-gb should match en-us
    assert.strictEqual(negotiateLocale('en-gb'), 'en-us');
  });

  await t.test('respects q-values for ordering', () => {
    assert.strictEqual(negotiateLocale('ja-jp;q=0.5, en-us;q=0.9'), 'en-us');
    assert.strictEqual(negotiateLocale('zh-tw;q=0.8, zh-cn;q=0.9'), 'zh-cn');
  });

  await t.test('handles multiple languages with fallbacks', () => {
    // fr-FR is not supported, should fall back to en-US
    assert.strictEqual(negotiateLocale('fr-fr, en-us;q=0.8'), 'en-us');
    // zh-HK falls back to zh-CN which has higher priority than ja-JP
    assert.strictEqual(negotiateLocale('zh-hk;q=0.9, ja-jp;q=0.8'), 'zh-cn');
  });

  await t.test('returns null when no match is found', () => {
    assert.strictEqual(negotiateLocale('fr-fr, de-de'), null);
    assert.strictEqual(negotiateLocale('unknown'), null);
  });

  await t.test('handles malformed input gracefully', () => {
    assert.strictEqual(negotiateLocale('zh-cn;q=invalid'), 'zh-cn');
    assert.strictEqual(negotiateLocale(';q=0.8'), null);
    assert.strictEqual(negotiateLocale(','), null);
    assert.strictEqual(negotiateLocale('zh-cn, , en-us'), 'zh-cn');
  });

  await t.test('handles extra whitespace', () => {
    assert.strictEqual(negotiateLocale('  en-us  ,  zh-cn;q=0.5  '), 'en-us');
  });
});
