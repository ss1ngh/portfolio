"use client";

import { DATA } from "@/data/resume";
import { ProjectList } from "@/components/projects/project-list";

export function ProjectsContent() {
  return (
    <div className="relative flex flex-col justify-start min-h-fit md:min-h-dvh w-full md:w-[1500px] px-4 md:px-6 pt-0 pb-5 items-center selection:bg-[#3235F8] selection:text-white overflow-hidden md:overflow-visible">
      {/* label */}
      <span className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4 text-[12rem] font-black lowercase tracking-tighter text-[#0A0A0A]/5 select-none pointer-events-none whitespace-nowrap">
        projects
      </span>
      <ProjectList projects={DATA.projects} />
    </div>
  );
}
