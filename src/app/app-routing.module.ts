import { QuizzComponent } from './pages/quizz-page/quizz/quizz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { ArticleComponent } from './pages/article-page/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'quizz/:id',
    component: QuizzComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
