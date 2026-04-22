import { IFooter } from "@/types";

export const footerData: IFooter[] = [
    {
        title: "Application",
        links: [
            { name: "Accueil", href: "/"},
            { name: "Fonctionnalités", href: "/#features" },
            { name: "Tarifs", href: "/#pricing" },
            { name: "Télécharger", href: "/#download" },
        ]
    },
    {
        title: "Ressources",
        links: [
            { name: "À propos", href: "/a-propos" },
        ]
    },
    {
        title: "Légal",
        links: [
            { name: "Confidentialité", href: "/confidentialite" },
            { name: "Conditions d'utilisation", href: "/conditions" },
        ]
    }
];
