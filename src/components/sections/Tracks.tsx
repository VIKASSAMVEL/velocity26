"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Shield, Leaf } from "lucide-react";

const tracks = [
    {
        title: "Dimension AI",
        icon: <Cpu className="w-12 h-12 text-black" />,
        description: "Intelligent systems across the multiverse. Solve anomalies through data science.",
        color: "bg-primary text-black"
    },
    {
        title: "Dimension WEB",
        icon: <Globe className="w-12 h-12 text-black" />,
        description: "Building the decentralized web of the future. Connect the dimensions.",
        color: "bg-secondary text-black"
    },
    {
        title: "Dimension SEC",
        icon: <Shield className="w-12 h-12 text-white" />,
        description: "Securing the digital frontier against multiversal threats and vulnerabilities.",
        color: "bg-accent text-white"
    },
    {
        title: "Dimension ECO",
        icon: <Leaf className="w-12 h-12 text-white" />,
        description: "Creating tech solutions for climate change and a sustainable Earth-42.",
        color: "bg-black text-white border-2 border-white"
    }
];

export const Tracks = () => {
    return (
        <section className="py-24 px-4 relative bg-black halftone-bg overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <div className="text-secondary font-display uppercase tracking-[0.3em] text-xl mb-4 bg-black inline-block px-2">
                        02 // Multiverse
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display uppercase glitch-text" data-text="DIMENSIONS">DIMENSIONS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tracks.map((track, idx) => (
                        <motion.div
                            key={track.title}
                            initial={{ opacity: 0, y: 50, rotate: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                            className={`comic-panel p-8 ${track.color} cursor-pointer min-h-[300px] flex flex-col justify-between`}
                        >
                            <div className="mb-6 mix-blend-difference">{track.icon}</div>
                            <div>
                                <h3 className="text-4xl font-display mb-2 uppercase">
                                    {track.title}
                                </h3>
                                <p className="font-sans font-bold text-sm leading-relaxed opacity-90 uppercase">
                                    {track.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full h-full flex justify-center items-center">
                <Globe className="w-[800px] h-[800px] text-primary animate-pulse" />
            </div>
        </section>
    );
};
