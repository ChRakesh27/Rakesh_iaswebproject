import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { QuestionList } from '../model/question';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css',
})
export class QuestionsListComponent implements OnInit {
  questions: QuestionList[] | undefined;

  constructor(private service: AppService) { }
  ngOnInit(): void {
    this.service.getAllQuestion().subscribe((data) => {
      this.questions = data;
    });
  }
}
