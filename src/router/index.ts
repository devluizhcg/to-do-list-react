import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import TaskPage from "../pages/TaskPage.tsx";
import {REROUTES} from "../@types/router";

export const ROUTES: REROUTES = {
	HOME: { path: "/" },
	TASK: { path: "/task" },
} as const;

const router = createBrowserRouter([
	{
		path: ROUTES.HOME.path,
		Component: HomePage,
	},
	{
		path: ROUTES.TASK.path,
		Component: TaskPage,
	},
]);

export default router;
