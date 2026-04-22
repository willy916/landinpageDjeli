import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos — Eso-dev & l'équipe Djeli",
    description:
        "Découvrez Eso-dev, la startup ivoirienne derrière Djeli, et les 3 co-fondateurs qui ont bâti l'application de gestion commerciale pour l'Afrique de l'Ouest.",
    keywords: [
        "Eso-dev",
        "fondateurs Djeli",
        "startup ivoirienne",
        "Abidjan tech",
        "équipe Djeli",
        "Narcisse Adingra",
        "Wilfried Ouattara",
        "Eric Tohé",
    ],
    alternates: {
        canonical: "https://sites.djeli.pro/a-propos",
    },
    openGraph: {
        url: "https://sites.djeli.pro/a-propos",
        title: "À propos — Eso-dev & l'équipe Djeli",
        description:
            "Découvrez Eso-dev, la startup ivoirienne derrière Djeli, et les 3 co-fondateurs qui ont bâti l'application.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "L'équipe Eso-dev, créateurs de Djeli",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "À propos — Eso-dev & l'équipe Djeli",
        description:
            "Découvrez Eso-dev, la startup ivoirienne derrière Djeli, et les 3 co-fondateurs.",
        images: ["/og-image.jpg"],
    },
};

// Photos placées dans /public/img/
// founder-1.jpg, founder-2.jpg, founder-3.jpg
const founders = [
    {
        name: "Narcisse Adingra",
        role: "CTO & Co-fondateur",
        photo: "/img/narcisse.jpg",
    },
    {
        name: "Wilfried Ouattara",
        role: "CEO & Co-fondateur",
        photo: "/img/willy.jpg",
    },
    {
        name: "Eric Tohé",
        role: "Co-fondateur",
        photo: "/img/eric.jpg",
    },
];

const stats = [
    { value: "2023", label: "Année de création" },
    { value: "3", label: "Co-fondateurs" },
    { value: "3", label: "Plans d'abonnement" },
    { value: "CI", label: "Côte d'Ivoire" },
];

const values = [
    {
        title: "Accessibilité",
        description:
            "Rendre les outils de gestion professionnelle accessibles à chaque commerçant, quelle que soit la taille de sa boutique.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
    {
        title: "Innovation locale",
        description:
            "Concevoir des solutions technologiques pensées pour les réalités du marché africain, avec une profonde compréhension du terrain.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.8-3.5 6.3V17H8.5v-1.7C6.5 13.8 5 11.5 5 9a7 7 0 0 1 7-7z" />
            </svg>
        ),
    },
    {
        title: "Confiance",
        description:
            "Protéger les données et les finances de nos utilisateurs avec le plus haut niveau de sécurité et de transparence.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-28 pb-24">

            {/* Hero */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 text-center max-w-4xl mx-auto mb-24">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7a18ea]/15 text-[#ccccff] text-sm mb-8">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    L&apos;équipe derrière Djeli
                </div>

                <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                    Construire l&apos;avenir du{" "}
                    <span className="move-gradient px-2 rounded-xl">commerce africain</span>
                </h1>

                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Djeli est né d&apos;un constat simple : en Afrique, les outils de gestion sont souvent coûteux et peu
                    adaptés. Notre mission est de rendre la gestion simple, accessible et efficace pour chaque commerçant
                </p>
            </section>

            {/* Stats */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center p-6 rounded-xl border border-slate-800 bg-[#00001a]/40">
                            <p className="text-3xl font-semibold text-white mb-1">{stat.value}</p>
                            <p className="text-xs text-slate-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Eso-dev */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 mb-24">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-xs font-medium text-[#7a18ea] tracking-widest uppercase mb-4">La structure</div>
                        <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">Eso-dev</h2>
                        <p className="text-slate-400 leading-relaxed mb-5">
                            <strong className="text-slate-200">Eso-dev</strong> est une startup technologique ivoirienne fondée
                            à Abidjan. Notre mission est de développer des solutions digitales innovantes adaptées aux besoins
                            spécifiques des entreprises africaines.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-5">
                            Djeli est notre produit phare — une application mobile de gestion commerciale conçue pour les
                            commerçants et petites entreprises de Côte d&apos;Ivoire et de l&apos;espace CEDEAO.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Basés à <strong className="text-slate-200">Abidjan Cocody, Angré</strong>, nous croyons
                            profondément que la technologie peut transformer le quotidien des entrepreneurs africains.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {values.map((value, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-xl border border-slate-800 bg-[#00001a]/40">
                                <div className="text-[#7a18ea] shrink-0 mt-0.5">{value.icon}</div>
                                <div>
                                    <h3 className="font-medium text-slate-200 mb-1">{value.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 mb-24">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="text-xs font-medium text-[#7a18ea] tracking-widest uppercase mb-4">
                            L&apos;équipe fondatrice
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium">Les 3 co-fondateurs</h2>
                        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
                            Trois entrepreneurs passionnés réunis autour d&apos;une même vision : révolutionner la gestion
                            commerciale en Afrique de l&apos;Ouest.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-2xl mx-auto">
                        {founders.map((founder, i) => (
                            <div key={i} className="text-center group">
                                <div className="relative mx-auto mb-4 size-36 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-[#7a18ea]/50 transition-colors duration-300">
                                    <Image
                                        src={founder.photo}
                                        alt={`${founder.name} — ${founder.role} de Djeli`}
                                        fill
                                        sizes="144px"
                                        className="object-cover object-center"
                                    />
                                </div>
                                <p className="font-medium text-slate-200">{founder.name}</p>
                                <p className="text-sm text-slate-500 mt-0.5">{founder.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-2xl mx-auto text-center p-10 rounded-2xl border border-[#7a18ea]/20 bg-[#7a18ea]/5">
                    <h2 className="text-2xl font-medium mb-4">Vous avez des questions ?</h2>
                    <p className="text-slate-400 mb-6">Nous sommes disponibles pour répondre à toutes vos demandes.</p>
                    <a
                        href="https://wa.me/2250575132586"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full px-7 h-11 transition text-sm font-medium"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                        </svg>
                        Contactez-nous sur WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}
