import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, NotepadText } from "lucide-react";

export const DATA = {
  name: "shreyansh",
  initials: "SS",
  url: "https://ssngh.xyz",
  summary: "i write code and build apps \n\n learning go, backend fundamentals, scalable systems & database internals",
  avatarUrl: "./giga-chad2.jpg",
  skills: [
    { name: "react"},
    { name: "next.js"},
    { name: "express"},
    { name: "tailwind"},
    { name: "typescript"},
    { name: "node.js"},
    { name: "postgresSQL"},
    { name: "mongoDB"},
    { name: "prisma"},
    { name: "docker"},
    { name: "break prod"},
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home"},
    { href: "/reads", icon: NotepadText, label: "Reads"},
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

        navbar: true,
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
      href: "https://annot8.ssngh.xyz/",
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
          href: "https://github.com/ss1ngh/annot8",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/annot8.png",
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
