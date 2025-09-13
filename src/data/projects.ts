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
    projectUrl: "https://www.rastuc.com/",
    thumbnailPath: "/projects/rastuc.png",
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
      "Typescript",
    ],
  },
  {
    title: "Rastuc Member Mobile App",
    description: `
Mobile app for patients to book doctors and manage appointments.  
Lightweight, optimized, and integrated with Rastuc web APIs.`,
    thumbnailPath: "/projects/rastuc-mobile.png",
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.rastuc_technologies.rastuc_patient",
    technologies: [
      "React Native",
      "React Native Reusables",
      "Expo",
      "Nativewind",
      "Apollo",
      "Zod",
      "Zustand",
      "ESLint",
      "Typescript",
      "Prettier",
      "React Hook Form",
      "React Native Actions Sheet",
    ],
  },
  {
    title: "Vault",
    description: `
Blockchain-powered file storage platform (like Google Drive on Web3).  
Users can securely upload, manage, and share files.`,
    thumbnailPath: "/projects/vault.png",
    gitHubUrl: "https://github.com/Karume-lab/Vault-FE",
    projectUrl: "https://github.com/Karume-lab/Vault-FE/blob/main/README.md",
    technologies: [
      "React.js",
      "Solidity",
      "Tailwind CSS",
      "Hardhat.js",
      "Javascript",
    ],
  },
  {
    title: "Taska",
    description: `
Minimalist todo app with a clean interface and smooth interactions.`,
    thumbnailPath: "/projects/taska.png",
    gitHubUrl: "https://github.com/Karume-lab/taska",
    technologies: ["BNA UI", "Typescript"],
  },
  {
    title: "Sharahub",
    description: `
Digital affiliate marketing platform.  
Includes user authentication, affiliate tracking, and dashboards.`,
    thumbnailPath: "/projects/sharahub.png",
    projectUrl: "https://sharahub.vercel.app/",
    technologies: [
      "Next.js",
      "Zod",
      "Mantine UI",
      "CSS Modules",
      "Django",
      "DRF",
      "NextAuth",
      "Python",
      "Typescript",
    ],
  },
  {
    title: "Kellian Enterprise",
    description: `
Automotive garage website showcasing services and bookings.`,
    thumbnailPath: "/projects/kellian-enterprise.png",
    projectUrl: "https://www.kellianenterprise.com/",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Typescript"],
  },
  {
    title: "Kids Beyond Limit",
    description: `
NGO website supporting children with educational resources.`,
    thumbnailPath: "/projects/kids-beyond-limit.png",
    projectUrl: "https://www.kidsbeyondlimit.com/",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Typescript"],
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
      "Zod",
      "Biome",
      "Next.js",
      "Typescript",
      "Python",
      "Mantine UI",
      "CSS Modules",
      "Django",
      "DRF",
      "Djoser",
    ],
  },
];
