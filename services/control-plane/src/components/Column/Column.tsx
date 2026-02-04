import {
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import "./Column.css";
import { Task } from "../Task/Task";
import { type ColumnType } from "../../Types/column";

type Props = {
  column: ColumnType;
};

export const Column = ({ column }: Props) => {
  return (
    <SortableContext
      items={column.tasks.map((task) => task.id)}
      strategy={verticalListSortingStrategy}
    >
      <div className="column">
        {column.tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id}></Task>
        ))}
      </div>
    </SortableContext>
  );
};
