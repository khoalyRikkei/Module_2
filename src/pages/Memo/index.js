import { memo, useState } from "react";
import TodoList from "./TodoList";

export default function ExampleMemo() {
    const [count, setCount] = useState(0);
    const [todoList, setTodoList] = useState([]);

    /**
     * memo -- tránh re-render lại component nếu props truyền vào không có sự thay đổi 
     * Giúp làm tăng performance 

     CÚ PHÁP:
     memo(component, arePropsEqual?)
     * bọc component trong memo
     * arePropsEqual: là một function chấp nhận 2 đối số là old props và new props . 
     -->Giá trị return kiểu boolean quyết định có re-render lại components hay không, nếu true --> không re-render, nếu false -> re-render
     -->Chỉ sử dụng khi muốn custom lại

     */
    return (
        <>
            <h1>Hello React Memo</h1>
            <button
                onClick={() => setCount(count + 1)}
                className="btn btn-primary m-1"
            >
                Up count
            </button>
            <button
                onClick={() => setTodoList((pre) => [...pre, "new todo"])}
                className="btn btn-primary m-1"
            >
                Add Todo
            </button>
            <Count count={count} />
            {/* Cách 1: sử dụng memo bọc component trước khi export default*/}
            <TodoList todoList={todoList} />
            <TodoList2 todoList={todoList} />
        </>
    );
}

function Count({ count }) {
    console.log("into count");
    return <h2>Count: {count}</h2>;
}

// Cách 2: khai báo biến vào bọc component con vào bên trong
const TodoList2 = memo(function TodoList2({ todoList }) {
    console.log("Into todo list 2");
    return (
        <>
            <h2>List to do must finish today 2</h2>
            {todoList && todoList.map((todo) => <p>{todo}</p>)}
        </>
    );
}, arePropsEqual);

// Nâng cao
function arePropsEqual(oldProps, newProps) {
    // Function chấp nhận 2 đối số truyền
    console.log("check old props: ", oldProps);
    console.log("check new props: ", newProps);

    return (
        oldProps.todoList.length === newProps.todoList.length &&
        oldProps.todoList.every((oldProp, index) => {
            return oldProp === newProps.todoList[index];
        })
    );
    // Nếu return là true ==> component sẽ không re-render
    // Nếu return là false ==> component sẽ re-render
}
