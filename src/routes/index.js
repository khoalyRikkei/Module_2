import Home from "../pages/Home";
import ExampleUseCallback from "../pages/UseCallback";
import ExampleUseContext from "../pages/UseContext";
import ExampleUseEffect from "../pages/UseEffect";
import ExampleUseMemo from "../pages/UseMemo";
import ExampleUseReducer from "../pages/UseReducer";
import ExampleUseState from "../pages/UseState";

export const routes = [
    {
        title: "Home",
        component: <Home />,
        path: "/",
    },
    {
        title: "useState",
        component: <ExampleUseState />,
        path: "state",
    },
    {
        title: "useEffect",
        component: <ExampleUseEffect />,
        path: "effect",
    },
    {
        title: "useMemo",
        component: <ExampleUseMemo />,
        path: "memo",
    },
    {
        title: "useCallback",
        component: <ExampleUseCallback />,
        path: "callback",
    },
    {
        title: "useReducer",
        component: <ExampleUseReducer />,
        path: "reducer",
    },
    {
        title: "useContext",
        component: <ExampleUseContext />,
        path: "context",
    },
];
