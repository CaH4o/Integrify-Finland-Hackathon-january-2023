//interfaces and models
import {ColumnColors} from "./types";

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
