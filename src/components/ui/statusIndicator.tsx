"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";

interface StatusIndicatorProps {
  className?: string;
}

export function StatusIndicator({ className }: StatusIndicatorProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn("flex items-center gap-2.5 cursor-pointer", className)}
        >
          {/* Pulsating Indicator */}
          <div className="relative flex h-2 w-2 items-center justify-center shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-90"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
          </div>

          <div className="text-[13px] text-[#3235F8] font-semibold lowercase tracking-tight">
            open to work
          </div>
        </motion.div>
      </TooltipTrigger>

      <TooltipContent
        side="bottom"
        align="center"
        sideOffset={12}
        className="bg-white/95 backdrop-blur-sm border border-neutral-200 px-3 py-1.5 shadow-md"
      >
        <TooltipArrow className="fill-neutral-300" width={12} height={5} />
        <div className="flex items-center gap-2 text-[13px] lowercase text-neutral-600">
          <span>reach out:</span>
          <Link
            href={DATA.contact.social.email.url}
            target="_blank"
            className="text-[#3235F8] hover:scale-110 font-semibold underline"
          >
            mail
          </Link>
          <span className="text-neutral-300">/</span>
          <Link
            href={DATA.contact.social.X.url}
            target="_blank"
            className="text-[#3235F8] hover:scale-110 font-semibold uppercase underline"
          >
            X
          </Link>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
