import React, { useState } from "react";
import { useLang } from "../context/LangContext";
import { certifications } from "../data/content";
import { Certification } from "../types";

const issuerColors: Record<string, string> = {
  Coursera: "#3B82F6",
  "Cloud Native Computing Foundation": "#10B981",
  Udemy: "#8B5CF6",
  Integrify: "#F5A623",
  Salesforce: "#EC4899",
};

const CertificationCard: React.FC<{
  cert: Certification;
  issuerLabel: string;
  dateLabel: string;
  verifyLabel: string;
  pdfLabel: string;
  noLinkLabel: string;
  unavailableLabel: string;
}> = ({
  cert,
  issuerLabel,
  dateLabel,
  verifyLabel,
  pdfLabel,
  noLinkLabel,
  unavailableLabel,
}) => {
  const [expanded, setExpanded] = useState(false);
  const issuerColor = issuerColors[cert.issuer] || "#F5A623";
  const hasCredential = Boolean(cert.link || cert.pdfUrl);

  const stopToggle = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

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
                backgroundColor: `${issuerColor}22`,
                color: issuerColor,
              }}
            >
              {cert.issuer}
            </span>
            <span className="text-xs" style={{ color: "#A8B8C8" }}>
              {cert.date}
            </span>
          </div>
          <h3 className="font-display font-semibold text-lg text-white">
            {cert.name}
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

      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
          style={{
            backgroundColor: "rgba(13,27,42,0.8)",
            border: "1px solid rgba(42,63,84,0.6)",
          }}
        >
          <img
            src={cert.imageUrl}
            alt={`${cert.name} certificate`}
            className="w-full h-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: "#A8B8C8" }}
            >
              {issuerLabel}
            </p>
            <p className="text-sm" style={{ color: "#F5A623" }}>
              {cert.issuer}
            </p>
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: "#A8B8C8" }}
            >
              {dateLabel}
            </p>
            <p className="text-sm" style={{ color: "#A8B8C8" }}>
              {cert.date}
            </p>
          </div>
        </div>
      </div>

      {expanded && (
        <div
          className="border-t pt-4 flex flex-col gap-4"
          style={{ borderColor: "rgba(42,63,84,0.6)" }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#A8B8C8" }}>
            {hasCredential
              ? `${noLinkLabel} ${cert.issuer} credential below.`
              : unavailableLabel}
          </p>

          <div className="flex flex-wrap gap-2">
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2.5 py-1 rounded-md"
                style={{ color: "#F5A623" }}
                onClick={stopToggle}
              >
                {verifyLabel}
              </a>
            )}
            {cert.pdfUrl && (
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-2.5 py-1 rounded-md"
                style={{ color: "#F5A623" }}
                onClick={stopToggle}
              >
                {pdfLabel}
              </a>
            )}
            {!hasCredential && (
              <div
                className="flex items-center gap-2 text-xs py-2 px-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(13,27,42,0.5)",
                  color: "#A8B8C8",
                  border: "1px solid rgba(42,63,84,0.4)",
                }}
              >
                {unavailableLabel}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const Certifications: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p
            className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#F5A623" }}
          >
            {t.nav.certifications}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {t.certifications.title}
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#A8B8C8" }}>
            {t.certifications.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <CertificationCard
              key={`${cert.name}-${cert.issuer}`}
              cert={cert}
              issuerLabel={t.certifications.issuer}
              dateLabel={t.certifications.date}
              verifyLabel={t.certifications.verify}
              pdfLabel={t.certifications.pdf}
              noLinkLabel={t.certifications.noLink}
              unavailableLabel={t.certifications.unavailable}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
