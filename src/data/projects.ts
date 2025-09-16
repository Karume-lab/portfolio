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
    title: "Tanuri",
    description: `
A complete LPG (cooking gas) ordering and delivery ecosystem.  
Includes a consumer-facing mobile app for placing and managing gas orders, a company web app for staff to fulfill and track deliveries, and a secure Django REST API backend.  
Covers the full lifecycle of order placement, payment, and fulfillment.`,
    thumbnailPath: "/projects/work-in-progress.png",
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
  {
    title: "Sharahub",
    description: `
A digital affiliate marketing platform enabling users to promote products and track referrals.  
Includes authentication, affiliate dashboards, commission tracking, and reporting tools for marketers and businesses.`,
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
    title: "Taska",
    description: `
A minimalist to-do application designed for focus and simplicity.  
Provides a distraction-free interface for creating, tracking, and managing tasks, with smooth animations and a clean design system.`,
    thumbnailPath: "/projects/work-in-progress.png",
    gitHubUrl: "https://github.com/Karume-lab/taska",
    technologies: ["BNA UI", "Typescript"],
  },
  {
    title: "Rastuc Member",
    description: `
A mobile app for users using Rastuc focusing on the patient features.  
Enables users to book doctors, view and manage their appointments, and access healthcare services on the go.  
`,
    thumbnailPath: "/projects/work-in-progress.png",
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
    title: "Loans",
    description: `
A modern loan application platform that makes borrowing simple, fast, and transparent.
Users can apply for loans online, track their application status, and manage repayments with ease.  
Designed with accessibility and trust in mind, this platform helps individuals get the financial support they need to achieve their goals.`,

    thumbnailPath: "/projects/loans.png",
    projectUrl: "https://loans.starbasemedia.co.ke/",
    technologies: [
      "Next.js",
      "shadcn/ui",
      "Tailwind CSS",
      "Typescript",
      "NextAuth",
    ],
  },
  {
    title: "Rastuc",
    description: `
A full-stack healthcare platform connecting doctors and patients.  
Patients can browse and book doctors with ease, while doctors manage their schedules, appointments, and records through intuitive dashboards.  
The system also includes AI-powered search, analytics, and an admin portals for management.`,
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
    title: "Tushirikiane",
    description: `
An open-source collaboration and task management platform inspired by Trello.  
Supports boards, lists, and cards to help teams organize projects, assign tasks and track progress.`,
    thumbnailPath: "/projects/tushirikiane.png",
    gitHubUrl: "https://github.com/gonpenta/tushirikiane/",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Typescript"],
  },
  {
    title: "Kids Beyond Limit",
    description: `
An NGO website supporting children through educational programs and resources.  
Highlights initiatives and shares stories.`,
    thumbnailPath: "/projects/kids-beyond-limit.png",
    projectUrl: "https://www.kidsbeyondlimit.com/",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Typescript"],
  },
  {
    title: "Kellian Enterprise",
    description: `
A professional automotive garage website showcasing services, bookings, and company information.  
Built for speed, SEO, and responsiveness, giving customers a smooth experience while exploring offerings.`,
    thumbnailPath: "/projects/kellian-enterprise.png",
    projectUrl: "https://www.kellianenterprise.com/",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "Typescript"],
  },
  {
    title: "Vault",
    description: `
A decentralized file storage platform built on blockchain technology.  
Provides secure, tamper-proof storage where users can upload, organize, and share files with ownership guaranteed on Web3.  
Think of it as a blockchain-powered alternative to Google Drive.`,
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
];
