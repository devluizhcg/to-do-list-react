import axios, { AxiosResponse } from "axios";
import { ITasks } from "../@types/tasks";

const api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export const axiosGetTodoList = async (_limit = 10): Promise<ITasks[]> => {
	return api
		.get<ITasks[]>("/", { params: { _limit } })
		.then((res: AxiosResponse<ITasks[]>) => res.data)
		.catch((error) => console.error("Error fetching todos:", error));
};
