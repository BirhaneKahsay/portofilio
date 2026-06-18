import React, { useState } from "react";
import { useLang } from "../context/LangContext";
import { Educations } from "../data/content";
import { Education as EducationType } from "../types";

const institutionColors: Record<string, string> = {
  "Addis Ababa University": "#3B82F6",
  Integrify: "#8B5CF6",
  "Salesforce Trailhead": "#EC4899",
  "Internationale Diplomawaardering (IDW) van het Nederlands Centrum voor Internationale Betrekkingen (Nuffic)": "#10B981",
};

const EducationCard: React.FC<{
  edu: EducationType;
  institutionLabel: string;
  periodLabel: string;
  techLabel: string;
}> = ({ edu, institutionLabel, periodLabel, techLabel }) => {
  const [expanded, setExpanded] = useState(false);
  const institutionColor =
    institutionColors[edu.institution] || "#F5A623";

  return (
    <div
      className="card-hover rounded-xl border p-6 flex flex-col gap-5 cursor-pointer"
      style={{ backgroundColor: "#1E2D3D", borderColor: "rgba(42,63,84,0.8)" }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${institutionColor}22`,
                color: institutionColor,
              }}
            >
              {edu.institution}
            </span>
            <span className="text-xs" style={{ color: "#A8B8C8" }}>
              {edu.period}
            </span>
          </div>
          <h3 className="font-display font-semibold text-lg text-white">
            {edu.name}
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

      <div className="flex flex-col gap-2">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: "#A8B8C8" }}
          >
            {institutionLabel}
          </p>
          <p className="text-sm" style={{ color: "#F5A623" }}>
            {edu.institution}
          </p>
        </div>
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: "#A8B8C8" }}
          >
            {periodLabel}
          </p>
          <p className="text-sm" style={{ color: "#A8B8C8" }}>
            {edu.period}
          </p>
        </div>
      </div>

      {expanded && (
        <div
          className="border-t pt-4 flex flex-col gap-4"
          style={{ borderColor: "rgba(42,63,84,0.6)" }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#A8B8C8" }}>
            {edu.description}
          </p>

          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "#A8B8C8" }}
            >
              {techLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {edu.tech.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md"
                  style={{
                    backgroundColor: "rgba(13,27,42,0.8)",
                    color: "#A8B8C8",
                    border: "1px solid rgba(42,63,84,0.6)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Education: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p
            className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#F5A623" }}
          >
            {t.nav.education}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {t.education.title}
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#A8B8C8" }}>
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Educations.map((edu, index) => (
            <EducationCard
              key={`${edu.name}-${edu.institution}`}
              edu={edu}
              institutionLabel={t.education.institution}
              periodLabel={t.education.period}
              techLabel={t.education.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};