import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Column, TaskData } from "../../utility/models";
import { Columns } from "../../utility/types";

const initialState: Columns = [
  { name: "To Do", tasks: [] },
  { name: "Done", tasks: [] },
];

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    createColumn: function (state: Columns, action: PayloadAction<Column>) {
      return [...state, action.payload];
    },
    deleteColumn: function (state: Columns, action: PayloadAction<Column>) {
      const column: Column = state.find(function (c: Column) {
        return c.name === action.payload.name;
      })!;

      if (!column.tasks.length) {
        return state.filter(function (c: Column) {
          return c.name !== action.payload.name;
        });
      }
    },
    addedTask: function (state: Columns, action: PayloadAction<Column>) {
      return state.map(function (c: Column) {
        return c.name === action.payload.name
          ? { ...c, task: [...c.tasks, ...action.payload.tasks] }
          : c;
      });
    },
    removeTask: function (state: Columns, action: PayloadAction<Column>) {
      let column: Column = state.find(function (c: Column) {
        return c.name === action.payload.name;
      })!;

      column = {
        ...column,
        tasks: column.tasks.filter(function (t_s: TaskData) {
          return action.payload.tasks.some(function (t_pa: TaskData) {
            return t_s.id !== t_pa.id;
          });
        }),
      };

      return state.map(function (c: Column) {
        return c.name === column.name ? column : c;
      });
    },
    moveLeft: function (state: Columns, action: PayloadAction<Column>) {
      const index: number = state.findIndex(function (c: Column) {
        return c.name === action.payload.name;
      });

      if (index) {
        const columns: Columns = JSON.parse(JSON.stringify(state));
        [columns[index - 1], columns[index]] = [
          columns[index],
          columns[index - 1],
        ];
        return columns;
      }
    },
    moveRight: function (state: Columns, action: PayloadAction<Column>) {
      const index: number = state.findIndex(function (c: Column) {
        return c.name === action.payload.name;
      });

      if (index < state.length - 1) {
        const columns: Columns = JSON.parse(JSON.stringify(state));
        [columns[index + 1], columns[index]] = [
          columns[index],
          columns[index + 1],
        ];
        return columns;
      }
    },
  },
});

const columnReducer = columnSlice.reducer;
export default columnReducer;
export const {
  createColumn,
  deleteColumn,
  addedTask,
  removeTask,
  moveLeft,
  moveRight,
} = columnSlice.actions;
