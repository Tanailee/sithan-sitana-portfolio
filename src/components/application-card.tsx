import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/types";
import { ProjectThumbnail } from "./project-thumbnail";

export function ApplicationCard({ project }: { project: Project }) {
  if (!project.liveUrl || !project.githubUrl) return null;
  return <article className="card card-interactive grid min-w-0 overflow-hidden lg:grid-cols-[.8fr_1.2fr]">
    <div className="self-center p-2.5 sm:p-5"><ProjectThumbnail project={project} compactOnMobile sizes="(max-width: 1024px) 100vw, 38vw"/></div>
    <div className="flex min-w-0 flex-col p-4 sm:p-7">
      <div className="flex flex-wrap gap-1.5 sm:gap-2"><span className="chip">Live</span><span className="chip hidden sm:inline-flex">Streamlit application</span></div>
      <h2 className="mt-3 text-xl font-black tracking-[-.03em] sm:mt-4 sm:text-2xl">{project.title}</h2>
      <div className="mt-3 sm:mt-4"><h3 className="text-sm font-bold">Application purpose</h3><p className="mt-1 line-clamp-3 text-sm leading-6 muted sm:line-clamp-4">{project.solution}</p></div>
      {project.targetUsers && <div className="mt-4 hidden rounded-xl bg-[var(--surface-soft)] p-4 lg:block"><h3 className="text-sm font-bold">Target users</h3><p className="mt-1 text-sm leading-6 muted">{project.targetUsers}</p></div>}
      {project.features?.length ? <div className="mt-5 hidden lg:block"><h3 className="text-sm font-bold">Main features and practical use</h3><ul className="mt-2 grid gap-1.5 text-sm leading-6 muted">{project.features.slice(0, 4).map(feature => <li key={feature}>— {feature}</li>)}</ul></div> : null}
      <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2" aria-label={`${project.title} technologies`}>{project.technologies.slice(0, 4).map(item => <span className="chip" key={item}>{item}</span>)}</div>
      <div className="mt-auto grid grid-cols-2 gap-2 pt-4 sm:grid-cols-3 sm:pt-6">
        <a className="btn btn-primary !w-full !px-3 text-sm" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Launch ${project.title} on Streamlit in a new tab`}>Launch App <ExternalLink aria-hidden size={14}/></a>
        <a className="btn !w-full !px-3 text-sm" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open GitHub repository for ${project.title} in a new tab`}>GitHub <ExternalLink aria-hidden size={14}/></a>
        <Link className="btn !w-full !px-3 text-sm max-sm:hidden" href={`/projects/${project.slug}`} aria-label={`View project details for ${project.title}`}>Details <ArrowRight aria-hidden size={15}/></Link>
      </div>
    </div>
  </article>;
}
