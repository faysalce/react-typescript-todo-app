interface ITodo {
  id: number;
  title: string;
  status: boolean;
  date: number;
}

type ContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number,title:string) => void;

};
