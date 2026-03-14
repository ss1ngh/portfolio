"use client";

import { useRef } from "react";

export function useMousePositionRef() {
  const mousePosition = useRef({ x: 0, y: 0 });
  return mousePosition;
}
