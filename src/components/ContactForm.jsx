"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";

// WEB3FORMS CONFIGURATION
// Go to web3forms.com and get your Access Key for Sadaf@tintedmedia.co
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function ContactForm() {
    const [purpose, setPurpose] = useState("collab"); // "collab" or "join"
    const [status, setStatus] = useState("idle"); // "idle", "loading", "success", "error"
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New ${purpose.toUpperCase()} Inquiry from ${formData.firstName}`,
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    ...formData,
                    inquiry_type: purpose.toUpperCase()
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="py-24 px-6 md:px-12 bg-[#F4F4F4] relative overflow-hidden min-h-screen flex flex-col items-center justify-center"
        >
            <div className="relative z-10 max-w-6xl w-full px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "circOut" }}
                    className="bg-white w-full rounded-[32px] md:rounded-[36px] shadow-[0_40px_120px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row"
                    style={{ minHeight: "600px" }}
                >
                    {/* LEFT HALF — Full-bleed plug image */}
                    <div className="relative w-full lg:w-[45%] min-h-[250px] md:min-h-[360px] lg:min-h-full overflow-hidden bg-white">
                        <Image
                            src="/contact us.png"
                            alt="Contact Illustration"
                            fill
                            className="object-cover object-left-top p-8 lg:p-0"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                    </div>

                    {/* RIGHT HALF — Form Content */}
                    <div className="w-full lg:w-[55%] flex flex-col px-6 md:px-14 py-10 md:py-12">
                        
                        <div className="mb-8 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#111]">
                                Contact <span className="italic font-light text-gray-400">Us</span>
                            </h2>
                            <div className="mt-4 w-12 h-[3px] bg-[#a54238] rounded-full mb-6 mx-auto md:mx-0" />
                            <p className="text-gray-500 text-base font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                                Have a project in mind? Reach out to <span className="text-[#111] font-bold">Sadaf@tintedmedia.co</span> below.
                            </p>
                        </div>

                        {/* PURPOSE SELECTOR (Interactive Toggles) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <button
                                type="button"
                                onClick={() => setPurpose("collab")}
                                className={`relative flex flex-col p-4 rounded-2xl border transition-all duration-300 text-left ${
                                    purpose === "collab" 
                                    ? "bg-[#a54238]/5 border-[#a54238] shadow-sm" 
                                    : "bg-gray-50 border-gray-100 hover:border-gray-200"
                                }`}
                            >
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] mb-1.5 ${
                                    purpose === "collab" ? "text-[#a54238]" : "text-gray-400"
                                }`}>
                                    Collaboration
                                </span>
                                <span className="text-[#111] font-bold text-sm">Business Inquiry</span>
                                {purpose === "collab" && (
                                    <motion.div layoutId="active-indicator" className="absolute top-3 right-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#a54238]" />
                                    </motion.div>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={() => setPurpose("join")}
                                className={`relative flex flex-col p-4 rounded-2xl border transition-all duration-300 text-left ${
                                    purpose === "join" 
                                    ? "bg-[#a54238]/5 border-[#a54238] shadow-sm" 
                                    : "bg-gray-50 border-gray-100 hover:border-gray-200"
                                }`}
                            >
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] mb-1.5 ${
                                    purpose === "join" ? "text-[#a54238]" : "text-gray-400"
                                }`}>
                                    Join The Team
                                </span>
                                <span className="text-[#111] font-bold text-sm">Hiring / Careers</span>
                                {purpose === "join" && (
                                    <motion.div layoutId="active-indicator" className="absolute top-3 right-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#a54238]" />
                                    </motion.div>
                                )}
                            </button>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center flex-grow py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="text-green-500" size={40} />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#111] mb-2">Message Sent!</h3>
                                    <p className="text-gray-500 font-medium">We'll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-5 flex-grow"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                                                First Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm focus:outline-none focus:border-[#a54238]/30 transition-all rounded-xl"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                                                Last Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm focus:outline-none focus:border-[#a54238]/30 transition-all rounded-xl"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                                            E-mail
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm focus:outline-none focus:border-[#a54238]/30 transition-all rounded-xl"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="flex-grow flex flex-col">
                                        <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows="4"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full flex-grow bg-gray-50 border border-gray-100 px-4 py-3 text-black text-sm focus:outline-none focus:border-[#a54238]/30 transition-all resize-none rounded-xl"
                                            placeholder="Tell us about your project or role..."
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="text-[11px] text-red-500 font-bold mb-2">Something went wrong. Please try again.</p>
                                    )}

                                    <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-6">
                                        <p className="text-[10px] text-gray-400 italic">Expected response: ~24hrs</p>
                                        <button
                                            disabled={status === "loading"}
                                            type="submit"
                                            className="w-full sm:w-auto px-12 py-4 bg-[#a54238] text-white text-[10px] uppercase font-black tracking-[0.3em] hover:bg-[#111] shadow-[0_8px_30px_rgba(165,66,56,0.3)] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
                                        >
                                            {status === "loading" ? (
                                                <><Loader2 className="animate-spin" size={13} /> Sending...</>
                                            ) : (
                                                <>Submit <Send size={13} /></>
                                            )}
                                        </button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
