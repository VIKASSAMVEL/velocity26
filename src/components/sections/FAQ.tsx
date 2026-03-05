"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { q: "What is the team size?", a: "Squads must consist of 2-4 anomalies." },
    { q: "Is there a registration fee?", a: "The multiversal toll is ₹200 per team." },
    { q: "Will accommodation be provided?", a: "Yes, safehouses will be provided for outstation teams at the Earth-42 campus." },
    { q: "Who can participate?", a: "Any undergraduate student with a valid dimensional ID card." },
    { q: "What should we bring?", a: "Web-shooters (Laptops), chargers, and any hardware you need for your hack." }
];

export const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className="py-32 px-4 bg-black relative">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center">
                    <div className="bg-accent text-white inline-block px-3 py-1 font-display uppercase tracking-[0.3em] text-xl mb-6 transform -skew-x-12">
                        06 // Intel
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display uppercase text-white glitch-text" data-text="FAQ">FAQ</h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="comic-panel bg-black/50 overflow-hidden">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full flex justify-between items-center text-left p-6 sm:p-8 hover:bg-white/5 transition-colors"
                            >
                                <span className={`text-2xl sm:text-3xl font-display uppercase tracking-wider transition-colors pr-4 ${openIdx === idx ? 'text-secondary' : 'text-white'}`}>
                                    {faq.q}
                                </span>
                                <div className="p-2 border-2 border-primary bg-black shrink-0">
                                    {openIdx === idx ? <Minus className="text-primary" size={24} /> : <Plus className="text-primary" size={24} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="p-6 sm:p-8 pt-0 text-white/70 font-sans font-bold text-lg uppercase leading-relaxed border-t-2 border-white/10 mx-6 sm:mx-8 mt-2">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary rounded-full blur-[300px] opacity-5 pointer-events-none" />
        </section>
    );
};
