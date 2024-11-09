import React ,{ useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';

const task = {
  id: 0,
  title: 'Nova Tarefa',
  state: 'pendente'
};

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
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  return (
    <div className="App">
    <Navbar/>
    <div className='container'>
      <TaskList title="To do" onAddTask={ AddTask } tasks={ tasks }/>
    </div>
    </div>
  );
}