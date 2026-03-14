"use client";

import { DATA } from "@/data/resume";

import { ProjectList } from "@/components/projects/project-list";

export function ProjectsContent() {
  return (
    <div className="relative flex flex-col justify-start min-h-dvh w-[1500px] px-6 pt-10 pb-10 items-center selection:bg-[#3235F8] selection:text-white">
      {/* label */}

      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 text-[12rem] font-black lowercase tracking-tighter text-[#0A0A0A]/5 select-none pointer-events-none whitespace-nowrap">
        projects
      </span>

      <ProjectList projects={DATA.projects} />
    </div>
  );
}
