import React from "react";
import { useLang } from "../context/LangContext";
import { experiences } from "../data/content";

export const Experience: React.FC = () => {
  const { t } = useLang();
  const ordered_experiences = [...experiences].sort((a, b) => {
    const parseEnd = (period: string): number => {
      const parts = period.split(/\s*-\s*/);
      const end = parts[parts.length - 1].trim().toLowerCase();
      if (end === "present" || end === "now" || end === "current")
        return Date.now();
      const year = parseInt(end, 10);
      if (!isNaN(year)) return new Date(year, 11, 31).getTime(); // end of that year
      return new Date(end).getTime(); // fallback for full date strings
    };

    return parseEnd(b.period) - parseEnd(a.period);
  });

  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ backgroundColor: "rgba(30,45,61,0.3)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p
            className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#F5A623" }}
          >
            {t.nav.experience}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#A8B8C8" }}>
            {t.experience.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px ml-4 md:ml-6 hidden sm:block"
            style={{ backgroundColor: "rgba(42,63,84,0.8)" }}
          />

          <div className="flex flex-col gap-8">
            {ordered_experiences.map((exp, i) => (
              <div key={i} className="flex gap-8 sm:gap-12">
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-3 h-3 rounded-full border-2 mt-1.5 z-10"
                    style={{
                      borderColor: "#F5A623",
                      backgroundColor: "#0D1B2A",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-xl border p-6 card-hover"
                  style={{
                    backgroundColor: "#1E2D3D",
                    borderColor: "rgba(42,63,84,0.8)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {exp.role}
                      </h3>
                      <p
                        className="font-medium mt-0.5"
                        style={{ color: "#F5A623" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-sm px-3 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: "rgba(245,166,35,0.1)",
                        color: "#F5A623",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "#A8B8C8" }}
                  >
                    {exp.description}
                  </p>

                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "#A8B8C8" }}
                    >
                      {t.experience.tech}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md font-mono"
                          style={{
                            backgroundColor: "rgba(13,27,42,0.8)",
                            color: "#A8B8C8",
                            border: "1px solid rgba(42,63,84,0.6)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
