---
title: "Geotrek enrichit son volet éditorial !"
date: 2024-04-05
lang: fr
ref: post-20240405
---

<div>En octobre 2023, Le Parc National des Écrins a publié une consultation autour du projet "Destination Parc national des Ecrins" visant à faire évoluer le portail Rando Ecrins (Geotrek-rando) pour :&nbsp;</div>
<ul>
    <li>
        <div><b>Permettre d'enrichir le volet éditorial de Geotrek-rando</b></div>
    </li>
    <li>
        <div><b>Permettre de construire un menu de navigation à plusieurs niveaux, plus riche et plus complet</b></div>
    </li>
    <li>
        <div><b>Simplifier, nettoyer et enrichir les pages statiques (styles pré-définis, chargement d'images, responsive, suggestions de contenus, pages liées, ...)</b></div>
    </li>
</ul>
<div>&nbsp;</div>
<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_rando_1.png"></a>

<!--more-->
<div>Le cahier des charges du projet a été partagé sur <a target="_blank" rel="noopener noreferrer" href="https://geotrek.ecrins-parcnational.fr/ressources/cctp/2023-10-CCTP-PNE-Destination-PNE-Pages-statiques.pdf">https://geotrek.ecrins-parcnational.fr/ressources/cctp/2023-10-CCTP-PNE-Destination-PNE-Pages-statiques.pdf</a> et la consultation a été remportée par Makina Corpus.</div>
<div>&nbsp;</div>
<div>🔍 Voici un résumé des évolutions pour vous permettre de les comprendre et de les prendre en main.</div>
<div>&nbsp;</div>
<ul>
    <li>
        <div>Jusqu'à présent le menu de Geotrek-rando était limité à quelques pages statiques sur un seul niveau. Une page statique publiée était directement affichée dans le menu.</div>
    </li>
    <li>
        <div><b>Depuis les versions 2.104.0 de Geotrek-admin et 3.19.0 de Geotrek-rando qui viennent de sortir, il est possible d'aller plus loin, en ayant distingué 2 objets :&nbsp;</b></div>
        <ul>
            <li>
                <div>les <b>pages statiques</b> pouvant être associées ou non à un élément de menu</div>
            </li>
            <li>
                <div>les <b>éléments de menu</b> (nouvel objet créé dans l'AdminSite) permettant de gérer un menu à 2 niveaux composé de liens vers des pages statiques ou vers des URLs internes ou externes</div>
            </li>
        </ul>
    </li>
    <li>
        <div><b>Le travail a commencé par la suppression du système de grille responsive quand on créé une page statique.</b> Celui-ci était complexe, générait un code lourd et n'était plus utilisé depuis la v3 de Geotrek-rando</div>
    </li>
    <li>
        <div><b>Divers petits soucis des pages statiques ont aussi été corrigées</b></div>
    </li>
    <li>
        <div><b>La gestion des pages statiques est simplifiée, clarifiée et enrichie</b></div>
        <ul>
            <li>
                <div>il est possible de charger des images directement sur le serveur depuis le formulaire de création d'une page statique</div>
            </li>
            <li>
                <div>il est possible d'appliquer des styles pré-définis au contenu (bloc d'information, bouton de lien, citation, alignement des images...)</div>
            </li>
            <li>
                <div>il est possible d'intégrer facilement des blocs de suggestions d'offres (liste de randos, de sites outdoor, de contenus ou d'événements touristiques ) qui seront automatiquement mis en forme sur Geotrek-rando</div>
            </li>
            <li>
                <div>il est possible de créer des pages secondaires qui ne seront pas affichées dans le menu, mais qui seront listées en bas de la page statique à laquelle elles sont associées</div>
            </li>
            <li>
                <div>L'éventuelle hiérarchie des pages entre elles, est directement affichée dans la liste des pages sous forme d'arborescence</div>
            </li>
        </ul>
    </li>
    <li>
        <div><b>Le menu est géré indépendamment comme un objet à part entière :&nbsp;</b></div>
        <ul>
            <li>
                <div>il est possible de créer des éléments de menu sur 2 niveaux, affichés dans la liste des éléments de menu sous forme d'arborescence</div>
            </li>
            <li>
                <div>il est possible d'associer un élément de menu à une page statique</div>
            </li>
            <li>
                <div>il est aussi possible d'associer un élément de menu à une URL interne (un lien vers une recherche pré-définie par exemple) ou externe</div>
            </li>
            <li>
                <div>il est possible d'associer un picto ou une image à un élément de menu pour l'afficher de manière plus riche sur Geotrek-rando</div>
            </li>
        </ul>
    </li>
</ul>
<div>&nbsp;</div>
<div><b>⚠️ Attention, il est important de mettre à jour Geotrek-rando en version 3.19 minimum avant de mettre à jour Geotrek-admin en version 2.104 (ou plus) pour la compatibilité de ces évolutions entre les 2 outils.</b></div>
<div>Lors de la mise à jour de Geotrek-admin en version 2.104 (ou plus), des éléments de menu sont automatiquement créés à partir des pages statiques publiées, et la rétro-compatibilité des outils est assurée sans que vous deviez intervenir sur les contenus.&nbsp;</div>
<div>Vous pouvez cependant alors commencer à explorer ces nouvelles fonctionnalités, nettoyer et enrichir vos pages statiques et faire évoluer le menu de votre portail Geotrek-rando !</div>
<div>&nbsp;</div>


  

<div><b>📗 Documentation :</b></div>
<ul>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://geotrek.readthedocs.io/en/latest/usage/static-pages.html"><b>Gestion des pages statiques et des éléments de menu dans Geotrek-admin</b>
        </a>
    </li>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/GeotrekCE/Geotrek-rando-v3/issues/1079"><b>Customisation du menu de Geotrek-rando</b>
        </a>
    </li>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/orgs/GeotrekCE/projects/7/views/1"><b>Suivi et détail technique du projet</b>
        </a>
    </li>
</ul>
<div>&nbsp;</div>
<div><b>📷 En bonus, quelques captures illustrant ces évolutions :&nbsp;</b></div>
<div>&nbsp;</div>
<div>&nbsp;</div>

<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_admin_1.png"></a>

<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_admin_2.png"></a>

<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_rando_2.png"></a>

<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_rando_3.png"></a>


