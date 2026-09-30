import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Suppression de compte — Djeli",
    description:
        "Demandez la suppression de votre compte Djeli et des données associées. Découvrez les étapes, les données supprimées et les délais.",
    keywords: ["supprimer compte Djeli", "suppression compte", "suppression données", "Eso-dev données"],
    alternates: {
        canonical: "https://sites.djeli.pro/suppression-compte",
    },
    openGraph: {
        url: "https://sites.djeli.pro/suppression-compte",
        title: "Suppression de compte — Djeli",
        description: "Comment demander la suppression de votre compte Djeli et de vos données.",
    },
    robots: {
        index: true,
        follow: false,
    },
};

const CONTACT_EMAIL = "contact@djeli.pro";
const WHATSAPP_NUMBER = "2250575132586";

const emailSubject = "Demande de suppression de compte Djeli";
const emailBody = [
    "Bonjour,",
    "",
    "Je souhaite la suppression de mon compte Djeli et des données associées.",
    "",
    "Numéro de téléphone du compte : ",
    "Nom de la boutique : ",
    "",
    "Merci.",
].join("\n");

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour, je souhaite la suppression de mon compte Djeli. Numéro du compte : "
)}`;

const steps = [
    {
        title: "Envoyez votre demande",
        content: "Par email ou WhatsApp, depuis le numéro de téléphone ou l'adresse e-mail associés à votre compte Djeli.",
    },
    {
        title: "Indiquez votre compte",
        content: "Précisez le numéro de téléphone du compte et le nom de votre boutique pour que nous puissions l'identifier.",
    },
    {
        title: "Confirmation d'identité",
        content: "Nous vous contactons pour confirmer que la demande vient bien du titulaire du compte.",
    },
    {
        title: "Suppression",
        content: "Votre compte est supprimé dans un délai de 30 jours et vous recevez une confirmation.",
    },
];

const sections = [
    {
        title: "Données supprimées",
        content: `À la suppression de votre compte, nous effaçons :\n\n<br/>• Vos informations de compte : nom, prénom, e-mail, numéro de téléphone, mot de passe\n<br/>• Les informations de vos boutiques\n<br/>• Vos produits, stocks, catégories, clients et fournisseurs\n<br/>• Vos conversations avec Djeli IA\n<br/>• Vos jetons de notification et identifiants d'appareil`,
    },
    {
        title: "Données conservées",
        content: `Certaines données sont conservées pour respecter nos obligations légales :\n\n<strong>• Données commerciales et financières</strong> (ventes, achats, transactions) : jusqu'à 10 ans, conformément aux obligations comptables ivoiriennes. Elles ne sont plus accessibles depuis l'application et ne sont utilisées qu'en cas d'obligation légale.\n<strong>• Journaux de connexion :</strong> jusqu'à 12 mois, à des fins de sécurité.\n<strong>• Sauvegardes :</strong> les données peuvent subsister jusqu'à 90 jours supplémentaires dans nos sauvegardes sécurisées avant leur effacement définitif.`,
    },
    {
        title: "Délais",
        content: `Votre compte est supprimé dans un délai de <strong>30 jours</strong> après confirmation de votre identité. La suppression est définitive : vous ne pourrez pas récupérer vos données ensuite.\n\nSi vous souhaitez conserver une copie de vos données, demandez-la dans le même message (droit à la portabilité) : nous vous l'enverrons avant la suppression.`,
    },
];

export default function SuppressionComptePage() {
    return (
        <main className="min-h-screen px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-24">
            <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7a18ea]/15 text-[#ccccff] text-sm mb-8">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
                    </svg>
                    Application Djeli — éditée par Eso-dev
                </div>

                <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                    Suppression de{" "}
                    <span className="move-gradient px-2 rounded-xl">compte</span>
                </h1>

                <p className="text-slate-400 text-base leading-relaxed mb-10">
                    Vous pouvez demander à tout moment la suppression de votre compte <strong className="text-slate-200">Djeli</strong> et des données associées. Cette page explique comment faire, quelles données sont supprimées ou conservées, et dans quels délais.
                </p>

                {/* Demande */}
                <div className="p-6 rounded-xl border border-[#7a18ea]/20 bg-[#7a18ea]/5 mb-12">
                    <h2 className="text-lg font-medium mb-2">Demander la suppression</h2>
                    <p className="text-slate-400 text-sm mb-5">
                        Écrivez-nous depuis le numéro ou l'e-mail de votre compte, en précisant le numéro de téléphone du compte et le nom de votre boutique.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a href={mailtoHref} className="inline-flex items-center gap-2 text-sm text-white bg-[#7a18ea] hover:bg-[#6512c7] px-5 py-2.5 rounded-full transition">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                            </svg>
                            Demander par email
                        </a>
                        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#7a18ea] bg-[#7a18ea]/10 hover:bg-[#7a18ea]/20 px-5 py-2.5 rounded-full transition">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                            </svg>
                            Demander sur WhatsApp
                        </a>
                    </div>
                    <p className="text-slate-500 text-xs mt-4">{CONTACT_EMAIL} · +225 05 75 13 25 86</p>
                </div>

                {/* Étapes */}
                <h2 className="text-xl font-medium mb-5">Comment ça se passe</h2>
                <ol className="space-y-3 mb-12">
                    {steps.map((step, index) => (
                        <li key={index} className="flex gap-4 p-5 border border-slate-800 rounded-xl bg-[#00001a]/40">
                            <span className="flex items-center justify-center shrink-0 size-7 rounded-full bg-[#7a18ea]/15 text-[#ccccff] text-sm font-medium">
                                {index + 1}
                            </span>
                            <div>
                                <p className="font-medium text-slate-200 mb-1">{step.title}</p>
                                <p className="text-sm text-slate-400 leading-relaxed">{step.content}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Détails */}
                <div className="space-y-3">
                    {sections.map((section, index) => (
                        <details key={index} className="group border border-slate-800 rounded-xl overflow-hidden bg-[#00001a]/40 open:border-[#7a18ea]/30 open:bg-[#00002a]/60 transition-all" open>
                            <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none hover:bg-white/[0.02] transition">
                                <span className="font-medium text-slate-200">{section.title}</span>
                                <svg className="size-4 text-slate-500 group-open:rotate-180 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6"/>
                                </svg>
                            </summary>
                            <div className="px-5 pb-5 border-t border-slate-800/60">
                                <p className="text-sm text-slate-400 leading-relaxed pt-4 whitespace-pre-line"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        </details>
                    ))}
                </div>

                <p className="text-center text-slate-500 text-sm mt-10">
                    Pour en savoir plus sur le traitement de vos données, consultez notre{" "}
                    <a href="/confidentialite" className="text-[#7a18ea] hover:underline">politique de confidentialité</a>.
                </p>

                <p className="text-center text-slate-600 text-xs mt-6">© {new Date().getFullYear()} Eso-dev — Djeli · Abidjan Cocody, Angré, Côte d'Ivoire</p>
            </div>
        </main>
    );
}
