import { useCallback, useState } from "react";
import Todos from "./ChildrenCallBack";

export default function ExampleUseCallback() {
    /**
     * useCallback -- trả về một callback function được ghi nhớ ( quá trình ghi nhớ giống như lưu vào bộ nhớ đệm một giá trị để không cần phải tính toán lại)
     * Giúp làm tăng performance bằng cách nó chỉ cập nhật khi dependency thay đổi
     * Giúp kiểm tra xem callback function có thật sự khác 
     CÚ PHÁP:
     const value_name = useMemo(<function>, <dependency>)
     - value_name: kết quả muốn trả về từ function
     - function: hàm muốn thực hiện tính toán
     - Nếu dependency là rỗng, thì chỉ được gọi ở lần đầu tiên khi được mount, trước khi render
     - Nếu dependency có giá trị, thì chỉ được gọi khi giá trị bị thay đổi, trước khi render
     - Nếu không có dependency, useMemo sẽ được gọi trước mỗi lần render
     - Luôn dùng memo khi làm việc với component thì useCallback mới phát huy được hiệu quả

     useCallback và useMemo Hook là tương tự nhau. Sự khác biệt chính là useMemo trả về một giá trị được ghi nhớ và useCallback trả về một hàm được ghi nhớ.
     
     */
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
    return (
        <div>
            <h2>React Hooks - useCallback</h2>
            <>
                <Todos todos={todos} addTodo={addTodo} />
                <hr />
                <div>
                    Count: {count}
                    <button onClick={increment} className="btn btn-success m-1">
                        +
                    </button>
                </div>
            </>
        </div>
    );
}
