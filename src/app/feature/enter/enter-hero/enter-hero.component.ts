import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-enter-hero',
    imports: [
		CommonModule,
		RouterModule
    ],
    templateUrl: './enter-hero.component.html',
    styleUrl: './enter-hero.component.css',
})
export class EnterHeroComponent {

}
