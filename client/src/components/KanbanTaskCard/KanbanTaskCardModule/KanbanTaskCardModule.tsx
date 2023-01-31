import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  MenuItem,
} from "@mui/material";

import { Priority, TaskData } from "../../../utility/models";
import { taskPriority } from "../../../utility/TaskPriorities";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { updateTask } from "../../../redux/slices/taskReducer";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1.3rem",
};

export default function KanbanTaskCardModule(taskParam: TaskData): JSX.Element {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState<TaskData>(taskParam);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const key: string = event.target.name;
    let value: string | Priority;

    if (key === "priority") {
      switch (event.target.value) {
        case "Low":
          value = taskPriority.Low;
          break;
        case "High":
          value = taskPriority.High;
          break;
        default:
          value = taskPriority.Medium;
          break;
      }
    } else {
      value = event.target.value;
    }

    setTask({ ...task, [key]: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(updateTask(task));
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        Edit
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a comment
          </Typography>
          <TextField
            label="Title"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            helperText="Please fill task tile here."
          />
          <TextField
            label="Description"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
            helperText="Please fill task description here."
          />
          <>priority</>
          <TextField
            required
            select
            label="Priority"
            name="priority"
            value={task.priority.text}
            onChange={handleChange}
            helperText="Please select task priority"
          >
            <MenuItem key={taskPriority.Low.text} value={taskPriority.Low.text}>
              {taskPriority.Low.text}
            </MenuItem>
            <MenuItem
              key={taskPriority.Medium.text}
              value={taskPriority.Medium.text}
            >
              {taskPriority.Medium.text}
            </MenuItem>
            <MenuItem
              key={taskPriority.High.text}
              value={taskPriority.High.text}
            >
              {taskPriority.High.text}
            </MenuItem>
          </TextField>
          <Button variant="outlined" size="large" type="submit">
            Update a task
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
