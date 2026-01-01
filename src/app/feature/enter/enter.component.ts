import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnterHeroComponent } from './enter-hero/enter-hero.component';
import { EnterAboutComponent } from './enter-about/enter-about.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-enter',
	imports: [
		CommonModule,
		RouterModule,
		EnterHeroComponent,
		EnterAboutComponent,
	],
	templateUrl: './enter.component.html',
	styleUrl: './enter.component.css',
})
export default class EnterComponent {

	router = inject(Router)

	enterTitle = signal({
		title: 'Cityfix',
		logo: '',
		alt: 'Cityfix - image'
	})

	getStarted(){
		localStorage.setItem('isLoggedIn', 'true')
		this.router.navigateByUrl('/home', {replaceUrl: true})
	}
}
