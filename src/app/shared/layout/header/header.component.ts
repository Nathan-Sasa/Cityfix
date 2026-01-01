import { CommonModule } from '@angular/common';
import { Component, Input, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-header',
	imports: [
		CommonModule,
		RouterModule
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {

	@Input() Cityfix = signal({
		name: 'Cityfix',
		logo: '',
		alt: 'Cityfix - logo',
		title: 'Bienvenue sur Cityfix',
	})
	@Input() page: string = '';
}
