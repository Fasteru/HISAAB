import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './LandingPage/LandingPage.component';
import { LandingPageService } from './LandingPage/LandingPage.Service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LandingPageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
