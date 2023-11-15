import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { QuestionsListComponent } from './questionsList/questions-list.component';
import { QuestionComponent } from './question/question.component';


export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "admin", component: AdminComponent },
    { path: "question", component: QuestionsListComponent },
    { path: "question/:id", component: QuestionComponent }
];
