"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridContainerProps {
  children: ReactNode;
  size?: number; // e.g., 4 for 4x4, 6 for 6x6
  className?: string;
}

export function GridContainer({
  children,
  size = 4,
  className,
}: GridContainerProps) {
  return (
    <div
      className={cn("grid w-full h-full", className)}
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
        gap: "24px",
      }}
    >
      {children}
    </div>
  );
}
