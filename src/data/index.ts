import { PortfolioData } from '../types';

// Email encoded to deter automated scrapers
const _e = atob('bWVsaXNhZjU2OUBnbWFpbC5jb20=');

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Melisa Fitri",
    headline: "Scrum Master | System Analyst | QA",
    email: _e,
    linkedin: "https://www.linkedin.com/in/melisa-fitri/",
    github: "https://github.com/melisafitri",
    about: "Mahasiswa Teknologi Rekayasa Perangkat Lunak semester 6 dengan pengalaman aktif sebagai Scrum Master di PT. MNC Digital Indonesia (RCTI+) dan Project Manager pada proyek akademik end-to-end. Terbiasa mengelola sprint planning, koordinasi tim lintas fungsi, serta memastikan deliverable sesuai target menggunakan Jira, Confluence, dan metodologi Agile. Didukung kemampuan analisis kebutuhan sistem dan komunikasi yang baik untuk menjembatani kebutuhan bisnis dan tim teknis."
  },
  experiences: [
    {
      id: "exp1",
      role: "Scrum Master",
      company: "PT. MNC Digital Indonesia (RCTI+)",
      period: "April 2026 - Present",
      description: [
        "Terlibat dalam pelaksanaan Scrum mulai dari sprint planning hingga akhir",
        "Membantu tim menyelesaikan hambatan selama pengembangan proyek",
        "Membantu memastikan kolaborasi tim berjalan efektif untuk mencapai target sprint dan pengembangan produk"
      ]
    },
    {
      id: "exp2",
      role: "Campus Ambassador",
      company: "Google Student Ambassador",
      period: "2025",
      description: [
        "Menjadi perwakilan Google dalam kegiatan edukasi dan teknologi di lingkungan kampus",
        "Berkontribusi dalam program peningkatan literasi digital dan komunitas teknologi",
        "Mengedukasi mahasiswa tentang pemanfaatan solusi AI dan tools Google melalui workshop, webinar, dan kampanye digital"
      ]
    },
    {
      id: "exp3",
      role: "Sekretaris Umum",
      company: "Association of Software Engineering Technology Student",
      period: "Mei 2025 - Januari 2026",
      description: [
        "Mengelola dokumentasi, surat resmi, dan administrasi organisasi",
        "Mengkoordinasikan komunikasi antar divisi dalam pelaksanaan program kerja",
        "Mendukung perencanaan dan evaluasi kegiatan organisasi"
      ]
    },
    {
      id: "exp4",
      role: "Fasilitator Teknis",
      company: "Pengabdian Kepada Masyarakat",
      period: "2023 - 2025",
      description: [
        "Terlibat dalam kegiatan pengabdian masyarakat terkait literasi digital",
        "Memberikan edukasi teknologi kepada UMKM, petani, instansi pemerintah, dan masyarakat umum",
        "Mendukung penerapan solusi digital sederhana untuk meningkatkan pemahaman teknologi"
      ]
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Komering Story (Mobile dan Website)",
      description: "Melakukan riset pengguna untuk mengidentifikasi kebutuhan. Menyusun user persona dan user journey sebagai dasar perancangan aplikasi komering story.",
      technologies: ["System Analysis", "UX Research", "Figma", "User Journey", "User Persona"],
      githubUrl: "https://github.com/melisafitri"
    },
    {
      id: "proj2",
      title: "Model Ensembel untuk Deteksi Depresi",
      description: "Menulis paper ilmiah di Jurnal Sifo Mikroskil. Melatih model klasifikasi teks (SVM, Random Forest, Naive Bayes, AdaBoost). Mencapai F1-score 99,6%.",
      technologies: ["Python", "Machine Learning", "scikit-learn", "TF-IDF", "Ensemble Methods"]
    },
    {
      id: "proj3",
      title: "Aplikasi Solusi Tani",
      description: "Melakukan riset pengguna, menyusun spesifikasi sistem, alur aplikasi, serta mengelola perencanaan pengembangan solusi pertanian digital.",
      technologies: ["System Analysis", "Project Management", "Machine Learning"]
    },
    {
      id: "proj4",
      title: "E-lapor Web Application",
      description: "Project pengujian dengan menyusun Test Plan dan 30 test case untuk 7 fitur utama. Menemukan 14 bug aktif (1 Critical, 3 Major) dan melakukan QA Review.",
      technologies: ["Quality Assurance", "Manual Testing", "Test Case", "Bug Reporting"]
    }
  ],
  skills: [
    {
      category: "Methodologies & Analysis",
      skills: ["System Analysis", "Agile/Scrum", "Jira & Confluence", "User Requirement", "SDLC", "UML & ERD"]
    },
    {
      category: "Quality Assurance & Testing",
      skills: ["Katalon Studio", "Manual Testing", "Test Case Design", "Bug Reporting", "UAT"]
    },
    {
      category: "Data & ML",
      skills: ["Python", "Machine Learning", "scikit-learn", "pandas", "TF-IDF", "Ensemble Methods", "SQL"]
    },
    {
      category: "Design & Fundamentals",
      skills: ["Figma (UI/UX)", "PHP", "React Native", "Git/GitHub", "Database Design"]
    }
  ],
  achievements: [
    {
      id: "ach1",
      title: "Silver Award | International Social Entrepreneurship Business Pitching Competition",
      issuer: "GenVO Smart Farming | System Analyst",
      date: "2025"
    },
    {
      id: "ach2",
      title: "Juara 3 Desain Produk Inovasi UI/UX Mobile App (Nasional)",
      issuer: "UX Researcher",
      date: "2024"
    }
  ],
  activities: [
    {
      id: "act1",
      image: "/dokumentasi-kegiatan/gsa.jpg",
      tags: [],
      title: "Google Student Ambassador class of 2025",
      date: "18/02/2026",
      link: "https://trpl.polinela.ac.id/adopsi-ai-untuk-pbl-dan-targetkan-lulusan-bertalenta-global-2-mahasiswa-prodi-trpl-lulus-program-google-student-ambassador-2026/"
    },
    {
      id: "act2",
      image: "/dokumentasi-kegiatan/genvo.jpg",
      tags: [],
      title: "Mahasiswa TRPL Raih Silver Award – International Social Entrepreneurship Business Pitching Competition 2025 PMBS Malaysia",
      date: "10/01/2026",
      link: "https://trpl.polinela.ac.id/mahasiswa-trpl-raih-silver-award-international-social-entrepreneurship-business-pitching-competition-2025-pmbs-malaysia/"
    },
    {
      id: "act3",
      image: "/dokumentasi-kegiatan/tanisantri.jpg",
      tags: [],
      title: "Project Based Learning Perdana, Mahasiswa/i Prodi TRPL terlibat dalam Pengembangan Platform Pasar Lelang Kerja Sama dengan Bank Indonesia",
      date: "05/11/2025",
      link: "https://trpl.polinela.ac.id/project-based-learning-perdana-mahasiswa-i-prodi-trpl-terlibat-dalam-pengembangan-platform-pasar-lelang-kerja-sama-dengan-bank-indonesia/"
    },
    {
      id: "act4",
      image: "/dokumentasi-kegiatan/bimtek-BI.jpg",
      tags: [],
      title: "Prodi TRPL Polinela Gelar Sosialisasi dan Bimtek Platform Pasar Lelang Bank Indonesia bagi 3 Level User Penggunanya",
      date: "12/08/2024",
      link: "https://trpl.polinela.ac.id/prodi-trpl-polinela-gelar-sosialisasi-dan-bimtek-platform-pasar-lelang-bank-indonesia-bagi-3-level-user-penggunanya/"
    },
    {
      id: "act5",
      image: "/dokumentasi-kegiatan/berdikari.jpg",
      tags: [],
      title: "Menjadi salah satu mahasiswa yang ikut serta dalam program berdikari riset dosen TRPL Polinela",
      date: "12/08/2024",
      link: "https://trpl.polinela.ac.id/hasil-riset-berdikari-dosen-prodi-trpl-polinela-di-pamerkan-pada-ajang-repertoar-kemendiktisaintek-2025/"
    },
    {
      id: "act6",
      image: "/dokumentasi-kegiatan/bimtek-dinas-pertanian.jpg",
      tags: [],
      title: "Mahasiswa/i Prodi TRPL Polinela jadi Pendamping Digitalisasi Penyuluh Pertanian Provinsi Lampung dalam Bimtek Digitalisasi Pertanian Dinas Pertanian Provinsi Lampung",
      date: "12/08/2024",
      link: "https://trpl.polinela.ac.id/mahasiswa-i-prodi-trpl-polinela-jadi-pendamping-digitalisasi-penyuluh-pertanian-provinsi-lampung/"
    },
    {
      id: "act7",
      image: "/dokumentasi-kegiatan/capasity-building.jpeg",
      tags: [],
      title: "Terlibat dalam Capacity Building di Bidang Digitalisasi Pertanian untuk Pendamping Penyuluh Pertanian Provinsi Lampung",
      date: "12/08/2024",
      link: "https://www.instagram.com/p/C00piRaJtDp/?igsh=MWlndnB4ZGJ4bDZ5OQ=="
    },
    {
      id: "act8",
      image: "/dokumentasi-kegiatan/aitech.jpg",
      tags: [],
      title: "Menjadi salah satu Liaison Officer AITECH VI 2024 di Polinela",
      date: "23-26/10/2024",
      link: "https://polinela.ac.id/polinela-tuan-rumah-agricultural-innovation-technology-competition-aitec-vi/"
    },
    {
      id: "act9",
      image: "/dokumentasi-kegiatan/pkkmb25.jpg",
      tags: [],
      title: "Menjadi Panitia PKKMB 2025 sebagai Tim IT Pengelola Sistem Presensi Digital",
      date: "12/08/2024",
      link: "https://www.instagram.com/stories/highlights/18058561397600977/"
    },
    {
      id: "act9",
      image: "/dokumentasi-kegiatan/pkkmb24.jpeg",
      tags: [],
      title: "Peluncuran Aplikasi Presensi Berbasis Mobile dan Web hasil PBL Prodi TRPL pada PKKMB 2024",
      date: "12/08/2024",
      link: "https://www.instagram.com/stories/highlights/18058561397600977/"
    }
  ]
};
