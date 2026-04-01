"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { name: 'About', href: '/about' },
    {
        name: 'Work',
        href: '#',
        dropdown: [
            { name: 'Showreel', href: '/showreel' },
            { name: 'Client Work', href: '/work' }
        ]
    },
    {
        name: 'Services',
        href: '/services',
        // dropdown: [
        //     { name: 'Film & Photography', href: '/services/film-photography' },
        //     { name: 'Social Media Management', href: '/services/social-media-management' },
        //     { name: 'Graphic Design', href: '/services/graphic-design' },
        //     { name: 'Performance Management', href: '/services/performance-management' },
        //     { name: 'Web Development', href: '/services/web-development' }
        // ]
    },
    {
        name: 'Universe',
        href: '#',
        dropdown: [
            { name: 'BTS', href: '/bts' },
            {
                name: 'Talent Management',
                href: '#',
                subDropdown: [
                    { name: 'Creator/Influencer', href: '#' },
                    { name: 'Actor', href: '#' },
                    { name: 'UGC', href: '/ugc' }
                ]
            }
        ]
    },
    {
        name: 'Contact',
        href: '/#contact',
    }
];

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileAccordion, setActiveMobileAccordion] = useState(null);
    const [activeMobileSubAccordion, setActiveMobileSubAccordion] = useState(null);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-xl border-b border-black/5 h-20 md:h-24"
            >
                {/* Logo Section */}
                <div className="relative w-32 md:w-48 h-full flex items-center z-[110]">
                    <Link href="/" className="magnetic absolute left-0 top-1/2 -translate-y-1/2 block group w-[140px] md:w-[280px]">
                        <Image
                            src="/logo (1).png"
                            alt="Tinted Media Logo"
                            width={600}
                            height={200}
                            className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Links (Absolutely Centered) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
                    {navLinks.map((item) => (
                        <div
                            key={item.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={`relative text-[10px] uppercase tracking-[0.4em] font-bold transition-colors flex items-center gap-1 py-10 ${activeDropdown === item.name ? 'text-black' : 'text-gray-500 hover:text-black'
                                    }`}
                            >
                                {item.name}
                                {item.dropdown && (
                                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                )}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all duration-300 group-hover:w-full"
                                />
                            </Link>

                            <AnimatePresence>
                                {item.dropdown && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-black/5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl p-2"
                                    >
                                        <div className="flex flex-col gap-1">
                                            {item.dropdown.map((subItem) => (
                                                <div
                                                    key={subItem.name}
                                                    className="relative"
                                                    onMouseEnter={() => subItem.subDropdown && setActiveSubDropdown(subItem.name)}
                                                    onMouseLeave={() => subItem.subDropdown && setActiveSubDropdown(null)}
                                                    onClick={() => subItem.subDropdown && setActiveSubDropdown(activeSubDropdown === subItem.name ? null : subItem.name)}
                                                >
                                                    {subItem.subDropdown ? (
                                                        <div className="px-4 py-3 rounded-xl hover:bg-gray-50 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-electric-blue transition-all flex items-center justify-between cursor-pointer">
                                                            {subItem.name}
                                                            <ChevronRight className="w-3 h-3" />
                                                        </div>
                                                    ) : (
                                                        <Link
                                                            href={subItem.href}
                                                            className="px-4 py-3 rounded-xl hover:bg-gray-50 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-electric-blue transition-all block"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    )}

                                                    <AnimatePresence>
                                                        {subItem.subDropdown && activeSubDropdown === subItem.name && (
                                                            <motion.div
                                                                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                                                className="absolute top-0 left-full ml-1 w-48 bg-white border border-black/5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl p-2 z-[120]"
                                                            >
                                                                <div className="flex flex-col gap-1">
                                                                    {subItem.subDropdown.map((nestedItem) => (
                                                                        <Link
                                                                            key={nestedItem.name}
                                                                            href={nestedItem.href}
                                                                            className="px-4 py-3 rounded-xl hover:bg-gray-50 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-electric-blue transition-all"
                                                                        >
                                                                            {nestedItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 z-[110]">
                    <Link
                        href="/#contact"
                        className="magnetic hidden lg:block group relative px-8 py-2.5 bg-black text-white text-xs font-black uppercase tracking-widest rounded-full overflow-hidden transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                    >
                        <span className="relative z-10">Enquire</span>
                        <div className="absolute inset-0 bg-electric-blue transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="magnetic p-3 lg:hidden rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[90] lg:hidden bg-white"
                    >
                        <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
                            <div className="flex flex-col py-4">
                                {navLinks.map((item) => (
                                    <div key={item.name} className="border-b border-black/5 last:border-0">
                                        {item.dropdown ? (
                                            <div className="py-4">
                                                <button
                                                    onClick={() => setActiveMobileAccordion(activeMobileAccordion === item.name ? null : item.name)}
                                                    className="w-full flex justify-between items-center group"
                                                >
                                                    <span className={`text-2xl font-black uppercase tracking-tighter transition-colors ${activeMobileAccordion === item.name ? 'text-electric-blue' : 'text-black'}`}>
                                                        {item.name}
                                                    </span>
                                                    <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${activeMobileAccordion === item.name ? 'rotate-180 text-electric-blue' : 'text-gray-300'}`} />
                                                </button>

                                                <AnimatePresence>
                                                    {activeMobileAccordion === item.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="flex flex-col gap-3 pt-4 pl-4 border-l border-electric-blue/20 mb-2">
                                                                {item.dropdown.map((subItem) => (
                                                                    <div key={subItem.name}>
                                                                        {subItem.subDropdown ? (
                                                                            <div className="py-2">
                                                                                <button
                                                                                    onClick={() => setActiveMobileSubAccordion(activeMobileSubAccordion === subItem.name ? null : subItem.name)}
                                                                                    className="w-full flex justify-between items-center group"
                                                                                >
                                                                                    <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeMobileSubAccordion === subItem.name ? 'text-electric-blue' : 'text-gray-500 hover:text-black'}`}>
                                                                                        {subItem.name}
                                                                                    </span>
                                                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileSubAccordion === subItem.name ? 'rotate-180' : ''}`} />
                                                                                </button>
                                                                                <AnimatePresence>
                                                                                    {activeMobileSubAccordion === subItem.name && (
                                                                                        <motion.div
                                                                                            initial={{ height: 0, opacity: 0 }}
                                                                                            animate={{ height: 'auto', opacity: 1 }}
                                                                                            exit={{ height: 0, opacity: 0 }}
                                                                                            className="overflow-hidden mt-2"
                                                                                        >
                                                                                            <div className="flex flex-col gap-3 pl-4 border-l border-electric-blue/10">
                                                                                                {subItem.subDropdown.map((nestedItem) => (
                                                                                                    <Link
                                                                                                        key={nestedItem.name}
                                                                                                        href={nestedItem.href}
                                                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                                                        className="text-[11px] font-bold uppercase tracking-widest text-gray-400 py-1"
                                                                                                    >
                                                                                                        {nestedItem.name}
                                                                                                    </Link>
                                                                                                ))}
                                                                                            </div>
                                                                                        </motion.div>
                                                                                    )}
                                                                                </AnimatePresence>
                                                                            </div>
                                                                        ) : (
                                                                            <Link
                                                                                href={subItem.href}
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                                className="flex items-center justify-between py-2 group"
                                                                            >
                                                                                <span className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">
                                                                                    {subItem.name}
                                                                                </span>
                                                                                <ArrowRight className="w-4 h-4 text-electric-blue opacity-50" />
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-4"
                                            >
                                                <span className="text-2xl font-black uppercase tracking-tighter text-black hover:text-electric-blue transition-colors">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto space-y-4 pt-10">
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400">Collaboration</p>
                                    <a
                                        href="mailto:collab@tintedmedia.com"
                                        className="text-lg font-light text-black hover:text-electric-blue transition-colors"
                                    >
                                        collab@tintedmedia.com
                                    </a>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400">Interview</p>
                                    <a
                                        href="mailto:join@tintedmedia.com"
                                        className="text-lg font-light text-black hover:text-electric-blue transition-colors"
                                    >
                                        join@tintedmedia.com
                                    </a>
                                </div>
                                <Link
                                    href="/#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full bg-black text-white text-center py-5 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-electric-blue transition-colors shadow-lg"
                                >
                                    Start a Project
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
