import { Code2, Globe, Server, Smartphone, Users } from "lucide-react";
import type { TimelineElement } from "@/components/ui/timeline";

export const experiences: TimelineElement[] = [
  {
    id: 1,
    title: "Backend Developer - Rastuc Technologies Limited",
    date: "Jun 2024 - Nov 2024",
    description: `
Extended Django APIs with Strawberry GraphQL.  
Improved test coverage and project documentation.`,
    status: "completed",
    icon: <Server />,
  },
  {
    id: 2,
    title: "Fullstack Web Developer - VS Tech",
    date: "Jun 2024 - Mar 2025",
    description: `
Delivered web apps with Next.js and Node.js.  
Enhanced UI performance and modernized legacy code.`,
    status: "completed",
    icon: <Globe />,
  },
  {
    id: 3,
    title: "Frontend Developer - Rastuc Technologies Limited",
    date: "Jul 2024 - Sept 2025",
    description: `
Built responsive UIs with Next.js and Tailwind CSS.  
Integrated APIs for real-time and static data flows.`,
    status: "completed",
    icon: <Code2 />,
  },
  {
    id: 4,
    title: "HR & Mentorship - Rastuc Technologies Limited",
    date: "May 2025 - Sept 2025",
    description: `
Guided junior developers through code reviews and pair programming.  
Improved team workflows with Trello.`,
    status: "completed",
    icon: <Users />,
  },
  {
    id: 5,
    title: "Lead Mobile Developer - Rastuc Technologies Limited",
    date: "May 2025 - Sept 2025",
    description: `
Led development of React Native apps using Nativewind.  
Published apps to the Play Store and coached new contributors.`,
    status: "completed",
    icon: <Smartphone />,
  },
  {
    id: 6,
    title: "Mid-Level Software Developer",
    date: "November 2025 - Present",
    description: `
Focused on frontend development, building a comprehensive dashboard and contributing to the Baykar mobile application.`,
    status: "in-progress",
    icon: <Code2 />,
  },
];
