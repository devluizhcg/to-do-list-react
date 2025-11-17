import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import TaskPage from "../pages/TaskPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage

    },
    {
        path: '/task',
        Component: TaskPage
    }
]);

export default router