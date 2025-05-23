import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentInterface } from "../types/comment.interface";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CommentsService {

    constructor(private httpClient: HttpClient) { }
    getComments(): Observable<CommentInterface[]> {
        return this.httpClient.get<CommentInterface[]>('http://localhost:3001/comments');
    }
}