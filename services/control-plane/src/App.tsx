import { useState } from "react";
import "./App.css";
import { DndContext, closestCorners, DragEndEvent } from "@dnd-kit/core";
import { Column } from "./components/Column/Column";
import { arrayMove } from "@dnd-kit/sortable";

function App() {
  const [tasks, setTask] = useState<Array<{ id: number; title: string }>>([
    { id: 1, title: "In progress" },
    { id: 2, title: "In work" },
    { id: 3, title: "All done" },
  ]);

  const getTaskPos = (id: number | string): number =>
    tasks.findIndex((tasks) => tasks.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTask((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPost = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPost);
    });
  };

  return (
    <>
      <div>
        <h1>Kanban</h1>
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <Column tasks={tasks}></Column>
        </DndContext>
      </div>
    </>
  );
}

export default App;
