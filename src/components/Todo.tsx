import * as React from "react";
import TodoInfo from "./TodoInfo";
import EditTodo from "./EditTodo"
type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const deleteThisTodo = (e: any, id: number) => {
    deleteTodo(id);
  }
  const editThisTodo = () => {
    setEdit(!edit);
  }
  return (
    <div className="Card">
      <div>
        <TodoInfo todo={todo} />

        {edit && (<EditTodo editThisTodo={editThisTodo} todo={todo} />)}

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
          className="Card--button"
        >
          {edit ? "Cancle Edit" : "Edit"}
        </button>
        <button
          onClick={(event) => deleteThisTodo(event, todo.id)}
          className="Card--button"
        >
          Delete
        </button>
      </div>

    </div>
  );
};

export default Todo;
