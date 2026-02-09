"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
}

export default function TypingEffect({
    text,
    className = "",
    speed = 30,
    delay = 0
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (displayedText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [displayedText, text, speed, started]);

    return (
        <span className={className}>
            {displayedText}
            {displayedText.length < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </span>
    );
}
