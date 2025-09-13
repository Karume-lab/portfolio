export interface Project {
  title: string;
  description: string;
  thumbnailPath: string;
  gitHubUrl?: string;
  projectUrl?: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Rastuc",
    description: `
Web app for doctors and patients.  
Patients can book doctors, and doctors manage appointments.  
Includes AI-powered search and admin dashboards.`,
    thumbnailPath: "/projects/rastuc.png",
    gitHubUrl: "https://github.com/Karume-lab/rastuc",
    technologies: [
      "Next.js",
      "Apollo",
      "Tailwind CSS",
      "Mantine UI",
      "shadcn/ui",
      "CSS Modules",
      "Zod",
      "React Hook Form",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "Rastuc Member Mobile App",
    description: `
Mobile app for patients to book doctors and manage appointments.  
Lightweight, optimized, and integrated with Rastuc web APIs.`,
    thumbnailPath: "/projects/rastuc-mobile.png",
    gitHubUrl: "https://github.com/Karume-lab/rastuc-mobile",
    technologies: [
      "React Native",
      "React Native Reusables",
      "Expo",
      "Nativewind",
      "Apollo",
      "Zod",
      "Zustand",
      "ESLint",
      "Prettier",
      "React Hook Form",
      "React Native Actions Sheet",
    ],
  },
  {
    title: "Tanuri",
    description: `
Complete LPG (cooking gas) ordering and fulfillment ecosystem:  
- Consumer Mobile App: users order and manage gas deliveries.  
- Company Web App: staff fulfill and track customer orders.  
- Backend: Django REST API with authentication and infra.`,
    thumbnailPath: "/projects/tanuri.png",
    gitHubUrl: "https://github.com/Karume-lab/tanuri",
    technologies: [
      "React Native",
      "Expo",
      "BNA UI",
      "Nativewind",
      "Zod",
      "Biome",
      "Next.js",
      "Mantine UI",
      "CSS Modules",
      "Django",
      "DRF",
      "Djoser",
    ],
  },
  {
    title: "Vault",
    description: `
Blockchain-powered file storage platform (like Google Drive on Web3).  
Users can securely upload, manage, and share files.`,
    thumbnailPath: "/projects/vault.png",
    gitHubUrl: "https://github.com/Karume-lab/vault",
    technologies: ["React.js", "Solidity", "Tailwind CSS", "Hardhat.js"],
  },
  {
    title: "Taska",
    description: `
Minimalist todo app with a clean interface and smooth interactions.`,
    thumbnailPath: "/projects/taska.png",
    gitHubUrl: "https://github.com/Karume-lab/taska",
    technologies: ["BNA UI"],
  },
  {
    title: "Sharahub",
    description: `
Digital affiliate marketing platform.  
Includes user authentication, affiliate tracking, and dashboards.`,
    thumbnailPath: "/projects/sharahub.png",
    gitHubUrl: "https://github.com/Karume-lab/sharahub",
    technologies: [
      "Next.js",
      "Zod",
      "Mantine UI",
      "CSS Modules",
      "Django",
      "DRF",
      "NextAuth",
    ],
  },
  {
    title: "Kellian Enterprise",
    description: `
Automotive garage website showcasing services and bookings.`,
    thumbnailPath: "/projects/kellian.png",
    gitHubUrl: "https://github.com/Karume-lab/kellian-enterprise",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: "Kids Beyond Limit",
    description: `
NGO website supporting children with educational resources.`,
    thumbnailPath: "/projects/kbl.png",
    gitHubUrl: "https://github.com/Karume-lab/kids-beyond-limit",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS"],
  },
];
