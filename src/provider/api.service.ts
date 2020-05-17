import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = "https://jsonplaceholder.typicode.com/posts/";
  
  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  getPosts():Observable<any> {
    return this.http.get(this.BASE_URL)
  }
  getPostDetail(post_id):Observable<any> {
    return this.http.get(`${this.BASE_URL}${post_id}`)
  }

  getPostComments(post_id):Observable<any> {
    return this.http.get(`${this.BASE_URL}${post_id}/comments`)
  }
}
