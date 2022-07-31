import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = 'https://dummyjson.com';

  /**
   * @description Base backend URL
   */

  constructor(private http: HttpClient) {}

  /**
   * @description Post request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @param options - to add custom config for request header
   * @return Observable of response, comes from the end point
   */
  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(this.baseUrl + url, data, options);
  }

  /**
   * @description Post request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @param option
   * @return Observable of response, comes from the end point
   */
  postUrl(url: string, data: any, option?): Observable<any> {
    return this.http.post(url, data, option);
  }

  /**
   * @description Get request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  get(url: string, data?: any): Observable<any> {
    return this.http.get(this.baseUrl + url, data);
  }

  /**
   * @description PUT request using angular httpClient module
   * you can bass a parameter (data) in the url separated by '/'
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  put(url: string, data?: any, options?: any): Observable<any> {
    return this.http.put(this.baseUrl + url, data, options);
  }

  /**
   * @description DELETE request using angular httpClient module
   * you can bass a parameter (data) in the url separated by '/'
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  delete(url: string, data?: any, options?): Observable<any> {
    return this.http.delete(this.baseUrl + url + '/' + data, options);
  }
}
