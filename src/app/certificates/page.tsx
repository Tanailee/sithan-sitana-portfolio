import { PageHero } from "@/components/page-hero";
import { CertificateSearch } from "@/components/certificate-search";
import { certificates } from "@/data/certificates";
export const metadata = { title: "Certificates", description: "Verified learning record titles across data, machine learning, engineering, and professional development.", alternates: { canonical: "/certificates" } };
export default function Certificates() { return <><PageHero eyebrow="Learning record" title="Continued study across data, AI, and engineering." description="Only details present in the supplied record are shown. Dates and credential links are omitted rather than guessed."/><section className="section"><div className="container"><CertificateSearch certificates={certificates}/></div></section></>; }
