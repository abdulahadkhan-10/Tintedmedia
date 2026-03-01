"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Sparkles, PlayCircle, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ContentGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto bg-white">
            {/* BTS Section */}
            <Link href="/bts" className="group">
                <motion.div
                    whileHover={{ y: -12 }}
                    className="h-[420px] border border-black/5 bg-gray-50 relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col justify-end p-8"
                >
                    {/* Background Image */}
                    <Image
                        src="/bts.png"
                        alt="Behind The Scenes"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                    {/* Edge Glow */}
                    <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none z-20" />

                    <div className="relative z-10 space-y-6">


                        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-sm">
                            Where the real magic happens — behind the scenes. We capture the raw energy and craft that bring high-profile productions to life.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-electric-blue group-hover:text-white transition-all duration-500">
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                            </div>
                            <span className="text-white font-black uppercase tracking-widest text-xs">See the craft</span>
                        </div>
                    </div>
                </motion.div>
            </Link>

            {/* UGC Section */}
            <Link href="/ugc" className="group">
                <motion.div
                    whileHover={{ y: -12 }}
                    className="h-[420px] border border-black/5 bg-gray-50 relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col justify-end p-8"
                >
                    {/* Background Image */}
                    <Image
                        src="/ugc.png"
                        alt="User Generated Content"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                    {/* Edge Glow */}
                    <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none z-20" />

                    <div className="relative z-10 space-y-6 text-left">


                        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-sm">
                            Real people. Real impact. We create authentic content that today's audience actually trusts, blending credibility with conversion.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-electric-blue group-hover:text-white transition-all duration-500">
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                            </div>
                            <span className="text-white font-black uppercase tracking-widest text-xs">Drive influence</span>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}
