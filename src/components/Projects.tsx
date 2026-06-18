import React, { useState } from "react";
import { useLang } from "../context/LangContext";
import { projects } from "../data/content";
import { Project } from "../types";

const typeColors: Record<string, string> = {
  middleware: "#3B82F6",
  fullstack: "#10B981",
  concept: "#8B5CF6",
  tool: "#F5A623",
};

const ProjectCard: React.FC<{
  project: Project;
  noUrl: string;
  highlightsLabel: string;
  techLabel: string;
  typeLabel: string;
}> = ({ project, noUrl, highlightsLabel, techLabel, typeLabel }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="card-hover rounded-xl border p-6 flex flex-col gap-5 cursor-pointer"
      style={{ backgroundColor: "#1E2D3D", borderColor: "rgba(42,63,84,0.8)" }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${typeColors[project.type]}22`,
                color: typeColors[project.type],
              }}
            >
              {typeLabel}
            </span>
            <span className="text-xs" style={{ color: "#A8B8C8" }}>
              {project.year}
            </span>
          </div>
          <h3 className="font-display font-semibold text-lg text-white">
            {project.title}
          </h3>
        </div>
        <span
          className="text-xl mt-1 select-none"
          style={{
            color: "#A8B8C8",
            transition: "transform 0.2s",
            transform: expanded ? "rotate(180deg)" : "none",
          }}
        >
          ⌄
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "#A8B8C8" }}>
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {project.tech.slice(0, expanded ? undefined : 4).map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md font-mono"
            style={{
              backgroundColor: "rgba(13,27,42,0.8)",
              color: "#A8B8C8",
              border: "1px solid rgba(42,63,84,0.6)",
            }}
          >
            {t}
          </span>
        ))}
        {!expanded && project.tech.length > 4 && (
          <span
            className="text-xs px-2.5 py-1 rounded-md"
            style={{ color: "#F5A623" }}
          >
            +{project.tech.length - 4} more
          </span>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-2.5 py-1 rounded-md"
            style={{ color: "#F5A623" }}
          >
            View Project
          </a>
        )}
      </div>

      {/* Expanded content */}
      {expanded && (
        <div
          className="border-t pt-4 flex flex-col gap-4"
          style={{ borderColor: "rgba(42,63,84,0.6)" }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#A8B8C8" }}>
            {project.longDescription}
          </p>

          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "#F5A623" }}
            >
              {highlightsLabel}
            </p>
            <ul className="flex flex-col gap-1.5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm flex items-start gap-2"
                  style={{ color: "#A8B8C8" }}
                >
                  <span
                    style={{
                      color: "#F5A623",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    ›
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-2.5 py-1 rounded-md"
              style={{ color: "#F5A623" }}
            >
              View Project
            </a>
          ) : (
            <div
              className="flex items-center gap-2 text-xs py-2 px-3 rounded-lg"
              style={{
                backgroundColor: "rgba(13,27,42,0.5)",
                color: "#A8B8C8",
                border: "1px solid rgba(42,63,84,0.4)",
              }}
            >
              <span>🔒</span>
              <span>{noUrl}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const Projects: React.FC = () => {
  const { t } = useLang();
  const [filter, setFilter] = useState<string>("all");

  const typeLabels: Record<string, string> = {
    all: t.projects.all,
    middleware: t.projects.middleware,
    fullstack: t.projects.fullstack,
    tool: t.projects.tool,
  };

  const ordered_projects = [...projects].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year),
  );

  const filtered =
    filter === "all"
      ? ordered_projects
      : ordered_projects.filter((p) => p.type === filter);

  const getTypeLabel = (type: string) => typeLabels[type] || type;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#F5A623" }}
          >
            {t.nav.projects}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#A8B8C8" }}>
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {(["all", "middleware", "fullstack", "tool"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className="text-sm px-4 py-2 rounded-full font-medium transition-all"
              style={{
                backgroundColor:
                  filter === type ? "#F5A623" : "rgba(30,45,61,0.8)",
                color: filter === type ? "#0D1B2A" : "#A8B8C8",
                border: `1px solid ${filter === type ? "#F5A623" : "rgba(42,63,84,0.6)"}`,
              }}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              noUrl={t.projects.noUrl}
              highlightsLabel={t.projects.highlights}
              techLabel={t.projects.tech}
              typeLabel={getTypeLabel(project.type)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
