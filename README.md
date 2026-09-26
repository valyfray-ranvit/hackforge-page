# HACKFORGE 2026 PAGE
# ⚒️ HACKFORGE 2026 — Event Website

**Built, not prompted.**

The official website for **Hackforge 2026**, FOSS Club MPSTME's first overnight hackathon — a 24-hour sprint for students who want to solve hard problems with real engineering, not surface-level pitches.

Live copy, event data, and design all live in this repo. The site is an editorial, print-inspired single-pager built with React and Vite.

---

## ✨ About Hackforge

Hackathons have started turning into prompting competitions — idea to ChatGPT, refine with Claude, code with AI, deck with AI. Hackforge pushes back on that: no shortcuts, just architecture, clean logic, and actual engineering, forged over one overnight sprint.

The site reflects that ethos directly — its whole visual language borrows from print media (issue numbers, barcodes, event passes, editorial labels) instead of typical "hackathon gradient" design.

---

## 🧱 Tech Stack

- **[React](https://react.dev/)** — component-based UI
- **[Vite](https://vitejs.dev/)** — dev server & build tooling
- **[Fontsource Variable — Tektur](https://fontsource.org/fonts/tektur)** — display typeface
- **Plain CSS (`globals.css`, `variables.css`, `animations.css`)** — no CSS framework, fully custom design system

---

## 📁 Webpage Project Structure

```
hackforge-page/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── assets/                # static assets (event poster, etc.)
└── src/
    ├── main.jsx                # app entry point
    ├── App.jsx                 # page composition / section order
    ├── data/
    │   └── event.js             # single source of truth: dates, fees, tracks, FAQs
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── EventPass.jsx        # ticket-style pass with schedule + stats
    │   ├── AboutSection.jsx     # manifesto / "Built, not prompted."
    │   ├── TracksSection.jsx    # interactive track panels
    │   ├── Timeline.jsx         # run-of-show timeline
    │   ├── PrizeSection.jsx
    │   ├── FAQ.jsx
    │   ├── RegisterCTA.jsx
    │   ├── Footer.jsx
    │   ├── BrandMark.jsx / EditorialLabel.jsx / PosterFrame.jsx / Reveal.jsx
    │   └── graphics/            # inline SVG/graphic components for each track
    └── styles/
        ├── variables.css
        ├── globals.css
        └── animations.css
```

---

## 🖥️ Sections on the Page

| Section | What it shows |
|---|---|
| **Hero** | Event title, tagline ("24 Hours. Real Problems. No Shortcuts."), poster |
| **Event Pass** | Ticket-style card with round dates, judging window, team size, fee, and prize pool |
| **About / Manifesto** | The "Built, not prompted." philosophy behind the event |
| **Tracks** | Interactive panels for the two competition tracks |
| **Timeline** | Run of show — qualifier → overnight hackathon → judging → prizes |
| **Prizes** | Total prize pool across both tracks |
| **FAQ** | Common questions about format, team size, and registration |
| **Register CTA** | Direct link to the official Unstop listing |

### ⚔️ The Two Tracks

- **Track 01 — Intermediate:** Secure & Smart Automation — build dependable, self-operating systems and test them against real-world failure and tampering.
- **Track 02 — Advanced:** Quantitative Systems (Constrained Execution) — logistics, scheduling, and pricing problems solved under strict runtime, memory, and optimization constraints.

---

## 📅 Event Details

All event data (dates, fees, prize pool, registration link) is centralized in [`src/data/event.js`](hackforge-page/src/data/event.js) — update it there and it propagates across the whole site.

| | |
|---|---|
| **Round 1** | Online qualifier — 11 Oct 2026 |
| **Round 2** | Overnight hackathon — 17–18 Oct 2026, 7:00 PM – 3:00 AM, at MPSTME |
| **Judging** | 3:00 PM – 6:00 PM |
| **Team size** | 3 members |
| **Registration fee** | ₹600 per team |
| **Prize pool** | ₹20,000 |
| **Register** | [Unstop listing](https://unstop.com/o/OXEWrDB) |

---

## HACKFORGE 2026
**Think. Build. Forge.**
