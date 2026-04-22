import ContactSection from "@/sections/ContactSection";
import CTASection from "@/sections/CTASection";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import PricingSection from "@/sections/PricingSection";
import TestimonialSection from "@/sections/TestimonialSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Djeli — Pilotez votre boutique depuis votre mobile",
    description:
        "Djeli est l'application de gestion commerciale tout-en-un pour les commerçants d'Afrique de l'Ouest. Gérez vos ventes, stocks, trésorerie et plusieurs boutiques depuis votre téléphone, 24h/24.",
    alternates: {
        canonical: "https://sites.djeli.pro",
    },
    openGraph: {
        url: "https://sites.djeli.pro",
        title: "Djeli — Pilotez votre boutique depuis votre mobile",
        description:
            "Application de gestion commerciale tout-en-un pour les commerçants d'Afrique de l'Ouest. Ventes, stocks, trésorerie, Djeli IA.",
    },
};

// ✅ Données structurées JSON-LD — boostent le référencement Google
const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eso-dev",
    url: "https://sites.djeli.pro",
    logo: "https://sites.djeli.pro/icon1.png",
    foundingDate: "2023",
    description:
        "Startup technologique ivoirienne, créatrice de Djeli, application de gestion commerciale pour les commerçants d'Afrique de l'Ouest.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Cocody, Angré",
        addressLocality: "Abidjan",
        addressCountry: "CI",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+225-05-75-13-25-86",
        contactType: "customer service",
        availableLanguage: ["French"],
    },
    sameAs: [],
};

const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Djeli",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    description:
        "Application mobile de gestion commerciale multi-boutiques : ventes, stocks, approvisionnements, trésorerie, finances et assistant IA.",
    url: "https://sites.djeli.pro",
    offers: [
        {
            "@type": "Offer",
            name: "Gratuit",
            price: "0",
            priceCurrency: "XOF",
        },
        {
            "@type": "Offer",
            name: "Pro",
            priceCurrency: "XOF",
        },
    ],
    publisher: {
        "@type": "Organization",
        name: "Eso-dev",
        url: "https://sites.djeli.pro",
    },
};

export default function Page() {
    return (
        <>
            {/* JSON-LD — invisible pour l'utilisateur, lu par Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
            />

            <HeroSection />
            <FeaturesSection />
            <TestimonialSection />
            <PricingSection />
            <ContactSection />
            <CTASection />
        </>
    );
}
