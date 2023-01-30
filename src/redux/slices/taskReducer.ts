import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Task } from "../../utility/models";
import { Tasks } from "../../utility/types";

const initialState: Tasks = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: function (state: Tasks, action: PayloadAction<Task>) {
      return [action.payload, ...state];
    },
    deleteTask: function (state: Tasks, action: PayloadAction<Task>) {
      return state.filter(function (t: Task) {
        return t.id !== action.payload.id;
      });
    },
    updateTask: function (state: Tasks, action: PayloadAction<Task>) {
      return state.map(function (t: Task) {
        return t.id !== action.payload.id ? t : action.payload;
      });
    },
    upTask: function (state: Tasks, action: PayloadAction<Task>) {
      const index: number = state.findIndex(function (t: Task) {
        return t.id === action.payload.id;
      });

      if (index) {
        const tasks: Tasks = JSON.parse(JSON.stringify(state));
        [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
        return tasks;
      }
    },
    downTask: function (state: Tasks, action: PayloadAction<Task>) {
      const index: number = state.findIndex(function (t: Task) {
        return t.id === action.payload.id;
      });

      if (index < state.length - 1) {
        const tasks: Tasks = JSON.parse(JSON.stringify(state));
        [tasks[index + 1], tasks[index]] = [tasks[index], tasks[index + 1]];
        return tasks;
      }
    },
  },
});

const taskReducer = taskSlice.reducer;
export default taskReducer;
export const { createTask, deleteTask, updateTask, upTask, downTask } =
  taskSlice.actions;
