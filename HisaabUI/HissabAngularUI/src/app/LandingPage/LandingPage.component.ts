
import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './LandingPage.Service';

@Component({
	selector: 'app-landing-page',
	templateUrl: './LandingPage.html',
	styleUrls: ['./LandingPage.scss']
})
export class LandingPageComponent implements OnInit {
	landingText: string = '';

	constructor(private landingPageService: LandingPageService) {}

	ngOnInit() {
		this.landingPageService.getData().subscribe({
			next: (response) => {
				this.landingText = response?.landingText || '';
			},
			error: (error) => {
				console.error('Error fetching landing text:', error);
				this.landingText = 'Error loading landing text.';
			}
		});
	}
}
