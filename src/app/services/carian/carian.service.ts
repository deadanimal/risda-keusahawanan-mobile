import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarianService {

  url: string = environment.baseUrl + "api/carian";

  constructor(private http: HttpClient) { }

  get(input): Observable<any> {
    return this.http.get<any>(`${this.url}`+'/'+input);
  }

  url2: string = environment.baseUrl + "api/carian";

  downloadFile(id): Observable<any> {
    return this.http.get<any>(`${this.url2}`+'/'+id);
  }
}
