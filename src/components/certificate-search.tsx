"use client";
import { Award, ExternalLink, Search } from "lucide-react";
import { useState } from "react";
import type { Certificate } from "@/data/types";
export function CertificateSearch({ certificates }: { certificates: Certificate[] }) {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();
  const shown = certificates.filter(item => [item.title, item.provider, ...item.skills].filter(Boolean).some(value => value?.toLowerCase().includes(normalized)));
  return <>
    <label className="relative block max-w-lg"><span className="font-bold">Search learning records</span><Search aria-hidden className="absolute bottom-3.5 left-4 text-[var(--muted)]" size={18}/><input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Title, provider, or skill" className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] py-3 pl-11 pr-4"/></label>
    <p className="mt-3 text-sm muted" role="status" aria-live="polite">Showing {shown.length} of {certificates.length} records</p>
    {shown.length ? <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{shown.map(item => <article className="card p-6" key={item.title}><Award aria-hidden className="text-[var(--accent)]"/><h2 className="mt-4 text-lg font-black">{item.title}</h2>{item.provider && <p className="mt-2 text-sm muted">{item.provider}</p>}{item.date && <p className="mt-1 text-sm muted">Issued {item.date}</p>}{item.skills.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{item.skills.map(skill => <span className="chip" key={skill}>{skill}</span>)}</div>}{item.credential && <a href={item.credential} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-[var(--accent)]">Verify credential <ExternalLink aria-hidden size={15}/></a>}</article>)}</div> : <div className="card mt-7 p-8 text-center"><h2 className="font-black">No matching records</h2><p className="mt-2 muted">Try a broader title, provider, or skill.</p></div>}
  </>;
}
