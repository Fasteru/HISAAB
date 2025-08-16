import { HttpService } from "../Service/http.service";
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  constructor(private httpService: HttpService) {}

  getTextFromBackend(): Observable<string> {
    // Assuming the backend endpoint returns a string
    return this.httpService.get('/Home/welcome') as Observable<string>;
  }
}
