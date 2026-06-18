"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  ["About", "/about"], ["Experience", "/experience"], ["Projects", "/projects"],
  ["Applications", "/applications"], ["Research", "/research"], ["Education", "/education"],
  ["Certificates", "/certificates"], ["CV", "/cv"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = (href: string) => href === "/projects" ? pathname.startsWith("/projects") : pathname === href;
  return <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg)]/92 backdrop-blur-xl">
    <div className="container flex h-18 items-center justify-between gap-4">
      <Link href="/" aria-label="Sithan Sitana, home" className="text-lg font-black tracking-[-.04em]">SITHAN<span className="text-[var(--accent)]">.</span></Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-4 xl:flex">
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className={`border-b-2 py-2 text-sm font-semibold transition ${active(href) ? "border-[var(--accent)] text-[var(--text)]" : "border-transparent text-[var(--muted)] hover:text-[var(--accent)]"}`}>{label}</Link>)}
        <ThemeToggle />
      </nav>
      <div className="flex items-center gap-2 xl:hidden">
        <ThemeToggle />
        <button className="btn !w-auto !p-2.5" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X aria-hidden size={19}/> : <Menu aria-hidden size={19}/>}</button>
      </div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="container grid max-h-[calc(100vh-4.5rem)] gap-1 overflow-y-auto pb-5 xl:hidden">
      {links.map(([label, href]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-2.5 font-semibold ${active(href) ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]" : "hover:bg-[var(--surface)]"}`}>{label}</Link>)}
    </nav>}
  </header>;
}
