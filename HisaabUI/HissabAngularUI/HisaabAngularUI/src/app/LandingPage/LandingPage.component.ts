import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LandingPageService } from './LandingPage.service';
import { get } from 'http';

@Component({
  selector: 'LandingPage',
  templateUrl: './LandingPage.component.html',
  styleUrls: ['./LandingPage.component.scss']
})
export class LandingPageComponent implements OnInit {
    textFromBackend: string = '';
    constructor(private landingPageService: LandingPageService) { 
    }

    ngOnInit(): void {
        // Initialization logic can go here
        this.getTextFromBackend();
    }

    getTextFromBackend() {{
        this.textFromBackend = 'Welcome to HisaabAngularUI!';
        this.landingPageService.getTextFromBackend().subscribe({
            next: (data: string) => {
                this.textFromBackend = data;
            },
            error: (error) => {
                console.error('Error fetching text from backend:', error);
                this.textFromBackend = 'Error fetching data';
            }
        });
    }}
}