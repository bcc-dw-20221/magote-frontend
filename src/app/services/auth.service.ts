import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Credentials, Tokens } from 'src/models/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // O ideal é pegar isso de um .env, pra usar um de dev, um de testes e um de prod, por exemplo
  base_url: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<Tokens> {
    // Desse jeito aqui, quando erra a senha não estou tratando
    return this.http.post<Tokens>(this.base_url + 'api/token/', credentials);
  }

  verify(token: string): Observable<boolean> {
    // Já aqui eu lido de uma forma com o sucesso, e de outra com o erro
    return this.http
      .post<boolean>(this.base_url + 'api/token/verify/', { token: token })
      .pipe(
        switchMap((response) => of(true)),
        catchError((err) => of(false))
      );
  }
}
