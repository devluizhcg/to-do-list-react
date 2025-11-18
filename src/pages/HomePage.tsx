import { useEffect, useState } from "react";
import Tasks from "../components/Tasks.tsx";
import { ITasks } from "../@types/tasks";
import AddTasks from "../components/AddTasks.tsx";
import { UUID } from "uuidv7";
import { useNavigate } from "react-router-dom";
import { encodeUtils } from "../utils/url-convert-object.ts";
import { ROUTES } from "../router";
import { getTasks } from "../services/task-services.ts";

function HomePage() {
	const [tasks, setTasks] = useState<ITasks[]>(
		JSON.parse(sessionStorage.getItem("tasks") ?? "[]"),
	);
	const navigate = useNavigate();

	function onSeeDetailsClick(task: ITasks): void {
		navigate({
			pathname: ROUTES.TASK.path,
			search: `?obj=${encodeUtils(task)}`,
		});
	}

	function onTaskClick(id: UUID): void {
		const task = tasks.find((t) => t.id === id);

		if (!task) return console.error("Task not found");

		onSeeDetailsClick(task);
	}

	function onTaskClickDelete(id: UUID): void {
		setTasks(
			tasks.splice(
				tasks.findIndex((t) => t.id === id),
				1,
			),
		);
	}

	function onAddTask(newTask: ITasks): void {
		setTasks([...tasks, newTask]);
	}

	useEffect(() => {
		// sessionStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		getTasks(20).then(setTasks);
	}, []);

	return (
		<>
			<div className="w-screen h-screen bg-slate-500 flex justify-center py-4 max-h-100vw overflow-y-auto">
				<div className="w-[500px] flex gap-4 flex-col">
					<h1 className="text-3xl text-slate-100 font-bold text-center">
						Gerenciador de Tarefas
					</h1>

					<AddTasks onAddTask={onAddTask} />

					<Tasks
						tasks={tasks}
						onTaskClick={onTaskClick}
						onTaskClickDelete={onTaskClickDelete}
					/>
				</div>
			</div>
		</>
	);
}

export default HomePage;
