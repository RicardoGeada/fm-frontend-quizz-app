import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Quiz } from './pages/quiz/quiz';
import { quizGuard } from './guards/quiz/quiz-guard';

export const routes: Routes = [
    {path: "", component: Start},
    {path: "quiz", component: Quiz, canActivate: [quizGuard]}
];
