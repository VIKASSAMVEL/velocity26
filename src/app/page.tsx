"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tracks } from "@/components/sections/Tracks";
import { Timeline } from "@/components/sections/Timeline";
import { PrizePool } from "@/components/sections/PrizePool";
import { Sponsors } from "@/components/sections/Sponsors";
import { WhyParticipate } from "@/components/sections/WhyParticipate";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black overflow-x-hidden selection:bg-primary selection:text-black">
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Tracks />
            <Timeline />
            <PrizePool />
            <WhyParticipate />
            <Sponsors />
            <FAQ />
            <Contact />

            {/* Quick Footer */}
            <footer className="py-20 border-t border-white/5 text-center">
                <div className="text-[10vw] font-black text-white/5 select-none leading-none mb-8">
                    VELOCITY &apos;26
                </div>
                <p className="text-white/20 text-xs tracking-widest uppercase mb-12">
                    Designed for Excellence • Powered by CSE + IEEE
                </p>
                <div className="flex gap-8 justify-center items-center text-white/40 text-[10px] font-bold tracking-widest uppercase">
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                </div>
            </footer>
        </main>
    );
}
