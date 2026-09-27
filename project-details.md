# VALIDATION STATUS — TECHNICAL & PRACTICAL AUDIT

**Audit date:** 2026-09-27

## Repository validation and implementation notes

This plan is buildable, with the following alignment work needed against the current repository:

- The existing project is a React 19 + Vite client-rendered app with React Router, not a blank project. Phase 1 should extend that setup rather than scaffold a second app or introduce a framework migration.
- The current home page already renders Services, a theme command menu, a Resume route, and a FormSubmit contact form. These are marked optional/conditional later in this plan. Decide which are intentional launch features and update the feature matrix before treating that matrix as the implementation checklist.
- The contact UI currently reports success on a timer without confirming the form provider's response. Its success state must reflect a confirmed submission, and failure must preserve the entered values.
- The implementation has no project listing/detail route or data-driven project collection yet. Those remain real gaps against the essential scope; do not infer they exist from the home page's selected-work section.
- The theme preference is persisted and resolved, but most editorial sections use fixed light/dark colors. A theme toggle is only complete after all routes and shared components use the same semantic theme tokens.
- Several citation markers in this document (for example `turn0search0`) are transient research references rather than usable bibliography links. Replace them with stable source URLs before using this audit as an externally reviewable technical record.

The design-system implementation establishes semantic color, type, spacing, radius, shadow, motion, focus, and reduced-motion foundations in `src/styles/global.css`. Use the supplied dark violet, cyan, and magenta references as the visual direction and use semantic tokens for new or refactored UI.

This specification has been reviewed for practical implementability using current web-platform capabilities and standard production architecture.

## Audit conclusion

**Result: BUILDABLE.**

The core portfolio can be implemented as a modern static/client-rendered website without requiring a database, authentication system, or custom backend.

The main correction made by this audit is **scope discipline**:

- Core portfolio functionality remains in scope.
- Features that require third-party services are explicitly conditional.
- Features that are useful only for larger portfolios are optional.
- Features that create unnecessary complexity are not part of the base build.
- No feature depends on a deprecated browser API.
- Native browser capabilities should be preferred where they are sufficient.

Current platform checks confirm that the native HTML `<dialog>` and `showModal()` APIs are broadly available and provide modal/inert behavior; therefore a custom modal/focus-trapping library is not required for a simple portfolio lightbox. citeturn0search0turn0search5

For accessibility, visible keyboard focus, semantic controls, labels, and correct modal focus behavior remain explicit requirements. WCAG 2.2 includes Focus Visible as a Level AA success criterion, and W3C guidance supports `:focus-visible` for keyboard focus indication. citeturn1search4turn1search6

For performance, LCP, INP, and CLS remain the current Core Web Vitals to measure; the commonly documented good targets are LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1 at the 75th percentile. These are **targets to measure**, not guaranteed results. citeturn1search0

Google's current documentation confirms that XML sitemaps are practical for a small portfolio and can be manually maintained when the site has only a few dozen URLs. Canonical URLs are useful as a preferred-URL signal, while `robots.txt` controls crawling rather than securely hiding pages from search. citeturn1search1turn1search2turn1search3

## Feature classification

### Tier A — Core and practical

These should be part of the first production release:

- Responsive website shell
- Home/landing page
- About section
- Skills/technology section
- Project listing
- Project detail pages
- Experience section when real experience exists
- Resume link/download when a real resume exists
- Contact information
- Email contact link
- Navigation
- Mobile navigation
- Footer
- 404 handling
- Responsive images
- Semantic HTML
- Keyboard accessibility
- SEO metadata
- Open Graph metadata
- Performance optimization
- Cross-browser testing
- Project data separated from UI
- Error handling for invalid project routes

### Tier B — Practical but conditional

Implement only when the developer actually needs them:

- Contact form
- Dark/light theme
- Project filtering
- Project search
- Services section
- Dedicated Resume page
- Case-study depth
- Testimonials
- Availability indicator
- Analytics
- Structured data
- Blog
- CMS
- GitHub API integration

### Tier C — External-service dependent

These are technically practical but require another system:

- Form submission through a form provider
- Serverless contact endpoint
- Transactional email delivery
- Analytics provider
- CMS
- GitHub API/live repository data

The base portfolio must remain functional if these services are not enabled.

### Explicitly excluded from the base project

Do not add unless a separate requirement is created:

- Authentication
- User accounts
- Admin dashboard
- Database
- AI chatbot
- Live visitor chat
- Complex CMS
- Real-time application functionality
- Unnecessary API integrations
- Fake statistics
- Fake testimonials
- Fake awards/certifications
- Fake project metrics
- Unnecessary animation systems

## Important implementation decisions

1. **No database for the base portfolio.**
2. **No backend for the base portfolio.**
3. **Email link is the default contact mechanism.**
4. A contact form is an optional enhancement and requires either a form service or a secure server/serverless endpoint.
5. Project content should be local structured data unless a CMS is deliberately selected.
6. A project gallery can be implemented without a third-party carousel/lightbox library.
7. If a modal gallery is used, prefer the native `<dialog>` implementation or a framework component that correctly provides equivalent accessibility behavior. Native modal dialogs make the rest of the document inert when opened with `showModal()`. citeturn0search0turn0search5
8. SEO infrastructure is lightweight and practical: titles, descriptions, canonical URLs where appropriate, sitemap, robots configuration, and Open Graph metadata.
9. Analytics is not required for launch.
10. A blog is not required unless the developer will actually maintain it.
11. A CMS is not required unless non-developers need to manage content.
12. Live GitHub API integration is not required; normal repository links are simpler and more reliable.
13. Performance requirements are measurable targets, not promises.
14. Accessibility must be tested manually in addition to automated tools.
15. Optional features must not make the core portfolio dependent on third-party availability.

## Validation rule for future changes

Every newly proposed feature must answer:

```text
Why does the portfolio need it?
Can the browser/platform already do it?
Does it require an external service?
Does it introduce new security/privacy obligations?
Does it increase maintenance significantly?
Does it improve the portfolio enough to justify that complexity?
```

If the answer does not justify the feature, it should not be added.

---

# Front-End Developer Portfolio Website — Complete Project Specification

> **Document purpose:** Single source of truth for planning, designing, developing, testing, and launching a professional front-end developer portfolio website.
>
> **Status:** Planned specification
>
> **Audience:** Front-end developer, designer, developer/AI coding agent, reviewer, and future maintainer.
>
> **Principle:** Build only the features defined in this document. Do not add unrelated features, unnecessary dependencies, placeholder functionality, or speculative product features.

---

# 1. Project Overview

## 1.1 Project Name

**Front-End Developer Portfolio Website**

The final brand/name can be selected separately. The implementation should not depend on a hard-coded personal brand name.

## 1.2 Project Type

A modern, responsive, performance-focused personal portfolio website for a front-end developer.

## 1.3 Primary Purpose

The website must communicate:

1. Who the developer is.
2. What the developer specializes in.
3. What technologies the developer uses.
4. What projects the developer has built.
5. How the developer approaches development.
6. Professional experience or relevant background.
7. Selected achievements/certifications where applicable.
8. How visitors can contact the developer.
9. Where visitors can view professional profiles and source code.
10. Why a recruiter, client, or engineering team should continue exploring the portfolio.

## 1.4 Primary Visitors

### A. Recruiters

They need to quickly understand:

- Developer identity.
- Role.
- Core skills.
- Experience.
- Projects.
- Resume.
- Contact information.

### B. Hiring Managers

They need deeper evidence:

- Project quality.
- Technical decisions.
- Problem-solving ability.
- Front-end architecture.
- UI implementation.
- Accessibility.
- Responsive behavior.
- Performance awareness.
- Code quality.

