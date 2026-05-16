# Analytics Anonymity — Verification & Sign-off

LoveLust runs **two-tier analytics** (see premortem failure mode #6):

| Tier | Tool                                          | Legal basis                  | When it runs                         |
| ---- | --------------------------------------------- | ---------------------------- | ------------------------------------ |
| 1    | Aptabase (self-hosted, `analytics.end.works`) | Exempt anonymous measurement | By default; honors opt-out (Decline) |
| 2    | Google Analytics                              | Consent                      | Only after Accept                    |

Tier 1's exempt basis **only holds if no personal data ever reaches Aptabase.**
This document is the evidence pack the DPO signs against — not a promise.

---

## A. Code side — closed and enforced

- Only two events exist: `page`, `store_click`. Verify:
  `grep -rn 'track("' hooks/`
- All events pass through `lib/analytics.ts`:
  - event name must be in `ALLOWED_EVENTS`
  - props filtered to the `ALLOWED_PROP_KEYS` allowlist
    (`page`, `platform`, `utm_source/medium/campaign/term/content`)
  - non-string / empty values dropped; values capped at 120 chars
- Any new field is a deliberate allowlist edit, reviewed against this doc —
  PII cannot leak by accident.
- Regression test: `lib/analytics.test.ts` (asserts allowlist, PII drop,
  no identifier-shaped keys). Runs in CI via `yarn test`.

UTM values are our own printed campaign tags (`pride`, `erospain`, …), not
user input.

**Sign-off A:** ☐ Code review confirms only allowlisted events/props ship.

---

## B. Browser side — reproducible (≈5 min, anyone)

1. DevTools → Network → filter `analytics.end.works`.
2. Trigger a page view + a store badge/button click.
3. Inspect the POST body. Confirm it contains ONLY: event name, the
   allowlisted props, and Aptabase auto-fields (OS, locale, country,
   ephemeral `sessionId`, app/sdk version). **No** `userId`, no email, no
   raw IP, no cookie header.
4. DevTools → Application → Cookies / Local / Session Storage for the site.
   Confirm Aptabase persists **nothing**. (First-party functional keys
   `ll_lng`, `ll_analytics_consent`, `utm_params` are not analytics
   identifiers — note them in the RoPA as functional state.)

**Sign-off B:** ☐ Network trace + storage screenshot captured and attached.

---

## C. Aptabase model — verify against the running version

Aptabase is open-source. Confirm the deployed version:

- sets no cookies and no persistent device/user identifier;
- derives `sessionId` from `hash(IP + user-agent + daily-rotating salt)`;
- the salt rotates daily → sessions cannot be linked across days or to a
  person; raw IP is never stored.

**Sign-off C:** ☐ Deployed Aptabase version + its session/salt code reviewed.

---

## D. Self-hosted server `analytics.end.works` — infra-confirmed

Self-hosted by end.works (same org) → **no third-party transfer** (a plus
over SaaS GA). Confirm on the instance:

- DB schema: no populated raw-IP column; only derived country/region.
- Data retention policy defined and enforced.
- Analytics data not joined with any other dataset; access-controlled.
- Recorded in the RoPA as internal processing.

**Sign-off D:** ☐ DB schema + retention + access controls verified by infra.

---

## E. Legal close-out

- Map A–D evidence to the AEPD / EDPB anonymous-measurement exemption
  criteria.
- **DPIA** completed — required given the sexual-health context.
- Privacy Policy describes Tier 1 (anonymous, exempt, opt-out) and Tier 2
  (consent) accurately.

**Sign-off E (DPO):** ☐ ********\_\_\_\_******** Date: ****\_\_****

---

> Tier 1 must not go live for the campaign until A–E are all signed.
> This is a pre-launch gate, not a code change.
