import { useState } from "react"
import { Icon } from "@iconify/react"
import aboutData from "@/data/about.json"

export default function YearsPlanAhead(){
	const [year, setYear] = useState<2026 | 2027 | 2028>(2026);
	const [tab, setTab] = useState<"Roadmap" | "Personal" | "Why">("Roadmap");
	const changeTab = (tab: "Roadmap" | "Personal" | "Why") => {
		setTab(tab);
	};
	const changeYear = (year: 2026 | 2027 | 2028) => {
		setYear(year);
	};
	return (
		<section className="section flex-col flex gap-2">
			<h2>📖 My 2.5 Years Plan</h2>
			<div 
			className="bg-accent text-card-foreground border-muted flex flex-col gap-6 overflow-hidden rounded-xl border shadow-sm "
		>
			<div className="w-full justify-between flex flex-row bg-muted px-12 py-8">
				<button 
					className={`${tab === "Roadmap" ? "bg-background text-foreground" : "text-foreground-muted hover:text-foreground"} flex min-h-8 min-w-24 items-center justify-center rounded-xl px-4 py-2 transition-transform duration-300 hover:scale-105 gap-2`}
					onClick={() => changeTab("Roadmap")}
				>
					<Icon className={`${tab === "Roadmap" && "text-primary"}`} icon="tabler:road"/>
					Roadmap
				</button>
				<button 
					className={`${tab === "Personal" ? "bg-background text-foreground" : "text-foreground-muted hover:text-foreground"} flex min-h-8 min-w-24 items-center justify-center rounded-xl px-4 py-2 transition-transform duration-300 hover:scale-105 gap-2`} 
					onClick={() => changeTab("Personal")}
				>
					<Icon className={`${tab === "Personal" && "text-primary"}`} icon="tabler:trophy"/>
					Personal
				</button>
				<button 
					className={`${tab === "Why" ? "bg-background text-foreground" : "text-foreground-muted hover:text-foreground"} flex min-h-8 min-w-24 items-center justify-center rounded-xl px-4 py-2 transition-transform duration-300 hover:scale-105 gap-2`}
					onClick={() => changeTab("Why")}
				>
					<Icon className={`${tab === "Why" && "text-primary"}`} icon="tabler:question-mark"/>
					Why
				</button>
			</div>
			<div className="h-80 flex flex-col overflow-y-auto px-12 py-8 gap-6">
				{Object.entries(aboutData[year][tab]).map(([title, description]) => (
					<div
						key={title}
						className="flex flex-col items-start justify-start gap-2"
						>
						<h3 className="text-soft-white">{title}</h3>
						<p>{description}</p>
					</div>
				))}
			</div>
			<div className="w-full justify-between flex flex-row bg-muted px-12 py-8">
				<button 
					className={`${year === 2026 ? "bg-background text-foreground" : "text-foreground-muted hover:text-foreground"} flex min-h-8 min-w-24 items-center justify-center rounded-xl px-4 py-2 transition-transform duration-300 hover:scale-105 gap-2`}
					onClick={() => changeYear(2026)}
				>
					2026
				</button>
				<button 
					className={`${year === 2027 ? "bg-background text-foreground" : "text-foreground-muted hover:text-foreground"} flex min-h-8 min-w-24 items-center justify-center rounded-xl px-4 py-2 transition-transform duration-300 hover:scale-105 gap-2`}
					onClick={() => changeYear(2027)}
				>
					2027
				</button>
				<button
					className={`${year === 2028 ? "bg-background text-foreground" : "text-foreground-muted hover:text-foreground"} flex min-h-8 min-w-24 items-center justify-center rounded-xl px-4 py-2 transition-transform duration-300 hover:scale-105 gap-2`}
					onClick={() => changeYear(2028)}
				>
					2028
				</button>
			</div>
		</div>
		</section>
	)
}