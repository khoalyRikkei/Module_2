import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const DataContext = createContext();

export default function ExampleUseContext() {
    const [user, setUser] = useState("Rikkei Academy");

    /**
     * @syntax const value = useContext(SomeContext)
     * @SomeContext  const SomeContext = createContext(SomeContext) // Khởi tạo và khai báo component với createContext() của react, bản thân SomeContext không chưa thông tin
     * @useContext sẽ return giá trị của component được gọi. Nó là trong property value của <SomeContext.Provider value={any}>. Nếu không được cung cấp, nó trả về giá trị khởi tạo được chứa trong createContext()
     */

    return (
        <>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 />
            </UserContext.Provider>
            <DataContext.Provider value={{ id: 1, name: "Nguyễn Văn A" }}>
                <Component6 />
            </DataContext.Provider>
        </>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);
    console.log("check user", user);

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}
function Component6() {
    const data = useContext(DataContext);
    console.log("check data 1", data);
    return (
        <>
            <h1>Component 6</h1>

            <DataContext.Provider value={{ ...data, age: 20 }}>
                <Component7 />
            </DataContext.Provider>
        </>
    );
}
function Component7() {
    const data = useContext(DataContext);
    console.log("check data 2", data);
    return (
        <>
            <h1>Component 7</h1>
            <h1>{`Hello ${data.name} có ID là ${data.id}`}</h1>
        </>
    );
}
