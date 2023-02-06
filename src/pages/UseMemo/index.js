import { useMemo, useState } from "react";

export default function ExampleUseMemo() {
    const [count, setCount] = useState(0);
    const [countMemo, setCountMemo] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    /**
     * useMemo -- trả về một giá trị được ghi nhớ ( quá trình ghi nhớ giống như lưu vào bộ nhớ đệm một giá trị để không cần phải tính toán lại)
     * Giúp làm tăng performance bằng cách nó chỉ cập nhật khi dependency thay đổi
     CÚ PHÁP:
     const value_name = useMemo(<function>, <dependency>)
     - value_name: kết quả muốn trả về từ function
     - function: hàm muốn thực hiện tính toán
     - Nếu dependency là rỗng, thì chỉ được gọi ở lần đầu tiên khi được mount, trước khi render
     - Nếu dependency có giá trị, thì chỉ được gọi khi giá trị bị thay đổi, trước khi render
     - Nếu không có dependency, useMemo sẽ được gọi trước mỗi lần render

     */

    const calculationMemo = useMemo(() => {
        console.log("useMemo ");
        return expensiveCalculationMemo(count);
    }, [count]);

    return (
        <div>
            {console.log("Redering")}
            <div>
                <h1>Example useMemo</h1>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo} className="btn btn-primary m-1">
                    Add Todo
                </button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment} className="btn btn-success m-1">
                    +
                </button>
                <h2>Expensive Calculation</h2>
                {calculation}
                <h2>Expensive Calculation with Memo</h2>
                {calculationMemo}
            </div>
        </div>
    );
}

const expensiveCalculation = (num) => {
    console.log("Calculating... not use memo");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

const expensiveCalculationMemo = (num) => {
    console.log("Calculating... use memo");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};
