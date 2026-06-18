import { Code2, Download, ExternalLink, Link2, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { profile } from "@/data/profile";

export const metadata = { title: "Contact", description: `Contact ${profile.name} for research collaboration, data science projects, academic discussion, and knowledge exchange.`, alternates: { canonical: "/contact" }, openGraph: { title: `Contact | ${profile.name}`, description: profile.contactIntroduction } };

export default function Contact() {
  return <><PageHero eyebrow="Contact" title="Research, analytics, and professional conversations." description={profile.contactIntroduction}/><section className="section"><div className="container">
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <article className="card p-6"><MapPin aria-hidden className="text-[var(--accent)]"/><h2 className="mt-4 font-black">Location</h2><address className="mt-2 not-italic muted">{profile.location}</address></article>
      <article className="card p-6"><Code2 aria-hidden className="text-[var(--accent)]"/><h2 className="mt-4 font-black">GitHub</h2><a className="mt-2 inline-flex min-h-11 items-center gap-2 font-bold text-[var(--accent)]" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Open Sithan Sitana’s GitHub profile in a new tab">github.com/Tanailee <ExternalLink aria-hidden size={15}/></a></article>
      <article className="card p-6"><Link2 aria-hidden className="text-[var(--muted)]"/><h2 className="mt-4 font-black">LinkedIn</h2>{profile.linkedin ? <a className="mt-2 inline-flex min-h-11 items-center gap-2 font-bold text-[var(--accent)]" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open Sithan Sitana’s LinkedIn profile in a new tab">LinkedIn profile <ExternalLink aria-hidden size={15}/></a> : <p className="mt-2 text-sm leading-6 muted">Not configured — add a verified LinkedIn URL in <code>src/data/profile.ts</code>.</p>}</article>
    </div>
    <div className="mt-6"><ContactForm email={profile.email}/></div>
    <div className="mt-6 grid gap-5 lg:grid-cols-2"><aside className="card p-6"><ShieldCheck aria-hidden className="text-[var(--accent)]"/><h2 className="mt-4 text-xl font-black">Privacy and security</h2><p className="mt-3 leading-7 muted">This static portfolio does not collect contact-form submissions, expose API keys, or publish a phone number, home address, identification details, internal banking contacts, or confidential workplace information.</p></aside><aside className="card p-6"><Download aria-hidden className="text-[var(--accent)]"/><h2 className="mt-4 text-xl font-black">Curriculum vitae</h2><p className="mt-3 leading-7 muted">Download the current CV for a consolidated view of professional experience and education.</p><a className="btn mt-5 sm:!w-auto" href="/cv.pdf" download>Download CV <Download aria-hidden size={16}/></a></aside></div>
  </div></section></>;
}
