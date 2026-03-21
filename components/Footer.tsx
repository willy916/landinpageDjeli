'use client'
import { footerData } from "@/data/footer";
import { LinkedinIcon, YoutubeIcon, FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IFooterLink } from "@/types";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500">
            <motion.div className="flex flex-wrap items-start gap-10 md:gap-35"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <a href="#!">
                    <Image className="aspect-square" src="/assets/footer-logo.svg" alt="Djeli footer logo" width={80} height={80} priority />
                </a>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-100 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link: IFooterLink, index: number) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-[#3333cc] transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>
            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60">Chaque entrepreneur mérite des outils puissants, quelle que soit la taille de sa boutique.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="https://linkedin.com/in/waretrack-pro-17a502338" target="_blank" rel="noreferrer">
                        <LinkedinIcon className="size-5 hover:text-[#3333cc] transition" />
                    </a>
                    <a href="https://web.facebook.com/people/Waretrack/61568278002116/?sk=reviews" target="_blank" rel="noreferrer">
                        <FacebookIcon className="size-5 hover:text-[#3333cc] transition" />
                    </a>
                    <a href="https://www.youtube.com/@Waretrack?app=desktop" target="_blank" rel="noreferrer">
                        <YoutubeIcon className="size-6 hover:text-[#3333cc] transition" />
                    </a>
                </div>
                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} Djeli — Tous droits réservés</p>
            </motion.div>
        </footer>
    );
}
