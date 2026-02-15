"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { DATA } from "@/data/resume";
import { useSwitch } from "@/components/Context/SwitchContext";

export default function GlitchPFP() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isSwitchOn: isBateman, toggleSwitch } = useSwitch();
  const [isGlitching, setIsGlitching] = useState(false);

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/Suits.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.1;
    }
    return audioRef.current;
  }, []);

  // Play/stop Suits music based on Bateman mode
  useEffect(() => {
    const audio = getAudio();
    if (isBateman) {
      audio.play().catch(() => { });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isBateman, getAudio]);

  const handleToggle = () => {
    if (isGlitching) return;

    // Play sparks sound
    const sparksSound = new Audio("/spark1.mp3");
    sparksSound.volume = 0.3;
    sparksSound.play().catch(() => { });

    // Start glitch effect
    setIsGlitching(true);

    // Switch after glitch plays briefly
    setTimeout(() => {
      toggleSwitch();
    }, 300);

    // End glitch effect
    setTimeout(() => {
      setIsGlitching(false);
    }, 600);
  };

  return (
    <div className="relative group">
      <img
        src={isBateman ? "/patrick-bateman.jpg" : DATA.avatarUrl}
        alt={isBateman ? "Patrick Bateman" : DATA.name}
        className={`size-[120px] translate-x-0 translate-y-0 md:-translate-x-4 md:translate-y-14 rounded-2xl border-2 border-border object-cover 
                   transition-all duration-300
                   cursor-pointer shadow-xl aspect-square
                   ${isGlitching ? "animate-glitch" : ""}`}
      />
      <button
        onClick={handleToggle}
        className="absolute -bottom-1 -right-2 cursor-pointer"
        title={isBateman ? "Back to normal" : "Sigma mode"}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className={`text-black-50 transition-all duration-500 animate-[scale-pulse_3s_ease-in-out_infinite] ${isBateman ? "scale-x-[-1]" : ""}`}
          height="12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
        </svg>
      </button>

      <style>{`
        @keyframes glitch {
          0% {
            filter: none;
          }
          10% {
            filter: hue-rotate(90deg) saturate(2);
          }
          20% {
            filter: hue-rotate(-90deg) brightness(1.5);
            clip-path: inset(20% 0 30% 0);
          }
          30% {
            filter: invert(1) hue-rotate(180deg);
          }
          40% {
            filter: hue-rotate(45deg) contrast(2);
            clip-path: inset(40% 0 10% 0);
          }
          50% {
            filter: saturate(3) brightness(0.8);
          }
          60% {
            filter: hue-rotate(-45deg) contrast(1.5);
            clip-path: inset(10% 0 50% 0);
          }
          70% {
            filter: invert(0.8) hue-rotate(120deg);
          }
          80% {
            filter: hue-rotate(60deg) saturate(2.5);
            clip-path: inset(30% 0 20% 0);
          }
          90% {
            filter: brightness(1.3) contrast(1.2);
          }
          100% {
            filter: none;
            clip-path: none;
          }
        }
        .animate-glitch {
          animation: glitch 0.6s ease-in-out !important;
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}