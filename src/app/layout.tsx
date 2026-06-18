import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";

const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: `${profile.name} · Data Science & Banking Analytics`, template: `%s · ${profile.name}` },
  description: profile.summary,
  applicationName: `${profile.name} Portfolio`,
  openGraph: { title: profile.headline, description: profile.summary, type: "website", locale: "en_US", url: site, siteName: `${profile.name} Portfolio`, images: [{ url: "/professional-photo.jpg", alt: `Portrait of ${profile.name}` }] },
  twitter: { card: "summary_large_image", title: profile.headline, description: profile.summary, images: ["/professional-photo.jpg"] },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.headline, description: profile.summary, address: { "@type": "PostalAddress", addressLocality: "Phnom Penh", addressCountry: "Cambodia" }, url: site };
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader/><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/></body></html>;
}
