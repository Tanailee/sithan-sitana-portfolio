import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/types";
import { ProjectThumbnail } from "./project-thumbnail";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return <article className="card card-interactive group flex h-full min-w-0 flex-col overflow-hidden">
    <div className="p-2.5 pb-0 sm:p-4 sm:pb-0"><ProjectThumbnail project={project} priority={priority} compactOnMobile sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"/></div>
    <div className="flex flex-1 flex-col p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2"><span className="chip">{project.status}</span><span className="chip">{project.categories[0]}</span></div>
      <h2 className="mt-3 text-lg font-black tracking-[-.025em] sm:mt-4 sm:text-xl">{project.title}</h2>
      <p className="mt-2 line-clamp-3 text-sm leading-6 muted sm:mt-3 sm:line-clamp-4 sm:text-base sm:leading-7">{project.summary}</p>
      <div className="mt-5 hidden border-t border-[var(--line)] pt-4 lg:block">
        <h3 className="text-sm font-bold">Problem addressed</h3>
        <p className="mt-1 line-clamp-3 text-sm leading-6 muted">{project.problem}</p>
      </div>
      <div className="compact-tags mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2" aria-label={`${project.title} technologies`}>{project.technologies.slice(0, 5).map(item => <span className="chip" key={item}>{item}</span>)}</div>
      <div className="mt-auto grid grid-cols-3 gap-1.5 pt-4 sm:gap-2 sm:pt-6">
        <Link className="btn btn-primary !min-h-12 !w-full !px-2 text-xs sm:!min-h-11 sm:!px-3 sm:text-sm" href={`/projects/${project.slug}`} aria-label={`View project details for ${project.title}`}>Details <ArrowRight aria-hidden size={14}/></Link>
        {project.githubUrl && <a className="btn !min-h-12 !w-full !px-2 text-xs sm:!min-h-11 sm:!px-3 sm:text-sm" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open GitHub repository for ${project.title} in a new tab`}>GitHub <ExternalLink aria-hidden size={13}/></a>}
        {project.liveUrl && <a className="btn !min-h-12 !w-full !px-2 text-xs sm:!min-h-11 sm:!px-3 sm:text-sm" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Launch live demo of ${project.title} in a new tab`}>Live Demo <ExternalLink aria-hidden size={13}/></a>}
      </div>
    </div>
  </article>;
}
