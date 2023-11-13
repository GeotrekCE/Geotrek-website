---
title: The Geotrek widget is evolving
date: 2023-11-13
lang: en
ref: post-20231113
---

The Haut-Jura regional natural park and Makina Corpus financed a first version of the Geotrek-rando widget in 2022, announced on the [mailing list](https://groups.google.com/g/geotrek-fr/c/g7l4krS7bkE/m/kY1rA6NpAAAJ).

The Loire-Anjou-Touraine regional natural park has just financed a series of changes to the widget to improve both its display and its content, which is now closer to Geotrek-rando with: 

- The enhancement of information on treks
- The addition of multi-days treks, touristic contents and events
- The modernisation and enhancement of the design of the search engine, results lists and details of treks
- The enhancement of map functionalities (clusters, added layers, etc.)
- The simplification of deployment and customisation of the widget

This widget, which can be used and integrated simply and freely on a third-party site, can be used to promote content (or part of it) without the need to deploy Geotrek-rando. 
It can also be used to share data on the websites of regional partners (communities of communes, tourist offices, accommodation, etc.), as they will be able to re-use the content already entered in a Geotrek-admin on their institutional website.

To do this, this widget connects to the API of a Geotrek-admin to dynamically retrieve the content. It is then possible to configure the colour and background map, as well as limiting the content returned by structure, portal, practice, municipality, etc.

The project source code and associated documentation are available on [Github](https://github.com/GeotrekCE/geotrek-rando-widget).

The widget can be tested and configured on [this page](https://geotrekce.github.io/Geotrek-rando-widget/?path=/story/geotrek-rando-widget--app).
Any organisation wishing to integrate treks from a Geotrek-admin into its own website simply needs to configure it (URL of the Geotrek-admin API, practices, types of route, map background, portal, minicipalities, districts, etc., as well as its colours) and then retrieve the code to be integrated into its website, by clicking on "Docs" then "Show code".

Here are some examples of the widget integration: 

- [https://www.haut-jura-grandvaux.com/fr/bouger/randos-balades.html](https://www.haut-jura-grandvaux.com/fr/bouger/randos-balades.html)
- [https://www.jurabsolu.fr/decouvrez-territoire-jura/randonnees-forets-vignes-jura/](https://www.jurabsolu.fr/decouvrez-territoire-jura/randonnees-forets-vignes-jura/)
- [https://www.saint-claude-haut-jura.com/itineraire-randonnee-1-1.html](https://www.saint-claude-haut-jura.com/itineraire-randonnee-1-1.html)
- [https://geotrek.ecrins-parcnational.fr/ressources/technique/2022-test-widget.html](https://geotrek.ecrins-parcnational.fr/ressources/technique/2022-test-widget.html)

To find out more, you can also read the [Makina Corpus article about this new widget](https://makina-corpus.com/logiciel-libre/developpement-geotrek-widget-finance-parc-naturel-regional-haut-jura).
