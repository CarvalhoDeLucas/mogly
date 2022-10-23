import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public sing(payload: { email: string, password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/sign`, payload).pipe(
      map((res) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', res.token);
        return this.router.navigate(['home']);
      }),
      catchError((err) => {
        if (err.error.message) {
          return throwError(() => err.error.message);
        }

        return throwError(() => 'Inoperante, tente novamente mais tarde!');
      }),
    );
  }

  public logout() {
    localStorage.removeItem('access_token');
    return this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');

    if (!token) return false;

    const jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(token);
  }
}