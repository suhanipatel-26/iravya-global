import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Truck, 
  PackageCheck, 
  Award,
  Globe2,
  PhoneCall,
  MessageSquare
} from "lucide-react";
import SEO from "../components/SEO";
import ProductCard from "../components/ProductCard";
import { companyInfo } from "../data/company";
import { products, categories } from "../data/products";

export default function Home({ onOpenQuote, onOpenCatalog }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts = selectedCategory === "ALL"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      <SEO
        title="Home"
        description="IRAVYA GLOBAL supplies premium agricultural products from India including turmeric powder, red rice, jaggery gud, green gram, bananas and dried mugwort leaves."
      />

      {/* 1. HERO SECTION */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#06101e",
          color: "#ffffff",
          padding: "5rem 0 6rem 0",
          overflow: "hidden",
          borderBottom: "2px solid var(--gold-main)"
        }}
      >
        {/* Background Image overlay using uploaded dark banner */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to right, rgba(6, 16, 30, 0.92) 30%, rgba(6, 16, 30, 0.75) 100%), url(/assets/hero_dark_banner.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.65,
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "720px" }} className="animate-fade-in">
            {/* Supporting Badge */}
            <div style={{ marginBottom: "1.25rem" }}>
              <span className="badge-gold">
                <Globe2 size={13} /> {companyInfo.brandTagline}
              </span>
            </div>

            {/* Brand Title */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1rem"
              }}
            >
              IRAVYA <span className="text-gold-gradient">GLOBAL</span>
            </h1>

            {/* Primary Tagline */}
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)",
                fontFamily: "var(--font-heading)",
                color: "var(--gold-light)",
                fontWeight: 700,
                marginBottom: "1.25rem"
              }}
            >
              "Rooted in India. Delivered to the World."
            </h2>

            {/* Supporting Paragraph */}
            <p
              style={{
                fontSize: "1.1rem",
                color: "#e2e8f0",
                lineHeight: 1.7,
                marginBottom: "2rem",
                fontWeight: 400
              }}
            >
              Premium agricultural products sourced with care from India's fertile farmlands and delivered to global markets with quality, reliability and trust.
            </p>

            {/* Primary & Secondary CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", marginBottom: "2rem" }}>
              <Link to="/products" className="btn-primary">
                EXPLORE PRODUCTS <ArrowRight size={18} />
              </Link>

              <button className="btn-secondary" onClick={() => onOpenQuote()}>
                REQUEST A QUOTE
              </button>

              <button className="btn-secondary" onClick={onOpenCatalog} style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                <Download size={16} /> VIEW CATALOG PDF
              </button>
            </div>

            {/* Supporting line */}
            <p style={{ fontSize: "0.85rem", color: "#c5a059", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              ★ Premium Agricultural Products from India
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS STRIP (Immediately below Hero) */}
      <section
        style={{
          backgroundColor: "#0b192c",
          borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
          padding: "2rem 0",
          color: "#ffffff"
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              alignItems: "center"
            }}
          >
            {companyInfo.trustBadges.map((badge) => {
              const iconMap = {
                natural: <Leaf size={24} color="#d4af37" />,
                aroma: <Sparkles size={24} color="#d4af37" />,
                quality: <ShieldCheck size={24} color="#d4af37" />,
                sourced: <HeartHandshake size={24} color="#d4af37" />
              };

              return (
                <div
                  key={badge.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.75rem 1rem",
                    background: "rgba(19, 42, 72, 0.4)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "var(--radius-sm)"
                  }}
                >
                  <div style={{ flexShrink: 0 }}>{iconMap[badge.id]}</div>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.9rem", color: "#ffffff", letterSpacing: "0.05em" }}>
                      {badge.label}
                    </strong>
                    <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{badge.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "center"
            }}
          >
            {/* Left Column: Story */}
            <div>
              <span className="badge-gold">About IRAVYA GLOBAL</span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "var(--navy-main)",
                  fontWeight: 800,
                  marginTop: "0.75rem",
                  marginBottom: "0.25rem"
                }}
              >
                Rooted in India. Reaching the World.
              </h2>
              <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--gold-accent)", marginBottom: "1rem" }}>
                Bridging Indian Agriculture With Global Quality Standards
              </p>
              <div className="gold-divider" />

              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                {companyInfo.aboutText[0]}
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                {companyInfo.aboutText[1]}
              </p>

              <div style={{ display: "flex", gap: "1rem" }}>
                <Link to="/about" className="btn-primary">
                  READ OUR STORY <ArrowRight size={16} />
                </Link>
                <Link to="/why-us" className="btn-secondary" style={{ borderColor: "var(--navy-main)", color: "var(--navy-main)" }}>
                  OUR STRENGTHS
                </Link>
              </div>
            </div>

            {/* Right Column: Actual Uploaded Brand Image */}
            <div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  border: "2px solid var(--gold-main)"
                }}
              >
                <img
                  src="/assets/brand_banners.jpg"
                  alt="IRAVYA GLOBAL Agricultural Produce & Spices"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(6, 16, 30, 0.9), transparent)",
                    padding: "1.5rem",
                    color: "#ffffff"
                  }}
                >
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--gold-light)" }}>
                    "PURE SPICES. PURE PROMISE."
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>
                    Exporting ethically harvested banana, turmeric, red rice, jaggery, mung bean & mugwort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0b192c", color: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">Our Commitments</span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#ffffff",
                fontWeight: 800,
                marginTop: "0.75rem",
                marginBottom: "0.5rem"
              }}
            >
              WHY CHOOSE US?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--gold-light)", fontStyle: "italic" }}>
              Quality, Care and Reliability From Farm to Global Market
            </p>
            <div className="gold-divider gold-divider-center" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem"
            }}
          >
            {companyInfo.commitments.map((item) => (
              <div key={item.id} className="card-dark">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(212, 175, 55, 0.15)",
                    border: "1px solid var(--gold-main)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem"
                  }}
                >
                  <Award size={24} color="#d4af37" />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.15rem",
                    color: "var(--gold-main)",
                    fontWeight: 700,
                    marginBottom: "0.75rem"
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: "0.9rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                  "{item.shortDesc}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CATALOG SHOWCASE */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            <span className="badge-gold">Export Portfolio</span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "var(--navy-main)",
                fontWeight: 800,
                marginTop: "0.75rem",
                marginBottom: "0.5rem"
              }}
            >
              FEATURED COMMODITIES
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
              Explore our premium range of spices, grains, pulses, herbs, sweeteners, and fresh produce.
            </p>
            <div className="gold-divider gold-divider-center" />
          </div>

          {/* Category Filter Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.6rem",
              marginBottom: "3rem"
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: "0.6rem 1.25rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  borderRadius: "50px",
                  cursor: "pointer",
                  border: selectedCategory === cat.id ? "1px solid var(--gold-main)" : "1px solid var(--cream-border)",
                  backgroundColor: selectedCategory === cat.id ? "var(--navy-main)" : "#ffffff",
                  color: selectedCategory === cat.id ? "var(--gold-main)" : "var(--text-secondary)",
                  transition: "var(--transition)"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid-products">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onOpenQuote={onOpenQuote} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FARM TO WORLD PROCESS VISUALIZER */}
      <section style={{ padding: "5rem 0", backgroundColor: "#06101e", color: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">Quality Pipeline</span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                color: "#ffffff",
                fontWeight: 800,
                marginTop: "0.75rem",
                marginBottom: "0.5rem"
              }}
            >
              ROOTED IN INDIA. DELIVERED TO THE WORLD.
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#cbd5e1", lineHeight: 1.6 }}>
              From India's fertile farmlands to global markets, IRAVYA GLOBAL connects agricultural excellence with buyers through careful sourcing, quality control, professional packaging and export-focused logistics.
            </p>
            <div className="gold-divider gold-divider-center" />
          </div>

          {/* Timeline Pipeline Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem"
            }}
          >
            {companyInfo.processSteps.map((p, idx) => (
              <div
                key={p.step}
                style={{
                  background: "rgba(19, 42, 72, 0.5)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1.25rem 1rem",
                  textAlign: "center",
                  position: "relative"
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--gold-main)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.4rem"
                  }}
                >
                  STEP {p.step}
                </span>
                <strong
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.9rem",
                    color: "#ffffff",
                    display: "block",
                    marginBottom: "0.4rem"
                  }}
                >
                  {p.name}
                </strong>
                <p style={{ fontSize: "0.78rem", color: "#94a3b8", lineHeight: 1.4 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CATALOG DOWNLOAD BANNER */}
      <section style={{ padding: "4rem 0", backgroundColor: "#0b192c", borderTop: "1px solid var(--gold-accent)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem"
            }}
          >
            <div>
              <span className="badge-gold">Official Portfolio</span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.8rem",
                  color: "#ffffff",
                  marginTop: "0.5rem",
                  marginBottom: "0.4rem"
                }}
              >
                EXPLORE OUR PRODUCT CATALOG
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                Discover our portfolio of premium agricultural products sourced from India.
              </p>
            </div>

            <button className="btn-primary" onClick={onOpenCatalog} style={{ padding: "1rem 2rem", fontSize: "0.95rem" }}>
              <Download size={18} /> DOWNLOAD PRODUCT CATALOG PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
