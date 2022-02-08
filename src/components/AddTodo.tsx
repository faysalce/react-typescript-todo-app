import * as React from "react";
import { TodoContext } from "../context/todoContext";

const AddTodo: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as ContextType;
  const [formData, setFormData] = React.useState<ITodo | {}>();
  const [taskTitle, setTaskTitle] = React.useState<string>('');

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    });
    setTaskTitle(e.currentTarget.value);
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
    setTaskTitle('');
  };

  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>


        <input onChange={handleForm} type="text" placeholder="Type your todo title here" value={taskTitle} id="title" />
      
      
        <button disabled={formData === undefined ? true : false}>Add Todo</button>

      
    </form>
  );
};

export default AddTodo;
