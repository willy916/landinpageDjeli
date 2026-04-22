import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://sites.djeli.pro"),

    title: {
        default: "Djeli — Pilotez votre boutique depuis votre mobile",
        template: "%s | Djeli",
    },
    description:
        "Djeli est l'application de gestion commerciale tout-en-un pour les commerçants d'Afrique de l'Ouest. Gérez vos ventes, stocks, trésorerie et finances depuis votre téléphone, 24h/24.",
    keywords: [
        "gestion boutique",
        "application commerçant",
        "gestion stock",
        "logiciel commerce",
        "Côte d'Ivoire",
        "Afrique de l'Ouest",
        "Djeli",
        "gestion commerciale mobile",
        "caisse enregistreuse mobile",
        "gestion trésorerie",
        "Eso-dev",
        "application gestion Abidjan",
        "CEDEAO commerce",
    ],
    authors: [{ name: "Eso-dev", url: "https://sites.djeli.pro" }],
    creator: "Eso-dev",
    publisher: "Eso-dev",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://sites.djeli.pro",
        siteName: "Djeli",
        title: "Djeli — Pilotez votre boutique depuis votre mobile",
        description:
            "Application de gestion commerciale tout-en-un pour les commerçants et entrepreneurs d'Afrique de l'Ouest.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Djeli — Application de gestion commerciale pour l'Afrique",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Djeli — Pilotez votre boutique depuis votre mobile",
        description:
            "Application de gestion commerciale tout-en-un pour les commerçants et entrepreneurs d'Afrique de l'Ouest.",
        images: ["/og-image.jpg"],
    },

    alternates: {
        canonical: "https://sites.djeli.pro",
    },

    verification: {
        // Décommente et remplace une fois que tu as créé tes comptes :
        // google: "TON_CODE_GOOGLE_SEARCH_CONSOLE",
        // yandex: "TON_CODE_YANDEX",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
                <link rel="preload" href="/assets/background-splash.svg" as="image" />
            </head>
            <body>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}
