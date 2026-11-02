import test from 'node:test';
import assert from 'node:assert/strict';
import { readCampaign, analyticsLocation, analyticsReferrer } from '../src/lib/traffic-attribution.mjs';

test('ICO LinkedIn traffic preserves standard source, medium, campaign and placement', () => {
  assert.deepEqual(readCampaign('https://www.zebbingo.com/?utm_source=LinkedIn&utm_medium=social&utm_campaign=ico_report&utm_content=ico_linkedin_post'), {
    utm_source: 'linkedin', utm_medium: 'social', utm_campaign: 'ico_report', utm_content: 'ico_linkedin_post',
  });
});

test('ICO website links can land directly on Safety', () => {
  const url = 'https://www.zebbingo.com/safety/?utm_source=ico&utm_medium=referral&utm_campaign=ico_report&utm_content=ico_report';
  assert.equal(analyticsLocation(url), url);
});

test('unapproved or incomplete campaigns are omitted rather than sending arbitrary values', () => {
  for (const query of [
    'utm_source=someone@example.com&utm_medium=social&utm_campaign=ico_report',
    'utm_source=linkedin&utm_medium=social',
    'utm_source=ico&utm_medium=social&utm_campaign=ico_report',
    'utm_source=linkedin&utm_medium=social&utm_campaign=private_customer_name',
  ]) assert.deepEqual(readCampaign(`https://www.zebbingo.com/?${query}`), {});
});

test('placement labels must match the documented source and medium', () => {
  for (const [source, medium, content] of [
    ['ico', 'referral', 'ico_linkedin_post'],
    ['ico', 'referral', 'zebbingo_linkedin_post'],
    ['linkedin', 'social', 'ico_report'],
  ]) {
    assert.deepEqual(readCampaign(`https://www.zebbingo.com/?utm_source=${source}&utm_medium=${medium}&utm_campaign=ico_report&utm_content=${content}`), {
      utm_source: source, utm_medium: medium, utm_campaign: 'ico_report',
    });
  }
  assert.equal(readCampaign('https://www.zebbingo.com/?utm_source=linkedin&utm_medium=social&utm_campaign=ico_report&utm_content=zebbingo_linkedin_post').utm_content, 'zebbingo_linkedin_post');
});

test('sensitive query parameters, unknown UTM content and fragments never enter page_location', () => {
  assert.equal(analyticsLocation('https://www.zebbingo.com/?email=private@example.com&token=secret&utm_source=linkedin&utm_medium=social&utm_campaign=ico_report&utm_content=private_name#secret'),
    'https://www.zebbingo.com/?utm_source=linkedin&utm_medium=social&utm_campaign=ico_report');
});

test('initial campaign can be retained in memory for later SPA pages', () => {
  const campaign = readCampaign('https://www.zebbingo.com/?utm_source=ico&utm_medium=referral&utm_campaign=ico_report');
  assert.equal(analyticsLocation('https://www.zebbingo.com/safety/?token=private#fragment', campaign),
    'https://www.zebbingo.com/safety/?utm_source=ico&utm_medium=referral&utm_campaign=ico_report');
});

test('only public known page paths are measured', () => {
  assert.equal(analyticsLocation('https://www.zebbingo.com/private/person-name'), null);
  assert.equal(analyticsLocation('invalid URL'), null);
  assert.equal(analyticsLocation('https://www.zebbingo.com/about'), 'https://www.zebbingo.com/about/');
});

test('referrers keep known publisher origin only, never path/query/person IDs', () => {
  assert.equal(analyticsReferrer('https://www.linkedin.com/posts/private-name?token=secret'), 'https://www.linkedin.com/');
  assert.equal(analyticsReferrer('https://ico.org.uk/report/private?token=secret'), 'https://ico.org.uk/');
  for (const ref of ['https://linkedin.com.evil.test/?private=1', 'https://internal.example.com/private', '', 'invalid']) {
    assert.equal(analyticsReferrer(ref), '');
  }
});

test('SPA views use the sanitized preceding page instead of repeating the entry publisher', () => {
  const entry = 'https://www.linkedin.com/posts/private-name?token=secret';
  assert.equal(analyticsReferrer(entry, null), 'https://www.linkedin.com/');
  assert.equal(analyticsReferrer(entry, 'https://www.zebbingo.com/?email=private@example.com#secret'), 'https://www.zebbingo.com/');
  assert.equal(analyticsReferrer(entry, 'https://www.zebbingo.com/safety/?utm_source=ico&utm_medium=referral&utm_campaign=ico_report&token=secret'),
    'https://www.zebbingo.com/safety/?utm_source=ico&utm_medium=referral&utm_campaign=ico_report');
});
