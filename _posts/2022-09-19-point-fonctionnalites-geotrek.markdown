---
title: "Geotrek, le point sur les fonctionnalités"
date: 2022-09-19
lang: fr
ref: post-20220919
---


Depuis 2020, de nombreux développements ont été réalisés sur divers aspects de l'application, financés par plusieurs acteurs et en grande partie par la communauté des structures utilisatrices de Geotrek. Nous vous proposons dans cet article de faire un point sur les nouvelles fonctionnalités et autres améliorations. 

## Les modules de Geotrek

Geotrek est une application en ligne permettant de gérer et valoriser des sentiers de randonnées et l'écosystème autour de cette pratique (aménagements, signalétiques, interventions, contenus et événements touristiques…). Il est architecturé en 3 parties :

- Geotrek-admin permet la gestion des contenus
- Geotrek-rando permet la valorisation de certains contenus via un site web
- Geotrek-mobile permet la valorisation des contenus via une application mobile

Les modules disponibles sont, pour la partie gestion : les tronçons, les sentiers, les aménagements, les signalétiques, les interventions et les chantiers. 

Les modules dont les objets seront affichés sur Geotrek-rando sont : les itinéraires, les points d'intérêts, les contenus touristiques, les événements touristiques, ainsi que les sites et parcours outdoor (sports de pleine nature). (Vous pouvez en découvrir un exemple sur [le site escapade62](https://www.escapade62.fr/) réalisé pour le Pas-De-Calais)

Tous les modules de Geotrek-Admin disposent désormais d'une API, qui expose les contenus publiés pour récupération sur Geotrek-Rando et rend également ces données accessibles pour tout autre usage.

