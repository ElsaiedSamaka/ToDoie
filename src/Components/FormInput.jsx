import React, { useState, useContext } from "react";
import { DataContext } from "./../Data/ContextProvider";
function FormInput() {
  const context = useContext(DataContext);
  const [todos, settodos] = context;
  const [task, settask] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    settodos([...todos, { name: task, isComplete: false }]);
    settask("");
  };

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        id="todoie"
        name="todoie"
        required
        placeholder="what needs to be done"
        value={task}
        onChange={(e) => settask(e.target.value.toLowerCase())}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default FormInput;
