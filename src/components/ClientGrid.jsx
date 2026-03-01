"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
    { name: "Dot & Key", src: "/sponsers/Dot-_-Key-Logo.webp" },
    { name: "Renee", src: "/sponsers/Renee logo .webp" },
    { name: "Vodafone", src: "/sponsers/Vodafone logo .png" },
    { name: "Davines", src: "/sponsers/davines logo .png" },
    { name: "Nivea", src: "/sponsers/nivea logo .png" },
    { name: "Oppo", src: "/sponsers/oppo logo .png" },
    { name: "Palmonas", src: "/sponsers/palmonas logo .webp" },
    { name: "Plix", src: "/sponsers/plix logo .png" },
    { name: "Vaaree", src: "/sponsers/vaaree logo .png" },
];

export default function ClientGrid() {
    return (
        <section className="py-20 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-electric-blue font-mono text-[12px] tracking-[0.4em] uppercase mb-4">Integrations</h3>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
                        Global <span className="text-gray-400 italic font-light">Network</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 border-t border-l border-black/5">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="h-40 border-r border-b border-black/5 flex items-center justify-center group relative overflow-hidden p-8"
                        >
                            <div className="absolute inset-0 bg-black/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <Image
                                src={client.src}
                                alt={client.name}
                                fill
                                className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-10 p-8"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
