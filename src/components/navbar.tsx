"use client";

import { Dock, DockIcon } from "@/components/dock";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { FolderNotchIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50">
      <TooltipProvider delayDuration={0}>
        <Dock className="pointer-events-auto">
          {DATA.navbar
            .filter((item) => item.href !== "/projects")
            .map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link href={item.href}>
                    <DockIcon>
                      <item.icon size={20} />
                    </DockIcon>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={12}>
                  <p>{item.label.toLowerCase()}</p>
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>
            ))}

          {/*  Divider */}
          <motion.div layout className="h-1/2 w-px bg-black/10 mx-1" />

          {/*  Social Links */}
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DockIcon>
                      <social.icon size={20} />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={12}>
                  <p>{name.toLowerCase()}</p>
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>
            ))}

          {/* Divider */}
          <motion.div layout className="h-1/2 w-px bg-black/10 mx-1" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/#projects-section">
                <DockIcon className="text-[#3235F8] hover:text-[#3235F8] hover:bg-[#3235F8]/10">
                  <FolderNotchIcon size={22} weight="fill" />
                </DockIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={12}>
              <p>projects</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
