'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";


const sections = [
    {
        id: "frustration",
        label: "01",
        heading: "It started with frustration.",
        body: [
            "Tinted Media didn't start with the idea of being just another agency. It started with frustration.",
            "Too many brands were playing it safe. Too much content looked the same. Too many agencies were chasing trends instead of setting them.",
        ],
        image: "/about us/about us.JPG",
        imageRight: true,   // text LEFT | image RIGHT
    },
    {
        id: "born",
        label: "02",
        heading: "Born to challenge the ordinary.",
        body: [
            "So we built the kind of creative partner we wished existed — one that thinks like strategists, moves like storytellers, and executes like operators.",
            "Tinted Media was born to challenge the ordinary. To tint the lens. To shift perspectives. To make brands feel less corporate and more human, less predictable and more unforgettable.",
        ],
        image: "/about us/our story.JPG",
        imageRight: false,  // image LEFT | text RIGHT
    },
    {
        id: "force",
        label: "03",
        heading: "A creative force.",
        body: [
            "What began as a vision to do things differently has grown into a creative force helping startups, legacy brands, and digital creators show up louder, sharper, and more culturally relevant than ever.",
        ],
        image: "/IMG_4625 2.JPG",
        imageRight: true,
    },
];

const founderParas = [
    "Tinted Media was founded by Sadaf Khan, a creative strategist with an instinct for storytelling and a sharp eye for culture.",
    "With a background rooted in media, branding, and digital creativity, Sadaf saw the gap between what brands were saying and what audiences actually cared about. She understood early on that attention isn't bought — it's earned.",
    "So she built Tinted Media around one belief: Great brands aren't manufactured. They're crafted with intention.",
    "Her approach blends intuition with insight, art with analytics, and creativity with conversion. The result? Work that doesn't just look good on a mood board — it performs in the real world.",
    "Under her leadership, Tinted Media has become a home for bold ideas, fearless execution, and brands that refuse to blend in.",
];

export default function AboutPage() {
    return (
        <main className="bg-white text-black selection:bg-electric-blue selection:text-white overflow-x-hidden">
            <Navbar />

            {/* ─── 1. Full-bleed banner ───────────────────── */}
            <section className="relative w-full h-[70vh] overflow-hidden">
                <Image
                    src="/about us/banner.jpeg"
                    alt="Our Story"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-black/10 " />
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="absolute bottom-10 left-8 md:left-16 text-white text-5xl md:text-6xl drop-shadow-lg font-bold uppercase tracking-tighter leading-none"
                >
                    Our Story
                </motion.h1>
            </section>

            {/* ─── 2. Intro ───────────────────────────────── */}
            <section className="relative z-10 bg-white px-8 md:px-16 py-20 md:py-28 border-b border-black/5">
                <div className="max-w-4xl">
                    <p className="text-2xl md:text-3xl font-light leading-relaxed text-black">
                        Too many brands were playing it safe. Too much content looked the same. Too many agencies were chasing trends instead of setting them.
                    </p>
                    <p className="mt-8 text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
                        So we built the kind of creative partner we wished existed — one that thinks like strategists, moves like storytellers, and executes like operators.
                    </p>
                </div>
            </section>

            {/* ─── 3. Cutout scroll sections ──────────────── */}
            {sections.map((s) => (
                <section
                    key={s.id}
                    className="relative z-10 bg-white"
                >
                    <div className={`flex flex-col lg:flex-row ${s.imageRight ? '' : 'lg:flex-row-reverse'}`}>

                        {/* ── Text column ───────────────────── */}
                        <div className="w-full lg:w-1/2 flex items-center bg-white px-8 md:px-14 py-20 md:py-32">
                            <motion.div
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7 }}
                                className="max-w-lg"
                            >
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-electric-blue font-mono mb-4 block">
                                    {s.label}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.05] text-black mb-8">
                                    {s.heading}
                                </h2>
                                <div className="space-y-5">
                                    {s.body.map((para, i) => (
                                        <p key={i} className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/*
                          ── Image column — THE CUTOUT ────────────
                          background-attachment: fixed means the image
                          is pinned relative to the VIEWPORT.
                          This div acts as the "cutout window" — it
                          scrolls up the page while the image stays
                          frozen behind it, producing the clipping effect.
                        */}
                        <div
                            className="w-full lg:w-1/2"
                            style={{
                                minHeight: '80vh',
                                backgroundImage: `url("${s.image}")`,
                                backgroundAttachment: 'fixed',
                                backgroundSize: '50vw auto',
                                backgroundPosition: s.imageRight ? 'right center' : 'left center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />

                    </div>
                </section>
            ))}

            {/* ─── 4. Meet the Founder ────────────────────── */}
            <section className="relative z-10 bg-white border-t border-black/5">
                <div className="px-8 md:px-16 py-24 md:py-36 max-w-7xl mx-auto">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-electric-blue font-mono mb-6 block">
                        Meet the Founder
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
                        {/* Sticky left */}
                        <div className="lg:sticky lg:top-28 space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-black">
                                Sadaf<br />Khan
                            </h2>
                            <p className="text-xs uppercase tracking-[0.35em] font-bold text-gray-400">
                                Founder &amp; Creative Strategist
                            </p>
                            <blockquote className="border-l-4 border-electric-blue pl-6 py-1">
                                <p className="text-xl md:text-2xl font-black italic text-black leading-snug">
                                    "Great brands aren't manufactured. They're crafted with intention."
                                </p>
                            </blockquote>
                        </div>
                        {/* Scrolling right */}
                        <div className="space-y-7 text-gray-500 text-base md:text-lg font-light leading-relaxed">
                            {founderParas.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.08 }}
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 5. CTA ─────────────────────────────────── */}
            <section className="relative z-10 bg-black/10 py-28 px-8 text-center">
                <div className="max-w-3xl mx-auto space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">
                        Refuse to{' '}
                        <span className="text-electric-blue italic font-light">Blend In.</span>
                    </h2>
                    <a
                        href="/#contact"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-electric-blue hover:text-white transition-all"
                    >
                        Let's Make Something Unforgettable
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}