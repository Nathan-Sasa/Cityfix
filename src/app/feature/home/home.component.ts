import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		HeaderComponent,
		RouterModule,
		CommonModule
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export default class HomeComponent {

	home = 'Home'
}
