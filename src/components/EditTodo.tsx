import * as React from "react";
import { TodoContext } from "../context/todoContext";
type PropsEdit = {
  todo: ITodo;
  editThisTodo: () => void;
};
const EditTodo: React.FC<PropsEdit> = ({editThisTodo,todo}) => {
  const { editTodo } = React.useContext(TodoContext) as ContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();
  const [taskTitle, setTaskTitle] = React.useState<string>(todo.title);

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    });
    setTaskTitle(e.currentTarget.value);
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    editTodo(todo.id,taskTitle);
    editThisTodo();

  };

  return (
    <form className="Edit-form" onSubmit={(e) => handleSaveTodo(e, formData)}>


        <input onChange={handleForm} type="text" placeholder="Title" value={taskTitle} id="title" />
      
      
        <button disabled={formData === undefined ? true : false}>Update</button>

      
    </form>
  );
};

export default EditTodo;