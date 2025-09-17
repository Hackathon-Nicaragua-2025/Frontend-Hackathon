// Quiz Types
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation?: string;
}

export interface QuizData {
  id: string;
  title: string;
  description?: string;
  questions: QuizQuestion[];
}
