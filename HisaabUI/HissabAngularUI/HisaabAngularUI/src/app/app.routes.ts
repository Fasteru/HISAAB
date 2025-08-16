import { Routes } from '@angular/router';

export const routes: Routes = [
      {
    path: '',
    loadComponent: () =>
      import('./LandingPage/LandingPage.component').then(m => m.LandingPageComponent)
  },

];
