import { NgModule } from "@angular/core";
import { CommentsComponent } from "./components/comments/comments.component";
import { CommonModule } from "@angular/common";
import { CommentsService } from "./services/comments.service";


@NgModule({
    declarations: [CommentsComponent],
    imports: [CommonModule],
    exports: [CommentsComponent],
    providers: [CommentsService],
    bootstrap: [],
})
export class CommentsModule {

}
