# BookSwap Multi-Page Static Site Design

Date: 2026-06-08

## Goal

Convert the current three-file BookSwap landing page into a polished multi-page static website suitable for GitHub Pages. The result should preserve the existing BookSwap identity and interaction style while organizing HTML, CSS, and JavaScript into maintainable page and asset files.

## Approved Direction

Use root-level GitHub Pages routes with shared organized assets.

Root HTML pages:

- `index.html`
- `books.html`
- `categories.html`
- `sellers.html`
- `pricing.html`
- `contact.html`
- `login.html`
- `signup.html`
- `sell.html`

Assets:

- `assets/css/base.css`
- `assets/css/components.css`
- `assets/css/pages.css`
- `assets/js/main.js`
- `assets/js/forms.js`
- `assets/js/books.js`

This structure keeps direct page links simple for GitHub Pages and avoids nested relative-path problems.

## Visual System

The site should remain recognizably aligned with the current UI:

- Poppins typography.
- Blue primary color around `#2563eb`.
- Yellow announcement/accent color around `#facc15`.
- Light page background around `#f8fafc`.
- Dark footer around `#0f172a`.
- White cards with subtle shadows.
- Rounded controls and cards, generally 8px to 16px depending on component size.
- Book marketplace imagery and student-focused copy.

The redesign should improve spacing, page hierarchy, active navigation states, page headers, responsive behavior, and consistency without changing the core BookSwap brand.

## Shared Components

Every page should use the same shared header, news bar where appropriate, and footer.

Header requirements:

- BookSwap logo linking to `index.html`.
- Navigation links to Home, Books, Categories, Sellers, Pricing, and Contact.
- Login and Sign Up actions linking to `login.html` and `signup.html`.
- Active state for the current page.
- Mobile-friendly wrapping or compact layout using CSS only.

Footer requirements:

- Brand message.
- Quick links using real anchors.
- Legal links may remain static text or non-functional anchors.
- Social icons may use the existing Font Awesome dependency.
- Copyright year should update through JavaScript.

## Page Designs

### Home

Home remains the main entry point. It should include:

- Hero with headline, supporting text, Browse Books link, Sell Your Book link, and search field.
- News bar.
- Stats.
- How it works.
- Popular categories preview.
- Latest listings preview.
- Featured seller preview.
- Student reviews.

The hero actions should navigate to real pages: Books and Sell Book.

### Books

The Books page should be the main marketplace browsing page. It should include:

- Page header.
- Search input.
- Category and condition filters as static client-side controls.
- Book listing grid with multiple sample listings.
- Contact Seller buttons that show notifications.

Search and filters should run in the browser with JavaScript. No backend is required.

### Categories

The Categories page should show the subject areas from the current landing page with richer presentation:

- Category grid.
- Short descriptions for each category.
- Small preview of relevant book titles.
- Calls to browse the Books page.

Category cards may navigate to `books.html` with a query parameter, but the site should still work if opened directly.

### Sellers

The Sellers page should show a polished trust and seller discovery view:

- Featured seller profiles.
- Ratings, available books, and college/department details.
- Verification or safe-exchange messaging.
- View Profile buttons that show demo notifications.

### Pricing

The Pricing page should move the current plans into a dedicated page:

- Free, Premium, and Pro Seller plans.
- Premium remains visually featured.
- Plan feature lists.
- Select Plan buttons with notifications.
- FAQ accordion.

### Contact

The Contact page should include:

- Contact form with name, email, subject, and message.
- Static support cards for email, campus exchange, and help hours.
- Client-side feedback on submit.

No message should be sent to a server.

### Login

The Login page should be a polished static/demo form:

- Email and password fields.
- Remember me checkbox.
- Submit button.
- Link to Sign Up.
- Client-side notification on submit.

### Sign Up

The Sign Up page should be a polished static/demo form:

- Name, email, college, password, and role selection fields.
- Submit button.
- Link to Login.
- Client-side notification on submit.

### Sell Book

The Sell Book page should be a polished static/demo listing form:

- Book title, author, category, condition, price, college/location, and description fields.
- Submit button.
- Sidebar or supporting panel explaining safe listing steps.
- Client-side notification on submit.

## JavaScript Behavior

`assets/js/main.js`:

- Notification system.
- Active navigation state.
- Page reveal effects.
- Copyright year update.
- Generic button interactions.

`assets/js/books.js`:

- Book search.
- Category filter.
- Condition filter.
- Query parameter handling for category links if implemented.

`assets/js/forms.js`:

- Demo submit handling for contact, login, signup, and sell-book forms.
- Basic required-field checks using browser validation where practical.
- Success notifications without backend calls.

## GitHub Pages Constraints

- Use relative links such as `books.html`, not absolute local paths.
- Avoid build tools and package dependencies.
- Keep external CDNs limited to current font and icon usage.
- Pages must work as static files.
- No backend routes, server APIs, or local-only dependencies.

## Verification

Manual verification should cover:

- Open each page directly.
- Navigate from every header link and footer quick link.
- Confirm hero buttons navigate to the right pages.
- Test Books search and filters.
- Test pricing buttons, seller buttons, and all demo forms.
- Check desktop and mobile layouts.
- Confirm no console errors from missing selectors on pages that do not contain every component.

## Out Of Scope

- Backend authentication.
- Real seller contact.
- Payment processing.
- Uploading images or persisting listings.
- Database or API integration.
