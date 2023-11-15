import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { Question } from '../model/question';

@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent implements OnInit {
  questions !: Question;
  constructor(private service: AppService) {

  }
  ngOnInit(): void {
    this.service.getAllQuestion().subscribe((data) => {
      // this.questions = data
      console.log("🚀 ~ data:", data)
    })
  }
}
