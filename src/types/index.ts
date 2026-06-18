export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  type: "middleware" | "fullstack" | "concept" | "tool";
  year: string;
  highlights: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Education {
  institution: string;
  name: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  pdfUrl: string;
  imageUrl: string;
  date: string;
  link?: string;
}

export interface Translation {
  nav: {
    home: string;
    projects: string;
    certifications: string;
    experience: string;
    education: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
    cvBtn: string;
  };
  projects: {
    title: string;
    subtitle: string;
    noUrl: string;
    highlights: string;
    tech: string;
    all: string;
    middleware: string;
    fullstack: string;
    concept: string;
    tool: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    issuer: string;
    date: string;
    verify: string;
    pdf: string;
    noLink: string;
    unavailable: string;
  };
  experience: {
    title: string;
    subtitle: string;
    tech: string;
  };
  education: {
    title: string;
    subtitle: string;
    institution: string;
    period: string;
    tech: string;
  };
  about: {
    title: string;
    subtitle: string;
    body: string[];
    skills: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    orEmail: string;
  };
  footer: {
    rights: string;
    built: string;
  };
}