### C. Potential Clients

They need:

- Services/capabilities.
- Project examples.
- Technology expertise.
- Professional presentation.
- Contact method.

### D. Developers / Technical Visitors

They may inspect:

- GitHub repositories.
- Project architecture.
- Technical stack.
- Live demos.
- Implementation details.

---

# 2. Core Product Goals

The website must achieve the following goals.

## 2.1 Professional Identity

Visitors should understand the developer's role within the first section of the website.

## 2.2 Project Proof

Projects must be treated as evidence of practical development ability rather than simply a list of technologies.

## 2.3 Recruiter Efficiency

Important information must be discoverable quickly without forcing a visitor to inspect every section.

## 2.4 Technical Credibility

The website itself must demonstrate good front-end engineering practices.

## 2.5 Conversion

The website should provide clear paths to:

- View projects.
- View resume.
- Contact developer.
- View GitHub.
- View professional/social profiles where provided.

## 2.6 Maintainability

Portfolio content should be structured so projects, skills, experience, and other content can be updated without rewriting UI components.

---

# 3. Product Scope

## 3.1 Core Information Architecture

The base site does **not** require every item to be a separate route.

Core content:

1. Home
2. About
3. Skills / Tech Stack
4. Projects
5. Project Details
6. Experience, when applicable
7. Resume link, when a real resume exists
8. Contact
9. 404 / Not Found

Optional content:

- Services
- Dedicated Resume page
- Blog
- Testimonials
- Availability indicator

Sections can be combined into the Home page when that produces a clearer portfolio. Separate routes should be used only when the content benefits from its own URL.

## 3.2 Recommended Main Navigation

Primary navigation:

- Home
- About
- Skills
- Projects
- Experience
- Services
- Contact

Primary action:

- Resume

Mobile navigation:

- Menu button
- Same navigation items
- Resume action

## 3.3 Footer Navigation

Footer should contain:

- Developer name/brand.
- Short professional description.
- Main navigation.
- Contact link.
- GitHub link.
- LinkedIn or other professional profile links if supplied.
- Copyright.
- Optional availability status if actually applicable.

Do not display fake social accounts, fake statistics, or fake contact information.

---

# 4. Content Model

The portfolio must be data-driven.

Instead of hard-coding the same content directly into components, use structured data for repeatable entities.

## 4.1 Developer Profile

Fields:

```text
name
professionalTitle
shortIntroduction
longIntroduction
location
email
phone (optional)
profileImage (optional)
resumeUrl
availabilityStatus (optional)
```

## 4.2 Social Profiles

Each profile:

```text
platform
label
url
icon
visible
```

Examples:

- GitHub
- LinkedIn
- X
- Dev.to
- Medium
- Personal website

Only include platforms actually supplied by the developer.

## 4.3 Skill

Each skill:

```text
name
category
icon/logo (optional)
description (optional)
experienceLevel (optional)
yearsOfExperience (optional)
priority
visible
```

Recommended categories:

- Languages
- Front-end
- Styling
- Frameworks
- State Management
- Testing
- Tooling
- Backend/API knowledge
- Design/UX
- DevOps/Deployment

Do not represent skill level numerically unless the developer can justify the number.

Avoid fake progress bars such as `95% React`.

## 4.4 Project

Each project should support:

```text
id
slug
title
shortDescription
fullDescription
featured
status
category
role
duration
year
technologies[]
heroImage
thumbnailImage
gallery[]
liveUrl
repositoryUrl
caseStudyUrl (optional)
problem
solution
features[]
technicalHighlights[]
challenges[]
outcomes[]
accessibilityNotes[]
performanceNotes[]
```

## 4.5 Experience

Each experience record:

```text
company
role
employmentType
location
startDate
endDate
current
summary
responsibilities[]
achievements[]
technologies[]
```

## 4.6 Service

Each service:

```text
title
shortDescription
description
deliverables[]
technologies[]
icon
visible
```

Possible service categories:

- Responsive Website Development
- React / Next.js Development
- UI Implementation
- Design-to-Code
- Front-End Performance Optimization
- Accessibility Improvements
- Website Maintenance

Only include services the developer actually offers.

## 4.7 Certification

Optional structured entity:

```text
name
issuer
issueDate
credentialId
credentialUrl
description
```

Do not include certifications that cannot be verified.

---

# 5. Home Page

The Home page is the primary conversion page.

## 5.1 Hero Section

The hero must communicate:

- Developer name.
- Front-end developer title.
- One concise value proposition.
- Primary CTA.
- Secondary CTA.
- Optional profile image.
- Optional visual/animation.

Example content structure:

```text
[Name]
Front-End Developer

I build fast, accessible, responsive digital experiences
with modern web technologies.

[View Projects] [Contact Me]
```

The exact copy should be customized to the developer.

## 5.2 Hero Requirements

The hero must:

- Work on mobile, tablet, and desktop.
- Keep important content above the fold where practical.
- Have readable text over any background.
- Avoid excessive animation.
- Provide keyboard-accessible buttons.
- Use semantic heading hierarchy.
- Load critical content quickly.
- Not depend on JavaScript for basic visibility.

## 5.3 Hero CTAs

Primary CTA:

- View Projects

Secondary CTA:

- Contact Me

Optional:

- Download Resume

Every CTA must have a real destination.

## 5.4 Social Links

If provided:

- GitHub
- LinkedIn
- Other professional profile

Requirements:

- Accessible labels.
- Correct external URLs.
- External links should be handled intentionally.
- No broken links.

---

# 6. About Section / Page

## 6.1 Purpose

Explain the developer beyond the title.

## 6.2 Content

Should cover:

- Professional identity.
- Development focus.
- Types of products/websites built.
- Development philosophy.
- Relevant background.
- Core strengths.

## 6.3 Optional About Details

Where real information exists:

- Years of experience.
- Location.
- Education.
- Current focus.
- Professional interests.

Avoid unsupported claims.

## 6.4 About CTA

Possible actions:

- View Experience
- View Projects
- Download Resume

---

# 7. Skills / Technology Section

## 7.1 Purpose

Show technical capability in an organized way.

## 7.2 Skill Categories

Recommended:

### Core Languages

- HTML
- CSS
- JavaScript
- TypeScript

### Front-End

- React
- Next.js
- Vue, if applicable

### Styling

- CSS
- Tailwind CSS
- CSS Modules
- Sass, if applicable

### State / Data

- Context API
- Redux / Redux Toolkit
- TanStack Query
- Other tools actually used

### Testing

- Vitest
- Jest
- React Testing Library
- Playwright
- Cypress

Only list tools genuinely used.

### Tooling

- Git
- GitHub
- npm/pnpm/yarn
- Vite
- ESLint
- Prettier

### Deployment

- Vercel
- Netlify
- Cloudflare
- Other actual deployment platform

## 7.3 Skill UI

Each skill card can contain:

- Logo/icon.
- Name.
- Short description.
- Optional project count showing where it was used.

Do not use decorative percentage bars unless backed by a defined and meaningful measurement.

## 7.4 Skill Filtering

Optional if the number of skills becomes large:

```text
All
Frontend
Styling
Testing
Tooling
Other
```

Filtering must be accessible and must not hide critical information from search engines unnecessarily.

---

# 8. Featured Projects Section

Projects are the most important evidence section after the hero.

## 8.1 Project Card

Each project card should contain:

- Project image.
- Project title.
- One-line description.
- Main technologies.
- Project category.
- View Case Study button.
- Live Demo button when available.
- Source Code button when available.

## 8.2 Card Requirements

The entire card should not accidentally become several conflicting links.

Use clear interaction behavior:

