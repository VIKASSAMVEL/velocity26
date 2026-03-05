import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas",
});

const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    variable: "--font-source",
});

export const metadata: Metadata = {
    title: "VELOCITY '26 | Code in Motion",
    description: "National-level Hackathon organized by CSE + IEEE. Innovation in Action.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${sourceSans.variable} ${bebasNeue.variable} font-sans overflow-x-hidden antialiased bg-black`}>
                {children}
            </body>
        </html>
    );
}
