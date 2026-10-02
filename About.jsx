import React from "react";
import { Link } from "react-router-dom";
import { Award, ShieldCheck, Truck, Package, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { companyInfo } from "../data/company";

export default function About({ onOpenQuote, onOpenCatalog }) {
  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about IRAVYA GLOBAL - bridging local Indian agricultural excellence with demanding global markets through direct farm sourcing and strict quality standards."
      />

      {/* Page Header */}
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="badge-gold">ABOUT IRAVYA GLOBAL</span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#ffffff",
              marginTop: "0.75rem",
              marginBottom: "0.5rem"
            }}
          >
            Rooted in India. Reaching the World.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--gold-light)", fontStyle: "italic" }}>
            Bridging Indian Agriculture With Global Quality Standards
          </p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center"
            }}
          >
            {/* Story & Philosophy */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.8rem",
                  color: "var(--navy-main)",
                  marginBottom: "1rem"
                }}
              >
                OUR ESSENCE & MISSION
              </h2>

              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                {companyInfo.aboutText[0]}
              </p>

              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                {companyInfo.aboutText[1]}
              </p>

              <div
                style={{
                  background: "#ffffff",
                  borderLeft: "4px solid var(--gold-main)",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "0 8px 8px 0",
                  boxShadow: "var(--shadow-sm)",
                  marginBottom: "2rem"
                }}
              >
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--navy-main)", fontSize: "1.1rem" }}>
                  "PURE SPICES. PURE PROMISE."
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Our pledge to every international importer, distributor, and wholesale partner worldwide.
                </p>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button className="btn-primary" onClick={onOpenQuote}>
                  REQUEST EXPORT QUOTE
                </button>
                <button className="btn-secondary" onClick={onOpenCatalog} style={{ borderColor: "var(--navy-main)", color: "var(--navy-main)" }}>
                  VIEW PDF CATALOG
                </button>
              </div>
            </div>

            {/* Catalog Banner Art */}
            <div>
              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  border: "2px solid var(--gold-main)"
                }}
              >
                <img
                  src="/assets/catalog_page_2.png"
                  alt="IRAVYA GLOBAL About Document"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Grid */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0b192c", color: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">Operational Excellence</span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.2rem",
                color: "#ffffff",
                marginTop: "0.75rem",
                marginBottom: "0.5rem"
              }}
            >
              CORE COMMITMENTS & STRENGTHS
            </h2>
            <div className="gold-divider gold-divider-center" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem"
            }}
          >
            {companyInfo.commitments.map((c) => (
              <div key={c.id} className="card-dark">
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--gold-main)",
                    fontSize: "1.15rem",
                    marginBottom: "0.75rem"
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#cbd5e1", lineHeight: 1.6 }}>{c.fullDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
