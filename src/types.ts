export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndices: number[]; // Tableau pour supporter plusieurs réponses justes
  explanation?: string;
}

export interface PdfResource {
  id: string;
  name: string;
  url: string;
}

export interface Module {
  id: string;
  name: string;
  description?: string;
  questions: Question[];
  pdfs: PdfResource[];
}

export interface Semester {
  id: string;
  name: string;
  modules: Module[];
}

export interface Year {
  id: string;
  name: string;
  semesters: Semester[];
}

export interface AppNotification {
  id: string;
  type: 'info' | 'warning' | 'urgent';
  message: string;
  date: string;
}

export interface DataStore {
  years: Year[];
  notifications: AppNotification[];
}