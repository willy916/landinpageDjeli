'use client'
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { IFeature } from "@/types";

const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
};

const IconPhone = () => (
    <svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="20" height="32" rx="3" stroke="url(#ph1)" strokeWidth="1.5"/>
        <line x1="8" y1="29" x2="14" y2="29" stroke="url(#ph2)" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="5" y="6" width="12" height="18" rx="1.5" stroke="url(#ph3)" strokeWidth="1.2"/>
        <path d="M24 10 L29 10 M29 10 L27 8 M29 10 L27 12" stroke="url(#ph4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
            <linearGradient id="ph1" x1="11" y1="1" x2="11" y2="33" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="ph2" x1="8" y1="29" x2="14" y2="29" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="ph3" x1="11" y1="6" x2="11" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="ph4" x1="24" y1="10" x2="29" y2="10" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
        </defs>
    </svg>
);

const IconScan = () => (
    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10V4a3 3 0 0 1 3-3h6" stroke="url(#sc1)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 10V4a3 3 0 0 0-3-3h-6" stroke="url(#sc2)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1 24v6a3 3 0 0 0 3 3h6" stroke="url(#sc3)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 24v6a3 3 0 0 1-3 3h-6" stroke="url(#sc4)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="1" y1="17" x2="32" y2="17" stroke="url(#sc5)" strokeWidth="2" strokeLinecap="round"/>
        <rect x="7" y="8" width="4" height="10" rx="0.5" fill="url(#sc6)" opacity="0.6"/>
        <rect x="13" y="8" width="2" height="10" rx="0.5" fill="url(#sc6)" opacity="0.6"/>
        <rect x="17" y="8" width="5" height="10" rx="0.5" fill="url(#sc6)" opacity="0.6"/>
        <rect x="24" y="8" width="2" height="10" rx="0.5" fill="url(#sc6)" opacity="0.6"/>
        <defs>
            <linearGradient id="sc1" x1="1" y1="1" x2="10" y2="10" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="sc2" x1="23" y1="1" x2="32" y2="10" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="sc3" x1="1" y1="24" x2="10" y2="33" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="sc4" x1="23" y1="24" x2="32" y2="33" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="sc5" x1="1" y1="17" x2="32" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="sc6" x1="0" y1="0" x2="0" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
        </defs>
    </svg>
);

const IconReceipt = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1h22a2 2 0 0 1 2 2v28l-4-3-4 3-4-3-4 3-4-3-4 3V3a2 2 0 0 1 2-2z" stroke="url(#rc1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="10" y1="10" x2="24" y2="10" stroke="url(#rc2)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="15" x2="20" y2="15" stroke="url(#rc3)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="20" x2="24" y2="20" stroke="url(#rc4)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 26 L26 26 M26 26 L24 24 M26 26 L24 28" stroke="url(#rc5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
            <linearGradient id="rc1" x1="17" y1="1" x2="17" y2="33" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="rc2" x1="10" y1="10" x2="24" y2="10" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="rc3" x1="10" y1="15" x2="20" y2="15" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="rc4" x1="10" y1="20" x2="24" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
            <linearGradient id="rc5" x1="22" y1="26" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7a18ea"/><stop offset="1" stopColor="#3333cc"/>
            </linearGradient>
        </defs>
    </svg>
);

const featuresData: IFeature[] = [
    {
        icon: <IconPhone />,
        title: "Votre téléphone remplace l'ordinateur",
        description: "Plus besoin d'un ordinateur coûteux. Avec Djeli, gérez stocks, ventes, employés et rapports directement depuis votre poche.",
    },
    {
        icon: <IconScan />,
        title: "Scanner intégré, zéro machine",
        description: "Djeli remplace votre machine de scan. Scannez les codes-barres et enregistrez vos ventes instantanément, sans achat de matériel.",
    },
    {
        icon: <IconReceipt />,
        title: "Reçu numérique, partagé en un clic",
        description: "Plus besoin de machine à reçu. Visualisez et partagez le reçu de chaque vente par WhatsApp, SMS ou email en quelques secondes.",
    },
];

export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                text1="Fonctionnalités"
                text2="Ce que Djeli résout pour vous"
                text3="Moins de matériel, moins de coûts. Djeli remplace les outils physiques coûteux par votre smartphone."
            />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div
                        key={index}
                        className={`${index === 1 ? 'p-px rounded-[13px] bg-linear-to-br from-[#7a18ea] to-slate-800' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full">
                            {feature.icon}
                            <h3 className="text-base font-medium text-white">{feature.title}</h3>
                            <p className="text-slate-400 pb-4">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Showcase */}
            <div id="ai-section" className="mt-40 relative mx-auto max-w-5xl">
                <div className="absolute -z-50 size-100 -top-10 -left-20 aspect-square rounded-full bg-[#7a18ea]/40 blur-3xl"></div>
                <motion.p
                    className="text-slate-300 text-lg text-left max-w-3xl"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Djeli vous donne une visibilité totale sur toutes les entrées et sorties de votre activité, pour piloter avec précision et sans surprise.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    <motion.div
                        className="md:col-span-2"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        <Image className="w-auto" src="/assets/assise.jpg" alt="Djeli dashboard" width={1000} height={500} />
                    </motion.div>
                    <motion.div
                        className="md:col-span-1"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <Image src="/assets/features-showcase-2.png" alt="Djeli mobile app" width={1000} height={500} className="hover:-translate-y-0.5 transition duration-300" />
                        <h3 className="text-[24px]/7.5 text-slate-300 font-medium mt-6">Djeli IA — votre assistant financier personnel</h3>
                        <p className="text-slate-300 mt-2">Chattez avec Djeli IA, gérez vos finances et prenez les meilleures décisions pour votre boutique.</p>
                        <a href="#pricing" className="group flex items-center gap-2 mt-4 text-[#3333cc] hover:text-[#5555dd] transition">
                            Voir nos formules d'abonnement
                            <ArrowUpRight className="size-5 group-hover:translate-x-0.5 transition duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
