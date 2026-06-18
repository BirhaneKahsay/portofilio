import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LangContext";

type FormStatus = "idle" | "sending" | "success" | "error";
const EMAILJS_SERVICE_ID = "service_41gum8c";
const EMAILJS_TEMPLATE_ID = "template_ty3nsx5";
const EMAILJS_PUBLIC_KEY = "SWyFEnDHJkrJi41dz";

export const Contact: React.FC = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = {
    backgroundColor: "rgba(13,27,42,0.6)",
    border: "1px solid rgba(42,63,84,0.8)",
    color: "#F0EDE8",
    borderRadius: "8px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ backgroundColor: "rgba(30,45,61,0.3)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p
            className="text-xs font-display font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#F5A623" }}
          >
            {t.nav.contact}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base max-w-xl" style={{ color: "#A8B8C8" }}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div
            className="rounded-xl border p-8 flex flex-col gap-5"
            style={{
              backgroundColor: "#1E2D3D",
              borderColor: "rgba(42,63,84,0.8)",
            }}
          >
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "#A8B8C8" }}
              >
                {t.contact.name}
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.name}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(42,63,84,0.8)")
                }
              />
            </div>
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "#A8B8C8" }}
              >
                {t.contact.email}
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.email}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(42,63,84,0.8)")
                }
              />
            </div>
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "#A8B8C8" }}
              >
                {t.contact.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.message}
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(42,63,84,0.8)")
                }
              />
            </div>

            {status === "success" && (
              <div
                className="text-sm px-4 py-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(16,185,129,0.1)",
                  color: "#10B981",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                ✓ {t.contact.success}
              </div>
            )}
            {status === "error" && (
              <div
                className="text-sm px-4 py-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(239,68,68,0.1)",
                  color: "#EF4444",
                  border: "1px solid rgba(239,68,68,0.2)",
                }}
              >
                ✕ {t.contact.error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "sending" || status === "success"}
              className="font-display font-semibold text-sm px-6 py-3 rounded-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ backgroundColor: "#F5A623", color: "#0D1B2A" }}
            >
              {status === "sending" ? t.contact.sending : t.contact.send}
            </button>
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="font-display font-semibold text-white text-lg mb-2">
                {t.contact.orEmail}
              </p>
              <a
                href="mailto:birhane.kahsayw@gmail.com"
                className="text-lg font-medium transition-colors hover:opacity-80"
                style={{ color: "#F5A623" }}
              >
                birhane.kahsayw@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/birhane-kahsay/",
                  icon: "🔗",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/BirhaneKahsay",
                  icon: "⌥",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium transition-all hover:translate-x-1"
                  style={{ color: "#A8B8C8" }}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                    style={{ backgroundColor: "rgba(42,63,84,0.6)" }}
                  >
                    {link.icon}
                  </span>
                  {link.label}
                  <span style={{ color: "#F5A623" }}>→</span>
                </a>
              ))}
            </div>

            {/* Location chip */}
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "#A8B8C8" }}
            >
              <span>📍</span>
              <span>Netherlands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
