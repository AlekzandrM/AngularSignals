import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com';
  private readonly http = inject(HttpClient);

  public gePosts(): Observable<any> {
    return this.http.get<any>(`${this.url}/posts`)
  }
}
