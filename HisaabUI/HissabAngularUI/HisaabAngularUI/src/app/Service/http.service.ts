import { HttpClient } from "@angular/common/http"; 
import { Injectable } from "@angular/core";
import { environment } from "../../environment";
@Injectable({
  providedIn: 'root'    
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    var body = this.http.get(environment.apiUrl + url)
    return body;
  }
}