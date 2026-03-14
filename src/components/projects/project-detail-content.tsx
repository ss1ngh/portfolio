"use client";

import Image from "next/image";
import Link from "next/link";
import { Project, ProjectLink } from "./types";
import { GithubLogoIcon, GlobeIcon, ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { useCamera } from "@/components/canvas/CameraContext";

export function ProjectDetailContent({ project }: { project: Project }) {
  const { navigateTo } = useCamera();
  const deploymentLink = project.links?.find((l: ProjectLink) => (l.type === "Website" || l.type === "Live") && l.href !== "");

  return (
    <div className="relative flex flex-col justify-center items-center h-full w-full max-w-[1200px] mx-auto p-10 selection:bg-[#3235F8] selection:text-white pointer-events-auto">
      <button 
        onClick={() => navigateTo('projects')}
        className="absolute top-10 left-10 flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded-full transition-colors"
      >
        <ArrowLeftIcon size={20} />
        <span className="font-medium">back to projects</span>
      </button>

      <div className="flex flex-col md:flex-row gap-12 w-full mt-24">
        {/* Left Side: Image */}
        <div className="w-full md:w-[60%] flex-shrink-0">
           <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-100 shadow-2xl bg-neutral-50 mb-6">
              <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-50/90 border-b border-neutral-100 flex items-center px-4 gap-2 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover pt-8"
              />
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-[40%] flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tighter lowercase">
            {project.title}
          </h2>

          <p className="text-xl md:text-2xl text-neutral-500 lowercase leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full lowercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-4 mt-8">
            <Link 
              href={project.href} 
              target="_blank" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-black text-white rounded-full transition-colors"
            >
              <GithubLogoIcon size={20} />
              <span className="font-bold">github</span>
            </Link>
            
            {deploymentLink && (
              <Link 
                href={deploymentLink.href} 
                target="_blank" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#3235F8] hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg shadow-blue-500/20"
              >
                <GlobeIcon size={20} />
                <span className="font-bold">live demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
