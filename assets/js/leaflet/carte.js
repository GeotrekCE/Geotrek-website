$(document).ready(function() {
  var user; /* Variable globales des user*/
  var popup;
  /* Création de carte avec coordonnées géographique EPSG4326 latitude, longitude et niveau de zoom centré sur la france métropolitaine */
  map = L.map("map").setView([47.0, 2.83832], 5);
  map.addControl(new L.Control.Fullscreen());
  /* Ajout d'un controle des couches*/
  // lControl = L.control.layers().addTo(map);

  var basemaps = [
    // L.tileLayer(
    //   "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}",
    //   {
    //     attribution:
    //       'Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //     subdomains: "abcd",
    //     minZoom: 0,
    //     maxZoom: 18,
    //     ext: "png"
    //   }
    // ),
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      subdomains: 'abcd',
      maxZoom: 19,
          opacity: 1
      }),
  ];

  map.addControl(
    L.control.basemaps({
      basemaps: basemaps,
      tileX: 0, // tile X coordinate
      tileY: 0, // tile Y coordinate
      tileZ: 1 // tile zoom level
    })
  );

  // var tiles = L.tileLayer('http://localhost:8080/{z}/{x}/{-y}.png', {
  // // continuousWorld: true,  // very important
  // tileSize: 256,
  // tms: true,
  // subdomains: "mno",
  // attribution: "",
  // errorTileUrl: "assets/images/empty.png",
  // opacity: 0.8
  // }).addTo(map);

  /* STRM90 RGB*/
  // var tiles = L.tileLayer('http://{s}-tiles-online-dc5a-1.makina-corpus.net/srtm90_rgb/{z}/{x}/{y}.png', {
  // 	continuousWorld: true,  // very important
  // 	maxZoom: 20,
  // 	subdomains: "abcdefgh",
  // 	attribution: "",
  // 	errorTileUrl: "assets/images/empty.png",
  // 	}).addTo(map);

  let id_setTimeout = null;

  /* couche de polygone: Parc naturel - National*/
  $.getJSON(
    /* Appel Ajax vers le fichier geojson*/
    "https://utilisateurs.geotrek.fr/clients_map.geojson" /* Fchier cible*/,
    function(data) {
      /* Fonction propre à la geojson variable*/
      user = L.geoJSON(data, {
        style: style /* Appel du fichier de style initial*/,
        onEachFeature: function(f, layer) {
          /* sur chaque fonctionnalité on réalise les actions suivantes: */
          layer.on({
            mouseover: function(e) {
              map.closePopup();
              displayPopup(e, f)
            },
            mousemove: function(e) {
              if (id_setTimeout !== null) {
                clearTimeout(id_setTimeout);
              } else {
                displayPopup(e, f)
              }
              id_setTimeout = setTimeout(function() {
                map.closePopup();
                id_setTimeout = null;
              }, 3000)
            },
            click:  function(e) {
              if (id_setTimeout !== null) {
                clearTimeout(id_setTimeout);
              }
              displayPopup(e, f);
            },
            // mouseout: function() {
            //   map.closePopup(popup);
            // },
          }),
            layer.on({
              /* Evenement spécifiques sur la couche user*/
              mouseover: highlightFeature,
              mouseout: resetHighlight
            });
        },
        pointToLayer: function(feature, latlng) {
          if (feature.properties.type === "LPO")
            return L.marker(latlng, {
              icon: new L.Icon({
                iconUrl: "./assets/img/leaflet/LPO.svg",
                iconSize: [70, 70],
                iconAnchor: [35, 35]
              })
            });
          if (feature.properties.type === "CDRP")
            return L.marker(latlng, {
              icon: new L.Icon({
                iconUrl: "./assets/img/leaflet/RANDO.svg",
                iconSize: [70, 70],
                iconAnchor: [35, 35]
              })
            });
        }
      });
      user.addTo(map);
      // lControl.addOverlay(user,"user")
      /* Parcours du Geojson user afin de mettre les parcs en avant*/
      user.eachLayer(function(layer) {
        /* sur chaque couche on réalise les actions suivantes: */
        var type = layer.feature.properties.type;
        if (
          type === "Parc national" ||
          type === "Parc naturel régional" ||
          type === "Parc national Français"
        ) {
          layer.bringToFront();
        }
      });
    }
  );

  function displayPopup(e, feature) {
    /* Evenement au clic pour l'affichage des popup*/
    cont_user =
      "<div class='popup-text'>" +
      "<center>" + 
      "<strong>" + 
      feature.properties.name +
      "</strong>" +
      "</center>" +
      "<br>";
    cont_user += "<b>Organisme: </b>";
    cont_user +=
    feature.properties.type === "AOP"
        ? "Autres" + "<br>"
        : feature.properties.type + "<br>";
    if (feature.properties.website.startsWith("http")) {
      cont_user +=
        "<b>Site web: </b>  <a href=" +
        feature.properties.website +
        "  target='_blank'> " +
        feature.properties.website +
        "</a>"; // Type de site web
        "</div>"; 
    }
    popup = L.popup({ closeOnClick: false })
    popup.setLatLng(e.latlng)
    .setContent(cont_user)
    .openOn(map);
  }

  /* Fonction de style des polygone user de base*/
  function style(feature) {
    return {
      fillColor: getColor(feature.properties.type),
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 0.6
    };
  }

  /* Fonction de catégorisation des polygone*/
  function getColor(a) {
    return a == "Parc naturel régional"
      ? "#A9BF04"
      : a == "Parc national Français"
        ? "#50af55"
        : a == "Parc national"
          ? "#50af55"
          : a == "Conseil départemental"
            ? "#561FA8"
            : a == "Région"
              ? "#0b56c2"
              : a == "Communauté de communes"
                ? "#FF7505"
                 : a == "Fédérations sportives"
                   ? "#070359ff"
                   : a == "Autre"
                     ? "#FA2C2C"
                     : "#FA2C2C";
  }

  /* Fonction d'intéraction liées à la souris'*/
  /* Mise en évidence des polygones au survol*/
  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 2,
      fillOpacity: 1
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  /* Remise à l'état d'origine aprés l'évenements mouseover*/
  function resetHighlight(e) {
    user.resetStyle(e.target);
  }

  /* clickécouteur va effectuer un zoom sur l'état */
  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  // /*légende */
  // var legend = L.control({position: 'topright'});
  // legend.onAdd = function (map) {

  //     var div = L.DomUtil.create('div', 'info legend'),
  //         grades = ['PNR', 'PN','CD','AOP'],
  //         labels = ['Parc naturel régionaux', 'Parc naturels', 'Conseil départementaux', 'Autres organismes publiques'];

  //     // loop through our density intervals and generate a label with a colored square for each interval
  //     for (var i = 0; i < grades.length; i++) {
  //         div.innerHTML +=
  //             '<i style="background:' + getColor(grades[i]) + '"></i> ' +
  //             labels[i] + (labels[i + 1] ? '<br>' : '');
  //     }

  //     return div;
  // };
  // legend.addTo(map);

  /* Permet d'avoir tout les user à l'affichage*/
  // Indispensable ????????
  // var filterall = document.getElementById('filterall');
  // var filter1 = document.getElementById('filter1');
  // var filter2 = document.getElementById('filter2');

  filterall.onclick = function(i) {
    /* Permet d'avoir tout les user à l'affichage*/
    filterall.className = "active";
    filter1.className = "";
    filter2.className = "";
    filter3.className = "";
    filter4.className = "";
    filter5.className = "";
    filter6.className = "";
    // filter7.className = "";
    user.setFilter(function(f) {
      return true;
    });
  };
  filter1.onclick = function(i) {
    /* Rend actif que les PN*/
    filterall.className = "";
    filter1.className = "active";
    filter2.className = "";
    filter3.className = "";
    filter4.className = "";
    filter5.className = "";
    filter6.className = "";
    // filter7.className = "";
    user.setFilter(function(f) {
      return (
        f.properties.type === "Parc national" ||
        f.properties.type === "Parc national Français"
      );
    });
  };
  filter2.onclick = function(i) {
    /* Rend actif que les PNR */
    filterall.className = "";
    filter1.className = "";
    filter2.className = "active";
    filter3.className = "";
    filter4.className = "";
    filter5.className = "";
    filter6.className = "";
    // filter7.className = "";
    user.setFilter(function(f) {
      return f.properties.type === "Parc naturel régional";
    });
  };
  filter3.onclick = function(i) {
    /* Rend actif que les conseils départemetaux*/
    filterall.className = "";
    filter1.className = "";
    filter2.className = "";
    filter3.className = "active";
    filter4.className = "";
    filter5.className = "";
    filter6.className = "";
    // filter7.className = "";
    user.setFilter(function(f) {
      return f.properties.type === "Conseil départemental";
    });
  };
  filter4.onclick = function(i) {
    /* Rend actif les autres organismes publics */
    filterall.className = "";
    filter1.className = "";
    filter2.className = "";
    filter3.className = "";
    filter4.className = "active";
    filter5.className = "";
    filter6.className = "";
    // filter7.className = "";
    user.setFilter(function(f) {
      return (
        f.properties.type === "Autre" ||
        f.properties.type === "LPO" ||
        f.properties.type === "CDRP"
      );
    });
  };

  filter5.onclick = function(i) {
    /* Rend actif les régions */
    filterall.className = "";
    filter1.className = "";
    filter2.className = "";
    filter3.className = "";
    filter4.className = "";
    filter5.className = "active";
    filter6.className = "";
    // filter7.className = "";
    user.setFilter(function(f) {
      return (
        f.properties.type === "Région"
      );
    });
  };

  filter6.onclick = function(i) {
    /* Rend actif les communautés de communes */
    filterall.className = "";
    filter1.className = "";
    filter2.className = "";
    filter3.className = "";
    filter4.className = "";
    filter5.className = "";
    filter6.className = "active";
    // filter7.className = "";
    user.setFilter(function(f) {
      return (
        f.properties.type === "Communauté de communes"
      );
    });
  };

  // filter7.onclick = function(i) {
  //   /* Rend actif les fédérations sportives */
  //   filterall.className = "";
  //   filter1.className = "";
  //   filter2.className = "";
  //   filter3.className = "";
  //   filter4.className = "";
  //   filter5.className = "";
  //   filter6.className = "";
  //   filter7.className = "active";
  //   user.setFilter(function(f) {
  //     return (
  //       f.properties.type === "Fédérations sportives"
  //     );
  //   });
  // };

  // Géosignet Guadeloupe
  document.getElementById("fly1").addEventListener("click", function() {
    map.flyTo([16.1330939, -61.6883489], 9.5);
  });
  // Géosignet Réunion
  document.getElementById("fly2").addEventListener("click", function() {
    map.flyTo([-21.1956612, 55.4892434], 9);
  });
  // Géosignet Métropole
  document.getElementById("fly3").addEventListener("click", function() {
    map.flyTo([47.0, 2.83832], 6);
  });
}); /* Fin carte */
