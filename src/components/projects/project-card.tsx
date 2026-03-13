"use client";

import Link from "next/link";
import Image from "next/image";
import { GithubLogoIcon, GlobeIcon } from "@phosphor-icons/react/dist/ssr";
import { Project, ProjectLink } from "./types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  onHover: (isHovered: boolean) => void;
}

export function ProjectCard({ project, index, onHover }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const deploymentLink = project.links?.find(
    (l: ProjectLink) =>
      (l.type === "Website" || l.type === "Live") && l.href !== "",
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative w-full flex flex-col md:flex-row gap-8 md:gap-16 items-start py-16 border-b border-neutral-50 last:border-none ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Index Numbering - Hidden on Mobile */}
      <span
        className={`hidden lg:block text-[11px] text-neutral-300 font-mono italic absolute top-20 transition-colors duration-300 group-hover:text-[#3235F8] ${
          isEven ? "-left-16" : "-right-16"
        }`}
      >
        {String(index + 1).padStart(2, "0")}/
      </span>

      {/* Visual Side: Browser Mockup */}
      <div className="relative w-full md:w-1/2 aspect-video group-hover:shadow-2xl transition-all duration-500 rounded-xl overflow-hidden border border-neutral-200 bg-white">
        {/* Mockup Header (Browser Bar) */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-neutral-50 border-b border-neutral-200 flex items-center px-3 gap-1.5 z-20">
          <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-[#FF5F56] transition-colors duration-500" />
          <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-[#FFBD2E] transition-colors duration-500" />
          <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-[#27C93F] transition-colors duration-500" />
        </div>

        {/* Image Container */}
        <div className="relative w-full h-full pt-7 overflow-hidden bg-neutral-50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          {/* Subtle Blue Tint Overlay */}
          <div className="absolute inset-0 bg-[#3235F8]/5 mix-blend-multiply pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="text-[20px] font-bold lowercase text-[#0A0A0A] group-hover:text-[#3235F8] transition-colors duration-300">
            {project.title}
          </h4>

          <div className="flex items-center gap-5">
            <Link
              href={project.href}
              target="_blank"
              className="text-[#A3A3A3] hover:text-[#0A0A0A] transition-colors duration-300"
            >
              <GithubLogoIcon size={22} />
            </Link>
            {deploymentLink && (
              <Link
                href={deploymentLink.href}
                target="_blank"
                className="text-[#A3A3A3] hover:text-[#3235F8] transition-colors duration-300"
              >
                <GlobeIcon size={22} />
              </Link>
            )}
          </div>
        </div>

        <p className="text-[15px] text-neutral-500 lowercase leading-relaxed max-w-prose">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
          {project.technologies.map((tag: string) => (
            <span
              key={tag}
              className="text-[12px] font-mono font-medium text-neutral-400 lowercase border border-neutral-100 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
