import { IAddTasksProps } from "../tasks";
import { useState } from "react";
import TaskModel from "../model/task-model.ts";
import uuid7Generate from "../utils/uuid7-generate.ts";

export default function AddTasks(props: IAddTasksProps) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	function validateForm(): boolean {
		return title.trim().length > 0 && description.trim().length > 0;
	}

	function resetForm(): void {
		setTitle("");
		setDescription("");
	}

	return (
		<div className={"card"}>
			<form
				onSubmit={(e) => {
					e.preventDefault();

					if (!validateForm()) return;

					props.onAddTask(
						new TaskModel(uuid7Generate.generateV7(), title, description),
					);

					resetForm();
				}}
			>
				<div className={"flex flex-col gap-4"}>
					<input
						type="text"
						placeholder={"Digite o título da tarefa"}
						className={"input"}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					<input
						type="text"
						placeholder={"Digite a descrição da tarefa"}
						className={"input"}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<button type="submit" className={"btn w-full font-medium mt-4"}>
					Adicionar
				</button>
			</form>
		</div>
	);
}
