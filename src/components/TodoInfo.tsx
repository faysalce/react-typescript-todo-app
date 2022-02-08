
type PropsInfo = {
    todo: ITodo;
};
const TodoInfo: React.FC<PropsInfo> = ({ todo }) => {


    const checkTodo: string = todo.status ? `line-through` : "";

    return (
        <div className="Card--text">
            <h1 className={checkTodo}>{todo.title}</h1>
            <span className={checkTodo}>{new Date(todo.date).toUTCString()}</span>
        </div>
    );
}
export default TodoInfo;