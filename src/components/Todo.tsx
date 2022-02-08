import * as React from "react";
import { TodoContext } from "../context/todoContext";
import TodoInfo from "./TodoInfo";
import EditTodo from "./EditTodo"
type Props = {
  todo: ITodo;
};

const Todo: React.FC<Props> = ({ todo}) => {
  const { updateTodo, deleteTodo } = React.useContext(TodoContext) as ContextType;

  const [edit, setEdit] = React.useState<boolean>(false);
  const deleteThisTodo = (e: any, id: number) => {
    deleteTodo(id);
  }
  const editThisTodo = () => {
    setEdit(!edit);
  }
  return (
    <div className="Card">
      <div className="Card-info">
        <div>
          <TodoInfo todo={todo} />
        </div>
        <div>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => updateTodo(todo.id)}
          />
          <span style={{ margin: "0 1rem" }}>Complete</span>
          <button
            onClick={() => editThisTodo()}
            className="Card--button edit---button"
          >
            {edit ? "Cancle" : "Edit"}
          </button>
          <button
            onClick={(event) => deleteThisTodo(event, todo.id)}
            className="Card--button delete---button"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="Card-edit-from-wrap">
        {edit && (<EditTodo editThisTodo={editThisTodo} todo={todo} />)}

      </div>
    </div>
  );
};

export default Todo;
