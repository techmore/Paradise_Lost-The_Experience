# Sidebar / Contextual Resources — Roadmap

## Goal
A toggleable sidebar panel on the reader page that surfaces relevant study resources (lectures, commentary, illustrations, annotations) for the passage currently being read. Stays hidden until the user wants it.

---

## Data Model

```js
// Per-passage resource mapping
const passageResources = {
  // Keyed by book number
  1: [
    {
      // Line range (inclusive)
      startLine: 1,
      endLine: 26,
      label: "The Invocation",
      resources: [
        // Each resource links to external content or internal data
        { type: "lecture",   label: "Yale: Opening Invocation",     href: "https://oyc.yale.edu/english/engl-220/lecture-9?t=0m00s" },
        { type: "lecture",   label: "Hillsdale: Book I Overview",   href: "https://online.hillsdale.edu/courses/promo/paradise-lost" },
        { type: "dore",      label: "View related illustration",    doreId: 53 },
        { type: "criticism", label: "Lewis on Milton's epic intent", href: "https://www.amazon.com/dp/0195003454" },
        { type: "text",      label: "Dartmouth Reading Room",       href: "https://milton.host.dartmouth.edu/reading_room/pl/book_1/text.shtml" },
        { type: "bible",     label: "Genesis 1:1-3",               href: "https://www.biblegateway.com/passage/?search=Genesis+1" }
      ]
    },
    // ... more passages per book
  ]
}
```

---

## Phase 1: Per-Book Sidebar (Quick Win)

Extend the existing `studyLinks` map into a richer sidebar panel. Content changes when the user selects a new book.

### What shows per book

| Book | Key Passages | Yale | Hillsdale | Course Hero | Strier (UChicago) | Dore Plates | Criticism |
|------|-------------|------|-----------|-------------|-------------------|-------------|-----------|
| **I** | Invocations, Satan's first speeches, Pandemonium | L9 | L1 | Bk1 | — | #2-5, #53 | Lewis ch.1-3, Fish ch.1 |
| **II** | Infernal council, Sin & Death, Chaos | L10-11 | L2 | Bk2 | — | #6-10, #51 | Empson ch.1-2 |
| **III** | "Hail holy Light", God & Son, Satan on Sun | L13 | L3 | Bk3 | — | #11-15 | Empson ch.3, Fish ch.2 |
| **IV** | Satan's soliloquy, Eden, Adam & Eve, Gabriel | L12, 14 | L4 | Bk4 | ✓ | #16-19, #49, #52 | Lewis ch.4-5, Fish ch.3 |
| **V** | Eve's dream, Raphael's visit, Abdiel | L15 | L5 | Bk5 | — | #20-22, #24, #54 | Waldock ch.2 |
| **VI** | War in Heaven, Son's intervention | L15 | L5 | Bk6 | — | #23, #25-30, #55-57 | Empson ch.4 |
| **VII** | Creation, six days | L16 | L6 | Bk7 | — | #31-35 | Lewis ch.6, City of God |
| **VIII** | Adam's questions, Raphael's farewell | L16 | L6 | Bk8 | — | #36-40 | Fish ch.4 |
| **IX** | Temptation and Fall | L17-18 | L7-8 | Bk9 | ✓ | #41-45 | Fish ch.5-6, Empson ch.5, Lewis ch.7 |
| **X** | Judgment, Repentance, Michael's prophecy | L19-20 | L9 | Bk10 | ✓ | #46-48, #50 | Waldock ch.3, Fish ch.7 |

### Implementation

1. **HTML**: Add a sidebar toggle button on the reader page, and a slide-out panel from the right edge.
2. **CSS**: Panel slides in/out with `transform: translateX()` + `transition`.
3. **JS**: On book change (`bookSelect` event), populate sidebar with the resources for that book.

### Phase 1 Files
- `read.html` — Add sidebar toggle button + sidebar panel
- `css/style.css` — Add sidebar styles
- `js/reader.js` — Add sidebar data and rendering logic

---

## Phase 2: Per-Passage Context (The Real Deal)

Resources change dynamically as the user scrolls through the poem. Uses Intersection Observer to detect which passage is in view.

### Available Lecture Resources

| Lecture Series | Instructor | Coverage | Granularity | Per-Passage? |
|---------------|-----------|----------|-------------|-------------|
| **Yale ENGL 220** (Lectures 9-20) | John Rogers | Full poem, 12 x ~50min | Per-book + rough timestamps | Yes |
| **Hillsdale College** (9 lectures) | Stephen Smith | Full poem, 9 x ~40min | See mapping below (L6 covers Bks 6-8) | Per-book, except L6 covers 3 books |
| **Course Hero** (10 videos) | Course Hero | 10 x ~10min book summaries | Per-book | Yes — one per book |
| **Richard Strier (UChicago)** | Richard Strier | Single 78min lecture | Whole poem at once | One general entry (covers Bks I, III, IV, VII, IX, X) |
| **Benjamin McEvoy** | McEvoy | Single ~1hr45min intro | Whole poem at once | One general entry |

