// import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          ></Task>
        );
      })}
    </>
  );
};

export default Tasks;
