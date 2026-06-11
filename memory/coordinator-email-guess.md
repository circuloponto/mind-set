---
name: coordinator-email-guess
description: The coordinator email geral@rumo.org.pt is an unconfirmed guess, not client-provided
metadata:
  type: project
---

The MIND-SET locale files contain **no project email address**. The previous pages showed a stale fake `info@bridge-project.eu`.

On 2026-06-11 the user chose to "use the coordinator (RUMO) address." Since RUMO's real email wasn't provided, `geral@rumo.org.pt` was used as a **guess** (common PT org pattern) — it is NOT confirmed. It's defined once as `COORDINATOR_EMAIL` in both `src/pages/Contacts/Contacts.jsx` and `src/components/Footer/Footer.jsx`.

**Why:** Avoid presenting unverified contact info as fact.

**How to apply:** When the client confirms the real email, update `COORDINATOR_EMAIL` in both files. The coordinator website (`https://www.rumo.org.pt/`) IS real — it comes from `partners.partner1Website` in the locales. See [[project-mindset-i18n]].
