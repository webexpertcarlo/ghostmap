# Ghost Map Pro — User Guide

**Version:** 9.13.3  
**Who this is for:** Everyday users (no coding needed)  
**What this tool does:** Finds business leads from Google Maps, collects websites and emails, then exports them to a spreadsheet.

---

## 1. Install (one-time)

1. Open Google Chrome.
2. Go to: `chrome://extensions`
3. Turn **Developer mode** ON (top-right switch).
4. Click **Load unpacked**.
5. Select the `extension` folder from this project.
6. Pin **Ghost Map Pro** from the puzzle-piece icon in Chrome.
7. Open Google Maps in a tab: [https://www.google.com/maps](https://www.google.com/maps)
8. Click the Ghost Map icon → open the **side panel**.

If you already installed an older version: click **Reload** on Ghost Map Pro on the extensions page.

---

## 2. The big picture (3 steps)

Ghost Map works in three phases. Use them in order:

| Phase | Name | What it does |
|-------|------|----------------|
| 1 | **Discover** | Find businesses (Area Search or Monitor Maps) |
| 2 | **Extract** | Visit websites and collect emails |
| 3 | **Export** | Download CSV / Markdown file |

Top of the side panel shows:

- **Businesses Found** — total leads saved
- **emails / websites / phones** — how many have each field

---

## 3. Important idea: counts are different things

This avoids confusion:

| Number you see | Meaning |
|----------------|---------|
| Area Search “leads” / Businesses Found | Unique businesses saved |
| Websites | How many of those have a website URL |
| Email progress `12 / 19` | Progress of **this email run** (websites queued), not the Area Search lead total |

Example: Area Search finds **100** businesses, **70** have websites → email extraction queues about **70**, not 100.

---

## 4. Before you start — checklist

- [ ] Chrome is open
- [ ] Ghost Map Pro is installed and enabled
- [ ] Side panel is open
- [ ] You know your **city** and **keywords** (e.g. `roofing`, `plumber`)
- [ ] Decide: **new area** (clear old data) or **add to existing** data

### Starting a brand-new area (recommended)

If you finished Melbourne and next want Sydney (or any new city):

1. Go to **Export** phase (or use the trash icon at the top).
2. Click **Reset All** (or the red reset button in the header).
3. Confirm. This clears saved businesses so new results are clean.
4. Then run Area Search for the new city.

If you **do not** reset, new Area Search results are **added** to old ones. Email extraction will also include earlier businesses that still need emails — totals can look “bigger” than this search alone.

---

## 5. Phase 1 — Discover

### 5.1 Area Search (best for whole cities / regions)

**What it is:** Automatically searches Google Maps on a grid around a city for your keywords and saves businesses.

**How to run it**

1. Open side panel → phase **Discover**.
2. Click **Launch Area Search**.
3. Fill in:

| Field | What to enter | Tips |
|-------|----------------|------|
| **City / Location** | City name, e.g. `Melbourne`, `Modena` | Use a real city name |
| **Radius (km)** | How far around the city to cover | Larger = more coverage, longer time |
| **Keywords** | One search phrase per line | e.g. `roofing service` then next line `plumber` |
| **Turbo Mode** | ON/OFF | ON is faster (opens several Maps windows in parallel) |
| **Parallel Tabs** | 4–12 | Start with **8**. Lower if Chrome becomes slow |
| **Grid Spacing** | 5–15 km | **5 km** = denser / more thorough; **15 km** = faster / may miss some |

4. Check the **Search Estimate** (grid points, time).
5. Click **Start Turbo Search**.
6. Wait until it finishes (or click **Pause** / **Cancel** if needed).
7. Watch **Businesses Found** go up in the side panel.

**During Area Search**

- Small Maps helper windows may open briefly. They should stay in the background so you can keep working.
- If Chrome feels overloaded, lower **Parallel Tabs** next time (try 4 or 6).

**When Area Search is done**

- Note your total businesses.
- Optional: click **Extract Websites** if many listings have no website yet.
- Click **Continue to Extract** when ready for emails.

### 5.2 Monitor Google Maps (manual scrolling)

**What it is:** You search/scroll Maps yourself; Ghost Map captures listings as they appear.

**How to use**

1. Open Google Maps and search (e.g. `dentists in Austin`).
2. In Ghost Map, click **Start Monitoring**.
3. Scroll the results list slowly.
4. Click **Stop** when finished.

Use this for a small area or a single Maps search. Use **Area Search** for full-city coverage.

### 5.3 Extract Websites

**What it is:** Opens business Google Maps pages to find missing website links.

**When to use:** After Discover, if many businesses have phone/address but no website.

| Button | Meaning |
|--------|---------|
| **Extract Websites** | Start finding websites |
| **Pause** | Pause / resume website extraction |

Badge number = how many still need a website.

### 5.4 Import file (optional)

Under Discover you can **Browse** a `.txt` / `.csv` / `.md` file of URLs and **Add to Discovery**. Use this only if you already have a list of Maps/business URLs.

---

## 6. Phase 2 — Extract (emails)

1. Click **Extract** at the top (or **Continue to Extract**).
2. Read the progress line: it shows **this run’s website queue**, plus DB totals (leads / with website).
3. Click **Start Extraction**.

| Control | What it does |
|---------|----------------|
| **Start Extraction** | Begin (or resume if paused) |
| **Pause** | Pause the queue; button becomes **Resume** |
| **Resume** | Continue from where you left off |
| Progress `done / total` | Finished vs queued for **this run** |
| Current line | Which business is being processed, or “Paused — N left” |
| **Retry Failed** | Re-try businesses that failed earlier |

### Pause tips

- Pause keeps jobs in the queue — it does **not** delete progress.
- After Pause, click **Resume** (or Start again) to continue.
- Status should say **Paused**, not look fully Idle.

### Email progress tips

- Bar advances for successes **and** permanent failures (so it doesn’t look “stuck” while work continues).
- Not every website has a public email — that is normal.
- Some sites block scrapers; those may show as failed — use **Retry Failed** later if needed.

---

## 7. Phase 3 — Export

1. Open **Export**.
2. Check preview: Total / With Email / With Website / With Phone.
3. Download:

| Button | Output |
|--------|--------|
| **Export CSV** | Spreadsheet (Excel / Google Sheets) |
| **Export MD** | Markdown text file |
| **View Failed** | See failed / problem rows |
| **Reset All** | Wipe all saved data (for a new area) |

---

## 8. Settings (gear icon)

Open the **gear** in the header.

### General tab

| Setting | Meaning | Suggested |
|---------|---------|-----------|
| **Requests per Minute** | How fast email requests run | **10–15** (safer). Higher = faster but more blocks |
| **Max Concurrent Requests** | How many sites at once | **3–5**. Max allowed is 5 |
| **Request Timeout (seconds)** | How long to wait on a slow site | **30** is fine |

Click **Save Settings** after changes.

### Opportuni tab (optional cloud sync)

Only if you use Opportuni. Default is **OFF**. Do not enable unless you know you need it.

---

## 9. Header buttons

| Button | Purpose |
|--------|---------|
| Status (Idle / Extracting / Paused…) | Current activity |
| Gear | Settings |
| Red trash (header) | **Reset All Data** — same idea as Export → Reset All |

---

## 10. Recommended workflows

### A) Full city lead list (most common)

1. **Reset All** (if starting a new city).
2. **Area Search** → city + keywords + radius.
3. Wait until finished.
4. **Extract Websites** (if many missing sites).
5. **Extract** → **Start Extraction** → wait / pause-resume as needed.
6. **Export CSV**.
7. For the next city: **Reset All**, then repeat from step 2.

### B) Quick single Maps search

1. Search on Google Maps yourself.
2. **Start Monitoring** → scroll results → **Stop**.
3. Extract websites/emails → Export.

### C) Same city, new keyword (keep old data)

1. Do **not** reset.
2. Run Area Search again with new keywords.
3. New businesses are added; duplicates are skipped.
4. Extract emails again (only pending websites are queued).

### D) Same city, clean restart

1. **Reset All**.
2. Run Area Search again from scratch.

---

## 11. Understanding progress & “stuck”

| What you see | What it usually means |
|--------------|------------------------|
| Numbers not moving for a bit | Slow website or waiting between requests — wait 1–2 minutes |
| Paused | Click **Resume** |
| Failed count rising | Some sites blocked/no email — normal; use Retry later |
| Email total ≠ Area Search total | Only businesses **with websites** are emailed |
| Chrome feels slow | Lower Parallel Tabs / Concurrent Requests |

---

## 12. Storage bar

Bottom of the panel shows how much browser storage Ghost Map is using. Click **Details** for more. If storage is nearly full, export your CSV, then **Reset All**.

---

## 13. Troubleshooting

| Problem | What to try |
|---------|-------------|
| Extension missing | `chrome://extensions` → Load unpacked → `extension` folder |
| Nothing captured | Open a Google Maps tab; for Monitor, click Start then scroll |
| Area Search finds 0 | Check city spelling; try a larger radius; try simpler keywords |
| Email won’t start | Run **Extract Websites** first; check that websites exist |
| Pause won’t continue | Click **Resume** (or Start Extraction again) |
| Want a new city only | **Reset All** before the new Area Search |
| Too many popups / slow PC | Lower Parallel Tabs (Area Search) and Max Concurrent (Settings) |

---

## 14. Privacy & good practice

- Use for legitimate business research / outreach you are allowed to do.
- Respect local marketing and privacy rules.
- Prefer safer speed settings to reduce blocks from Google or websites.
- Export and back up CSV files you care about before Reset All.

---

## 15. Quick glossary

| Term | Plain meaning |
|------|----------------|
| Lead / Business | One company saved from Maps |
| Keyword | What you type into Maps search |
| Radius | How far around the city to search |
| Grid | Map broken into points so the whole area is covered |
| Turbo | Faster Area Search using multiple windows |
| Queue | List of websites waiting for email extraction |
| CSV | Spreadsheet file you can open in Excel |

---

## 16. Install reminder

Load / reload this folder in Chrome:

`extension/`

See also `extension/INSTALL.txt` for short install steps.
