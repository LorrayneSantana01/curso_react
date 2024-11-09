import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskList from "../TaskList/TaskList";
import "./TaskItem.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="taskItem">
        <input
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyDown={onKeyDown}
      />
      </div>
    );
  } else {
    return (
      <div className="taskItem">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="To Do">To Do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>
    );
  }
}

TaskList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  tasksState: PropTypes.string.isRequired,
};
