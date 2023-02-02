import ListStudents from "../pages/ListStudent";
import NotFoundPage from "../pages/NotFoundPage";
import PostManager from "../pages/PostManager";
import PostDeTail from "../pages/PostManager/postDetail";

export const routes = [
    {
        title: "Home",
        path: "/",
        component: <h1>Hello</h1>,
    },
    {
        title: "Manage Student",
        path: "list-students",
        component: <ListStudents />,
    },
    {
        title: "Manage Post",
        path: "manage-post",
        component: <PostManager />,
        children: {
            path: "manage-post/:id",
            component: <PostDeTail />,
        },
    },
    {
        title: "Not Found Page",
        path: "*",
        component: <NotFoundPage />,
    },
];
