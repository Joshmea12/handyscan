
export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
  costEstimate: string;
  category: string;
  image: string;
  tools: string[];
  materials: string[];
  steps: Step[];
}

export interface Step {
  id: number;
  title: string;
  content: string;
  image?: string;
  tips?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum AppView {
  LANDING = 'landing',
  DASHBOARD = 'dashboard',
  PROJECT_DETAIL = 'project-detail',
  AI_CHAT = 'ai-chat'
}
