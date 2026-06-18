"use client";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/types";
import { ProjectCard } from "./project-card";

type Filter = "All" | "Live Applications" | ProjectCategory;
const filters: Filter[] = ["All", "Banking Analytics", "Business Intelligence", "Natural Language Processing", "Khmer NLP", "Time Series", "Applied AI", "Live Applications"];
function matches(project: Project, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Live Applications") return project.status === "Live" && Boolean(project.liveUrl);
  return project.categories.includes(filter);
}

export function ProjectFilter() {
  const [active, setActive] = useState<Filter>("All");
  const shown = useMemo(() => projects.filter(project => matches(project, active)), [active]);
  return <>
    <div className="flex max-w-full gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible" role="group" aria-label="Filter projects by topic">
      {filters.map(filter => <button key={filter} type="button" onClick={() => setActive(filter)} aria-pressed={active === filter} className={`btn !w-auto shrink-0 text-sm ${active === filter ? "btn-primary" : ""}`}>{filter}</button>)}
    </div>
    <p className="mt-4 text-sm muted" role="status" aria-live="polite">Showing {shown.length} {shown.length === 1 ? "project" : "projects"}</p>
    {shown.length ? <div className="mt-7 grid items-stretch gap-6 md:grid-cols-2">{shown.map(project => <ProjectCard key={project.id} project={project}/>)}</div> : <div className="card mt-7 p-8 text-center"><h2 className="font-black">No projects match this filter</h2><p className="mt-2 muted">Choose another topic to view the available case studies.</p></div>}
  </>;
}
