export interface Question {
  _id: string;
  title: string;
  question: string;
  answer: string;
  image?: string;
  url: string;
  subject: string;
  topic: string;
}

export interface QuestionList {
  _id: string;
  question: string;
  url: string;
}
