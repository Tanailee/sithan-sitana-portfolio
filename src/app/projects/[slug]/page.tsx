import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, LockKeyhole, TriangleAlert } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectThumbnail } from "@/components/project-thumbnail";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return { title: "Project not found" };
  const image = project.image || "/favicon.svg";
  return {
    title: { absolute: `${project.title} | Sithan Sitana` },
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: `${project.title} | Sithan Sitana`, description: project.summary, type: "article", url: `/projects/${slug}`, images: [{ url: image, alt: project.imageAlt || `${project.title} project preview` }] },
    twitter: { card: "summary_large_image", title: project.title, description: project.summary, images: [image] },
  };
}

function List({ items, empty = "Details require review before publication." }: { items?: string[]; empty?: string }) {
  return items?.length ? <ul>{items.map(item => <li key={item}>{item}</li>)}</ul> : <p className="rounded-xl bg-[var(--surface-soft)] p-4">{empty}</p>;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return <article>
    <header className="section border-b border-[var(--line)]"><div className="container max-w-5xl">
      <Link href="/projects" className="inline-flex min-h-11 items-center font-bold text-[var(--accent)]">← Project library</Link>
      <div className="mt-7 flex flex-wrap gap-2"><span className="chip">{project.status}</span>{project.categories.map(category => <span className="chip" key={category}>{category}</span>)}</div>
      <h1 className="title mt-5 font-black">{project.title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 muted">{project.summary}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {project.liveUrl && <a className="btn btn-primary sm:!w-auto" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Launch ${project.title} on Streamlit in a new tab`}>Launch application <ExternalLink aria-hidden size={15}/></a>}
        {project.githubUrl && <a className="btn sm:!w-auto" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open GitHub repository for ${project.title} in a new tab`}>View GitHub repository <ExternalLink aria-hidden size={15}/></a>}
      </div>
    </div></header>
    <div className="container grid max-w-6xl gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-20">
      <div className="prose min-w-0">
        <section><h2>Overview</h2><p>{project.solution}</p></section>
        <section><h2>Problem statement</h2><p>{project.problem}</p></section>
        <section><h2>Objectives</h2><List items={project.objectives}/></section>
        <section><h2>Dataset or input</h2><p>{project.dataset || "Dataset or input details require review before publication."}</p></section>
        <section><h2>Methodology</h2><List items={project.methodology}/></section>
        <section><h2>Main features</h2><List items={project.features}/></section>
        <section><h2>Workflow</h2><List items={project.workflow}/></section>
        <section><h2>Model or analytical approach</h2><p>{project.analyticalApproach || "The analytical approach requires review before publication."}</p></section>
        <section><h2>Results</h2>{project.results?.length ? <List items={project.results}/> : <div className="card my-4 flex gap-3 p-5"><TriangleAlert aria-hidden className="mt-1 shrink-0 text-[var(--accent)]"/><p className="!m-0">No verified result has been published in this portfolio.</p></div>}</section>
        {project.image && <section><h2>Application preview</h2><ProjectThumbnail project={project} sizes="(max-width: 1024px) 100vw, 760px" className="mt-5"/></section>}
        <section><h2>Limitations</h2><List items={project.limitations}/></section>
        <section><h2>Future improvements</h2><List items={project.futureImprovements}/></section>
      </div>
      <aside className="h-fit min-w-0 lg:sticky lg:top-24">
        <div className="card p-6"><p className="eyebrow">Project record</p><h2 className="mt-5 font-black">Technologies</h2><div className="mt-3 flex flex-wrap gap-2">{project.technologies.map(item => <span className="chip" key={item}>{item}</span>)}</div><h2 className="mt-7 font-black">Verified links</h2><div className="mt-3 grid gap-2">{project.liveUrl ? <a className="btn btn-primary !w-full" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Launch ${project.title} on Streamlit in a new tab`}>Live Streamlit app <ExternalLink aria-hidden size={15}/></a> : <p className="text-sm muted">Live application link requires review.</p>}{project.githubUrl ? <a className="btn !w-full" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open GitHub repository for ${project.title} in a new tab`}>GitHub repository <ExternalLink aria-hidden size={15}/></a> : <p className="text-sm muted">Repository link requires review.</p>}</div>{project.liveUrl && <p className="mt-4 text-xs leading-5 muted">Streamlit Community Cloud applications may take a few moments to start after a period of inactivity.</p>}</div>
        <div className="mt-4 flex gap-3 rounded-xl border border-[var(--line)] p-4 text-sm leading-6 muted"><LockKeyhole aria-hidden className="mt-1 shrink-0" size={18}/><p>Portfolio demonstrations use public, anonymized, educational, or synthetic data and exclude confidential customer or banking information.</p></div>
      </aside>
    </div>
  </article>;
}
