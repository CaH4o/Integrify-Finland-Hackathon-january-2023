import { FakeData } from "../utility/models";
import { taskPriority } from "../utility/TaskPriorities";
import { ColumnColors } from "../utility/types";

// const fakeData: FakeData = {
//   tasks: {
//     "task-1": {
//       id: "task-1",
//       title: "Edit text",
//       description: "Need to edit text in journal",
//       priority: taskPriority.Low,
//       assigned: {
//         avatar: "./photo-1438761681033-6461ffad8d80.jpg",
//         name: "Adam Sandler",
//       },
//     },
//     "task-2": {
//       id: "task-2",
//       title: "Create new topic",
//       description: "Create new topic for journal",
//       priority: taskPriority.High,
//       assigned: {
//         avatar: "./photo-1438761681033-6461ffad8d80.jpg",
//         name: "Adam Sandler",
//       },
//     },
//     "task-3": {
//       id: "task-3",
//       title: "Test features",
//       description: "Test some features",
//       priority: taskPriority.Medium,
//       assigned: {
//         avatar: "./photo-1438761681033-6461ffad8d80.jpg",
//         name: "Adam Sandler",
//       },
//     },
//     "task-4": {
//       id: "task-4",
//       title: "Create new topic",
//       description: "Create new topic for journal",
//       priority: taskPriority.Low,
//       assigned: {
//         avatar: "./photo-1438761681033-6461ffad8d80.jpg",
//         name: "Adam Sandler",
//       },
//     },
//     "task-5": {
//       id: "task-5",
//       title: "Edit text",
//       description: "Need to edit text in journal",
//       priority: taskPriority.High,
//       assigned: {
//         avatar: "./photo-1438761681033-6461ffad8d80.jpg",
//         name: "Adam Sandler",
//       },
//     },
//     "task-6": {
//       id: "task-6",
//       title: "Create new topic",
//       description: "Create new topic for journal",
//       priority: taskPriority.High,
//       assigned: {
//         avatar: "./photo-1438761681033-6461ffad8d80.jpg",
//         name: "Adam Sandler",
//       },
//     },
//   },
//   columns: {
//     "column-1": {
//       id: "column-1",
//       title: "Pending",
//       taskIds: ["task-1", "task-2"],
//       color: ColumnColors.Blue,
//     },
//     "column-2": {
//       id: "column-2",
//       title: "In Process",
//       taskIds: ["task-3"],
//       color: ColumnColors.Yellow,
//     },
//     "column-3": {
//       id: "column-3",
//       title: "On Hold",
//       taskIds: [],
//       color: ColumnColors.Red,
//     },
//     "column-4": {
//       id: "column-4",
//       title: "Finished",
//       taskIds: ["task-5", "task-6","task-4"],
//       color: ColumnColors.Green,
//     },
//   },
//   columnOrder: ["column-1", "column-2", "column-3", "column-4"],
// };

export const fakeUsers = [
  {
    avatar: "./photo-1438761681033-6461ffad8d80.jpg",
    name: "Adam Sandler",
    id: 1,
  },
  {
    avatar: "https://ca.slack-edge.com/T7XMSNG7P-U03RLPAAXGW-8145e1f4f722-512",
    name: "Ronja Pietrzykowska",
    id: 2,
  },
  {
    avatar: "https://ca.slack-edge.com/T7XMSNG7P-U01QWRBQ7B5-fb9d1b015d81-512",
    name: "Yasser Shalash",
    id: 3,
  },
  {
    avatar: "https://ca.slack-edge.com/T7XMSNG7P-U04BXPN4HGF-452549b4d13f-512",
    name: "Roman Demianchuk",
    id: 4,
  },
  {
    avatar: "https://ca.slack-edge.com/T7XMSNG7P-U04034MMT5F-db6efbd75e57-512",
    name: "Oleksandr Tertyshnyk",
    id: 5,
  }
]
