import { Injectable } from '@angular/core';
import { HttpGetService } from '../Services/http-get.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  constructor(private httpGet: HttpGetService) {}

  getData(): Observable<any> {
    return this.httpGet.get<any>('/HomeController/welcome');
  }
}