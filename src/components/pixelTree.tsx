"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const PRESET_COLORS = ["#87A454", "#4B6239", "#ACBE62", "#5D7A53", "#3E512F"];

export default function PixelTree() {

  const controls = useAnimation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const burstBuffer = useRef(0);

  const handleMouseEnter = () => {

    controls.start({
      x: [0, -2, 2, -1, 1, 0],
      rotate: [0, -2, 2, -1, 1, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    burstBuffer.current = 4; 
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: { 
      x: number; 
      baseX: number; 
      y: number; 
      size: number; 
      speed: number; 
      opacity: number; 
      color: string;
      age: number;
      amplitude: number;
      drift: number;
      rotation: number;
      rotationSpeed: number;
      isBurst: boolean;
    }[] = [];
    
    let animationFrameId: number;

    const createParticle = (isBurst = false) => {
      const baseX = Math.random() * 120 + 10;
      return {
        x: baseX,
        baseX: baseX,
        y: Math.random() * 40 + 20, 
        size: 5.5,
        speed: isBurst ? Math.random() * 0.4 + 0.3 : Math.random() * 0.15 + 0.1,
        opacity: 2.5, 
        color: PRESET_COLORS[Math.floor(Math.random() * PRESET_COLORS.length)],
        age: Math.random() * 100,
        amplitude: Math.random() * 12 + 6, 
        drift: (Math.random() - 0.5) * 20, 
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        isBurst: isBurst
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (Math.random() > 0.99) {
        particles.push(createParticle(false));
      }


      if (burstBuffer.current > 0 && Math.random() > 0.5) {
        particles.push(createParticle(true));
        burstBuffer.current -= 1;
      }

      particles.forEach((p, index) => {
        p.age += 0.025; 
        p.y += p.speed;
        p.rotation += p.rotationSpeed;

        const sway = Math.sin(p.age) * p.amplitude;
        p.x = p.baseX + sway + (p.drift * (1 - Math.min(1, p.opacity)));
        
        p.opacity -= p.isBurst ? 0.0075 : 0.0045; 
        
        ctx.save();
        ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        if (p.opacity <= 0 || p.y > canvas.height) {
          particles.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []); 

  return (
    <div 
      className="relative w-36 h-40 cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      <canvas
        ref={canvasRef}
        width={140}
        height={120}
        className="absolute inset-0 pointer-events-none z-10 translate-y-2"
      />
      <motion.div animate={controls} className="relative w-full h-36 z-0">
        <Image
          src="/pixelatedTree.png"
          alt="Pixel Tree"
          fill
          priority
          className="object-contain"
          style={{ imageRendering: "pixelated" }} 
        />
      </motion.div>
    </div>
  );
}