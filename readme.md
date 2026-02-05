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

## วิธีเริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ใน browser

## สี Theme

ใช้สีฟ้าอ่อนจาก Tailwind CSS:
- หลัก: `sky-400` (#38bdf8)
- รอง: `cyan-400` (#22d3ee)
- เน้น: `sky-500` (#0ea5e9)

## การ Deploy

Deploy บน [Vercel](https://vercel.com) พร้อมเชื่อมต่อ GitHub อัตโนมัติ
