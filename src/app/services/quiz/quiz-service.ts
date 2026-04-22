import { Injectable, signal } from '@angular/core';
import { QuizCategory } from './quiz.types';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private selectedCategory = signal<QuizCategory | null>(null);

  constructor() {
    const savedCategory = localStorage.getItem("category") as QuizCategory | null;
    if (savedCategory) this.selectedCategory.set(savedCategory);
  }

  setCategory(category: QuizCategory) {
    this.selectedCategory.set(category);
    localStorage.setItem('category', category);
  }

  getCategory() {
    return this.selectedCategory();
  }

  hasCategory() {
    return this.selectedCategory() !== null;
  }

  clearCategory() {
    this.selectedCategory.set(null);
    localStorage.removeItem('category');
  }
}
