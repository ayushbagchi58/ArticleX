# Tech Blog App 🚀

A fast, SEO-optimized tech blog website built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
The app fetches blog data from a public API, supports search and category filtering, and follows modern SEO and accessibility best practices.

---

## 🌐 Live Demo
🔗 https://your-vercel-url.vercel.app

## 📦 GitHub Repository
🔗 https://github.com/your-username/blog-app

---

## 🛠️ Technologies Used
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Git & GitHub
- Vercel (Deployment)

---

## ✨ Features

### Home Page
- Header with navigation
- Hero section
- Article grid (10 posts)
- Footer

### Search
- Search by **title**, **description**, and **content**
- Displays search result count
- Shows "No results found" message

### Category Filter
- Displays all unique categories
- Active category highlighting
- Works together with search

### Article Modal
- Opens full article content
- Close via:
  - ❌ X button
  - ⌨ ESC key
  - 🖱 Outside click

### Responsive Design
- 📱 Mobile: 1 column
- 📲 Tablet: 2 columns
- 💻 Desktop: 3 columns

---

## 🔍 SEO Strategy

### Meta Tags
Implemented using Next.js Metadata API:
- Title (≤ 60 characters)
- Description (≤ 160 characters)
- Open Graph tags
- Twitter Card tags

### Semantic HTML
Used proper semantic elements:
- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<time>`
- Only **one H1 per page**, followed by H2 and H3

### Structured Data (JSON-LD)
- **WebSite schema** on homepage
- **Article schema** for blog posts

### Image Optimization
- Next.js `<Image>` component
- Lazy loading enabled
- Descriptive alt text for all images

### Technical SEO
- `robots.txt`
- `sitemap.xml`
- Clean URL structure

---

## ⚡ Performance Optimizations
- Server Components where possible
- API data fetching optimization
- Image optimization via Next.js
- Minimal client-side JS
- Lighthouse-tested before deployment

---

## 🧠 Search & Filter Logic
- Articles fetched once from API
- Search filters across:
  - title
  - description
  - content_text
- Category filter applied on searched results
- Combined filtering handled in state

---

## ⏳ Loading & Error Handling
- Skeleton loaders while fetching data
- Graceful error UI for API failures

---

## ♿ Accessibility
- Keyboard navigation (Tab, Enter, ESC)
- Focus trapping in modal
- Proper color contrast (WCAG AA)
- Semantic HTML

---

## 📸 Lighthouse Reports

Screenshots stored in `/screenshots` folder:

- Performance
- Accessibility
- Best Practices
- SEO

---

## 🚧 Challenges Faced
- Combining search and category filters efficiently
- Implementing accessible modal behavior
- Structured data integration
- SEO optimization in App Router

---

## 🧪 How to Run Locally

```bash
npm install
npm run dev
