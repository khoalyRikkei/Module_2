import { useReducer } from "react";

export default function ExampleUseReducer() {
    const [state, dispatch] = useReducer(reducer, { mark: 10 });

    /**
     * Dùng useReducer để quản lý các state một cách hiệu quả hơn. Ví dụ như fetch data từ API: status, data, error
     * @syntax const [state, dispatch] = useReducer(reducer, initialArg, init?)
     * @param reducer: là một function được tạo ra để cập nhật trạng thái của state tùy thuộc vào hành động được đưa vào. Có hai đối số là state và action
     * @param initialArg: giá trị ban đầu của state, có thể thuộc kiểu non-primitive hoặc primitive
     * @param init (optional): là hàm khởi tạo tính toán giá trị initiaArg trước khi làm giá trị ban đầu của state
     * @param useReducer sẽ return 2 giá trị: 1. state hiện tại (lần đầu sẽ là initialArg), 2. function dispatch giúp cập nhật hành động và re-render
     * @param dispatch là một function được trả về bởi useReducer, dispatch thêm vào các đối sối để reducer dựa vào đó cập nhật lại state
     *
     *
     */

    return (
        <>
            <h1>Hello React UseReducer</h1>
            <button
                onClick={() => dispatch({ type: "up" })}
                className="btn btn-primary m-1"
            >
                Up
            </button>
            <button
                onClick={() => dispatch({ type: "down" })}
                className="btn btn-danger m-1"
            >
                Down
            </button>
            <button
                onClick={() => dispatch({ type: "x10" })}
                className="btn btn-success m-1"
            >
                Up x10
            </button>
            <p>
                Your mark is <b>{state.mark}</b>
            </p>
        </>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case "up":
            return { mark: state.mark + 1 };
        case "down":
            return { mark: state.mark - 1 };
        case "x10":
            return { mark: state.mark * 10 };
        default:
            throw Error("Unknown action");
    }
}
