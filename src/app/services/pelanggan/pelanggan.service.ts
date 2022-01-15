import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {

  url: string = environment.baseUrl + "api/pelanggan";

  constructor(private http: HttpClient) { }

  post(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, data);
  }

  get(id): Observable<any> {
    return this.http.get<any>(`${this.url}`+'/'+id);
  }

  update(data: any, id): Observable<any> {
    return this.http.put<any>(
      `${this.url}/${id}`, data
    );
  }

  delete( id ): Observable<any>{
    return this.http.delete<any>(
      `${this.url}/${id}`
    );
  }

  janaDokumen(id): Observable<any> {
    return this.http.get<any>(`${this.url}`+'/janaDokumen/'+id);
  }
}
