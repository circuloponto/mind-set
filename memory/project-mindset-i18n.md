---
name: project-mindset-i18n
description: The real project is MIND-SET (supported employment / mental health), and the i18n locale files are the source of truth for page copy
metadata:
  type: project
---

This site is the **MIND-SET** Erasmus+ project (KA210-VET) — strengthening Supported Employment through mental-health-informed approaches. Coordinator: RUMO (Portugal); partners CONSULTIS (Portugal) and HAO (Romania).

Several page components were originally scaffolded with **stale hardcoded English placeholder content describing a different, earlier project ("BRIDGE" / disability caregivers)**. The client-supplied real copy (EN + PT) lives in `src/i18n/locales/en.json` and `pt.json` and is the source of truth.

**Why:** When a page "isn't translated," the cause is usually hardcoded English in the JSX instead of `t('...')` calls — not a missing translation. As of 2026-06-11, Results, Partners, News, and Contacts were rewired from hardcoded BRIDGE text to the MIND-SET locale keys.

**How to apply:** Before adding/editing page copy, check the locale JSON for existing keys and wire JSX to `t()`. Don't reintroduce hardcoded strings. The contact page is info-only (no form) per client. See [[coordinator-email-guess]].
