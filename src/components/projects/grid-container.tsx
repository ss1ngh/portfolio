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
  size = 3, // Defaults to 3 based on your desktop layout preference
  className,
}: GridContainerProps) {
  return (
    <div
      className={cn(
        "grid w-full h-full gap-8",
        "grid-cols-1",
        size === 2 ? "md:grid-cols-2" : "",
        size === 3 ? "md:grid-cols-3" : "",
        size === 4 ? "md:grid-cols-4" : "",
        className,
      )}
    >
      {children}
    </div>
  );
}
