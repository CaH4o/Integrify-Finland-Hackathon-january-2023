import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {taskPriority} from "../../utility/TaskPriorities";
import {TaskData} from "../../utility/models";

const initialState: TaskData[] = [
   {id: "task-1",
      title: "Finish columns logic",
      description: "Add create, delete, remove columns",
      priority: taskPriority.Low,
      assigned: {
          avatar: "https://ca.slack-edge.com/T7XMSNG7P-U04BXPN4HGF-452549b4d13f-512",
          name: "Roman Demianchuk",
          id: 4,
      },
    },
    {
        id: "task-2",
        title: "Work on github sync",
        description: "Following GitHub docs implement github sync with issue reporting",
        priority: taskPriority.High,
        assigned: {
            avatar: "https://ca.slack-edge.com/T7XMSNG7P-U04034MMT5F-db6efbd75e57-512",
            name: "Oleksandr Tertyshnyk",
            id: 5,
        },
    },
   {
       id: "task-3",
        title: "Test features",
        description: "Test some features",
        priority: taskPriority.Medium,
        assigned: {
            avatar: "https://ca.slack-edge.com/T7XMSNG7P-U03RLPAAXGW-8145e1f4f722-512",
            name: "Ronja Pietrzykowska",
            id: 2,
        },
   },
   {
       id: "task-4",
        title: "Create new topic",
        description: "Create new topic for journal",
        priority: taskPriority.Low,
        assigned: {
            avatar: "https://ca.slack-edge.com/T7XMSNG7P-U01QWRBQ7B5-fb9d1b015d81-512",
            name: "Yasser Shalash",
            id: 3,
        },
  },
   {
    id: "task-5",
        title: "Edit text",
        description: "Need to edit text in journal",
        priority: taskPriority.High,
        assigned: {
            avatar: "./photo-1438761681033-6461ffad8d80.jpg",
            name: "Adam Sandler",
            id: 1,
        },
  },
   {
    id: "task-6",
        title: "Create new topic",
        description: "Create new topic for journal",
        priority: taskPriority.High,
        assigned: {
            avatar: "https://ca.slack-edge.com/T7XMSNG7P-U01QWRBQ7B5-fb9d1b015d81-512",
            name: "Yasser Shalash",
            id: 3,
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
        return state.filter(task => task.id !== action.payload)
      },
      updateTask: (state, action) => {
        return state.map(task => {
            if(task.id === action.payload.id) {
                return action.payload
            }
            return task;
        })
      },
  },
});

const taskReducer = taskSlice.reducer;
export default taskReducer;

export const { addNewTask, updateTask, removeTask} = taskSlice.actions;

