import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fakeData';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  bannerImage: string = "";
  articleTitle: string = "";
  articleContent: string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setArticleValues(this.id);
  }

  setArticleValues(id: string | null) {
    const result = fakeData.filter(article => article.id == id)[0];

    this.bannerImage = result.image;
    this.articleTitle = result.title;
    this.articleContent = result.content;
  }
}
