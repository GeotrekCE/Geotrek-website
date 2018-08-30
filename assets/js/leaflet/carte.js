	var user ;   /* Variable globales des user*/


	$(document).ready(function() {
	/* Création de carte avec coordonnées géographique EPSG4326 latitude, longitude et niveau de zoom centré sur la france métropolitaine */
  	map = L.map('map').setView([47.0,2.83832], 5);

  	/* Ajout d'un controle des couches*/
	// lControl = L.control.layers().addTo(map);

  var basemaps = [

	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
	}),

	L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 18,
		ext: 'png'
	}),
	];

	map.addControl(L.control.basemaps({
	    basemaps: basemaps,
	    tileX: 0,  // tile X coordinate
	    tileY: 0,  // tile Y coordinate
	    tileZ: 1   // tile zoom level
	}));

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

	/* couche de polygone: Parc naturel - National*/
  $.getJSON( /* Appel Ajax vers le fichier geojson*/
    "http://utilisateurs.geotrek.fr/clients_map.geojson", /* Fchier cible*/
    function(data) { 	/* Fonction propre à la geojson variable*/
      user = L.geoJSON(data, {
        style: style, /* Appel du fichier de style initial*/
        onEachFeature: function(f,layer){ /* sur chaque fonctionnalité on réalise les actions suivantes: */
          layer.on({
          click: function(e){  /* Evenement au clic pour l'affichage des popup*/
            cont_user = "<center>"+"<strong>"+f.properties.name+"</strong>"+"</center>"+"<br>";
            cont_user += "<b>Organisme: </b>";
            cont_user += f.properties.type === "AOP" ? "Autres" +"<br>" : f.properties.type +"<br>";
						if (f.properties.website.startsWith('http')){
							cont_user += "<b>Site web: </b>  <a href=" + f.properties.website+"> " + f.properties.website+"</a>" // Type de site web
						}
					  popup = L.popup({closeOnClick:false}).setLatLng(e.latlng).setContent(cont_user).openOn(map);
          	}
          }),
					layer.on({ /* Evenement spécifiques sur la couche user*/
							mouseover: highlightFeature,
							mouseout: resetHighlight
					});
			},
			pointToLayer: function (feature, latlng) {
				if (feature.properties.type === "LPO")
				return L.marker(latlng, {
					icon: new L.Icon({
						iconUrl: './assets/img/leaflet/LPO.svg',
						iconSize: [70, 70],
						iconAnchor: [35, 35]
					})
				})
				if (feature.properties.type === "CDRP")
				return L.marker(latlng, {
					icon: new L.Icon({
						iconUrl: './assets/img/leaflet/RANDO.svg',
						iconSize: [70, 70],
						iconAnchor: [35, 35]
					})
				})
			}

	  });
      user.addTo(map);
      // lControl.addOverlay(user,"user")
			/* Parcours du Geojson user afin de mettre les parcs en avant*/
			user.eachLayer(function(layer) { /* sur chaque couche on réalise les actions suivantes: */
				 var type = layer.feature.properties.type;
				if (type === 'Parc national' || type === 'Parc naturel régional' || type === 'Parc national Français' ) {
					layer.bringToFront()
				};
			});
    }
  );


/* Fonction de style des polygone user de base*/
function style(feature){
	return {
		fillColor: getColor(feature.properties.type),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7
	}
};

/* Fonction de catégorisation des polygone*/
function getColor(a){
  return  a == "Parc naturel régional" ? '#e8491e':
		  a == "Parc national Français" ? '#9c2d2d':
          a == "Parc national"  ? '#9c2d2d':
          a == "Conseil départemental"  ? '#9d6bc9':
          a == "Autre"  ? '#3bb6b3':
          '#ff0000'; }

	/* Fonction d'intéraction liées à la souris'*/
	/* Mise en évidence des polygones au survol*/
	function highlightFeature(e) {
	    var layer = e.target;

	    layer.setStyle({
	        weight: 5,
	        color: '#666',
	        dashArray: '',
	        fillOpacity: 1
	    });
	    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	        layer.bringToFront();
	    }
	};

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

filterall.onclick= function(i){ /* Permet d'avoir tout les user à l'affichage*/
				filterall.className = 'active';
				filter1.className = '';
				filter2.className = '';
				filter3.className = '';
				filter4.className = '';
				user.setFilter(function(f){
					return true;
				});
};
filter1.onclick= function(i){ /* Rend actif que les PN*/
				filterall.className = '';
				filter1.className = 'active';
				filter2.className = '';
				filter3.className = '';
				filter4.className = '';
				user.setFilter(function(f){
					return (f.properties.type === 'Parc national'|| f.properties.type === 'Parc national Français');
				});
};
filter2.onclick= function(i){  /* Rend actif que les PNR */
				filterall.className = '';
				filter1.className = '';
				filter2.className = 'active';
				filter3.className = '';
				filter4.className = '';
				user.setFilter(function(f){
					return f.properties.type === 'Parc naturel régional';
				});
};
filter3.onclick= function(i){ /* Rend actif que le/les conseil departemetal*/
				filterall.className = '';
				filter1.className = '';
				filter2.className = '';
				filter3.className = 'active';
				filter4.className = '';
				user.setFilter(function(f){
					return f.properties.type === 'Conseil départemental';
				});
};
filter4.onclick= function(i){ /* Rend actif les autres organismes publics */
				filterall.className = '';
				filter1.className = '';
				filter2.className = '';
				filter3.className = '';
				filter4.className = 'active';
				user.setFilter(function(f){
					return (f.properties.type === 'Autre' || f.properties.type === 'LPO'|| f.properties.type === 'CDRP');
				});
};



// Géosignet Guadeloupe
document.getElementById('fly1').addEventListener('click', function () {
  map.flyTo([ 16.1330939,-61.6883489], 9.5)
});
// Géosignet Réunion
document.getElementById('fly2').addEventListener('click', function () {
  map.flyTo([-21.1956612,55.4892434], 9)

});
// Géosignet Guyane
document.getElementById('fly3').addEventListener('click', function () {
  map.flyTo([ 2.8543054,-53.1914432], 7)
});
// Géosignet Métropole
document.getElementById('fly4').addEventListener('click', function () {
  map.flyTo([ 47.0,2.83832], 6)
});


});	/* Fin carte */
