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

    const isVerticalBanner = true;

    return (
        <main className="min-h-screen bg-white text-black selection:bg-electric-blue selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section
                className={`relative overflow-hidden flex flex-col bg-white mt-20 md:mt-24 ${isVerticalBanner
                    ? 'h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)]'
                    : 'px-6 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] justify-center'
                    }`}
            >
                <div className={`mx-auto w-full h-full relative z-10 ${isVerticalBanner ? 'max-w-none' : 'max-w-7xl'}`}>
                    <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch h-full ${isVerticalBanner ? 'gap-0' : 'gap-12 items-center'}`}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`${isVerticalBanner
                                ? 'lg:col-span-6 px-8 md:px-16 lg:px-12 flex flex-col justify-center py-10 lg:py-16'
                                : 'lg:col-span-7'
                                }`}
                        >
                            <h3 className="text-electric-blue font-mono text-sm tracking-[0.5em] uppercase mb-8">
                                Service // {slug.replace(/-/g, ' ')}
                            </h3>
                            <h1 className={`font-black uppercase leading-[0.85] tracking-tighter mb-8 ${isVerticalBanner
                                ? 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
                                : 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
                                }`}>
                                {data.title} <br />
                                <span className={`text-gray-300 italic font-light block mt-2 break-words ${isVerticalBanner ? 'text-4xl md:text-5xl lg:text-6xl' : ''
                                    }`}>
                                    {data.subtitle}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-xl font-light leading-relaxed mb-10">
                                {data.description}
                            </p>

                            <Link
                                href="/contact"
                                className="magnetic inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-electric-blue transition-all w-fit"
                            >
                                Start a Project <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`${isVerticalBanner
                                ? 'lg:col-span-6 relative order-first lg:order-last h-[50vh] lg:h-full'
                                : 'lg:col-span-5 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl'
                                }`}
                        >
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className={`${isVerticalBanner
                                    ? 'object-cover object-right-top'
                                    : 'object-cover'
                                    }`}
                                priority
                            />
                            {!isVerticalBanner && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>





            <Footer />
        </main>
    );
}
