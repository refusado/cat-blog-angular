import { Component, OnInit } from '@angular/core';
import QUESTIONS from '../../../data/quizz-questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  private id: number = 0;
  private quizz: any;

  title: string = "";
  bannerImage: string = "";
  questions: any;
  currentQuestion: any;

  answers: string[] = [];
  selectedAnswer: string = "";
  questionMaxIndex: number = 0;

  questionIndex: number = 0;

  finished: boolean = false;

  ngOnInit(): void {
    this.quizz = QUESTIONS[this.id];

    if (this.quizz) {
      this.questions = this.quizz.questions;
      this.finished = false;

      this.title = this.quizz.title;
      this.bannerImage = this.quizz.banner;
      this.currentQuestion = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }

  }

  selectAnswer(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex++;

    if (this.questionMaxIndex > this.questionIndex) {
      this.currentQuestion = this.questions[this.questionIndex]
    } else {
      this.finished = true;
      const result: string = await this.checkResult(this.answers);

      this.selectedAnswer = this.quizz.results[result as keyof typeof this.quizz.results];
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((prev, curr, i, arr) => {
      if (
        arr.filter(item => item === prev).length >
        arr.filter(item => item === curr).length
      ) {
        return prev;
      } else {
        return curr;
      }
    });

    return result;
  }
}
