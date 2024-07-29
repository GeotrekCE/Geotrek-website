---
title: "Geotrek, updates on new features"
date: 2023-09-19
lang: en
ref: post-20230919
---

Since 2020, numerous developments have been made on various aspects of the application, funded by several stakeholders and largely by the community of Geotrek user structures. In this article, we offer you an update on the new features and other improvements.

### Geotrek's modules

Geotrek is an online application allowing you to manage and promote hiking trails and the ecosystem around this practice (infrastructure, signage, interventions, touristic content and events, etc.). It is structured in 3 parts:

- Geotrek-admin allows content management
- Geotrek-rando allows the promotion of certain content via a website
- Geotrek-mobile allows the promotion of content via a mobile application

The available modules are, for the management part: paths, treks, infrastructures, signage, interventions and projects, as well as Outdoor sites and courses.

The modules whose objects will be displayed on Geotrek-rando are: treks, points of interest, touristic content, touristic events, as well as outdoor sites and courses. You can discover an example on [the escapade62 site](https://www.escapade62.fr/) created for the Pas-De-Calais department

All Geotrek-admin valuation modules now have an API, which exposes published content for retrieval on Geotrek-rando and also makes this data accessible for any other use.

A specific reporting module allows visitors to the recovery site to report problems encountered during their journey (pollution deposits, usage conflicts, etc.).

<img style="max-width: 100%;"
    alt="Activity bar of Escapade62"
    src="{{ site.baseurl }}/assets/img/newfeatures-outdoor-cd62.png">


<!--more-->

### New features

#### Outdoor sites and courses

It is now possible to manage outdoor sports such as white water activities, climbing sports, diving, etc. thanks to the sites and outdoor sites and courses.

Unlike treks which can only be linear, the associated geometries are free for the sites and routes. The data is more specific to outdoor sports than tourist content, which makes it possible to manage climbing sites, kayaking or rafting courses, or even paragliding in greater detail.

<img style="max-width: 100%;"
    alt="Geotrek-admin, détail d'un site"
    src="{{ site.baseurl }}/assets/img/geotrek_admin_site_rocher_meyzel.png">

Future developments will aim to integrate the notion of verticality into Geotrek through the use of HD photos.

#### Ratings by practice

The management of quotes has been refined in the Itinerary module based on what existed in the Outdoor modules. It is now possible to define different rating scales specific to each sporting practice, in addition to the level of difficulty. For example, in mountain biking, we can define the level of technicality and the type of route.

<img style="max-width: 100%;"
    alt="Formulaire d'édition d'un itinéraire dans Geotrek-admin, champs de pratique et cotations : technicité, risque, effort"
    src="{{ site.baseurl }}/assets/img/geotrek_cotations_2_0.png">


#### Equipment

In addition to the "Recommendation" field for a route, it is now possible to enter the necessary equipment to bring, for example ropes and crampons in the case of crossing a [firn](https://fr.wikipedia. org/wiki/N%C3%A9v%C3%A9).


<img style="max-width: 100%;"
    alt="Capture d'écran Geotrek-rando, affichage des recommandations et du matériel nécessaire"
    src="{{ site.baseurl }}/assets/img/geotrek_rando_materiel.png">

#### Accessibility

Work has also been carried out to refine information on the accessibility of routes and tourist content.

In addition to the type of accessibility (armchair, joelette, etc.), it is now possible to enter the level (beginner, intermediate) in an itinerary. In Geotrek-rando, the accessibility type appears as a filter. These lists are of course editable.
You can also add information on slope, width, signage, exposure and link photos for slope, width and signage.

An example with the [Saut du Laire hike on the Écrins NP](https://rando.ecrins-parcnational.fr/trek/904199-Le-Saut-du-Laire).

For tourist content, an information field on accessibility is available, and it is possible to add the accessibility label, based on the Tourism Accessibility labels.

#### Management of treks labels

The trail module is rarely used by the community, but still has interesting uses. The Department of Pyrénées Orientales uses it to manage labeling at trail level, and has requested the addition of dedicated fields accordingly. The same trail can benefit from several labels.

<img style="max-width: 100%;"
    alt="Champs labellisation et statut pour un sentier dans Geotrek-admin"
    src="{{ site.baseurl }}/assets/img/geotrek_admin_labellisation_sentier.png">

### APIs

#### More interconnections between Suricate and Geotrek

Célia Prat spoke about it previously in two articles, Geotrek is now able to make the link with Meerkat, in two possible ways:

- the Meerkat Signaling mode, first developments described [in this article](https://makina-corpus.com/geotrek/gestion-des-territoires-naturels-geotrek-integre-lecosysteme-suricate)
- the Suricate Workflow mode, described [in this article](https://makina-corpus.com/geotrek/gestion-territoires-naturels-geotrek-traitement-signalements-suricate)

In the first mode Geotrek only sends the reports created via its dedicated API to the Suricate platform.
<img style="max-width: 100%;"
    alt="Mode Suricate Signalement"
    src="{{ site.baseurl }}/assets/img/suricate_report.png">

The second mode creates interoperability with Suricate and makes it possible to define a report processing process, with regular retrieval of updated data on the Suricate side to Geotrek, and sending immediate updates of a report modified in Geotrek to Meerkat. The configuration of this operating mode takes into account the complex process of processing a report on the Suricate side, and can be adapted depending on the territory.

<img style="max-width: 100%;"
    alt="Mode Suricate Workflow"
    src="{{ site.baseurl }}/assets/img/suricate_workflow.png">

Of course, a minimalist mode in which the report remains only in Geotrek is available if you do not need to make a link with Meerkat.

For more details about Geotrek-Suricate gateway, you can refer to [Geotrek-admin documentation](https://geotrek.readthedocs.io/en/latest/install/advanced-configuration.html#suricate-support) .

### UI improvements

#### Responsive

The development of Georivière, a river and aquatic environment management tool based on the same software building blocks as Geotrek-admin, enabled the **switch to Bootstrap 4**, as well as the possibility of consulting the site responsively.

#### Rich text editing

The text entry component has been updated: it is more ergonomic and the text is much more readable.

Texts copied/pasted from another source are now automatically cleaned by default so as not to include any styles of the copied text, which could clutter and degrade the HTML content stored and displayed.

It is also possible to set a maximum number of characters for the rich text fields as an indication, which will display a message if this number is exceeded.

#### Fields settings

It is possible to configure the attribute columns displayed in element lists, as well as in `CSV` and `SHP` exports.

In addition, in forms, it is now possible to hide certain non-obligatory fields. This can be useful for simplified use of a somewhat complex module, such as signage for example.

#### Map objects

On the cartographic part, all types of objects are now available in the list of layers, and therefore displayable. For example, you can display routes and interventions at the same time.

### Advanced features

#### SQL views for Qgis visualization

Views have been added to the Geotrek database, and allow objects to be visualized via a tool such as QGIS. Marine Faucher and Timothée De Montety [detail in this article the development and use of these SQL views](https://makina-corpus.com/django/creer-vues-sql-django-et-annonce-dans-un-sig).

#### Filter on invalid topologies

To facilitate the management of sections, a filter allows you to list only sections having a valid or invalid topology.

### Widget 

The development of the API also allowed the creation of an additional tool for promoting content: the [Geotrek Widget](https://github.com/GeotrekCE/geotrek-rando-widget).

<img style="max-width: 100%;"
    alt="Capture d'écran de Geotrek widget sur le Parc Naturel du Haut-Jura, résultats à gauche et carte à droite"
    src="{{ site.baseurl }}/assets/img/geotrek_widget_randonnees.png">

This widget, which can be used and easily integrated into a third-party site, allows you to enhance the content (or part of it) without needing to deploy the Geotrek-rando tool. It can make it possible to share data on the websites of territorial partners (communities of municipalities, tourist offices, accommodation, etc.) because they will have the possibility of re-using the content already entered on their institutional site.

### Performance and maintenance

Work on the performance of the application commissioned by the Écrins National Park made it possible to rethink certain software bricks to improve the response time of the Geotrek-admin application and its API.

Calculation or filtering operations on geographic data are now carried out on the server side, and no longer on the browser side.

The cache system has been greatly improved, which avoids having to do the same calculations or the same database queries several times.