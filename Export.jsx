import React from "react";
import { Link } from "react-router-dom";
import { Truck, Package, Globe, ShieldCheck, ArrowRight, Download } from "lucide-react";
import SEO from "../components/SEO";

export default function Export({ onOpenQuote, onOpenCatalog }) {
  return (
    <div>
      <SEO
        title="Export & Packaging"
        description="IRAVYA GLOBAL agricultural export services: Bulk commodity supply, retail stand-up pouches, private label branding, and temperature-controlled cold chain logistics."
      />

      {/* Header */}
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="badge-gold">GLOBAL COMMODITY TRADE</span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#ffffff",
              marginTop: "0.75rem",
              marginBottom: "0.5rem"
            }}
          >
            FROM INDIA TO THE WORLD
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--gold-light)", fontStyle: "italic" }}>
            Reliable Agricultural Export Solutions
          </p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      {/* 4 Cards Grid */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem"
            }}
          >
            {[
              {
                title: "BULK ORDERS",
                desc: "Supplying multi-ton bulk shipments in 25kg/50kg export grade HDPE, jute, or craft paper bags with moisture barriers."
              },
              {
                title: "EXPORT PACKAGING",
                desc: "High-barrier 200g & 1kg zipper stand-up pouches designed for retail shelves and long maritime transit."
              },
              {
                title: "PRIVATE LABEL",
                desc: "Customized private-label packaging and barcode integration tailored to international distributor specifications."
              },
              {
                title: "GLOBAL LOGISTICS",
                desc: "Full export documentation, phytosanitary certifications, port customs clearance, and cold-chain reefer shipping."
              }
            ].map((card, idx) => (
              <div key={idx} className="card-luxury">
                <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
                  {card.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Actual Uploaded Packaging Showcase */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge-gold">Actual Pouch Artwork</span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--navy-main)", marginTop: "0.5rem" }}>
              PACKAGED FOR QUALITY
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              We offer flexible packaging solutions designed for retail, bulk and private-label requirements.
            </p>
            <div className="gold-divider gold-divider-center" />
          </div>

          {/* 3 Packaging Images Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem"
            }}
          >
            <div className="card-luxury" style={{ textAlign: "center" }}>
              <img src="/assets/turmeric_packaging.jpg" alt="Turmeric Powder 200g Pouch" style={{ height: "240px", objectFit: "contain", marginBottom: "1rem" }} />
              <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)" }}>RETAIL STAND-UP POUCHES</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>200g Turmeric Powder Zip Lock Pouch</p>
            </div>

            <div className="card-luxury" style={{ textAlign: "center" }}>
              <img src="/assets/red_rice_packaging.jpg" alt="Red Rice 1kg Pouch" style={{ height: "240px", objectFit: "contain", marginBottom: "1rem" }} />
              <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)" }}>GRAIN RETAIL PACKS</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>1kg Red Rice High Barrier Pouch</p>
            </div>

            <div className="card-luxury" style={{ textAlign: "center" }}>
              <img src="/assets/jaggery_packaging.jpg" alt="Jaggery Gud 1kg Pouch" style={{ height: "240px", objectFit: "contain", marginBottom: "1rem" }} />
              <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)" }}>SWEETENER PACKAGING</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>1kg Jaggery Gud Stand-Up Pouch</p>
            </div>
          </div>

          {/* CTA Box */}
          <div style={{ textAlign: "center" }}>
            <button className="btn-primary" onClick={onOpenQuote} style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
              REQUEST AN EXPORT QUOTE <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
