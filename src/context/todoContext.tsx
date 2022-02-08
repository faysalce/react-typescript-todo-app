import React, { createContext, useState, useEffect } from "react";

const localStorageTodoKey = "react_todos_data";

const getStorageTodos = () => {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(localStorageTodoKey);
    const initial = saved !== null ? JSON.parse(saved) : [];
    return initial;
  }
}
const sortByDate = (a: ITodo, b: ITodo) => b.date - a.date;
const saveStorageTodos = (data: ITodo[]) => {
  // getting stored value
  localStorage.setItem(localStorageTodoKey, JSON.stringify(data));

}
export const TodoContext = createContext<ContextType | null>(null);


const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(getStorageTodos);

  useEffect(() => {

    saveStorageTodos(todos);


  }, [todos]);
  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), // not really unique - but fine for this example
      title: todo.title,
      status: false,
      date: Date.now(),
    };
    let sortedtods = [...todos, newTodo].sort(sortByDate);
    setTodos(sortedtods);
  };

  const updateTodo = (id: number) => {

    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status
          }
        }
        return todo
      }).sort(({ date: a }, { date: b }) => b - a))
  };
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id).sort(sortByDate))

  };
  const editTodo = (id: number, title: string) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
            date: Date.now(),

          }
        }
        return todo
      }).sort(sortByDate))

  };
  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
