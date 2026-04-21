import { CanActivateFn, Router } from '@angular/router';
import { QuizService } from '../../services/quiz/quiz-service';
import { inject } from '@angular/core';

export const quizGuard: CanActivateFn = () => {
  const quizService = inject(QuizService);
  const router = inject(Router);

  if (quizService.hasCategory()) {
    return true;
  }

  return router.createUrlTree(['/']);
};
