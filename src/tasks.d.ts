import { UUID } from "uuidv7";

export interface ITasks {
	id: UUID;
	title: string;
	completed: boolean;
	description: string;
}

export interface ITasksProps {
	tasks: ITasks[];
	onTaskClick: (id: UUID) => void;
	onTaskClickDelete: (id: UUID) => void;
}

export interface IAddTasksProps {
	onAddTask: (task: ITasks) => void;
}
