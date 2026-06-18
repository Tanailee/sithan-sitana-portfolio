import { Download, ExternalLink, FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { currentResearch } from "@/data/research";
import { skills } from "@/data/profile";

const cvPath = "/Sithan-Sitana-CV.pdf";

export const metadata = { title: "CV", description: "Preview or download Sithan Sitana’s current curriculum vitae.", alternates: { canonical: "/cv" } };

export default function CV() {
  return <><PageHero eyebrow="Curriculum vitae" title="Professional experience and education, in one document." description="Download the current CV or preview it below. The PDF remains the source of truth for its contents."/><section className="section"><div className="container">
    <div className="flex flex-col gap-3 sm:flex-row">
      <a className="btn btn-primary sm:!w-auto" href={cvPath} target="_blank" rel="noopener noreferrer">Open CV in New Tab <ExternalLink aria-hidden size={16}/></a>
      <a className="btn sm:!w-auto" href={cvPath} download="Sithan-Sitana-CV.pdf">Download CV <Download aria-hidden size={17}/></a>
    </div>

    <section className="mt-8" aria-labelledby="cv-summary-title">
      <p className="eyebrow">At a glance</p>
      <h2 id="cv-summary-title" className="mt-3 text-2xl font-black">CV summary</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="card p-5"><h3 className="font-black">Education</h3><p className="mt-2 text-sm leading-6 muted">{education[0].degree} at {education[0].institution}; Bachelor of Civil Engineering from Norton University.</p></article>
        <article className="card p-5"><h3 className="font-black">Experience</h3><p className="mt-2 text-sm leading-6 muted">{experience[0].role} at {experience[0].organization}, with prior digital-service, customer-service, teaching-support, and civil-engineering experience.</p></article>
        <article className="card p-5"><h3 className="font-black">Skills</h3><p className="mt-2 text-sm leading-6 muted">{[...skills["Data Analytics"].slice(0, 3), ...skills["Machine Learning"].slice(0, 3), ...skills.Visualization.slice(0, 2)].join(", ")}.</p></article>
        <article className="card p-5"><h3 className="font-black">Research</h3><p className="mt-2 text-sm leading-6 muted">{currentResearch.title} — {currentResearch.status}.</p></article>
      </div>
    </section>

    <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
      <object title="Sithan Sitana curriculum vitae" data={cvPath} type="application/pdf" className="h-[72vh] min-h-[520px] w-full">
        <div className="flex min-h-[520px] flex-col items-center justify-center p-8 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]"><FileText aria-hidden size={28}/></span>
          <h2 className="mt-5 text-xl font-black">CV preview unavailable</h2>
          <p className="mt-2 max-w-md leading-7 muted">This browser cannot display the embedded PDF, but the complete CV is still available to open or download.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row"><a className="btn btn-primary sm:!w-auto" href={cvPath} target="_blank" rel="noopener noreferrer">Open CV in New Tab <ExternalLink aria-hidden size={16}/></a><a className="btn sm:!w-auto" href={cvPath} download="Sithan-Sitana-CV.pdf">Download CV <Download aria-hidden size={17}/></a></div>
        </div>
      </object>
    </div>
  </div></section></>;
}
