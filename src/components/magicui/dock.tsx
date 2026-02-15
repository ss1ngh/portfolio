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
        "mx-auto w-max h-12 flex items-center justify-center rounded-2xl border bg-card/90 backdrop-blur-md px-3 gap-2 transition-all duration-300 ease-out hover:gap-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const DockIcon = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <motion.div
      whileHover={{
        margin: "0 2px"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "relative flex aspect-square h-9 w-9 items-center justify-center rounded-xl bg-background border border-border shrink-0 cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export { Dock, DockIcon };