- Project title → project details.
- Image → project details.
- View Case Study → project details.
- Live Demo → live project.
- Source Code → repository.

## 8.3 Featured Project Count

The home page should show a curated selection.

Recommended:

- 3–6 featured projects.

The exact number should depend on actual project quality and content.

## 8.4 View All Projects

If more projects exist:

```text
[View All Projects]
```

This goes to the Projects page.

---

# 9. Projects Page

## 9.1 Purpose

Provide the complete portfolio project collection.

## 9.2 Project Grid

The layout must be:

- Responsive.
- Data-driven.
- Dynamic.
- Suitable for any project count.
- Free from fixed-position hacks.
- Free from `nth-child` layout hacks.

The UI must remain correct if the number of projects changes.

## 9.3 Filters

Optional but useful for a larger portfolio.

Possible filters:

- All
- Web Apps
- Websites
- React
- Next.js
- JavaScript
- TypeScript
- UI/UX
- Other categories

Filters should be generated from project data where practical.

## 9.4 Search

Optional for large project collections.

Search should search:

- Project title.
- Description.
- Technologies.
- Category.

## 9.5 Empty State

If a filter has no results:

```text
No projects found.
Try another category.
```

Provide a clear reset action.

---

# 10. Project Details Page

This is a critical feature.

## 10.1 URL Structure

Use human-readable URLs:

```text
/projects/project-slug
```

Avoid:

```text
/projects/12345
```

when a stable slug can be used.

## 10.2 Project Hero

Show:

- Project title.
- Short description.
- Main project image.
- Project category.
- Year.
- Role.
- Main technologies.

## 10.3 Project Links

Provide only links that actually exist:

- Live Demo
- GitHub Repository
- Case Study
- Documentation

## 10.4 Problem

Explain:

- What problem existed.
- Who the project served.
- Why the project was built.

## 10.5 Solution

Explain:

- What was implemented.
- How the solution addresses the problem.
- Important design/development decisions.

## 10.6 Features

List actual features.

Each feature may include:

```text
Feature name
Description
Implementation detail
```

## 10.7 Technical Implementation

Show meaningful technical details:

- Framework.
- Language.
- Component architecture.
- State management.
- API integration.
- Authentication if actually used.
- Data handling.
- Responsive strategy.
- Accessibility work.
- Performance optimization.
- Testing.

Do not expose secrets or private infrastructure details.

## 10.8 Challenges

Describe actual development challenges.

Examples:

- Complex responsive layout.
- API state synchronization.
- Performance bottleneck.
- Browser compatibility.
- Accessibility issue.
- Component reuse.

## 10.9 Solution to Challenges

For each challenge:

```text
Problem
Approach
Result
```

Avoid fabricated metrics.

## 10.10 Gallery

Project gallery can include:

- Desktop screenshots.
- Mobile screenshots.
- Important UI states.
- Feature-specific screenshots.

Every image must have meaningful alt text.

## 10.11 Project Navigation

At the bottom:

- Previous Project.
- Next Project.
- Back to Projects.

Navigation must handle:

- First project.
- Last project.
- Single-project collection.

No broken previous/next links.

---

# 11. Experience Section / Page

## 11.1 Timeline

Each role should show:

- Role.
- Company.
- Start date.
- End date.
- Current status.
- Location if appropriate.

## 11.2 Responsibilities

Use concise, factual bullet points.

Focus on:

- What was built.
- What was improved.
- Technologies used.
- Collaboration.
- Ownership.

## 11.3 Achievements

Where measurable, show actual outcomes.

Example structure:

```text
Action → implementation → measurable result
```

Never invent numbers.

---

# 12. Services / What I Do

**Optional feature.**

Include this only if the developer actively offers freelance/client services. It is not required for an employment-focused developer portfolio.

## 12.1 Service Card

Each card contains:

- Service title.
- Description.
- Deliverables.
- Technologies.
- CTA.

## 12.2 Example Service Structure

```text
Responsive Web Development

Build responsive interfaces that work across
desktop, tablet, and mobile.

Deliverables:
- Responsive UI
- Reusable components
- Cross-browser support
- Accessibility-focused implementation
```

Content must reflect real services.

---

# 13. Resume

**Core only when a real resume is available. A dedicated Resume page is optional.**

## 13.1 Resume CTA

The site should provide:

```text
View Resume
Download Resume
```

if an actual resume file is available.

## 13.2 Resume File Requirements

Recommended:

- PDF.
- Professional filename.
- Current version.
- Text selectable.
- Accessible document where possible.

Example:

```text
firstname-lastname-resume.pdf
```

## 13.3 Resume Viewer

Optional:

- Open PDF in browser.
- Download PDF.

Do not build an unnecessary custom PDF viewer unless there is a real requirement.

---

# 14. Contact Page / Section

## 14.1 Contact Goals

A visitor must have at least one reliable way to contact the developer.

## 14.2 Contact Information

Possible:

- Email.
- Phone.
- Location.
- LinkedIn.
- GitHub.

Only display information intentionally provided.

## 14.3 Contact Form

Recommended fields:

```text
Name
Email
Subject
Message
```

Optional:

```text
Company
Project Type
Budget
```

Do not collect unnecessary personal data.

## 14.4 Client-Side Validation

Validate:

### Name

- Required.
- Reasonable length.

### Email

- Required.
- Valid email format.

### Subject

- Required if included.

### Message

- Required.
- Minimum sensible length.
- Maximum sensible length.

## 14.5 Validation Messages

Messages must be:

- Specific.
- Human-readable.
- Associated with the correct field.
- Visible to screen readers.

Example:

```text
Please enter a valid email address.
```

## 14.6 Submission States

The form must support:

1. Idle.
2. Editing.
3. Submitting.
4. Success.
5. Validation error.
6. Server/service error.

## 14.7 Success State

Example:

```text
Message sent successfully.
I'll get back to you as soon as possible.
```

Do not promise a response time unless it is actually defined.

## 14.8 Error State

Example:

```text
Something went wrong while sending your message.
Please try again or contact me directly by email.
```

## 14.9 Spam Protection

If a real backend/form provider is used, implement appropriate anti-spam protection.

Possible mechanisms:

- Honeypot field.
- Rate limiting.
- CAPTCHA/Turnstile where necessary.

Do not expose private API keys in front-end code.

---

# 15. Navigation System

## 15.1 Desktop Navbar

Contains:

- Brand/name.
- Navigation links.
- Resume CTA.
- Optional theme toggle.

## 15.2 Active Route

The current page/section should be visually identifiable.

Requirements:

- Active state must be obvious.
- Active state must meet contrast requirements.
- It must not rely only on color.

## 15.3 Sticky Navigation

Optional.

If sticky:

- Do not cover anchor targets.
- Maintain readable contrast over content.
- Avoid excessive height.
- Do not cause layout shifts.

## 15.4 Mobile Navigation

Requirements:

- Menu button.
- Open/close state.
- Focus management.
- Escape key closes menu.
- Clicking a navigation item closes menu.
- Clicking outside can close it if implemented.
- Body scroll behavior must be controlled correctly.
- Screen reader state must be announced using appropriate attributes.

---

# 16. Theme System

## 16.1 Light Theme

Must provide:

- Readable text.
- Sufficient contrast.
- Consistent surfaces.
- Clear interactive states.

## 16.2 Dark Theme

Optional but recommended for a developer portfolio.

If implemented:

- All components must support dark mode.
- Images must remain readable.
- Borders/dividers must remain visible.
- Form controls must remain usable.

## 16.3 Theme Persistence

If a theme toggle exists:

- Save preference locally.
- Respect system preference on first visit if appropriate.
- Avoid flash of incorrect theme.

## 16.4 Theme Toggle Accessibility

The toggle must have:

