import React, { useState, useEffect } from "react";
import { X, CheckCircle, Send } from "lucide-react";
import { products } from "../data/products";

export default function QuoteModal({ isOpen, onClose, initialProduct = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    product: initialProduct || "Turmeric Powder",
    quantity: "",
    packaging: "Bulk Packaging",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone/WhatsApp is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Frontend submission success state
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      product: "Turmeric Powder",
      quantity: "",
      packaging: "Bulk Packaging",
      message: ""
    });
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(6, 16, 30, 0.85)",
        backdropFilter: "blur(6px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem"
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "var(--radius-md)",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          border: "2px solid var(--gold-main)",
          position: "relative",
          padding: "2rem"
        }}
        className="animate-fade-in"
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer"
          }}
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <span className="badge-gold">B2B Trade Inquiry</span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--navy-main)",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  marginTop: "0.5rem"
                }}
              >
                REQUEST AN EXPORT QUOTE
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Let's build a global supply partnership. Receive direct specs & export pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "6px",
                      border: errors.fullName ? "1.5px solid red" : "1px solid var(--cream-border)",
                      fontSize: "0.9rem"
                    }}
                  />
                  {errors.fullName && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.fullName}</span>}
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                    COMPANY NAME *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Global Foods Ltd"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "6px",
                      border: errors.companyName ? "1.5px solid red" : "1px solid var(--cream-border)",
                      fontSize: "0.9rem"
                    }}
                  />
                  {errors.companyName && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.companyName}</span>}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "6px",
                      border: "1px solid var(--cream-border)",
                      fontSize: "0.9rem"
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                    PHONE / WHATSAPP *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "6px",
                      border: errors.phone ? "1.5px solid red" : "1px solid var(--cream-border)",
                      fontSize: "0.9rem"
                    }}
                  />
                  {errors.phone && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.phone}</span>}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                    DESTINATION COUNTRY *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. United States, UAE, UK"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "6px",
                      border: errors.country ? "1.5px solid red" : "1px solid var(--cream-border)",
                      fontSize: "0.9rem"
                    }}
                  />
                  {errors.country && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.country}</span>}
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                    PRODUCT INTERESTED IN
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "6px",
                      border: "1px solid var(--cream-border)",
                      fontSize: "0.9rem",
                      backgroundColor: "#ffffff"
                    }}
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other / Multiple Commodities">Other / Multiple Commodities</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                    ESTIMATED QUANTITY
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 5 Metric Tons / 1 FCL"
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "6px",
                      border: "1px solid var(--cream-border)",
                      fontSize: "0.9rem"
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                    PACKAGING REQUIREMENT
                  </label>
                  <select
                    name="packaging"
                    value={formData.packaging}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      borderRadius: "6px",
                      border: "1px solid var(--cream-border)",
                      fontSize: "0.9rem",
                      backgroundColor: "#ffffff"
                    }}
                  >
                    <option value="Retail Pouches (200g / 1kg)">Retail Pouches (200g / 1kg)</option>
                    <option value="Bulk Export Bags (25kg / 50kg)">Bulk Export Bags (25kg / 50kg)</option>
                    <option value="Private Label Branding">Private Label Branding</option>
                    <option value="Refrigerated Container (Bananas)">Refrigerated Container (Bananas)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                  SPECIFIC REQUIREMENTS / MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Specify mesh size, grade, delivery port or custom packaging requirements..."
                  style={{
                    width: "100%",
                    padding: "0.7rem",
                    borderRadius: "6px",
                    border: "1px solid var(--cream-border)",
                    fontSize: "0.9rem"
                  }}
                />
              </div>

              <button className="btn-primary" type="submit" style={{ width: "100%", marginTop: "0.5rem" }}>
                SUBMIT ENQUIRY <Send size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
            <CheckCircle size={60} color="var(--gold-main)" style={{ margin: "0 auto 1.5rem auto" }} />
            <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", fontSize: "1.6rem", marginBottom: "0.5rem" }}>
              THANK YOU FOR YOUR ENQUIRY
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.6 }}>
              Our export directors have received your trade request for <strong>{formData.product}</strong>. We will review your specifications and contact you shortly.
            </p>
            <button className="btn-primary" onClick={handleReset}>
              CLOSE WINDOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
