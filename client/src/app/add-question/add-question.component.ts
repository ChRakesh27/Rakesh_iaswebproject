import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent implements OnInit {
  question !: FormGroup;

  constructor(private service: AppService) {

  }



  ngOnInit(): void {
    this.question = new FormGroup({
      title: new FormControl(null, Validators.required),
      question: new FormControl(null, Validators.required),
      answer: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
      topic: new FormControl(null, Validators.required)
    })
  }
  submit() {

  }
}
