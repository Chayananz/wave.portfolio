# Portfolio Website - Chayanan Pathumarak

เว็บไซต์ Portfolio ส่วนตัว สร้างด้วย Next.js และ Tailwind CSS

## เทคโนโลยีที่ใช้

| เทคโนโลยี | หน้าที่ |
|-----------|---------|
| **Next.js 16** | React framework |
| **TypeScript** | JavaScript แบบ type-safe |
| **Tailwind CSS 4** | จัดการ styling |
| **Vercel Analytics** | ติดตามสถิติเว็บ |

---

## โครงสร้างโปรเจค

```
src/
├── app/
│   ├── page.tsx        # หน้าหลัก (ทุก section)
│   ├── layout.tsx      # Layout หลัก (Header, Footer, Analytics)
│   └── globals.css     # CSS กลาง และ animations
├── components/
│   ├── Header.tsx      # แถบเมนูด้านบน
│   └── Footer.tsx      # ส่วนท้ายเว็บ
public/
├── profile.jpg         # รูปโปรไฟล์
├── resume.pdf          # ไฟล์ Resume/CV
└── projects/
    ├── project1.jpg    # รูป E-Commerce
    ├── project2.jpg    # รูป Error (placeholder)
    └── project3.jpg    # รูป Restaurant App
```

---

## ตำแหน่งไฟล์และบรรทัด

### src/app/page.tsx (หน้าหลัก)

| ส่วน | บรรทัด | รายละเอียด |
|------|--------|------------|
| **ข้อมูล Skills** | 4-17 | array skillCategories |
| **ข้อมูล Projects** | 20-44 | array projects |
| **ข้อมูล Contact** | 47-79 | array contactInfo |
| **Hero Section** | 85-134 | หน้าแรก/landing |
| **About Section** | 137-191 | เกี่ยวกับฉัน + **ปุ่ม Download Resume (บรรทัด 177-186)** |
| **Skills Section** | 194-231 | ทักษะและความเชี่ยวชาญ |
| **Projects Section** | 234-303 | การ์ด Projects |
| **Contact Section** | 306-350 | ข้อมูลติดต่อ |

### src/app/layout.tsx (Layout หลัก)

| ส่วน | บรรทัด | รายละเอียด |
|------|--------|------------|
| **Imports** | 1-6 | นำเข้า Next.js, Analytics, components |
| **Metadata** | 12-32 | ข้อมูล SEO |
| **Body Layout** | 41-46 | Header, main, Footer, Analytics |

### src/app/globals.css (CSS กลาง)

| ส่วน | บรรทัด | รายละเอียด |
|------|--------|------------|
| **ตัวแปร Theme** | 3-19 | สี light/dark mode |
| **Keyframe Animations** | 64-153 | fade-in, float, pulse-glow ฯลฯ |
| **Animation Classes** | 155-223 | class animate-* |
| **Hover Effects** | 225-249 | hover-lift, hover-scale, hover-glow |
| **Button Animations** | 251-276 | btn-animated |
| **Card Effects** | 278-286 | card-hover |
| **Text Gradient** | 288-305 | text-gradient-animate |
| **Underline Animation** | 307-325 | underline-animation |

### src/components/Header.tsx (แถบเมนู)

| ส่วน | บรรทัด | รายละเอียด |
|------|--------|------------|
| **Nav Links** | 9-15 | รายการเมนู |
| **Desktop Nav** | 26-36 | เมนูสำหรับ Desktop |
| **Mobile Menu** | 38-56 | ปุ่ม hamburger menu |
| **Mobile Nav** | 59-74 | เมนูสำหรับมือถือ |

### src/components/Footer.tsx (ส่วนท้าย)

| ส่วน | บรรทัด | รายละเอียด |
|------|--------|------------|
| **Gradient Line** | 7 | เส้นตกแต่งด้านบน |
| **Logo** | 12-13 | ข้อความ Portfolio |
| **Social Icons** | 16-48 | GitHub, LinkedIn, Email |
| **Copyright** | 51-53 | ข้อความลิขสิทธิ์ |

---

## ตำแหน่ง Components สำคัญ

### ปุ่ม Download Resume
- **ไฟล์:** `src/app/page.tsx`
- **บรรทัด:** 177-186
```tsx
<a
  href="/resume.pdf"
  download
  className="btn-animated ..."
>
  Download Resume
</a>
```

### ข้อมูล Projects
- **ไฟล์:** `src/app/page.tsx`
- **บรรทัด:** 20-44
- Projects: E-Commerce, Error, Restaurant App

### ข้อมูลติดต่อ
- **ไฟล์:** `src/app/page.tsx`
- **บรรทัด:** 47-79
- Email, GitHub, LinkedIn

### เมนู Navigation
- **ไฟล์:** `src/components/Header.tsx`
- **บรรทัด:** 9-15
- Home, About, Skills, Projects, Contact

---

## วิธีเริ่มต้นใช้งาน

```bash
# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev

# Build สำหรับ production
npm run build
```

เปิด [http://localhost:3000](http://localhost:3000) ใน browser

---

## สี Theme

ใช้สีฟ้าอ่อนจาก Tailwind CSS:
- หลัก: `sky-400` (#38bdf8)
- รอง: `cyan-400` (#22d3ee)
- เน้น: `sky-500` (#0ea5e9)

---

## การ Deploy

Deploy บน [Vercel](https://vercel.com) พร้อมเชื่อมต่อ GitHub อัตโนมัติ
