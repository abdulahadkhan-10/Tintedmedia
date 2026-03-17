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

// Duplicate lists to create the seamless infinite scroll effect
const seamlessClients = [...clients, ...clients];
const seamlessClientsReversed = [...clients].reverse();
const seamlessClients2 = [...seamlessClientsReversed, ...seamlessClientsReversed];

const MarqueeRow = ({ items, reverse = false }) => {
    return (
        <div className="flex w-full overflow-hidden relative py-2">
            <motion.div
                className="flex w-max gap-4 md:gap-6 px-2 md:px-3"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 35, // Adjust this value to change scroll speed
                }}
            >
                {items.map((client, idx) => (
                    <div
                        key={idx}
                        className="relative w-40 h-28 md:w-64 md:h-36 bg-white rounded-[1.2rem] md:rounded-[1.5rem] shadow-sm border border-neutral-100 flex items-center justify-center p-6 md:p-8 shrink-0"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={client.src}
                                alt={client.name}
                                fill
                                loading="lazy"
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function ClientGrid() {
    return (
        <section className="py-32 bg-neutral-50 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-neutral-400 font-medium tracking-widest uppercase text-sm mb-4"
                >
                    Trusted by industry leaders
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-neutral-900"
                >
                    Global <span className="text-electric-blue font-light italic">Partners</span>
                </motion.h2>
            </div>

            <div className="relative flex flex-col gap-2 md:gap-4 w-full">
                {/* Gradient overlays to fade out the edges beautifully */}
                <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                >
                    <MarqueeRow items={seamlessClients} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                >
                    {/* The second row rolls in the opposite direction automatically */}
                    <MarqueeRow items={seamlessClients2} reverse={true} />
                </motion.div>
            </div>
        </section>
    );
}