"use client";

import { useEffect, useState, useMemo } from "react";
import { animate } from "motion/react";
import { CameraProvider, useCamera } from "@/components/canvas/CameraContext";
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
  MOBILE_BREAKPOINT,
} from "@/components/canvas/nodes";
import Navbar from "@/components/navbar";

function CanvasInner() {
  // Extract activeNode to recalculate coordinates based on the current view
  const { zoomRef, panRef, activeNode } = useCamera();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const homeTranslate = useMemo(() => getTranslateForNode("home"), []);
  const initialScale = useMemo(() => getAdaptiveScale(), []);

  useEffect(() => {
    setIsMounted(true);

    // Check initial layout constraint
    const checkMobile = () =>
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();

    // Recalculate spatial translation coordinates when the viewport scales/zooms
    const handleResize = () => {
      checkMobile();
      if (window.innerWidth >= MOBILE_BREAKPOINT && panRef.current) {
        const newTranslate = getTranslateForNode(activeNode);
        panRef.current.style.transform = `translate3d(${newTranslate.x}px, ${newTranslate.y}px, 0)`;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeNode, panRef]);

  // Execute entry animation strictly for desktop
  useEffect(() => {
    if (!isMounted || isMobile) return;

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
  }, [isMounted, isMobile, initialScale, homeTranslate, zoomRef, panRef]);

  if (!isMounted) return null;

  //SPA layout for mobile devices
  if (isMobile) {
    return (
      <main className="flex flex-col w-full min-h-screen overflow-x-hidden pb-24 bg-white">
        <section id="home">
          <HomeContent />
        </section>
        {/* Reduced margin from mt-12 to mt-4 */}
        <section id="projects" className="mt-4 md:mt-12">
          <ProjectsContent />
        </section>
        {/* Reduced margin from mt-12 to mt-4 */}
        <section id="reads" className="mt-4 md:mt-12">
          <ReadsContent />
        </section>
        <Navbar />
      </main>
    );
  }

  // Render spatial canvas for desktop architecture
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
