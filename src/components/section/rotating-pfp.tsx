"use client";

import { useRef } from "react";
import { DATA } from "@/data/resume";

export default function RotatingPFP() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/Suits.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.1;
    }
    audioRef.current.play().catch(() => { });
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative group">
      <img
        src={DATA.avatarUrl}
        alt={DATA.name}
        onMouseEnter={startMusic}
        onMouseLeave={stopMusic}
        className="size-[120px] -translate-x-10 translate-y-8 rounded-full border-2 border-border object-cover 
                   transition-all duration-200
                   hover:animate-[spin_3s_linear_infinite] hover:scale-110 
                   cursor-pointer shadow-xl aspect-square"
      />
    </div>
  );
}