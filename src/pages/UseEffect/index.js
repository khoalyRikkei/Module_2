import { useEffect, useState } from "react";

export default function ExampleUseEffect() {
    const [mark, setMark] = useState(0);
    const [result, setResult] = useState("");
    const [count, setCount] = useState({ point: 0 });

    /**
     * CÚ PHÁP
     * useEffect(<function>, dependency>)
        - Chỉ được gọi sau mỗi lần render 
        - Không trả về bất cứ giá trị nào
        - Nếu dependency là rỗng, thì chỉ được gọi ở lần đầu tiên khi được mount
        - Nếu dependency có giá trị, thì chỉ được gọi khi giá trị bị thay đổi
        - Nếu không có dependency, useEffect sẽ được gọi sau mỗi lần render
        
     */

    console.log("Before Rendering...1");

    // - Nếu dependency là rỗng, thì chỉ được gọi ở lần đầu tiên khi được mount
    useEffect(() => {
        console.log("Render once called when mount");
    }, []);

    // - Nếu dependency là array có giá trị, thì chỉ được gọi khi giá trị bị thay đổi
    useEffect(() => {
        console.log("render when mark changed");
        switch (true) {
            case mark >= 8:
                setResult("Giỏi");
                break;
            case mark >= 6.5:
                setResult("Khá");
                break;
            case mark >= 5:
                setResult("Trung bình");
                break;
            default:
                setResult("Yếu");
        }
    }, [mark]);

    // - Không nên set giá trị dependency là kiểu dứ liệu tham chiếu
    useEffect(() => {
        console.log("Value of count", count);
    }, [count]);
    console.log("Before Rendering...2");
    return (
        <>
            {console.log("Rendering...")}
            <button
                onClick={() => setMark(mark + 1)}
                className="btn btn-primary m-1"
            >
                Tăng
            </button>
            <button
                onClick={() => setMark(mark - 1)}
                className="btn btn-danger m-1"
            >
                Giảm
            </button>
            <h2>
                Điểm của bạn là: {mark} - Học lực: {result}
            </h2>
            <button
                onClick={() => setCount({ ...count })}
                className="btn btn-primary m-1"
            >
                Change count
            </button>
        </>
    );
}
