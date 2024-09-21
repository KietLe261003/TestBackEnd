import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import ManagermentTask from "../Page/ManagermentTask";

export const route=[
    {
        path: "/",
        element: HomePage,
        Role: ""
    },
    {
        path: "/login",
        element: LoginPage,
        Role: ""
    },
    {
        path: "/Task",
        element: ManagermentTask,
        Role: "Admin"
    }
]