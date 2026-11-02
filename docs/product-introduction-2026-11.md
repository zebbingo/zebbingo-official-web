---
title: Homepage product introduction — November 2026
asset_type: doc
description: Agreed plan, content decisions and verification.
status: active
confidence: A
owner: Han Wu
created: 2026-11-02
last_verified: 2026-11-02
---

# Homepage product introduction

## Authorization and source

On 2026-11-02 the user accepted the chat proposal and instructed: “落入文档，然后开始实施，最后交 PR，不要合并”. Deliver a reviewable PR and preview; no merge or production publication. GitHub author is `hantastic3`, so the HW self-author exception applies to plan approval.

Source: [Henry’s November proposal](https://app.notion.com/p/4093b79ee42780f6a42ef4b44041fb76), read 2026-11-02. Later chat prioritizes text over images and places the ICO link below the Safety subtitle.

## Plan and acceptance

- Updated after explicit user request “请清掉重复旧内容”: remove the old hero and duplicated mobile/desktop promotion; make the product introduction the homepage body, preceded only by a compact brand/Safety header. Preserve the existing discover-zebbingo fragment for shared preview links. One shared semantic section covers Meet the cast, How it works, Safety by design and Zip and the Stage. Preserve signup and Safety navigation. Use one h1 with correctly nested section headings.
- Explain Stage, its three pads, stories, songs and Spark; expand Zip’s introduction. Text may mention other characters while making clear the full range is planned, without promising Kickstarter availability.
- Updated after the user’s “没有图片” feedback on 2026-11-02: add the two supplied real photographs in this PR. Place the Kickstarter quartet below Meet the cast and the Stage photograph before the three-pad explanation. Use the supplied real photographs as the source, with backgrounds removed as explicitly requested in the latest feedback. Preserve product appearance and details. Use Next Image responsive delivery, intrinsic dimensions and descriptive alt text. The old homepage hero, including the Cowboy showcase, has been removed (旧首屏已移除).
- Use original stories/songs without an unverified count of twelve. Omit the standalone battery sentence, per Henry’s latest feedback; do not add an unconfirmed runtime. Parent-app wording stays conservative. Avoid new guaranteed-safety, ICO-approval, certified-compliance or completed-testing claims without evidence.
- Add Henry’s ICO sentence only after verifying a public report URL. Search service returned HTTP 503 during proposal and implementation preparation; no public report URL established. Do not fabricate a link. This dependency does not block homepage text.
- Review existing Safety claims against available implementation/policy evidence. Record unresolved checks rather than silently changing policy commitments.
- Attribution baseline: no identifiable analytics integration in the original source. PR #8 proves Vercel preview integration, not enabled analytics. Dashboard access and campaign links remain unverified. User has now authorized Google traffic attribution in this same PR; follow the analytics revision below.

## Verification and delivery

Run `pnpm exec tsc --noEmit`, `pnpm exec eslint .`, `pnpm build`, and `node --test tests/*.test.cjs`. Browser checks at mobile and desktop widths cover anchor navigation, readable sections, horizontal overflow, Safety and signup. Store screenshots outside the worktree. Static content/layout changes use browser acceptance checks rather than new implementation-mirroring unit tests.

Create plan-only Draft before implementation, finish verification, then convert the same PR to Ready. Read back current-head Vercel/CI and Codex review. Preserve branch/lane for review; no merge or publication.

## Open dependencies and deferred work

- Public ICO report URL. Sentence: “To develop these principles, we have participated in the ICO’s Regulatory Sandbox. Their report is here.” Place immediately below the Safety subtitle once verified.
- Confirm battery runtime, per-character content counts, included Zip bundle and parent-app controls.
- Safety currently promises 30-day transcript retention, deletion within 24 hours after consent withdrawal, UK hosting, session review and parental controls. Policy/implementation-owner confirmation required before changing these claims.
- Confirm launch-character names/availability; Guo Yu’s better speaker photo can replace the supplied fallback later.
- Human review of preview including Henry’s copy feedback before publication.

## Safety review findings

The current service purge implementation (`services/chatbot-api/scripts/purge_chat_summaries_by_consent.py`, in the parent repository) uses 30 days for BASIC_CONSENT, immediate deletion for NO_CONSENT, and no purge for ADVANCED_CONSENT. This supports the existence of a 30-day tier, but does not establish the default account tier or the public 24-hour deletion promise. Scheduler cadence, deployed configuration, hosting, encryption, review triggers, model training terms and firmware microphone behavior were not verified in this website-only change. Existing Safety copy is retained pending policy-owner confirmation; this is not a completed compliance audit.

## Results

Plan-only commit `ee358ec` created [Draft PR #9](https://github.com/zebbingo/zebbingo-official-web/pull/9) before code changes. Author and Draft state read back; self-author exception confirmed.

- `pnpm build`: PASS, all seven static pages generated.
- `pnpm exec tsc --noEmit`: PASS.
- `pnpm exec eslint src`: PASS.
- `node --test tests/*.test.cjs`: PASS (1/1).
- `git diff --check`: PASS.
- `pnpm exec eslint .`: existing CommonJS test has three no-require-imports errors; existing PostCSS export has one warning. No lint config changes made for this content task.
- Playwright against the production build on 127.0.0.1:33019: mobile 390×844 and desktop 1440×1000, no horizontal overflow; hero anchor reaches introduction, Safety link reaches /safety/, signup drawer opens and closes. Mobile right padding reserves room for the existing floating signup tab. Codex review identified the larger desktop tab at intermediate widths; 112px right padding from 768px upward also reserves its hover footprint. Screenshots inspected locally at `/tmp/official-web-intro-mobile.png` and `/tmp/official-web-intro-desktop.png` (temporary, not durable PR assets).
- After review fix, Playwright assertions at widths 390, 768, 1024, 1100 and 1440 passed: document width equals viewport and rightmost pad card stays at least 15px left of the signup tab. Production build and source lint passed again.
- Signup country-list request to existing UAT API failed with ERR_CONNECTION_CLOSED; no form submitted and no claim of end-to-end signup success. No homepage errors before opening the existing drawer; image-preload warnings remain.
- ICO public URL, policy-owner signoff and production verification remain unverified. GA4 setup and local real-property verification are recorded below. The original text-only iteration was updated to include the two supplied product photographs after user feedback. No merge or production deployment performed.

Current-head hosted preview and review evidence will be recorded in the PR, avoiding a new documentation-only head after review.

## Product photos revision

User feedback “没有图片” authorizes adding the supplied figurine and speaker photographs to the same PR. Original JPEGs are publication assets in `public/assets/`; Next Image optimizes delivery without redrawing the products. Browser verification must confirm both photos load, retain aspect ratio and stay clear of the floating signup tab at the five previously checked widths. Photo verification completed: production build, source ESLint, TypeScript and diff check passed. Playwright decoded both photos at widths 390/768/1024/1100/1440; no horizontal overflow, aspect ratios preserved and both image edges at least 15px left of the signup tab. Desktop figurine and mobile speaker screenshots visually inspected; products are fully visible. Static JPEGs are the supplied originals; no new runtime persistence or downloads.

Photo-revision review also identified an implied Zip bundle promise in the inherited “What’s in the box” heading. Renamed it “Zip and the Stage” until actual package contents are confirmed; this preserves the agreed no-bundle-guarantee boundary.

## Background removal revision

The user explicitly requested removal of both figurine and speaker backgrounds before presentation. Background extraction only: transparent PNGs, four original figurines in the same order, speaker pads/buttons and physical details preserved. Inspect the cutouts against the source, verify real alpha transparency and update the same PR. No synthesized product redesign or merge. Built-in imagegen extraction was tried with the prompt “remove only wall and shelf to transparent alpha, preserve all four original figurines, shapes, details and lighting unchanged”; rejected because product details changed. To honor the explicit original-photo/no-AI-confected-product requirement, final assets use macOS Vision foreground instance masks (four figurines, one speaker) with a 3px mask contraction, applied to original JPEG RGB pixels and cropped with transparent margins. Pixel comparison confirms RGB equals the corresponding original source crop exactly. Both PNGs have fully transparent and fully opaque pixels. Originals remain for provenance. Build, TypeScript (via build), source ESLint and diff check passed. Browser assertions at 390/768/1024/1100/1440px passed: both cutouts decode, alpha remains zero in transparent corners after Next Image optimization, no horizontal overflow and image edges clear the signup tab. Desktop/mobile page screenshots visually checked. Final asset dimensions: figurines 3020×1612, speaker 3332×1615.

## Homepage cleanup revision

User explicitly requested removal of duplicate old content. Remove the old coming-soon headline, Cowboy showcase, old promotional paragraphs and old adventure slogan from the rendered homepage. Retain a compact brand header, Safety navigation and signup drawer. New product copy and transparent photographs become the primary page; preserve the existing fragment URL. Verify one h1, one instance of each product section, absence of the old text/Cowboy, images and no overflow at five widths. Verification completed: production build (including TypeScript), source lint and diff check passed. Playwright at 390/768/1024/1100/1440px confirms one h1, four unique section h2 headings, no old headline/promotion/adventure slogan/Cowboy, one brand image, no horizontal overflow, both cutouts decode and new h1 appears within 151px of the top. Header Safety link navigates to /safety/. Desktop/mobile screenshots inspected.

## Google traffic attribution — implementation plan

User explicitly requested ICO/LinkedIn attribution in the same PR and recalled that existing statistics might use Google. Initial investigation found no recoverable Google identity. The user later explicitly requested help setting up Google Analytics, supplied the employee size (1–10), manually accepted Google’s terms, and selected no optional email subscriptions. That later authorization permits the new GA4 setup recorded below; it supersedes the earlier instruction to wait for an existing property. Do not add Vercel Analytics. Current source and complete local Git history contained no Google tag. All available local branches and full Git history were searched, including legacy root files; source checkout and lane .env.local/.env.production contain no Google analytics ID/key, and none of the live homepage’s 10 script bundles contain Google tag signals. The initial browser attempt could not verify the Google dashboard. The code search did not recover an ID; this does not prove Google Analytics had never been used. The newly authorized account and web stream are now verified below.

GA4 integration is implemented behind `NEXT_PUBLIC_GA_MEASUREMENT_ID`; missing/invalid ID means disabled, without analytics prompts or Google requests. If the existing setup proves to be GTM, resolve its GA4 destination before configuring the direct Google tag, avoiding duplicate tags. No secrets or guessed IDs.

Use Google's basic consent pattern: no Google scripts or analytics requests before explicit opt-in; allow decline and later withdrawal via Analytics preferences. Keep advertising consent denied and disable Google Signals/ad personalization. Store only the consent choice locally; retain campaign attribution only in memory. Strip URL fragments, unknown paths/query values and full referrer paths before analytics. Allow only the documented ICO campaign values. No form fields, email, DOB or user IDs enter analytics; no signup API schema changes. Preview deployments explicitly disable the integration, even if a Measurement ID is present, so reviews do not contaminate production analytics. Campaign context stays in memory; only the consent preference is stored in browser localStorage. No application-server data, databases, downloads or caches are introduced.

Campaign links (hand off to publishers; do not message them):

| Placement | source | medium | campaign | content |
| --- | --- | --- | --- | --- |
| ICO LinkedIn post | linkedin | social | ico_report | ico_linkedin_post |
| ICO report/website | ico | referral | ico_report | ico_report |
| Zebbingo LinkedIn post | linkedin | social | ico_report | zebbingo_linkedin_post |

Use manual pageviews with `send_page_view: false`, sanitized URLs and SPA navigation handling. Disable Enhanced Measurement in the existing GA4 web stream before activation to prevent independent automatic collection/duplicate SPA pageviews. Document Reports → Acquisition → Traffic acquisition and Realtime verification; no claims of dashboard counts until verified. Untagged LinkedIn referrers cannot prove ICO authored the post. Declined/blocked visits are not measured; historical attribution cannot be recovered.

Verification: red→green Node tests for campaign sanitization/referrer boundaries; source lint, build/TypeScript; browser checks for no requests before consent/after decline, opt-in initialization, route changes without duplicate pageviews, withdrawal, malformed query stripping, missing configuration, and responsive consent UI. Real property ingestion remains dependent on verified ID and dashboard access. Deliver this PR without merge or production deployment.

Sources: [Google basic consent](https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic), [manual pageviews](https://developers.google.com/analytics/devguides/collection/ga4/views?client_type=gtag), [campaign URL parameters](https://support.google.com/analytics/answer/10917952?hl=en), accessed 2026-11-02. No legal-compliance certification is implied.

### Publisher links and activation

- ICO LinkedIn: https://www.zebbingo.com/?utm_source=linkedin&utm_medium=social&utm_campaign=ico_report&utm_content=ico_linkedin_post
- ICO report/site: https://www.zebbingo.com/safety/?utm_source=ico&utm_medium=referral&utm_campaign=ico_report&utm_content=ico_report
- Zebbingo LinkedIn: https://www.zebbingo.com/?utm_source=linkedin&utm_medium=social&utm_campaign=ico_report&utm_content=zebbingo_linkedin_post

These are approved labels, not evidence the ICO has used these URLs. They must be used in the actual external posts/report links to distinguish the placements. We have not contacted publishers or changed any external links.

The verified GA4 web stream’s Measurement ID is `G-2BFW9B9TV8`, for `https://www.zebbingo.com` in property `561860963`. Find it under Admin → Data streams → Zebbingo Official Website. Confirm the stream’s Enhanced Measurement is disabled (not merely automatic pageviews on config) because this integration deliberately sends only sanitized manual pageviews. Google Signals and user-provided data collection remain off; granular location/device collection and advertising personalization are disabled. No additional connected site tags were present (0 connected).

`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-2BFW9B9TV8` has been saved as a Config variable in the Vercel `zebbingo-official-web` project, Production only. Build/deploy through the normal human-controlled release decision after this PR is approved. A build/redeployment is required for the statically rendered layout to receive a changed ID. Do not enable tracking in Preview. No local env files were changed. Vercel confirmed the variable was added and a new deployment is required; Redeploy was not clicked. Existing deployments are unchanged.

After activation, use GA4 Realtime to verify a consented tagged test visit reaches the intended property, then Reports → Acquisition → Traffic acquisition with Session source / medium and Session campaign (`ico_report`). Use Session manual ad content/Explore to distinguish `ico_linkedin_post` from `zebbingo_linkedin_post`. Standard reports may not update immediately. Validate one pageview per SPA navigation and no requests for declined visits. The local real-property check below verifies Google event delivery. Production-domain behavior, actual publisher campaign counts and standard acquisition reports still need post-release verification; queue tests alone are not a substitute.

### Analytics verification and limits

- `node --test tests/traffic-attribution.test.mjs`: initial target-behavior run failed 5/7 checks for missing campaign/URL/referrer sanitization; implemented behavior passes 7/7. Existing minimatch test also passes (`pnpm test`: 8/8 total).
- Source ESLint and production build/TypeScript passed. No runtime dependency or analytics vendor package added; the existing Google tag is loaded only after opt-in.
- Preview production build with a supplied fake test ID: rendered layout suppresses the ID, confirming Preview remains disabled. Final build repeated without any test ID.
- Local production build without ID: no analytics prompt and no Google requests, confirmed in Playwright.
- Isolated browser build with a clearly fake test ID and all Google script/intake URLs intercepted: no requests before consent or after decline; choice survives reload; opt-in loads one intercepted tag; homepage and Safety navigation queue exactly two sanitized manual pageviews. Email/token/query fragment are omitted, approved campaign context persists through SPA navigation.
- Withdrawal disables the tag, removes the site’s GA cookies and reloads without reloading Google; a storage-event withdrawal is also verified. Decline/allow still works with localStorage blocked (choice then lasts for the current document only). Advertising defaults are denied.
- Consent UI at widths 320/390/768/1024/1440: no horizontal overflow, both choices accessible; screenshots visually inspected. Privacy notice updated to describe the actual optional integration.
- Initial isolated tests did not prove Google SDK delivery. Real-property verification exposed an SDK contract bug: plain arrays in dataLayer are not interpreted as gtag commands. Changed the queue to the official `arguments` object format. A new SDK-contract regression test failed because 0/5 commands were recognized, then passed after the fix; `pnpm test` now passes 9/9. See [Google’s installation contract](https://developers.google.com/tag-platform/gtagjs/install).
- Production build/TypeScript with the real Measurement ID and source/test ESLint passed after the SDK fix. Current real-ingestion results and release limits are recorded below. No merge, production deployment, paid plan or external publisher messages.

### Authorized GA4 setup — 2 November 2026

- Account: **Zebbingo** (`414314857`); property: **Zebbingo Official Website** (`561860963`), United Kingdom / GMT+00:00 / GBP.
- Web stream: **Zebbingo Official Website** (`16252832736`), `https://www.zebbingo.com`; Measurement ID **`G-2BFW9B9TV8`**. These identifiers are public configuration, not credentials.
- User manually accepted the Google agreements. Optional email subscriptions were saved with “Untick all and save”, matching the user's explicit preference.
- Enhanced Measurement: off, confirmed by the unchecked “Enable enhanced measurement” switch in saved stream details. Google Signals and user-provided data: off. Granular location/device collection: off. Advertising personalization: saved as disallowed in **0 allowed / 307 regions**, verified after reopening settings. No ad accounts were linked or API secrets created.
- Vercel Production-only public configuration saved; Preview/Development were not selected. The application additionally disables analytics whenever `VERCEL_ENV=preview`.
- A local production build with the real ID sent a controlled, consented home → Safety visit. GA4 Realtime for property `561860963` visibly showed **1 active user, 2 page_view events, 1 home view and 1 Safety view**, plus the SDK’s first_visit/session_start events. This verifies SDK processing and property ingestion without duplicate SPA pageviews in that sequence. A second explicitly consented local visit tested the approved ICO LinkedIn UTM labels. GA4 Realtime → page_view → page_location showed the complete sanitized local URL with `utm_source=linkedin`, `utm_medium=social`, `utm_campaign=ico_report` and `utm_content=ico_linkedin_post`, count 1 (total page_view count 3). Standard source/campaign report dimensions were not yet populated; do not claim those reports or real publisher totals are verified. All visits are synthetic acceptance traffic from `127.0.0.1`, with no signup submission; exclude that hostname when evaluating business traffic. They are not real ICO referrals or proof that the public site is collecting.
- Test consent was withdrawn and the local server stopped after verification. `pnpm test` (9/9), source/new-test ESLint, real-ID production build/TypeScript and diff check passed. The parent `just pr-check` recipe resolves to the parent main checkout when invoked from this child repo; running its authoritative `pr_policy_main.py check` directly with the child worktree as cwd passed for `feat/official-web-product-intro`.
- Website release and production-domain verification remain separate from account setup. Do not merge PR #9 or trigger production deployment under the current instruction.


### Review correction — SPA referrer

Codex review of `7d052540f37ea94f6333377a179647a63d993306` identified that each virtual page repeated the entry publisher as page_referrer. Accepted: later pageviews must use the preceding sanitized virtual URL, while the initial view uses the allowed publisher origin. TrafficAnalytics now advances that value from its last sent location; approved campaign labels remain in memory. The existing referrer sanitizer accepts an optional previous location and cleans it through the same public-path/query allowlist.

The new behavior test first failed because a second-page referrer remained LinkedIn, then passed after the correction. `pnpm test` passes 10/10; source/changed-test ESLint, production build/TypeScript and diff check passed. Real-property confirmation and current-head review outcomes are retained in the PR to avoid creating another documentation-only head. See [Google SPA guidance](https://developers.google.com/analytics/devguides/collection/ga4/measure-spa-gtm).


### Review correction — campaign placement combinations

Codex review of `4836d9ddf64d79640108e9dd9a9f88dbae7d31b5` identified that independently allowed labels could form contradictory source/content pairs. Accepted: placement labels now map to their documented source (whose medium is already validated); mismatched content is omitted while valid source/medium/campaign remain. Tests cover both ICO→LinkedIn mismatches and LinkedIn→ICO-report mismatch, and preserve all three intended publisher links. The new test failed before the fix and passes afterward; `pnpm test` passes 11/11, changed-source/test ESLint, production build/TypeScript and diff check passed.

The preceding SPA-referrer correction was also confirmed in the real property: after another local consented home→Safety sequence, Realtime page_view → page_referrer showed `http://127.0.0.1:33019/`, count 1. Overall synthetic acceptance traffic then totaled 3 users / 5 page_view events. Test consent was withdrawn, test tab closed and server stopped. No further real Google traffic is needed for the pure source/content sanitizer change. Current-head review/CI evidence stays in the PR; no merge or production deployment.


## Henry’s latest preview feedback

The user supplied Henry’s latest PR feedback and continues the authorized same-PR implementation. Change “The planned cast spans” to “Our figurines span”; delete the standalone battery sentence; use curly apostrophes in product copy and replace the em dash with a comma. Slightly reduce mobile typography while retaining desktop readability, verify tablet portrait/landscape, and try the existing faint background asset without restoring old hero content. Retain the headline provisionally: “A world of imagination. A conversation away.” was introduced by the implementing Agent in commit 37bee6a, not quoted from Henry’s proposal, and remains a discussion item rather than a finalized brand strapline.

Repair the transparent photo masks to remove residual background outlines while preserving source photograph RGB/product details; inspect white and tinted composites, final page and responsive optimized images. Keep the supplied originals. ICO report sentence/location remain agreed but require a verified public report URL. No merge or production deployment. Verification: source lint, existing tests/build/TypeScript, copy assertions and browser checks at mobile/tablet/desktop widths; screenshots outside the worktree. Record final results in the PR.


Implementation checks: the two PNGs retain their original dimensions and exactly the previous/source-crop RGB values (0 changed RGB channel values); only alpha changed. Removed low-confidence edge pixels, contracted the foreground mask and added a narrow antialias transition; the Stage’s geometric outside edge also uses a manually traced rounded outline mask. White/tinted composites inspected locally: the broad grey fringe is removed, pads/buttons/four characters remain intact. No product pixels were synthesized. Mobile body 18→17px, lead 20→18px, h1 36→32px; tablet typography steps up at 768px, with the headline 40px below the 1024px desktop breakpoint. Existing background photo is scoped to the homepage behind a 94% white overlay; it is a trial pending page inspection.

`pnpm test` 11/11, `pnpm exec eslint src`, `pnpm build` (including TypeScript) and `git diff --check` passed. Current browser acceptance is BLOCKED: the computer-use tool reports “Local browser use is disabled in Work settings”. User has been asked to enable Browser use. Current mobile/tablet/desktop layout, signup clearance, optimized-image appearance and the background trial are not yet visually verified; previous screenshots do not cover this revision. Keep PR Draft until that acceptance is completed. No production deploy or merge.
