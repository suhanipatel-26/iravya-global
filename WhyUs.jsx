import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Truck, PackageCheck, CheckCircle2, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { companyInfo } from "../data/company";

export default function WhyUs({ onOpenQuote, onOpenCatalog }) {
  return (
    <div>
      <SEO
        title="Why Choose Us"
        description="Discover IRAVYA GLOBAL's 4 core commitments: direct farm sourcing, strict quality assurance, global logistics compliance, and flexible custom packaging."
      />

      {/* Header */}
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="badge-gold">TRUST & EXCELLENCE</span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#ffffff",
              marginTop: "0.75rem",
              marginBottom: "0.5rem"
            }}
          >
            WHY CHOOSE IRAVYA GLOBAL?
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--gold-light)", fontStyle: "italic" }}>
            Quality, Care and Reliability From Farm to Global Market
          </p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      {/* 4 Core Pillars Detailed Breakdown */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {companyInfo.commitments.map((c, idx) => (
              <div
                key={c.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2.5rem",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--cream-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "2.5rem",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                <div>
                  <span className="badge-gold">Pillar 0{idx + 1}</span>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.8rem",
                      color: "var(--navy-main)",
                      fontWeight: 800,
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem"
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--gold-accent)", marginBottom: "1rem" }}>
                    "{c.shortDesc}"
                  </p>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {c.fullDesc}
                  </p>
                  <button className="btn-primary" onClick={onOpenQuote}>
                    REQUEST QUOTE <ArrowRight size={16} />
                  </button>
                </div>

                <div
                  style={{
                    backgroundColor: "#f7f4ee",
                    borderRadius: "var(--radius-sm)",
                    padding: "2rem",
                    border: "1px dashed var(--gold-accent)"
                  }}
                >
                  <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", marginBottom: "1rem" }}>
                    QUALITY STANDARDS GUARANTEED
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                      <CheckCircle2 size={18} color="var(--gold-main)" style={{ flexShrink: 0 }} />
                      <span>Ethically harvested & ethically grown</span>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                      <CheckCircle2 size={18} color="var(--gold-main)" style={{ flexShrink: 0 }} />
                      <span>Strict sizing, caliber selection & clean sorting</span>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                      <CheckCircle2 size={18} color="var(--gold-main)" style={{ flexShrink: 0 }} />
                      <span>Export-ready moisture proof packaging</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
