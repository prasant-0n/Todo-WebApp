import React, { useState } from "react";
import TodoTabs from "./componets/TextArea";
import Form from "./componets/Form";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoTabs todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
