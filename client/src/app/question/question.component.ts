import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Question, QuestionList } from '../model/question';
import { AppService } from '../app.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  questions?: QuestionList[];
  curQuestion?: Question;

  preId?: string;
  nextId?: string;
  curId?: string;

  isLoading: boolean = true;

  constructor(
    private service: AppService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.service.getAllQuestion().subscribe((data) => {
      this.questions = data;
      this.getQuestionDetails();
    });
  }

  private getQuestionDetails() {
    this.route.params.subscribe((params) => {
      this.curId = params['id'];
      if (!this.curId || !this.questions) {
        return;
      }

      this.isLoading = true;
      this.service.getQuestionById(this.curId).subscribe((data) => {
        this.curQuestion = data;
        this.isLoading = false;

        const idx = this.questions!.findIndex((ele) => ele._id === this.curId);

        this.preId = this.questions![idx - 1]?._id;
        this.nextId = this.questions![idx + 1]?._id;
      });
    });
  }
}
