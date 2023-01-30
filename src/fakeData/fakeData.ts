import {FakeData} from "../utility/models";
import {TaskPriority} from "../utility/TaskPriorities";
import {ColumnColors} from "../utility/types";

const fakeData:FakeData = {
    tasks: {
        'task-1': {
            id: 'task-1',
            title: 'Edit text',
            date: 'May 27, 2019 12:06 PM',
            description: 'Need to edit text in journal',
            priority: TaskPriority.Low,
            creator: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Jenny Wilson',
                position: 'Marketing',
                email: 'henny@mail.com',
            },
            assigned: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Adam Sandler',
                position: 'Software',
                email: 'adam.sandler@gmail.com',
            },
        },
         'task-2': {
            id: 'task-2',
            title: 'Create new topic',
            date: 'February 22, 2023 12:15 PM',
            description: 'Create new topic for journal',
            priority: TaskPriority.High,
            creator: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Jenny Wilson',
                position: 'Marketing',
                email: 'henny@mail.com',
            },
            assigned: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Adam Sandler',
                position: 'Software',
                email: 'adam.sandler@gmail.com',
            },
        },
         'task-3': {
            id: 'task-3',
            title: 'Test features',
            date: 'January 18, 2025 12:06 PM',
            description: 'Test some features',
            priority: TaskPriority.Medium,
            creator: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Someone New',
                position: 'Marketing',
                email: 'henny@mail.com',
            },
            assigned: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Adam Sandler',
                position: 'Software',
                email: 'adam.sandler@gmail.com',
            },
        },
         'task-4': {
            id:  'task-4',
            title: 'Create new topic',
            date: 'February 22, 2023 12:15 PM',
            description: 'Create new topic for journal',
            priority: TaskPriority.Low,
            creator: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Jenny Wilson',
                position: 'Marketing',
                email: 'henny@mail.com',
            },
            assigned: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Adam Sandler',
                position: 'Software',
                email: 'adam.sandler@gmail.com',
            },
        },
         'task-5': {
            id: 'task-5',
            title: 'Edit text',
            date: 'May 27, 2019 12:06 PM',
            description: 'Need to edit text in journal',
            priority: TaskPriority.High,
            creator: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Jenny Wilson',
                position: 'Marketing',
                email: 'henny@mail.com',
            },
            assigned: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Adam Sandler',
                position: 'Software',
                email: 'adam.sandler@gmail.com',
            },
        },
         'task-6': {
            id: 'task-6',
            title: 'Create new topic',
            date: 'February 22, 2023 12:15 PM',
            description: 'Create new topic for journal',
            priority: TaskPriority.High,
            creator: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Jenny Wilson',
                position: 'Marketing',
                email: 'henny@mail.com',
            },
            assigned: {
                avatar: './photo-1438761681033-6461ffad8d80.jpg',
                name: 'Adam Sandler',
                position: 'Software',
                email: 'adam.sandler@gmail.com',
            },
        },
    },
    columns : {
        'column-1': {
            id:  'column-1',
            title: "Pending",
            taskIds: ['task-1', 'task-2'],
            color: ColumnColors.Blue,
        },
        'column-2': {
            id: 'column-2',
            title: "In Process",
            taskIds: ['task-3'],
            color: ColumnColors.Yellow,
        },
        'column-3': {
            id: 'column-3',
            title: "On Hold",
            taskIds: ['task-4'],
            color: ColumnColors.Red,
        },
        'column-4': {
            id: 'column-4',
            title: "Finished",
            taskIds: ['task-5','task-6'],
            color: ColumnColors.Green,
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
}
export default fakeData;