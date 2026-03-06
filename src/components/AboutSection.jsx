"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const sections = [
    {
        id: "intro-spacer",
        title: "Spacer",
        image: "/1.png",
        bgColor: "#ffffff",
        isSpacer: true
    },
    {
        id: "about",
        title: "About",
        phonetic: "/əˈbaʊt/",
        subtitle: "The Identity",
        content: "Tinted Media is where strategy meets story — and where brands come to stand out. We're a modern creative and media agency crafting culture-driven campaigns, unforgettable narratives, and content designed to make people stop, look, and engage.",
        quote: "Because looking good isn't enough anymore. You have to mean something.",
        image: "/2.png",
        bgColor: "#0a1d37",
        textColor: "text-white",
        labelColor: "text-blue-300"
    },
    {
        id: "film",
        title: "Film & Photography",
        phonetic: "/fɪlm & ˈfoʊ.toʊ/",
        subtitle: "01 // Production",
        content: "Cinematic videos and powerful photography that don't just play—they captivate and convert. We blend sharp strategy with bold storytelling to build identities people remember.",
        image: "/3.png",
        bgColor: "#050505",
        textColor: "text-white",
        labelColor: "text-gray-400"
    },
    {
        id: "social",
        title: "Social Media Management",
        phonetic: "/ˈsoʊ.ʃəlz/",
        subtitle: "02 // Engagement",
        content: "We don't just post—we build presence through storytelling, engagement, and consistent growth. We turn digital noise into real influence.",
        image: "/5.png",
        bgColor: "#feeae6",
        textColor: "text-black",
        labelColor: "text-rose-500",
        xOffset: "-translate-x-[1.4px]"
    },
    {
        id: "design",
        title: "Graphic Design",
        phonetic: "/dɪˈzaɪn/",
        subtitle: "03 // Branding",
        content: "Visuals that command attention. Bold, strategic, and unforgettable brand identities. Thoughtful. Bold. A little rebellious.",
        image: "/abcd.png",
        bgColor: "#1a1a1b",
        textColor: "text-white",
        labelColor: "text-blue-400",
        xOffset: "-translate-x-2"
    },
    {
        id: "performance",
        title: "Performance Management",
        phonetic: "/pərˈfɔːr.məns/",
        subtitle: "04 // Analytics",
        content: "Data-driven marketing that scales ROI and turns clicks into measurable revenue. We don't chase the digital pulse. We create it.",
        image: "/new/newpm.png",
        bgColor: "#0c0c0c",
        textColor: "text-white",
        labelColor: "text-emerald-500"
    },
    {
        id: "web",
        title: "Web Development",
        phonetic: "/dɪˈvɛl.əp.mənt/",
        subtitle: "05 // Digital",
        content: "High-performing, SEO-friendly websites that design for performance and work hard for your business. Blending art with analytics.",
        image: "/new/newweb.png",
        bgColor: "#dceefb",
        textColor: "text-black",
        labelColor: "text-blue-600"
    }
];

export default function AboutSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative w-full">

            {/* ──────────────────────────────────────────────────
                STICKY LAYER — backgrounds + cup in ONE container
            ────────────────────────────────────────────────── */}
            <div className="sticky top-0 h-screen w-full pointer-events-none" style={{ zIndex: 1 }}>

                {/* ──────────────────────────────────────────────────
                    STICKY LAYER — integrated background + cup wipe
                ────────────────────────────────────────────────── */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...sections, { id: "cta-wipe", bgColor: sections[sections.length - 1].bgColor, isBlank: true }].map((section, index) => {
                        const totalSegments = sections.length + 1;
                        const start = index / totalSegments;
                        const end = (index + 0.4) / totalSegments;

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const y = useTransform(smoothProgress, [start, end], ["100%", "0%"]);
                        // INVERSE transform to keep the cup stationary so it looks like it is being revealed
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const yInverse = useTransform(smoothProgress, [start, end], ["-100%", "0%"]);

                        return (
                            <motion.div
                                key={section.id}
                                className="absolute inset-0 overflow-hidden"
                                style={{
                                    backgroundColor: section.bgColor,
                                    zIndex: index,
                                    y: index === 0 ? 0 : y
                                }}
                            >
                                {!section.isBlank && (
                                    <motion.div
                                        className="absolute top-0 right-0 w-full lg:w-[70%] h-full flex items-start lg:items-center justify-center pt-16 lg:pt-4"
                                        style={{
                                            y: index === 0 ? 0 : yInverse
                                        }}
                                    >
                                        <div className={`relative w-full aspect-square max-w-[850px] ${section.xOffset || ''}`}>
                                            <Image
                                                src={section.image}
                                                alt={section.title}
                                                fill
                                                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)] scale-110"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* ──────────────────────────────────────────────
                SCROLLING TEXT CONTENT
            ────────────────────────────────────────────── */}
            <div className="relative" style={{ zIndex: 2 }}>
                <div className="w-full lg:w-3/5 px-8 md:px-16 lg:px-24">
                    {sections.map((section, index) => {
                        const totalSegments = sections.length + 1;
                        const segmentSize = 1 / totalSegments;
                        const start = index * segmentSize;
                        const end = (index + 1) * segmentSize;

                        // Text stays fully visible until the very last moment of the segment
                        // For the first section (About), we want it visible immediately
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(
                            smoothProgress,
                            index === 0
                                ? [0, 0.02, end - 0.05, end]
                                : [start, start + 0.05, end - 0.05, end],
                            [0, 1, 1, 0]
                        );

                        if (section.isSpacer) return <div key={section.id} className="h-[40vh]" />;

                        return (
                            <div key={section.id} className={`${index === 0 ? "pt-10" : "pt-24"} h-[100vh] flex flex-col justify-start`}>
                                <motion.div
                                    style={{ opacity }}
                                    className={`max-w-xl space-y-8 ${section.textColor}`}
                                >
                                    <div className="space-y-2">
                                        <span className={`font-mono text-xs uppercase tracking-[0.4em] ${section.labelColor}`}>
                                            {section.subtitle}
                                        </span>
                                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                                {section.title}
                                            </h2>
                                            <span className="font-serif italic text-xl md:text-2xl opacity-50">
                                                {section.phonetic}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                                        {section.content}
                                    </p>

                                    {section.quote && (
                                        <blockquote className="border-l-4 border-electric-blue pl-6 py-2">
                                            <p className="text-xl md:text-2xl font-black italic uppercase leading-tight">
                                                {section.quote}
                                            </p>
                                        </blockquote>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}

                    {/* ── CTA Block ─────────────────── */}
                    <div className="min-h-screen flex flex-col justify-center pt-20 pb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ amount: 0.5 }}
                            className="max-w-xl space-y-8 text-black"
                        >
                            <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-600">
                                Discover More
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                                Want to know{" "}
                                <span className="italic font-light">more about us?</span>
                            </h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-black/70">
                                Dive deeper into our story, meet the founder, and see what makes Tinted Media different.
                            </p>
                            <Link
                                href="/about"
                                className="magnetic group relative inline-flex items-center gap-4 px-10 py-5 bg-black text-white font-black text-xs uppercase tracking-widest rounded-full overflow-hidden transition-all hover:shadow-2xl"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Visit Full About Us Page
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-electric-blue transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
