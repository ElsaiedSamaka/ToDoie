import React, { useState } from "react";

function TodoieItem({ todo, id, checkComplete, handleOnEditingTask }) {
  const [onEdit, setonEdit] = useState(false);
  const [editedTask, seteditedTask] = useState(todo.name);
  const handleEdit = () => {
    setonEdit(true);
  };

  const handleSave = (id) => {
    setonEdit(false);
    if (editedTask) {
      handleOnEditingTask(id, editedTask);
    } else {
      seteditedTask(todo.name);
    }
  };

  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editingInput"
          value={editedTask}
          onChange={(e) => {
            seteditedTask(e.target.value.toLowerCase());
          }}
        />
        <button onClick={handleSave}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.isComplete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.isComplete}
            onChange={() => {
              checkComplete(id);
            }}
          />
          {todo.name}
        </label>
        <button disabled={todo.isComplete} onClick={handleEdit}>
          Edit
        </button>
      </li>
    );
  }
}

export default TodoieItem;
