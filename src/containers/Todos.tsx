import * as React from "react";

import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";

const Todos = () => {
  const { todos, updateTodo, deleteTodo, editTodo } = React.useContext(TodoContext) as ContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo}  todo={todo} />
      ))}
    </>
  );
};

export default Todos;
