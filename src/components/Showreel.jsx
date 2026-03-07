"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function Showreel() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section className="pt-28 pb-0 md:pt-32 md:pb-32 px-6 bg-white">
            <div
                className="max-w-7xl mx-auto relative group overflow-hidden rounded-[3rem] aspect-video bg-gray-100 border border-black/5 cursor-pointer shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handlePlay}
            >
                {/* Video Background */}
                <video
                    ref={videoRef}
                    src="/showreel/TINTED REEL.mp4#t=2.1"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <AnimatePresence>
                    {!isPlaying && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 z-10 pointer-events-none"
                        >
                            {/* Overlay Gradient - Lighter for white theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            {/* Interactive Center Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <motion.div
                                    animate={{
                                        scale: isHovered ? [1, 1.1, 1] : 1,
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-8 relative group"
                                >
                                    <div className="absolute inset-0 rounded-full bg-electric-blue/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Play fill="white" className="w-10 h-10 md:w-12 md:h-12 text-white ml-2 relative z-10" />
                                </motion.div>

                                <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none select-none drop-shadow-2xl">
                                    Show<span className="text-gray-200 italic pr-4">reel</span>
                                </h2>
                            </div>

                            <div className="absolute bottom-12 right-12">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/80">© 2026 Tinted Media</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
