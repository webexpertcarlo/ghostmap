# Changelog

Notable changes to Ghost Map Pro. Format based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning follows
[SemVer](https://semver.org/) (in sync with `manifest.json`).

## [9.12.13] — Reliability & hardening (2026-06 → 2026-07)

A large reliability wave landed under this version, focused on robustness rather than
new user-facing features. Full test suite green (136/136).

### Reliability
- **Job queue & concurrency** — the background circuit breaker now auto-recovers, and
  queue state is persisted atomically (no lost or duplicated work across
  service-worker restarts).
- **Manifest V3 lifecycle** — the service-worker keepalive is tied to a confirmed
  start, orphaned popups are bound to cleanup, and configuration singletons get an
  authoritative reconfigure. Tab cleanup prunes its trackers only on a confirmed
  close, so long area-search runs no longer leak state.
- **Anti-detection backoff** — the email-discovery circuit breaker uses exponential
  backoff (×2, capped at ×16), matching the core `CircuitBreaker` behavior.

### Data integrity
- **Enrichment merge** — social links now merge as a set union instead of overwriting,
  enrichment falls back to `null` without resurrecting stale values, and the post-save
  drain re-enqueues on failure so no record is silently dropped.
- **Field extraction** — ratings are emitted only on unambiguous corroboration, and
  optional fields no longer trip the extraction breaker.

### Export
- **CSV / Markdown safety** — a single shared wrapper makes exported cells
  formula-injection safe (values starting with `=`, `+`, `-`, `@` are neutralized).
- **JSON export** now includes `scrapeStatus`, and rating values are guarded to a
  single decimal.

## [9.12.x] — Bug-hunt hardening (2026-05)

- Codebase-wide fix for falsy option defaults (`||` → `??`) so legitimate `0`, `""`
  and `false` values are no longer discarded — across the fingerprint generator,
  autoscaler, session pool, job queue and statistics.
- Email extractor false-positive fix (image-size pattern), idempotent canonical URL
  keys, null-safe message routing, and a `robots.txt` regex-escape fix.
- Area-search address parser anchored on the postcode first, for more reliable
  city/province splitting.

## [9.8.0] – [9.12.0] — Deep extraction & area search (2026-05)

- **Zero-tab field extraction** — 30+ fields per business read straight from the page
  state (`APP_INITIALIZATION_STATE`) plus the JSPB payloads Maps streams while you
  scroll, growing the CSV to **49 structured columns** without opening a tab per
  business.
- **Detail enrichment** — per-place deep fetch enabled by default, with a canonical
  URL key and a retry queue.
- **Area search** — sweep a city/area grid and enrich results in popup tabs.

---

For older history, see the commit log.
