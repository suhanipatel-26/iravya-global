import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, FileText } from "lucide-react";
import { companyInfo } from "../data/company";

export default function Navbar({ onOpenQuote, onOpenCatalog }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PRODUCTS", path: "/products" },
    { name: "WHY US", path: "/why-us" },
    { name: "EXPORT", path: "/export" },
    { name: "CONTACT", path: "/contact" }
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? "#06101e" : "#0b192c",
        borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
        boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.3s ease",
        padding: isScrolled ? "0.6rem 0" : "1rem 0"
      }}
    >
      {/* Top micro banner for direct hotline */}
      <div
        style={{
          backgroundColor: "#06101e",
          borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
          padding: "0.25rem 0",
          fontSize: "0.78rem",
          color: "#c5a059"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justify: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>📍 India's Premier Agricultural Exporter</span>
            <span style={{ display: "inline-block" }}>•</span>
            <span>{companyInfo.brandTagline}</span>
          </div>
          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
              <PhoneCall size={12} color="#d4af37" />
              <span>{companyInfo.directors[0].name}: {companyInfo.directors[0].phone}</span>
            </span>
            <button
              onClick={onOpenCatalog}
              style={{
                background: "none",
                border: "none",
                color: "#f3e5ab",
                cursor: "pointer",
                fontSize: "0.78rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                textDecoration: "underline"
              }}
            >
              <FileText size={12} />
              View Catalog PDF
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #d4af37, #0b192c)",
              padding: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden"
            }}
          >
            <img
              src="/assets/catalog_page_1.png"
              alt="IRAVYA GLOBAL Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.35rem",
                letterSpacing: "0.08em",
                color: "#ffffff",
                display: "block",
                lineHeight: 1
              }}
            >
              IRAVYA <span style={{ color: "var(--gold-main)" }}>GLOBAL</span>
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                color: "#a0aec0",
                textTransform: "uppercase"
              }}
            >
              From Nature • To the World
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.08em",
                  color: isActive ? "var(--gold-main)" : "#e2e8f0",
                  borderBottom: isActive ? "2px solid var(--gold-main)" : "2px solid transparent",
                  paddingBottom: "0.2rem",
                  transition: "var(--transition)"
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="desktop-nav">
          <button className="btn-primary" onClick={onOpenQuote}>
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "1px solid rgba(212,175,55,0.4)",
            color: "#d4af37",
            padding: "0.4rem 0.6rem",
            borderRadius: "4px",
            cursor: "pointer",
            display: "none"
          }}
          className="mobile-hamburger"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#06101e",
            borderTop: "1px solid rgba(212,175,55,0.2)",
            padding: "1.5rem 1.5rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem"
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 600,
                color: location.pathname === link.path ? "var(--gold-main)" : "#ffffff"
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ paddingTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button className="btn-primary" style={{ width: "100%" }} onClick={onOpenQuote}>
              GET A QUOTE
            </button>
            <button className="btn-secondary" style={{ width: "100%" }} onClick={onOpenCatalog}>
              VIEW PDF CATALOG
            </button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for desktop vs mobile toggle */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
