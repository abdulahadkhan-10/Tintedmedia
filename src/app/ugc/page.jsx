'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp } from "lucide-react";

export default function UGCPage() {
    return (
        <main className="min-h-screen bg-white text-black selection:bg-electric-blue selection:text-white font-sans">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-0 px-6 max-w-7xl mx-auto text-left">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end"
                >
                    {/* Left: Pill + Heading */}
                    <div className="flex flex-col items-start space-y-4">
                        <div className="flex items-center justify-start gap-2">
                            <span className="w-fit px-4 py-1 border border-electric-blue text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em] rounded-full">Community // Impact</span>
                            <div className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse" />
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.95] mt-5">
                            UGC by <br />
                            <span className="text-electric-blue not-italic">TINTED.</span>
                        </h1>
                    </div>
                    {/* Right: Description */}
                    <div className="flex flex-col justify-end pb-3 space-y-6">
                        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                            Real people. Real content. Real impact. We create authentic, relatable content discovered through the lens of community.
                        </p>
                        <div className="border-l-4 border-electric-blue pl-6">
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Content that converts</p>
                            <p className="text-2xl font-black text-black tracking-tighter mt-1">Authenticity over everything.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Content Section */}
            <section className="px-6 pb-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center text-left mt-5">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl order-2 lg:order-1">
                    <Image
                        src="/ugc.png"
                        alt="User Generated Content Showcase"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-8 order-1 lg:order-2 flex flex-col items-start">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
                        Authenticity is the <br /> <span className="text-electric-blue">New Currency.</span>
                    </h2>
                    <div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
                        <p>
                            UGC by Tinted is all about creating authentic, relatable content that today’s audience actually trusts. We collaborate with creators and influencers to produce user-generated content that feels organic — not like an ad.
                        </p>
                        <p>
                            From influencer marketing campaigns to performance-driven UGC ads, we craft content designed to blend seamlessly into feeds while driving measurable results.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                            <div className="space-y-2">
                                <h4 className="flex items-center gap-2 font-black uppercase tracking-tighter text-black">
                                    <Users className="w-5 h-5 text-electric-blue" /> Credibility
                                </h4>
                                <p className="text-sm text-gray-500">Building true trust through real human experiences.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="flex items-center gap-2 font-black uppercase tracking-tighter text-black">
                                    <TrendingUp className="w-5 h-5 text-electric-blue" /> Conversions
                                </h4>
                                <p className="text-sm text-gray-500">Engineered to drive real business growth and revenue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manifesto / Impact */}
            <section className="py-12 px-6 bg-gray-50 text-black text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <p className="text-electric-blue font-mono text-xs tracking-[0.4em] uppercase">The Vision</p>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                        It’s not just about visibility — it’s about <span className="text-electric-blue">Connection.</span>
                    </h2>
                    <p className="text-gray-500 font-light text-lg md:text-xl px-4">
                        We blend community-driven storytelling with strategic performance to create content that fuels both the heart and the bottom line.
                    </p>
                </div>
            </section>

            {/* Closing CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black">
                        Start Your <span className="text-electric-blue italic font-light">Empire.</span>
                    </h2>
                    <div className="flex justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-6 px-12 py-6 bg-black text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-electric-blue transition-all shadow-2xl"
                        >
                            Collaborate With Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
