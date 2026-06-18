"use client";

import { Copy, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm({ email }: { email: string }) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    window.setTimeout(() => setCopyStatus("idle"), 2000);
  }

  function openMail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject") || "Portfolio enquiry");
    const message = String(form.get("message") || "");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
    <section className="card p-6 sm:p-7" aria-labelledby="email-heading"><Mail aria-hidden className="text-[var(--accent)]"/><h2 id="email-heading" className="mt-4 text-xl font-black">Professional email</h2><a className="mt-3 block break-all font-bold text-[var(--accent)]" href={`mailto:${email}`} aria-label={`Email Sithan Sitana at ${email}`}>{email}</a><div className="mt-5 flex flex-col gap-2 sm:flex-row"><a className="btn btn-primary sm:!w-auto" href={`mailto:${email}`}>Write an email <Send aria-hidden size={16}/></a><button className="btn sm:!w-auto" type="button" onClick={copyEmail} aria-live="polite"><Copy aria-hidden size={16}/>{copyStatus === "copied" ? "Email copied" : copyStatus === "error" ? "Copy unavailable" : "Copy email"}</button></div></section>
    <form className="card p-6 sm:p-7" onSubmit={openMail} aria-labelledby="message-heading"><h2 id="message-heading" className="text-xl font-black">Start a message</h2><p className="mt-2 text-sm leading-6 muted">This form opens your email application. It does not send, store, or process your message on this website.</p><div className="mt-5 grid gap-4"><label className="font-bold">Subject<input className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 font-normal" name="subject" required autoComplete="off"/></label><label className="font-bold">Message<textarea className="mt-2 min-h-36 w-full resize-y rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 font-normal" name="message" required/></label><button className="btn btn-primary sm:!w-auto sm:justify-self-start" type="submit">Open email application <Send aria-hidden size={16}/></button></div></form>
  </div>;
}
