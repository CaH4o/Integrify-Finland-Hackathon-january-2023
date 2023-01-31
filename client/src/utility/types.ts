//types
import { Column, GithubIssue, TaskData, TaskPersonData } from "./models";

export enum ColumnColors {
  Red = "#EB5757",
  Green = "#27AE60",
  Yellow = "#F2C94C",
  Blue = "#2D9CDB",
  Orange = "#F2994A",
  Purple = "#9B51E0",
  Grey = "#4F4F4F",
}

export type Tasks = TaskData[];
export type Columns = Column[];
export type Users = TaskPersonData[];
export type GithubIssues = GithubIssue[];
