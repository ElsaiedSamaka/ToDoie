import React, { useState, useEffect } from "react";
export const DataContext = React.createContext();
export const DataProvider = (props) => {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    localStorage.setItem("todosStore", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    const todosStore = JSON.parse(localStorage.getItem("todosStore"));
    if (todosStore) {
      settodos(todosStore);
    }
  }, []);
  return (
    <DataContext.Provider value={[todos, settodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
