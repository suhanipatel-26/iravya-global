import React from "react";
import { Link } from "react-router-dom";
import { Phone, Award, ShieldCheck, MapPin, Globe } from "lucide-react";
import { companyInfo } from "../data/company";

export default function Footer({ onOpenQuote, onOpenCatalog }) {
  return (
    <footer
      style={{
        backgroundColor: "#06101e",
        color: "#cbd5e1",
        borderTop: "2px solid var(--gold-main)",
        paddingTop: "4rem",
        paddingBottom: "2rem"
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem"
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #d4af37, #0b192c)",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src="/assets/catalog_page_1.png"
                  alt="IRAVYA GLOBAL Logo"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  letterSpacing: "0.08em",
                  color: "#ffffff"
                }}
              >
                IRAVYA <span style={{ color: "var(--gold-main)" }}>GLOBAL</span>
              </span>
            </div>
            
            <p style={{ color: "#d4af37", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem" }}>
              "{companyInfo.primaryTagline}"
            </p>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "1.2rem" }}>
              {companyInfo.brandTagline} • {companyInfo.brandPromise}
            </p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#cbd5e1", marginBottom: "1.5rem" }}>
              Premium agricultural products sourced from India and supplied with quality, care and reliability to global markets.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button className="btn-primary" onClick={onOpenQuote} style={{ fontSize: "0.8rem", padding: "0.6rem 1.2rem" }}>
                REQUEST QUOTE
              </button>
              <button className="btn-secondary" onClick={onOpenCatalog} style={{ fontSize: "0.8rem", padding: "0.6rem 1.2rem" }}>
                CATALOG PDF
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                color: "#ffffff",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                marginBottom: "1.2rem",
                position: "relative"
              }}
            >
              QUICK NAVIGATION
            </h4>
            <div className="gold-divider" style={{ marginTop: 0, marginBottom: "1.2rem", width: "40px" }} />
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { name: "Home", path: "/" },
                { name: "About IRAVYA GLOBAL", path: "/about" },
                { name: "Product Portfolio", path: "/products" },
                { name: "Why Choose Us", path: "/why-us" },
                { name: "Export & Logistics", path: "/export" },
                { name: "Contact Directors", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "var(--transition)"
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                    onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                  >
                    › {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Export Commodities */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                color: "#ffffff",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                marginBottom: "1.2rem"
              }}
            >
              EXPORT PRODUCTS
            </h4>
            <div className="gold-divider" style={{ marginTop: 0, marginBottom: "1.2rem", width: "40px" }} />
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { name: "Red Rice (Nutrient-Dense)", slug: "red-rice" },
                { name: "Turmeric Powder (High Curcumin)", slug: "turmeric-powder" },
                { name: "Jaggery Gud (Unrefined)", slug: "jaggery" },
                { name: "Green Gram / Mung Bean", slug: "green-gram" },
                { name: "Fresh Banana (Grand Naine)", slug: "fresh-banana" },
                { name: "Mugwort (Medicinal & Herbal)", slug: "mugwort" }
              ].map((prod) => (
                <li key={prod.slug}>
                  <Link
                    to={`/products/${prod.slug}`}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "var(--transition)"
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                    onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                  >
                    › {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Export Contacts */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                color: "#ffffff",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
                marginBottom: "1.2rem"
              }}
            >
              DIRECT CONTACT
            </h4>
            <div className="gold-divider" style={{ marginTop: 0, marginBottom: "1.2rem", width: "40px" }} />
            
            <p style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "1rem" }}>
              Connect with our export directors for trade inquiries, specifications, and bulk orders:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {companyInfo.directors.map((dir) => (
                <div
                  key={dir.name}
                  style={{
                    background: "rgba(19, 42, 72, 0.6)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    padding: "0.75rem 1rem",
                    borderRadius: "6px"
                  }}
                >
                  <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.9rem" }}>{dir.name}</p>
                  <p style={{ fontSize: "0.78rem", color: "#c5a059", marginBottom: "0.3rem" }}>{dir.role}</p>
                  <a
                    href={`tel:${dir.rawPhone}`}
                    style={{
                      color: "#d4af37",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem"
                    }}
                  >
                    <Phone size={14} /> {dir.phone}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.2rem", fontSize: "0.85rem", color: "#94a3b8" }}>
              <span>Social handle: </span>
              <strong style={{ color: "#d4af37" }}>{companyInfo.social.handle}</strong>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee Strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.82rem",
            color: "#64748b"
          }}
        >
          <div>
            © 2026 <strong>IRAVYA GLOBAL</strong>. All Rights Reserved. Exporter of Premium Agricultural Commodities.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span>Direct Farm Sourcing</span>
            <span>•</span>
            <span>Strict Quality Control</span>
            <span>•</span>
            <span>Global Export Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
