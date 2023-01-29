//interfaces and models

export enum Priority {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
}

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  user: string;
}
