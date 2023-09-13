import React from "react";
import { TodoTaskProps } from "../Types/TodoTaskProps";

const TodoTask: React.FC<TodoTaskProps> = ({ task, completeTask }) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        x
      </button>
    </div>
  );
};

export default TodoTask;