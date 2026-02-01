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
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { Column } from "./components/Column/Column";
import { Input } from "./components/Input/Input";
import { HBox } from "./components/Layouts/HBox";
import { VBox } from "./components/Layouts/VBox";

function App() {
  const [inProgress, setInProgress] = useState<
    Array<{ id: number; title: string }>
  >([
    { id: 1, title: "Task1" },
    { id: 2, title: "Task2" },
    { id: 3, title: "Task3" },
  ]);

  const [inWork] = useState<Array<{ id: number; title: string }>>([
    { id: 4, title: "Task4" },
    { id: 5, title: "Task5" },
  ]);

  const [isDone] = useState<Array<{ id: number; title: string }>>([
    { id: 6, title: "Task6" },
    { id: 7, title: "Task7" },
  ]);

  const addTask = (title: string): void => {
    setInProgress((inProgress) => [
      ...inProgress,
      { id: inProgress.length + 1, title },
    ]);
  };

  const getTaskPos = (id: number | string): number =>
    inProgress.findIndex((inProgress) => inProgress.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setInProgress((inProgress) => {
      const originalPos = getTaskPos(active.id);
      const newPost = getTaskPos(over.id);

      return arrayMove(inProgress, originalPos, newPost);
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
          <VBox>
            <Input onSubmit={addTask} />
            <div className="container">
              <VBox>
                <SortableContext items={inProgress}>
                  <h2>In Progress</h2>
                  <Column tasks={inProgress}></Column>
                </SortableContext>
              </VBox>

              <VBox>
                <SortableContext items={inWork}>
                  <h2>In Work</h2>
                  <Column tasks={inWork}></Column>
                </SortableContext>
              </VBox>

              <VBox>
                <SortableContext items={isDone}>
                  <h2>Is Done</h2>
                  <Column tasks={isDone}></Column>
                </SortableContext>
              </VBox>
            </div>
          </VBox>
        </DndContext>
      </div>
    </>
  );
}

export default App;
