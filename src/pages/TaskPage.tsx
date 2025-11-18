import { useNavigate, useSearchParams } from "react-router-dom";
import { decodeUtils } from "../utils/url-convert-object.ts";
import { ITasks } from "../@types/tasks";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { ROUTES } from "../router";

const TaskPage = () => {
	const [searchParams] = useSearchParams();

	const navigate = useNavigate();
	const obj = searchParams.get("obj");
	const [task, setTask] = useState<ITasks | null>(null);

	function getDecodedObject(): void {
		if (!obj) throw new Error("Obj not found");

		setTask(decodeUtils<ITasks>(obj));
	}

	useEffect(() => {
		getDecodedObject();
	}, []);

	return (
		<>
			<div className="w-screen h-screen bg-slate-500 flex justify-center pt-4">
				<div className="w-[500px] flex gap-4 flex-col">
					<h1 className="text-3xl text-slate-100 font-bold text-center">
						Detalhes da Tarefa
						<div className={"relative"}>
							<button
								onClick={() => navigate(ROUTES.HOME.path)}
								className={"bg-slate-600 btn absolute top-[-5px] right-[-20px]"}
							>
								<ChevronLeftIcon />
							</button>
						</div>
					</h1>

					<div className={"card"}>
						<div className={"text-xl font-bold text-slate-600"}>
							{task?.title ?? "ERRO ao carregar o titulo"}
						</div>
						<div className={"text-slate-600"}>
							{task?.description ?? "ERRO ao carregar a descricao"}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TaskPage;
