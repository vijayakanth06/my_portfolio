# Design System: Firecrawl — The Web Data API for AI

**Stitch Project ID:** `1810839805897006409`
**Stitch Screen ID:** `ddc8562feb374bf6b75e7ac8b3e0bd53`
**Source URL:** [firecrawl.dev](https://www.firecrawl.dev/)

---

## 1. Visual Theme & Atmosphere

**Mood:** Technical Precision meets Warm Approachability — a "Brutalist-Lite" developer aesthetic softened by generous whitespace and a single vibrant accent.

The Firecrawl design language communicates **engineering credibility** through a subtle dotted grid overlay, monospaced code blocks, and sharp structural lines, while remaining visually inviting via its warm orange accent and airy, breathable layouts. The overall impression is that of a meticulously organized **technical blueprint** — precise, confident, and purpose-built for developers who value clarity over decoration.

**Key descriptors:** Clean · Grid-mapped · Developer-First · High-Contrast · Precision-Engineered · Warm-Accented · Airy

---

## 2. Color Palette & Roles

### Primary Accent — "Heat Orange"
| Token | Hex | Role |
|---|---|---|
| `--heat-100` | `#FA5D19` | **Brand signature.** Used for primary CTA buttons, the flame logo icon, highlighted keywords ("LLM-ready", "scraping", "80,000+"), submit arrows, link hover states, and the top announcement banner background. This is the single point of warmth in an otherwise cool, neutral palette. |

### Surface & Background — "Blueprint Canvas"
| Token | Hex | Role |
|---|---|---|
| `--background-base` | `#F9F9F9` | **Page canvas.** A barely-there warm gray that sits behind all content, providing a gentle contrast against white cards. Overlaid with a subtle **dotted grid pattern** of faint gray dots at regular intervals, evoking a technical blueprint or graph paper. |
| `--surface` | `#FFFFFF` | **Card and container fills.** Pure white used for elevated content cards, code block containers, navigation bar background, input fields, and the URL search bar. Creates a clean "floating" effect against the gray canvas. |

### Text & Content — "Dark Ink"
| Token | Hex | Role |
|---|---|---|
| `--accent-black` | `#262626` | **Primary text.** A near-black dark gray used for all headings, body copy, navigation labels, and card titles. Provides strong legibility without the harshness of pure `#000000`. |
| `--text-muted` | `#737373` | **Secondary text.** A mid-gray used for subtitles, descriptions, meta labels like "[ 01 / 07 ] · MAIN FEATURES", and placeholder text in inputs. |
| `--text-faint` | `#A3A3A3` | **Tertiary text.** A lighter gray for line numbers in code blocks, disabled states, and very low-priority information. |

### Structural Lines — "Grid Wires"
| Token | Hex | Role |
|---|---|---|
| `--border-faint` | `#EDEDED` | **Primary dividers.** Ultra-subtle hairline borders used to create the grid-based layout structure — separating cards, table rows, testimonial entries, and footer columns. |
| `--border-muted` | `#E6E6E6` | **Secondary dividers.** Slightly more visible borders used for input field strokes, card outlines on hover, and section separators. |

### Interaction States — "Alpha Layers"
| Token | Value | Role |
|---|---|---|
| `--black-alpha-2` | `rgba(0,0,0,0.02)` | **Hover fill.** An almost imperceptible darkening applied to card and button backgrounds on hover, providing tactile feedback without visual disruption. |
| `--black-alpha-7` | `rgba(0,0,0,0.07)` | **Active/pressed fill.** A slightly more visible darkening for active states and pressed buttons. |

---

## 3. Typography Rules

### Font Families
| Purpose | Family | Fallbacks | Character |
|---|---|---|---|
| **UI & Body** | `Suisse` | `ui-sans-serif`, `system-ui`, `sans-serif` | A clean, geometric Swiss-style sans-serif with a modern, industrial character. Slightly narrower letterforms than typical system fonts, giving text a compact, engineered feel. |
| **Code & Technical** | `GeistMono` | `ui-monospace`, `SFMono-Regular`, `monospace` | A modern monospace font used for code snippets, cURL commands, JSON output, and the URL input bar. Clean and highly legible at small sizes. |

### Type Scale & Weights
| Element | Size | Weight | Line Height | Notes |
|---|---|---|---|---|
| **Hero H1** | `60px` | `500` (Medium) | `1.1` | The page's commanding focal point. Specific words highlighted in Heat Orange for emphasis. |
| **Section H2** | `36–40px` | `500` (Medium) | `1.2` | Used for major section headers ("Start scraping today", "Core principles"). |
| **Card H3** | `20–24px` | `500` (Medium) | `1.3` | Feature card titles and sub-section headers. |
| **Body** | `16px` | `400` (Regular) | `1.5` (24px) | Standard paragraph text. Comfortable reading size. |
| **Nav Labels** | `14px` | `450` (Medium) | `1.4` | Navigation items and button text. Slightly tighter. |
| **Code** | `14px` | `400` (Regular) | `1.6` | Monospace code blocks with generous line height for readability. |
| **Meta / Labels** | `12–13px` | `400–500` | `1.4` | Section counters ("[ 01 / 07 ]"), tab labels, badges. Often uses letter-spacing for emphasis. |

### Letter Spacing
- **Headings:** Tight tracking (`-0.02em`) for a dense, impactful feel
- **Body:** Default tracking (`0`) for natural readability
- **Labels/Meta:** Wide tracking (`0.05em–0.1em`) on uppercase section labels for a structured, technical look

---

## 4. Component Stylings

### Buttons
| Variant | Shape | Colors | Behavior |
|---|---|---|---|
| **Primary CTA** | Generously rounded corners (`8–10px` radius), ample horizontal padding (`24–32px`) | Heat Orange (`#FA5D19`) fill, pure white text | Subtle **inset shadow** at the bottom edge creates a tactile 3D "raised" effect. On hover, a slight brightness increase. The standout element on any page. |
| **Secondary** | Same rounded corners (`8px`) | Transparent background with `--border-muted` stroke, dark text (`#262626`) | On hover, fills with `--black-alpha-2` for a gentle highlight. Used for "Learn more" and filter tabs. |
| **Icon Button** (Submit Arrow) | Pill-shaped (`rounded-full`, circular) | Heat Orange fill, white arrow icon | A compact circular trigger, used in the URL search bar. Distinct from rectangular CTAs. |
| **Tab/Pill Toggle** | Rounded (`8px`), compact padding | Active: white background with subtle shadow. Inactive: transparent | Used in the URL search bar for Scrape/Search/Agent/Map/Crawl. Active tab "pops" forward. |

### Cards & Containers
| Element | Corners | Background | Shadow | Borders |
|---|---|---|---|---|
| **Feature Cards** | Subtly rounded (`8px`) | Pure white (`#FFFFFF`) | Whisper-soft multi-layered shadows: `0px 6px 12px -3px rgba(0,0,0,0.04)` — barely perceptible lift | `1px` solid `--border-faint` on all edges |
| **Code Block Cards** | Subtly rounded (`8px`) | Pure white (`#FFFFFF`) with a light gray header bar | Identical soft shadow treatment | `1px` solid `--border-faint` |
| **Testimonial Grid** | Sharp squared-off edges (`0px`) within the grid | Pure white | No individual shadows — relies on the border grid for structure | `1px` solid `--border-faint` dividers creating a table-like grid |
| **URL Search Bar** | Generously rounded (`12px`) outer container | Pure white | Prominent shadow for emphasis: `0px 8px 24px -4px rgba(0,0,0,0.08)` | `1px` solid `--border-muted` |

### Inputs & Forms
| Element | Shape | Style |
|---|---|---|
| **URL Input** | Rounded container (`12px`), full width | White background, subtle border, placeholder text in `--text-muted`. Globe icon prefix. No visible focus ring — relies on shadow emphasis. |
| **Search/Filter Tabs** | Rounded pill toggles (`8px`) | Inline within the URL bar. Active state: white with micro-shadow. Inactive: transparent with dot icons in orange/gray. |

### Navigation Bar
| Property | Value | Notes |
|---|---|---|
| **Position** | Sticky/Fixed top | Persists on scroll |
| **Background** | White (`#FFFFFF`) with potential backdrop-blur | Clean and unobtrusive |
| **Height** | `~64px` | Compact but comfortable |
| **Logo** | Flame icon in Heat Orange + "Firecrawl" in dark bold text | Brand mark is always the first visual anchor |
| **GitHub Badge** | GitHub icon + "95K" star count | Social proof element with subtle gray border |
| **CTA** | "Sign up" button in Heat Orange | The only colored element in the navbar — draws the eye |

### Announcement Banner
| Property | Value |
|---|---|
| **Background** | Heat Orange (`#FA5D19`) — full-width, bold statement |
| **Text** | White, `14px`, centered |
| **Corners** | Slightly rounded (`8px`) with horizontal margins |
| **Purpose** | Promotional messaging — "Firecrawl CLI gives agents the complete web data toolkit" |

---

## 5. Geometry & Shape Language

- **Primary Radius:** Subtly rounded corners (`8px` / `rounded-lg`) — the default for cards, buttons, and containers. Conveys modernity without softness.
- **Elevated Radius:** Generously rounded (`12px`) — used for the hero search bar and promotional containers that need extra visual prominence.
- **Circular/Pill:** Fully rounded (`rounded-full`) — reserved exclusively for icon buttons (submit arrows) and small badges (NEW tags).
- **Sharp/Squared:** No rounding (`0px`) — used within grid-based layouts like the testimonials section where elements are separated by border lines rather than gaps.

---

## 6. Depth & Elevation

The Firecrawl design employs a **flat-leaning** approach with selective, subtle elevation:

| Level | Shadow | Usage |
|---|---|---|
| **Level 0 — Grounded** | None | Grid sections, testimonial cells, footer columns — elements within structured border grids |
| **Level 1 — Whisper** | `0 1px 3px rgba(0,0,0,0.04)` | Feature cards, code blocks — just enough lift to distinguish from the gray canvas |
| **Level 2 — Soft** | `0 6px 12px -3px rgba(0,0,0,0.04)` | Active cards, hovered elements — multi-layered diffused shadows |
| **Level 3 — Prominent** | `0 8px 24px -4px rgba(0,0,0,0.08)` | Hero search bar, modal-like containers — draws focal attention |
| **Inset** | `inset 0 -2px 0 rgba(0,0,0,0.1)` | Primary CTA buttons — creates the tactile "pressable" effect |

**Philosophy:** Shadows are never heavy or high-contrast. They serve purely as spatial cues, whispering "this element is above that one" rather than shouting.

---

## 7. Layout Principles

### Container & Grid
| Property | Value | Notes |
|---|---|---|
| **Max Width** | `1112px` | A deliberate choice narrower than typical `1280px` layouts — keeps content intimate and scannable |
| **Horizontal Padding** | `64px` (desktop) / `24px` (mobile) | Generous side margins on desktop |
| **Section Padding** | `120px` vertical | Each major section breathes with ample vertical whitespace |
| **Grid System** | Inside-border grid | Elements are separated by `1px` hairlines rather than wide gutters — creates a technical, spreadsheet-like precision |

### Spacing Tokens
| Token | Value | Usage |
|---|---|---|
| **xs** | `4px` | Icon padding, tight inline spacing |
| **sm** | `8px` | Button padding-y, card internal margins |
| **md** | `16px` | Standard gaps between elements, card padding |
| **lg** | `24px` | Section internal padding, card content spacing |
| **xl** | `32px` | Between section sub-groups |
| **2xl** | `48px` | Between major content blocks |
| **3xl** | `64px` | Container horizontal padding, major separations |
| **section** | `120px` | Between full page sections |

### Whitespace Strategy
The design uses an **"expansive minimalism"** approach — content density is low, with significant negative space between sections. This communicates confidence and clarity: the content doesn't need to fight for attention because there's nothing competing with it. The dotted grid background fills the white space with subtle texture, preventing it from feeling empty.

---

## 8. Iconography & Visual Accents

| Element | Style | Notes |
|---|---|---|
| **Product Icons** | Dotted-matrix grid patterns in Heat Orange | Small grid-dot icons (e.g., 3×3, 2×3 dot matrices) represent each product (Scrape, Search, Agent, Map, Crawl). Unique to Firecrawl's brand. |
| **Decorative Sparkles** | Four-pointed star glints in Heat Orange | Subtle decorative elements scattered near the hero area. Semi-transparent with a glow effect. |
| **Grid Overlay** | Dotted points at regular intervals | The defining background texture — faint gray dots on the `#F9F9F9` canvas. Sometimes interspersed with ASCII-art-like code patterns at the edges. |
| **ASCII Art Accents** | Monospace character art near edges | Subtle decorative patterns (e.g., `++XXXXX++-`, `=+XX+XXX++`) in very light gray near the hero's edges. Reinforces the "raw code" developer identity. |

---

## 9. Motion & Interaction

| Interaction | Behavior |
|---|---|
| **Button Hover** | Subtle brightness increase on primary CTAs; `--black-alpha-2` fill on secondary buttons. Transition: `150ms ease` |
| **Card Hover** | Light background shift to `--black-alpha-2`. No scale or transform changes — keeps the technical precision intact. |
| **Link Hover** | Text color transitions to Heat Orange (`#FA5D19`). Smooth `200ms` transition. |
| **Tab Switch** | Active tab slides to white background with micro-shadow. Smooth position transition. |
| **Scroll** | Navigation bar sticks to top. Announcement banner remains visible. No parallax or scroll-linked animations — clean and performant. |
| **FAQ Accordion** | Clean expand/collapse with content revealing below the question line. Chevron rotates on toggle. |
| **Code Block Toggle** | Language tabs (Python, Node.js, cURL, CLI) switch content with immediate swap — no animation delay. |

---

## 10. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **Desktop (≥1024px)** | Full grid layout, `1112px` max-width container, multi-column feature cards, 4-column footer grid |
| **Tablet (768–1023px)** | 2-column card grids, reduced horizontal padding (`32px`), stacked testimonials |
| **Mobile (<768px)** | Single column, hamburger navigation, full-width cards, collapsed footer accordion, `24px` horizontal padding |

---

*Generated from Stitch Project `1810839805897006409`, Screen `ddc8562feb374bf6b75e7ac8b3e0bd53`, and live analysis of [firecrawl.dev](https://www.firecrawl.dev/) — March 2026*
