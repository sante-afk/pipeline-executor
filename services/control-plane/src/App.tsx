import { useState } from "react";
import "./App.css";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensors,
  useSensor,
  type DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Column } from "./components/Column/Column";
import { Input } from "./components/Input/Input";

function App() {
  const [tasks, setTask] = useState<Array<{ id: number; title: string }>>([
    { id: 1, title: "Task1" },
    { id: 2, title: "Task2" },
    { id: 3, title: "Task3" },
  ]);

  const addTask = (title: string): void => {
    setTask((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

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

  const sensor = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <>
      <div className="App">
        <h1>Kanban</h1>
        <DndContext
          sensors={sensor}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <Input onSubmit={addTask} />
          <Column tasks={tasks}></Column>
        </DndContext>
      </div>
    </>
  );
}

export default App;
