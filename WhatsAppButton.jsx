import React, { useState } from "react";
import { MessageSquare, Phone, X } from "lucide-react";
import { companyInfo } from "../data/company";

export default function WhatsAppButton({ productName }) {
  const [open, setOpen] = useState(false);

  const getWhatsAppLink = (rawPhone, name) => {
    const text = productName
      ? `Hello ${name} (IRAVYA GLOBAL), I am interested in ${productName}. Please share the available specifications, pricing, packaging and export details.`
      : `Hello ${name} (IRAVYA GLOBAL), I would like to inquire about your agricultural export commodities and bulk specifications.`;
    return `https://wa.me/${rawPhone.replace("+", "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 1100 }}>
      {/* Popover Menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            right: "0",
            width: "310px",
            backgroundColor: "#06101e",
            border: "1px solid var(--gold-main)",
            borderRadius: "var(--radius-md)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
            padding: "1.25rem",
            color: "#ffffff"
          }}
          className="animate-fade-in"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", color: "#d4af37" }}>
              IRAVYA GLOBAL Export Desk
            </h4>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer" }}
            >
              <X size={18} />
            </button>
          </div>

          <p style={{ fontSize: "0.8rem", color: "#cbd5e1", marginBottom: "1rem" }}>
            Connect directly on WhatsApp with our export directors for instant quote inquiries:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {companyInfo.directors.map((dir) => (
              <a
                key={dir.name}
                href={getWhatsAppLink(dir.rawPhone, dir.name)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(37, 211, 102, 0.15)",
                  border: "1px solid #25d366",
                  color: "#ffffff",
                  padding: "0.75rem 1rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "var(--transition)"
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>{dir.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#25d366" }}>{dir.phone}</div>
                </div>
                <MessageSquare size={20} color="#25d366" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Floating Circle Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25d366",
          color: "#ffffff",
          border: "2px solid #ffffff",
          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.5)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "var(--transition)"
        }}
        aria-label="Contact on WhatsApp"
      >
        {open ? <X size={26} /> : <MessageSquare size={26} />}
      </button>
    </div>
  );
}
