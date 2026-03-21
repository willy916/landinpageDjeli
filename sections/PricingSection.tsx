'use client'
import SectionTitle from "@/components/SectionTitle"
import { pricingData } from "@/data/pricing";
import { IPricing } from "@/types";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
};

const formatFCFA = (price: number) => {
    return price.toLocaleString('fr-FR');
};

export default function PricingSection() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle
                text1="Tarifs"
                text2="Nos formules d'abonnement"
                text3="Du lancement à la croissance — choisissez le plan adapté à votre activité."
            />

            <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                {pricingData.map((plan: IPricing, index: number) => (
                    <motion.div
                        key={index}
                        className={`w-72 text-center border border-[#000050] p-6 pb-10 rounded-xl ${plan.mostPopular ? 'bg-[#00002a] relative' : 'bg-[#00001a]/40'}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {plan.mostPopular && (
                            <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#7a18ea] text-white rounded-full">Le plus populaire</p>
                        )}
                        <p className="font-semibold text-lg">{plan.name}</p>
                        <h1 className="text-3xl font-semibold mt-1">
                            {plan.price === 0 ? 'Gratuit' : `${formatFCFA(plan.price)} FCFA`}
                            <span className="text-gray-500 font-normal text-sm">{plan.price > 0 ? `/${plan.period}` : ''}</span>
                        </h1>
                        {plan.price > 0 && (
                            <p className="text-xs text-slate-500 mt-1">
                                ou {formatFCFA(plan.price === 5000 ? 54000 : 108000)} FCFA/an
                                <span className="text-[#7a18ea] ml-1">
                                    (-{plan.price === 5000 ? '10' : '10'}%)
                                </span>
                            </p>
                        )}
                        <ul className="list-none text-slate-300 mt-6 space-y-2 text-left">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <CheckIcon className="size-4.5 shrink-0 text-[#3333cc]" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            onClick={scrollToDownload}
                            className={`w-full py-2.5 rounded-md font-medium mt-7 transition-all ${plan.mostPopular ? 'bg-white text-[#7a18ea] hover:bg-slate-200' : 'bg-[#7a18ea] hover:bg-[#0000a0] text-white'}`}
                        >
                            Commencer
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
