import anime1 from "../assets/projects/anime1.png";
import anime2 from "../assets/projects/anime2.png";
import anime3 from "../assets/projects/anime3.png";
import anime4 from "../assets/projects/anime4.png";
import anime5 from "../assets/projects/anime5.png";
import tech1 from "../assets/projects/tech1.png";
import tech2 from "../assets/projects/tech2.png";
import tech3 from "../assets/projects/tech3.png";

import inventory from "../assets/projects/inventory.png";

const projectsData = [
  {
    id: 1,
    title: "Anime Suki",
    description:
      "A comprehensive anime catalog platform designed to help fans discover trending shows and explore detailed information on their favorite series",
    image: [anime1, anime2, anime3, anime4, anime5],
    technologies: ["Next Js", "Tailwind CSS", "Jikan API"],
    github: "https://github.com/Sora-Aizawaa/Anime-Suki_Website_Nextjs",
    demo: "https://anime-suki-website-nextjs.vercel.app/",
  },
  {
    id: 2,
    title: "CoreFix Laptop",
    description:
      "CoreFix Laptop is an on-site laptop repair service platform that provides various hardware solutions.",
    image: [tech1, tech2, tech3],
    technologies: ["React", "Tailwind CSS"],
    github:
      "https://github.com/Sora-Aizawaa/Sora-Aizawaa-Code-Blue-Laptop_Web-Application",
    demo: "https://sora-aizawaa-code-blue-laptop-web-a.vercel.app/",
  },
  {
    id: 3,
    title: "Cash & Kredit Furniture Website",
    description:
      "Sistem manajemen stok barang lengkap dengan laporan dan dashboard.",
    image: inventory,
    technologies: ["Next Js", "Tailwind CSS", "MySQL"],
    github: "https://github.com/username/inventory",
    demo: "https://inventory-demo.vercel.app",
  },
];

export default projectsData;