- Accessible name.
- Keyboard support.
- Visible state.
- Correct semantic button behavior.

---

# 17. Responsive Design

The website must support:

- Small mobile.
- Large mobile.
- Tablet.
- Laptop.
- Desktop.
- Large desktop.

## 17.1 Layout Principles

Avoid:

- Fixed-width layouts.
- Horizontal overflow.
- Tiny text.
- Hover-only functionality.
- Desktop-only interactions.

## 17.2 Mobile Requirements

Verify:

- Navbar.
- Hero.
- Images.
- Project cards.
- Project gallery.
- Forms.
- Buttons.
- Footer.
- Typography.
- Modals.
- Theme toggle.

## 17.3 Touch Targets

Interactive controls must have sufficiently large touch areas.

Do not place tiny buttons close together.

---

# 18. Accessibility

Accessibility is a core requirement, not an optional enhancement.

## 18.1 Semantic HTML

Use appropriate elements:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<button>
<a>
<form>
<label>
```

Do not use clickable `<div>` elements when semantic controls exist.

## 18.2 Heading Structure

Maintain logical hierarchy:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 ├── H2
 └── H2
```

One primary H1 per page where appropriate.

## 18.3 Keyboard Navigation

All interactive functionality must work using:

- Tab.
- Shift + Tab.
- Enter.
- Space.
- Escape.
- Arrow keys where appropriate.

## 18.4 Focus

Provide:

- Visible focus state.
- Logical focus order.
- Focus management for dialogs/mobile menus.

Never remove focus outlines without providing an equally visible alternative.

## 18.5 Images

Every meaningful image requires descriptive alt text.

Decorative images should use empty alt text where appropriate.

## 18.6 Reduced Motion

Respect:

```css
prefers-reduced-motion
```

Animations should be reduced or disabled where appropriate.

## 18.7 Color

Do not communicate information using color alone.

---

# 19. Animation and Interaction

Animation should support the content rather than become the product.

## 19.1 Recommended Animations

Possible:

- Section reveal.
- Subtle hover transitions.
- Button transitions.
- Image transitions.
- Navigation transitions.
- Project gallery transitions.

## 19.2 Avoid

- Constant background motion.
- Excessive parallax.
- Long loading animations.
- Unnecessary cursor effects.
- Animation on every element.
- Motion that makes content difficult to read.

## 19.3 Animation Requirements

Every animation must:

- Be performant.
- Not block interaction.
- Respect reduced-motion preferences.
- Avoid layout shifts.
- Avoid unnecessary JavaScript.

---

# 20. Project Image System

## 20.1 Image Requirements

Project images should:

- Be optimized.
- Have correct dimensions.
- Use modern formats where supported.
- Have descriptive alt text.
- Avoid unnecessary huge files.

## 20.2 Image Loading

Use:

- Responsive image sizing.
- Lazy loading for below-the-fold images.
- Priority loading only for critical hero images.
- Correct intrinsic dimensions to reduce layout shift.

## 20.3 Image Gallery

Gallery behavior:

- Click thumbnail/image.
- Open larger view if lightbox is implemented.
- Previous/next controls.
- Close control.
- Keyboard support.
- Escape closes lightbox.
- Focus returns to triggering element.

A lightbox is optional; a simple gallery is sufficient if the portfolio does not require a modal experience.

---

# 21. SEO

## 21.1 Page Metadata

Every important page should have:

- Unique title.
- Meta description.
- Canonical URL where applicable.
- Open Graph metadata.
- Social preview image where available.

## 21.2 Example Title Pattern

```text
Project Name | Developer Name
```

Home:

```text
Developer Name | Front-End Developer
```

## 21.3 Open Graph

Provide:

```text
og:title
og:description
og:image
og:url
og:type
```

## 21.4 Structured Data

**Optional enhancement.**

Add structured data only when the chosen schema accurately represents the page and can be maintained with the actual portfolio content. It is not required for the first release.

Possible types:

- Person.
- WebSite.
- CreativeWork / SoftwareApplication for suitable project pages.

Do not add schema types that do not accurately describe the page.

## 21.5 Sitemap

**Recommended for production, but simple.**

For a small portfolio, a manually maintained XML sitemap is practical. Google documents manual sitemap creation as suitable for sites with only a few dozen URLs. citeturn1search1

## 21.6 Robots

**Recommended for production when search-engine crawling needs to be controlled.**

`robots.txt` controls crawler access; it must not be treated as a security mechanism for hiding private pages. Google explicitly recommends `noindex` or authentication when a page should not appear in search results. citeturn1search3

Do not accidentally block:

- Main pages.
- Project pages.
- Assets required for rendering.

---

# 22. Performance

Performance is part of the portfolio's credibility.

## 22.1 Performance Goals

Performance optimization is required, but numeric results must be measured rather than promised.

Optimize for:

- Fast first render.
- Low JavaScript overhead.
- Optimized images.
- Minimal layout shift.
- Responsive interaction.
- Good Core Web Vitals.

## 22.2 Core Web Vitals

Monitor:

- LCP
- INP
- CLS

Do not claim a score unless measured.

## 22.3 Code Splitting

Load non-critical code only when required.

## 22.4 Dependency Control

Do not add libraries for functionality that can be implemented cleanly with native platform features.

Avoid:

- Duplicate libraries.
- Deprecated libraries.
- Abandoned packages.
- Unnecessary animation frameworks.
- Unnecessary state management.

---

# 23. Security

Even a static portfolio needs security considerations.

## 23.1 Secrets

Never put:

- API secrets.
- Private keys.
- Database credentials.
- Service-role keys.

inside client-side code.

## 23.2 External Links

Validate external links.

Where a new tab is intentionally used, handle the security implications appropriately.

## 23.3 Contact Form

If using a backend or third-party service:

- Validate server-side.
- Sanitize data.
- Rate-limit submissions.
- Protect secrets.
- Prevent abuse.

## 23.4 Content Security

Avoid injecting untrusted HTML.

Do not use unsafe HTML rendering unless absolutely required and properly sanitized.

---

# 24. Analytics

Analytics are optional and should be used only when there is a real need.

If implemented, track meaningful events such as:

```text
project_view
live_demo_click
github_click
resume_view
resume_download
contact_form_started
contact_form_submitted
social_profile_click
```

Do not collect unnecessary personal information.

Provide appropriate privacy information where legally required.

---

# 25. Error Handling

## 25.1 404 Page

Must contain:

- Clear message.
- Link to Home.
- Link to Projects.
- Useful visual treatment.

Example:

```text
Page not found.

The page you're looking for doesn't exist or may have moved.

[Back Home]
```

## 25.2 Project Not Found

If a project slug does not exist:

- Show a controlled not-found state.
- Do not crash the application.
- Provide navigation back to Projects.

## 25.3 Form Failure

Never silently fail.

Show:

- Error state.
- Retry option.
- Alternative contact method if available.

---

# 26. Loading States

Loading states are required when content is actually asynchronous.

## 26.1 Skeletons

Use skeletons when they improve perceived loading and the content layout is known.

## 26.2 Avoid Fake Loading

Do not create artificial loading delays.

## 26.3 Error + Retry

Any asynchronous content should have:

```text
Loading
Success
Error
Retry
```

states where applicable.

---

# 27. Browser Compatibility

Test current versions of:

- Chrome.
- Safari.
- Edge.
- Firefox.

Test:

- Desktop.
- Mobile browsers where practical.

Do not optimize exclusively for one browser.

---

# 28. Cross-Device Testing

Minimum categories:

## Mobile

- Small Android phone.
- Large Android phone.
- iPhone-sized viewport.

## Tablet

- Portrait.
- Landscape.

## Desktop

