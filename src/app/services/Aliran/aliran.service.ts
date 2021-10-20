import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AliranService {

  url: string = environment.baseUrl + "api/aliran";

  constructor(private http: HttpClient) { }

  post(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, data);
  }

  get(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
}
