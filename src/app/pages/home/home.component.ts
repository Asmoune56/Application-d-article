import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles = [
    {
      id: 1,
      title: 'Bienvenue dans notre blog Angular !',
      content: 'Découvrez les bases d’Angular étape par étape.',
      image: 'https://cinqmars.fr/wp-content/uploads/2020/04/re%CC%81fe%CC%81rencer-un-article-de-blog.jpg',
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'L’authentification avec Firebase',
      content: 'Comment sécuriser votre application avec Firebase Auth.',
      image: 'https://cinqmars.fr/wp-content/uploads/2020/04/re%CC%81fe%CC%81rencer-un-article-de-blog.jpg',
      category: 'Authentification'
    }
  ];
}
