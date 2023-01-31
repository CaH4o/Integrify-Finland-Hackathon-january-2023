//interfaces and models
import { ColumnColors } from "./types";
import { Tasks, Users } from "./types";


export interface UserState extends TaskPersonData {
  loading: boolean;
  error: boolean;
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
  date: string;
  description: string;
  priority: Priority;
  creator: TaskPersonData;
  assigned: TaskPersonData;
}

export interface TaskPersonData {
  avatar: string;
  name: string;
  position: string;
  email: string;
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
