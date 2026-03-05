"use client";

import { motion } from "framer-motion";

export const PrizePool = () => {
    return (
        <section className="py-32 px-4 relative bg-black halftone-bg-cyan">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    className="relative inline-block w-full"
                >
                    <div className="text-black bg-secondary inline-block px-4 py-1 font-display uppercase tracking-[0.5em] text-xl mb-8 transform -skew-x-12">
                        Multiversal Bounties
                    </div>

                    <h2 className="text-[15vw] md:text-[12rem] font-display leading-[0.8] mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-secondary/30 drop-shadow-[0_0_20px_var(--color-secondary)]">
                        ₹65,000+
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl mx-auto">
                        <div className="comic-panel p-8 bg-black/80 hover:bg-black group">
                            <div className="text-primary font-display text-4xl mb-2 group-hover:scale-110 transition-transform">CREDITS</div>
                            <div className="text-white/60 text-sm uppercase tracking-widest font-sans font-bold">Top 3 Anomalies</div>
                        </div>
                        <div className="comic-panel p-8 bg-black/80 hover:bg-black group">
                            <div className="text-secondary font-display text-4xl mb-2 group-hover:scale-110 transition-transform">ARTIFACTS</div>
                            <div className="text-white/60 text-sm uppercase tracking-widest font-sans font-bold">Excellence Trophies</div>
                        </div>
                        <div className="comic-panel p-8 bg-black/80 hover:bg-black group">
                            <div className="text-accent font-display text-4xl mb-2 group-hover:scale-110 transition-transform">DATA LOGS</div>
                            <div className="text-white/60 text-sm uppercase tracking-widest font-sans font-bold">For All Dimensions</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Slanted Lines */}
            <div className="absolute top-1/2 left-0 w-full h-4 bg-primary -rotate-6 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-1/2 left-0 w-full h-8 bg-secondary rotate-6 pointer-events-none mix-blend-overlay" />
        </section>
    );
};
