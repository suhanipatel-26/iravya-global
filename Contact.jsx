import React, { useState } from "react";
import { Phone, MessageSquare, Send, CheckCircle, MapPin, Globe } from "lucide-react";
import SEO from "../components/SEO";
import { companyInfo } from "../data/company";
import { products } from "../data/products";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    product: "Turmeric Powder",
    quantity: "",
    packaging: "Bulk Export Bags",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.phone.trim()) errs.phone = "Phone/WhatsApp is required";
    if (!formData.country.trim()) errs.country = "Country is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const getWhatsAppLink = (rawPhone, name) => {
    const text = `Hello ${name} (IRAVYA GLOBAL), I would like to enquire about bulk pricing, specifications, and export details for agricultural commodities.`;
    return `https://wa.me/${rawPhone.replace("+", "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      <SEO
        title="Contact Export Directors"
        description="Contact IRAVYA GLOBAL export directors Dharmendra Kaptan (+91 85115 57330) and Kirtan Patel (+91 90338 89409) for international trade inquiries and bulk agricultural orders."
      />

      {/* Header */}
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="badge-gold">GLOBAL TRADE ENQUIRIES</span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#ffffff",
              marginTop: "0.75rem",
              marginBottom: "0.5rem"
            }}
          >
            CONNECT WITH IRAVYA GLOBAL
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--gold-light)", fontStyle: "italic" }}>
            Let's take India's finest agricultural products to the world.
          </p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      {/* Main Grid: Directors Cards & Form */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem"
            }}
          >
            {/* Left: Directors & Social Info */}
            <div>
              <span className="badge-gold">Direct Export Directors</span>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "var(--navy-main)", marginTop: "0.5rem", marginBottom: "1rem" }}>
                GLOBAL EXPORT ENQUIRIES
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                Connect directly with our export directors for trade inquiries, specifications, packaging options, and bulk container pricing.
              </p>

              {/* Director Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
                {companyInfo.directors.map((dir) => (
                  <div
                    key={dir.name}
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1.5px solid var(--gold-main)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.5rem",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", fontSize: "1.2rem", fontWeight: 800 }}>
                          {dir.name}
                        </h3>
                        <span style={{ fontSize: "0.85rem", color: "var(--gold-accent)", fontWeight: 600 }}>{dir.role}</span>
                      </div>
                      <Phone size={20} color="var(--gold-main)" />
                    </div>

                    <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy-main)", marginBottom: "1rem" }}>
                      {dir.phone}
                    </p>

                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      <a
                        href={`tel:${dir.rawPhone}`}
                        className="btn-secondary"
                        style={{
                          padding: "0.5rem 1rem",
                          fontSize: "0.8rem",
                          borderColor: "var(--navy-main)",
                          color: "var(--navy-main)"
                        }}
                      >
                        <Phone size={14} /> CALL DIRECTLY
                      </a>

                      <a
                        href={getWhatsAppLink(dir.rawPhone, dir.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
                      >
                        <MessageSquare size={14} /> WHATSAPP
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Official Social Media Info */}
              <div
                style={{
                  backgroundColor: "#0b192c",
                  color: "#ffffff",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  border: "1px solid var(--gold-main)"
                }}
              >
                <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--gold-main)", fontSize: "1.05rem", marginBottom: "0.5rem" }}>
                  OFFICIAL SOCIAL MEDIA
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
                  Follow IRAVYA GLOBAL on Instagram & Facebook:
                </p>
                <strong style={{ fontSize: "1.1rem", color: "#d4af37", display: "block", marginTop: "0.4rem" }}>
                  {companyInfo.social.handle}
                </strong>
              </div>
            </div>

            {/* Right: B2B Form */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--cream-border)",
                borderRadius: "var(--radius-md)",
                padding: "2.5rem",
                boxShadow: "var(--shadow-md)"
              }}
            >
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", color: "var(--navy-main)", marginBottom: "0.5rem" }}>
                LET'S BUILD A GLOBAL SUPPLY PARTNERSHIP
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                Fill out the form below to request trade specifications, private label options, and bulk container export quotes.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "6px",
                        border: errors.fullName ? "1.5px solid red" : "1px solid var(--cream-border)"
                      }}
                    />
                    {errors.fullName && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.fullName}</span>}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                        COMPANY NAME *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company name"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          borderRadius: "6px",
                          border: errors.companyName ? "1.5px solid red" : "1px solid var(--cream-border)"
                        }}
                      />
                      {errors.companyName && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.companyName}</span>}
                    </div>

                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                        DESTINATION COUNTRY *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Destination country"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          borderRadius: "6px",
                          border: errors.country ? "1.5px solid red" : "1px solid var(--cream-border)"
                        }}
                      />
                      {errors.country && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.country}</span>}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
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
                          padding: "0.75rem",
                          borderRadius: "6px",
                          border: errors.phone ? "1.5px solid red" : "1px solid var(--cream-border)"
                        }}
                      />
                      {errors.phone && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.phone}</span>}
                    </div>

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
                          padding: "0.75rem",
                          borderRadius: "6px",
                          border: "1px solid var(--cream-border)"
                        }}
                      />
                    </div>
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
                        padding: "0.75rem",
                        borderRadius: "6px",
                        border: "1px solid var(--cream-border)",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.subtitle})
                        </option>
                      ))}
                      <option value="Other / Multiple Commodities">Other / Multiple Commodities</option>
                    </select>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                        REQUIRED QUANTITY
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 1 FCL Container"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          borderRadius: "6px",
                          border: "1px solid var(--cream-border)"
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
                          padding: "0.75rem",
                          borderRadius: "6px",
                          border: "1px solid var(--cream-border)",
                          backgroundColor: "#ffffff"
                        }}
                      >
                        <option value="Bulk Export Bags">Bulk Export Bags</option>
                        <option value="Retail Stand-up Pouches">Retail Stand-up Pouches</option>
                        <option value="Private Label Branding">Private Label Branding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--navy-main)", display: "block", marginBottom: "0.3rem" }}>
                      MESSAGE / TRADE REQUIREMENTS
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Enter details on required specifications, lab testing, port of discharge..."
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "6px",
                        border: "1px solid var(--cream-border)"
                      }}
                    />
                  </div>

                  <button className="btn-primary" type="submit" style={{ width: "100%", marginTop: "0.5rem" }}>
                    SUBMIT ENQUIRY <Send size={16} />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                  <CheckCircle size={54} color="var(--gold-main)" style={{ margin: "0 auto 1rem auto" }} />
                  <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                    ENQUIRY TRANSMITTED
                  </h4>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Thank you for your enquiry. Our export team will contact you shortly regarding <strong>{formData.product}</strong>.
                  </p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)}>
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
