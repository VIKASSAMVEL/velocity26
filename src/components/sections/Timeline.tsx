"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const events = [
    {
        phase: "Anomaly 1",
        title: "Idea Submission",
        description: "Submit your abstract and logic for the multiversal breach.",
        date: "March 15 - March 30"
    },
    {
        phase: "Anomaly 2",
        title: "Shortlisting",
        description: "60 elite anomalies isolated for innovation and feasibility.",
        date: "April 2"
    },
    {
        phase: "Anomaly 3",
        title: "24-Hour Finale",
        description: "Earth-42 campus. Build, ship, and defend against the judges.",
        date: "April 8 - April 9"
    }
];

import { useRef } from "react";

export const Timeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 px-4 relative overflow-hidden bg-black" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <div className="text-primary font-display uppercase tracking-[0.3em] text-xl mb-4 bg-primary/20 inline-block px-4 py-1">
                        03 // The Journey
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display uppercase">CANON EVENTS</h2>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Faint Background Strand */}
                    <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2" />

                    {/* Scroll-Driven Glowing Web Strand */}
                    <motion.div
                        className="absolute left-[24px] md:left-1/2 top-0 w-1 bg-white md:-translate-x-1/2 shadow-[0_0_10px_#fff]"
                        style={{ height: lineHeight }}
                    />

                    {events.map((event, idx) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Spider Node */}
                            <div className="absolute left-[16px] md:left-1/2 w-5 h-5 bg-primary rounded-full md:-translate-x-1/2 border-4 border-black z-10 shadow-[0_0_15px_var(--color-primary)]" />

                            <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                                <div className={`comic-panel p-6 ${idx % 2 === 0 ? "bg-accent/20" : "bg-secondary/20"} !border-white/20`} >
                                    <div className={`font-display text-xl mb-2 uppercase tracking-widest ${idx % 2 === 0 ? "text-accent" : "text-secondary"}`}>
                                        {event.phase} | {event.date}
                                    </div>
                                    <h3 className="text-3xl font-display mb-2 text-white uppercase">
                                        {event.title}
                                    </h3>
                                    <p className="text-white/70 font-sans font-bold text-sm uppercase">
                                        &quot;{event.description}&quot;
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        </section>
    );
};
