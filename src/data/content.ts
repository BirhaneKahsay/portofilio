import { Project, Experience, Certification, Education } from "../types";

export const projects: Project[] = [
  {
    id: "moyaye",
    title: "Moyaye",
    description:
      "A webbased platform that enables users to place gig projects and freelance job orders, facilitating seamless collaboration between clients and freelancers.",
    longDescription:
      "Moyaye is a web-based platform that connects clients with freelancers for gig projects and job orders. It provides a user-friendly interface for posting projects, browsing freelancer profiles, and managing project workflows. The platform includes features such as secure payment processing, project tracking, and communication tools to facilitate collaboration between clients and freelancers.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker"],
    type: "fullstack",
    year: "2024",
    highlights: [
      "User-friendly interface for posting projects and browsing freelancer profiles",
      "Secure payment processing and project tracking features",
      "Communication tools for seamless collaboration between clients and freelancers",
      "Built with React, TypeScript, Node.js, Express, MongoDB, and Docker",
    ],
    link: "https://moyaye.com/",
  },
  {
    id: "OrderProcessingSystem",
    title: "Order Processing System",
    description:
      "The system is a sophisticated AI-powered email-to print-order automation platform built with FastAPI. The system automates the entire workflow of processing print orders for an organization (UWV), from email intak to production order submission.",
    longDescription:
      "This is an intelligent order processing system that bridges the gap between email-based print requests and automated production fulfillment. The system monitors incoming emails, uses OpenAI's AI capabilities to extract structured order information from natural language descriptions, matches products to appropriate SKUs, validates addresses across multiple countries (Netherlands, Belgium, Germany), and automatically submits formatted orders to the WIHABO PFA (Print For All) production system",
    tech: [
      "Python",
      "FastAPI",
      "NLP",
      "Email Parsing",
      "ERP Integration",
      "Docker",
    ],
    type: "fullstack",
    year: "2025",
    highlights: [
      "AI-powered email parsing and order information extraction using OpenAI",
      "Automated SKU matching and address validation across multiple countries",
      "Seamless integration with WIHABO PFA production system for order submission",
      "Built with FastAPI, Python, NLP techniques, and Docker for deployment",
    ],
  },
  {
    id: "artis",
    title: "Artis Middleware Platform",
    description:
      "Enterprise integration platform connecting AFAS ERP, Freshdesk CRM, SAN(Storage Area Network), telephony(3CX), and PFA into a unified workflow engine.",
    longDescription:
      "A production FastAPI middleware that orchestrates real-time data synchronisation across AFAS (Dutch ERP), Freshdesk, 3CX telephony, PFA print fulfillment, and Storage Area Network for Archive of attachements. Handles tens of thousands of events daily with retry logic, dead-letter queues, and rate limiting.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Tenacity",
    ],
    type: "middleware",
    year: "2026",
    highlights: [
      "Event-driven sync pipeline with DLQ and automatic retry with exponential backoff",
      "Redis-backed rate limiter respecting Freshdesk API quotas (429 handling)",
      "Idempotent upsert logic preventing duplicate records across ERP and CRM",
      "Alembic migration system for zero-downtime schema changes",
      "Admin dashboard with paginated log viewer and DLQ reprocessing",
    ],
  },
  {
    id: "printRelay",
    title: "PrintRelay",
    description:
      "Shopify-to-print-provider middleware handling order routing, SKU mapping, and fulfillment orchestration.",
    longDescription:
      "A SaaS middleware designed for print-on-demand businesses. Merchants connect their Shopify store via OAuth, map their product SKUs to print provider variants, and PrintRelay handles order ingestion, transformation, routing, and fulfillment status sync.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Shopify API",
      "React",
      "TypeScript",
      "Docker",
    ],
    type: "middleware",
    year: "2025",
    highlights: [
      "Shopify OAuth 2.0 with HMAC validation and JWT App Bridge session tokens",
      "Per-tenant SKU mapping with fallback routing rules",
      "Webhook ingestion with idempotency keys and replay protection",
      "Fulfillment status polling with configurable retry intervals",
      "Embedded Shopify Admin UI for merchant self-service configuration",
    ],
  },
  {
    id: "artis-widget",
    title: "Artis Freshdesk Widget",
    description:
      "Freshdesk sidebar extension that surfaces Artis data — order history, fulfillment status, and AFAS records — directly in the CRM ticket view.",
    longDescription:
      "A Freshdesk Developer Kit (FDK) v3.0 serverless app embedded as a sidebar widget. Support agents see live order data from Artis without leaving Freshdesk. Handles binary file retrieval via a dedicated base64 proxy endpoint to work around FDK network limitations.",
    tech: ["JavaScript", "Freshdesk FDK", "Node.js", "FastAPI", "HTML/CSS"],
    type: "tool",
    year: "2026",
    highlights: [
      "FDK v3.0 serverless architecture with server/server.js and manifest.json config",
      "Base64 proxy endpoint to serve binary files within FDK network constraints",
      "Real-time order timeline with fulfillment events pulled from Artis API",
      "AFAS contact lookup with live organisational data",
    ],
  },
  {
    id: "Social_Media_Post_Automation",
    title: "Social Media Post Automation",
    description:
      "A Python-based automation tool that generates and schedules social media posts across multiple platforms using OpenAI's GPT-4 for content creation.",
    longDescription:
      "This project is a Python automation tool that leverages OpenAI's GPT-4 to generate engaging social media content based on user-defined topics and keywords. The tool can schedule posts across various platforms such as Facebook, and Telegram, using their respective APIs. It includes features for content customization, hashtag generation, and analytics tracking to optimize post performance.",
    tech: ["Python", "OpenAI GPT-4", "Social Media APIs", "Scheduling"],
    type: "tool",
    year: "2026",
    highlights: [
      "Automated content generation using GPT-4 for diverse topics",
      "Cross-platform scheduling with API integration for major social media sites",
      "Customizable post templates and hashtag suggestions",
      "Analytics tracking for engagement and performance optimization",
    ],
  },
  {
    id: "mcp-weather",
    title: "FastMCP Weather Server",
    description:
      "A Model Context Protocol (MCP) server exposing NWS weather forecast and alert tools to Claude Desktop.",
    longDescription:
      "A Python MCP server built with FastMCP, providing real-time weather tools (forecasts and active alerts) via the National Weather Service API. Integrated with Claude Desktop on Windows, enabling AI-assisted weather lookups inside chat.",
    tech: ["Python", "FastMCP", "Claude Desktop", "NWS API", "uv"],
    type: "tool",
    year: "2026",
    highlights: [
      "MCP-compliant tool definitions with typed input schemas",
      "NWS grid-point resolution from lat/lng coordinates",
      "Windows-compatible stdio transport with uv module runner",
      "Extensible architecture prepared for KNMI Netherlands weather integration",
    ],
  },
  {
    id: "chatbotApp",
    title: "Chatbot Application",
    description:
      "An intelligent conversational AI system that enables natural language querying of enterprise databases. Users can ask questions in plain English and receive accurate, contextual responses backed by live database queries across multiple data sources.",
    longDescription:
      "This project is a sophisticated RAG (Retrieval-Augmented Generation) chatbot system designed to democratize database access through natural language interaction. The system automatically classifies user questions, generates appropriate SQL queries, executes them across multiple database connections (PFA and FlowCenter schemas), and provides intelligent summaries of the results.The application features advanced conversation management with persistent chat history, context-aware follow-up questions, and smart entity recognition. It includes robust error handling, query validation, and security measures to prevent SQL injection. The system can handle complex queries across different database scopes, merge results from multiple sources, and maintain conversation context for seamless multi-turn interactions.The frontend provides a modern, responsive chat interface with real-time streaming responses, conversation management, search functionality, and mobile-friendly design patterns.",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "SQLAlchemy",
      "ChromaDB",
      "Docker",
      "OpenAI",
      "Typescript",
      "Vue.js",
      "NGINX reverse proxy",
    ],
    type: "fullstack",
    year: "2025",
    highlights: [
      "Intelligent query classification with LLM to determine whether the questions relate to PFA, Flowcenter, or Both databases, and whether they require SQL generation, RAG retrieval, or clarification.",
      "Context-Aware Conversation Management with persistent chat history, follow-up question handling, and entity recognition to maintain context across multiple turns.",
      "Security first approach and real-time streaming responses with FastAPI SSE endpoints, ensuring that users receive immediate feedback while maintaining the integrity and confidentiality of the underlying data.",
      "Multi-Database Integration and Robust Error handeling",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Ethiopian Electric Power (EEP)",
    role: "Information security Analyst",
    period: "2020 – 2022",
    description:
      "Monitored and analyzed security events across EEP's network, utilizing SIEM tools to detect and respond to potential threats. Conducted vulnerability assessments and implemented security measures to protect critical infrastructure. Collaborated with cross-functional teams to ensure compliance with cybersecurity policies and best practices.",
    tech: [
      "SIEM Tools",
      "Vulnerability Assessment",
      "Incident Response",
      "Network Security",
    ],
  },
  {
    company: "Freelance",
    role: "Fullstack Developer",
    period: "2024 – 2025",
    description:
      "Built custom web applications and automation tools for small businesses, including a CRM dashboard for a local retailer and a data scraper for market research. Developed skills in Python, JavaScript, React, FastAPI, and DigitalOcean deployment.",
    tech: ["Python", "JavaScript", "React", "FastAPI", "DigitalOcean"],
  },
  {
    company: "ADC ICT",
    role: "Software Developer",
    period: "2025 – Present",
    description:
      "Building and maintaining Artis, a middleware integration platform that connects AFAS ERP, Freshdesk CRM, 3CX telephony, Shopify, and print fulfillment providers. Responsible for system architecture, API design, deployment pipelines, and internal tooling.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Shopify API",
      "AFAS API",
      "Freshdesk API",
      "GitLab CI",
    ],
  },
];