### Hillsdale — Confirmed Book Mapping

Hillsdale's 9 lessons (source: `online.hillsdale.edu/courses/promo/paradise-lost`):

| Lesson | Books | Title |
|--------|-------|-------|
| L1 | Book 1 | Hell |
| L2 | Book 2 | The Infernal Council |
| L3 | Book 3 | Christ |
| L4 | Book 4 | Eden |
| L5 | Book 5 | Raphael's Warning |
| L6 | Books 6-8 | The War in Heaven |
| L7 | Book 9 (pt 1) | The Fall |
| L8 | Book 10 (pt 1) | Punishment and Repentance |
| L9 | Books 11-12 (our Book X, lines 1098+) | The Beginning |

Note: Hillsdale uses the 12-book edition. L9 (Books 11-12) maps to the end of our Book X (Michael's prophecy). L8 covers the first ~1097 lines of Book X.

### Other Lecture Details

- **Richard Strier**: Single 78-min lecture (`youtube.com/watch?v=K8bx72IV85g`). Covers whole poem. Key topics: the narrator's self-presentation (Books I, III, VII, IX), Eden (Book IV), the Fall (Book IX), the ending (Book X/Books XI-XII).
- **Benjamin McEvoy**: "How to Read Paradise Lost by John Milton" on his YouTube channel (`youtube.com/@benjaminmcevoy`). ~1hr45min. General introductory overview. 134K views.
- **Course Hero**: Book-by-book playlist at `youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK`

### Key Passages to Map

Each passage row shows: *passage description — resources*

**Book I** (~822 lines)
```
1-26    The Invocation          — Yale 9 (0:00) / Hillsdale L1 / Course Hero Bk1 — Dore #53 — Lewis ch.1, Bible: Gen 1:1
27-83   Satan's first speech    — Yale 9 (5:00) / Hillsdale L1 — Dore #4 — Lewis ch.2
84-124  "Better to reign"       — Yale 9 (12:00) / Hillsdale L1 — Dore #53 — Lewis ch.2, Fish ch.1
125-191 Satan rallies legions   — Yale 9 (18:00) / Hillsdale L1 — Dore #5
192-375 Catalog of fallen gods  — Yale 9 (25:00) / Hillsdale L1
376-522 Building Pandemonium    — Yale 9 (32:00) / Hillsdale L1 — Dore #3
523-669 Council assembles       — Yale 9 (38:00) / Hillsdale L1 — Dore #2
670-822 End of Book I           — Yale 9 (42:00) / Hillsdale L1
```

**Book II** (~1056 lines)
```
1-55    Satan enthroned          — Yale 10 (0:00) / Hillsdale L2 / Course Hero Bk2 — Dore #6
56-228  Moloch, Belial, Mammon   — Yale 10 (5:00) / Hillsdale L2 — Empson ch.1-2
229-409 Beelzebub's proposal    — Yale 10 (15:00) / Hillsdale L2 — Dore #10
410-473 Satan volunteers        — Yale 10 (22:00) / Hillsdale L2
474-566 Sin and Death           — Yale 10 (28:00) / Hillsdale L2 — Dore #7, Dore #51
567-683 Chaos journey           — Yale 10 (35:00) / Hillsdale L2 — Dore #8, Dore #9
684-1056 End of Book II         — Yale 10 (42:00) / Hillsdale L2
```

**Book III** (~743 lines)
```
1-55    "Hail holy Light"        — Yale 13 (0:00) / Hillsdale L3 / Course Hero Bk3 — Dore #11
56-266  God & Son dialogue       — Yale 13 (5:00) / Hillsdale L3 — Empson ch.3
267-343 Son offers himself      — Yale 13 (20:00) / Hillsdale L3
344-409 Satan's universe journey — Yale 13 (28:00) / Hillsdale L3
410-742 Satan on the Sun        — Yale 13 (35:00) / Hillsdale L3 — Dore #12-15
```

**Book IV** (~1015 lines)
```
1-130   Satan's soliloquy        — Yale 12/14 (0:00) / Hillsdale L4 / Course Hero Bk4 — Dore #52
131-286 Satan in Eden            — Yale 14 (5:00) / Hillsdale L4 — Dore #16
287-355 Adam and Eve described   — Yale 14 (12:00) / Hillsdale L4 — Dore #17-18
356-511 Adam and Eve's dialogue  — Yale 14 (20:00) / Hillsdale L4
512-775 Gabriel's guard          — Yale 14 (30:00) / Hillsdale L4 — Dore #49
776-1015 Confrontation           — Yale 14 (38:00) / Hillsdale L4
```

**Book V** (~907 lines)
```
1-93    Eve's dream              — Yale 15 (0:00) / Hillsdale L5 / Course Hero Bk5 — Dore #21
94-247  Morning, Raphael arrives — Yale 15 (8:00) / Hillsdale L5 — Dore #22
248-433 Raphael's warning        — Yale 15 (20:00) / Hillsdale L5 — Dore #20
434-907 Abdiel's defiance        — Yale 15 (35:00) / Hillsdale L5 — Dore #54
```

**Book VI** (~918 lines)
```
1-196   First battle day         — Yale 15 (45:00) / Hillsdale L6 / Course Hero Bk6 — Dore #26-27, #55
197-391 Second day, artillery    — Yale 15 (55:00) / Hillsdale L6 — Dore #56
392-528 Third day, Son rides     — Yale 15 (62:00) / Hillsdale L6 — Dore #28, #30, #57
529-918 Rebels routed            — Yale 15 (70:00) / Hillsdale L6 — Dore #29, #1
```

**Book VII** (~640 lines)
```
1-39    Urania invocation        — Yale 16 (0:00) / Hillsdale L6 / Course Hero Bk7
133-302 Creation Days 1-3        — Yale 16 (5:00) / Hillsdale L6 — Dore #31-33
303-640 Creation Days 4-6        — Yale 16 (15:00) / Hillsdale L6 — Dore #34-35
```

**Book VIII** (~653 lines)
```
1-178   Adam questions cosmos    — Yale 16 (25:00) / Hillsdale L6 / Course Hero Bk8 — Dore #37
179-297 Raphael on astronomy     — Yale 16 (35:00) / Hillsdale L6
298-451 Adam's creation          — Yale 16 (42:00) / Hillsdale L6 — Dore #38
452-653 Adam & Eve's union       — Yale 16 (50:00) / Hillsdale L6 — Dore #39-40
```

**Book IX** (~1189 lines)
```
1-47    Invocation               — Yale 17 (0:00) / Hillsdale L7 / Course Hero Bk9
48-191  Satan approaches Eden    — Yale 17 (5:00) / Hillsdale L7 — Dore #41
192-384 Eve works apart          — Yale 17 (15:00) / Hillsdale L7
385-493 Adam and Eve separate    — Yale 17 (25:00) / Hillsdale L7
494-613 Serpent tempts Eve       — Yale 17 (32:00) / Hillsdale L7 — Dore #43
614-655 Eve eats                 — Yale 17 (40:00) / Hillsdale L7 — Dore #42
656-833 Eve tempts Adam          — Yale 17 (45:00) / Hillsdale L7
834-889 Adam eats                — Yale 17 (52:00) / Hillsdale L7 — Dore #44
890-1189 Shame and guilt         — Yale 18 (0:00) / Hillsdale L8 — Dore #45
```

**Book X** (~1540 lines)
```
1-228   God's judgment           — Yale 19 (0:00) / Hillsdale L8 / Course Hero Bk10
229-312 Son judges Adam & Eve    — Yale 19 (8:00) / Hillsdale L8 — Dore #46
313-409 Sin and Death's approach — Yale 19 (18:00) / Hillsdale L8 — Dore #47
410-577 Satan in Hell            — Yale 19 (28:00) / Hillsdale L8
578-720 Adam laments             — Yale 19 (35:00) / Hillsdale L8
721-863 Eve repents              — Yale 19 (45:00) / Hillsdale L8
864-1097 Reconciliation          — Yale 19 (55:00) / Hillsdale L8
1098-1540 Michael's prophecy     — Yale 20 (0:00) / Hillsdale L9 — Dore #48, Dore #50
```

### Lecture URLs Appendix

| Series | Book | URL |
|--------|------|-----|
| Yale | Bk I | `https://oyc.yale.edu/english/engl-220/lecture-9` |
| Yale | Bk II | `https://oyc.yale.edu/english/engl-220/lecture-10` |
| Yale | Bk III | `https://oyc.yale.edu/english/engl-220/lecture-13` |
| Yale | Bk IV | `https://oyc.yale.edu/english/engl-220/lecture-14` |
| Yale | Bks V-VI | `https://oyc.yale.edu/english/engl-220/lecture-15` |
| Yale | Bks VII-VIII | `https://oyc.yale.edu/english/engl-220/lecture-16` |
| Yale | Bk IX | `https://oyc.yale.edu/english/engl-220/lecture-17` |
| Yale | Bk IX-X (2) | `https://oyc.yale.edu/english/engl-220/lecture-18` |
| Yale | Bks XI-XII | `https://oyc.yale.edu/english/engl-220/lecture-19` |
| Yale | Bks XI-XII (2) | `https://oyc.yale.edu/english/engl-220/lecture-20` |
| Hillsdale | All 9 lectures | `https://online.hillsdale.edu/courses/promo/paradise-lost` |
| Strier | Whole poem | `https://www.youtube.com/watch?v=K8bx72IV85g` |
| McEvoy | Whole poem | `https://www.youtube.com/@benjaminmcevoy` (search "How to Read Paradise Lost") |
| Course Hero | Bks 1-10 | `https://www.youtube.com/playlist?list=PLs7fzoKfB1MgaCjsfAR6Ui2Jen0lM2-lK` |

### Types of Resources Per Passage

| Type | Icon | What It Links To |
|------|------|-----------------|
| `lecture` | 🎬 | Timestamped video — **Yale** (Rogers), **Hillsdale** (Smith), **Strier** (UChicago), **Course Hero** summaries |
| `dore` | 🖼 | Opens the lightbox to the relevant illustration |
| `criticism` | 📖 | Amazon link to the critical work (Lewis, Empson, Fish, Waldock) + which chapter |
| `text` | 📄 | Dartmouth Reading Room for that book |
| `bible` | ✝ | Bible Gateway cross-reference |
| `download` | ⬇ | Direct link to PDF/EPUB of the critical work in Supplemental |
| `note` | 💡 | Original explanatory note written for the sidebar |
| `intro` | 🎥 | Benjamin McEvoy's general intro video (only at top level, not per-passage) |

### Implementation

1. **Intersection Observer**: Watch which `.read-line` elements are in the viewport. Determine the current line range. Map to the closest passage resource.
2. **Sidebar update**: When the active passage changes, re-render the sidebar content.
3. **Performance**: Debounce the observer, cache the passage data.

### Phase 2 Files
- `js/sidebar.js` (new) — Sidebar component, passage data, observer logic
- `js/reader.js` — Integrate sidebar initialization
- `css/style.css` — Additional sidebar styles for resource types

---

## Phase 3: Interactive Features

### Reading Position Persistence
- Save current book + approximate line to `localStorage`
- On return, offer "Resume where you left off?" or auto-restore

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `s` | Toggle sidebar |
| `n` | Next passage resource |
| `←` / `→` | Previous / next book |
| `Esc` | Close sidebar |

### Go-to-Line
- Quick input field in the sidebar header to jump to any line number
- Scroll and highlight the target line

### Passage Bookmarks
- Allow users to bookmark passages
- Stored in `localStorage`
- Displayed in the sidebar as "Your bookmarks" section

---

## UI Design

### Layout
```
+-----------------------------------------------+
| [Read header: Book I · 822 lines] [##] [T↑]  |
+-----------------------------------------------+
|                                        |      |
|   Poem text...                         | SIDE |
|   Poem text...                         | BAR  |
|   [Dore illustration]                  |      |
|   Poem text...                         | [res |
|                                        | ource|
|                                        | card]|
|                                        |      |
+-----------------------------------------------+
| [Footer]                                      |
+-----------------------------------------------+
```

### Sidebar Specs
- **Width**: 320px on desktop, full-width overlay on mobile
- **Position**: Fixed right side, below the sticky header
- **Toggle**: A floating tab/handle on the right edge of the viewport, always visible
- **Transition**: `transform: translateX(0)` for open, `translateX(100%)` for closed
- **Scroll**: Independently scrollable within the sidebar
- **Z-index**: Above the poem content but below the lightbox (z-index: 100-199)

### Resource Card Design
```
┌─────────────────────────────┐
│ 🎬 Yale Lecture 9          │
│ Invocation (Book I)         │
│ [▶ Watch timestamp 0:00]    │
├─────────────────────────────┤
│ 📖 Lewis, Preface ch.1-3   │
│ On Milton's epic ambition   │
│ [Buy on Amazon →]           │
├─────────────────────────────┤
│ 🖼 Dore illustration #4     │
│ Satan on the burning lake   │
│ [View →]                    │
└─────────────────────────────┘
```

### States

| State | Behavior |
|-------|----------|
| **Closed** | Tab handle visible on right edge. Full reading width. |
| **Open (desktop)** | Panel slides out. Poem content shrinks to fill remaining space (using CSS grid or flex). |
| **Open (mobile <768px)** | Panel overlays the poem content with a semi-transparent backdrop. Close via backdrop click or ✕ button. |
| **No resources** | Panel shows a simple "No resources for this passage yet" message. |

---

## Implementation Order

1. **Phase 1** — Per-book sidebar (this week)
   - Add HTML skeleton to `read.html` (sidebar panel + toggle button)
   - Add CSS (panel, toggle, transitions, responsive)
   - Extend `reader.js` to populate sidebar from per-book resource data

2. **Phase 2** — Per-passage context (next week)
   - Build `js/sidebar.js` with the full passage resource map
   - Implement Intersection Observer
   - Wire up Dore lightbook integration (click resource → open illustration)
   - Wire up all external links

3. **Phase 3** — Polish (as needed)
   - localStorage for reading position
   - Keyboard shortcuts
   - Go-to-line
   - Bookmarks
   - Analytics / refinement of passage boundaries

---

## Appendix: Full Resource Map for Phase 1 (Per-Book)

```js
// This extends the existing studyLinks in reader.js
const sidebarBookResources = {
  1: {
    lectures: [
      { label: "Yale: Book I (Prof. John Rogers)", href: "https://oyc.yale.edu/english/engl-220/lecture-9" },
      { label: "Hillsdale: Lecture 1", href: "https://online.hillsdale.edu/courses/promo/paradise-lost" },
    ],
    criticism: [
      { label: "C.S. Lewis — A Preface to Paradise Lost (Ch.1-3)", href: "https://www.amazon.com/dp/0195003454", download: "Paradise_Lost_Supplemental/A%20Preface%20to%20Paradise%20Lost%20(C.%20S.%20Lewis)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).epub" },
      { label: "Stanley Fish — Surprised by Sin (Ch.1)", href: "https://www.amazon.com/dp/067485747X", download: "Paradise_Lost_Supplemental/Surprised%20by%20sin%20%20the%20reader%20in%20Paradise%20lost%20(Fish%2C%20Stanley%20Eugene)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf" },
    ],
    text: [
      { label: "Dartmouth Reading Room: Book I", href: "https://milton.host.dartmouth.edu/reading_room/pl/book_1/text.shtml" },
    ],
    dore: [53, 4, 5, 3, 2], // Dore IDs for this book
  },
  // ... same structure for books 2-10
};
```

### Download Links for Supplemental Books

These map the `download` field above to actual GitHub raw URLs:

| Book | Download URL |
|------|-------------|
| C.S. Lewis — A Preface to Paradise Lost | `https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/Paradise_Lost_Supplemental/A%20Preface%20to%20Paradise%20Lost%20(C.%20S.%20Lewis)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).epub` |
| Same — PDF alternative | `https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/Paradise_Lost_Supplemental/A%20Preface%20To%20Paradise%20Lost%20-%20Being%20The%20Ballard%20Matthews%20Lectures%20Delivered%20At%20University%20College%2C%20North%20Wales%2C%201941%20(Author%20Unknown)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf` |
| William Empson — Milton's God | `https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/Paradise_Lost_Supplemental/Miltons%20God%20(William%20Empson)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf` |
| Stanley Fish — Surprised by Sin | `https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/Paradise_Lost_Supplemental/Surprised%20by%20sin%20%20the%20reader%20in%20Paradise%20lost%20(Fish%2C%20Stanley%20Eugene)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf` |
| A.J.A. Waldock — Paradise Lost and Its Critics | `https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/Paradise_Lost_Supplemental/Paradise%20lost%20and%20its%20critics%20(Waldock%2C%20A.%20J.%20A.%20(Arthur%20John%20Alfred)%20etc.)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf` |
| Alastair Fowler — Milton: PL (Longman) | `https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/Paradise_Lost_Supplemental/Milton%20Paradise%20Lost%20(John%20Milton%2C%20Alastair%20Fowler)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf` |
| Gordon Teskey — PL (Norton Critical) | `https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/Paradise_Lost_Supplemental/Paradise%20Lost%20(Second%20International%20Student%20Edition)%20(Norton%20Critical%20Editions)%20(John%20Milton)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).pdf` |
| St. Augustine — City of God | `https://github.com/techmore/Paradise_Lost-The_Experience/raw/main/Paradise_Lost_Supplemental/City%20of%20God%20(Penguin%20Classics)%20(St.%20Augustine%20%5BAugustine%2C%20St.%5D)%20(z-library.sk%2C%201lib.sk%2C%20z-lib.sk).epub` |
