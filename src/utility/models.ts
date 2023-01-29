//interfaces and models

import { Tasks, Users } from "./types";

export enum Priority {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
}

export interface User {
  login: string;
  name: string;
  email: string;
}

export interface Task {
  id: string;
  createdDate: string;
  title: string;
  priority: Priority;
  owner: User;
  assigned: Users;
}

export interface Column {
  name: string;
  tasks: Tasks;
}
