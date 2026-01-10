import { useState } from "react"

const text = {
	
}

export default function YearsPlanAhead(){
	const [year, setYear] = useState<2026 | 2027 | 2028>(2026);
	const [tab, setTab] = useState<"Roadmap" | "Personal" | "Why">("Roadmap");
	return (
		<div 
			className="bg-accent text-card-foreground  border-muted flex flex-col gap-6 overflow-hidden rounded-xl border shadow-sm xl:flex-row-reverse"
		>
			<div className="flex flex-row xl:flex-col w-full items-center justify-center gap-[16%]">
				<button>2026</button>
				<button>2027</button>
				<button>2028</button>
			</div>
			<div className="w-full h-fit flex flex-col">
				<div className="flex flex-row w-full justify-between px-8">
					<button>Roadmap</button>
					<button>Personal</button>
					<button>Why</button>
				</div>
				<div >

				</div>
			</div>
		</div>
	)
}