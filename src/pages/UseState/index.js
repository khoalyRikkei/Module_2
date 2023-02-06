import { useState } from "react";

export default function ExampleUseState() {
    /**
     CÚ PHÁP:
     const [state, setState] = useState(value)
     - state: khai báo biến state
     - setState: Phương thức dùng để cập nhật lại state
     - value: giá trị ban đầu của state

     ** Mỗi khi setState cập nhật lại giá trị của state, thì sẽ re-render 

     */
    const [count, setCount] = useState(0);
    // Kiểm tra render
    console.log("Before Redering...");
    return (
        <>
            {console.log("Redering...")}
            <button
                onClick={() => setCount(count + 1)}
                className="btn btn-primary m-1"
            >
                Tăng
            </button>
            <button
                onClick={() => setCount(count - 1)}
                className="btn btn-danger m-1"
            >
                Giảm
            </button>
            <h2>Giá trị count: {count}</h2>
        </>
    );
}
