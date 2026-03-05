"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText, Users, Globe, Award } from "lucide-react";

const benefits = [
    { title: "Internship Ops", icon: <Briefcase size={32} /> },
    { title: "Resume Review", icon: <FileText size={32} /> },
    { title: "Networking", icon: <Users size={32} /> },
    { title: "Exposure", icon: <Globe size={32} /> },
    { title: "IEEE Recognition", icon: <Award size={32} /> }
];

export const WhyParticipate = () => {
    return (
        <section className="py-24 px-4 relative bg-primary">
            {/* Background Texture */}
            <div className="absolute inset-0 halftone-bg opacity-30 mix-blend-multiply pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 text-center">
                    <div className="bg-black text-white inline-block px-3 py-1 font-display uppercase tracking-[0.3em] text-xl mb-6 transform -skew-x-12">
                        05 // Upgrades
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display uppercase text-black italic">WHY JOIN THE SOCIETY?</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                            className="comic-panel px-8 py-6 bg-black text-white flex flex-col items-center gap-4 hover:bg-white hover:text-black transition-colors group cursor-pointer w-full sm:w-auto"
                        >
                            <span className="text-secondary group-hover:text-primary transition-colors group-hover:scale-125 transform duration-300">
                                {benefit.icon}
                            </span>
                            <span className="font-display uppercase text-2xl tracking-widest">
                                {benefit.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
