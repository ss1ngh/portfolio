"use client";

import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { animate } from "motion/react";
import {
  NODE_POSITIONS,
  DRONE_SCALE,
  FOCUSED_SCALE,
  ANIMATION_CONFIG,
  MOBILE_BREAKPOINT,
  getAdaptiveScale,
} from "./nodes";

interface CameraState {
  activeNode: string;
  isAnimating: boolean;
}

interface CameraContextValue {
  activeNode: string;
  isAnimating: boolean;
  isMobile: boolean;
  navigateTo: (nodeId: string) => void;
  zoomRef: React.RefObject<HTMLDivElement | null>;
  panRef: React.RefObject<HTMLDivElement | null>;
}

const CameraContext = createContext<CameraContextValue | null>(null);

function getTranslateForNode(nodeId: string): { x: number; y: number } {
  const node = NODE_POSITIONS[nodeId];
  if (!node) return { x: 0, y: 0 };

  const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;

  const isSmallScreen = vw < MOBILE_BREAKPOINT;
  const adjustedNodeWidth = isSmallScreen ? node.width * 0.5 : node.width;
  const adjustedNodeHeight = isSmallScreen ? node.height * 0.5 : node.height;

  const cx = node.x + adjustedNodeWidth / 2;

  const cy = adjustedNodeHeight > vh
    ? node.y + (vh / 2)
    : node.y + adjustedNodeHeight / 2;

  return {
    x: vw / 2 - cx,
    y: vh / 2 - cy,
  };
}

function getDroneCenterTranslate(): { x: number; y: number } {
  const positions = Object.values(NODE_POSITIONS);
  const minX = Math.min(...positions.map((p) => p.x));
  const maxX = Math.max(...positions.map((p) => p.x + p.width));
  const minY = Math.min(...positions.map((p) => p.y));
  const maxY = Math.max(...positions.map((p) => p.y + p.height));

  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;

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
  const [isMobile, setIsMobile] = useState(false);

  const zoomRef = useRef<HTMLDivElement>(null);
  const panRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navigateTo = useCallback(
    async (nodeId: string) => {
      if (state.isAnimating || !zoomRef.current || !panRef.current || nodeId === state.activeNode)
        return;

      const zoomLayer = zoomRef.current;
      const panLayer = panRef.current;
      const { navigation } = ANIMATION_CONFIG;

      setState((prev) => ({ ...prev, isAnimating: true }));

      const targetScale = getAdaptiveScale();

      await animate(
        zoomLayer,
        { scale: targetScale },
        { duration: navigation.zoomOut.duration, ease: navigation.zoomOut.ease }
      );

      const targetTranslate = getTranslateForNode(nodeId);
      await animate(
        panLayer,
        { x: targetTranslate.x, y: targetTranslate.y },
        { duration: navigation.pan.duration, ease: navigation.pan.ease }
      );

      await animate(
        zoomLayer,
        { scale: FOCUSED_SCALE },
        { duration: navigation.zoomIn.duration, ease: navigation.zoomIn.ease }
      );

      setState({ activeNode: nodeId, isAnimating: false });
    },
    [state.isAnimating, state.activeNode]
  );

  const contextValue = useMemo(
    () => ({
      activeNode: state.activeNode,
      isAnimating: state.isAnimating,
      isMobile,
      navigateTo,
      zoomRef,
      panRef,
    }),
    [state.activeNode, state.isAnimating, isMobile, navigateTo]
  );

  return (
    <CameraContext.Provider value={contextValue}>
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
