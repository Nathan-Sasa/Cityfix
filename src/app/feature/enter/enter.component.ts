import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnterHeroComponent } from './enter-hero/enter-hero.component';

@Component({
	selector: 'app-enter',
	imports: [
		CommonModule,
		RouterModule,
		EnterHeroComponent
	],
	templateUrl: './enter.component.html',
	styleUrl: './enter.component.css',
})
export default class EnterComponent {
	enterTitle = signal({
		title: 'Cityfix',
		logo: '',
		alt: 'Cityfix - image'
	})
}
