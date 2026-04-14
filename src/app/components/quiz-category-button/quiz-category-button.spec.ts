import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategoryButton } from './quiz-category-button';

describe('QuizCategoryButton', () => {
  let component: QuizCategoryButton;
  let fixture: ComponentFixture<QuizCategoryButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCategoryButton],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizCategoryButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
