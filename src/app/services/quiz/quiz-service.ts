import { inject, Injectable, signal } from '@angular/core';
import { Quiz } from './quiz.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private http = inject(HttpClient);

  quizzes = signal<Quiz[]>([]);
  private selectedCategory = signal<Quiz['title'] | null>(null);

  constructor() {
    this.init();
  }

  setCategory(category: Quiz['title']) {
    if (!this.isValidCategory(category)) {
      console.warn('Invalid quiz category', category);
      return;
    }

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


  /**
   * Load quizzes and set selectedCategory
   */ 
  private init() {
    this.http.get<{ quizzes: Quiz[] }>('/assets/data/data.json').subscribe((data) => {
      this.quizzes.set(data.quizzes);

      // load selectedCategory
      const savedCategory = localStorage.getItem('category');
      if (savedCategory && this.isValidCategory(savedCategory)) {
        this.selectedCategory.set(savedCategory);
      }
    });
  }

  private isValidCategory(category: string): category is Quiz['title'] {
    return this.quizzes().some((q) => q.title === category);
  }
}
