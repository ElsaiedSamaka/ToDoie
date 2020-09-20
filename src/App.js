import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import FormInput from "./Components/FormInput";
import TodosList from "./Components/TodosList";
import { DataProvider } from "./Data/ContextProvider";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>TO DO ie</h1>
        <FormInput />
        <TodosList />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
