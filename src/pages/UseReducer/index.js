import { useReducer } from "react";

export default function ExampleUseReducer() {
    const [state, dispatch] = useReducer(reducer, { mark: 10 });
    const [stateOrder, dispatchOrder] = useReducer(reducerOrder, orderList);

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
            <p>Your mark is {state.mark}</p>
            <br />
            <h1>Manage Order</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID order</th>
                        <th>Table</th>
                        <th>ordered product</th>
                        <th>Amount</th>
                        <th>order status</th>
                        <th>pay order</th>
                    </tr>
                </thead>
                <tbody>
                    {stateOrder &&
                        stateOrder.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.table}</td>
                                <td>
                                    {item.products &&
                                        item.products.map((product) => (
                                            <p key={product.id}>
                                                {product.name} -{" "}
                                                {product.quantity}
                                            </p>
                                        ))}
                                </td>
                                <td>{item.totalBill} VND</td>
                                <td>
                                    {item.orderStatus && item.edit ? (
                                        "Done"
                                    ) : (
                                        <select
                                            className="form-select"
                                            onChange
                                        >
                                            <option selected>
                                                Chưa lên món
                                            </option>
                                            <option>Đã lên món</option>
                                        </select>
                                    )}
                                </td>
                                <td>
                                    {item.orderStatus
                                        ? "Đã thanh toán"
                                        : "Chưa thanh toán"}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
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

function reducerOrder(state, action) {
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

const orderList = [
    {
        id: "HD001",
        table: "B01",
        products: [
            { id: "CF01", name: "Cà phê", quantity: 2, price: 15000 },
            { id: "F01", name: "Nước ép cà rốt", quantity: 1, price: 20000 },
        ],
        totalBill: 50000,
        orderStatus: false,
        payStatus: false,
    },
    {
        id: "HD002",
        table: "B02",
        products: [
            { id: "CF01", name: "Cà phê", quantity: 2, price: 15000 },
            { id: "F01", name: "Nước ép cà rốt", quantity: 1, price: 20000 },
        ],
        totalBill: 50000,
        orderStatus: false,
        payStatus: false,
    },
    {
        id: "HD003",
        table: "B03",
        products: [
            { id: "CF01", name: "Cà phê", quantity: 2, price: 15000 },
            { id: "F01", name: "Nước ép cà rốt", quantity: 1, price: 20000 },
        ],
        totalBill: 50000,
        orderStatus: false,
        payStatus: false,
    },
    {
        id: "HD004",
        table: "B04",
        products: [
            { id: "CF01", name: "Cà phê", quantity: 2, price: 15000 },
            { id: "F01", name: "Nước ép cà rốt", quantity: 1, price: 20000 },
        ],
        totalBill: 50000,
        orderStatus: true,
        payStatus: false,
    },
    {
        id: "HD005",
        table: "B05",
        products: [
            { id: "CF01", name: "Cà phê", quantity: 2, price: 15000 },
            { id: "F01", name: "Nước ép cà rốt", quantity: 1, price: 20000 },
        ],
        totalBill: 50000,
        orderStatus: true,
        payStatus: true,
    },
];
