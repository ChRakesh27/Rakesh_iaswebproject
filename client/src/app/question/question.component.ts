import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Question } from '../model/question';
import { AppService } from '../app.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  questions!: Question[];
  question!: Question;
  count: any;
  constructor(
    private service: AppService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    // this.service.getAllQuestion().subscribe((data) => {
    //   this.questions = data;
    // });

    this.count = this.route.snapshot.params['id'];

    this.service.getQuestionById(this.count).subscribe((data) => {
      this.question = data
    })


  }

  Check(): void {
    // this.count = this.route.snapshot.params['id'];
    // this.question = this.questions[this.count];
  }
}
