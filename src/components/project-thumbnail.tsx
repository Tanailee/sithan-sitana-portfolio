import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/types";

export function ProjectThumbnail({ project, priority = false, sizes = "(max-width: 768px) 100vw, 50vw", className = "", compactOnMobile = false }: { project: Project; priority?: boolean; sizes?: string; className?: string; compactOnMobile?: boolean }) {
  return <figure className={`flex min-w-0 flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-sm ${compactOnMobile ? "aspect-[16/8.5] sm:aspect-video" : "aspect-video"} ${className}`}>
    <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-[var(--line)] bg-[var(--surface-soft)] px-2.5 sm:h-7 sm:gap-2 sm:px-3" aria-hidden="true">
      <span className="h-2 w-2 rounded-full bg-[#ef6a63]"/><span className="h-2 w-2 rounded-full bg-[#e6b84f]"/><span className="h-2 w-2 rounded-full bg-[#55b878]"/>
      <span className="ml-1 min-w-0 truncate text-[10px] font-semibold tracking-wide text-[var(--muted)]">{project.shortTitle}</span>
    </div>
    <div className="relative m-1 min-h-0 flex-1 overflow-hidden rounded-md bg-[var(--surface-soft)]">
      {project.image ? <Image src={project.image} alt={project.imageAlt || `${project.title} application screenshot`} fill priority={priority} sizes={sizes} style={{ objectFit: project.imageFit || "cover", objectPosition: project.imagePosition || "50% 50%" }}/> : <div className="absolute inset-0 grid place-items-center p-6 text-center"><div><ImageIcon aria-hidden className="mx-auto text-[var(--accent)]"/><p className="mt-2 text-sm font-bold muted">Project screenshot pending</p></div></div>}
    </div>
  </figure>;
}
