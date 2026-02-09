"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { createContext, useContext, ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
}

const Dock = ({ className, children }: DockProps) => {
  return (
    <motion.div
      className={cn(
        "mx-auto w-max h-full flex items-center justify-center rounded-full border",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const DockIcon = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <div
      className={cn(
        "relative flex aspect-square h-9 w-9 items-center justify-center rounded-full shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Dock, DockIcon };