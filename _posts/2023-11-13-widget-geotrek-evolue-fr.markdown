---
title: Le widget Geotrek évolue
date: 2023-11-13
lang: fr
ref: post-20231113
---

Le Parc naturel régional du Haut-Jura et Makina Corpus ont financé en 2022 une première version du widget Geotrek-rando, annoncée sur la [liste de diffusion](https://groups.google.com/g/geotrek-fr/c/g7l4krS7bkE/m/kY1rA6NpAAAJ).

Le Parc naturel régional Loire-Anjou-Touraine vient de financer une série d'évolutions sur celui-ci pour améliorer son affichage mais aussi son contenu, qui se rapproche désormais de celui de Geotrek-rando avec notamment : 

- L'enrichissement des informations sur les randonnées
- L'ajout de l'itinérance, des contenus et événements touristiques
- La modernisation et le complément du design de la recherche, des listes de résultats et des fiches détails des randonnées
- L'amélioration des fonctionnalités de la carte (clusters, ajout de couches...)
- La simplification du déploiement et de la customisation du widget

Ce widget, utilisable et intégrable simplement et librement sur un site tiers, permet de valoriser les contenus (ou une partie) sans avoir besoin de déployer de Geotrek-rando. 
Il peut ainsi permettre de partager les données sur les sites web de partenaires territoriaux (communautés de communes, offices de tourisme, hébergements...) car ils auront la possibilité de ré-utiliser sur leur site institutionnel le contenu déjà saisi dans un Geotrek-admin.

Pour cela, ce widget se connecte à l'API d'un Geotrek-admin pour en récupérer dynamiquement le contenu. Il est alors possible d'en configurer la couleur, le fond de carte, mais aussi de limiter les contenus renvoyés par structure, portail, pratique, communes...

Le code source du projet et la documentation associée sont disponibles sur [Github](https://github.com/GeotrekCE/geotrek-rando-widget).

Le widget peut être testé et configuré sur [cette page](https://geotrekce.github.io/Geotrek-rando-widget/?path=/story/geotrek-rando-widget--app).
Chaque structure souhaitant intégrer des randonnées d'un Geotrek-admin dans son propre site internet n'a alors plus qu'à configurer celui-ci (URL de l'API du Geotrek-admin, pratiques, types de parcours, fond carto, portail, communes, secteurs, ... ainsi que ses couleurs) puis de récupérer le code à intégrer dans son site internet, en cliquant sur "Docs" puis "Show code".

Quelques exemples d'intégration de ce widget : 

- [https://www.haut-jura-grandvaux.com/fr/bouger/randos-balades.html](https://www.haut-jura-grandvaux.com/fr/bouger/randos-balades.html)
- [https://www.jurabsolu.fr/decouvrez-territoire-jura/randonnees-forets-vignes-jura/](https://www.jurabsolu.fr/decouvrez-territoire-jura/randonnees-forets-vignes-jura/)
- [https://www.saint-claude-haut-jura.com/itineraire-randonnee-1-1.html](https://www.saint-claude-haut-jura.com/itineraire-randonnee-1-1.html)
- [https://geotrek.ecrins-parcnational.fr/ressources/technique/2022-test-widget.html](https://geotrek.ecrins-parcnational.fr/ressources/technique/2022-test-widget.html)

Pour en savoir plus, vous pouvez aussi lire l'[article de Makina Corpus concernant ce nouveau widget](https://makina-corpus.com/logiciel-libre/developpement-geotrek-widget-finance-parc-naturel-regional-haut-jura).
