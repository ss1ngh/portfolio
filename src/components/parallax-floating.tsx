"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useRef } from "react";
import { useAnimationFrame } from "motion/react";
import { cn } from "@/lib/utils";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

interface FloatingContextType {
    registerElement: (id: string, element: HTMLDivElement, depth: number) => void;
    unregisterElement: (id: string) => void;
    setHovered: (id: string, hovered: boolean) => void;
}

const FloatingContext = createContext<FloatingContextType | null>(null);

export default function Floating({ children, className, sensitivity = 1, easingFactor = 0.05 }: { children: ReactNode; className?: string; sensitivity?: number; easingFactor?: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementsMap = useRef(new Map<string, { element: HTMLDivElement; depth: number; currentPosition: { x: number; y: number }; isHovered: boolean }>());

    const registerElement = useCallback((id: string, element: HTMLDivElement, depth: number) => {
        elementsMap.current.set(id, { element, depth, currentPosition: { x: 0, y: 0 }, isHovered: false });
    }, []);

    const unregisterElement = useCallback((id: string) => elementsMap.current.delete(id), []);

    const setHovered = useCallback((id: string, hovered: boolean) => {
        const data = elementsMap.current.get(id);
        if (data) {
            data.isHovered = hovered;
        }
    }, []);

    useAnimationFrame(() => {
        // Elements remain floating but static in their positions relative to the container.
        // The `style={{ top: pos.top, left: pos.left }}` handles their base positions.
    });

    return (
        <FloatingContext.Provider value={{ registerElement, unregisterElement, setHovered }}>
            <div ref={containerRef} className={cn("absolute inset-0 w-full h-full", className)}>
                {children}
            </div>
        </FloatingContext.Provider>
    );
}

export const FloatingElement = ({ children, className, depth = 1, style, isHovered = false }: { children: ReactNode; className?: string; depth?: number; style?: React.CSSProperties; isHovered?: boolean }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const idRef = useRef(Math.random().toString(36).substring(7));
    const context = useContext(FloatingContext);

    useEffect(() => {
        if (!elementRef.current || !context) return;
        context.registerElement(idRef.current, elementRef.current, depth);
        return () => context.unregisterElement(idRef.current);
    }, [depth, context]);

    useEffect(() => {
        if (!context) return;
        context.setHovered(idRef.current, isHovered);
    }, [isHovered, context]);

    return <div ref={elementRef} style={style} className={cn("absolute will-change-transform", className)}>{children}</div>;
};