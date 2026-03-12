"use client";

import Link from "next/link";
import { GithubLogoIcon, GlobeIcon } from "@phosphor-icons/react/dist/ssr";

interface ProjectCardProps {
  project: any;
  index: number;
  onHover: (isHovered: boolean) => void;
}

export function ProjectCard({ project, index, onHover }: ProjectCardProps) {
  const deploymentLink = project.links?.find(
    (l: any) => (l.type === "Website" || l.type === "Live") && l.href !== "",
  );

  return (
    <div
      className="group relative w-full flex flex-col gap-4 py-2"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <span className="text-[11px] text-neutral-300 font-mono italic absolute -left-12 top-3 transition-colors duration-300 group-hover:text-[#3235F8]">
        {String(index + 1).padStart(2, "0")}/
      </span>

      <div className="flex items-center justify-between">
        <h4 className="text-[17px] font-bold lowercase text-[#3235F8]">
          {project.title}
        </h4>

        <div className="flex items-center gap-5">
          <Link
            href={project.href}
            target="_blank"
            className="text-[#0A0A0A] hover:text-[#3235F8] transition-colors duration-300"
          >
            <GithubLogoIcon size={20} />
          </Link>
          {deploymentLink && (
            <Link
              href={deploymentLink.href}
              target="_blank"
              className="text-[#0A0A0A] hover:text-[#3235F8] transition-colors duration-300"
            >
              <GlobeIcon size={20} />
            </Link>
          )}
        </div>
      </div>

      <p className="text-[14px] text-neutral-500 lowercase leading-relaxed max-w-xl">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-x-3 gap-y-2 pt-1">
        {project.technologies.map((tag: string) => (
          <span
            key={tag}
            className="text-[11px] font-mono font-medium text-neutral-400 lowercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
