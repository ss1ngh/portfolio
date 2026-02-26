import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, NotepadText, BriefcaseIcon } from "lucide-react";

export const DATA = {
  name: "shreyansh",
  initials: "SS",
  url: "https://ssngh.xyz",
  summary: "i write code and build apps\n\n       \n\nlearning backend fundamentals,\n\n& database internals",
  avatarUrl: "/giga-chad2.jpg",
  skills: [
    { name: "react" },
    { name: "next.js" },
    { name: "express" },
    { name: "tailwind" },
    { name: "typescript" },
    { name: "node.js" },
    { name: "postgresSQL" },
    { name: "mongoDB" },
    { name: "prisma" },
    { name: "docker" },
    { name: "breaking prod" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/freelance", icon: BriefcaseIcon, label: "Freelance" },
    { href: "/reads", icon: NotepadText, label: "Reads" },
  ],
  contact: {
    email: "ssngh.me@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ss1ngh",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ss1ngh",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/_ss1ngh",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ssngh.me@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  freelance: {
    title: "Freelance Software Engineer",
    tagline: "I build MVPs in under 3 weeks",
    summary: "Stop wasting time on over-engineering. I build high-quality, scalable MVPs that get you to market fast.",
    services: [
      {
        title: "MVP Development",
        description: "From idea to deployed product in < 3 weeks. Full stack implementation with modern tech.",
      },
      {
        title: "Rapid Prototyping",
        description: "Functional prototypes to test your hypothesis before full investment.",
      },
      {
        title: "Full Stack Engineering",
        description: "Complex web applications using Next.js, TypeScript, and scalable backend infrastructure.",
      },
    ],
  },

  work: [] as {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }[],

  education: [
    {
      school: "bennett university",
      degree: "bachelor's of technology computer science",
      start: "2023",
      end: "2027",
    },

  ],

  projects: [
    {
      title: "slate",
      href: "https://github.com/ss1ngh/slate",
      active: true,
      description:
        "high performance, collaborative, whiteboard",
      technologies: [
        "next.js",
        "turborepo",
        "typescript",
        "tailwindCSS",
        "perfect-freehand",
        "HTML5Canvas",
      ],
      links: [
        {
          type: "Website",
          href: "https://slate.ssngh.xyz",
          icon: <Icons.globe className="size-4" />,
        },
      ],
      image: "/slate.png",
      video:
        "",
    },
    {
      title: "annot8",
      href: "https://github.com/ss1ngh/annot8",
      active: true,
      description:
        "dual-view workspace for seamless PDF reading and note-taking.",
      technologies: [
        "next.js",
        "typescript",
        "tailwindCSS",
        "fabric.js",
        "pdf-lib",
        "react-pdf",
      ],
      links: [
        {
          type: "Website",
          href: "https://annot8.ssngh.xyz",
          icon: <Icons.globe className="size-4" />,
        },
      ],
      image: "/annot8.png",
      video:
        "",
    },
    {
      title: "LLMark",
      href: "https://github.com/ss1ngh/LLMark",
      active: false,
      description:
        "stop scrolling through miles of AI chats—anchor and jump to specific messages instantly using LLMark",
      technologies: [
        "react",
        "typescript",
        "tailwindcss",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-4" />,
        },
      ],
      image: "/LLMark.png",
      video:
        "",
    },
    {
      title: "ts-booking",
      href: "https://github.com/ss1ngh/ts-booking",
      active: true,
      description:
        "production-grade booking backend infrastructure in typescript",
      technologies: [
        "typescript",
        "zod",
        "express",
        "postgreSQL",
        "prisma",
        "winston"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-4" />,
        },
      ],
      image: "/ts-booking.png",
      video:
        "",
    },
    {
      title: "sh0rten",
      href: "https://github.com/ss1ngh/sh0rten",
      active: true,
      description:
        "url shortener with qr code generation",
      technologies: [
        "react",
        "tailwind",
        "javascript",
        "zod",
        "express",
        "mongoDB",
        "axios",
      ],
      links: [
        {
          type: "Website",
          href: "https://sh0rten.vercel.app/",
          icon: <Icons.globe className="size-4" />,
        },
      ],
      image: "/shorten.png",
      video:
        "",
    },
    {
      title: "pdf-wiz",
      href: "https://github.com/ss1ngh/pdf-wiz",
      active: true,
      description:
        "multi pdf chat app",
      technologies: [
        "python",
        "streamlit",
        "langchain",
        "RAG",
      ],
      links: [
        {
          type: "Website",
          href: "https://pdf-wiz.streamlit.app/",
          icon: <Icons.globe className="size-4" />,
        },
      ],
      image: "/pdf-wiz.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description:
        "",
      image:
        "",
      mlh: "",
      links: [] as { title: string; icon: React.ReactNode; href: string }[],
    },
  ],
  reads: [
    {
      title: "first principles thinking",
      href: "https://fs.blog/first-principles/",
      icon: Icons.article,
    },
  ],
} as const;
