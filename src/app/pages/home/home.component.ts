import { Article } from './../../models/Article.interface';
import { Component, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainArticle: Article = {
    imageUrl: '',
    title: 'Loading...',
    id: '0'
  };
  featuredArticles: Article[] = [];
  articles: Article[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setArticles();
  }

  private setArticles() {
    const result = fakeData.filter(article => article);

    result.map((a, i) => {
      let newArticle: Article = {
        imageUrl: a.image,
        title: a.title,
        id: a.id
      };

      if (i == 0) {
        this.mainArticle = newArticle;
      } else if (i < 3) {
        this.featuredArticles.push(newArticle);
      } else {
        this.articles.push(newArticle);
      }
    });
  }
}
