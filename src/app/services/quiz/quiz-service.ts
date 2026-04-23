import { inject, Injectable, signal } from '@angular/core';
import { Quiz, QuizCategory } from './quiz.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private http = inject(HttpClient);

  private quizzes = signal<Quiz[]>([]);
  private selectedCategory = signal<QuizCategory | null>(null);

  constructor() {
    const savedCategory = localStorage.getItem("category") as QuizCategory | null;
    if (savedCategory) this.selectedCategory.set(savedCategory);
    this.loadQuizzes();
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

  private loadQuizzes() {
    this.http.get<{ quizzes: Quiz[] }>('/assets/data/data.json').subscribe(data => {
      this.quizzes.set(data.quizzes);
    })
  }
}
