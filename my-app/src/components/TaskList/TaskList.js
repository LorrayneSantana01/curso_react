import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";
import PropTypes from "prop-types";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const AddTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="taskList">
      <div className="titulo">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </div>
      <button onClick={AddTask}>Adicionar Tarefa</button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
