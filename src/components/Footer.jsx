"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Twitter, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-100 pt-32 pb-10 px-6 relative overflow-hidden">
            {/* Massive Background Text */}
            <div className="absolute left-1/2 -translate-x-1/2 text-[10vw] font-black text-black/[0.02] tracking-tighter select-none pointer-events-none uppercase">
                Tinted Media
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20 relative z-10">
                {/* Brand Column */}
                <div className="space-y-8 -mt-10">
                    <Image
                        src="/logo (1).png"
                        alt="Tinted Media Logo"
                        width={1000}
                        height={400}
                        className="h-24 md:h-48 w-auto object-contain opacity-100 relative -left-8 lg:-left-12"
                    />
                    <p className="text-gray-500 font-medium text-xl tracking-tight leading-relaxed">Your vision, perfectly tinted.</p>
                    <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-[0.9] uppercase mt-12 pt-8 border-t border-black/5 w-fit">
                        Start <br /> <span className="gradient-text italic">Something.</span>
                    </h2>
                </div>

                {/* Useful Links Column */}
                <div className="flex flex-col gap-8 lg:pt-12 lg:items-center">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-black font-black uppercase tracking-tighter text-xl">Useful Links</h3>
                        <div className="flex flex-col gap-4">
                            <Link href="/about" className="text-xl text-gray-500 hover:text-electric-blue transition-colors font-medium w-fit">About</Link>
                            <Link href="/services" className="text-xl text-gray-500 hover:text-electric-blue transition-colors font-medium w-fit">Services</Link>
                            <Link href="/#contact" className="text-xl text-gray-500 hover:text-electric-blue transition-colors font-medium w-fit">Contact</Link>
                        </div>
                    </div>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col gap-8 lg:pt-12 lg:items-end">
                    <div className="flex flex-col gap-6 w-full max-w-xs">
                        <h3 className="text-black font-black uppercase tracking-tighter text-xl">Contact</h3>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 text-gray-500 group">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-xl font-medium">Mumbai</span>
                            </div>
                            <a href="mailto:Sadaf@tintedmedia.co" className="flex items-center gap-4 text-gray-500 hover:text-electric-blue transition-all group">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-black/5 group-hover:bg-electric-blue group-hover:text-white transition-all">
                                    <Mail size={18} />
                                </div>
                                <span className="text-xl font-medium">Sadaf@tintedmedia.co</span>
                            </a>
                            <a href="tel:+919930502525" className="flex items-center gap-4 text-gray-500 hover:text-green-600 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-black/5 group-hover:bg-green-600 group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </div>
                                <span className="text-xl font-medium">+91 9930502525</span>
                            </a>
                        </div>

                        <div className="pt-8 flex gap-4">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/tintedmedia.co?igsh=MjFpbGRtbHVsc2Qz" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/tinted-media-co/?originalSubdomain=in" }
                            ].map((item, i) => (
                                <Link key={i} href={item.href} className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all text-black">
                                    <item.Icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 border-t border-black/5 pt-10 relative z-10">
                <p>&copy; 2026 Tinted Media. All rights reserved.</p>
                <div className="flex gap-10 mt-6 md:mt-0">
                </div>
            </div>
        </footer>
    );
}
