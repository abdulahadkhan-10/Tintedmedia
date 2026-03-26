"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import Image from "next/image";

export default function ContactForm() {
    return (
        <section
            id="contact"
            className="py-24 px-6 md:px-12 bg-[#F4F4F4] relative overflow-hidden min-h-screen flex flex-col items-center justify-center"
        >
            {/* ── BACKGROUND WIRE LAYERS ── */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 0.15, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-[5%] left-[-15%] md:left-[-3%] w-[600px] md:w-[1100px] h-[400px] md:h-[900px]"
                >
                    <Image src="/wireimage.png" alt="" fill className="object-contain object-left-top" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 0.15, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
                    className="absolute -bottom-16 right-[-20%] md:right-0 w-[100%] h-[200px] md:h-[380px]"
                >
                    <Image src="/wireimage.png" alt="" fill className="object-contain object-right-bottom" />
                </motion.div>
            </div>

            {/* ── MAIN CARD ── */}
            <div className="relative z-10 max-w-6xl w-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "circOut" }}
                    className="bg-white w-full rounded-[32px] md:rounded-[36px] shadow-[0_40px_120px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row"
                    style={{ minHeight: "560px" }}
                >
                    {/* ─────────────────────────────────────────
                        LEFT HALF — Full-bleed plug image only
                    ───────────────────────────────────────── */}
                    <div className="relative w-full lg:w-[45%] min-h-[250px] md:min-h-[360px] lg:min-h-full overflow-hidden bg-white">
                        <Image
                            src="/wireimage.png"
                            alt="Plug Wire"
                            fill
                            className="object-cover object-left-top"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                    </div>

                    {/* ─────────────────────────────────────────
                        RIGHT HALF — Title + Info strip + Form
                    ───────────────────────────────────────── */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-between px-6 md:px-14 py-10 md:py-12">

                        {/* Title & Introduction */}
                        <div className="mb-10 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111]">
                                Contact <span className="italic font-light text-gray-400">Us</span>
                            </h2>
                            <div className="mt-4 w-12 h-[3px] bg-blue-500 rounded-full mb-6 mx-auto md:mx-0" />
                            <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                                Ready to plug in? Send us a message and we'll get back to you soon.
                            </p>
                        </div>

                        {/* Updated Contact Info Sections */}
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-8 mb-10 text-center md:text-left justify-center md:justify-start">
                            <div className="flex-1">
                                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1.5">
                                    Collab
                                </h3>
                                <a href="mailto:collab@tintedmedia.com" className="text-[#111] font-bold text-lg hover:text-blue-500 transition-colors">
                                    collab@tintedmedia.com
                                </a>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1.5">
                                    Interview
                                </h3>
                                <a href="mailto:join@tintedmedia.com" className="text-[#111] font-bold text-lg hover:text-blue-500 transition-colors">
                                    join@tintedmedia.com
                                </a>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gray-100 mb-10" />

                        {/* Form */}
                        <form className="flex flex-col gap-6 flex-grow">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm focus:outline-none focus:border-gray-300 transition-all rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm focus:outline-none focus:border-gray-300 transition-all rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm focus:outline-none focus:border-gray-300 transition-all rounded-md"
                                />
                            </div>

                            <div className="flex-grow flex flex-col">
                                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full flex-grow bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm focus:outline-none focus:border-gray-300 transition-all resize-none rounded-md"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-6">
                                <p className="text-[10px] text-gray-400 italic">Response within 24 hours.</p>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-12 py-4 bg-[#a54238] text-white text-[10px] uppercase font-black tracking-[0.3em] hover:bg-[#111] shadow-[0_8px_30px_rgba(165,66,56,0.3)] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    Submit <Send size={13} />
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
