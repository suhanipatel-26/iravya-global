import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageSquare, ArrowRight, Shield } from "lucide-react";
import { companyInfo } from "../data/company";

export default function ProductCard({ product, onOpenQuote }) {
  // Pre-fill WhatsApp message for this product
  const defaultDirector = companyInfo.directors[0];
  const whatsappMessage = encodeURIComponent(
    `Hello IRAVYA GLOBAL, I am interested in ${product.name}. Please share the available specifications, pricing, packaging and export details.`
  );
  const whatsappUrl = `https://wa.me/${defaultDirector.rawPhone.replace("+", "")}?text=${whatsappMessage}`;

  return (
    <div
      className="card-luxury"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Category Ribbon */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          zIndex: 10
        }}
      >
        <span className="badge-gold">{product.category}</span>
      </div>

      {/* Image Display */}
      <div
        style={{
          width: "100%",
          height: "260px",
          borderRadius: "var(--radius-sm)",
          backgroundColor: "#f7f4ee",
          overflow: "hidden",
          marginBottom: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "transform 0.5s ease"
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      {/* Title & Subtitle */}
      <div style={{ flexGrow: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.25rem",
            color: "var(--navy-main)",
            fontWeight: 800,
            marginBottom: "0.2rem"
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--gold-accent)",
            marginBottom: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          {product.subtitle}
        </p>

        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--text-secondary)",
            lineHeight: 1.5,
            marginBottom: "1rem"
          }}
        >
          {product.shortDescription}
        </p>

        {/* Quality Highlights (max 2 for preview card) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.2rem" }}>
          {product.highlights.slice(0, 2).map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem", fontSize: "0.82rem", color: "var(--text-primary)" }}>
              <CheckCircle2 size={15} color="var(--gold-main)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pack Size & Price Strip */}
      <div
        style={{
          borderTop: "1px dashed var(--cream-border)",
          borderBottom: "1px dashed var(--cream-border)",
          padding: "0.75rem 0",
          margin: "0.5rem 0 1.25rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>Export Pack Size:</span>
          <strong style={{ fontSize: "0.82rem", color: "var(--navy-main)" }}>{product.packSize}</strong>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>Price:</span>
          <strong style={{ fontSize: "0.88rem", color: "var(--gold-accent)" }}>Price on Request</strong>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
          <Link
            to={`/products/${product.slug}`}
            className="btn-secondary"
            style={{
              padding: "0.6rem 0.8rem",
              fontSize: "0.78rem",
              borderColor: "var(--navy-main)",
              color: "var(--navy-main)"
            }}
          >
            VIEW DETAILS <ArrowRight size={13} />
          </Link>

          <button
            onClick={() => onOpenQuote(product.name)}
            className="btn-primary"
            style={{ padding: "0.6rem 0.8rem", fontSize: "0.78rem" }}
          >
            REQUEST QUOTE
          </button>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{ width: "100%", padding: "0.6rem 0.8rem", fontSize: "0.8rem", justifyContent: "center" }}
        >
          <MessageSquare size={15} /> ENQUIRE ON WHATSAPP
        </a>
      </div>
    </div>
  );
}
