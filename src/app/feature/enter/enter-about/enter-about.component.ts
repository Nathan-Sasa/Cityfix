import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-enter-about',
	imports: [
		CommonModule,
	],
	templateUrl: './enter-about.component.html',
	styleUrl: './enter-about.component.css',
})
export class EnterAboutComponent {

	features = [
		{
			title: 'Capturer une photo',
			description: 'Signalez les points de collecte, les décharges sauvages et les zones nécessitant un nettoyage.',
			icon: 'bi-camera-fill'
		},
		{
			title: 'Acitver la géolocalisation',
			description: 'Identifiez les zones sales ou mal entretenues pour améliorer la qualité de vie urbaine.',
			icon: 'bi-geo-alt-fill'
		},
		{
			title: 'Envoyer une alerte',
			description: 'Contribuez à la préservation et à l\'amélioration des parcs et jardins publics.',
			icon: 'bi-send-fill'
		},
		{
			title: 'Recevoir des commentaires à votre signalement',
			description: 'Signalez les trottoirs, routes ou équipements publics endommagés pour une intervention rapide.',
			icon: 'bi-chat-dots-fill'
		}
	]
}
