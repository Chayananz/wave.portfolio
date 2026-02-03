# Portfolio Website - Chayanan Pathumarak

Personal portfolio website built with Next.js and Tailwind CSS.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS 4** | Styling |
| **Vercel Analytics** | Analytics tracking |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Main page (all sections)
│   ├── layout.tsx      # Root layout (Header, Footer, Analytics)
│   └── globals.css     # Global styles & animations
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
public/
├── profile.jpg         # Profile image
├── resume.pdf          # Resume/CV file
└── projects/
    ├── project1.jpg    # E-Commerce image
    ├── project2.jpg    # Error (placeholder)
    └── project3.jpg    # Restaurant App image
```

---

## File Locations & Line Numbers

### src/app/page.tsx

| Section | Line Numbers | Description |
|---------|--------------|-------------|
| **Skills Data** | 4-17 | skillCategories array |
| **Projects Data** | 20-44 | projects array |
| **Contact Data** | 47-79 | contactInfo array |
| **Hero Section** | 85-134 | Home/landing section |
| **About Section** | 137-191 | About me + **Download Resume (line 177-186)** |
| **Skills Section** | 194-231 | Skills & Expertise |
| **Projects Section** | 234-303 | Projects cards |
| **Contact Section** | 306-350 | Contact info |

### src/app/layout.tsx

| Item | Line Numbers | Description |
|------|--------------|-------------|
| **Imports** | 1-6 | Next.js, Analytics, components |
| **Metadata** | 12-32 | SEO metadata |
| **Body Layout** | 41-46 | Header, main, Footer, Analytics |

### src/app/globals.css

| Section | Line Numbers | Description |
|---------|--------------|-------------|
| **Theme Variables** | 3-19 | Light/dark mode colors |
| **Keyframe Animations** | 64-153 | fade-in, float, pulse-glow, etc. |
| **Animation Classes** | 155-223 | animate-* utility classes |
| **Hover Effects** | 225-249 | hover-lift, hover-scale, hover-glow |
| **Button Animations** | 251-276 | btn-animated |
| **Card Effects** | 278-286 | card-hover |
| **Text Gradient** | 288-305 | text-gradient-animate |
| **Underline Animation** | 307-325 | underline-animation |

### src/components/Header.tsx

| Item | Line Numbers | Description |
|------|--------------|-------------|
| **Nav Links** | 9-15 | Navigation menu items |
| **Desktop Nav** | 26-36 | Desktop navigation |
| **Mobile Menu** | 38-56 | Mobile hamburger button |
| **Mobile Nav** | 59-74 | Mobile navigation menu |

### src/components/Footer.tsx

| Item | Line Numbers | Description |
|------|--------------|-------------|
| **Gradient Line** | 7 | Top border decoration |
| **Logo** | 12-13 | Portfolio text |
| **Social Icons** | 16-48 | GitHub, LinkedIn, Email |
| **Copyright** | 51-53 | Copyright text |

---

## Key Components Location

### Download Resume Button
- **File:** `src/app/page.tsx`
- **Lines:** 177-186
```tsx
<a
  href="/resume.pdf"
  download
  className="btn-animated ..."
>
  Download Resume
</a>
```

### Projects Array
- **File:** `src/app/page.tsx`
- **Lines:** 20-44
- Projects: E-Commerce, Error, Restaurant App

### Contact Info
- **File:** `src/app/page.tsx`
- **Lines:** 47-79
- Email, GitHub, LinkedIn

### Navigation Menu
- **File:** `src/components/Header.tsx`
- **Lines:** 9-15
- Home, About, Skills, Projects, Contact

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

---

## Color Theme

Light blue theme using Tailwind CSS colors:
- Primary: `sky-400` (#38bdf8)
- Secondary: `cyan-400` (#22d3ee)
- Accent: `sky-500` (#0ea5e9)

---

## Deploy

Deployed on [Vercel](https://vercel.com) with automatic GitHub integration.
