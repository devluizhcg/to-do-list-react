import {ITasks} from "../@types/tasks";
import TaskModel from "../model/task-model.ts";
import uuid7Generate from "./uuid7-generate.ts";

export async function* addValuesWithDelayGenerator(
	values: Pick<ITasks, "title" | "description">[],
	intervalMs: number = 300,
): AsyncGenerator<ITasks> {
	for (const value of values) {
		const uuid7 = uuid7Generate.generateV7();
		yield new TaskModel(uuid7, value.title, value.description);

		await new Promise((resolve) => setTimeout(resolve, intervalMs));
	}
}

export const valuesMockTasks: Pick<ITasks, "title" | "description">[] = [
	{
		title: "Estudar React",
		description: "Estudar a biblioteca React",
	},
	{
		title: "Estudar TypeScript",
		description: "Estudar a linguagem TypeScript",
	},
	{
		title: "Criar um projeto",
		description: "Criar um projeto para estudar React e TypeScript",
	},
];
