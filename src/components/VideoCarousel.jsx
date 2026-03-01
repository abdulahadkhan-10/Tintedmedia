"use client";
import { motion } from "framer-motion";
import React from "react"; // Added React import
import Image from "next/image"; // Added Image import

import { Heart, MessageCircle, Share2 } from "lucide-react";

const works = [
    {
        id: 1,
        image: "https://tintedmedia.co/_next/image?url=%2Ftinted1.gif&w=828&q=75",
        likes: "128.4K",
        comments: "4.2K"
    },
    {
        id: 2,
        image: "https://tintedmedia.co/_next/image?url=%2Ftinted1.gif&w=828&q=75",
        likes: "85.2K",
        comments: "2.1K"
    },
    {
        id: 3,
        image: "https://tintedmedia.co/_next/image?url=%2Ftinted1.gif&w=828&q=75",
        likes: "210.9K",
        comments: "8.4K"
    }
];

export default function VideoCarousel() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % works.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 relative z-10 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-8 h-[1px] bg-electric-blue" />
                    <span className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em]">Portfolio Showcase</span>
                    <div className="w-8 h-[1px] bg-electric-blue" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 px-4 inline-block text-foreground">
                    The <br className="md:hidden" />
                    <span className="gradient-text italic pr-4">Live Feed.</span>
                </h2>
                <p className="text-gray-600 max-w-lg mx-auto font-medium uppercase text-xs tracking-[0.2em] leading-relaxed">
                    Cinematic storytelling meets high-performance marketing. Perfectly executed for the digital stage.
                </p>
            </div>

            {/* Hero Phone Frame - PORTRAIT (OPTIMIZED VERTICAL) */}
            <div className="relative max-w-[300px] md:max-w-[420px] mx-auto z-10 px-4">
                {/* Phone Body with High-Vis Edge - Aspect adjusted to 9/16 for better viewport fit */}
                <div className="relative aspect-[9/16] bg-[#050505] rounded-[3rem] border-[8px] md:border-[12px] border-[#1a1a1a] ring-1 ring-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">

                    {/* Internal Screen with Auto-Slider */}
                    <div className="absolute inset-0">
                        <motion.div
                            animate={{ x: `-${index * 100}%` }}
                            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                            className="flex h-full w-full"
                        >
                            {works.map((work) => (
                                <div key={work.id} className="min-w-full h-full relative">
                                    <Image
                                        src={work.image}
                                        alt="Portfolio Work"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Social Metrics Mockup */}
                                    <div className="absolute top-10 md:top-12 left-6 md:left-8 z-20 flex gap-2">
                                        <div className="px-2 md:px-3 py-1 bg-red-600 text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-sm animate-pulse">Live</div>
                                        <div className="px-2 py-1 bg-black/40 backdrop-blur-md text-white text-[8px] md:text-[9px] font-bold rounded-sm">12.4K</div>
                                    </div>

                                    <div className="absolute bottom-10 md:bottom-12 right-4 md:right-6 z-20 flex flex-col gap-4 md:gap-6 items-center">
                                        <div className="flex flex-col items-center gap-1 group cursor-pointer">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all">
                                                <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </div>
                                            <span className="text-[9px] md:text-[10px] font-black text-white">{work.likes}</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 group cursor-pointer">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-electric-blue group-hover:border-electric-blue transition-all">
                                                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </div>
                                            <span className="text-[9px] md:text-[10px] font-black text-white">{work.comments}</span>
                                        </div>
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                                            <Share2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Image Vingette/Shade */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Device Hardware Ornaments (Top Notch) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-7 bg-[#1a1a1a] rounded-b-[1.5rem] md:rounded-b-3xl z-30" />

                    {/* Bezel Edge Light Reflection */}
                    <div className="absolute inset-0 pointer-events-none z-40 border border-white/5 rounded-[2.8rem]" />
                    <div className="absolute -top-1/2 -left-1/2 w-full h-[200%] bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-10 transform rotate-12 pointer-events-none z-50" />
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-4 mt-8 md:mt-12">
                    {works.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? "w-12 md:w-16 bg-foreground shadow-[0_0_10px_rgba(0,0,0,0.2)]" : "w-4 md:w-5 bg-black/10 hover:bg-black/30"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
