# Enhanced Stitch Prompt — Vijayakanth M Portfolio Redesign

> **Purpose:** This is a Stitch-optimized prompt engineered via the `enhance-prompt` skill. It merges every design token from `DESIGN.md` (Firecrawl-inspired aesthetic) with every piece of personal content from `CONTENT_MAP.md` to produce a complete, pixel-precise portfolio redesign.

---

## MASTER PROMPT

A precision-engineered, developer-portfolio website for **Vijayakanth M** — an AI/ML engineering student. The design language is directly inspired by Firecrawl.dev: a "Brutalist-Lite" developer aesthetic combining **technical grid precision** with **warm orange accents** on a light, airy canvas. The site should feel like a meticulously organized technical blueprint — confident, clean, and purpose-built. Every section breathes with generous whitespace. The single pop of Heat Orange against the neutral gray canvas draws the eye exactly where it needs to go.

---

**DESIGN SYSTEM (REQUIRED):**

- **Platform:** Web, Desktop-first, fully responsive to tablet and mobile
- **Theme:** Light, technical-precision, developer-first, brutalist-lite with warm accent
- **Font Family (UI):** `Suisse` (fallback: `ui-sans-serif, system-ui, sans-serif`) — clean, geometric Swiss sans-serif
- **Font Family (Code):** `GeistMono` (fallback: `ui-monospace, SFMono-Regular, monospace`)
- **Background Canvas:** Blueprint Gray (`#F9F9F9`) — subtle dotted grid pattern overlay of faint gray dots at regular intervals, evoking graph paper
- **Surface / Cards:** Pure White (`#FFFFFF`) — elevated containers, cards, code blocks, nav bar
- **Primary Accent:** Heat Orange (`#FA5D19`) — brand color for CTAs, highlighted name, nav logo accent, submit buttons, hover states, and achievement badges
- **Primary Text:** Dark Ink (`#262626`) — headings, body copy, nav labels; near-black for strong legibility
- **Secondary Text:** Muted Gray (`#737373`) — subtitles, descriptions, meta labels, section counters
- **Tertiary Text:** Faint Gray (`#A3A3A3`) — placeholders, disabled states, low-priority info
- **Primary Borders:** Grid Wire (`#EDEDED`) — hairline dividers separating cards, rows, and footer columns
- **Secondary Borders:** Muted Border (`#E6E6E6`) — input strokes, card outlines on hover
- **Hover Fill:** Black Alpha 2% (`rgba(0,0,0,0.02)`) — almost imperceptible card/button hover darkening
- **Active Fill:** Black Alpha 7% (`rgba(0,0,0,0.07)`) — pressed states
- **Primary Button:** Heat Orange fill, white text, 8–10px radius, inset shadow at bottom for tactile 3D effect
- **Secondary Button:** Transparent fill, `#E6E6E6` border stroke, dark text, hover fills `rgba(0,0,0,0.02)`
- **Icon Button:** Pill-shaped (`rounded-full`), Heat Orange fill, white icon
- **Card Corners:** Subtly rounded (8px)
- **Card Shadows:** Whisper-soft multi-layered: `0px 6px 12px -3px rgba(0,0,0,0.04)`
- **Hero Search/Input Corners:** Generously rounded (12px), prominent shadow `0px 8px 24px -4px rgba(0,0,0,0.08)`
- **Heading Tracking:** Tight (`-0.02em`)
- **Label Tracking:** Wide (`0.05em–0.1em`) on uppercase section counters
- **Section Vertical Padding:** `120px` between major sections — expansive, breathable
- **Max Container Width:** `1112px` centered
- **Horizontal Padding:** `64px` desktop, `24px` mobile

---

**Page Structure — HOME ROUTE (`/`):**

1. **Sticky Navigation Bar:**
   - Height: ~64px, white background with optional backdrop-blur, 1px bottom border `#EDEDED`
   - Left: Logo text "**VIJAYAKANTH**" in bold dark text with Heat Orange accent dot
   - Right: Nav links — Home, Resume, Skills, Education, Achievements, Projects, Contact — `14px`, medium weight, smooth hover transition to Heat Orange
   - Mobile: Hamburger icon toggle, slide-in nav menu
   - "Download Resume" pill button in Heat Orange on far right

