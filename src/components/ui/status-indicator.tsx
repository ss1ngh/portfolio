"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface StatusIndicatorProps {
    className?: string;
}

const TEXTS = [
    "your friendly reliable engineer",
    "freelancer",
    "available to work",
];

export function StatusIndicator({ className }: StatusIndicatorProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((current) => (current + 1) % TEXTS.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
                "flex items-center gap-2 px-3 py-1 w-fit rounded-full border border-black/5 bg-white/10 backdrop-blur-lg shadow-sm transform hover:scale-105",
                className
            )}
        >
            <motion.div layout className="relative flex h-2 w-2 items-center justify-center shrink-0">
                <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></div>
                <div className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
            </motion.div>
            <motion.div layout className="relative h-[1.2em] overflow-hidden text-xs font-medium text-secondary-foreground/80 flex items-center">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={index}
                        initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="block whitespace-nowrap text-foreground font-semibold px-0.5"
                    >
                        {TEXTS[index]}
                    </motion.span>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
