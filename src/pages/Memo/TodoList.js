import { memo } from "react";

function TodoList({ todoList }) {
    console.log("Into todo list");
    return (
        <>
            <h2>List to do must finish today</h2>
            {todoList && todoList.map((todo) => <p>{todo}</p>)}
        </>
    );
}
export default memo(TodoList);
