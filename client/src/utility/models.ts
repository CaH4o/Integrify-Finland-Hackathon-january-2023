//interfaces and models
import { ColumnColors } from "./types";
import { Tasks } from "./types";

export interface UserState extends TaskPersonData {
  loading: boolean;
  error: boolean;
  authentication: boolean;
}

export interface Column {
  name: string;
  tasks: Tasks;
}

export interface ColumnData {
  id: string;
  title: string;
  taskIds: string[];
  color: ColumnColors;
}

export interface TaskData {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  assigned: TaskPersonData;
}

export interface TaskPersonData {
  avatar: string;
  name: string;
}

export interface Priority {
  text: string;
  color: string;
  background: string;
}

export type TaskPriority = {
  [key: string]: Priority;
};

export interface FakeData {
  tasks: {
    [key: string]: TaskData;
  };
  columns: {
    [key: string]: ColumnData;
  };
  columnOrder: string[];
}

export interface GithubIssue {
  html_url: string;
  title: string;
  state: string;
  created_at: string;
  body: string;
}
