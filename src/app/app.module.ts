import { ArticleModule } from './pages/article-page/article.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home-page/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './pages/quizz-page/quizz/quizz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
