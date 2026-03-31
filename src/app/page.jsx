'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import AboutSection from "@/components/AboutSection";
import ContentGrid from "@/components/ContentGrid";
import ClientGrid from "@/components/ClientGrid";
import StatsSection from "@/components/StatsSection";
import Showreel from "@/components/Showreel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { motion } from "framer-motion";
import SlantedVideoScroll from "@/components/Reels";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#05070a] selection:bg-electric-blue selection:text-white relative">
      <Preloader />
      <Navbar />

      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />


      {/* NEW: Stats Section for immediate proof of impact */}

      {/* NEW: Full Screen Cinematic Showreel */}
      <Showreel />

      <AboutSection />

      {/* BTS & UGC with premium background */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden bg-white">
        {/* Cinematic Background Orbs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-purple/5 blur-[150px] rounded-full pointer-events-none z-0" />

        {/* Drifting Background Text */}
        <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none z-0">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="text-[6rem] font-black uppercase whitespace-nowrap text-black"
          >
            ORIGINALS // UNFILTERED // AUTHENTIC // BEYOND //
          </motion.div>
        </div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto mb-8">
          <h3 className="text-electric-blue font-mono text-[11px] tracking-[0.4em] uppercase mb-4">Originals</h3>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-[#05070a]">
            Content <br />
            <span className="text-gray-400 italic font-light">Universe</span>
          </h2>
        </div>
        <ContentGrid />
      </section>

      {/* NEW: Futuristic Client Grid */}
      <ClientGrid />

      {/* Video Carousel Section with sticky social text */}
      
        {/* <VideoCarousel /> */}
        <SlantedVideoScroll/>

      {/* NEW: Bold Contact Section */}
      <ContactForm />

      <Footer />
    </main>
  );
}
