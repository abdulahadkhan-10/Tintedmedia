"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Smartphone, Smile, Clock, Heart, Sparkles } from "lucide-react";

const categories = [
    {
        id: "brand",
        title: "brand",
        color: "#1a5d48", // Dark Green
        textColor: "text-white",
        items: ["Brand Strategy", "360° Creative", "Art Direction", "Copywriting", "Editing", "Motion Graphics", "DTP"],
        icon: <Camera className="w-12 h-12 text-black" />,
        stickerBg: "bg-gray-200",
        rotation: -4,
        href: "/services/graphic-design",
        zIndex: 10
    },
    {
        id: "social",
        title: "social",
        color: "#7fa7ff", // Light Blue
        textColor: "text-black",
        items: ["Social Media Strat", "Social Media Crea", "TikTok/Social Sh", "Influencer Camp", "Scheduling Sup", "Community Ma", "Social Listening"],
        icon: <Smartphone className="w-10 h-10 text-red-500" />,
        stickerBg: "bg-white",
        rotation: 2,
        href: "/services/social-media-management",
        zIndex: 20
    },
    {
        id: "activations",
        title: "activations",
        color: "#ff824d", // Orange
        textColor: "text-black",
        items: ["Activation Strategy", "Event Planning", "Art Direction", "Production"],
        icon: <Smile className="w-12 h-12 text-blue-500" />,
        stickerBg: "bg-blue-100",
        rotation: -2,
        href: "/services/performance-management",
        zIndex: 30
    },
    {
        id: "video",
        title: "video production",
        color: "#a3364d", // Berry/Marsala
        textColor: "text-white",
        items: ["Campaign video", "Branded content", "Social content", "Marketing material"],
        icon: <Clock className="w-10 h-10 text-orange-500" />,
        stickerBg: "bg-yellow-100",
        rotation: 3,
        href: "/services/film-photography",
        zIndex: 40
    },
    {
        id: "partners",
        title: "with partners",
        color: "#e6adff", // Light Purple/Lilac
        textColor: "text-black",
        items: ["PR/Journalism", "3D / VFX", "food styling", "Photography"],
        icon: <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />,
        stickerBg: "bg-white",
        rotation: -3,
        href: "/services/web-development",
        zIndex: 50
    }
];

const Sticker = ({ children, className, rotation = 0 }) => (
    <motion.div
        initial={{ scale: 0, rotate: rotation - 20 }}
        animate={{ scale: 1, rotate: rotation }}
        whileHover={{ scale: 1.1, rotate: rotation + 5 }}
        className={`absolute -top-8 -right-4 p-3 rounded-2xl shadow-lg z-20 ${className}`}
        style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.1))" }}
    >
        {children}
    </motion.div>
);

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#fcf8f3] text-black">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-16 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-0 text-center">
                        <span className="leading-none">call us</span>
                        <span className="text-gray-400 font-light leading-none">if you</span>
                        <span className="font-instrument italic font-normal lowercase relative inline-block">
                            need:
                            <motion.div
                                className="absolute -bottom-2 left-0 w-full h-[2px] bg-black/20 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 1 }}
                            />
                        </span>
                    </h1>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="px-6 pb-32 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 items-start pt-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 50, rotate: 0 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0, 
                                rotate: category.rotation,
                                transition: { delay: index * 0.1, duration: 0.6 }
                            }}
                            whileHover={{ 
                                y: -30, 
                                rotate: 0, 
                                zIndex: 60,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className={`relative group cursor-pointer lg:-ml-8 first:ml-0`}
                            style={{ zIndex: category.zIndex }}
                        >
                            <Link href={category.href}>
                                <div 
                                    className={`relative p-8 rounded-[2.5rem] min-h-[450px] flex flex-col shadow-2xl transition-all duration-500`}
                                    style={{ backgroundColor: category.color }}
                                >
                                    {/* Sticker */}
                                    <Sticker className={category.stickerBg} rotation={category.rotation * 2}>
                                        {category.icon}
                                    </Sticker>

                                    <div className={`mt-4 ${category.textColor}`}>
                                        <h2 className="text-4xl font-black uppercase leading-none tracking-tighter mb-8 break-words">
                                            {category.title}
                                        </h2>
                                        
                                        <div className="w-12 h-[1px] bg-current opacity-30 mb-8" />

                                        <ul className="space-y-3">
                                            {category.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 group/item">
                                                    <Sparkles className="w-3 h-3 mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                                                    <span className="text-sm font-bold uppercase tracking-wider opacity-80 group-hover/item:opacity-100">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Bottom Decorative Element */}
                                    <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className={`w-12 h-12 rounded-full border-2 border-current flex items-center justify-center ${category.textColor}`}>
                                            <Sparkles className="w-6 h-6 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-black text-white text-center rounded-t-[4rem]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                        Got a vision? <br />
                        <span className="text-electric-blue italic font-light">Let's make it real.</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all transform hover:scale-105"
                    >
                        Start a Project
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
