import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseURL : string = `https://localhost:7254/api/User/login`;
  private token : Token = {};

  constructor(private http: HttpClient) { }

  get currentToken(): Token | undefined {

    if(!this.token) return undefined;

    return structuredClone(this.token);
  }

  login( email : string, password : string ) : Observable<Token>{
    return this.http.post(this.baseURL, {email, password})
      .pipe(
        tap(data => this.token = data),
        tap(data => localStorage.setItem('token', data.token === undefined ? '' : data.token))
      );
  }

  logout() : void {
    localStorage.removeItem('token');
  }

}
