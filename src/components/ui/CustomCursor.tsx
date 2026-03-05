"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Track fired webs
    const [webs, setWebs] = useState<Array<{ id: number, x: number, y: number, cx: number, cy: number }>>([]);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = (e: MouseEvent) => {
            setIsClicking(true);

            // Play Thwip Audio
            const thwip = new Audio("/audio/thwip.mp3");
            thwip.currentTime = 0;
            thwip.play().catch(err => console.log("Audio play blocked", err));

            const newWeb = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                cx: mousePosition.x, // Origin of the hand when clicked
                cy: mousePosition.y
            };
            setWebs(prev => [...prev, newWeb]);

            // Remove web after 1.5 seconds
            setTimeout(() => {
                setWebs(prev => prev.filter(w => w.id !== newWeb.id));
            }, 1000);
        };

        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('button, a, input, select, textarea, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mousePosition]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {/* Hanging Spider-Man from top right */}
            <div className="absolute top-0 right-10 md:right-32 w-24 md:w-32 h-64 origin-top animate-swing opacity-100 z-[110]">
                <img src="/images/spider-hanging.png" alt="Hanging Spider-Man" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,0,51,0.6)]" />
            </div>

            {/* Fired Webs Container */}
            <svg className="absolute inset-0 w-full h-full z-10">
                <AnimatePresence>
                    {webs.map(web => (
                        <motion.line
                            key={`line-${web.id}`}
                            initial={{ pathLength: 0, opacity: 1 }}
                            animate={{ pathLength: 1, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            x1={mousePosition.x}
                            y1={mousePosition.y}
                            x2={web.x}
                            y2={web.y}
                            stroke="#00E5FF" // Web Cyan
                            strokeWidth="2"
                            strokeDasharray="6 3"
                            className="drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                        />
                    ))}
                </AnimatePresence>
                <AnimatePresence>
                    {webs.map(web => (
                        <motion.circle
                            key={`splat-${web.id}`}
                            initial={{ scale: 0, opacity: 1, strokeWidth: 4 }}
                            animate={{ scale: 1.5, opacity: 0, strokeWidth: 0 }}
                            transition={{ duration: 0.5 }}
                            cx={web.x}
                            cy={web.y}
                            r="20"
                            fill="transparent"
                            stroke="#00E5FF"
                            className="drop-shadow-[0_0_12px_rgba(0,229,255,1)]"
                        />
                    ))}
                </AnimatePresence>
            </svg>

            {/* The Mouse Cursor (Hand) */}
            <motion.div
                className="absolute top-0 left-0 will-change-transform z-[150]"
                style={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 10,
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.2 : 1,
                        rotate: isHovering ? -10 : 0,
                        y: isClicking ? 10 : 0 // slight jerk down on click
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <img src="/images/spider-hand.png" alt="Spider Hand" width={50} height={50} className={`drop-shadow-[0_0_10px_rgba(255,0,51,0.6)] object-contain ${isClicking ? 'opacity-80' : 'opacity-100'}`} />

                    {/* Web burst overlay from the hand center when clicking */}
                    {isClicking && (
                        <motion.svg width="50" height="50" viewBox="0 0 50 50" className="absolute top-0 left-0 drop-shadow-[0_0_12px_rgba(0,229,255,1)]">
                            <motion.circle initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} cx="25" cy="15" r="4" fill="#00E5FF" stroke="none" />
                        </motion.svg>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};
