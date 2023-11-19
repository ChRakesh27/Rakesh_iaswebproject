import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AppService } from '../app.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css',
})
export class AddQuestionComponent implements OnInit {
  questionForm!: FormGroup;

  imageBase64!: string;
  selectedFile!: File;
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.questionForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      question: new FormControl(null, Validators.required),
      answer: new FormControl(null, Validators.required),
      image: new FormControl(null),
      url: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
      topic: new FormControl(null, Validators.required),
    });
  }

  onSelectImg(e: any) {
    if (e.target.files) {
      this.selectedFile = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        if (this.selectedFile.size <= 1024 * 1024) {
          this.imageBase64 = event.target.result;
        } else {
          alert("file size large")
        };
      };
    }
  }

  submit() {
    this.questionForm.patchValue({ image: this.imageBase64 })
    if (this.questionForm.valid) {
      this.service
        .addQuestion(this.questionForm.value)
        .subscribe(() => {
          this.questionForm.reset();
        });
    }
  }
}
