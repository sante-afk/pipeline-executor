import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import "./Column.css";
import { Task } from "../Task/Task";

export const Column = ({
  tasks,
}: {
  tasks: Array<{ id: number; title: string }>;
}) => {
  return (
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      <div className="column">
        {tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id}></Task>
        ))}
      </div>
    </SortableContext>
  );
};
