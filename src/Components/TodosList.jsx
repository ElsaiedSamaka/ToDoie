import React, { useContext } from "react";
import TodoieItem from "./TodoieItem";
import { DataContext } from "./../Data/ContextProvider";

function TodosList() {
  const context = useContext(DataContext);
  const [todos, settodos] = context;
  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (id === index) {
        todo.isComplete = !todo.isComplete;
      }
    });
    settodos(newTodos);
  };
  const handleOnEditingTask = (editedTask, id) => {
    const newTodos = [...todos];
    newTodos.forEach( ( todo, index ) => {
      if (id === index) {
        todo.name = editedTask
      } 
    } );
    settodos( newTodos );
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoieItem
          todo={todo}
          key={index}
          id={index}
          checkComplete={switchComplete}
          handleOnEditingTask={handleOnEditingTask}
        />
      ))}
    </ul>
  );
}

export default TodosList;
