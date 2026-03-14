"use client";

import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { animate } from "motion/react";
import {
  NODE_POSITIONS,
  DRONE_SCALE,
  FOCUSED_SCALE,
  ANIMATION_CONFIG,
} from "./nodes";

interface CameraState {
  activeNode: string;
  isAnimating: boolean;
}

interface CameraContextValue {
  activeNode: string;
  isAnimating: boolean;
  navigateTo: (nodeId: string) => void;
  zoomRef: React.RefObject<HTMLDivElement | null>;
  panRef: React.RefObject<HTMLDivElement | null>;
}

const CameraContext = createContext<CameraContextValue | null>(null);

/**
 * Calculates translation to center a node relative to the screen center.
 * Because we use a dedicated ZoomLayer centered on the screen, scale is ignored here!
 */
function getTranslateForNode(nodeId: string) {
  const node = NODE_POSITIONS[nodeId];
  if (!node) return { x: 0, y: 0 };

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const cx = node.x + node.width / 2;

  const cy = node.height > vh
    ? node.y + (vh / 2)
    : node.y + node.height / 2;

  return {
    x: vw / 2 - cx,
    y: vh / 2 - cy,
  };
}

/**
 * Calculates translation to center the absolute midpoint of ALL nodes.
 */
function getDroneCenterTranslate() {
  const positions = Object.values(NODE_POSITIONS);
  const minX = Math.min(...positions.map((p) => p.x));
  const maxX = Math.max(...positions.map((p) => p.x + p.width));
  const minY = Math.min(...positions.map((p) => p.y));
  const maxY = Math.max(...positions.map((p) => p.y + p.height));

  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  return {
    x: vw / 2 - centerX,
    y: vh / 2 - centerY,
  };
}

export function CameraProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CameraState>({
    activeNode: "home",
    isAnimating: false,
  });

  const zoomRef = useRef<HTMLDivElement>(null);
  const panRef = useRef<HTMLDivElement>(null);

  const navigateTo = useCallback(
    async (nodeId: string) => {
      if (state.isAnimating || !zoomRef.current || !panRef.current || nodeId === state.activeNode)
        return;

      const zoomLayer = zoomRef.current;
      const panLayer = panRef.current;
      const { navigation } = ANIMATION_CONFIG;

      setState((prev) => ({ ...prev, isAnimating: true }));

      // Phase 1: Zoom out ONLY (Pan layer stays perfectly still)
      await animate(
        zoomLayer,
        { scale: DRONE_SCALE },
        { duration: navigation.zoomOut.duration, ease: navigation.zoomOut.ease },
      );

      // Phase 2: Pan ONLY (Zoom layer stays at DRONE_SCALE)
      const targetTranslate = getTranslateForNode(nodeId);
      await animate(
        panLayer,
        { x: targetTranslate.x, y: targetTranslate.y },
        { duration: navigation.pan.duration, ease: navigation.pan.ease },
      );

      // Phase 3: Zoom in ONLY
      await animate(
        zoomLayer,
        { scale: FOCUSED_SCALE },
        { duration: navigation.zoomIn.duration, ease: navigation.zoomIn.ease },
      );

      setState({ activeNode: nodeId, isAnimating: false });
    },
    [state.isAnimating, state.activeNode],
  );

  return (
    <CameraContext.Provider
      value={{
        activeNode: state.activeNode,
        isAnimating: state.isAnimating,
        navigateTo,
        zoomRef,
        panRef,
      }}
    >
      {children}
    </CameraContext.Provider>
  );
}

export function useCamera() {
  const context = useContext(CameraContext);
  if (!context) {
    throw new Error("useCamera must be used within a CameraProvider");
  }
  return context;
}

export { getTranslateForNode, getDroneCenterTranslate };