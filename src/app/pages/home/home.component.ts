import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles = [
    {
      "id": "1",
      "title": "Mon premier article",
      "content": "Voici le contenu de mon article.",
      "image": "https://i.ytimg.com/vi/2gTah9w3sFg/hqdefault.jpg",
      "category": "Actualité",
      "author": "admin"
    },
      {
        "id": "2",
        "title": "Mon premier article",
        "content": "Voici le contenu de mon article.",
        "image": "https://i.ytimg.com/vi/2gTah9w3sFg/hqdefault.jpg",
        "category": "Actualité",
        "author": "admin"
      }
  ];
}
