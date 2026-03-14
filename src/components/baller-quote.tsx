"use client";

import { motion } from "motion/react";

export function BallQuote() {
  return (
    <div
      className="absolute pointer-events-none select-none flex flex-col items-center justify-center"
      style={{
        left: 3700,
        top: -1000,
      }}
    >
      <p className="text-[7rem] font-black lowercase tracking-wide text-[#3235F8] opacity-20 select-none pointer-events-none whitespace-nowrap">
        we rise,
        <br />
        we fall,
        <br />
        <span>fuck it we ball</span>
      </p>
    </div>
  );
}
