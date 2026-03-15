import { DATA } from "@/data/resume";

export const MOBILE_BREAKPOINT = 768;

export interface NodePosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const NODE_POSITIONS: Record<string, NodePosition> = {
  home: { x: 0, y: 0, width: 1200, height: 1200 },
  projects: { x: 3000, y: 1000, width: 1500, height: 1200 },
  reads: { x: -3000, y: -500, width: 1200, height: 1500 },
};

export function getAdaptiveScale(): number {
  if (typeof window === "undefined") return DRONE_SCALE;
  return window.innerWidth < MOBILE_BREAKPOINT ? 0.35 : DRONE_SCALE;
}

export function getTranslateForNode(nodeId: string): { x: number; y: number } {
  const node = NODE_POSITIONS[nodeId];
  if (!node) return { x: 0, y: 0 };

  const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;

  const isSmallScreen = vw < MOBILE_BREAKPOINT;
  const adjustedNodeWidth = isSmallScreen ? node.width * 0.5 : node.width;
  const adjustedNodeHeight = isSmallScreen ? node.height * 0.5 : node.height;

  const cx = node.x + adjustedNodeWidth / 2;

  const cy =
    adjustedNodeHeight > vh ? node.y + vh / 2 : node.y + adjustedNodeHeight / 2;

  return {
    x: vw / 2 - cx,
    y: vh / 2 - cy,
  };
}

export function getMobileNodeScale(): number {
  if (typeof window === "undefined") return 1;
  return window.innerWidth < MOBILE_BREAKPOINT ? 1.5 : 1;
}

// Dynamically generate node positions for projects
DATA.projects.forEach((_, idx) => {
  NODE_POSITIONS[`project-${idx}`] = {
    x: 6000 + idx * 2500, // Spaced out to the right
    y: 1000, // Kept roughly in line with main projects
    width: 1500, // Larger width for full screen detail
    height: 1200, // Larger height for full screen detail
  };
});

export const DRONE_SCALE = 0.2;
export const FOCUSED_SCALE = 1;

export const ANIMATION_CONFIG = {
  entry: {
    initialDelay: 2.0,
    duration: 4.0,
    ease: [0.16, 0, 0.3, 1] as [number, number, number, number],
  },
  navigation: {
    zoomOut: {
      duration: 2.0,
      ease: [0.35, 0.5, 0.35, 1] as [number, number, number, number],
    },
    pan: {
      duration: 2.0,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
    zoomIn: {
      duration: 3.0,
      ease: [0.45, 0.05, 0.55, 0.95] as [number, number, number, number],
    },
  },
};
