import { Component } from '@angular/core';
import { LightDarkToggle } from '../../components/light-dark-toggle/light-dark-toggle';
import { QuizCategoryButton } from '../../components/quiz-category-button/quiz-category-button';
import { QuizService } from '../../services/quiz/quiz-service';
import { QuizCategory } from '../../services/quiz/quiz.types';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start',
  imports: [LightDarkToggle, QuizCategoryButton],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {

  constructor(private router: Router, private qs: QuizService) {}

  selectCategory(category: QuizCategory) {
    this.qs.setCategory(category);
    this.router.navigate(['/quiz']);
  } 
}
