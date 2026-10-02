import React, { useState } from "react";
import SEO from "../components/SEO";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function Products({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts = selectedCategory === "ALL"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      <SEO
        title="Product Portfolio"
        description="Explore IRAVYA GLOBAL's complete agricultural export commodities catalog including red rice, turmeric powder, jaggery gud, green gram, fresh bananas and dried mugwort leaves."
      />

      {/* Header */}
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="badge-gold">AGRICULTURAL COMMODITIES</span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#ffffff",
              marginTop: "0.75rem",
              marginBottom: "0.5rem"
            }}
          >
            EXPORT PRODUCT PORTFOLIO
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--gold-light)", fontStyle: "italic" }}>
            Pure Spices, Nutrient-Dense Grains, Natural Sweeteners & Fresh Produce
          </p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      {/* Product List Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.6rem",
              marginBottom: "3.5rem"
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

          {/* Product Grid */}
          <div className="grid-products">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onOpenQuote={onOpenQuote} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