- 1366px-class viewport.
- 1440px-class viewport.
- Large desktop viewport.

## Test Areas

- Navigation.
- Hero.
- Buttons.
- Images.
- Projects.
- Filters.
- Project details.
- Contact form.
- Footer.
- Theme.
- Keyboard navigation.

---

# 29. Technical Architecture

## 29.1 Recommended Architecture

Use a component-based front-end architecture.

Conceptual structure:

```text
src/
├── components/
│   ├── common/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── projects/
│   ├── forms/
│   └── ui/
├── pages/
├── data/
├── assets/
├── hooks/
├── utils/
├── styles/
└── types/
```

The exact framework structure can vary according to the selected framework.

## 29.2 Component Principles

Components should:

- Have one clear responsibility.
- Avoid unnecessary coupling.
- Receive data through props where appropriate.
- Avoid duplicated markup.
- Avoid giant monolithic components.

## 29.3 Reusable Components

Recommended reusable components:

```text
Button
LinkButton
Container
SectionHeading
Navbar
MobileMenu
Footer
SocialLinks
ProjectCard
ProjectGrid
ProjectFilter
ProjectGallery
SkillCard
SkillGroup
ExperienceItem
ServiceCard
ContactForm
Input
Textarea
ThemeToggle
Modal
LoadingState
ErrorState
NotFound
```

Only create components when they provide real reuse or clear responsibility.

---

# 30. Routing

Routes should be predictable.

Example:

```text
/
 /about
 /skills
 /projects
 /projects/:slug
 /experience
 /services
 /contact
```

If sections are implemented as a single-page site, anchor routes may be used:

```text
/#about
/#skills
/#projects
/#experience
/#services
/#contact
```

The chosen strategy must be consistent.

---

# 31. State Management

Do not introduce global state management unless required.

## 31.1 Local State

Use local state for:

- Mobile menu.
- Theme.
- Form fields.
- Project filters.
- Gallery state.
- Modal state.

## 31.2 Shared State

Use shared/global state only when multiple distant components genuinely require the same changing data.

## 31.3 Server State

If external APIs are introduced later, use a suitable server-state approach rather than forcing API data into unrelated UI state.

---

# 32. Backend Requirement

## 32.1 Static Portfolio

A backend is **not required** for:

- Static portfolio content.
- Project descriptions.
- Skills.
- Experience.
- Static resume.
- GitHub links.
- Live project links.

## 32.2 Backend Needed For

A backend or external service is required if the site needs:

- Contact form processing.
- Authentication.
- Private dashboard.
- Visitor-specific data.
- Database-backed content management.
- Dynamic private functionality.

## 32.3 Recommended Initial Scope

Keep the portfolio static unless there is a real requirement for dynamic server-side functionality.

**Default contact implementation:** a normal email link.

**Optional contact-form implementation:** add a form provider or secure server/serverless endpoint only if a form is genuinely required.

This reduces:

- Attack surface.
- Hosting complexity.
- Maintenance.
- Cost.
- Failure points.

---

# 33. Contact Form Architecture

If a contact form is required, choose one deliberate architecture.

### Option A — Form Service

Front end submits to a trusted form service.

Advantages:

- Minimal backend.
- Simple deployment.
- Spam controls may be available.

### Option B — Serverless Endpoint

Front end calls:

```text
POST /api/contact
```

Serverless function:

1. Validates input.
2. Applies spam/rate limits.
3. Sends email.
4. Returns success/error.

### Option C — Direct Email

Use a simple email link:

```text
mailto:developer@example.com
```

This requires no form backend.

The implementation should select one approach rather than implementing all three.

---

# 34. Data Storage

A standard portfolio generally does not require a database.

## Static Data

Can live in:

- JSON.
- TypeScript objects.
- Markdown/MDX content.
- CMS only if content-management requirements justify it.

## Database

Use a database only if the portfolio needs actual dynamic data.

Examples:

- Blog CMS.
- Admin dashboard.
- Dynamic project management.
- Contact records.

Do not introduce a database simply because modern applications often use one.

---

# 35. Optional Blog

A blog should be considered a separate feature, not assumed to be part of the core portfolio.

If included, it should support:

```text
Blog listing
Post detail
Categories
Tags
Reading time
Published date
Author
SEO metadata
RSS feed
```

Do not add a blog unless the developer intends to maintain it.

---

# 36. Optional Case Studies

For high-value projects, a deeper case-study format can be used.

Recommended structure:

```text
Overview
Problem
Goals
Constraints
Research
Design
Technical Approach
Implementation
Challenges
Solutions
Accessibility
Performance
Testing
Outcome
Lessons Learned
```

Only include sections where real information exists.

---

# 37. Optional GitHub Integration

A live GitHub API integration is not required.

Static repository links are simpler and more reliable.

If live integration is eventually used, account for:

- API limits.
- Loading failures.
- Rate limiting.
- Privacy.
- External dependency availability.

Do not make the entire portfolio dependent on GitHub availability.

---

# 38. Optional Testimonials

If testimonials are used:

Each testimonial must contain:

```text
Quote
Person name
Role
Company
Relationship/context
```

Only publish testimonials with permission.

Do not create fictional testimonials.

---

# 39. Optional Availability Indicator

If the developer wants to communicate availability:

Possible states:

```text
Open to opportunities
Available for freelance work
Not currently available
```

This must reflect reality and should be easy to update.

---

# 40. Footer

Footer should include:

## Brand

- Name/logo.
- Short description.

## Navigation

- About.
- Skills.
- Projects.
- Experience.
- Contact.

## Social

Only actual profiles.

## Contact

Actual email or contact route.

## Legal

Where applicable:

- Privacy Policy.
- Terms.
- Cookie information.

Do not add legal pages unnecessarily if they are not required by the site's actual data practices.

---

# 41. Typography

Typography must prioritize:

1. Readability.
2. Hierarchy.
3. Consistency.
4. Performance.

Define:

```text
Display heading
H1
H2
H3
Body
Small text
Caption
Button
Navigation
```

Avoid using too many font families.

If external fonts are used:

- Load only required weights.
- Avoid unnecessary font variants.
- Optimize loading.

---

# 42. Design System

Define reusable design tokens in `src/styles/global.css` using CSS custom properties and Tailwind theme mappings. Follow the supplied visual references: a deep violet-navy canvas, cyan and magenta gradients, Josefin Sans display typography, and Inter body text.

## Colors

```text
page: #100425
surface: translucent violet-black
surface-secondary: #21133c
text-primary: #f8f6fb
text-secondary: #c5bbd2
border: 16% lavender-white
violet: #dc00d3
cyan: #0cffff
primary-action: linear-gradient(110deg, cyan, violet)
form-field: #f8f8fb with #100425 text
success: #16805d
error: #c43e3e
warning: #9a6700
```

## Spacing

Use the Tailwind spacing scale for component internals; use the shared `page-gutter` and `section` responsive tokens for page-level layout. Avoid adding one-off spacing values when a token or scale value fits.

## Radius

Define consistent:

```text
small
medium
large
pill
```

Initial values: control `0.5rem`, card `1rem`, pill `9999px`.

## Shadows

Use a limited set of soft violet shadows and cyan/magenta glows for featured actions. Keep shadows restrained and remove them for print where applicable.

## Motion

Use fast `160ms`, base `280ms`, and slow `700ms` durations with the shared standard easing. Honor `prefers-reduced-motion`; motion must not be required to reveal content or understand state.

---

# 43. UI States

Every interactive component should be considered in all required states.

## Buttons

```text
Default
Hover
Focus
Active
Disabled
Loading
```

## Inputs

```text
Default
Focus
Filled
Error
Disabled
```

## Links

