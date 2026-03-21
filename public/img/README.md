# Dossier Images

Placez ici vos images personnalisées :

## Témoignages (testimonials)
Référencez vos images dans data/testimonial.ts :
  image: '/img/nom-du-fichier.jpg'

Exemple :
  image: '/img/temoi1.jpg'

Les images sont affichées en cercle (object-cover, object-center).
Elles ne seront pas étirées ni déformées.

## Fondateurs (page À propos)
- founder-1.jpg → Fondateur 1
- founder-2.jpg → Fondateur 2
- founder-3.jpg → Fondateur 3
- founder-4.jpg → Fondateur 4

Puis mettez à jour les noms/fonctions dans :
  app/(publicPages)/a-propos/page.tsx → tableau "founders"
