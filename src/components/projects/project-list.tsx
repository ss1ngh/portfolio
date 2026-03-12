"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderIcon } from "@phosphor-icons/react/dist/ssr";
import { ProjectCard } from "./project-card";
import Image from "next/image";

interface ProjectListProps {
  projects: readonly any[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-3xl flex flex-col items-start pl-14 relative">
      <div className="flex items-center gap-4 mb-16 cursor-default">
        <div className="p-3 rounded-2xl bg-neutral-50">
          <FolderIcon weight="fill" className="w-8 h-8 text-[#3235F8]" />
        </div>
        <h2 className="text-[18px] font-bold lowercase text-[#0A0A0A]">
          recent work
        </h2>
      </div>

      {/* Floating Preview - Positioned to the LEFT */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: 1,
              x: 0,
              y: hoveredIndex * 156, // Matches the vertical rhythm of your cards
            }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            className="absolute right-full mr-12 top-[135px] w-[320px] h-[200px] pointer-events-none z-50 lg:block hidden"
          >
            {/* Tooltip Arrow - Points RIGHT now */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-[8px] border-l-neutral-100 shadow-sm" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-100 shadow-2xl bg-white p-1">
              <Image
                src={projects[hoveredIndex].image}
                alt="Preview"
                fill
                className="object-cover rounded-xl opacity-100 transition-all duration-700"
              />
              {/* Subtle blue tint instead of grayscale to keep the color but match the brand */}
              <div className="absolute inset-0 bg-[#3235F8]/5 mix-blend-multiply pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 gap-24 w-full">
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