```text
Default
Hover
Focus
Visited where relevant
```

## Cards

```text
Default
Hover if interactive
Focus if interactive
```

---

# 44. Forms

Form architecture should include:

```text
Field
Label
Input
Helper text
Validation
Error
Submission
Success
```

Never rely only on placeholder text as a label.

---

# 45. Accessibility Testing

Minimum checks:

- Keyboard-only navigation.
- Visible focus.
- Screen-reader-friendly labels.
- Heading hierarchy.
- Form labels.
- Form errors.
- Image alt text.
- Color contrast.
- Reduced motion.
- Mobile menu accessibility.
- Modal accessibility if present.

Automated tools may include:

- Lighthouse.
- axe.
- WAVE.

Automated tools do not replace manual accessibility testing.

---

# 46. SEO Testing

Verify:

- Every important page has a title.
- Every important page has a description.
- Canonical URLs are correct.
- Social metadata is correct.
- Sitemap is valid.
- Robots configuration is correct.
- No unintended `noindex`.
- Project pages are crawlable where intended.
- Images have appropriate alt text.

---

# 47. Performance Testing

Measure:

- LCP.
- INP.
- CLS.
- Total page weight.
- JavaScript size.
- Image size.
- Font loading.
- Number of network requests.

Test both:

- Fast connection.
- Slower mobile connection.

Do not claim performance results without measuring them.

---

# 48. Deployment

The site should support deployment to a modern static/edge hosting provider.

Deployment requirements:

- Production build succeeds.
- Environment variables are configured securely.
- No development-only code remains.
- Routes work correctly.
- HTTPS is enabled.
- Custom domain can be configured.
- Error page works.
- Assets load correctly.

---

# 49. Environment Variables

Only use environment variables for values that actually need configuration.

Example:

```text
PUBLIC_SITE_URL
CONTACT_ENDPOINT
ANALYTICS_ID
```

Never expose private secrets through public client-side variables.

---

# 50. Git and Repository Standards

Repository should contain:

```text
README.md
.gitignore
package configuration
source code
assets
```

Do not commit:

```text
.env
.env.local
private keys
credentials
large unnecessary build artifacts
```

Use meaningful commits.

Examples:

```text
feat: add project detail pages
feat: add responsive navigation
fix: resolve mobile menu focus
perf: optimize project images
a11y: improve contact form labels
```

---

# 51. Code Quality

Required:

- Consistent formatting.
- Linting.
- Meaningful names.
- Small focused components.
- No duplicated constants.
- No dead code.
- No unused imports.
- No console errors in production.
- No broken links.
- No unnecessary dependencies.

Avoid:

- Magic numbers.
- Deeply nested components.
- Giant files.
- Copy-pasted project cards.
- CSS hacks.
- `!important` used as a routine fix.
- Deprecated APIs.

---

# 52. Testing Strategy

## 52.1 Unit Tests

Test reusable logic such as:

- Project filtering.
- Utility functions.
- Validation.
- Data transformation.

## 52.2 Component Tests

Test:

- Navigation.
- Project card.
- Project filters.
- Contact form.
- Theme toggle.
- Gallery.

## 52.3 End-to-End Tests

Critical flows:

### Flow 1 — Browse Portfolio

```text
Open Home
→ View Projects
→ Open Project
→ Read Project
→ Return to Projects
```

### Flow 2 — Contact

```text
Open Contact
→ Enter valid information
→ Submit
→ Verify success state
```

### Flow 3 — Invalid Form

```text
Open Contact
→ Submit invalid form
→ Verify validation
→ Correct fields
→ Submit successfully
```

### Flow 4 — Mobile Navigation

```text
Open mobile site
→ Open menu
→ Navigate to Projects
→ Menu closes
→ Project page loads
```

### Flow 5 — Keyboard Navigation

```text
Open website
→ Navigate using keyboard
→ Reach all interactive controls
→ Open required components
→ Close components correctly
```

---

# 53. Link Validation

Every external/internal link must be checked.

Validate:

- Navigation links.
- Project links.
- GitHub.
- LinkedIn.
- Resume.
- Contact.
- Social profiles.
- Footer links.

No placeholder:

```text
#
javascript:void(0)
```

for final functionality unless deliberately used for a valid UI control and implemented semantically.

---

# 54. Content Quality Rules

Portfolio content must be:

- Specific.
- Factual.
- Concise.
- Professional.
- Free from spelling errors.
- Free from fake claims.

Avoid:

```text
I am the world's best developer.
```

Prefer evidence:

```text
Built responsive React applications with reusable component architecture.
```

Claims should be supported by actual work.

---

# 55. Project Content Quality

Every published project should answer:

1. What is it?
2. Why was it built?
3. Who is it for?
4. What did the developer do?
5. Which technologies were used?
6. What were the difficult parts?
7. How were they solved?
8. What does the final product do?
9. Is there a live demo?
10. Is there source code?

---

# 56. Recruiter-Oriented Information Architecture

A recruiter should be able to reach the following quickly:

```text
Developer identity
↓
Core skills
↓
Selected projects
↓
Experience
↓
Resume
↓
Contact
```

Do not bury these behind unnecessary interactions.

---

# 57. Developer-Oriented Information Architecture

A technical visitor should be able to inspect:

```text
Projects
↓
Project detail
↓
Technology
↓
Architecture
↓
Implementation
↓
Challenges
↓
Repository
```

---

# 58. Client-Oriented Information Architecture

A client should be able to understand:

```text
What I do
↓
What I have built
↓
How I work
↓
Services
↓
Contact
```

---

# 59. Recommended Home Page Order

A strong default structure is:

```text
1. Navbar
2. Hero
3. Short introduction / value proposition
4. Core skills
5. Featured projects
6. Experience
7. Services
8. About / development approach
9. Contact CTA
10. Footer
```

The exact order can change after visual design, but the information hierarchy should remain clear.

---

# 60. Conversion Points

Primary:

```text
View Projects
Contact Me
```

Secondary:

```text
View Resume
GitHub
LinkedIn
Live Demo
```

Do not place too many competing CTAs in the hero.

---

# 61. No-Backend MVP Scope

This is the validated default first release. It is practical without a custom backend or database.

A practical first release can be:

```text
Home
About
Skills
Projects
Project Details
Experience
Resume
Contact via email link
Footer
404
SEO
Accessibility
Responsive design
Performance optimization
```

This version can remain completely static.

---

# 62. Enhanced Version Scope

After the core site is stable, optional features can be added individually:

```text
Contact form
Dark mode
Blog
Case studies
Testimonials
Analytics
GitHub integration
CMS
Advanced project filtering
```

Do not implement these all automatically.

Each additional feature must have a clear reason and maintenance plan.

---

# 63. Features That Should NOT Be Added Without a Requirement

Do not automatically add:

- Authentication.
- User accounts.
- Admin dashboard.
- Database.
- Chat system.
- AI chatbot.
- Visitor messaging.
- Complex CMS.
- Cryptocurrency/web3 features.
- Newsletter system.
- Unnecessary animations.
- Fake statistics.
- Fake testimonials.
- Fake client logos.
- Fake awards.
- Fake certifications.
- Fake project metrics.
- Unnecessary APIs.

These increase complexity without necessarily improving a developer portfolio.

---

# 64. Validated Feature Matrix

