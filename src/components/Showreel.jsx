"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

export default function Showreel() {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const MAX_RETRIES = 3;

    // Track scroll from top of section hitting top of viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

    // Starts slightly bent (37 degrees) and stands up exactly as you scroll
    const rotateX = useTransform(smoothProgress, [0, 1], [37, 0]);
    const scale = useTransform(smoothProgress, [0, 1], [0.75, 1]);
    const sheenOpacity = useTransform(smoothProgress, [0, 1], [0.4, 0]);

    const initializeVideo = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        console.log("Initializing video, attempt:", retryCount + 1);

        // Reset error state
        setVideoError(false);

        // Create a controller for timing out video load
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            if (!isVideoLoaded) {
                console.warn("Video load timeout, forcing load state");
                setIsVideoLoaded(true);
            }
        }, 4000);

        const handleCanPlay = () => {
            console.log("Video canplay event fired");
            clearTimeout(timeoutId);
            setIsVideoLoaded(true);
            setVideoError(false);
            setRetryCount(0);
        };

        const handlePlay = () => {
            console.log("Video playing");
            if (!isVideoLoaded) {
                setIsVideoLoaded(true);
            }
        };

        const handleError = (e) => {
            console.error("Video error:", e);
            clearTimeout(timeoutId);
            setVideoError(true);

            // Retry logic
            if (retryCount < MAX_RETRIES) {
                console.log("Retrying video load...");
                setRetryCount(prev => prev + 1);
                setTimeout(() => {
                    video.load();
                }, 1000 * (retryCount + 1)); // Exponential backoff
            } else {
                // Force load after max retries
                console.warn("Max retries reached, forcing video load");
                setIsVideoLoaded(true);
            }
        };

        const handleLoadedMetadata = () => {
            console.log("Video metadata loaded, attempting to play");
        };

        // Add event listeners
        video.addEventListener("canplay", handleCanPlay, { signal: controller.signal });
        video.addEventListener("play", handlePlay, { signal: controller.signal });
        video.addEventListener("error", handleError, { signal: controller.signal });
        video.addEventListener("loadedmetadata", handleLoadedMetadata, { signal: controller.signal });

        // Critical: Load the video
        video.load();

        // Attempt autoplay
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log("Autoplay initiated");
                })
                .catch(error => {
                    console.warn("Autoplay failed:", error);
                    // Autoplay might fail on some browsers, that's okay
                });
        }

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        };
    }, [retryCount, isVideoLoaded]);

    // Initialize on mount
    useEffect(() => {
        initializeVideo();
    }, []);

    // Retry initialization if video fails
    useEffect(() => {
        if (videoError && retryCount < MAX_RETRIES) {
            const timer = setTimeout(() => {
                initializeVideo();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [videoError, retryCount, initializeVideo]);

    return (
        <section
            ref={containerRef}
            className="relative h-[200vh] w-full bg-transparent"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ perspective: "3000px" }}>
                <motion.div
                    style={{ rotateX, scale, transformStyle: "preserve-3d" }}
                    className="relative z-10 w-[95vw] md:w-[85vw] max-w-[1200px] aspect-video rounded-[1.5rem] md:rounded-[3.5rem] p-[2px] md:p-[4px] bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-600 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] mx-auto border border-white/50"
                >
                    {/* Thick Black Glass Bezel */}
                    <div className="relative w-full h-full rounded-[1.4rem] md:rounded-[3.3rem] overflow-hidden bg-[#050505] p-2 md:p-5 border-[2px] border-black/80 shadow-2xl">

                        {/* Inner active screen containing the video */}
                        <div className="relative w-full h-full rounded-[1rem] md:rounded-[2.7rem] overflow-hidden bg-black shadow-inner">
                            
                            {/* Loading State Overlay */}
                            <AnimatePresence>
                                {!isVideoLoaded && (
                                    <motion.div 
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 z-30 bg-[#0a0a0a] flex flex-col items-center justify-center"
                                    >
                                        <div className="relative">
                                            <motion.h2 
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="text-white font-black text-2xl md:text-5xl tracking-[0.2em] uppercase italic"
                                            >
                                                Tinted
                                            </motion.h2>
                                            <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/10 overflow-hidden">
                                                <motion.div 
                                                    animate={{ x: ["-100%", "100%"] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                    className="w-1/2 h-full bg-electric-blue shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                                                />
                                            </div>
                                        </div>
                                        {videoError && (
                                            <motion.p
                                                animate={{ opacity: 0.6 }}
                                                className="text-white/50 text-sm mt-12"
                                            >
                                                {retryCount < MAX_RETRIES ? `Retrying... (${retryCount}/${MAX_RETRIES})` : "Loading..."}
                                            </motion.p>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Dynamic Glare/Reflection */}
                            <motion.div
                                style={{ opacity: sheenOpacity }}
                                className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/40 to-white/5 mix-blend-overlay"
                            />

                            <motion.video
                                ref={videoRef}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isVideoLoaded ? 1 : 0 }}
                                transition={{ duration: 0.8 }}
                                src="/showreel/tinted-reel.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                
                                crossOrigin="anonymous"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}