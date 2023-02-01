import React from "react";
import SyncIcon from "@mui/icons-material/Sync";

import { RootState } from "../../redux/store";
import { GithubIssue, TaskData, TaskPersonData } from "../../utility/models";
import { GithubIssues as Issues, Tasks } from "../../utility/types";
import useFetch from "../../hooks/useFetch";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addNewTask } from "../../redux/slices/taskReducer";
import { taskPriority } from "../../utility/TaskPriorities";
import { updateColumn } from "../../redux/slices/columnReducer";

export default function GithubIssues(): JSX.Element {
  const dispatch = useAppDispatch();
  const tasks: Tasks = useAppSelector(function (state: RootState) {
    return state.task;
  });

  async function handleClick() {
    const githubIssuesUrl =
      "https://api.github.com/repos/CaH4o/Integrify-Finland-Hackathon-january-2023/issues";
    const issues: Issues = await useFetch<Issues>(githubIssuesUrl);
    const addedTasks: Tasks = [];

    issues.forEach(function (i: GithubIssue) {
      const user: TaskPersonData = {
        avatar:
          "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
        name: "GitHub",
        id: 0,
      };

      const task: TaskData = {
        assigned: user,
        description: i.body,
        id: "task-" + i.id.toString(),
        priority: taskPriority.Medium,
        title: i.title,
      };

      const find: number = tasks.findIndex(function (t: TaskData) {
        return t.id === task.id;
      });

      if (find === -1) {
        addedTasks.push(task);
      }
    });

    addedTasks.forEach(function (t: TaskData) {
      dispatch(addNewTask(t));
      dispatch(updateColumn({ columnId: "column-1", newTask: t }));
    });
  }

  return (
    <button
      className="header-content_navbar-item header-content_navbar-btn"
      onClick={handleClick}
    >
      <SyncIcon />
      <h4>Sync GitHub</h4>
    </button>
  );
}
