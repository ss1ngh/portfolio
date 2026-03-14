"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
}

const Dock = ({ className, children }: DockProps) => {
  return (
    <motion.div
      className={cn(
        "mx-auto w-max h-14 flex items-center justify-center rounded-2xl border border-neutral-200/60 bg-white/90 backdrop-blur-md px-3 gap-2 shadow-xl shadow-[#3235F8]/5",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

const DockIcon = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex aspect-square h-10 w-10 items-center justify-center rounded-xl shrink-0 cursor-pointer transition-all duration-300 ease-out",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Dock, DockIcon };