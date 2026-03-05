"use client";

import { motion } from "framer-motion";

export const About = () => {
    return (
        <section className="py-32 px-4 relative bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <div className="bg-primary text-black inline-block px-3 py-1 font-display uppercase tracking-[0.3em] text-xl mb-6 transform -skew-x-12">
                        01 // The Vision
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] mb-8 text-white">
                        ENTER <br />
                        <span className="text-secondary glitch-text" data-text="EARTH-42">EARTH-42</span>
                    </h2>
                    <div className="comic-panel p-6 bg-white/5 !border-l-4 !border-l-primary !border-t-0 !border-r-0 !border-b-0">
                        <p className="text-white/80 text-lg md:text-xl font-sans font-bold leading-relaxed uppercase">
                            VELOCITY &apos;26 is the multiversal nexus for elite coders. Organized by the collaboration of CSE Department and IEEE, we aim to push the boundaries of innovation in 24 hours of pure creation. Expect anomalies.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-square flex items-center justify-center group overflow-hidden comic-panel bg-primary mix-blend-screen"
                >
                    <div className="absolute inset-0 halftone-bg opacity-30" />
                    <div className="text-[250px] font-display text-black select-none transition-transform duration-700 group-hover:scale-110 leading-none tracking-tighter mix-blend-overlay">
                        V26
                    </div>
                    <div className="absolute bottom-6 right-6 text-black bg-white px-4 py-2 font-display text-2xl uppercase tracking-widest transform -skew-x-12">
                        Inaugural Edition
                    </div>
                </motion.div>
            </div>

            {/* Spray paint deco */}
            <div className="absolute -left-40 top-20 w-96 h-96 bg-accent rounded-full blur-[150px] opacity-20 pointer-events-none" />
        </section>
    );
};
