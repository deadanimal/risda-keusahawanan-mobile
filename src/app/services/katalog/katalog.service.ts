import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KatalogService {

  url: string = environment.baseUrl + "api/katalog";

  constructor(private http: HttpClient) { }

  post(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, data);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  get(user_id): Observable<any> {
    return this.http.get<any>(`${this.url}` + "/" + user_id);
  }

  update(aliran: any, aliran_id: number,): Observable<any> {
    return this.http.put<any>(
      `${this.url}/${aliran_id}`, aliran
    );
  }

  delete(aliran_id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.url}/${aliran_id}`
    );
  }

  url2 : string = environment.baseUrl + "api/katalogPegawai";
  getKatalogPegawai(id): Observable<any> {
    return this.http.get<any>(`${this.url2}` + "/" + id);
  }

  url3 : string = environment.baseUrl + "api/pengesahanPegawai";
  pengesahanPegawai(id): Observable<any> {
    return this.http.get<any>(`${this.url3}` + "/" + id);
  }


  katalogPdf(id): Observable<any> {
    return this.http.get<any>(`${this.url}`+'/katalogPdf/'+id);
  }


  getMaklumatUsahawan(id): Observable<any> {
    return this.http.get<any>(`${this.url}`+'/showMaklumatUsahawan/'+id);
  }
}
