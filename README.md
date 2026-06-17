# Melisa Fitri — Personal Portfolio

Portfolio website pribadi Melisa Fitri, mahasiswa Teknologi Rekayasa Perangkat Lunak dengan pengalaman sebagai Scrum Master, System Analyst, dan QA.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **Framer Motion** (`motion/react`) — animasi
- **Lucide React** — icon

## Fitur

- Sticky stacking card effect pada section Experience (seperti Road2Work)
- Glassmorphism design system yang konsisten di semua section
- Auto-scroll carousel pada section More Information
- Fully responsive (mobile & desktop)
- Reusable UI components (`GlassCard`, `SectionHeader`, `Badge`)

## Struktur Project

```
src/
├── components/
│   ├── ui/
│   │   ├── GlassCard.tsx       # Card glass reusable
│   │   ├── SectionHeader.tsx   # Judul section + animasi
│   │   └── Badge.tsx           # Pill/tag reusable
│   ├── About.tsx
│   ├── Achievement.tsx
│   ├── Activities.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── data/
│   └── index.ts                # Semua data portfolio
├── lib/
│   └── utils.ts                # Helper cn()
├── types.ts                    # TypeScript interfaces
├── App.tsx
└── main.tsx
```

## Cara Menambah Data

Semua data dikelola di satu file: `src/data/index.ts`

Tambah experience baru:
```ts
experiences: [
  {
    id: "exp5",
    role: "Nama Role",
    company: "Nama Perusahaan",
    period: "2026",
    description: ["Deskripsi poin 1", "Deskripsi poin 2"]
  }
]
```

Tambah kegiatan (More Information) baru:
```ts
activities: [
  {
    id: "act10",
    image: "/nama-foto.jpg",
    tags: [],
    title: "Judul Kegiatan",
    date: "01/06/2026",
    link: "https://..."
  }
]
```

Data yang ditambahkan akan **otomatis** tampil tanpa perlu mengubah komponen.

## Menjalankan Secara Lokal

**Prasyarat:** Node.js v18+

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build
```

## Kontak

- **Email:** melisaf569@gmail.com
- **LinkedIn:** [melisa-fitri](https://www.linkedin.com/in/melisa-fitri/)
- **GitHub:** [melisafitri](https://github.com/melisafitri)
