"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Showreel() {
    const containerRef = useRef(null);

    // Track scroll from top of section hitting top of viewport
    // to bottom of section hitting bottom of viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

    // Starts slightly bent (37 degrees) and stands up exactly as you scroll
    const rotateX = useTransform(smoothProgress, [0, 1], [37, 0]);
    // Start slightly larger since it's not bending back as far
    const scale = useTransform(smoothProgress, [0, 1], [0.75, 1]);

    // Softer glass glare since it is not lying as fast back against the light
    const sheenOpacity = useTransform(smoothProgress, [0, 1], [0.4, 0]);

    return (
        <section
            ref={containerRef}
            // Section is taller than screen to create scroll distance
            className="relative h-[200vh] w-full bg-transparent"
        >
            {/* Sticky container stays pinned until we finish scrolling past the section height */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ perspective: "3000px" }}>
                <motion.div
                    style={{ rotateX, scale, transformStyle: "preserve-3d" }}
                    className="relative z-10 w-[95vw] md:w-[85vw] max-w-[1200px] aspect-video rounded-[1.5rem] md:rounded-[3.5rem] p-[2px] md:p-[4px] bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-600 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] mx-auto border border-white/50"
                >
                    {/* Thick Black Glass Bezel */}
                    <div className="relative w-full h-full rounded-[1.4rem] md:rounded-[3.3rem] overflow-hidden bg-[#050505] p-2 md:p-5 border-[2px] border-black/80 shadow-2xl">

                        {/* Inner active screen containing the video */}
                        <div className="relative w-full h-full rounded-[1rem] md:rounded-[2.7rem] overflow-hidden bg-black shadow-inner">

                            {/* Dynamic Glare/Reflection sweeping across the glass as it stands up */}
                            <motion.div
                                style={{ opacity: sheenOpacity }}
                                className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/40 to-white/5 mix-blend-overlay"
                            />

                            <video
                                src="/showreel/TINTED REEL.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}