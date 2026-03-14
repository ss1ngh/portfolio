"use client";

import { type ReactNode } from "react";
import { NODE_POSITIONS } from "./nodes";

interface CanvasNodeProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function CanvasNode({ id, children, className = "" }: CanvasNodeProps) {
  const position = NODE_POSITIONS[id];

  if (!position) {
    console.warn(`CanvasNode: unknown node id "${id}"`);
    return null;
  }

  return (
    <div
      id={`canvas-node-${id}`}
      className={className}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: position.width,
        minHeight: position.height,
      }}
    >
      {children}
    </div>
  );
}
