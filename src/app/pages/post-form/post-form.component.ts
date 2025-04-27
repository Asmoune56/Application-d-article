import { Component } from '@angular/core';

// Define the interface for Post if it's not defined yet
interface Post {
  title: string;
  content: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  // Initialize the article object
  article: Post = {
    title: '',
    content: '',
    category: '',
    image: ''
  };

  // Handle the form submission
  onSubmit() {
    if (this.article.title && this.article.content && this.article.category && this.article.image) {
      console.log('New article:', this.article);
      // Add any additional logic to handle the form submission
    }
  }
}
