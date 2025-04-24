import { Component, Input } from "@angular/core";
import { CommentInterface } from "../comments/types/comment.interface";

@Component({
    selector: "comment",
    templateUrl: "./comment.component.html",
    styleUrls: ['./comment.component.css']
})
export class CommentComponent {
   @Input() comment!: CommentInterface;
    }