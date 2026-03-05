"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
    return (
        <section className="py-32 px-4 relative overflow-hidden bg-black halftone-bg-cyan">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                    <div className="bg-white text-black inline-block px-3 py-1 font-display uppercase tracking-[0.3em] text-xl mb-6 transform -skew-x-12">
                        07 // Signal
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display uppercase text-white mb-12">
                        SEND A <br />
                        <span className="text-primary glitch-text" data-text="SIGNAL.">SIGNAL.</span>
                    </h2>

                    <div className="space-y-10">
                        <div className="group cursor-pointer comic-panel p-6 bg-black hover:bg-primary transition-colors">
                            <div className="font-display uppercase tracking-[0.2em] text-white/50 text-xl mb-2 group-hover:text-black/70">Secure Comm Link</div>
                            <div className="text-3xl sm:text-4xl font-display text-white group-hover:text-black transition-colors">HELLO@VELOCITY26.TECH</div>
                        </div>

                        <div className="group cursor-pointer comic-panel p-6 bg-black hover:bg-secondary transition-colors">
                            <div className="font-display uppercase tracking-[0.2em] text-white/50 text-xl mb-2 group-hover:text-black/70">Emergency Frequency</div>
                            <div className="text-3xl sm:text-4xl font-display text-white group-hover:text-black transition-colors">+91 98765 43210</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-end lg:items-end">
                    <div className="font-display uppercase tracking-[0.3em] text-secondary text-2xl mb-6 bg-black px-4 py-2 border-2 border-secondary">
                        Track The Frequency
                    </div>
                    <div className="flex gap-6">
                        {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.1, rotate: 10, y: -10 }}
                                className="w-16 h-16 flex items-center justify-center comic-panel bg-black hover:bg-white text-white hover:text-black transition-colors group"
                            >
                                <Icon size={28} className="group-hover:scale-110 transition-transform" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
