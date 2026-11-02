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

- Add a scrollable product introduction below the existing hero and a visible anchor on mobile and desktop. One shared semantic section covers Meet the cast, How it works, Safety by design and What’s in the box. Preserve signup and Safety navigation.
- Explain Stage, its three pads, stories, songs and Spark; expand Zip’s introduction. Text may mention other characters while making clear the full range is planned, without promising Kickstarter availability.
- Publish text first without empty image placeholders. Future imagery shows only the Kickstarter quartet; use real photos or approved renders, avoiding AI-confected product images. Cowboy replacement with T Rex/Julius Caesar and background removal are deferred.
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
- Confirm launch-character names/availability; choose real photos (Guo Yu’s speaker photo preferred), background removal and later Cowboy replacement.
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
- Playwright against the production build on 127.0.0.1:33019: mobile 390×844 and desktop 1440×1000, no horizontal overflow; hero anchor reaches introduction, Safety link reaches /safety/, signup drawer opens and closes. Mobile right padding reserves room for the existing floating signup tab. Screenshots inspected locally at `/tmp/official-web-intro-mobile.png` and `/tmp/official-web-intro-desktop.png` (temporary, not durable PR assets).
- Signup country-list request to existing UAT API failed with ERR_CONNECTION_CLOSED; no form submitted and no claim of end-to-end signup success. No homepage errors before opening the existing drawer; image-preload warnings remain.
- ICO public URL, dashboard analytics, policy-owner signoff and production verification remain unverified. Images are deferred by agreement. No merge or production deployment performed.

Current-head hosted preview and review evidence will be recorded in the PR, avoiding a new documentation-only head after review.
