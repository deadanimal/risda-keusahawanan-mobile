import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { PekebunModel } from './pekebun.model';
@Injectable({
  providedIn: 'root'
})
export class PekebunService {

  url: string = environment.baseUrl + "api/pekebun";

  public models: PekebunModel[] = [];
  public model: PekebunModel;

  constructor(private http: HttpClient) { }

  // getUser(): Observable<PekebunModel[]> {
  //   return this.http.get<PekebunModel[]>(`${this.url}`);
  // }

  // check1user( user : PekebunModel): Observable<PekebunModel>{
  //   return this.http.post<PekebunModel>(`${this.url}`,user);
  // }

  show(id): Observable<PekebunModel> {
    return this.http.get<PekebunModel>(`${this.url}` + "/" + id);
  }
}
