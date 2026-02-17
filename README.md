# Appscrip Product Listing Page

## 🔗 Live Demo
Deployed on Netlify:  
(Insert your Netlify URL here)

---

## 📌 Overview

This project is a fully responsive Product Listing Page (PLP) built as part of the Appscrip Frontend Assignment.

The implementation strictly follows the requirements:

- Built using **Next.js (App Router)**
- Implemented with **plain CSS only** (no CSS frameworks)
- Uses **Server Side Rendering (SSR)**
- Clean and minimal DOM structure
- Fully responsive for desktop, tablet, and mobile
- SEO optimized

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **React**
- **Plain CSS (No Tailwind / Bootstrap)**
- **FakeStore API** (for mock product data)

---

## 🧠 Architecture & Approach

### 1️⃣ Server Side Rendering (SSR)

Products are fetched using an async Server Component:

```ts
fetch("https://fakestoreapi.com/products", {
  cache: "no-store",
});


This ensures:

Better SEO

Faster initial load

Server-rendered product data

Only interactive UI elements (sort dropdown, filter toggle) use client-side state.

2️⃣ Clean Component Structure
components/
  Navbar.tsx
  Footer.tsx
  FilterSidebar.tsx
  FilterLayout.tsx
  SortDropdown.tsx
  ProductCard.tsx


Separation of concerns

Reusable components

Minimal logic per file

Reduced nesting depth

3️⃣ Plain CSS Implementation

No CSS frameworks used

CSS Grid for layout

Media queries for responsiveness

Modular CSS files

Minimal and semantic class naming

Responsive breakpoints:

Desktop → Sidebar + 3 column grid

Tablet → 2 column grid

Mobile → 1 column grid

🎯 Features

Responsive layout (Desktop / Tablet / Mobile)

Filter sidebar with hide/show toggle

Expandable filter sections

Custom styled checkboxes

Sort dropdown (RECOMMENDED, NEWEST, etc.)

Wishlist icon (SVG-based)

Semantic HTML structure

SEO-friendly markup

🔍 SEO Implementation

Proper <h1> and heading hierarchy

Metadata defined in layout.tsx

Meaningful alt text for images

Structured page layout for accessibility

⚙️ How to Run Locally
npm install
npm run dev


Build for production:

npm run build

🌐 Deployment

Hosted on Netlify.

Build command:

npm run build


Publish directory:

.next