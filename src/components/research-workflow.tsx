import { ArrowRight } from "lucide-react";

const steps = [
  "Khmer Physics Dataset",
  "Data Cleaning and Structured Formatting",
  "Instruction Fine-Tuning",
  "Model Inference",
  "Evaluation",
  "Educational Review",
];

export function ResearchWorkflow() {
  return (
    <section className="card mt-12 p-6 sm:p-8" aria-labelledby="research-workflow-title">
      <p className="eyebrow">Research workflow</p>
      <h2 id="research-workflow-title" className="mt-3 text-2xl font-black tracking-[-.025em]">
        From educational material to reviewed model output
      </h2>
      <p className="mt-3 max-w-3xl leading-7 muted">
        The planned workflow keeps dataset preparation, model work, evaluation, and educational review as distinct stages.
      </p>
      <ol className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(11,minmax(0,auto))]" aria-label="Khmer physics research workflow stages">
        {steps.map((step, index) => (
          <li className="contents" key={step}>
            <div className="flex min-h-24 items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 xl:col-span-1 xl:min-w-36 xl:flex-col xl:justify-center xl:text-center">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-black text-[var(--accent-strong)]" aria-hidden="true">{index + 1}</span>
              <span className="text-sm font-bold leading-5">{step}</span>
            </div>
            {index < steps.length - 1 && <div className="flex items-center justify-center text-[var(--accent)] sm:hidden xl:flex" aria-hidden="true"><ArrowRight className="rotate-90 xl:rotate-0" size={18} /></div>}
          </li>
        ))}
      </ol>
    </section>
  );
}
