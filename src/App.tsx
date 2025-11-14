import "./App.css";
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks.tsx";
import { ITasks } from "./tasks";
import AddTasks from "./components/AddTasks.tsx";
import uuid7Generate from "./utils/uuid7Generate.ts";
import { UUID } from "uuidv7";
import { addValuesWithDelay, valuesMockTasks } from "./utils/mock-task-list.ts";

function App() {
	const { generateV7 } = uuid7Generate;

	const [tasks, setTasks] = useState<ITasks[]>([]);

	function onTaskClick(id: UUID): void {
		setTasks(
			tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
		);
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
		addValuesWithDelay(valuesMockTasks, 300)
			.then(setTasks)
			.catch(console.error);
	}, []);

	return (
		<>
			<div className="w-screen h-screen bg-slate-500 flex justify-center pt-4">
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

export default App;
