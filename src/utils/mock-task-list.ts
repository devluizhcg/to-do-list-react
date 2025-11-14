import { ITasks } from "../tasks";
import TaskModel from "../model/task-model.ts";
import uuid7Generate from "./uuid7Generate.ts";

/**
 * Utility function to create a delay using Promises.
 * @param ms The delay time in milliseconds.
 */
const delay = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function addValuesWithDelay(
	values: Pick<ITasks, "title" | "description">[],
	intervalMs: number,
): Promise<ITasks[]> {
	const result: ITasks[] = [];

	for (let i = 0; i < values.length; i++) {
		const value = values[i];
		const uuid7 = uuid7Generate.generateV7();

		const newTask = new TaskModel(uuid7, value.title, value.description);

		result.push(newTask);

		await delay(intervalMs);
	}

	return result;
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
