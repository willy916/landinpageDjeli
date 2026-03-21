import { ITestimonial } from "@/types";

// Pour utiliser vos propres images, placez-les dans /public/img/
// puis référencez-les comme : image: '/img/nom-du-fichier.jpg'
// Les images sont affichées en cercle, bien centrées et non déformées.

export const testimonialsData: ITestimonial[] = [
    {
        image: '/img/temoi1.jpg',
        name: 'Amadou Diallo',
        handle: '@amadoudiallo',
        date: '14 janvier 2026',
        quote: 'Djeli a transformé la gestion de mes 3 boutiques. Je vois tout en temps réel depuis mon téléphone, même à distance !',
    },
    {
        image: '/img/temoi2.jpg',
        name: 'Mariama Bah',
        handle: '@mariamabah',
        date: '22 février 2026',
        quote: "L'IA de Djeli m'aide à comprendre mes chiffres et à prendre de meilleures décisions chaque semaine.",
    },
    {
        image: '/img/temoi3.jpg',
        name: 'Ibrahima Koné',
        handle: '@ibrahimakone',
        date: '3 février 2026',
        quote: "Depuis que j'utilise Djeli, j'ai mis fin aux pertes inexpliquées. Le contrôle des accès employés est une vraie révolution.",
    },
    {
        image: '/img/temoi4.jpg',
        name: 'Oumar Traoré',
        handle: '@oumartraore',
        date: '10 mars 2026',
        quote: "Fini les ordinateurs coûteux pour chaque boutique. Mon téléphone suffit pour tout gérer avec Djeli.",
    },
    {
        image: '/img/temoi5.jpg',
        name: 'Fatoumata Camara',
        handle: '@fatoumata_c',
        date: '18 mars 2026',
        quote: "Le scan des ventes est ultra-rapide. Mes clients passent en caisse sans attendre et mon stock se met à jour instantanément.",
    },
    {
        image: '/img/temoi6.jpg',
        name: 'Sekou Doumbouya',
        handle: '@sekoudoumbouya',
        date: '2 avril 2026',
        quote: "Gérer mes fournisseurs et mes approvisionnements n'a jamais été aussi simple. Djeli centralise tout en un seul endroit.",
    },
];
