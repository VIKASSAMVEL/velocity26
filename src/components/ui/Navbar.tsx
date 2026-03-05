"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, AlertTriangle } from "lucide-react";

export const Navbar = () => {
    const [prowlerMode, setProwlerMode] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio("/audio/sunflower.mp3");
        audioRef.current.loop = true;
    }, []);

    const toggleProwlerMode = () => {
        setProwlerMode(!prowlerMode);
        document.documentElement.classList.toggle("prowler-mode");
    };

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            // Provide a catch for browsers blocking autoplay
            audioRef.current.play().catch(e => console.log("Audio play blocked by browser."));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] w-full border-b-2 border-primary bg-black/80 backdrop-blur-md"
        >
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <div className="font-display text-2xl md:text-3xl tracking-widest uppercase flex items-center gap-2">
                    <span className="glitch-text" data-text="VELOCITY">VELO<span className="text-primary">CITY</span></span>

                    {prowlerMode && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-secondary flex items-center ml-2 border border-secondary px-2 text-xs blinking-warn"
                        >
                            <AlertTriangle size={14} className="mr-1" /> ANOMALY DETECTED
                        </motion.span>
                    )}
                </div>

                <div className="hidden md:flex gap-8 text-sm items-center font-display uppercase tracking-widest text-white/60">
                    <a href="#" className="hover:text-secondary transition-colors hover:scale-110">About</a>
                    <a href="#" className="hover:text-secondary transition-colors hover:scale-110">Dimensions</a>
                    <a href="#" className="hover:text-secondary transition-colors hover:scale-110">Canon Events</a>

                    <button
                        onClick={toggleProwlerMode}
                        className={`transition-colors hover:scale-110 ${prowlerMode ? 'text-secondary font-bold' : 'hover:text-secondary'}`}
                    >
                        {prowlerMode ? 'DISABLE PROWLER' : 'PROWLER MODE'}
                    </button>

                    <button onClick={toggleMusic} className="hover:text-secondary transition-colors hover:scale-110 flex items-center gap-1">
                        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />} BGM
                    </button>
                </div>

                <button className="bg-primary text-black text-xs md:text-sm font-display uppercase px-4 md:px-6 py-2 comic-panel !border-none hover:bg-white hover:text-black transition-all">
                    Join Society
                </button>
            </div>
            <style jsx>{`
                .blinking-warn {
                    animation: blink 1s infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </motion.nav>
    );
};
