import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Token } from 'src/app/auth/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  private baseURL : string = `https://localhost:7254/api/User/register`;
  private token : Token = {};

  constructor(private http: HttpClient) { }

  get currentToken(): Token | undefined {

    if(!this.token) return undefined;

    return structuredClone(this.token);
  }

  register( email : string, password : string ) : Observable<Token>{
    return this.http.post(this.baseURL, {email, password})
      .pipe(
        tap(data => this.token = data)
      );
  }
}
