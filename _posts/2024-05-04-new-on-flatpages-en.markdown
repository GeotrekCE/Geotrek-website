---
title: "Geotrek expands its editorial section"
date: 2024-04-05
lang: en
ref: post-20240405
---

<div>In October 2023, the Écrins National Park published a consultation around the “Destination Parc national des Ecrins” project aimed at developing the Rando Ecrins (Geotrek-rando) portal to:&nbsp;</div>
<ul>
    <li>
        <div><b>Enrich the editorial section of Geotrek-rando</b></div>
    </li>
    <li>
        <div><b>Allow you to build a multi-level, richer and more complete navigation menu
</b></div>
    </li>
    <li>
        <div><b>il enrichit

Simplify, clean and enrich static pages (pre-defined styles, image loading, responsive, content suggestions, linked pages, etc.)</b></div>
    </li>
</ul>
<div>&nbsp;</div>
<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_rando_1.png"></a>

<!--more-->
<div>The project specifications were shared on <a target="_blank" rel="noopener noreferrer" href="https://geotrek.ecrins-parcnational.fr/ressources/cctp/2023-10-CCTP-PNE-Destination-PNE-Pages-statiques.pdf">https://geotrek.ecrins-parcnational.fr/ressources/cctp/2023-10-CCTP-PNE-Destination-PNE-Pages-statiques.pdf</a> and the consultation was won by Makina Corpus.</div>
<div>&nbsp;</div>
<div>🔍 Here is a summary of the developments to help you understand and take control of them.</div>
<div>&nbsp;</div>
<ul>
    <li>
        <div>Until now the Geotrek-rando menu was limited to a few static pages on a single level. A published static page was directly displayed in the menu.</div>
    </li>
    <li>
        <div><b>Since versions 2.104.0 of Geotrek-admin and 3.19.0 of Geotrek-rando which have just been released, it is possible to go further, having distinguished 2 objects:&nbsp;</b></div>
        <ul>
            <li>
                <div><b>flatpages</b> which may or may not be associated with a menu item</div>
            </li>
            <li>
                <div><b>menu items</b> (new object created in the django configuration module) allowing you to manage a 2-level menu composed of links to static pages or to internal or external URLs</div>
            </li>
        </ul>
    </li>
    <li>
        <div><b>The work started by removing the responsive grid system when creating a static page.</b> This was complex, generated heavy code and was no longer used since v3 of Geotrek-rando</div>
    </li>
    <li>
        <div><b>Various small issues with flatpages have also been fixed

</b></div>
    </li>
    <li>
        <div><b>Management of static pages is simplified, clarified and enriched

</b></div>
        <ul>
            <li>
                <div>it is possible to load images directly on the server from the form for creating a static page</div>
            </li>
            <li>
                <div>it is possible to apply pre-defined styles to the content (information block, link button, quote, image alignment, etc.)</div>
            </li>
            <li>
                <div>it is possible to easily integrate blocks of offer suggestions (list of hikes, outdoor sites, content or tourist events) which will be automatically formatted on Geotrek-rando</div>
            </li>
            <li>
                <div>it is possible to create secondary pages which will not be displayed in the menu, but which will be listed at the bottom of the static page to which they are associated</div>
            </li>
            <li>
                <div>The possible hierarchy of pages between them is directly displayed in the list of pages in the form of a tree</div>
            </li>
        </ul>
    </li>
    <li>
        <div><b>The menu is managed independently as an object in its own right: &nbsp;</b></div>
        <ul>
            <li>
                <div>it is possible to create menu items on 2 levels, displayed in the list of menu items in the form of a tree</div>
            </li>
            <li>
                <div>it is possible to associate a menu item with a flatpage</div>
            </li>
            <li>
                <div>it is also possible to associate a menu item with an internal URL (a link to a pre-defined search for example) or external</div>
            </li>
            <li>
                <div>it is possible to associate a pictogram or an image with a menu item to display it in a richer way on Geotrek-rando</div>
            </li>
        </ul>
    </li>
</ul>
<div>&nbsp;</div>
<div><b>⚠️ Please note, it is important to update Geotrek-rando to version 3.19 minimum before updating Geotrek-admin to version 2.104 (or higher) for the compatibility of these developments between the 2 tools.</b></div>
<div>When updating Geotrek-admin to version 2.104 (or higher), menu items are automatically created from published static pages, and backward compatibility of tools is ensured without you having to intervene on the content.&nbsp;</div>
<div>However, you can then start to explore these new features, clean and enrich your static pages and evolve the menu of your Geotrek-rando portal!</div>
<div>&nbsp;</div>


  

<div><b>📗 Documentation :</b></div>
<ul>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://geotrek.readthedocs.io/en/latest/usage/static-pages.html"><b>Managing flatpages and menu items in Geotrek-admin</b>
        </a>
    </li>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/GeotrekCE/Geotrek-rando-v3/issues/1079"><b>Customization of the Geotrek-rando menu</b>
        </a>
    </li>
    <li>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/orgs/GeotrekCE/projects/7/views/1"><b>Monitoring and technical details of the project</b>
        </a>
    </li>
</ul>
<div>&nbsp;</div>
<div><b>📷 As a bonus, some captures illustrating these developments:&nbsp;</b></div>
<div>&nbsp;</div>
<div>&nbsp;</div>

<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_admin_1.png"></a>

<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_admin_2.png"></a>

<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_rando_2.png"></a>

<a href="https://www.grand-tour-ecrins.fr/information/1-Le-Grand-Tour-des-Ecrins" target="_blank"><img style="max-width: 100%;" src="{{ site.baseurl }}/assets/img/2024/flatpages_rando_3.png"></a>


