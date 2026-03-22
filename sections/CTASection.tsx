'use client'
import { motion } from "motion/react";

export default function CTASection() {
    return (
        <motion.div
            id="download"
            className="max-w-5xl py-16 mt-40 md:pl-20 md:w-full max-md:mx-4 md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left bg-linear-to-b from-[#000050] to-[#00002a] rounded-2xl p-6 text-white"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <div>
                <motion.h1
                    className="text-4xl mb-3 md:text-[46px] md:leading-15 font-semibold bg-linear-to-r from-white to-[#6666ff] text-transparent bg-clip-text"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Prêt à piloter votre boutique ?
                </motion.h1>
                <motion.p
                    className="bg-linear-to-r from-white to-[#6666ff] text-transparent bg-clip-text text-lg"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                >
                    Téléchargez Djeli et commencez gratuitement dès aujourd&apos;hui.
                </motion.p>
            </div>
            <motion.div
                className="flex flex-col sm:flex-row gap-3 mt-4"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <a
                    href="#!"
                    className="flex items-center gap-3 bg-white hover:bg-slate-100 transition text-[#7a18ea] font-semibold rounded-full px-6 py-3 text-sm whitespace-nowrap"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
                    </svg>
                    App Store
                </a>
                <a
                    href="#!"
                    className="flex items-center gap-3 bg-[#7a18ea]/80 hover:bg-[#7a18ea] transition border border-white/20 text-white font-semibold rounded-full px-6 py-3 text-sm whitespace-nowrap"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.18 23.76c.3.17.65.19.96.04l12.35-6.94-2.56-2.58zM.59 1.18C.22 1.56 0 2.15 0 2.9v18.2c0 .75.22 1.34.6 1.71l.09.08 10.2-10.2v-.24zM20.46 10.4l-2.74-1.54-2.87 2.87 2.87 2.87 2.76-1.55c.79-.44.79-1.16-.02-1.65M4.14.22 16.49 7.16l-2.56 2.57z" />
                    </svg>
                    Play Store
                </a>
            </motion.div>
        </motion.div>
    );
}
