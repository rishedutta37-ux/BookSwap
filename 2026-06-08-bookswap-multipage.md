# BookSwap Multi-Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert BookSwap from a single static page into a polished multi-page GitHub Pages site with organized HTML, CSS, and JavaScript.

**Architecture:** Use root-level HTML files for simple GitHub Pages routing. Move shared styles into focused CSS files and shared browser behavior into focused JavaScript files. Keep all behavior client-side with static demo forms and notifications.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Google Fonts, Font Awesome CDN, static GitHub Pages-compatible links.

---

### Task 1: Shared Assets

**Files:**
- Create: `assets/css/base.css`
- Create: `assets/css/components.css`
- Create: `assets/css/pages.css`
- Create: `assets/js/main.js`
- Create: `assets/js/books.js`
- Create: `assets/js/forms.js`

- [ ] **Step 1: Create base styles**

Add global tokens, typography, layout helpers, and responsive defaults in `assets/css/base.css`.

- [ ] **Step 2: Create component styles**

Add nav, news bar, buttons, cards, forms, footer, notifications, and reusable grids in `assets/css/components.css`.

- [ ] **Step 3: Create page styles**

Add hero, page-header, marketplace, seller, pricing, contact, and auth/sell-page layouts in `assets/css/pages.css`.

- [ ] **Step 4: Create shared JavaScript**

Add active nav detection, notifications, reveal animation, FAQ toggles, demo button messages, and copyright update in `assets/js/main.js`.

- [ ] **Step 5: Create book JavaScript**

Add search, category filter, condition filter, and query parameter handling in `assets/js/books.js`.

- [ ] **Step 6: Create form JavaScript**

Add static demo submit handlers for contact, login, signup, and sell-book forms in `assets/js/forms.js`.

### Task 2: Root Pages

**Files:**
- Modify: `index.html`
- Create: `books.html`
- Create: `categories.html`
- Create: `sellers.html`
- Create: `pricing.html`
- Create: `contact.html`
- Create: `login.html`
- Create: `signup.html`
- Create: `sell.html`

- [ ] **Step 1: Rebuild `index.html`**

Keep the home landing flow and connect buttons to `books.html` and `sell.html`.

- [ ] **Step 2: Add `books.html`**

Create a marketplace page with search, category filter, condition filter, and sample listings.

- [ ] **Step 3: Add `categories.html`**

Create a category browsing page with subject cards linking to filtered books.

- [ ] **Step 4: Add `sellers.html`**

Create featured seller profiles and safe-exchange trust sections.

- [ ] **Step 5: Add `pricing.html`**

Create dedicated plans and FAQ page.

- [ ] **Step 6: Add `contact.html`**

Create contact form and support cards.

- [ ] **Step 7: Add `login.html`, `signup.html`, and `sell.html`**

Create polished static/demo forms for account and listing flows.

### Task 3: Verification

**Files:**
- Verify all root HTML pages and asset files.

- [ ] **Step 1: Check file links**

Run `rg -n "style.css|script.js|href=\"#\"|src=\"script.js\"" *.html assets`.

Expected: no references to the old root CSS/JS files and no inert primary navigation links.

- [ ] **Step 2: Check static paths**

Run `python3 -m http.server 8787` and open pages through the static server.

Expected: all pages load with shared CSS and JavaScript.

- [ ] **Step 3: Check browser behavior**

Verify navigation links, book filtering, FAQ toggles, demo form submissions, notification behavior, and mobile layout.

- [ ] **Step 4: Syntax check JavaScript**

Run `node --check assets/js/main.js`, `node --check assets/js/books.js`, and `node --check assets/js/forms.js`.

Expected: each command exits with code 0.
