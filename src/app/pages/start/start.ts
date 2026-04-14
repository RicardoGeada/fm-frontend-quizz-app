import { Component } from '@angular/core';
import { QuizCategoryButton } from '../../components/quiz-category-button/quiz-category-button';

@Component({
  selector: 'app-start',
  imports: [QuizCategoryButton],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {}
