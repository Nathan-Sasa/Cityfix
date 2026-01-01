import { AfterViewInit, Component, signal } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import maplibregl from 'maplibre-gl';

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

	// implementation du maplibre-gl
	map!: maplibregl.Map;

	ngAfterViewInit(): void {
		this.map = new maplibregl.Map({
			container: 'map',
			// style: 'https://demotiles.maplibre.org/style.json',
			// style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
			style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
			center: [15.2663, -4.4419], // les coordonées de kinshasa
			zoom: 11
		})

		// les controls
		this.map.addControl(new maplibregl.NavigationControl())

		//marqueur
		const marker = new maplibregl.Marker({ color: '#4f57c4' })
			.setLngLat([15.2663, -4.4419])
			.addTo(this.map);
			// .setPopup(
			// 	new maplibregl.Popup({ offset: 25 })
			// 		.setHTML(
			// 			`<h3>${this.Cityfix().title}</h3><p>Kinshasa, RDC</p>`
			// 		)
			// )
		
		//popup infos 
		const popup = new maplibregl.Popup({ 
			// offset: 25,
			closeButton: false,
			closeOnClick: false
			})
			.setHTML(
				`<h3 class="text-clr-accent">${this.Cityfix().name}</h3>
				<p>Kinshasa, RDC</p>
				`
			);
		marker.setPopup(popup);

		// Marker Hover effect
		const markerElement = marker.getElement();
		markerElement.addEventListener('mouseenter', () => popup.addTo(this.map).setLngLat([15.2663, -4.4419]));
		markerElement.addEventListener('mouseleave', () => popup.remove());
	}

	//Popup
}
