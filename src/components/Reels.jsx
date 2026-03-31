import React, { useRef, useState, useEffect, memo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const videos = [
  "/showreel/Video0.mp4",
  "/showreel/Video1.mp4",
  "/showreel/Video2.mp4",
  "/showreel/Video4.mp4",
  "/showreel/Video5.mp4",
  "/showreel/Video6.mp4",
];

// 🚀 Optimization: Memoized Card for performance
const VideoCard = memo(({ src, index, isMobile, smoothProgress }) => {
  const offset = index - 2.5;

  // ANIMATIONS (Always defined, but only applied via style on desktop)
  const y = useTransform(smoothProgress, [0, 0.3, 0.65, 1], [340 + offset * 25, 20, -75, -125]);
  const scale = useTransform(smoothProgress, [0, 0.3, 0.65, 1], [0.75, 1.14, 1.05, 0.87]);
  const rotate = useTransform(smoothProgress, [0, 0.35, 0.75], [offset * -10, offset * 2, offset * 7]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.7, 1], [0.55, 1, 1, 0.48]);

  return (
    <motion.div
      className={`relative flex-shrink-0 snap-center overflow-hidden shadow-2xl border border-zinc-100 bg-zinc-50
                 ${isMobile ? "w-[260px] aspect-[9/16] rounded-3xl" : "w-[148px] sm:w-[165px] md:w-[195px] lg:w-[225px] aspect-[9/16] rounded-[2.5rem]"}`}
      style={!isMobile ? {
        y, scale, rotate, opacity,
        zIndex: 30 - Math.abs(Math.round(offset)),
      } : { scrollSnapAlign: "center" }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35 pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
    </motion.div>
  );
});

VideoCard.displayName = "VideoCard";

// Safe Hook for Mobile Detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Reels() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 65, damping: 24 });
  
  // High-performance heading transitions
  const headingOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const headingY = useTransform(smoothProgress, [0, 0.2], [0, -30]);

  // 🔄 Mobile Auto-Scroll Logic
  useEffect(() => {
    if (isMobile && scrollRef.current) {
      const scroll = scrollRef.current;
      let animationId;
      let position = 0;

      const autoScroll = () => {
        position += 0.5; // Smooth scroll speed
        if (position >= scroll.scrollWidth - scroll.clientWidth) position = 0;
        scroll.scrollLeft = position;
        animationId = requestAnimationFrame(autoScroll);
      };

      const timeoutId = setTimeout(() => {
        animationId = requestAnimationFrame(autoScroll);
      }, 1500);

      const stopOnTouch = () => {
        cancelAnimationFrame(animationId);
        clearTimeout(timeoutId);
        scroll.removeEventListener("touchstart", stopOnTouch);
      };

      scroll.addEventListener("touchstart", stopOnTouch, { passive: true });

      return () => {
        cancelAnimationFrame(animationId);
        clearTimeout(timeoutId);
        scroll.removeEventListener("touchstart", stopOnTouch);
      };
    }
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      className={`w-full bg-white relative overflow-visible ${isMobile ? "py-16 md:py-20" : "min-h-[260vh]"}`}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <div className={`${isMobile ? "relative" : "sticky top-0 h-screen"} flex flex-col items-center justify-center overflow-hidden`}>
        <motion.h1
          style={!isMobile ? { opacity: headingOpacity, y: headingY } : {}}
          className={`${isMobile ? "relative mb-12 text-center" : "absolute top-[12%] left-1/2 -translate-x-1/2 text-center z-40"} 
                     text-5xl md:text-8xl font-black tracking-tight uppercase text-neutral-900`}
        >
          Our <span className="font-light italic text-blue-600">Work</span>
        </motion.h1>

        <div 
          ref={scrollRef}
          className={`flex hide-scrollbar ${isMobile 
            ? "overflow-x-auto snap-x snap-mandatory w-full px-10 gap-5" 
            : "gap-4 md:gap-10 mt-[-40px] items-center justify-center w-full"}`}
        >
          {videos.map((src, index) => (
            <VideoCard 
              key={index} 
              src={src} 
              index={index} 
              isMobile={isMobile} 
              smoothProgress={smoothProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}