import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
    this. postService.getarticles().subscribe(posts=>{
      this.posts=posts
      console.log(posts)
    })

  }

  loadPosts() {
    this.postService.getarticles().subscribe((data: Post[]) => {
      this.posts = data;
     
    });
  }
  deletePost(id: number) {
    if (confirm("Tu veux vraiment supprimer cet article ?")) {
      this.postService.deleteArticle(id).subscribe(() => {
        this.loadPosts(); 
      });
    }
  }
  
}
