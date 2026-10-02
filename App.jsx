import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import QuoteModal from "./components/QuoteModal";
import CatalogModal from "./components/CatalogModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import WhyUs from "./pages/WhyUs";
import Export from "./pages/Export";
import Contact from "./pages/Contact";

// Helper component to scroll to top of page on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState("");

  const handleOpenQuote = (productName = "") => {
    setSelectedQuoteProduct(productName);
    setQuoteModalOpen(true);
  };

  const handleOpenCatalog = () => {
    setCatalogModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Sticky Header Navbar */}
        <Navbar
          onOpenQuote={() => handleOpenQuote()}
          onOpenCatalog={handleOpenCatalog}
        />

        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route
              path="/"
              element={<Home onOpenQuote={handleOpenQuote} onOpenCatalog={handleOpenCatalog} />}
            />
            <Route
              path="/about"
              element={<About onOpenQuote={handleOpenQuote} onOpenCatalog={handleOpenCatalog} />}
            />
            <Route
              path="/products"
              element={<Products onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/products/:slug"
              element={<ProductDetail onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/why-us"
              element={<WhyUs onOpenQuote={handleOpenQuote} onOpenCatalog={handleOpenCatalog} />}
            />
            <Route
              path="/export"
              element={<Export onOpenQuote={handleOpenQuote} onOpenCatalog={handleOpenCatalog} />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer
          onOpenQuote={() => handleOpenQuote()}
          onOpenCatalog={handleOpenCatalog}
        />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton productName={selectedQuoteProduct} />

        {/* B2B Trade Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialProduct={selectedQuoteProduct}
        />

        {/* PDF Catalog Reader Modal */}
        <CatalogModal
          isOpen={catalogModalOpen}
          onClose={() => setCatalogModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
