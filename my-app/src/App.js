import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const AddTask = (title, state) => {
    const newTask = {
      id: generateId,
      title,
      state,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter(tasks.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="To do"
          onAddTask={AddTask}
          taskState="To do"
          tasks={tasks.filter((t) => t.state === "To do")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Doing"
          onAddTask={AddTask}
          taskState="Doing"
          tasks={tasks.filter((t) => t.state === "Doing")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Done"
          onAddTask={AddTask}
          taskState="Done"
          tasks={tasks.filter((t) => t.state === "Done")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