| Feature | Base Release | Conditional | External Dependency | Practical Notes |
|---|---|---|---|---|
| Navbar | Yes | No | No | Standard semantic navigation |
| Mobile navigation | Yes | No | No | Requires keyboard/focus handling |
| Hero | Yes | No | No | Static content |
| About | Yes | No | No | Static content |
| Skills | Yes | No | No | Local structured data |
| Projects | Yes | No | No | Local structured data |
| Project details | Yes | No | No | Route + local data |
| Project gallery | Yes | No | No | Native image UI is sufficient |
| Experience | When applicable | No | No | Omit if there is no relevant experience |
| Services | No | Yes | No | Only for freelance/client positioning |
| Resume link | When applicable | No | No | Requires real PDF/file |
| Dedicated Resume page | No | Yes | No | Usually unnecessary for small portfolio |
| Email contact | Yes | No | No | Simplest reliable contact path |
| Contact form | No | Yes | Yes | Form service or secure endpoint |
| Theme toggle | No | Yes | No | Useful but not required |
| Project filters | No | Yes | No | Useful when project count is large |
| Project search | No | Yes | No | Usually unnecessary for small portfolios |
| Blog | No | Yes | Usually | Requires ongoing content maintenance |
| CMS | No | Yes | Yes | Only if content must be managed outside code |
| GitHub API | No | Yes | Yes | Static links are preferred initially |
| Testimonials | No | Yes | No | Requires genuine permissioned testimonials |
| Analytics | No | Yes | Yes | Requires privacy/consent consideration |
| Structured data | No | Yes | No | Only when schema accurately describes content |
| Sitemap | Recommended | No | No | Simple XML file is sufficient |
| robots.txt | Recommended | No | No | Crawling control, not security |
| Canonical metadata | Recommended | No | No | Useful for preferred URLs |
| Open Graph | Recommended | No | No | Social sharing metadata |
| 404 | Yes | No | No | Standard route fallback |
| Database | No | No | Yes | Not justified by a normal portfolio |
| Authentication | No | No | Yes | Not part of portfolio scope |
| Admin dashboard | No | No | Yes | Not part of portfolio scope |
| AI chatbot | No | No | Yes | Unnecessary for base portfolio |
| Live chat | No | No | Yes | Unnecessary complexity |
| Fake metrics/testimonials | No | No | N/A | Never use fabricated evidence |

# 65. Page-to-Component Mapping

## Home

```text
HomePage
├── Navbar
├── HeroSection
├── IntroSection
├── SkillsPreview
├── FeaturedProjects
│   └── ProjectCard[]
├── ExperiencePreview
├── ServicesPreview
├── ContactCTA
└── Footer
```

## Projects

```text
ProjectsPage
├── PageHeader
├── ProjectFilters
├── ProjectGrid
│   └── ProjectCard[]
└── Footer
```

## Project Details

```text
ProjectDetailsPage
├── ProjectHero
├── ProjectMeta
├── ProjectLinks
├── ProblemSection
├── SolutionSection
├── FeaturesSection
├── TechnicalDetails
├── ProjectGallery
├── ChallengesSection
├── OutcomeSection
├── ProjectNavigation
└── Footer
```

## Contact

```text
ContactPage
├── PageHeader
├── ContactInformation
├── ContactForm
└── Footer
```

---

# 66. Project Card Atomic Requirements

A project card must:

1. Receive project data.
2. Render project image.
3. Render title.
4. Render short description.
5. Render selected technologies.
6. Provide project detail navigation.
7. Render live demo only if available.
8. Render repository only if available.
9. Have accessible image alt text.
10. Have keyboard-accessible links.
11. Maintain consistent dimensions.
12. Work with short and long project titles.
13. Work with missing optional links.
14. Work on all responsive breakpoints.

---

# 67. Contact Form Atomic Requirements

The contact form must:

1. Render labels.
2. Render inputs.
3. Track field values.
4. Validate required fields.
5. Validate email format.
6. Display field-specific errors.
7. Prevent invalid submission.
8. Show submitting state.
9. Prevent accidental duplicate submission.
10. Send data through the selected mechanism.
11. Handle success.
12. Handle failure.
13. Clear/reset only after successful submission if appropriate.
14. Preserve user-entered data when submission fails.
15. Support keyboard navigation.
16. Provide accessible error announcements.

---

# 68. Mobile Menu Atomic Requirements

The mobile menu must:

1. Have a menu button.
2. Have an accessible name.
3. Expose open/closed state.
4. Open on activation.
5. Close on activation.
6. Close when navigation occurs.
7. Support Escape.
8. Maintain logical focus.
9. Prevent problematic background scrolling.
10. Restore focus appropriately.
11. Not cover critical content unexpectedly.
12. Work across mobile widths.

---

# 69. Project Gallery Atomic Requirements

The gallery must:

1. Render project images.
2. Preserve image aspect ratio.
3. Provide alt text.
4. Support previous/next if carousel behavior is used.
5. Support keyboard navigation.
6. Handle first/last image correctly.
7. Not produce broken image states.
8. Support mobile touch interaction where appropriate.
9. Avoid loading all huge images unnecessarily.
10. Preserve layout stability.

---

# 70. Theme Atomic Requirements

If theme switching is implemented:

1. Detect initial preference.
2. Apply theme consistently.
3. Allow manual switching.
4. Persist preference.
5. Prevent visible theme flash where possible.
6. Update accessible toggle state.
7. Test every page.
8. Test every component.
9. Test form controls.
10. Test images and icons.

---

# 71. Content Management Rules

Content must be separated from presentation where practical.

Example:

```text
data/
├── profile
├── projects
├── skills
├── experience
└── services
```

This makes it possible to update:

```text
Project title
Project image
Technology
Description
Live URL
GitHub URL
```

without changing the ProjectCard component.

---

# 72. Dependency Rules

Before installing a dependency, ask:

1. Is the feature actually required?
2. Can the platform already solve it?
3. Is the package actively maintained?
4. Is it compatible with the selected framework?
5. Does it increase bundle size significantly?
6. Is there an accessibility concern?
7. Is there a simpler implementation?

Do not install a package simply because it is popular.

---

# 73. Development Phases

## Phase 1 — Foundation

Build:

- Project setup.
- Routing.
- Global styles.
- Design tokens.
- Layout.
- Navbar.
- Footer.
- Data structure.

## Phase 2 — Core Content

Build:

- Hero.
- About.
- Skills.
- Projects.
- Project details.
- Experience.
- Resume.
- Contact.

## Phase 3 — Responsive Design

Test and refine:

- Mobile.
- Tablet.
- Desktop.

## Phase 4 — Accessibility

Implement and verify:

- Keyboard.
- Focus.
- Semantic HTML.
- Labels.
- Alt text.
- Contrast.
- Reduced motion.

## Phase 5 — SEO

Implement:

- Metadata.
- Sitemap.
- Robots.
- Canonical URLs.
- Social metadata.
- Structured data where appropriate.

## Phase 6 — Performance

Optimize:

- Images.
- Fonts.
- JavaScript.
- CSS.
- Loading.
- Caching.

## Phase 7 — Testing

Run:

- Unit tests where useful.
- Component tests where useful.
- E2E critical flows.
- Browser testing.
- Accessibility testing.
- SEO checks.
- Link checks.

## Phase 8 — Deployment

Verify:

- Production build.
- Domain.
- HTTPS.
- Routing.
- Assets.
- Forms.
- Analytics if used.

---

# 74. Definition of Done

The portfolio is ready for launch only when:

## Content

- [ ] Developer information is accurate.
- [ ] All project information is accurate.
- [ ] No placeholder content remains.
- [ ] No fake claims remain.
- [ ] Resume is current.
- [ ] Contact information is correct.

## Navigation

- [ ] Desktop navigation works.
- [ ] Mobile navigation works.
- [ ] Active states work.
- [ ] Internal links work.
- [ ] External links work.
- [ ] Back navigation works.

## Projects

- [ ] Project grid is responsive.
- [ ] Project count can change without layout hacks.
- [ ] Project details work.
- [ ] Live demo links work.
- [ ] Repository links work.
- [ ] Gallery works.
- [ ] Missing optional fields do not break UI.

