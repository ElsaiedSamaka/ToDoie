import React, { useContext, useState } from "react";
import { DataContext } from "./../Data/ContextProvider";
function Footer() {
  const [checkAll, setcheckAll] = useState(false);
  const context = useContext(DataContext);
  const [todos, settodos] = context;
  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.isComplete = !checkAll;
    });
    settodos(newTodos);
    setcheckAll(!checkAll);
  };
  const handleDelete = () => {
    const newTodos = todos.filter((todo) => {
      return todo.isComplete === false;
    });
    settodos(newTodos);
    setcheckAll(false);
  };

  return (
    <div className="row">
      <label htmlFor="all">
        <input
          value={checkAll}
          type="checkbox"
          id="all"
          name="all"
          onClick={handleCheckAll}
        />
        all
      </label>
      <p>You have {todos.length} todoies</p>
      <button id="delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Footer;
