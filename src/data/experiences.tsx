import { Code2, Database, Globe, MonitorSmartphone, Users } from "lucide-react";
import type { TimelineElement } from "@/components/ui/timeline";

export const experiences: TimelineElement[] = [
  {
    id: 1,
    title: "Backend Developer - Rastuc Technologies Limited",
    date: "Jun 2024 - Nov 2024",
    description: `
Extended Django APIs with Strawberry GraphQL.  
Added unit tests and improved documentation.`,
    status: "completed",
    icon: <Database />,
  },
  {
    id: 2,
    title: "Fullstack Web Developer - VS Tech",
    date: "Jun 2024 - Mar 2025",
    description: `
Built fullstack apps with Next.js.  
Optimized UIs and refactored legacy codebases.`,
    status: "completed",
    icon: <Globe />,
  },
  {
    id: 3,
    title: "Frontend Developer - Rastuc Technologies Limited",
    date: "Jul 2024 - Sept 2025",
    description: `
Developed responsive UIs with Next.js, Tailwind CSS, ShadCN UI and Mantine UI.  
Integrated GraphQL & REST APIs.`,
    status: "in-progress",
    icon: <Code2 />,
  },
  {
    id: 4,
    title: "HR & Mentorship - Rastuc Technologies Limited",
    date: "May 2025 - Sept 2025",
    description: `
Mentored junior developers.  
Streamlined workflows with Jira and Trello.`,
    status: "in-progress",
    icon: <Users />,
  },
  {
    id: 5,
    title: "Lead Mobile Developer - Rastuc Technologies Limited",
    date: "May 2025 - Sept 2025",
    description: `
Shipped React Native apps with Nativewind.  
Mentored devs and deployed to Play Store.`,
    status: "in-progress",
    icon: <MonitorSmartphone />,
  },
];
