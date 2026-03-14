"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridContainerProps {
  children: ReactNode;
  size?: number;
  className?: string;
}

export function GridContainer({
  children,
  size = 2,
  className,
}: GridContainerProps) {
  return (
    <div
      className={cn("grid w-full h-full", className)}
      style={{
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        gridTemplateRows: "auto",
        gap: "32px",
      }}
    >
      {children}
    </div>
  );
}
