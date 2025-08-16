import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';

export const config = {
  providers: [provideRouter(routes)]
};
