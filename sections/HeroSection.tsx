'use client'
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import TiltedImage from "@/components/TiltImage";
import { motion } from "motion/react";

const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
    const specialFeatures = [
        "Votre téléphone, votre caisse",
        "Zéro vol, zéro perte",
        "Gérez de partout, 24h/24",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-[#0000ff] blur-[300px]"></div>
            <motion.a
                href="#ai-section"
                className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-[#ccccff] bg-[#7a18ea]/15"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-[#000060] text-white text-xs px-3.5 py-1 rounded-full">
                    NOUVEAU
                </span>
                <p className="flex items-center gap-1">
                    <span>Djeli IA</span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>

            <motion.h1
                className="text-5xl/17 md:text-6xl/21 font-medium max-w-2xl text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Pilotez votre boutique depuis{" "}
                <span className="move-gradient px-3 rounded-xl text-nowrap">votre mobile</span>
            </motion.h1>

            <motion.p
                className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Djeli centralise ventes, stocks, employés et comptabilité en une seule app. fini les outils coûteux et les pertes.
            </motion.p>

            <motion.div
                className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <button
                    onClick={scrollToDownload}
                    className="flex items-center gap-2 bg-[#7a18ea] hover:bg-[#000068] text-white rounded-full px-7 h-11 transition"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
                    </svg>
                    App Store
                </button>
                <button
                    onClick={scrollToDownload}
                    className="flex items-center gap-2 border border-[#000060] hover:bg-[#000040]/50 transition rounded-full px-6 h-11"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.18 23.76c.3.17.65.19.96.04l12.35-6.94-2.56-2.58zM.59 1.18C.22 1.56 0 2.15 0 2.9v18.2c0 .75.22 1.34.6 1.71l.09.08 10.2-10.2v-.24zM20.46 10.4l-2.74-1.54-2.87 2.87 2.87 2.87 2.76-1.55c.79-.44.79-1.16-.02-1.65M4.14.22 16.49 7.16l-2.56 2.57z" />
                    </svg>
                    Play Store
                </button>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
                {specialFeatures.map((feature, index) => (
                    <motion.p
                        className="flex items-center gap-2"
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        <CheckIcon className="size-5 text-[#3333cc]" />
                        <span className="text-slate-300 font-medium">{feature}</span>
                    </motion.p>
                ))}
            </div>
            <TiltedImage />
        </div>
    );
}
