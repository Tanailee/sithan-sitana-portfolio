import { ApplicationCard } from "@/components/application-card";
import { PageHero } from "@/components/page-hero";
import { liveProjects } from "@/data/projects";

export const metadata = { title: "Applications", description: "Live Streamlit applications by Sithan Sitana across banking analytics, Khmer NLP, forecasting, information retrieval, and operational data tools.", alternates: { canonical: "/applications" } };

export default function Applications() {
  return <><PageHero eyebrow="Live application portfolio" title="Practical tools you can launch and use." description="Explore each application’s target users, practical purpose, main features, deployment status, screenshot, public source, and live experience."/><section className="section"><div className="container">
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-[var(--accent)] bg-[var(--accent-soft)] p-5 leading-7 text-[var(--accent-strong)]"><strong>Privacy note:</strong> Portfolio demonstrations use public, anonymized, educational, or synthetic data. They do not contain confidential customer or banking information.</div>
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 leading-7 muted"><strong className="text-[var(--text)]">Launch note:</strong> Streamlit Community Cloud applications may take a few moments to start after a period of inactivity.</div>
    </div>
    {liveProjects.length ? <div className="mt-8 grid gap-6">{liveProjects.map(project => <ApplicationCard project={project} key={project.id}/>)}</div> : <div className="card mt-8 p-8 text-center"><h2 className="font-black">No live applications published</h2><p className="mt-2 muted">Verified deployments will appear here when both source and live links are available.</p></div>}
  </div></section></>;
}
