"use client";

import { useState } from "react";
import { FolderIcon } from "@phosphor-icons/react/dist/ssr";
import { ProjectCard } from "./project-card";
import { Project } from "./types";

interface ProjectListProps {
  projects: readonly Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-5xl flex flex-col items-center px-4">
      <div className="w-full flex items-center gap-4 mb-20 cursor-default">
        <div className="p-3 rounded-2xl bg-neutral-50">
          <FolderIcon weight="fill" className="w-8 h-8 text-[#3235F8]" />
        </div>
        <h2 className="text-[18px] font-bold lowercase text-[#0A0A0A]">
          recent work
        </h2>
      </div>

      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onHover={(isHovered: boolean) =>
              setHoveredIndex(isHovered ? index : null)
            }
          />
        ))}
      </div>
    </section>
  );
}
