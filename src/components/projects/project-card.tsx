"use client";

import Link from "next/link";
import Image from "next/image";
import {
  GithubLogoIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Project, ProjectLink } from "./types";
import { motion } from "motion/react";
import { useCamera } from "@/components/canvas/CameraContext";

export function ProjectCard({
  project,
  index,
  onHover,
}: {
  project: Project;
  index: number;
  onHover: (h: boolean) => void;
}) {
  const { navigateTo } = useCamera();

  // Find the deployment link (Website/Live)
  const deploymentLink = project.links?.find(
    (l: ProjectLink) =>
      (l.type === "Website" || l.type === "Live") && l.href !== "",
  );

  // The button specifically uses the live link, fallback to project.href if needed
  const targetUrl = deploymentLink ? deploymentLink.href : project.href;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col rounded-[2.5rem] bg-white border border-neutral-200 shadow-sm transition-all duration-500 w-full overflow-hidden"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* 1. IMAGE LAYER: Dynamic Reveal - Restricted to Desktop (md: prefix added) */}
      <div className="relative w-full max-h-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:group-hover:max-h-96 md:group-hover:opacity-100 overflow-hidden border-b border-transparent md:group-hover:border-neutral-100">
        <div className="relative aspect-video w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-1000 md:group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#3235F8]/5 to-transparent pointer-events-none" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="flex flex-col p-7 gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-[18px] font-bold text-[#0A0A0A] lowercase tracking-tight md:group-hover:text-[#3235F8] transition-colors duration-300">
              {project.title}
            </h4>

            <span className="text-[12px] font-mono text-[#3235F8] font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="text-[14px] text-neutral-500 lowercase leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 bg-neutral-50 border border-neutral-100 rounded-lg text-neutral-400 font-medium lowercase"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions Row */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <div className="flex items-center gap-4">
              <Link
                href={project.href}
                target="_blank"
                className="text-neutral-300 hover:text-black transition-colors"
              >
                <GithubLogoIcon size={20} />
              </Link>
            </div>

            <Link
              href={targetUrl}
              target="_blank"
              className="flex items-center gap-1.5 text-[11px] font-bold text-neutral-400 md:group-hover:text-[#3235F8] transition-all lowercase cursor-pointer"
            >
              visit project
              <ArrowUpRightIcon
                size={12}
                weight="bold"
                className="transition-transform md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