2. **Hero Section (`#home`):**
   - Two-column layout (text left, profile image right) within `1112px` max-width container
   - Left column:
     - Large H1 (`60px`, weight 500): "Hi, It's **Vijayakanth M**" — name in Heat Orange
     - Animated typing sub-heading (`20px`): cycles through "Engineering Student 🎓", "Hackathon Winner 🏆", "MERN Stack Developer 💻", "LeetCode 100+ Solved 💡", "LLM Enthusiast 🧠", "AI Project Builder 🧬"
     - Bio paragraph (`16px`, line-height 1.5, `#737373`): "An engineering student eager to apply technical skills and problem-solving strategies in real-world projects to gain valuable experience and contribute significantly to demanding and creative environments."
     - Social icon row: LinkedIn (`https://www.linkedin.com/in/vijayakanth-m-7b7767312`), GitHub (`https://github.com/vijayakanth06`), LeetCode (`https://leetcode.com/u/Vijayakanth06/`), Email (`vikymahendiran123@gmail.com`) — icons in `#262626`, hover to Heat Orange, 200ms transition
     - Primary CTA button: "Download Resume" → links to `Vijayakanth_resume.pdf`
     - Like/Dislike voting buttons: thumbs-up and thumbs-down with counters (Firebase-powered)
   - Right column:
     - Profile image (`profile.webp` / `profile.jpg`) in a card with subtle shadow, gently rounded corners (12px)
   - Background: Dotted grid pattern on `#F9F9F9`, with optional subtle ASCII art accents near edges

3. **Skills Section (`#skills`):**
   - Section heading: "SKILLS" — uppercase, `36px`, weight 500, `#262626`, wide letter-spacing on meta label "[ 01 / 06 ] · SKILLS"
   - Grid of skill category cards on white background with 8px radius and `#EDEDED` border:
     - **Technical Skills** — C, Python, Java, HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL, MongoDB, Machine Learning — each as a pill tag with icon, Heat Orange icon color accents
     - **Tools** — Git, GitHub
     - **Soft Skills** — Communication, Teamwork, Problem-solving
     - **Languages** — English, Tamil
   - Each skill item: icon + label in a compact card/tile layout with hover lift (`rgba(0,0,0,0.02)`)

4. **Education Section (`#education`):**
   - Section heading: "EDUCATION"
   - Vertical timeline or card-list layout with graduation-cap / school icons:
     - **B.Tech — AI & ML** | Kongu Engineering College, Erode | Expected 2027 | CGPA: 8.62* | Coursework: Python, JAVA, C, JavaScript, ML, Deep Learning
     - **HSC in Computer Science** | Kongu Vellalar Matriculation Hr. Sec. School, Perundurai | 2022–2023 | 94%
     - **SSLC** | Kongu Vellalar Matriculation Hr. Sec. School, Perundurai | 2020–2021
   - Cards: white background, `#EDEDED` left accent border in Heat Orange, subtle shadow

5. **Achievements Section (`#achievements`):**
   - Section heading: "ACHIEVEMENTS"
   - Auto-playing carousel (5s interval, 10s resume after manual interaction):
     - 2nd Place — 2023 — Academic Excellence Award — Kongu Vellalar Trust
     - 1st Place — Feb 2025 — Hacksphere 2025 (24hr Hackathon) — AI Coding Club
     - 3rd Place — Oct 2024 — AUTONIX 2024 Paper Presentation (KEC College)
     - 1st Place — Mar 2025 — PRODOTHON 2025 Paper Presentation (PSG College)
     - 1st Place — Feb 2025 — ENVISTAS 2025 Paper Presentation (KEC College)
     - Best Presentation & Team — Apr 2025 — BYTS INDIA HACKATHON (BIH) 1.0
     - 3rd Place — Sep 2025 — CognitiveX GenAI 24hr Hackathon — IBM Skill Build
     - 2nd Place — Jul 2025 — Ideathon'25 — KEC College
     - 1st Place — Sep 2025 — SIH Internal Hackathon 2025 (KEC College)
     - Top 4 Finalist — Oct 2025 — CTAI — CTD International Hackathon at IIT Bombay
   - Each slide: Achievement card with title in Heat Orange, date badge, description on white card
   - Left/right chevron navigation buttons, dot indicators at bottom with active-state fill animation

