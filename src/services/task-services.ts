import { ITasks } from "../@types/tasks";
import { axiosGetTodoList } from "../api";
import TaskModel from "../model/task-model.ts";
import uuid7Generate from "../utils/uuid7-generate.ts";

export async function getTasks(_limit = 10): Promise<ITasks[]> {
	return axiosGetTodoList(_limit).then((data) => {
		return data.map(
			({ title, description }: ITasks) =>
				new TaskModel(uuid7Generate.generateV7(), title, description),
		);
	});
}
