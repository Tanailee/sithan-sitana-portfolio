import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import { academicProjects, currentResearch, researchInterests } from "@/data/research";

export const metadata: Metadata = {
  title: { absolute: "Khmer Physics LLM Research | Sithan Sitana" },
  description: "Sithan Sitana’s research on fine-tuning large language models to solve and explain Khmer Grade 7 physics word problems.",
  alternates: { canonical: "/research" },
  openGraph: { title: "Khmer Physics LLM Research | Sithan Sitana", description: "Research on fine-tuning large language models to solve and explain Khmer Grade 7 physics word problems.", type: "article", url: "/research", images: [{ url: "/professional-photo.jpg", alt: "Sithan Sitana" }] },
  twitter: { card: "summary_large_image", title: "Khmer Physics LLM Research | Sithan Sitana", description: "Research on fine-tuning large language models for Khmer Grade 7 physics problem solving.", images: ["/professional-photo.jpg"] },
};

function ResearchSection({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return <section className="card p-6 sm:p-7" aria-labelledby={`research-section-${number}`}><p className="eyebrow">{String(number).padStart(2,"0")}</p><h2 id={`research-section-${number}`} className="mt-3 text-xl font-black tracking-[-.02em]">{title}</h2><div className="mt-4 leading-7 muted">{children}</div></section>;
}

function ResearchList({ items }: { items: string[] }) {
  return <ul className="grid gap-2">{items.map(item => <li className={item.startsWith("Add ") ? "rounded-lg border border-dashed border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 italic" : ""} key={item}>— {item}</li>)}</ul>;
}

export default function Research() {
  const structuredData = { "@context": "https://schema.org", "@type": "ResearchProject", name: currentResearch.title, description: currentResearch.description, creativeWorkStatus: currentResearch.status, creator: { "@type": "Person", name: "Sithan Sitana" }, keywords: researchInterests.join(", ") };
  return <>
    <header id="current-research" className="border-b border-[var(--line)] bg-[var(--surface-soft)]/35 py-14 sm:py-20 lg:py-24"><div className="container max-w-5xl"><div className="flex flex-wrap items-center gap-3"><p className="eyebrow">Current master’s research</p><span className="chip">{currentResearch.status}</span></div><h1 className="mt-5 max-w-[26ch] text-3xl font-black leading-tight tracking-[-.045em] sm:text-4xl lg:text-5xl">{currentResearch.title}</h1><p className="mt-6 max-w-[70ch] text-lg leading-8 muted">{currentResearch.description}</p></div></header>
    <div className="section"><div className="container">
      <section aria-labelledby="research-interests"><h2 id="research-interests" className="text-2xl font-black">Research interests</h2><div className="mt-5 flex flex-wrap gap-2">{researchInterests.map(item => <span className="chip" key={item}>{item}</span>)}</div></section>
      <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
        <ResearchSection number={1} title="Research overview"><p>{currentResearch.extendedDescription}</p></ResearchSection>
        <ResearchSection number={2} title="Background and motivation"><p>{currentResearch.background}</p></ResearchSection>
        <ResearchSection number={3} title="Research problem"><p>{currentResearch.problem}</p></ResearchSection>
        <ResearchSection number={4} title="Research objectives"><ResearchList items={currentResearch.objectives}/></ResearchSection>
        <ResearchSection number={5} title="Dataset preparation"><ResearchList items={currentResearch.datasetPreparation}/></ResearchSection>
        <ResearchSection number={6} title="Model and fine-tuning approach"><ResearchList items={currentResearch.fineTuningApproach}/></ResearchSection>
        <ResearchSection number={7} title="Evaluation framework"><ResearchList items={currentResearch.evaluationFramework}/></ResearchSection>
        <ResearchSection number={8} title="Current progress"><ResearchList items={currentResearch.currentProgress}/></ResearchSection>
        <ResearchSection number={9} title="Results"><ResearchList items={currentResearch.results}/></ResearchSection>
        <ResearchSection number={10} title="Limitations"><ResearchList items={currentResearch.limitations}/></ResearchSection>
        <ResearchSection number={11} title="Ethical and educational considerations"><ResearchList items={currentResearch.ethicalConsiderations}/></ResearchSection>
        <ResearchSection number={12} title="Future work"><ResearchList items={currentResearch.futureWork}/></ResearchSection>
        <ResearchSection number={13} title="Related project links">{currentResearch.relatedLinks.length ? <ul className="grid gap-2">{currentResearch.relatedLinks.map(link => <li key={link.href}><a className="inline-flex min-h-11 items-center gap-2 font-bold text-[var(--accent)]" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ExternalLink aria-hidden size={15}/></a></li>)}</ul> : <p className="rounded-lg border border-dashed border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 italic">Add verified related project or repository links.</p>}</ResearchSection>
      </div>
      <section className="mt-16" aria-labelledby="academic-projects"><div className="max-w-2xl"><p className="eyebrow">Related academic work</p><h2 id="academic-projects" className="mt-3 text-3xl font-black tracking-tight">Supporting project portfolio</h2><p className="mt-3 leading-7 muted">Method-focused project records. These are academic projects, not peer-reviewed publications.</p></div><div className="mt-7 grid gap-5 md:grid-cols-3">{academicProjects.map(item => <article className="card p-6" key={item.title}><BookOpen aria-hidden className="text-[var(--accent)]"/><h3 className="mt-4 font-black">{item.title}</h3><p className="mt-3 text-sm leading-6 muted">{item.description}</p><Link className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-[var(--accent)]" href={item.href}>Review project <ArrowUpRight aria-hidden size={16}/></Link></article>)}</div></section>
      <aside className="card mt-10 p-6"><p className="eyebrow">Publication status</p><h2 className="mt-3 text-xl font-black">Research in progress</h2><p className="mt-3 leading-7 muted">This page describes active master’s research and does not claim publication, peer review, completion, institutional approval, or confirmed findings.</p></aside>
    </div></div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
  </>;
}
