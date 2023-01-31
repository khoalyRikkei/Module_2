import "./App.css";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import FormStudent from "./components/Form1";
import { useSelector } from "react-redux";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    {routes &&
                        routes.map((route, index) => (
                            <Route
                                path={route.path}
                                element={route.component}
                                key={index}
                            />
                        ))}
                </Routes>
            </Layout>
        </>
    );
}

export default App;
