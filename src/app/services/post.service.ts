import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {



  http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/posts';

  constructor() { }


  getarticles() : Observable<Post[]> {
   return this.http.get<Post[]>(this.apiUrl);
  

  }

  getArticleById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addArticle(article: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, article);
  }

  updateArticle(article: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${article.id}`, article);
  }
  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/posts/${id}`);
  }
  

}
