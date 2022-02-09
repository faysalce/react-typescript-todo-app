
type PropsInfo = {
    todo: ITodo;
};
const TodoInfo: React.FC<PropsInfo> = ({ todo }) => {
    const checkTodo: string = todo.status ? `line-through` : "";

    return (
        <div className="Card--text">
            <h2 className={checkTodo}>{todo.title}</h2>
            <span className={checkTodo}>{new Date(todo.date).toUTCString()}</span>
        </div>
    );
}
export default TodoInfo;