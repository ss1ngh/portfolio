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
import { motion } from "motion/react";
import { useCamera } from "@/components/canvas/CameraContext";

// Helper function to map hrefs to canvas node IDs
const getCanvasNodeId = (href: string) => {
  switch (href) {
    case "/projects":
      return "projects";
    case "/reads":
      return "reads";
    case "/":
    default:
      return "home";
  }
};

export default function Navbar() {
  const { navigateTo, activeNode, isMobile } = useCamera();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50">
      <TooltipProvider delayDuration={0}>
        <Dock className="pointer-events-auto">
          {/* Section Navigation & Divider - Hidden on Mobile */}
          {!isMobile && (
            <>
              {DATA.navbar.map((item) => {
                const nodeId = getCanvasNodeId(item.href);
                const isActive = activeNode === nodeId;
                const isProjects = nodeId === "projects";

                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                      <button onClick={() => navigateTo(nodeId)}>
                        <DockIcon
                          className={
                            isActive
                              ? "text-[#3235F8] bg-[#3235F8]/10 ring-1 ring-[#3235F8]/20"
                              : isProjects
                                ? "text-[#3235F8] hover:bg-[#3235F8]/5"
                                : "text-neutral-500 hover:text-[#3235F8] hover:bg-[#3235F8]/5"
                          }
                        >
                          <item.icon
                            size={20}
                            weight={isActive || isProjects ? "fill" : "regular"}
                          />
                        </DockIcon>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" sideOffset={12}>
                      <p>{item.label.toLowerCase()}</p>
                      <TooltipArrow />
                    </TooltipContent>
                  </Tooltip>
                );
              })}

              {/* Divider */}
              <motion.div
                layout
                className="h-1/2 w-[1.5px] bg-neutral-200/80 mx-2 rounded-full"
              />
            </>
          )}

          {/* Social Links - Visible Everywhere */}
          {Object.entries(DATA.contact.social)
            .filter(([, social]) => social.navbar)
            .map(([name, social]) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DockIcon className="text-neutral-500 hover:text-[#3235F8] hover:bg-[#3235F8]/5">
                      <social.icon size={20} weight="regular" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={12}>
                  <p>{name.toLowerCase()}</p>
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>
            ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
