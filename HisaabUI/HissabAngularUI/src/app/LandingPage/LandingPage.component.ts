import { Component } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	templateUrl: './LandingPage.component.html',
	styleUrls: ['./LandingPage.component.scss']
})
export class LandingPageComponent {
	landingText: string = 'Welcome to the Landing Page!';
}
