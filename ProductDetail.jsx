import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, MessageSquare, Shield, Package, Truck, ArrowLeft, Send } from "lucide-react";
import SEO from "../components/SEO";
import { getProductBySlug } from "../data/products";
import { companyInfo } from "../data/company";

export default function ProductDetail({ onOpenQuote }) {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div style={{ padding: "6rem 0", textAlign: "center" }}>
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn-primary" style={{ marginTop: "1rem" }}>
          RETURN TO PRODUCTS
        </Link>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(product.image);

  const defaultDirector = companyInfo.directors[0];
  const whatsappText = encodeURIComponent(
    `Hello IRAVYA GLOBAL, I am interested in ${product.name}. Please share the available specifications, pricing, packaging and export details.`
  );
  const whatsappUrl = `https://wa.me/${defaultDirector.rawPhone.replace("+", "")}?text=${whatsappText}`;

  return (
    <div>
      <SEO
        title={`${product.name} (${product.subtitle})`}
        description={`IRAVYA GLOBAL ${product.name} - ${product.shortDescription}`}
      />

      {/* Breadcrumb & Top Bar */}
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "2rem 0", borderBottom: "1px solid var(--gold-accent)" }}>
        <div className="container">
          <Link to="/products" style={{ color: "var(--gold-main)", textDecoration: "none", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span className="badge-gold">{product.category}</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#ffffff" }}>
              {product.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              marginBottom: "4rem"
            }}
          >
            {/* LEFT: Product Gallery */}
            <div>
              <div
                style={{
                  width: "100%",
                  height: "420px",
                  backgroundColor: "#ffffff",
                  border: "2px solid var(--gold-main)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  boxShadow: "var(--shadow-md)"
                }}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div style={{ display: "flex", gap: "1rem" }}>
                  {product.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      style={{
                        width: "80px",
                        height: "80px",
                        border: activeImage === img ? "2px solid var(--gold-main)" : "1px solid var(--cream-border)",
                        borderRadius: "6px",
                        padding: "0.25rem",
                        cursor: "pointer",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      <img src={img} alt="Thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Specs & Actions */}
            <div>
              <span className="badge-gold" style={{ marginBottom: "0.5rem" }}>
                {product.category}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.2rem",
                  color: "var(--navy-main)",
                  fontWeight: 800,
                  marginBottom: "0.25rem"
                }}
              >
                {product.name}
              </h2>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--gold-accent)", marginBottom: "1.25rem" }}>
                {product.subtitle}
              </p>

              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {product.description}
              </p>

              {/* Price Block */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--cream-border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1rem 1.5rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>Export Price:</span>
                  <strong style={{ fontSize: "1.3rem", color: "var(--gold-accent)", fontFamily: "var(--font-heading)" }}>
                    Price on Request
                  </strong>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>MOQ:</span>
                  <strong style={{ fontSize: "0.95rem", color: "var(--navy-main)" }}>{product.moq}</strong>
                </div>
              </div>

              {/* Quality Highlights Bullet list */}
              <div style={{ marginBottom: "2rem" }}>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--navy-main)", marginBottom: "0.75rem" }}>
                  QUALITY HIGHLIGHTS
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {product.highlights.map((h, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.92rem", color: "var(--text-primary)" }}>
                      <CheckCircle2 size={18} color="var(--gold-main)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <button
                  className="btn-primary"
                  onClick={() => onOpenQuote(product.name)}
                  style={{ width: "100%", padding: "1rem", fontSize: "0.95rem" }}
                >
                  REQUEST BULK EXPORT QUOTE <Send size={16} />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: "100%", padding: "0.9rem", fontSize: "0.95rem", justifyContent: "center" }}
                >
                  <MessageSquare size={18} /> ENQUIRE ON WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* BELOW: Detailed Specification Tabs & Sections */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--cream-border)",
              borderRadius: "var(--radius-md)",
              padding: "2.5rem",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--navy-main)", marginBottom: "1.5rem" }}>
              COMPREHENSIVE COMMODITY OVERVIEW
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <Shield size={20} color="var(--gold-main)" />
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", color: "var(--navy-main)" }}>
                    VARIANTS & GRADES
                  </h4>
                </div>
                <ul style={{ listStyle: "inside disc", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {product.variants.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <Package size={20} color="var(--gold-main)" />
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", color: "var(--navy-main)" }}>
                    PACKAGING OPTIONS
                  </h4>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {product.packaging}
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <Truck size={20} color="var(--gold-main)" />
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", color: "var(--navy-main)" }}>
                    EXPORT & LOGISTICS
                  </h4>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {product.exportInformation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
