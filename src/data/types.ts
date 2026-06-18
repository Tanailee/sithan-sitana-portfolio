export type ProjectStatus = "Live" | "Prototype" | "Under Development" | "Archived";

export type ProjectCategory =
  | "Applied AI"
  | "Banking Analytics"
  | "Banking Operations"
  | "Business Intelligence"
  | "Customer Experience"
  | "Dashboard"
  | "Data Application"
  | "Data Visualization"
  | "Financial Analysis"
  | "Financial Safety"
  | "Forecasting"
  | "Khmer NLP"
  | "Language Modelling"
  | "Machine Learning"
  | "Natural Language Processing"
  | "Recommendation System"
  | "Text Generation"
  | "Time Series";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  problem: string;
  solution: string;
  categories: ProjectCategory[];
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  objectives?: string[];
  dataset?: string;
  methodology?: string[];
  features?: string[];
  workflow?: string[];
  analyticalApproach?: string;
  results?: string[];
  limitations?: string[];
  futureImprovements?: string[];
}

export interface Experience { role: string; organization: string; period: string; summary: string; highlights: string[] }
export interface Education { degree: string; institution: string; location: string; period: string; details?: string[] }
export interface Certificate { title: string; provider?: string; date?: string; skills: string[]; credential?: string; image?: string }
