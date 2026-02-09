import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, NotepadText } from "lucide-react";

export const DATA = {
  name: "shreyansh",
  initials: "SS",
  url: "https://ssngh.xyz",
  summary: "i write code and build apps \n\n learning go, \n\nbackend fundamentals, \n\n& database internals",
  avatarUrl: "./giga-chad2.jpg",
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
    { name: "break prod" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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

  // work: [
  //   {
  //     company: "",
  //     href: "",
  //     badges: [],
  //     location: "",
  //     title: "",
  //     logoUrl: "",
  //     start: "",
  //     end: "",
  //     description: ""    },
  // ],

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
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/annot8.png",
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
          icon: <Icons.globe className="size-3" />,
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
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/shorten.png",
      video:
        "",
    },
    {
      title: "tickr - frontend",
      href: "https://github.com/ss1ngh/tickr",
      active: true,
      description:
        "personalized portfolio tracker",
      technologies: [
        "next.js",
        "better-auth",
        "tailwind",
        "typescript",
        "zod",
        "postgreSQL",
        "prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://tickr.ssngh.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tickr.png",
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
      links: [],
    },
  ],
} as const;
