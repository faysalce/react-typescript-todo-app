import * as React from "react";

import TodoProvider from "./context/todoContext";
import Todos from "./containers/Todos";
import AddTodo from "./components/AddTodo";
import "./styles.css";

export default function App() {
  return (
    <TodoProvider>
      <main className="App">
        <section className="Todo-section">
          <div className="container">
            <h1 className="header-title">My Todos</h1>
            <AddTodo />
            <Todos />
          </div>
        </section>

      </main>
    </TodoProvider>
  );
}
