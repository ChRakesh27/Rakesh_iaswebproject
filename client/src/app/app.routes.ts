import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsListComponent } from './questionsList/questions-list.component';
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './add-question/add-question.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'questions', component: QuestionsListComponent },
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions/:id', component: QuestionComponent },
];
