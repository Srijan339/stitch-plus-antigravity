"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll(); // tracks scroll of the entire window for now
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 240]);

  // Load all images on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= 240; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 240) {
          // All loaded, trigger initial draw
          const ctx = canvasRef.current?.getContext("2d");
          if (ctx && loadedImages[0]) {
            drawInitial(ctx, loadedImages[0]);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawInitial = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Scale image to cover canvas while maintaining aspect ratio
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Adjust canvas size to match window
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        const currentFrame = Math.round(frameIndex.get());
        if (images[currentFrame - 1]) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) drawInitial(ctx, images[currentFrame - 1]);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  // Render on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Constrain index to our array length
    const index = Math.min(239, Math.max(0, Math.round(latest) - 1));
    const img = images[index];

    if (img && img.complete) {
      drawInitial(ctx, img);
    }
  });

  return (
    <div className="canvas-container fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} />
      {/* Overlay gradient to blend bottom edge into the next sections smoothly */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </div>
  );
}
