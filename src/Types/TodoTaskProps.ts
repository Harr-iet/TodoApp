import { TaskProps } from "./TaskProps";

export interface TodoTaskProps {
    task: TaskProps;
    completeTask(taskNameToDelete: string): void;
  }