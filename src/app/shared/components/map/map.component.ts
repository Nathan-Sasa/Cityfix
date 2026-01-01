import { AfterViewInit, Component, signal } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';

// maplibre-gl
import maplibregl from 'maplibre-gl';
import { FeatureCollection, Point } from 'geojson';

@Component({
	selector: 'app-map',
	imports: [
	HeaderComponent
	],
	templateUrl: './map.component.html',
	styleUrl: './map.component.css',
})
export default class MapComponent implements AfterViewInit {

	Cityfix = signal({
		name: 'Cityfix',
		logo: '',
		alt: 'Cityfix - logo',
		title: 'Bienvenue carte',
	})

	imageMarker = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHTjAtcpPkcnzo28ixu1r43Pf_RTnuOHcDA&s'

	// implementation du maplibre-gl
	map!: maplibregl.Map;

	// geoJson source
	points = Array.from({ length: 1500}, (_, i) => ({
		name: `Point ${i + 1}`,
		lng: 15 + Math.random() * 10,
		lat: -5 + Math.random() * 10
	}))

	ngAfterViewInit(): void {

		// Map simple =================================
		// Idéal pour une petite quantité de données

		// this.map = new maplibregl.Map({
		// 	container: 'map',
		// 	// style: 'https://demotiles.maplibre.org/style.json',
		// 	// style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
		// 	style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
		// 	center: [15.2663, -4.4419], // les coordonées de kinshasa
		// 	zoom: 11
		// })

		// // les controls
		// this.map.addControl(new maplibregl.NavigationControl())

		// // custom icon marker
		// const el = document.createElement('div');
		// el.style.width = '20px';
		// el.style.height = '20px';
		// el.style.backgroundColor = '#4f57c4';
		// el.style.borderRadius = '50%'
		// el.style.border = '2px solid #fff'

		// const marker = new maplibregl.Marker({color: '#4f57c4' })
		// 	.setLngLat([15.2663, -4.4419])
		// 	.addTo(this.map);

		// //popup infos 
		// const popup = new maplibregl.Popup({ 
		// 	offset: 25,
		// 	closeButton: false,
		// 	// closeOnClick: false
		// 	})
		// 	.setHTML(
		// 		`<h3 class="text-clr-accent font-mono font-semibold">${this.Cityfix().name}</h3>
		// 		<img src="${this.imageMarker}" class="w-44 h-24 rounded-lg object-center my-2" alt="Map Marker" />
		// 		<p>Kinshasa, RDC</p>
		// 		`
		// 	);
		// marker.setPopup(popup);

		// // Marker Hover effect
		// const markerElement = marker.getElement();
		// markerElement.addEventListener('mouseenter', () => popup.addTo(this.map).setLngLat([15.2663, -4.4419]));
		// markerElement.addEventListener('mouseleave', () => popup.remove());


		// Map controlée geoJson  ===========================
		// Idéal pour une grande quantité de données

		this.map = new maplibregl.Map({
			container: 'map',
			style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
			center: [15.2663, -4.4419], // les coordonées de kinshasa
			zoom: 5
		})

		this.map.addControl(new maplibregl.NavigationControl());

		// Convetir les points (tableau) en GeoJson
		const geoJson: FeatureCollection<Point> = {
			type: 'FeatureCollection',
			features: this.points.map(p => ({
				type: 'Feature',
				properties: {
					name: p.name
				},
				geometry: {
					type: 'Point',
					coordinates: [p.lng, p.lat]
				}
			}))
		};

		// Ajouter la source geoJson à la carte
		this.map.on('load', () => {
			this.map.addSource('points', {
				type: 'geojson',
				data: geoJson
			});

			// Ajouter la couche de points
			this.map.addLayer({
				id: 'points-layer',
				type: 'circle',
				source: 'points',
				paint: {
					'circle-radius': 6,
					'circle-color': '#4f57c4',
					'circle-stroke-width': 2,
					'circle-stroke-color': '#ffffff'
				}
			});
			// Popup infos au clic sur un point
			const popup = new maplibregl.Popup({
				closeButton: false,
				closeOnClick: true
			})

			// hover popup
			this.map.on('mouseenter', 'points-layer', (e) => {
				this.map.getCanvas().style.cursor = 'pointer'
				const coordinates = (e.features![0].geometry as any).coordinates.slice();
				const name = e.features![0].properties!['name'];
				popup.setLngLat(coordinates)
					.setHTML(
						`<h3 class="text-clr-accent font-mono font-semibold">${name}</h3>`
					)
					.addTo(this.map);
			})

			this.map.on('mouseleave', 'points-layer', () => {
				this.map.getCanvas().style.cursor = '';
				popup.remove();
			})
		})



		// fin AfterViewInit
	}

	//Popup
}
