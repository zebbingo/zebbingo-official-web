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
- Updated after the user’s “没有图片” feedback on 2026-11-02: add the two supplied real photographs in this PR. Place the Kickstarter quartet below Meet the cast and the Stage photograph before the three-pad explanation. Use the supplied real photographs as the source, with backgrounds removed as explicitly requested in the latest feedback. Preserve product appearance and details. Use Next Image responsive delivery, intrinsic dimensions and descriptive alt text. Cowboy replacement remains deferred.
- Use original stories/songs without an unverified count of twelve. Mention a rechargeable battery without an unconfirmed runtime. Parent-app wording stays conservative. Avoid new guaranteed-safety, ICO-approval, certified-compliance or completed-testing claims without evidence.
- Add Henry’s ICO sentence only after verifying a public report URL. Search service returned HTTP 503 during proposal and implementation preparation; no public report URL established. Do not fabricate a link. This dependency does not block homepage text.
- Review existing Safety claims against available implementation/policy evidence. Record unresolved checks rather than silently changing policy commitments.
- Attribution: no identifiable analytics integration in current source. PR #8 proves Vercel preview integration, not enabled analytics. Dashboard access and campaign links remain unverified. Check platform analytics and arrange UTM-tagged inbound links as a follow-up; no tracking SDK in this PR.

## Verification and delivery

Run `pnpm exec tsc --noEmit`, `pnpm exec eslint .`, `pnpm build`, and `node --test tests/*.test.cjs`. Browser checks at mobile and desktop widths cover anchor navigation, readable sections, horizontal overflow, Safety and signup. Store screenshots outside the worktree. Static content/layout changes use browser acceptance checks rather than new implementation-mirroring unit tests.

Create plan-only Draft before implementation, finish verification, then convert the same PR to Ready. Read back current-head Vercel/CI and Codex review. Preserve branch/lane for review; no merge or publication.

## Open dependencies and deferred work

- Public ICO report URL. Sentence: “To develop these principles, we have participated in the ICO’s Regulatory Sandbox. Their report is here.” Place immediately below the Safety subtitle once verified.
- Confirm battery runtime, per-character content counts, included Zip bundle and parent-app controls.
- Safety currently promises 30-day transcript retention, deletion within 24 hours after consent withdrawal, UK hosting, session review and parental controls. Policy/implementation-owner confirmation required before changing these claims.
- Confirm launch-character names/availability; Guo Yu’s better speaker photo can replace the supplied fallback later. Background removal is now in scope; Cowboy replacement remains a follow-up.
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
- ICO public URL, dashboard analytics, policy-owner signoff and production verification remain unverified. The original text-only iteration was updated to include the two supplied product photographs after user feedback. No merge or production deployment performed.

Current-head hosted preview and review evidence will be recorded in the PR, avoiding a new documentation-only head after review.

## Product photos revision

User feedback “没有图片” authorizes adding the supplied figurine and speaker photographs to the same PR. Original JPEGs are publication assets in `public/assets/`; Next Image optimizes delivery without redrawing the products. Browser verification must confirm both photos load, retain aspect ratio and stay clear of the floating signup tab at the five previously checked widths. Photo verification completed: production build, source ESLint, TypeScript and diff check passed. Playwright decoded both photos at widths 390/768/1024/1100/1440; no horizontal overflow, aspect ratios preserved and both image edges at least 15px left of the signup tab. Desktop figurine and mobile speaker screenshots visually inspected; products are fully visible. Static JPEGs are the supplied originals; no new runtime persistence or downloads.

Photo-revision review also identified an implied Zip bundle promise in the inherited “What’s in the box” heading. Renamed it “Zip and the Stage” until actual package contents are confirmed; this preserves the agreed no-bundle-guarantee boundary.

## Background removal revision

The user explicitly requested removal of both figurine and speaker backgrounds before presentation. Background extraction only: transparent PNGs, four original figurines in the same order, speaker pads/buttons and physical details preserved. Inspect the cutouts against the source, verify real alpha transparency and update the same PR. No synthesized product redesign or merge. Built-in imagegen extraction was tried with the prompt “remove only wall and shelf to transparent alpha, preserve all four original figurines, shapes, details and lighting unchanged”; rejected because product details changed. To honor the explicit original-photo/no-AI-confected-product requirement, final assets use macOS Vision foreground instance masks (four figurines, one speaker) with a 3px mask contraction, applied to original JPEG RGB pixels and cropped with transparent margins. Pixel comparison confirms RGB equals the corresponding original source crop exactly. Both PNGs have fully transparent and fully opaque pixels. Originals remain for provenance. Build, TypeScript (via build), source ESLint and diff check passed. Browser assertions at 390/768/1024/1100/1440px passed: both cutouts decode, alpha remains zero in transparent corners after Next Image optimization, no horizontal overflow and image edges clear the signup tab. Desktop/mobile page screenshots visually checked. Final asset dimensions: figurines 3020×1612, speaker 3332×1615.

## Homepage cleanup revision

User explicitly requested removal of duplicate old content. Remove the old coming-soon headline, Cowboy showcase, old promotional paragraphs and old adventure slogan from the rendered homepage. Retain a compact brand header, Safety navigation and signup drawer. New product copy and transparent photographs become the primary page; preserve the existing fragment URL. Verify one h1, one instance of each product section, absence of the old text/Cowboy, images and no overflow at five widths. Verification completed: production build (including TypeScript), source lint and diff check passed. Playwright at 390/768/1024/1100/1440px confirms one h1, four unique section h2 headings, no old headline/promotion/adventure slogan/Cowboy, one brand image, no horizontal overflow, both cutouts decode and new h1 appears within 151px of the top. Header Safety link navigates to /safety/. Desktop/mobile screenshots inspected.
