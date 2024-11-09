import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskList from "../TaskList/TaskList";

export default function TaskItem({id, title, taskState, onTaskUpdate}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title);

    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        setEditableTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState)
    };

    const onKeyDown = (event) => {
        if (event.key === 'Enter'){
            setIsEditing(false);
        }
    }

    if (isEditing) {
        return <input type="text" value={editableTitle} onChange={onTitleChange} onKeyDown={onKeyDown}/>;
    } else {
        return <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
    }
}

TaskList.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    tasksState: PropTypes.string.isRequired,
  };