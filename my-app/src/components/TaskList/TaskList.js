import "./TaskList.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  const AddTask = () => {
    onAddTask("Nova Tarefa", "To Do");
  };

  return (
    <div className="taskList">
      <div className="titulo">{title}</div>
      <div className="content">
        {tasks.map((taks) => {
          return <div key={taks.id}>{taks.title}</div>;
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
