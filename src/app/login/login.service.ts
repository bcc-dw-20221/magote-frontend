import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  base_url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    /**
     * Isto é apenas um exemplo.
     */
    return this.http.get<string>(this.base_url + '/login');
  }
}
