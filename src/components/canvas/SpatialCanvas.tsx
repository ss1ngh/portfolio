"use client";

import { useEffect, useState, useMemo } from "react";
import { animate } from "motion/react";
import {
  CameraProvider,
  useCamera,
} from "@/components/canvas/CameraContext";
import { CanvasNode } from "@/components/canvas/CanvasNode";
import { HomeContent } from "@/components/canvas/HomeContent";
import { ProjectsContent } from "@/components/canvas/ProjectsContent";
import { ProjectDetailContent } from "@/components/projects/project-detail-content";
import { ReadsContent } from "@/components/canvas/ReadsContent";
import { BallQuote } from "@/components/baller-quote";
import {
  getAdaptiveScale,
  FOCUSED_SCALE,
  ANIMATION_CONFIG,
  getTranslateForNode,
} from "@/components/canvas/nodes";
import Navbar from "@/components/navbar";

function CanvasInner() {
  const { zoomRef, panRef } = useCamera();
  const [isMounted, setIsMounted] = useState(false);

  const homeTranslate = useMemo(() => getTranslateForNode("home"), []);
  const initialScale = useMemo(() => getAdaptiveScale(), []);

  useEffect(() => {
    setIsMounted(true);

    const zoomLayer = zoomRef.current;
    const panLayer = panRef.current;
    if (!zoomLayer || !panLayer) return;

    const { entry } = ANIMATION_CONFIG;

    zoomLayer.style.transform = `scale(${initialScale})`;
    panLayer.style.transform = `translate3d(${homeTranslate.x}px, ${homeTranslate.y}px, 0)`;

    const timer = setTimeout(() => {
      animate(
        zoomLayer,
        { scale: FOCUSED_SCALE },
        { duration: entry.duration, ease: entry.ease },
      );
    }, entry.initialDelay * 1000);

    return () => clearTimeout(timer);
  }, [initialScale, homeTranslate]);

  return (
    <>
      <div
        className="spatial-viewport"
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          opacity: isMounted ? 1 : 0,
          transition: "opacity 0.1s ease-out",
        }}
      >
        <div
          ref={zoomRef}
          className="zoom-layer"
          style={{
            width: "100%",
            height: "100%",
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <div
            ref={panRef}
            className="pan-layer"
            style={{
              width: "100%",
              height: "100%",
              willChange: "transform",
              transform: `translate3d(${homeTranslate.x}px, ${homeTranslate.y}px, 0)`,
            }}
          >
            <BallQuote />

            {/* Content Nodes */}
            <CanvasNode id="home">
              <HomeContent />
            </CanvasNode>
            <CanvasNode id="projects">
              <ProjectsContent />
            </CanvasNode>
            <CanvasNode id="reads">
              <ReadsContent />
            </CanvasNode>
            {/* 
            {DATA.projects.map((proj, idx) => (
              <CanvasNode key={idx} id={`project-${idx}`}>
                <ProjectDetailContent project={proj} />
              </CanvasNode>
            ))} */}
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default function SpatialCanvas() {
  return (
    <CameraProvider>
      <CanvasInner />
    </CameraProvider>
  );
}
