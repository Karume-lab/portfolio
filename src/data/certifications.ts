export interface Certificate {
  imagePath: string;
  title: string;
  description: string;
  skills: string[];
}

export const CERTIFICATIONS: Certificate[] = [
  {
    title: "ALX Software Engineering",
    description:
      "12-month intensive program covering full-stack development, networking, databases, and DevOps.",
    imagePath: "/certifications/alx.png",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Python",
      "C",
      "SQL",
      "REST APIs",
      "Django",
      "Flask",
      "Git",
      "Docker",
      "Bash",
    ],
  },
  {
    title: "KeHMIS III Project Bootcamp",
    description:
      "Participated in a bootcamp focused on innovative solutions to public health challenges using eHealth and Artificial Intelligence in Kenya.",
    imagePath: "/certifications/kehmis.png",
    skills: [
      "Python",
      "REST APIs",
      "Django",
      "eHealth",
      "AI in Healthcare",
      "Public Health",
    ],
  },
  {
    title: "Inter-University Hackathon",
    description: "Certificate of Participation in ICP blockchain hackathon.",
    imagePath: "/certifications/icp.png",
    skills: [
      "Blockchain Technology",
      "ICP Ecosystem",
      "azle Framework",
      "DFX Development Tools",
    ],
  },
  {
    title: "Power Learn Project Hackathon I",
    description:
      "Participated in a web development hackathon focusing on Django framework.",
    imagePath: "/certifications/power-hacks.png",
    skills: ["Git", "HTML5", "CSS3", "Python", "Django"],
  },
];
