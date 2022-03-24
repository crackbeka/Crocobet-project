import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  /**
   * Wrapper for HTTP Get method
   *
   * @param path
   * @returns
   */
  get<T = any>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`);
  }

  /**
   * Wrapper for HTTP Post method
   *
   * @param path
   * @param body
   * @returns
   */
  post<T = any>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, body);
  }

  /**
   * Wrapper for HTTP Delete method
   *
   * @param path
   * @returns
   */
  delete<T = any>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${path}`);
  }
}
