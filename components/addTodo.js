import React, { useState } from "react";

const [todos, setTodos] = useState([]);

const addTodo = (text) => {
  setTodos([
    ...todos,
    { id: Math.random().toString(), textValue: text, checked: false },
  ]);
};
