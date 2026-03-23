import { IPricing } from "@/types";

export const pricingData: IPricing[] = [
    {
        name: "Free",
        price: 0,
        period: "mois",
        features: [
            "1 boutique",
            "Espace de vente",
            "10 produits maximum",
            "15 messages/mois avec Djeli IA",
            "Analyse financière par l'IA",
            "Espace caisse",
            "Clients illimités",
            "5 approvisionnements",
            "Fournisseurs illimités",
        ],
        mostPopular: false
    },
    {
        name: "Premium",
        price: 5000,
        period: "mois",
        features: [
            "3 boutiques",
            "Espace de vente",
            "Produits illimités",
            "15 messages/jour avec Djeli IA",
            "Analyse financière par l'IA",
            "Espace caisse",
            "Clients illimités",
            "Approvisionnements illimités",
            "Fournisseurs illimités",
            "Utilisateurs illimités",
            "Historique des mouvements",
            "Rapports",
        ],
        mostPopular: true
    },
    {
        name: "Pro",
        price: 10000,
        period: "mois",
        features: [
            "10 boutiques",
            "Espace de vente",
            "Produits illimités",
            "50 messages/jour avec Djeli IA",
            "Analyse financière par l'IA",
            "Espace caisse",
            "Clients illimités",
            "Approvisionnements illimités",
            "Fournisseurs illimités",
            "Utilisateurs illimités",
            "Historique des mouvements",
            "Rapports",
            "Espace comptabilité",
            "États financiers",
        ],
        mostPopular: false
    }
];
