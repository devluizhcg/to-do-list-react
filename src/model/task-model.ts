import { ITasks } from "../tasks";
import { UUID } from "uuidv7";

class TaskModel implements ITasks {
	completed: boolean = false;

	constructor(
		public readonly id: UUID,
		public title: string,
		public description: string,
	) {}

	get idAsString(): string {
		return String(this.id).toString();
	}
}

export default TaskModel;
