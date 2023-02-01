import React from "react";
import SyncIcon from "@mui/icons-material/Sync";

import { GithubIssue, TaskData, TaskPersonData } from "../../utility/models";
import { GithubIssues as Issues, Tasks } from "../../utility/types";
import useFetch from "../../hooks/useFetch";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addNewTask } from "../../redux/slices/taskReducer";
import { taskPriority } from "../../utility/TaskPriorities";
import { updateColumn } from "../../redux/slices/columnReducer";

export default function GithubIssues(): JSX.Element {
  const dispatch = useAppDispatch();

  async function handleClick() {
    const githubIssuesUrl =
      "https://api.github.com/repos/CaH4o/Integrify-Finland-Hackathon-january-2023/issues";
    const issues: Issues = await useFetch<Issues>(githubIssuesUrl);
    const tasks: Tasks = [];

    issues.forEach(function (i: GithubIssue) {
      const user: TaskPersonData = {
        avatar: "https://ca.slack-edge.com/T7XMSNG7P-UBZDE3Z0R-ed3bd1625e6a-72",
        name: "Yazan",
        id: 0,
      };
      const task: TaskData = {
        assigned: user,
        description: i.body,
        id: "task-".concat((Math.random() * 100).toString()),
        priority: taskPriority.Medium,
        title: i.title,
      };

      tasks.push(task);
    });

    tasks.forEach(function (t: TaskData) {
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
