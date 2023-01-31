import mongoose, { Document } from 'mongoose';

interface TaskPersonData {
  avatar: string;
  name: string;
}

interface Priority {
  text: string;
  color: string;
  background: string;
}

export type TaskDocument = Document & {
  title: string;
  assigned: TaskPersonData;
  description: string;
  priority: Priority;
};

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: [50, 'Title must be at most 50 characters'],
    trim: true,
  },
  assigned: {
    avatar: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  description: {
    type: String,
  },
  priority: {
    text: {
      type: String,
    },
    color: {
      type: String,
    },
    background: {
      type: String,
    },
  },
});

export default mongoose.model<TaskDocument>('Task', taskSchema);
