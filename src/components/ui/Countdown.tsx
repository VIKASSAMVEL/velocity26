"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const Countdown = ({ targetDate }: { targetDate: string }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();
        return () => clearInterval(timer);
    }, [targetDate]);

    if (!mounted || !timeLeft) return null;

    return (
        <div className="flex gap-4 md:gap-8 justify-center items-center">
            {Object.entries(timeLeft).map(([label, value]) => (
                <motion.div key={label} className="text-center">
                    <div className="text-4xl md:text-6xl font-black font-mono tracking-tighter">
                        {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                        {label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
