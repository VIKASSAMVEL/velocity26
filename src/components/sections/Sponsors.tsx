"use client";

import { motion } from "framer-motion";

const sponsorTiers = [
    { name: "Title Sponsor", status: "Coming Soon", color: "border-primary text-primary" },
    { name: "Platinum Partner", status: "Coming Soon", color: "border-secondary text-secondary" },
    { name: "Gold Sponsor", status: "Open", color: "border-white/20 text-white" },
    { name: "Silver Sponsor", status: "Open", color: "border-white/20 text-white" }
];

export const Sponsors = () => {
    return (
        <section className="py-24 px-4 overflow-hidden bg-black relative">
            <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <div className="bg-secondary text-black inline-block px-3 py-1 font-display uppercase tracking-[0.3em] text-xl mb-6 transform -skew-x-12">
                            04 // Alliances
                        </div>
                        <h2 className="text-6xl md:text-8xl font-display uppercase text-white">MULTIVERSAL <br />BACKERS</h2>
                    </div>
                    <button className="comic-panel px-8 py-4 bg-primary text-black font-display uppercase text-2xl tracking-widest transition-transform hover:scale-105 active:scale-95 !border-none">
                        Join the Network
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {sponsorTiers.map((tier, idx) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring" }}
                            className={`aspect-square flex flex-col items-center justify-center comic-panel bg-black/50 group hover:bg-white transition-colors cursor-pointer ${tier.color} !bg-opacity-100 hover:!border-white`}
                        >
                            <div className="font-display uppercase tracking-widest text-xl mb-2 group-hover:text-black transition-colors text-center px-2">
                                {tier.name}
                            </div>
                            <div className="font-sans font-black text-sm uppercase tracking-widest text-white/40 group-hover:text-black/60 transition-colors">
                                {tier.status}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute -right-40 bottom-20 w-96 h-96 bg-primary rounded-full blur-[200px] opacity-10 pointer-events-none" />
        </section>
    );
};
