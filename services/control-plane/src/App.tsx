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
import { HBox } from "./components/Layouts/HBox";
import { VBox } from "./components/Layouts/VBox";
import { type ColumnType } from "./types/column";
import StoragePage from "./components/DataStorage/StoragePage";
import Profile from "./components/Profile/Profile";

function App() {
  const [columns, setColumns] = useState<ColumnType[]>([
    {
      id: 0,
      title: "Init Task",
      tasks: [
        { id: 0, title: "task1" },
        { id: 1, title: "task2" },
        { id: 2, title: "task3" },
      ],
    },
    {
      id: 1,
      title: "Work Task",
      tasks: [],
    },
    {
      id: 2,
      title: "Done Task",
      tasks: [],
    },
  ]);

  const addTask = (title: string): void => {
    setColumns((columns) =>
      columns.map((col, index) => {
        if (index !== 0) return col;
        const newTask = {
          id: col.tasks.length + 1,
          title,
        };
        return {
          ...col,
          tasks: [...col.tasks, newTask],
        };
      }),
    );
  };

  const findColumnByTaskId = (taskId: number) =>
    columns.find((column) => column.tasks.some((task) => task.id === taskId));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fromColumn = findColumnByTaskId(active.id as number);
    const toColumn = findColumnByTaskId(over.id as number);
    if (!fromColumn || !toColumn) return;

    if (fromColumn.id === toColumn.id) {
      const oldIndex = fromColumn.tasks.findIndex(
        (item) => item.id === active.id,
      );
      const newIndex = fromColumn.tasks.findIndex(
        (item) => item.id === over.id,
      );

      setColumns((columns) =>
        columns.map((col) => {
          if (col.id !== fromColumn.id) return col;
          return {
            ...col,
            tasks: arrayMove(col.tasks, oldIndex, newIndex),
          };
        }),
      );
    }
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
      <div className="profileContainer">
        <Profile />
        <button className="profileButton">profile</button>
      </div>

      <div className="App">
        <h1>Control plane</h1>
        <DndContext
          sensors={sensor}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <Input onSubmit={addTask} />
          <div className="container">
            <HBox>
              <h2>Data store</h2>
              <StoragePage />
            </HBox>
            <HBox>
              <h2>In Progress</h2>
              <Column column={columns[0]}></Column>
            </HBox>
            <HBox>
              <h2>In Work</h2>
              <Column column={columns[1]}></Column>
            </HBox>
            <HBox>
              <h2>Is Done</h2>
              <Column column={columns[2]}></Column>
            </HBox>
          </div>
        </DndContext>
      </div>
    </>
  );
}

export default App;
