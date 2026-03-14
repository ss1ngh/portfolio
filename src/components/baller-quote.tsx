"use client";

import { motion } from "motion/react";

export function BallQuote() {
    return (
        <div
            className="absolute pointer-events-none select-none flex flex-col items-center justify-center"
            style={{
                left: 4000,
                top: -1200,
            }}
        >

            <p className="text-[7rem] font-black lowercase tracking-tighter text-[#0A0A0A]/5 select-none pointer-events-none whitespace-nowrap">
                we rise,<br />
                we fall,<br />
                <span>fuck it we ball</span>
            </p>
        </div>
    );
}