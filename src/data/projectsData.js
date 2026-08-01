import pos from "../assets/projects/pos.png";
import anime from "../assets/projects/anime.png";
import inventory from "../assets/projects/inventory.png";

const projectsData = [
  {
    id: 1,
    title: "POS System",
    description:
      "Point of Sale berbasis React dan Laravel dengan fitur barcode, QRIS, invoice, dan manajemen stok.",
    image: pos,
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/username/pos-system",
    demo: "https://pos-demo.vercel.app",
  },
  {
    id: 2,
    title: "Anime Website",
    description:
      "Website pencarian anime menggunakan Jikan API dengan desain modern dan responsif.",
    image: anime,
    technologies: ["React", "Jikan API", "Tailwind CSS"],
    github: "https://github.com/username/anime-app",
    demo: "https://anime-demo.vercel.app",
  },
  {
    id: 3,
    title: "Inventory System",
    description:
      "Sistem manajemen stok barang lengkap dengan laporan dan dashboard.",
    image: inventory,
    technologies: ["React", "Laravel", "MySQL"],
    github: "https://github.com/username/inventory",
    demo: "https://inventory-demo.vercel.app",
  },
];

export default projectsData;
