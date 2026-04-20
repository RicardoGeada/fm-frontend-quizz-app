import { Injectable, signal } from '@angular/core';
import { QuizCategory } from './quiz.types';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private selectedCategory = signal<QuizCategory | null>(null);

  setCategory(category: QuizCategory) {
    this.selectedCategory.set(category);
  }

  getCategory() {
    return this.selectedCategory();
  }
}