Un module spécifique de signalements permet aux visiteurs du site de valorisation de faire remonter des problèmes rencontrés sur leur trajets (dépôt de pollution, conflit d'usage...).

## Nouvelles fonctionnalités métier

### Sites et parcours activités pleine nature

Il est désormais possible de gérer plus finement les sports de pleine nature tels que les activités en eaux vives, les sports d'escalade, la plongée, etc. grâce aux sites et parcours pleine nature, autrement appelé "Outdoor" en anglais.

Contrairement aux randonnées qui ne peuvent être que des linéaires, les géométries associées sont libres pour les sites et les parcours. Les données sont plus spécifiques aux sports pleine nature que les contenus touristiques, ce qui permet de gérer plus finement les sites d'escalade, parcours de kayak ou rafting, ou encore parapente.

![Geotrek-admin, détail d'un site](https://makina-corpus.com/sites/default/files/2022-09/geotrek_admin_site_rocher_meyzel.png)

Un site peut regrouper plusieurs parcours, et un même parcours peut également être composé de sous-parcours. Par exemple un site d'escalade peut regrouper plusieurs parcours verticaux, et au sein d'un même parcours, plusieurs sous-parcours différents selon les niveaux. On retrouve un exemple ici avec [la roche de Rame](https://gtr3demo.ecrins-parcnational.fr/outdoor-site/89-La-roche-de-Rame)

Les futurs développements auront pour objet d'intégrer la notion de verticalité dans Geotrek.

### Cotations par pratiques

La gestion des cotations (niveaux de difficulté) a été affinée sur le module Itinéraire et sur les modules Outdoor. Il est désormais possible de définir différentes échelles de cotation, chaque échelle étant associée à une pratique sportive. Par exemple, dans la pratique du Kayak, on utilise l'échelle d'engagement (entre 1 et 3) et l'échelle de classe (entre 1 et 6). Ainsi sur un même itinéraire ou un même parcours, il est désormais possible de sélectionner plusieurs cotations qui dépendent de la pratique sélectionnée.

![Formulaire d'édition d'un itinéraire dans Geotrek-admin, champs de pratique et cotations : technicité, risque, effort](https://makina-corpus.com/sites/default/files/2022-09/geotrek_cotations_2_0.png)

### Matériel

En plus du champs "Recommandation" pour un itinéraire, il est maintenant possible de renseigner le matériel nécessaire à emporter, par exemple cordages et crampons dans le cas d'une traversée d'un [névé](https://fr.wikipedia.org/wiki/N%C3%A9v%C3%A9).

![Capture d'écran Geotrek-rando, affichage des recommandations et du matériel nécessaire](https://makina-corpus.com/sites/default/files/2022-09/geotrek_rando_materiel.png)

### Accessibilité

Mon collègue Timothée de Montety a travaillé sur cette partie importante pour affiner les informations sur l'accessibilité des itinéraires et des contenus touristiques.

En plus du type d'accessibilité (fauteuil, joelette…), il est désormais possible dans un itinéraire de renseigner le niveau (débutant, intermédiaire). Dans Geotrek-rando, le type d'accessibilité apparaît en tant que filtre. Ces listes sont bien sûr éditables.
On peut également ajouter des informations sur la pente, la largeur, la signalétique, l'exposition et lier des photos pour la pente, la largeur et la signalétique.

Un exemple avec la randonnée du [Saut du Laire sur le PN des Écrins](https://rando.ecrins-parcnational.fr/trek/904199-Le-Saut-du-Laire).

Pour les contenus touristiques, un champ d'information sur l'accessibilité est disponible, et il est possible d'ajouter le label accessibilité, basé sur les labels Accessibilité Tourisme.

### Gestion des labellisations des sentiers

Le module sentier est assez peu utilisé par la communauté, mais présente tout de même des usages intéressants. Le Département des Pyrénées Orientales l'utilise pour gérer les labellisations au niveau des sentiers, et a demandé l'ajout de champs dédiés en conséquence. Un même sentier peut bénéficier de plusieurs labellisations.

![Champs labellisation et statut pour un sentier dans Geotrek-admin](https://makina-corpus.com/sites/default/files/2022-09/geotrek_admin_labellisation_sentier.png)

## Les APIs

### Plus de liens entre Suricate et Geotrek

Célia Prat en a parlé précédemment dans deux articles, Geotrek est désormais en capacité de faire le lien avec Suricate, et ce de deux façons possibles :

- le mode Suricate Signalement, premiers développements décrits [dans cet article](https://makina-corpus.com/geotrek/gestion-des-territoires-naturels-geotrek-integre-lecosysteme-suricate)
- le mode Suricate Workflow, décrit [dans cet article](https://makina-corpus.com/geotrek/gestion-territoires-naturels-geotrek-traitement-signalements-suricate)

Dans le premier mode Geotrek ne fait qu'envoyer à la plateforme Suricate les signalements créés via son API dédiée.

![Mode Suricate Signalement](https://makina-corpus.com/sites/default/files/2021-09/suricate_report.png) 

Le deuxième mode crée une interopérabilité avec Suricate et permet de définir un processus de traitement des signalements, avec une récupération régulière des données mises à jour côté Suricate vers Geotrek, et l'envoi de mises à jour immédiates d'un signalement modifié dans Geotrek vers Suricate. Le paramétrage de ce mode de fonctionnement tient compte du processus complexe de traitement d'un signalement côté Suricate, et peut s'adapter selon les territoires.

![Mode Suricate Workflow](https://makina-corpus.com/sites/default/files/2022-04/suricate_workflow.png)

Bien sûr, un mode minimaliste dans lequel le signalement reste seulement dans Geotrek est disponible si on n'a pas besoin de faire de lien avec Suricate.

## Améliorations de l'interface

### Responsive

Le développement de Georivière, un outil de gestion de rivières et milieux aquatiques reposant sur les mêmes briques logicielles que Geotrek-Admin a permis le **passage à Bootstrap 4**, ainsi que la possibilité de consulter le site en responsive.

### Édition texte riche

Le composant de saisie de texte a été mis à jour : celui-ci est plus ergonomique et le texte est bien plus lisible.

Les textes copié/collé depuis une autre source sont maintenant nettoyés automatiquement par défaut pour ne pas embarquer les éventuels styles du texte copié, qui pouvaient alourdir et dégrader le contenu HTML stocké et affiché.

Il est également possible de paramétrer à titre indicatif un nombre de caractères maximal pour les champs texte riche, qui afficheront un message si ce nombre est dépassé.

### Paramétrages des champs

Il est possible de configurer les colonnes d'attributs s'affichant dans les listes d'éléments, ainsi que dans les exports en `CSV` et en `SHP`.

De plus, dans les formulaires, il est désormais possible de masquer certains champs non obligatoires. Cela peut être utile pour un usage simplifié d'un module un peu complexe, comme les signalétiques par exemple.

### Carte des objets

Sur la partie cartographique, tous les types d'objets sont disponibles dans la liste des couches, et donc affichables. On peut par exemple afficher en même temps les itinéraires et les interventions.

## Fonctionnalités avancées

### Vues SQL pour la visualisation dans QGis

Des vues ont été ajoutées à la base de données de Geotrek, et permettent de visualiser les objets via un outil tel que QGis. Marine Faucher et Timothée De Montety [détaillent dans cet article le développement et l'usage de ces vues SQL](https://makina-corpus.com/django/creer-vues-sql-django-et-afficher-dans-un-sig).

### Filtrer sur les topologies non valides

Pour faciliter la gestion des tronçons, un filtre permet de lister uniquement les tronçons ayant une topologie valide ou invalide.

## Widget 

Le développement de l'API a également permis la création d'un outil supplémentaire pour la valorisation des contenus : le [Widget Geotrek](https://github.com/GeotrekCE/geotrek-rando-widget).

![Capture d'écran de Geotrek widget sur le Parc Naturel du Haut-Jura, résultats à gauche et carte à droite](https://makina-corpus.com/sites/default/files/2022-09/geotrek_widget_randonnees.png)

Ce widget, utilisable et intégrable simplement sur un site tiers, permet de valoriser les contenus (ou une partie) sans avoir besoin de déployer de Geotrek-Rando. Il peut permettre de partager les données sur les sites web de partenaires territoriaux (communautés de communes, offices de tourisme, hébergements...) car ils auront la possibilité de ré-utiliser sur leur site institutionnel le contenu déjà saisi.

## Performances et maintenance

Un travail sur les performances de l'application commandé par le Parc National des Écrins a permis de repenser certaines briques logicielles pour améliorer le temps de réponse de l'application.

Les opérations de calculs ou de filtrage sur les données géographiques sont désormais effectuées côté serveur, et non plus côté navigateur.

Le système de cache a été grandement amélioré, ce qui évite de faire plusieurs fois les mêmes calculs ou les mêmes requêtes en base de données.