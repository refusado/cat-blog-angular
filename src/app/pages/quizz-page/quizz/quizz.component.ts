import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import QUESTIONS from '../../../data/quizz-questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  id: any = "1";
  quizz: any;

  title: string = "";
  bannerImage: string = "";
  questions: any;
  currentQuestion: any;

  answers: string[] = [];
  userAnswer: string = "";
  questionMaxIndex: number = 0;

  questionIndex: number = 0;

  finished: boolean = false;

  constructor( private route: ActivatedRoute ) {
    if (route != null)
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    console.info(this.id);
  }

  ngOnInit(): void {
    this.quizz = QUESTIONS.filter(question => {
      return question.id == this.id;
    })[0];

    if (this.quizz) {
      this.questions = this.quizz.questions;
      this.finished = false;

      this.title = this.quizz.title;
      this.bannerImage = this.quizz.banner;
      this.currentQuestion = this.quizz.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.quizz.questions.length;
    }

    console.error(this.bannerImage);

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

      this.userAnswer = this.quizz.results[result as keyof typeof this.quizz.results];

      console.info(this.answers);
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

  restart(): void {
    this.finished = false;
    this.answers.length = 0;
    this.questionIndex = 0;
    this.currentQuestion = this.questions[this.questionIndex];
  }
}
