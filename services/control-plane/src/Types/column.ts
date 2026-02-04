import { type TaskType } from "./task";

export type ColumnType = {
  id: number;
  title: string;
  tasks: TaskType[];
};
