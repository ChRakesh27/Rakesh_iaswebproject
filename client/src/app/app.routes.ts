
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsListComponent } from './questionsList/questions-list.component';
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './add-question/add-question.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "add-question", component: AddQuestionComponent },
    { path: "question", component: QuestionsListComponent },
    { path: "", redirectTo: "/question", pathMatch: 'full' },
    { path: "question/:id", component: QuestionComponent }
];
