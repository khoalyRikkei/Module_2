import Home from "../pages/Home";
import ExampleMemo from "../pages/Memo";
import ExampleUseCallback from "../pages/UseCallback";
import ExampleUseContext from "../pages/UseContext";
import ExampleUseEffect from "../pages/UseEffect";
import ExampleUseMemo from "../pages/UseMemo";
import ExampleUseReducer from "../pages/UseReducer";
import ExampleUseRef from "../pages/useRef";
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
        path: "use-state",
    },
    {
        title: "useEffect",
        component: <ExampleUseEffect />,
        path: "use-effect",
    },
    {
        title: "useMemo",
        component: <ExampleUseMemo />,
        path: "use-memo",
    },
    {
        title: "memo",
        component: <ExampleMemo />,
        path: "memo",
    },
    {
        title: "useCallback",
        component: <ExampleUseCallback />,
        path: "use-callback",
    },
    {
        title: "useReducer",
        component: <ExampleUseReducer />,
        path: "use-reducer",
    },
    {
        title: "useContext",
        component: <ExampleUseContext />,
        path: "use-context",
    },
    {
        title: "useRef",
        component: <ExampleUseRef />,
        path: "use-ref",
    },
];
