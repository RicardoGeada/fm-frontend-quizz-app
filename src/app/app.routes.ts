import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Quiz } from './pages/quiz/quiz';

export const routes: Routes = [
    {path: "", component: Start},
    {path: "quiz", component: Quiz}
];
