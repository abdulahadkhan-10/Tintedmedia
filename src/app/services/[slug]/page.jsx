"use client";
import React, { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceLens from "@/components/ServiceLens";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicePage({ params }) {
    const { slug } = use(params);
    const data = servicesData[slug] || {
        title: slug.split('-').join(' ').toUpperCase(),
        subtitle: "",
        description: "Innovative storytelling solutions for the modern digital era.",
        features: []
    };

    return (
        <main className="min-h-screen bg-white text-black selection:bg-electric-blue selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7"
                        >
                            <h3 className="text-electric-blue font-mono text-sm tracking-[0.5em] uppercase mb-8">
                                Service // {slug.replace(/-/g, ' ')}
                            </h3>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-12">
                                {data.title} <br />
                                <span className="text-gray-300 italic font-light block mt-2 break-words">
                                    {data.subtitle}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-xl font-light leading-relaxed mb-12">
                                {data.description}
                            </p>

                            <Link
                                href="/contact"
                                className="magnetic inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-electric-blue transition-all"
                            >
                                Start a Project <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:col-span-5 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CORE VALUE PILLARS */}
            <section className="py-32 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <h3 className="text-gray-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">The Impact</h3>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Strategic <span className="text-electric-blue italic font-light">Value</span></h2>
                        </div>
                        <p className="text-gray-500 max-w-sm font-medium">
                            Every execution is a calculated move designed to capture attention and convert it into brand equity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {data.features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-12 rounded-[3.5rem] bg-white border border-black/5 hover:border-electric-blue/20 transition-all hover:shadow-2xl hover:shadow-electric-blue/5"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:bg-electric-blue transition-colors">
                                    <span className="text-xl font-black">0{i + 1}</span>
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light text-base">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-40 px-6 relative overflow-hidden border-t border-black/5">
                <div className="absolute inset-0 bg-white z-0" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-5" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-12"
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">
                            Ready to <br /> <span className="text-electric-blue italic font-light">Dominate?</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="magnetic w-full md:w-auto px-12 py-6 bg-black text-white rounded-full font-black uppercase tracking-widest hover:bg-electric-blue transition-all text-sm shadow-xl"
                            >
                                Book a Discovery Call
                            </Link>
                            <Link
                                href="/work"
                                className="magnetic w-full md:w-auto px-12 py-6 border border-black/10 text-black rounded-full font-black uppercase tracking-widest hover:border-black transition-all text-sm"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
