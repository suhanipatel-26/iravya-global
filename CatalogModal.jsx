import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download, FileText } from "lucide-react";
import { companyInfo } from "../data/company";

export default function CatalogModal({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  const catalogPages = companyInfo.assets.catalogPages;

  const handleNext = () => {
    setCurrentPage((prev) => (prev < catalogPages.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(6, 16, 30, 0.9)",
        backdropFilter: "blur(8px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem"
      }}
    >
      <div
        style={{
          backgroundColor: "#06101e",
          borderRadius: "var(--radius-md)",
          width: "100%",
          maxWidth: "850px",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
          border: "2px solid var(--gold-main)",
          position: "relative",
          overflow: "hidden"
        }}
        className="animate-fade-in"
      >
        {/* Header Bar */}
        <div
          style={{
            padding: "1rem 1.5rem",
            borderBottom: "1px solid rgba(212, 175, 55, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0b192c"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <FileText size={20} color="var(--gold-main)" />
            <h3 style={{ fontFamily: "var(--font-heading)", color: "#ffffff", fontSize: "1.1rem" }}>
              OFFICIAL PRODUCT CATALOG PDF - IRAVYA GLOBAL
            </h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#c5a059" }}>
              Page {currentPage + 1} of {catalogPages.length}
            </span>
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer" }}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Page Viewer Body */}
        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            backgroundColor: "#06101e"
          }}
        >
          <img
            src={catalogPages[currentPage].image}
            alt={`IRAVYA GLOBAL Catalog Page ${currentPage + 1}`}
            style={{
              maxWidth: "100%",
              maxHeight: "65vh",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}
          />
        </div>

        {/* Footer Navigation Bar */}
        <div
          style={{
            padding: "1rem 1.5rem",
            borderTop: "1px solid rgba(212, 175, 55, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0b192c"
          }}
        >
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {catalogPages.map((pg, idx) => (
              <button
                key={pg.id}
                onClick={() => setCurrentPage(idx)}
                style={{
                  padding: "0.4rem 0.8rem",
                  fontSize: "0.8rem",
                  borderRadius: "4px",
                  border: currentPage === idx ? "1px solid var(--gold-main)" : "1px solid transparent",
                  backgroundColor: currentPage === idx ? "rgba(212,175,55,0.2)" : "transparent",
                  color: currentPage === idx ? "#d4af37" : "#94a3b8",
                  cursor: "pointer"
                }}
              >
                Page {pg.id}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="btn-secondary"
              style={{
                padding: "0.5rem 0.8rem",
                fontSize: "0.8rem",
                opacity: currentPage === 0 ? 0.4 : 1
              }}
            >
              <ChevronLeft size={16} /> PREV
            </button>

            <button
              onClick={handleNext}
              disabled={currentPage === catalogPages.length - 1}
              className="btn-secondary"
              style={{
                padding: "0.5rem 0.8rem",
                fontSize: "0.8rem",
                opacity: currentPage === catalogPages.length - 1 ? 0.4 : 1
              }}
            >
              NEXT <ChevronRight size={16} />
            </button>

            <a
              href={catalogPages[currentPage].image}
              download={`IRAVYA_GLOBAL_Catalog_Page_${currentPage + 1}.png`}
              className="btn-primary"
              style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
            >
              <Download size={14} /> DOWNLOAD PAGE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
