import { AfterViewInit, Component, signal } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { GeoLocationService } from '../../../core/service/geoLocation.service';

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

	// imageMarker = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHTjAtcpPkcnzo28ixu1r43Pf_RTnuOHcDA&s'

	// implementation du maplibre-gl
	map!: maplibregl.Map;

	constructor(private geoLocationService: GeoLocationService) {}

	// geoJson source
	// points = Array.from({ length: 1500}, (_, i) => ({
	// 	name: `Point ${i + 1}`,
	// 	lng: 15 + Math.random() * 10,
	// 	lat: -5 + Math.random() * 10
	// }))

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
		// ======================================================================================
		// ======================================================================================
		// ======================================================================================


		// Map controlée geoJson  ===========================
		// Idéal pour une grande quantité de données (simuler avec un Math.random())

		// this.map = new maplibregl.Map({
		// 	container: 'map',
		// 	style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
		// 	center: [15.2663, -4.4419], // les coordonées de kinshasa
		// 	zoom: 10
		// })

		// this.map.addControl(new maplibregl.NavigationControl());

		// // Convetir les points (tableau) en GeoJson
		// const geoJson: FeatureCollection<Point> = {
		// 	type: 'FeatureCollection',
		// 	features: this.points.map(p => ({
		// 		type: 'Feature',
		// 		properties: {
		// 			name: p.name
		// 		},
		// 		geometry: {
		// 			type: 'Point',
		// 			coordinates: [p.lng, p.lat]
		// 		}
		// 	}))
		// };

		// // Ajouter la source geoJson à la carte
		// this.map.on('load', () => {
		// 	this.map.addSource('points', {
		// 		type: 'geojson',
		// 		data: geoJson
		// 	});

		// 	// Ajouter la couche de points
		// 	this.map.addLayer({
		// 		id: 'points-layer',
		// 		type: 'circle',
		// 		source: 'points',
		// 		paint: {
		// 			'circle-radius': 6,
		// 			'circle-color': '#4f57c4',
		// 			'circle-stroke-width': 2,
		// 			'circle-stroke-color': '#ffffff'
		// 		}
		// 	});
		// 	// Popup infos au clic sur un point
		// 	const popup = new maplibregl.Popup({
		// 		closeButton: true,
		// 		closeOnClick: false
		// 	})

		// 	// hover popup
		// 	this.map.on('mouseenter', 'points-layer', (e) => {
		// 		this.map.getCanvas().style.cursor = 'pointer'
		// 		const coordinates = (e.features![0].geometry as any).coordinates.slice();
		// 		const name = e.features![0].properties!['name'];
		// 		popup.setLngLat(coordinates)
		// 			.setHTML(
		// 				`<h3 class="text-clr-accent font-mono font-semibold">${name}</h3>`
		// 			)
		// 			.addTo(this.map);
		// 	})

		// 	this.map.on('mouseleave', 'points-layer', () => {
		// 		this.map.getCanvas().style.cursor = '';
		// 		// popup.remove();
		// 	})
		// })
		// ======================================================================================
		// ======================================================================================
		// ======================================================================================


		// Map controlée avec GeoLocationService ===========================
		// Idéal pour une grande quantité de données provenant d'une API ou d'un service

		this.map = new maplibregl.Map({
			container: 'map',
			style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
			center: [15.2663, -4.4419], // les coordonées de kinshasa
			zoom: 10
		})

		// this.map.addControl(new maplibregl.NavigationControl());

		this.map.on('load', ()=>{
			this.loadPoints();
		})

		// fin AfterViewInit
	}

	loadPoints(){
		this.geoLocationService.getPoints().subscribe(points => {
			const geoJson: FeatureCollection<Point> = {
				type: 'FeatureCollection',
				features: points.map(p => ({
					type: 'Feature',
					properties: {
						id: p.LocId,
						description: p.Desc,
						image: p.Img,
						avenue: p.Av,
						quartier: p.Qtr,
						commune: p.Cne,
						ville: p.Vll
					},
					geometry: {
						type: 'Point',
						coordinates: [p.Lng, p.Lat]
					}
				}))
			}

			// this.map.addSource('geoPoints', {
			// 	type: 'geojson',
			// 	data: geoJson
			// });

			// this.map.addLayer({
			// 	id: 'geoPoints-layer',
			// 	type: 'circle',
			// 	source: 'geoPoints',
			// 	paint: {
			// 		'circle-radius': 6,
			// 		'circle-color': '#4f57c4',
			// 		'circle-stroke-width': 2,
			// 		'circle-stroke-color': '#ffffff'
			// 	}
			// });

			// const popup = new maplibregl.Popup({
			// 	closeButton: true,
			// 	closeOnClick: false
			// })

			// this.map.on('mouseenter', 'geoPoints-layer', (e) => {
			// 	this.map.getCanvas().style.cursor = 'pointer'
			// 	const coordinates = (e.features![0].geometry as any).coordinates.slice();
			// 	const description = e.features![0].properties!['description'];
			// 	const image = e.features![0].properties!['image'];
			// 	const avenue = e.features![0].properties!['avenue'];
			// 	const quartier = e.features![0].properties!['quartier'];
			// 	const commune = e.features![0].properties!['commune'];
			// 	const ville = e.features![0].properties!['ville'];

			// 	popup.setLngLat(coordinates)
			// 		.setHTML(
			// 			`<h3 class="text-clr-accent font-mono font-semibold">Description:</h3>
			// 			<p>${description}</p>
			// 			<img src="${image}" class="w-44 h-24 rounded-lg object-center my-2" alt="Point Image" />
			// 			<p><strong>Adresse:</strong> ${avenue}, ${quartier}, ${commune}, ${ville}</p>
			// 			`
			// 		)
			// 		.addTo(this.map);
			// })

			// this.map.on('mouseleave', 'geoPoints-layer', () => {
			// 	this.map.getCanvas().style.cursor = '';
			// 	// popup.remove();
			// })

			// premier fois qu'on charge les points
			if(!this.map.getSource('geoPoints')){
				this.map.addSource('geoPoints', {
					type: 'geojson',
					data: geoJson
				});

				this.map.addLayer({
					id: 'geoPoints-layer',
					type: 'circle',
					source: 'geoPoints',
					paint: {
						'circle-radius': 6,
						'circle-color': '#4f57c4',
						'circle-stroke-width': 2,
						'circle-stroke-color': '#ffffff'
					}
				});

				const popup = new maplibregl.Popup({
				closeButton: true,
				closeOnClick: false

				})

				this.map.on('mouseenter', 'geoPoints-layer', (e) => {
					this.map.getCanvas().style.cursor = 'pointer'
					const coordinates = (e.features![0].geometry as any).coordinates.slice();
					const description = e.features![0].properties!['description'];
					const image = e.features![0].properties!['image'];
					const avenue = e.features![0].properties!['avenue'];
					const quartier = e.features![0].properties!['quartier'];
					const commune = e.features![0].properties!['commune'];
					const ville = e.features![0].properties!['ville'];

					popup.setLngLat(coordinates)
						.setHTML(
							`
							<div
								class="max-w-xs flex flex-col">
								<div>
									<img src="${image}" class="w-44 h-24 rounded-lg object-center my-2" alt="Point Image" />
								</div>
								<div>
									<h3 class="text-clr-accent font-mono font-semibold">Description:</h3>
								</div>
								<p>${description}</p>
								<p><strong>Adresse:</strong> ${avenue}, ${quartier}, ${commune}, ${ville}</p>
							</div>
							`
						)
						.addTo(this.map);
				})

				this.map.on('mouseleave', 'geoPoints-layer', () => {
					this.map.getCanvas().style.cursor = '';
					// popup.remove();
				})
			}
			// mise à jour suivante des points
			else{
				(this.map.getSource('geoPoints') as maplibregl.GeoJSONSource)
					.setData(geoJson);
			}
		})
	}

	//Popup
}