export const Educations: Education[] = [
  {
    name: "Wetenschappelijk onderwijs in de richting Electrical Engineering.",
    institution:
      "Internationale Diplomawaardering (IDW) van het Nederlands Centrum voor Internationale Betrekkingen (Nuffic)",
    period: "2024",
    description:
      "De IDW is een officiële verklaring die de gelijkwaardigheid van een buitenlands diploma aan een Nederlands diploma bevestigt. Het is bedoeld voor mensen die in Nederland willen studeren of werken en hun buitenlandse diploma willen laten erkennen.",
    tech: ["Nuffic", "IDW", "Diploma Recognition"],
  },
  {
    name: "BSc in Computer Engineering/Electrical and computer Engineering",
    institution: "Addis Ababa University",
    period: "2014 - 2019",
    description:
      "Studied core computer science concepts including algorithms, data structures, databases, and software engineering. Completed a thesis project on IoT based efficient garbage and waste management systems and Urban beautiy",
    tech: ["Python", "Java", "SQL", "Machine Learning"],
  },
  {
    name: "Fullstack Development Bootcamp",
    institution: "Integrify",
    period: "2024",
    description:
      "Intensive fullstack development program covering frontend and backend technologies, database design, and deployment. Built multiple projects using React, TypeScript, Node.js, Express, PostgreSQL, and Docker.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker"],
  },
  {
    name: "Salesforce Administrator Training",
    institution: "Salesforce Trailhead",
    period: "2024",
    description:
      "Completed comprehensive training on Salesforce administration, including user management, security, data management, and automation. Earned the Salesforce Administrator credential.",
    tech: ["Salesforce", "CRM", "Automation", "Data Management"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "React", "LangChain", "LangGraph"],
  },
  {
    category: "Data & DB",
    items: ["PostgreSQL", "Redis", "SQLAlchemy", "Alembic", "pgvector"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Docker Compose", "Caddy", "GitLab CI"],
  },
  {
    category: "Integrations",
    items: ["Shopify API", "AFAS API", "Freshdesk API", "3CX", "MCP"],
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "scikit-learn", "RAG", "LLM Agents", "LSTM"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Azure Cloud Computing Fundamentals",
    issuer: "Coursera",
    link: "https://coursera.org/verify/ZH21THJNXGTP",
    pdfUrl: "",
    imageUrl: "assets/azure.jpeg",
    date: "Issued May 2026, -",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Cloud Native Computing Foundation",
    link: "https://coursera.org/verify/professional-cert/ZSDZGB7JJ3BK",
    pdfUrl: "",
    imageUrl: "assets/Certificate1.JPG",
    date: "Issued Mar 2024, Expires Mar 2027",
  },
  {
    name: "Master Git and GitHub",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-1e3f5c7b-8d4a-4f6e-9b2c-1e3f5c7b8d4a/",
    pdfUrl: "assets/udemy.pdf",
    imageUrl: "assets/Certificate4.JPG",
    date: "Issued Feb 2024, Expires Feb 2027",
  },
  {
    name: "Fullstack development",
    issuer: "Integrify",
    link: "https://www.integrify.io/",
    pdfUrl: "assets/integrify.pdf",
    imageUrl: "assets/Certificate2.JPG",
    date: "Issued Apr 2024, Expires Apr 2027",
  },
  {
    name: "Salesforce Administrator",
    issuer: "Salesforce",
    link: "https://trailhead.salesforce.com/en/credentials/administrator",
    pdfUrl: "assets/salesforceAssociate.pdf",
    imageUrl: "assets/Certificate3.JPG",
    date: "Issued May 2024, Expires May 2027",
  },
];
