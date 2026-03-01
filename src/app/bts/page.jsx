'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BTSPage() {
    return (
        <main className="min-h-screen bg-white text-black selection:bg-electric-blue selection:text-white font-sans">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-0 px-6 max-w-7xl mx-auto text-left flex flex-col items-start">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 w-full text-left">
                    <div className="space-y-4 flex flex-col items-start">
                        <span className="w-fit px-4 py-1 border border-electric-blue text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em] rounded-full">Exclusive // Access</span>
                        <h1 className="text-4xl md:text-7xl font-black mt-5 uppercase tracking-tighter leading-[0.85] text-left">
                            Behind <br />
                            <span className="text-electric-blue italic font-light">The Scenes.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Story Section */}
            <section className="px-6 pb-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center text-left">
                <div className="space-y-8 flex flex-col items-start">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
                        Where the real <br /> magic happens.
                    </h2>
                    <div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
                        <p>
                            BTS by Tinted captures the raw, unfiltered energy of celebrity and ad model shoots.
                            While the spotlight is on the final frame, we focus on the moments in between — the direction, the laughter, the glam, the chaos, and the craft that bring a production to life.
                        </p>
                        <p>
                            From high-profile celebrity campaigns to premium brand shoots, we document exclusive behind-the-scenes content that builds anticipation, boosts engagement, and adds authenticity to your brand story.
                        </p>
                        <blockquote className="border-l-4 border-electric-blue pl-8 py-4 text-xl font-black italic text-black">
                            "What happens off-camera is just as powerful as what makes the cut."
                        </blockquote>
                    </div>
                </div>
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl">
                    <Image
                        src="/bts.png"
                        alt="BTS Production"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Quote / Highlight */}
            <section className="py-20 px-6 bg-gray-50 text-black">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <p className="text-electric-blue font-mono text-xs tracking-[0.4em] uppercase">The Impact</p>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                        We document the process to <span className="italic font-light">Humanize</span> your brand and build <span className="text-electric-blue">Anticipation.</span>
                    </h2>
                </div>
            </section>

            {/* Secondary Asset */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="relative h-[600px] rounded-[4rem] overflow-hidden border border-black/5 group">
                    <Image
                        src="/Stop.png"
                        alt="Process Story"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-12 left-12">
                        <span className="text-electric-blue font-mono text-xs tracking-widest uppercase mb-2 block">Production Archive // ON-SITE</span>
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">Capturing the Chaos.</h3>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
