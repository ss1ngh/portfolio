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
    <section className="relative w-full h-full flex flex-col p-12 overflow-visible">
      {/* Header remains z-50 to stay above grid */}
      <div className="w-full flex justify-center z-50 pointer-events-none mb-10 shrink-0">
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

      {/* Grid Container */}
      <div className="relative w-full max-w-[1400px] h-[900px] overflow-y-scroll no-scrollbar px-3 mx-auto z-10">
        <GridContainer size={3}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "relative transition-all duration-500 ease-out",
                hoveredIndex === index ? "z-20 scale-[1.02]" : "z-10 scale-100",
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard project={project} index={index} onHover={() => {}} />
            </div>
          ))}

          {/* Transparent Filler slots */}
          {Array.from({ length: Math.max(0, 16 - projects.length) }).map(
            (_, i) => (
              <div
                key={`filler-${i}`}
                className="min-h-[400px] bg-transparent"
              />
            ),
          )}
        </GridContainer>
      </div>

      {/*Grid Overlay */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle at center, black 50%, transparent 70%)`,
          maskImage: `radial-gradient(circle at center, black 50%, transparent 70%)`,
        }}
      >
        <div
          className="absolute"
          style={{
            opacity: 0.07,
            top: "-1000px",
            left: "-1000px",
            right: "-1000px",
            bottom: "-1000px",
            backgroundImage: `
        linear-gradient(#0A0A0A 1px, transparent 1px), 
        linear-gradient(90deg, #0A0A0A 1px, transparent 1px)
      `,
            backgroundSize: "100px 100px",
            backgroundPosition: "center center",
          }}
        />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
