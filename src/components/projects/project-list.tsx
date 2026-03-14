"use client";

import { useState } from "react";

import { FolderIcon } from "@phosphor-icons/react/dist/ssr";

import { ProjectCard } from "./project-card";

import { Project } from "./types";

import { GridContainer } from "@/components/projects/grid-container";

import { cn } from "@/lib/utils";

export function ProjectList({ projects }: { projects: readonly Project[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full h-[1000px] flex flex-col items-center p-12">
      {/* header */}
      <div className="w-full flex justify-center z-50 pointer-events-none mb-10">
        <div className="flex items-center w-full max-w-5xl justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

          <div className="bg-[#3235F8] rounded-2xl px-5 py-1.5 mx-4 shadow-sm flex items-center gap-2 pointer-events-auto shrink-0">
            <FolderIcon size={16} weight="fill" className="text-white" />

            <span className="text-white text-[14px] font-medium lowercase pt-0.5">
              recent work
            </span>
          </div>

          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-neutral-200 to-transparent" />
        </div>
      </div>

      {/* project grid */}

      <div className="relative w-full h-full max-w-[1200px] max-h-[900px]">
        <GridContainer size={4}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "relative transition-all duration-500 ease-out",

                hoveredIndex === index ? "z-20 scale-[1.05]" : "z-10 scale-100",
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard project={project} index={index} onHover={() => {}} />
            </div>
          ))}

          {/* filler slots */}

          {Array.from({ length: 16 - projects.length }).map((_, i) => (
            <div
              key={`filler-${i}`}
              className="border border-neutral-100/50 rounded-[2rem] bg-neutral-50/10"
            />
          ))}
        </GridContainer>
      </div>

      {/* Blueprint Grid Overlay */}

      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)`,

            backgroundSize: "100px 100px",
          }}
        />
      </div>
    </section>
  );
}
