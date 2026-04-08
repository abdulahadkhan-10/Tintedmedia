'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BTSPage() {
    return (
        <main className="min-h-screen bg-white text-black selection:bg-electric-blue selection:text-white font-sans">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-0 px-6 max-w-7xl mx-auto text-left flex flex-col items-start">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 w-full text-left">
                    <div className="space-y-4 flex flex-col items-start">
                        <span className="w-fit px-4 py-1 border border-electric-blue text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em] rounded-full">Exclusive // Access</span>
                        <h1 className="text-4xl md:text-7xl font-black mt-5 uppercase tracking-tighter leading-[0.85] text-left">
                            Behind <br />
                            <span className="text-electric-blue italic font-light">The Scenes.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Story Section */}
            <section className="px-6 pb-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center text-left">
                <div className="space-y-8 flex flex-col items-start">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
                        Where the real <br /> magic happens.
                    </h2>
                    <div className="space-y-6 text-base md:text-lg text-gray-600 font-light leading-relaxed">
                        <p>
                            BTS by Tinted captures the raw, unfiltered energy of celebrity and ad model shoots.
                            While the spotlight is on the final frame, we focus on the moments in between — the direction, the laughter, the glam, the chaos, and the craft that bring a production to life.
                        </p>
                        <p>
                            From high-profile celebrity campaigns to premium brand shoots, we document exclusive behind-the-scenes content that builds anticipation, boosts engagement, and adds authenticity to your brand story.
                        </p>
                        <blockquote className="border-l-4 border-electric-blue pl-8 py-4 text-xl font-black italic text-black">
                            "What happens off-camera is just as powerful as what makes the cut."
                        </blockquote>
                    </div>
                </div>
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl">
                    <Image
                        src="/bts.png"
                        alt="BTS Production"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>


            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em] mb-4">The Archive // REELS</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">BTS <span className="text-gray-400 italic font-light">Footage.</span></h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { src: "/bts/AQMXfnLdpF2tCxuUsGECQqDzS6SpYOCynQ6Cc5nkIuJ08CKSuZqfHGgk34hrJnqY7Cd5bShZUC3zQCTIrKfKzl9TYY_wfhP3MKvpVpM.mp4", link: "https://www.instagram.com/reel/DOBjKdLkpQm/?igsh=c20yem1nbmZnZGE0" },
                        { src: "/bts/AQPa0kLUvUPVRbBWdIUmqGI7CNb-zmqg8Puh8b8cc-TC3CB6zZsEUZm6WEgvcjHsIxWzRj1XToIlhUa3Xh6nJZPF-6B6q_wCdbiY4GM.mp4", link: "https://www.instagram.com/reel/DPN8RVKiMnt/?igsh=YW02cmxuMDh1a3hh" },
                        { src: "/bts/BTS for @tanghavri - @malaikaaroraofficial 🔥.mp4", link: "https://www.instagram.com/reel/DOBizHOEhls/?igsh=NXN3MHkybmRoOTdi" },
                        { src: "/bts/The second screenplay.. the one that runs parallel to the reel ft @khushikapoor @tanghavri.mp4", link: "https://www.instagram.com/reel/DOvC2tdiDEK/?igsh=aTdvZnBqZjVlNnNl" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-xl group cursor-pointer"
                        >
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
