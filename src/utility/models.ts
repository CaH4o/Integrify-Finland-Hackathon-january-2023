//interfaces and models
import {ColumnColors} from "./types";
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

export interface UserState extends User {
  loading: boolean;
  error: boolean;
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

export interface ColumnData {
    id: string,
    title: string,
    taskIds: string[],
    color: ColumnColors
}

export interface TaskData {
    id: string,
    title: string,
    date: string,
    description: string,
    priority: Priority,
    creator: TaskPersonData,
    assigned: TaskPersonData,
}

export interface TaskPersonData {
    avatar: string,
    name: string,
    position:string,
    email: string,
}

export interface Priority {
        text: string,
        color: string,
        background: string,
}

export interface FakeData {
    tasks: {
        [key: string] : TaskData,
    },
    columns: {
        [key: string]: ColumnData,
    },
    columnOrder: string[],
}
