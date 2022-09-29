import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL: string = '/api/token/'

  access_token: string = '';
  refresh_token: string = '';

  constructor(private httpClient: HttpClient) { }

  login(loginData: { username: string, password: string }): void {
    this.httpClient.post<{ access: string, refresh: string }>(`${this.BASE_URL}`,
      { username: loginData.username, password: loginData.password }).pipe(
        map(({ access, refresh }) => {
          this.access_token = access;
          this.refresh_token = refresh;
        })
      ).subscribe();
  }

  get_token(): string {
    return this.access_token;
  }
}
