import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {taskPriority} from "../../utility/TaskPriorities";
import {TaskData} from "../../utility/models";

const initialState: TaskData[] = [
   {id: "task-1",
      title: "Edit text",
      description: "Need to edit text in journal",
      priority: taskPriority.Low,
      assigned: {
    avatar: "./photo-1438761681033-6461ffad8d80.jpg",
        name: "Adam Sandler",},
},
   {id: "task-2",
        title: "Create new topic",
        description: "Create new topic for journal",
        priority: taskPriority.High,
        assigned: {
      avatar: "./photo-1438761681033-6461ffad8d80.jpg",
          name: "Adam Sandler",},
  },
   {id: "task-3",
        title: "Test features",
        description: "Test some features",
        priority: taskPriority.Medium,
        assigned: {
      avatar: "./photo-1438761681033-6461ffad8d80.jpg",
          name: "Adam Sandler",},
  },
   {id: "task-4",
        title: "Create new topic",
        description: "Create new topic for journal",
        priority: taskPriority.Low,
        assigned: {
      avatar: "./photo-1438761681033-6461ffad8d80.jpg",
          name: "Adam Sandler",},
  },
   {
    id: "task-5",
        title: "Edit text",
        description: "Need to edit text in journal",
        priority: taskPriority.High,
        assigned: {
      avatar: "./photo-1438761681033-6461ffad8d80.jpg",
          name: "Adam Sandler",
    },
  },
   {
    id: "task-6",
        title: "Create new topic",
        description: "Create new topic for journal",
        priority: taskPriority.High,
        assigned: {
      avatar: "./photo-1438761681033-6461ffad8d80.jpg",
          name: "Adam Sandler",
    },
  },
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
      addNewTask: (state, action) => {
        return [...state, action.payload]
      },
      removeTask: (state, action) => {
        console.log(action)
      }
  },
});

const taskReducer = taskSlice.reducer;
export default taskReducer;

export const { addNewTask } = taskSlice.actions;

