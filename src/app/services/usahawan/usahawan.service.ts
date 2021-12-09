import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { UsahawanModel } from './usahawan.model';
import { $$ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsahawanService {

  url: string = environment.baseUrl + "api/usahawan";

  public models: UsahawanModel[] = [];
  public model: UsahawanModel;

  constructor(private http: HttpClient) { }

  // getUser(): Observable<UsahawanModel[]> {
  //   return this.http.get<UsahawanModel[]>(`${this.url}`);
  // }

  // check1user( user : UsahawanModel): Observable<UsahawanModel>{
  //   return this.http.post<UsahawanModel>(`${this.url}`,user);
  // }

  show(id): Observable<UsahawanModel> {
    return this.http.get<UsahawanModel>(`${this.url}` + "/" + id);
  }

  // update()

  update(usahawan_id, usahawan: any): Observable<any> {
    return this.http.put<any>(
      `${this.url}/${usahawan_id}`, usahawan
    );
  }
}
