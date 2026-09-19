import { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    slug: "prix-fabrice-sawegnon-stam-3e-edition",
    title: "Djeli remporte le Prix Fabrice Sawegnon à la 3e édition du STAM",
    category: "Réalisation",
    date: "Événement",
    excerpt:
      "Notre solution mobile de gestion et d’inclusion financière pour commerçants a été honorée lors du Salon des Téléphones et Applications Mobiles.",
    image: "/img/prix_stam.jpeg", // Conservez votre convention d'images
    featured: true,
  },
  {
    slug: "comment-obtenir-un-pret-avec-ses-donnees-de-caisse",
    title: "Comment transformer vos ventes quotidiennes en dossier de prêt",
    category: "Financement",
    date: "Guide Pratique",
    excerpt:
      "Découvrez les critères clés analysés par les institutions financières et comment l’historique Djeli facilite votre demande de crédit.",
    image: "/img/question_mark.jpg", // Conservez votre convention d'images
    featured: false,
  },
  {
    slug: "djeli-ia-au-service-des-commercants",
    title: "Djeli IA : L’assistant qui prépare votre santé financière",
    category: "Innovation",
    date: "Mise à jour",
    excerpt:
      "Comment notre IA analyse vos stocks et vos revenus pour vous recommander les meilleures actions avant d’approcher votre banque.",
    image: "/img/djeliai.jpeg",
    featured: false,
  },
];
