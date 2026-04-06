"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const workReels = [
  { id: 1, src: "/work/Video-111.mp4", link: "https://www.instagram.com/p/DSXgbalCtTP/" },
  { id: 2, src: "/work/Video-227.mp4", link: "https://www.instagram.com/p/DKJ4AkAP53a/" },
  { id: 3, src: "/work/Video-280.mp4", link: "https://www.instagram.com/p/DP811sFkUQv/" },
  { id: 4, src: "/work/Video-285.mp4", link: "https://www.instagram.com/p/DTwjUYGCsy4/" },
  { id: 5, src: "/work/Video-557.mp4", link: "https://www.instagram.com/p/DQ68-ajASsh/" },
  { id: 6, src: "/work/Video-684.mp4", link: "https://www.instagram.com/p/DEINtPdTdt9/" },
  { id: 7, src: "/work/Video-840.mp4", link: "https://www.instagram.com/p/C0gv8kZtJNx/" },
  { id: 8, src: "/work/Video-85.mp4", link: "https://www.instagram.com/p/DTus38vjMx_/" },
];

const WorkCard = ({ reel, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="group relative h-full flex flex-col"
  >
    <a 
      href={reel.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 cursor-link"
    >
      <video
        src={reel.src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
      />
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Play Icon Suggestion */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
          <Play className="text-white fill-white w-6 h-6 ml-1" />
        </div>
      </div>
    </a>
  </motion.div>
);

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* Hero / Header */}
      <section className="pt-32 md:pt-40 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-blue-600" />
            <span className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Our Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] mb-8"
          >
            The <br />
            <span className="text-gray-400 font-light italic">Impact</span> <br />
            Report.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-neutral-500 max-w-xl font-medium"
          >
            A curated selection of our most impactful content pieces. 
            Blending high-end cinematography with social-first storytelling.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {workReels.map((reel, index) => (
              <WorkCard key={reel.id} reel={reel} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Floating CTA (Optional/Aesthetic) */}
      <section className="py-24 px-6 relative overflow-hidden bg-white border-t border-zinc-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to <br />
            <span className="text-blue-600">Lead the conversation?</span>
          </h2>
          <button className="px-10 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
            Let's Collaborate
          </button>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .font-mono {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
        .cursor-link {
          cursor: pointer;
        }
      `}</style>
    </main>
  );
}