## Forms

- [ ] Validation works.
- [ ] Error state works.
- [ ] Loading state works.
- [ ] Success state works.
- [ ] Failure state works.
- [ ] Spam protection exists if needed.

## Accessibility

- [ ] Keyboard navigation works.
- [ ] Focus is visible.
- [ ] Images have correct alt text.
- [ ] Form fields have labels.
- [ ] Headings are structured.
- [ ] Contrast is acceptable.
- [ ] Reduced motion is supported.

## Responsive

- [ ] Mobile works.
- [ ] Tablet works.
- [ ] Desktop works.
- [ ] No horizontal overflow.
- [ ] Touch targets are usable.

## SEO

- [ ] Titles exist.
- [ ] Descriptions exist.
- [ ] Canonical URLs are correct.
- [ ] Sitemap exists.
- [ ] Robots configuration is correct.
- [ ] Open Graph metadata works.
- [ ] No accidental noindex exists.

## Performance

- [ ] Images are optimized.
- [ ] Fonts are optimized.
- [ ] JavaScript is reasonable.
- [ ] No unnecessary dependencies exist.
- [ ] No major layout shifts exist.
- [ ] Performance has been measured.

## Quality

- [ ] No console errors.
- [ ] No broken images.
- [ ] No broken links.
- [ ] No unused production code.
- [ ] No secrets in repository.
- [ ] Production build succeeds.

---

# 75. Final Validated Feature Set

## Essential

```text
✓ Responsive layout
✓ Home page
✓ About
✓ Skills
✓ Projects
✓ Project details
✓ Experience
✓ Resume
✓ Contact
✓ Navigation
✓ Footer
✓ 404 page
✓ SEO
✓ Accessibility
✓ Performance optimization
✓ Cross-browser support
✓ Data-driven project content
✓ Responsive project gallery
✓ Real external links
✓ Error handling
```

## Recommended Enhancements

```text
○ Dark/light theme
○ Deeper case-study content
○ Project filtering
○ Professional social links
○ Contact form
```

## Optional / Advanced

```text
○ Analytics
○ Blog
○ CMS
○ Live GitHub integration
○ Testimonials
○ Advanced project search
○ Availability indicator
```

The portfolio remains complete without these enhancements.

---

# 76. Final Architecture Principle

The portfolio should demonstrate the same engineering quality expected from a professional front-end developer.

The website itself must therefore demonstrate:

```text
Clean UI
    ↓
Responsive implementation
    ↓
Reusable components
    ↓
Data-driven content
    ↓
Accessible interactions
    ↓
Good performance
    ↓
SEO-ready structure
    ↓
Reliable error handling
    ↓
Maintainable code
    ↓
Production-ready deployment
```

The portfolio should not become an unnecessarily complex application.

The target is a **professional, fast, accessible, maintainable, evidence-driven front-end developer portfolio** where the quality of the implementation is itself part of the portfolio.

---

# 77. Single Source of Truth Rule

During implementation:

1. This document defines the intended product scope.
2. New features must be explicitly added to the specification before implementation.
3. Do not silently introduce unrelated features.
4. Do not use deprecated or legacy APIs.
5. Do not patch architectural problems repeatedly; refactor the underlying implementation when required.
6. Do not duplicate components when a reusable component is appropriate.
7. Do not hard-code repeatable project/content structures into UI.
8. Do not invent developer information, projects, metrics, testimonials, companies, certifications, or achievements.
9. Optional features must remain disabled until intentionally selected.
10. Every implemented feature must have a defined user purpose, UI behavior, data requirement, responsive behavior, accessibility behavior, and error/edge-case behavior where applicable.

---

# 78. Launch Checklist

Before publishing:

```text
[ ] Final content reviewed
[ ] Personal information reviewed
[ ] Resume reviewed
[ ] Projects reviewed
[ ] Project images optimized
[ ] GitHub links checked
[ ] Live demo links checked
[ ] Social links checked
[ ] Email/contact method checked
[ ] Mobile layout checked
[ ] Tablet layout checked
[ ] Desktop layout checked
[ ] Safari checked
[ ] Chrome checked
[ ] Firefox checked
[ ] Edge checked
[ ] Keyboard navigation checked
[ ] Screen-reader basics checked
[ ] Contrast checked
[ ] Reduced motion checked
[ ] Contact validation checked
[ ] Contact success checked
[ ] Contact failure checked
[ ] 404 checked
[ ] SEO titles checked
[ ] Meta descriptions checked
[ ] Open Graph checked
[ ] Sitemap checked
[ ] Robots checked
[ ] Canonical URLs checked
[ ] Performance measured
[ ] Console errors removed
[ ] Broken links removed
[ ] Production build succeeds
[ ] Environment variables reviewed
[ ] Secrets excluded
[ ] HTTPS enabled
[ ] Domain configured
[ ] Final production test completed
```

# 79. Audit Decision Log

## Confirmed Practical

### Static content architecture

A portfolio can keep profile, skills, experience, services, and project information in local structured data. A database is not inherently required.

### Project routes

Project detail routes using slugs are practical in all common modern front-end routing approaches.

### Responsive images

Native responsive image techniques and framework image components are sufficient. A separate image-management platform is not required.

### Project gallery

A gallery does not require a third-party carousel. Previous/next buttons and a simple responsive gallery can be implemented directly.

If a modal viewer is desired, the native `<dialog>` element is broadly available. `showModal()` provides modal behavior and makes the rest of the document inert. citeturn0search0turn0search5

### Accessibility

Keyboard navigation, visible focus, semantic HTML, labels, alt text, reduced motion, and focus management are practical and expected. WCAG 2.2 explicitly requires a visible keyboard focus mode at Level AA. citeturn1search7turn1search4

### SEO

Titles, descriptions, canonical URLs, sitemap, robots configuration, and Open Graph metadata are all practical for a small portfolio. A sitemap can be manually maintained when the number of URLs is small. citeturn1search1turn1search2

### Performance

Image optimization, code splitting where useful, limited dependencies, font optimization, and layout-stability work are practical. Core Web Vitals should be measured after implementation rather than promised in advance. citeturn1search0

## Conditional Features

### Contact form

Technically practical, but it is not a purely front-end-only feature if messages need to be delivered securely. Use a reputable form service or a secure server/serverless endpoint.

### Analytics

Technically practical, but not necessary for launch. Add only when there is a clear measurement objective.

### CMS

Technically practical, but not justified unless content needs to be edited independently of code.

### GitHub integration

Technically practical, but live API integration adds an external dependency. Static repository links are the default.

### Blog

Technically practical, but it becomes an ongoing publishing responsibility. It should not be added merely to make the portfolio appear more complete.

## Removed From Core Scope

The audit explicitly removes these from the base build:

- Database
- Authentication
- Admin dashboard
- AI chatbot
- Live visitor chat
- Live GitHub API integration
- CMS
- Blog
- Analytics
- Contact form
- Advanced search
- Testimonials
- Availability indicator
- Theme switching

They remain possible future enhancements where marked optional.

## Final Technical Verdict

**The validated portfolio is practical to build and deploy as a primarily static front-end application.**

The safest implementation strategy is:

```text
Static content/data
        ↓
Reusable components
        ↓
Client-side routing or framework routing
        ↓
Optimized images
        ↓
Semantic accessible UI
        ↓
SEO metadata
        ↓
Static hosting
        ↓
Custom domain + HTTPS
```

Only introduce:

```text
Form service
Serverless endpoint
Analytics
CMS
Database
External APIs
```

when a real product requirement justifies the additional dependency.

# End of Project Specification