6. **Projects Section (`#projects`):**
   - Section heading: "PROJECTS"
   - Responsive card grid (3 columns desktop, 2 tablet, 1 mobile):
   - Each project card — white background, 8px radius, `#EDEDED` border, whisper shadow, hover lifts to Level 2 shadow:
     - **Image area:** Project screenshot (`.webp` format, lazy-loaded) with aspect ratio preserved
     - **Title row:** Project name (bold, `20px`) + duration badge (right-aligned, `#737373`)
     - **Description:** 1–2 line summary (`16px`, `#737373`)
     - **Tech tags:** Row of pill badges with each technology name
     - **GitHub button:** Ghost button with GitHub icon + "View on GitHub" label, hover transitions to Heat Orange
   - **Full project list (14 projects):**
     1. Refined CAPTCHA — ML, Behavior Analysis, React, Node.js — `captcha.webp` — `github.com/dummy/refined-captcha`
     2. Classify Songs by Genre — Python, Audio, ML — `music-classification.webp` — `github.com/vijayakanth06/Classify-songs-based-on-genre`
     3. Feedback Collection System — Java, Spring Boot, MySQL — `feedback-system.webp` — `github.com/vijayakanth06/FeedbackCollectionSystem`
     4. Dynamic Chatbot for Farm2Bag — NLP, Python, Chatbot — `chatbot.webp` — `github.com/vijayakanth06/Vite_hacksphere_2025`
     5. Attendance Automation System — MERN, MongoDB — `attendance-system.webp` — `github.com/vijayakanth06/Attendance_Automation`
     6. Fruit and Vegetable Identifier — Flask, Groq API, LLM Vision — `fruit-veg-recognition.webp` — `github.com/vijayakanth06/fruits_vegetable_predictor_using_webcam`
     7. Visualizing Math – AI for Learning — NLP, Telegram, Chatbot — `aistudybuddy.webp` — `github.com/vijayakanth06/Bytes_Hackathon`
     8. DCGRAM – Instagram Clone — React, Node.js, MongoDB — `instaclone.webp` — `github.com/vijayakanth06/instaclone`
     9. AI Code Vulnerability Detector — AI, Security, Web Editor — `codebase.webp` — `github.com/dummy/aicodevulnerability`
     10. AI Stock Portfolio Manager — Flask, Pandas, Groq LLM — `stockanalyzer.webp` — `github.com/vijayakanth06/AI_Stock_Analyzer`
     11. ProTube – Productive Video Platform — React, API, Filtering — `protube.webp` — `github.com/vijayakanth06/protube`
     12. ClauseWise – AI Legal Document Analyzer — LLM, Granite, Ollama — `clausewise.webp` — `github.com/vijayakanth06/genai_hackathon_ibm`
     13. Fabric Defect Detection System — CNN, OpenCV, Real-time — `fabric.webp` — (no link)
     14. Material & Quantity Detection System — Regression, ML Pipeline — `material.webp` — `github.com/vijayakanth06/ctd`

7. **Contact Section (`#contact`):**
   - Section heading: "CONTACT"
   - Two-column layout:
     - **Left column:**
       - Sub-heading: "Get in Touch"
       - Description: "Have a question or want to work together? Drop me a message!"
       - Contact options with icons:
         - Email icon + `vikymahendiran123@gmail.com` (link to Gmail compose)
         - WhatsApp icon + `+91 93601 77805` (link to `wa.me/919360177805`)
       - Quick Response note: "I typically respond within 24 hours. For urgent inquiries, WhatsApp is fastest."
     - **Right column:**
       - Contact form (EmailJS-powered): Name input, Email input, Message textarea, "Send Message →" submit button in Heat Orange
       - Input style: white background, `#E6E6E6` border, 8px radius, focus state with Heat Orange border glow

8. **Footer:**
   - Simple centered footer: "© 2025 Vijayakanth M. Built with React."
   - `14px`, `#737373` text on `#F9F9F9` background, separated by `#EDEDED` top border

9. **Scroll-to-Top Button:**
   - Floating action button (bottom-right), pill-shaped, Heat Orange fill, white up-arrow icon
   - Appears after scrolling 300px, smooth scroll to top on click

---

**Page Structure — RESUME ROUTE (`/resume`):**

10. **Resume Page:**
    - Full structured resume rendered as a styled document within the same design language
    - **Header:** Name "VIJAYAKANTH M" + title "Aspiring AI & ML Engineer | Web Developer | Innovator" + profile image (circle crop, 200×200)
    - **Sections** (each with uppercase heading, Heat Orange left-border accent):
      - OBJECTIVE — full bio text
      - EDUCATION — 3 entries as styled cards
      - SKILLS — Technical (12 tags), Soft (3), Tools (2), Languages (2)
      - EXPERIENCE — 3 internship entries (ZEONE, SHINELOGICS, TWINCORD) with role, company, duration, bullet points
      - PROJECTS — 14 project cards with title, duration, description
      - AREA OF INTEREST — 6 interest tags (Web Dev, ML, CV, Chatbots, Software Engineering, Video Editing)
      - CERTIFICATION COURSES — MongoDB Associate Dev, NPTEL Ethical Hacking, NVIDIA GenAI Diffusion Models
      - ACHIEVEMENTS — 10 bullet items

---

**INTERACTION & MOTION:**
- Button hover: subtle brightness increase on primary CTAs; `rgba(0,0,0,0.02)` fill on secondary. Transition: `150ms ease`
- Card hover: light background shift, slight shadow elevation. No scale transforms — stays precise
- Link hover: smooth color transition to Heat Orange, `200ms`
- Carousel: auto-advance every 5s, pause on hover, resume after 10s inactivity
- Scroll: sticky nav, smooth-scroll anchor navigation, scroll-to-top FAB
- Page transitions: clean, no heavy animations — performance-first

**RESPONSIVE BEHAVIOR:**
- Desktop (≥1024px): Full grid layouts, `1112px` max-width, multi-column cards, side-by-side hero
- Tablet (768–1023px): 2-column grids, reduced padding (32px), stacked hero
- Mobile (<768px): Single column, hamburger nav, full-width cards, 24px padding

---

*This prompt is optimized for Stitch screen generation. Feed it per-section or as a whole-page prompt.*
