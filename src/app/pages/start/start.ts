import { Component } from '@angular/core';
import { LightDarkToggle } from '../../components/light-dark-toggle/light-dark-toggle';
import { QuizCategoryButton } from '../../components/quiz-category-button/quiz-category-button';
import { QuizService } from '../../services/quiz/quiz-service';
import { Router } from '@angular/router';
import { Quiz } from '../../services/quiz/quiz.types';

@Component({
  selector: 'app-start',
  imports: [LightDarkToggle, QuizCategoryButton],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {


  constructor(
    private router: Router,
    public qs: QuizService,
  ) {
    this.qs.clearCategory();
  }

  selectCategory(category: Quiz['title']) {
    this.qs.setCategory(category);
    this.router.navigate(['/quiz']);
  }

  getCategoryColor(title: string) {
    switch (title) {
      case 'HTML': return 'var(--color-orange-50)';
      case 'CSS': return 'var(--color-green-100)';
      case 'Javascript': return 'var(--color-blue-50)';
      case 'Accessibility': return 'var(--color-purple-100)';
      default: return 'transparent';
  }
}
}
