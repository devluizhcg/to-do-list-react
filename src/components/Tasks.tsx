import {ITasksProps} from "../@types/tasks";
import {CheckCircleIcon, ChevronRightIcon, TrashIcon} from "lucide-react";
import TaskModel from "../model/task-model.ts";

export default function Tasks(props: ITasksProps) {
	return (
		<ul className="card list-none">
			{props.tasks.length === 0 ? (
				<li className={"btn w-full"}>Carregando...</li>
			) : (
				props.tasks.map((t: TaskModel, index) => (
					<li key={t.idAsString ?? index} className={"flex gap-2"}>
						<button className={`${t.completed && "line-through "} btn w-full`}>
							{t.title}
						</button>

						<button
							className={`btn ${t.completed && "bg-green"}`}
							onClick={() => props.onTaskClick(t.id)}
						>
							{t.completed ? <CheckCircleIcon /> : <ChevronRightIcon />}
						</button>

						<button
							className="btn"
							onClick={() => props.onTaskClickDelete(t.id)}
						>
							<TrashIcon />
						</button>
					</li>
				))
			)}
		</ul>
	);
}
