import ListStudents from "../pages/ListStudent";
import NotFoundPage from "../pages/NotFoundPage";
import PostManager from "../pages/PostManager";

export const routes = [
    {
        title: "Home",
        path: "/",
        component: <h1>Hello</h1>,
    },
    {
        title: "Manage Student",
        path: "/list-students",
        component: <ListStudents />,
    },
    {
        title: "Manage Post",
        path: "/manage-post",
        component: <PostManager />,
    },
    {
        title: "Not Found Page",
        path: "/*",
        component: <NotFoundPage />,
    },
];
