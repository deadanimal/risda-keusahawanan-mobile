import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfExcelService {

  url: string = environment.baseUrl + "api";

  constructor(private http: HttpClient) { }


  bukuTunaiExcel(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`+'/bukuTunaiExcel/', data);
  }

  bukuTunaiPdf(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`+'/bukuTunaiPDF/', data);
  }


  pnlExcel(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`+'/pnlExcel/', data);
  }

  pnlPdf(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`+'/pnlPdf/', data);
  }


  lejarExcel(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`+'/lejerExcel/', data);
  }

  lejarPdf(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}`+'/lejerPdf/', data);
  }
}
