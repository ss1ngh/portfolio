import { DATA } from "@/data/resume";

export interface NodePosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const NODE_POSITIONS: Record<string, NodePosition> = {
  home: { x: 0, y: 0, width: 1200, height: 1200 },
  projects: { x: 3500, y: 1000, width: 1500, height: 1200 },
  reads: { x: -3000, y: -500, width: 1200, height: 1500 },
};

// Dynamically generate node positions for projects
DATA.projects.forEach((_, idx) => {
  NODE_POSITIONS[`project-${idx}`] = {
    x: 6000 + (idx * 2500), // Spaced out to the right
    y: 1000,               // Kept roughly in line with main projects
    width: 1500,           // Larger width for full screen detail
    height: 1200           // Larger height for full screen detail
  };
});

export const DRONE_SCALE = 0.20;
export const FOCUSED_SCALE = 1;

export const ANIMATION_CONFIG = {
  entry: {
    initialDelay: 2.0,
    duration: 4.5,
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
