import Layout from "./layouts";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
    return (
        <Layout>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
        </Layout>
    );
}

export default App;
