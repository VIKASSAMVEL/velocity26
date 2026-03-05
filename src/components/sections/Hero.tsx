"use client";

import { motion } from "framer-motion";
import { Countdown } from "@/components/ui/Countdown";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Spider-Verse Halftone Background */}
            <div className="absolute inset-0 z-0 opacity-40 halftone-bg pointer-events-none" />

            {/* Dynamic Web Strands (Simplified SVG representation) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden flex justify-center items-center">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="50%" y2="50%" stroke="var(--color-primary)" strokeWidth="2" opacity="0.5" />
                    <line x1="100%" y1="0" x2="50%" y2="50%" stroke="var(--color-secondary)" strokeWidth="2" opacity="0.5" />
                    <line x1="50%" y1="100%" x2="50%" y2="50%" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
                </svg>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                className="relative z-10 text-center px-4 w-full max-w-5xl"
            >
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="h-1 w-12 bg-primary transform -skew-x-12" />
                    <span className="text-secondary tracking-[0.3em] font-display uppercase text-sm md:text-lg">
                        Enter the Multiverse
                    </span>
                    <span className="h-1 w-12 bg-primary transform skew-x-12" />
                </div>

                <h1 className="text-[18vw] md:text-[12vw] leading-[0.85] font-display text-white uppercase select-none mb-2 glitch-text" data-text="VELOCITY">
                    <span className="text-primary relative inline-block">VEL</span>OCITY
                </h1>

                <div className="text-[12vw] md:text-[8vw] leading-[0.8] mb-8 flex items-center justify-center gap-4 font-display text-accent glitch-text" data-text="'26">
                    <span className="relative z-10">&apos;26</span>
                    {/* Spray paint effect behind '26 */}
                    <span className="absolute text-primary opacity-50 blur-md">&apos;26</span>
                </div>

                <p className="max-w-2xl mx-auto text-white/80 text-base md:text-xl font-sans uppercase font-bold tracking-widest mb-10 bg-black/50 p-4 border-l-4 border-secondary backdrop-blur-sm">
                    Swing Into Action. <span className="text-primary">|</span> Anomalies Welcome.
                    <br />
                    <span className="text-sm mt-3 block text-white/50">8–9 April 2026 • Earth-42 Campus</span>
                </p>

                <div className="mb-16">
                    <Countdown targetDate="2026-04-08T09:00:00" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="comic-panel px-10 py-5 bg-primary text-black font-display text-2xl uppercase tracking-widest !border-none hover:bg-white transition-colors"
                    >
                        Join Spider-Society
                    </motion.button>

                    <button className="comic-panel px-10 py-5 bg-transparent text-white font-display text-2xl uppercase tracking-widest border-2 border-secondary hover:bg-secondary hover:text-black transition-colors">
                        Scan Anomaly
                    </button>
                </div>
            </motion.div>

            {/* Side Decorative Text */}
            <div className="absolute bottom-20 left-10 hidden xl:block z-10">
                <div className="rotate-[-90deg] origin-left text-sm tracking-[0.5em] uppercase text-primary font-display">
                    [WARNING: MULTIVERSAL BREACH DETECTED]
                </div>
            </div>

            <div className="absolute top-40 right-10 hidden xl:block z-10">
                <div className="rotate-[90deg] origin-right text-sm tracking-[0.5em] uppercase text-secondary font-display">
                    Prowler Theme Active // 00:00:00
                </div>
            </div>
        </section>
    );
};
