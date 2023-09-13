export interface Project {
  name: string;
  href: string;
  technologies: string[];
  isReleased?: boolean;
}

const projects: Project[] = [
  {
    name: "Grapploct Bot",
    href: "https://github.com/Ribbfors/grapploct-bot",
    technologies: ["Javascript", "Node.js", "Discord.js"],
    isReleased: true,
  },
  {
    name: "This Portfolio",
    href: "https://github.com/Ribbfors/portfolio",
    technologies: ["Typescript", "Astro", "TailwindCSS"],
    isReleased: true,
  },
  {
    name: "Seinfeld Store",
    href: "https://github.com/Ribbfors/seinfeld-store",
    technologies: ["Typescript", "Next.js", "Prisma", "PostgreSQL"],
    isReleased: true,
  },
  {
    name: "A Football Api",
    href: "/",
    technologies: ["Typescript", "Node.js", "Express", "mongoDB"],
    isReleased: false,
  },
];

export default projects;
