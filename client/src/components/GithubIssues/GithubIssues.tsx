import React from "react";
import SyncIcon from "@mui/icons-material/Sync";

import { GithubIssue, TaskData, TaskPersonData } from "../../utility/models";
import { GithubIssues as Issues, Tasks } from "../../utility/types";
import useFetch from "../../hooks/useFetch";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { createTask } from "../../redux/slices/taskReducer";
import { taskPriority } from "../../utility/TaskPriorities";

export default function GithubIssues(): JSX.Element {
  const dispatch = useAppDispatch();
  const user: TaskPersonData = { avatar: "", name: "" };

  async function handleClick() {
    const githubIssuesUrl =
      "https://api.github.com/repos/CaH4o/Integrify-Finland-Hackathon-january-2023/issues";
    const issues: Issues = await useFetch<Issues>(githubIssuesUrl);
    const tasks: Tasks = [];

    issues.forEach(function (i: GithubIssue) {
      const task: TaskData = {
        assigned: user,
        description: i.body,
        id: "0",
        priority: taskPriority.Medium,
        title: i.title,
      };
      tasks.push(task);
    });

    tasks.forEach(function (t: TaskData) {
      dispatch(createTask(t));
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
