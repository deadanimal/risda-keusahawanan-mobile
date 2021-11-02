import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { LoginModel } from './login.model';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.baseUrl + "api/user";

  url2: string = environment.baseUrl + "api/sanctum/token";

  public models: LoginModel[] = [];
  public model: LoginModel;

  constructor(private http: HttpClient) { }

  getUser(): Observable<LoginModel[]> {
    return this.http.get<LoginModel[]>(`${this.url}`);
  }

  check1user(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, user);
  }

  show(id): Observable<LoginModel> {
    return this.http.get<LoginModel>(`${this.url}` + "/" + id);
  }

  login(user: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(`${this.url2}`, user);
  }

}
