import "./App.css";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import FormStudent from "./components/Form1";
import { useSelector } from "react-redux";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import PostDeTail from "./pages/PostManager/postDetail";
import Header from "./Layout/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                {routes &&
                    routes.map((route, index) => (
                        <>
                            <Route
                                path={route.path}
                                element={route.component}
                                key={index}
                            ></Route>
                            {route.children && (
                                <Route
                                    path={route.children.path}
                                    element={<PostDeTail />}
                                />
                            )}
                        </>
                    ))}
            </Routes>
        </>
    );
}

export default App;
