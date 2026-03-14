'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";


const sections = [
    {
        id: "our-story",
        label: "01",
        heading: "Our Story",
        body: [
            "It started with frustration. Tinted Media didn't start with the idea of being just another agency. Too many brands were playing it safe. Too much content looked the same. Too many agencies were chasing trends instead of setting them.",
            "So we built the kind of creative partner we wished existed — one that thinks like strategists, moves like storytellers, and executes like operators. Tinted Media was born to challenge the ordinary. To tint the lens. To shift perspectives. To make brands feel less corporate and more human, less predictable and more unforgettable.",
        ],
        image: "/about us/14.png",
        imageRight: true,
    },
    {
        id: "sadaf-khan",
        label: "02",
        heading: "Meet Founder",
        body: [
            "Tinted Media was founded by Sadaf Khan, a creative strategist with an instinct for storytelling and a sharp eye for culture. With a background rooted in media, branding, and digital creativity, Sadaf saw the gap between what brands were saying and what audiences actually cared about. She understood early on that attention isn't bought — it's earned.",
            "So she built Tinted Media around one belief: Great brands aren't manufactured. They're crafted with intention. Her approach blends intuition with insight, art with analytics, and creativity with conversion.",
            "The result? Work that doesn't just look good on a mood board — it performs in the real world. Under her leadership, Tinted Media has become a home for bold ideas, fearless execution, and brands that refuse to blend in.",
        ],
        image: "/about us/15.png",
        imageRight: false,
    },
    {
        id: "stand-for",
        label: "03",
        heading: "What We Stand For",
        body: [
            "Culture first. Strategy always. Creativity without limits. Results that speak.",
            "If you’re here to blend in, we’re probably not your agency. If you’re ready to stand out — let’s make something unforgettable.",
        ],
        image: "/about us/16.png",
        imageRight: true,
    },
];

const aboutUsContent = {
    
    heading: "Tinted Media is where strategy meets story — and where brands come to stand out.",
    body: [
        "We’re a modern creative and media agency crafting culture-driven campaigns, unforgettable narratives, and content designed to make people stop, look, and engage. In a world of endless scrolling and short attention spans, we create work that cuts through the noise and actually sticks. Because looking good isn’t enough anymore. You have to mean something.",
        "We elevate brands, empower creators, and turn digital noise into real influence — blending sharp strategy with bold storytelling to build identities people remember and campaigns that convert. Thoughtful. Bold. A little rebellious. We don’t chase the digital pulse. We create it.",
    ]
};

export default function AboutPage() {
    return (
        <main className="bg-white text-black selection:bg-electric-blue selection:text-white overflow-x-hidden">
            <Navbar />

            {/* ─── 1. Full-bleed banner ───────────────────── */}
            <section className="relative w-full overflow-hidden mt-20 md:mt-24">
                <Image
                    src="/new/Newbanner.png"
                    alt="Our Story"
                    width={1920}
                    height={720}
                    className="w-full h-auto"
                    priority
                />
                <div className="absolute inset-0 bg-black/10 " />
                {/* <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="absolute bottom-10 left-8 md:left-16 text-white text-5xl md:text-6xl drop-shadow-lg font-bold uppercase tracking-tighter leading-none"
                >
                    Our Story
                </motion.h1> */}
            </section>

            {/* ─── 2. About Us Content ──────────────────────── */}
             <section className="relative z-10 bg-white px-8 md:px-16 py-12 md:py-20 border-b border-black/5">
                <div className="w-full">
                 
                    <div className="flex flex-col gap-12">
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] text-black uppercase max-w-5xl">
                            {aboutUsContent.heading}
                        </h3>
                        <div className="space-y-8 max-w-none">
                            {aboutUsContent.body.map((para, i) => (
                                <p key={i} className="text-gray-900 text-xl md:text-2xl leading-relaxed font-light">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 3. Cutout scroll sections ──────────────── */}
            {sections.map((s) => (
                <section
                    key={s.id}
                    className="relative z-10 bg-white last:pb-32"
                >
                    <div className={`flex flex-col lg:flex-row ${s.imageRight ? '' : 'lg:flex-row-reverse'}`}>

                        {/* ── Text column ───────────────────── */}
                        <div className="w-full lg:w-1/2 flex items-center bg-white px-8 md:px-10 py-12 md:py-24">
                            <motion.div
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7 }}
                                className="max-w-2xl w-full"
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
                                minHeight: '60vh',
                                backgroundImage: `url("${s.image}")`,
                                backgroundAttachment: 'fixed',
                                backgroundSize: '75vw auto',
                                backgroundPosition: s.imageRight ? 'right center' : 'left center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />

                    </div>
                </section>
            ))}

            <Footer />
        </main>
    );
}
