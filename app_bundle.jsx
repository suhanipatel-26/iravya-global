// IRAVYA GLOBAL - Premium Agricultural Export Web Application
const ReactObj = window.React || {};
const ReactDOMObj = window.ReactDOM || {};

const { useState, useEffect, createContext, useContext, Children, isValidElement } = ReactObj;

// ==========================================
// CUSTOM LIGHTWEIGHT ROUTER (ZERO DEPENDENCY)
// ==========================================
const RouterContext = createContext({ pathname: window.location.pathname, navigate: () => {} });

function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname || "/");

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname || "/");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    if (window.location.pathname !== to) {
      window.history.pushState({}, "", to);
      setPathname(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

function useLocation() {
  return useContext(RouterContext);
}

function Link({ to, children, className, style, onClick, ...props }) {
  const { navigate } = useContext(RouterContext);
  return (
    <a
      href={to}
      className={className}
      style={{ cursor: "pointer", ...style }}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(e);
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

function Routes({ children }) {
  const { pathname } = useLocation();
  let matchedChild = null;

  Children.forEach(children, (child) => {
    if (matchedChild || !isValidElement(child)) return;
    const path = child.props.path;
    if (!path) return;

    if (path === pathname) {
      matchedChild = child;
    } else if (path.includes(":")) {
      const basePath = path.split("/:")[0];
      if (pathname.startsWith(basePath + "/")) {
        matchedChild = child;
      }
    }
  });

  return matchedChild ? matchedChild.props.element : null;
}

function Route({ path, element }) {
  return element;
}

function useParams() {
  const { pathname } = useLocation();
  const parts = pathname.split("/");
  return { slug: parts[parts.length - 1] || "" };
}

// ==========================================
// 1. BRAND & BUSINESS DATA ARCHITECTURE
// ==========================================
const companyInfo = {
  name: "IRAVYA GLOBAL",
  primaryTagline: "ROOTED IN INDIA. DELIVERED TO THE WORLD.",
  brandTagline: "FROM NATURE • TO THE WORLD",
  heroText: "Premium agricultural products sourced with care from India's fertile farmlands and delivered to global markets with quality, reliability and trust.",
  aboutTitle: "ROOTED IN INDIA. DELIVERED TO THE WORLD.",
  aboutCopy: "IRAVYA GLOBAL connects India's agricultural strength with international markets. We source quality agricultural products with care and focus on dependable quality, professional handling and export-ready supply.",
  officialLogo: "/assets/official_logo.jpg",
  directors: [
    {
      name: "Dharmendra Kaptan",
      phone: "+91 85115 57330",
      rawPhone: "+918511557330",
      role: "Export Director"
    },
    {
      name: "Kirtan Patel",
      phone: "+91 90338 89409",
      rawPhone: "+919033889409",
      role: "Export Director"
    }
  ],
  social: { handle: "@iravya_global" },
  catalogPdfPath: "/assets/IRAVYA_GLOBAL_Product_Catalog.pdf",
  trustBadges: [
    { id: "natural", label: "100% NATURAL", desc: "Organically grown without synthetic chemicals or fillers." },
    { id: "aroma", label: "RICH IN AROMA", desc: "Naturally processed to preserve essential oils & flavor." },
    { id: "quality", label: "PREMIUM QUALITY", desc: "Strict sizing, uniform grading & fine mesh quality." },
    { id: "sourced", label: "SOURCED WITH CARE", desc: "Direct farm partnership with verified Indian growers." }
  ],
  whyIravyaCards: [
    {
      title: "QUALITY ASSURANCE",
      desc: "Carefully selected agricultural products with consistent quality standards."
    },
    {
      title: "RELIABLE SOURCING",
      desc: "Strong sourcing network connected to India's agricultural producers."
    },
    {
      title: "GLOBAL EXPORT",
      desc: "Export-focused packaging and logistics for international markets."
    },
    {
      title: "TRUSTED PARTNERSHIP",
      desc: "Professional service, transparent communication and dependable supply."
    }
  ],
  exportHighlights: [
    { title: "INDIAN ORIGIN", desc: "Sourced directly from fertile Indian agricultural regions." },
    { title: "QUALITY SOURCING", desc: "Ethically grown produce selected for grade & caliber." },
    { title: "EXPORT-READY PACKAGING", desc: "High-barrier 200g/1kg pouches & bulk HDPE/jute bags." },
    { title: "GLOBAL LOGISTICS", desc: "Phytosanitary certification, customs support & reefer transit." },
    { title: "RELIABLE SUPPLY", desc: "Consistent export supply capacity year-round." }
  ]
};

const categories = [
  { id: "ALL", label: "All Commodities" },
  { id: "SPICES", label: "Spices" },
  { id: "GRAINS", label: "Grains" },
  { id: "PULSES", label: "Pulses" },
  { id: "HERBS", label: "Herbs & Medicinal" },
  { id: "FRESH PRODUCE", label: "Fresh Produce" },
  { id: "NATURAL SWEETENERS", label: "Natural Sweeteners" }
];

const products = [
  {
    id: "red-rice",
    slug: "red-rice",
    name: "RED RICE",
    category: "GRAINS",
    subtitle: "Nutrient-Dense Grains",
    shortDescription: "Organically cultivated whole grain rich in anthocyanin antioxidants, fiber, and essential minerals.",
    description: "IRAVYA GLOBAL offers premium Indian Red Rice, organically cultivated in nutrient-rich farmlands. Celebrated for its deep ruby color, nutty flavor, and dense nutritional profile, our red rice is unpolished to retain maximum bran layer fiber, minerals, and anthocyanin antioxidants.",
    highlights: [
      "High Mineral Content: Abundant in Iron, Zinc, and Magnesium.",
      "Health Benefits: Supports heart health and lowers glycemic index.",
      "Purity Guarantee: Unpolished, 100% natural, and non-GMO."
    ],
    variants: ["Whole Red Grain", "Organic Export Grade"],
    packSize: "1kg pouch / 25kg Bulk Bags",
    image: "/assets/red_rice_packaging.jpg",
    packaging: "1kg retail stand-up zip pouch (as shown) and 25kg/50kg export grade bulk bags.",
    exportInformation: "Shipment ready with complete phytosanitary certification, lab purity reports, and custom container loading."
  },
  {
    id: "turmeric-powder",
    slug: "turmeric-powder",
    name: "TURMERIC POWDER",
    category: "SPICES",
    subtitle: "High Curcumin Content",
    shortDescription: "Vibrant golden spice ground from hand-picked turmeric roots, packed with potent anti-inflammatory properties.",
    description: "Our Premium Turmeric Powder is ground from select high-curcumin Indian turmeric roots. Known for its intense golden color, rich aroma, and high curcumin potency, it is processed under strict hygienic conditions to ensure zero additives, lead, or artificial colorants.",
    highlights: [
      "High Curcumin: Premium potency for medicinal & culinary use.",
      "Aroma & Color: Rich natural aroma and deep golden hue.",
      "Zero Additives: Free from artificial colors, lead, or fillers."
    ],
    variants: ["High Curcumin Grade (3% - 5%+)", "Standard Spice Grade"],
    packSize: "200g pouch / 25kg Fibre Drums",
    image: "/assets/turmeric_packaging.jpg",
    packaging: "200g stand-up pouch (as shown), 1kg foil pouches, and 25kg moisture-barrier bulk drums.",
    exportInformation: "Custom fine-mesh particle sizing available for spice extractors and food processing industries."
  },
  {
    id: "jaggery",
    slug: "jaggery",
    name: "JAGGERY (GUD)",
    category: "NATURAL SWEETENERS",
    subtitle: "Unrefined Natural Sweetener",
    shortDescription: "Traditional cane sweetener produced naturally without chemical bleaching agents or artificial additives.",
    description: "IRAVYA GLOBAL Jaggery (Gud) is a wholesome, unrefined traditional Indian sweetener made directly from boiled sugarcane juice. Free from chemical clarifiers or bleaching agents, it retains vital natural minerals like iron and potassium.",
    highlights: [
      "Natural Energy: Mineral-rich alternative to refined white sugar.",
      "Rich In Iron: Promotes healthy hemoglobin levels and digestion.",
      "Multiple Formats: Available in cubes, blocks, and granular powder form."
    ],
    variants: ["Jaggery Powder", "Jaggery Cubes", "Solid Jaggery Blocks"],
    packSize: "1kg pouch / 10kg & 25kg Master Cartons",
    image: "/assets/jaggery_packaging.jpg",
    packaging: "1kg zip pouch (as shown), vacuum packed blocks, and moisture-sealed bulk cartons.",
    exportInformation: "Specially packed to prevent humidity absorption during maritime ocean transit."
  },
  {
    id: "green-gram",
    slug: "green-gram",
    name: "GREEN GRAM (MUNG BEAN)",
    category: "PULSES",
    subtitle: "Plant-Based Protein Source",
    shortDescription: "Whole green mung beans harvested at peak maturity, widely celebrated for high digestibility and plant protein.",
    description: "Sourced from verified Indian pulse growers, IRAVYA GLOBAL Green Gram (Mung Beans) undergo machine cleaning, optical color sorting, and strict sizing. Rich in dietary fiber and essential amino acids, it is an essential commodity for global plant-based food markets.",
    highlights: [
      "Protein Powerhouse: Essential for plant-based nutrition.",
      "Uniform Grade: Machine-cleaned, sorted, and free from impurities.",
      "High Fiber: Promotes digestive health and vitality."
    ],
    variants: ["Whole Green Mung", "Split Moong Dal"],
    packSize: "1kg Packs / 25kg Bulk Bags",
    image: "/assets/green_gram_packaging.jpg",
    packaging: "25kg / 50kg PP Woven & HDPE Export Bags, plus customized retail packaging.",
    exportInformation: "Fumigated and certified for international grain import protocols."
  },
  {
    id: "fresh-banana",
    slug: "fresh-banana",
    name: "FRESH BANANA",
    category: "FRESH PRODUCE",
    subtitle: "Premium Export Grade",
    shortDescription: "Farm-fresh Grand Naine bananas, ethically harvested and temperature-controlled for long-distance transit.",
    description: "IRAVYA GLOBAL exports premium Grand Naine fresh bananas, harvested from accredited Indian orchards. Each bunch is carefully selected for uniform finger length, caliber, and skin quality, before being vacuum packed in refrigerated sea-freight boxes.",
    highlights: [
      "Rich in Potassium: Excellent natural energy booster.",
      "Strict Sizing: Uniform finger length and caliber selection.",
      "Cold Chain Ready: Packed in refrigerated sea-freight boxes."
    ],
    variants: ["Grand Naine Variety (Cavendish Type)"],
    packSize: "13.5kg / 18.14kg Export Cartons",
    image: "/assets/banana_packaging.jpg",
    packaging: "Telescopic cardboard export cartons with poly-bag vacuum packing and ethylene absorber pads.",
    exportInformation: "Cold-chain monitored shipping at 13.5°C to preserve freshness across long ocean routes."
  },
  {
    id: "mugwort",
    slug: "mugwort",
    name: "MUGWORT DRIED LEAVES",
    category: "HERBS",
    subtitle: "Medicinal & Culinary Herb",
    shortDescription: "Carefully dried and processed aromatic herb valued in traditional medicine, wellness teas, and cosmetics.",
    description: "IRAVYA GLOBAL Mugwort (Artemisia) is ethically harvested and air-dried under shade to retain its natural essential oils, distinct aroma, and active botanical compounds. It serves global herbal tea blenders, cosmetic manufacturers, and wellness processors.",
    highlights: [
      "Aromatic Essential Oils: High potency and natural scent.",
      "Wellness Benefits: Used in digestive aids and herbal teas.",
      "Pure & Natural: Organically dried without chemical treatments."
    ],
    variants: ["Whole Dried Leaves", "Cut & Sifted Herb"],
    packSize: "10kg / 25kg Compressed Bales",
    image: "/assets/mugwort_packaging.jpg",
    packaging: "Double vacuum-sealed foil liner bags inside heavy-duty cartons or compressed bales.",
    exportInformation: "Complete botanical lab analysis report provided with every shipment."
  }
];

function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

// ==========================================
// 2. HEADER & NAVIGATION (OFFICIAL LOGO)
// ==========================================
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

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
        transition: "all 0.3s ease"
      }}
    >
      {/* Top Announcement Bar */}
      <div style={{ backgroundColor: "#06101e", borderBottom: "1px solid rgba(212, 175, 55, 0.15)", padding: "0.35rem 0", fontSize: "0.78rem", color: "#c5a059" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>📍 India's Premier Agricultural Exporter • {companyInfo.brandTagline}</div>
          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
            <a href={`tel:${companyInfo.directors[0].rawPhone}`} style={{ color: "#ffffff", textDecoration: "none" }}>
              📞 {companyInfo.directors[0].name}: {companyInfo.directors[0].phone}
            </a>
            <a href={companyInfo.catalogPdfPath} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold-main)", textDecoration: "none", fontWeight: 700, fontSize: "0.78rem" }}>
              📄 DOWNLOAD CATALOG PDF
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isScrolled ? "0.6rem 1.5rem" : "0.9rem 1.5rem" }}>
        {/* Header Official Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src={companyInfo.officialLogo}
            alt="IRAVYA GLOBAL Official Logo"
            style={{
              height: "56px",
              maxWidth: "240px",
              objectFit: "contain",
              display: "block"
            }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.8rem" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: pathname === link.path ? 700 : 600,
                color: pathname === link.path ? "var(--gold-main)" : "#e2e8f0",
                borderBottom: pathname === link.path ? "2px solid var(--gold-main)" : "2px solid transparent",
                paddingBottom: "0.2rem",
                transition: "var(--transition)",
                letterSpacing: "0.04em"
              }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={companyInfo.catalogPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: "0.5rem 1rem", fontSize: "0.78rem" }}
          >
            CATALOG PDF
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: "none", border: "1px solid #d4af37", color: "#d4af37", padding: "0.5rem 0.75rem", borderRadius: "6px", cursor: "pointer", fontSize: "1.2rem", display: "none" }}
          className="mobile-hamburger"
          aria-label="Toggle Mobile Navigation"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: "#06101e", borderTop: "1px solid rgba(212,175,55,0.2)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} style={{ textDecoration: "none", fontSize: "1rem", fontWeight: 600, color: pathname === link.path ? "var(--gold-main)" : "#ffffff" }}>
              {link.name}
            </Link>
          ))}
          <a href={companyInfo.catalogPdfPath} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: "center", marginTop: "0.5rem" }}>
            📄 DOWNLOAD CATALOG PDF
          </a>
        </div>
      )}
      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}

// ==========================================
// 3. PRODUCT CARD COMPONENT (NO QUOTE BUTTONS)
// ==========================================
function ProductCard({ product }) {
  const defaultDir = companyInfo.directors[0];
  const waMsg = encodeURIComponent(`Hello IRAVYA GLOBAL, I am interested in ${product.name}. Please share available specifications, packaging and export details.`);
  const waUrl = `https://wa.me/${defaultDir.rawPhone.replace("+", "")}?text=${waMsg}`;

  return (
    <div className="card-luxury" style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
      {/* Category Tag */}
      <div style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 10 }}>
        <span className="badge-gold">{product.category}</span>
      </div>

      {/* Clean Image Container maintaining aspect ratio */}
      <div style={{ width: "100%", height: "240px", backgroundColor: "#ffffff", border: "1px solid var(--cream-border)", borderRadius: "var(--radius-sm)", overflow: "hidden", marginBottom: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.75rem" }}>
        <img src={product.image} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", transition: "transform 0.4s ease" }} />
      </div>

      {/* Content */}
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--navy-main)", fontWeight: 800, marginBottom: "0.2rem" }}>
          {product.name}
        </h3>
        <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--gold-accent)", marginBottom: "0.75rem", textTransform: "uppercase" }}>
          {product.subtitle}
        </p>
        <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "1rem" }}>
          {product.shortDescription}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "1.2rem" }}>
          {product.highlights.slice(0, 3).map((h, i) => (
            <div key={i} style={{ fontSize: "0.82rem", color: "var(--text-primary)" }}>✓ {h}</div>
          ))}
        </div>
      </div>

      {/* Pack Size & Price Strip */}
      <div style={{ borderTop: "1px dashed var(--cream-border)", borderBottom: "1px dashed var(--cream-border)", padding: "0.6rem 0", marginBottom: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Pack Size:</span>
          <strong style={{ fontSize: "0.8rem", color: "var(--navy-main)" }}>{product.packSize}</strong>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Export Price:</span>
          <strong style={{ fontSize: "0.85rem", color: "var(--gold-accent)" }}>Price on Request</strong>
        </div>
      </div>

      {/* Clean Buttons (NO QUOTE BUTTONS) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
          <Link to={`/products/${product.slug}`} className="btn-secondary" style={{ padding: "0.6rem", fontSize: "0.78rem", borderColor: "var(--navy-main)", color: "var(--navy-main)", textAlign: "center" }}>
            VIEW DETAILS
          </Link>
          <Link to="/contact" className="btn-primary" style={{ padding: "0.6rem", fontSize: "0.78rem", textAlign: "center" }}>
            CONTACT US
          </Link>
        </div>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "0.6rem", fontSize: "0.8rem", textAlign: "center", justifyContent: "center" }}>
          💬 ENQUIRE ON WHATSAPP
        </a>
      </div>
    </div>
  );
}

// ==========================================
// 4. FLOATING WHATSAPP WIDGET
// ==========================================
function WhatsAppWidget({ productName }) {
  const [open, setOpen] = useState(false);

  const getLink = (rawPhone, name) => {
    const text = productName
      ? `Hello ${name} (IRAVYA GLOBAL), I am interested in ${productName}. Please share available specifications, packaging and export details.`
      : `Hello ${name} (IRAVYA GLOBAL), I would like to inquire about your agricultural export commodities.`;
    return `https://wa.me/${rawPhone.replace("+", "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 1100 }}>
      {open && (
        <div style={{ position: "absolute", bottom: "70px", right: 0, width: "300px", backgroundColor: "#06101e", border: "1px solid var(--gold-main)", borderRadius: "var(--radius-md)", padding: "1.25rem", color: "#ffffff", boxShadow: "0 15px 35px rgba(0,0,0,0.5)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#d4af37", fontSize: "0.95rem" }}>IRAVYA GLOBAL Export Desk</h4>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#94a3b8", cursor: "pointer" }}>✕</button>
          </div>
          <p style={{ fontSize: "0.8rem", color: "#cbd5e1", marginBottom: "1rem" }}>Connect directly on WhatsApp with our export directors:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {companyInfo.directors.map(d => (
              <a key={d.name} href={getLink(d.rawPhone, d.name)} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "rgba(37,211,102,0.15)", border: "1px solid #25d366", color: "#ffffff", padding: "0.75rem", borderRadius: "6px", textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>{d.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#25d366" }}>{d.phone}</div>
                </div>
                <span>💬</span>
              </a>
            ))}
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#25d366", color: "#ffffff", border: "2px solid #ffffff", boxShadow: "0 8px 25px rgba(37,211,102,0.5)", cursor: "pointer", fontSize: "1.5rem" }} aria-label="WhatsApp Contact">
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}

// ==========================================
// 5. FOOTER COMPONENT (OFFICIAL LOGO & NO QUOTES)
// ==========================================
function Footer() {
  return (
    <footer style={{ backgroundColor: "#06101e", color: "#cbd5e1", borderTop: "2px solid var(--gold-main)", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          {/* Col 1: Official Logo & Brand Intro */}
          <div>
            <img
              src={companyInfo.officialLogo}
              alt="IRAVYA GLOBAL Official Logo"
              style={{ height: "60px", maxWidth: "260px", objectFit: "contain", marginBottom: "1rem", display: "block" }}
            />
            <p style={{ color: "#d4af37", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem" }}>"{companyInfo.primaryTagline}"</p>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "1.2rem" }}>
              {companyInfo.brandTagline}
            </p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#cbd5e1", marginBottom: "1.5rem" }}>
              Premium agricultural products sourced from India and delivered to global markets with quality, reliability and trust.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: "0.78rem", padding: "0.5rem 1rem" }}>CONTACT US</Link>
              <a href={companyInfo.catalogPdfPath} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "0.78rem", padding: "0.5rem 1rem" }}>CATALOG PDF</a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#ffffff", fontSize: "1.05rem", marginBottom: "1rem" }}>NAVIGATION</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem" }}>
              <li><Link to="/" style={{ color: "#94a3b8", textDecoration: "none" }}>› Home</Link></li>
              <li><Link to="/about" style={{ color: "#94a3b8", textDecoration: "none" }}>› About IRAVYA GLOBAL</Link></li>
              <li><Link to="/products" style={{ color: "#94a3b8", textDecoration: "none" }}>› Products Catalog</Link></li>
              <li><Link to="/why-us" style={{ color: "#94a3b8", textDecoration: "none" }}>› Why IRAVYA GLOBAL</Link></li>
              <li><Link to="/export" style={{ color: "#94a3b8", textDecoration: "none" }}>› Export Solutions</Link></li>
              <li><Link to="/contact" style={{ color: "#94a3b8", textDecoration: "none" }}>› Contact Directors</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#ffffff", fontSize: "1.05rem", marginBottom: "1rem" }}>PRODUCTS</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem" }}>
              {products.map(p => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} style={{ color: "#94a3b8", textDecoration: "none" }}>› {p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Directors & Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#ffffff", fontSize: "1.05rem", marginBottom: "1rem" }}>DIRECT CONTACT</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {companyInfo.directors.map(d => (
                <div key={d.name} style={{ background: "rgba(19, 42, 72, 0.6)", border: "1px solid rgba(212, 175, 55, 0.3)", padding: "0.75rem", borderRadius: "6px" }}>
                  <p style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.88rem" }}>{d.name}</p>
                  <a href={`tel:${d.rawPhone}`} style={{ color: "#d4af37", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>📞 {d.phone}</a>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#94a3b8" }}>
              Social Handle: <strong style={{ color: "#d4af37" }}>{companyInfo.social.handle}</strong>
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem", fontSize: "0.8rem", color: "#64748b" }}>
          <div>© 2026 IRAVYA GLOBAL. All Rights Reserved. Exporter of Premium Agricultural Commodities.</div>
          <div>Quality Sourcing • Reliable Logistics • International Supply</div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// 6. PAGE COMPONENTS & ROUTES
// ==========================================

// PAGE: HOME
function HomePage() {
  const [selectedCat, setSelectedCat] = useState("ALL");
  const filtered = selectedCat === "ALL" ? products : products.filter(p => p.category === selectedCat);

  return (
    <div>
      {/* 1. HERO SECTION - CLEAN TWO-COLUMN LAYOUT WITH LARGE OFFICIAL LOGO ON RIGHT */}
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0 5rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container">
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
            
            {/* LEFT COLUMN: HERO TEXT & BUTTONS */}
            <div>
              <span className="badge-gold" style={{ marginBottom: "1rem" }}>{companyInfo.brandTagline}</span>
              <h1 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 900, color: "#ffffff", marginTop: "0.6rem", marginBottom: "0.4rem", lineHeight: 1.1, fontFamily: "var(--font-heading)" }}>
                IRAVYA <span className="text-gold-gradient">GLOBAL</span>
              </h1>
              <h2 style={{ fontSize: "clamp(1.15rem, 2vw, 1.6rem)", fontFamily: "var(--font-heading)", color: "var(--gold-light)", fontWeight: 700, marginBottom: "1.2rem", lineHeight: 1.3 }}>
                "{companyInfo.primaryTagline}"
              </h2>
              <p style={{ fontSize: "1.02rem", color: "#cbd5e1", lineHeight: 1.7, marginBottom: "2.2rem", maxWidth: "600px" }}>
                {companyInfo.heroText}
              </p>
              
              {/* CLEAN BUTTONS (EXPLORE PRODUCTS & DOWNLOAD CATALOG PDF ONLY) */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
                <Link to="/products" className="btn-primary" style={{ padding: "0.9rem 1.8rem" }}>
                  EXPLORE PRODUCTS ›
                </Link>
                <a href={companyInfo.catalogPdfPath} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "0.9rem 1.8rem" }}>
                  📄 DOWNLOAD CATALOG PDF
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: LARGE OFFICIAL UPLOADED IRAVYA GLOBAL LOGO */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "440px",
                  backgroundColor: "#0b192c",
                  border: "2px solid var(--gold-main)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                  textAlign: "center"
                }}
              >
                <img
                  src={companyInfo.officialLogo}
                  alt="IRAVYA GLOBAL Official Logo"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "340px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }}
                />
              </div>
            </div>

          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
              text-align: center !important;
            }
            .hero-grid > div:first-child {
              order: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .hero-grid > div:last-child {
              order: 2;
            }
          }
        `}</style>
      </section>

      {/* 2. TRUST INDICATORS STRIP */}
      <section style={{ backgroundColor: "#0b192c", padding: "2rem 0", borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {companyInfo.trustBadges.map(b => (
              <div key={b.id} style={{ padding: "0.75rem 1rem", background: "rgba(19, 42, 72, 0.4)", border: "1px solid rgba(212, 175, 55, 0.2)", borderRadius: "var(--radius-sm)" }}>
                <strong style={{ display: "block", fontSize: "0.9rem", color: "#ffffff" }}>{b.label}</strong>
                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{b.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span className="badge-gold">About Us</span>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--navy-main)", marginTop: "0.5rem" }}>
                {companyInfo.aboutTitle}
              </h2>
              <div className="gold-divider" />
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                {companyInfo.aboutCopy}
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/about" className="btn-primary">READ OUR STORY ›</Link>
                <Link to="/why-us" className="btn-secondary" style={{ borderColor: "var(--navy-main)", color: "var(--navy-main)" }}>WHY CHOOSE US</Link>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "2px solid var(--gold-main)", boxShadow: "var(--shadow-lg)" }}>
                <img src="/assets/brand_banners.jpg" alt="IRAVYA GLOBAL Agriculture" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS CATALOG SHOWCASE */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fdfbf7" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            <span className="badge-gold">Export Commodities</span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--navy-main)", marginTop: "0.5rem" }}>FEATURED COMMODITIES</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Explore our premium portfolio of spices, grains, pulses, herbs, sweeteners, and fresh produce.</p>
            <div className="gold-divider gold-divider-center" />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginBottom: "3rem" }}>
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setSelectedCat(cat.id)} style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem", fontWeight: 600, borderRadius: "50px", cursor: "pointer", border: selectedCat === cat.id ? "1px solid var(--gold-main)" : "1px solid var(--cream-border)", backgroundColor: selectedCat === cat.id ? "var(--navy-main)" : "#ffffff", color: selectedCat === cat.id ? "var(--gold-main)" : "var(--text-secondary)" }}>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid-products">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY IRAVYA GLOBAL (REPLACES PROCESS PIPELINE - CLEAN 4 CARDS) */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0b192c", color: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">Our Strengths</span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", marginTop: "0.5rem" }}>WHY IRAVYA GLOBAL</h2>
            <p style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Quality, Care and Dependability From Farm to Global Market</p>
            <div className="gold-divider gold-divider-center" />
          </div>

          <div className="why-us-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {companyInfo.whyIravyaCards.map((card, idx) => (
              <div key={idx} className="card-dark">
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", color: "var(--gold-main)", marginBottom: "0.75rem" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                  "{card.desc}"
                </p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 1024px) {
              .why-us-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 600px) {
              .why-us-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* 6. DOWNLOAD CATALOG PDF CTA BANNER (ONE COMPLETE PDF BUTTON) */}
      <section style={{ padding: "4.5rem 0", backgroundColor: "#06101e", borderTop: "1px solid var(--gold-accent)" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          <div>
            <span className="badge-gold">Complete Product Portfolio</span>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "#ffffff", marginTop: "0.4rem" }}>EXPLORE OUR PRODUCT CATALOG</h3>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>Discover our portfolio of premium agricultural products sourced from India.</p>
          </div>
          <a href={companyInfo.catalogPdfPath} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "0.95rem" }}>
            📄 DOWNLOAD CATALOG PDF
          </a>
        </div>
      </section>
    </div>
  );
}

// PAGE: ABOUT
function AboutPage() {
  return (
    <div>
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="badge-gold">ABOUT IRAVYA GLOBAL</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", marginTop: "0.5rem" }}>ROOTED IN INDIA. DELIVERED TO THE WORLD.</h1>
          <p style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Bridging Indian Agriculture With Global Quality Standards</p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "var(--navy-main)", marginBottom: "1rem" }}>OUR ESSENCE & MISSION</h2>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{companyInfo.aboutCopy}</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/products" className="btn-primary">EXPLORE PRODUCTS ›</Link>
                <a href={companyInfo.catalogPdfPath} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: "var(--navy-main)", color: "var(--navy-main)" }}>DOWNLOAD CATALOG PDF</a>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img src={companyInfo.officialLogo} alt="IRAVYA GLOBAL Logo" style={{ width: "100%", maxWidth: "380px", borderRadius: "var(--radius-md)", border: "2px solid var(--gold-main)", padding: "1.5rem", backgroundColor: "#0b192c" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// PAGE: PRODUCTS
function ProductsPage() {
  const [selectedCat, setSelectedCat] = useState("ALL");
  const filtered = selectedCat === "ALL" ? products : products.filter(p => p.category === selectedCat);

  return (
    <div>
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-gold">AGRICULTURAL COMMODITIES</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", marginTop: "0.5rem" }}>EXPORT PRODUCT PORTFOLIO</h1>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginBottom: "3rem" }}>
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setSelectedCat(cat.id)} style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem", fontWeight: 600, borderRadius: "50px", cursor: "pointer", border: selectedCat === cat.id ? "1px solid var(--gold-main)" : "1px solid var(--cream-border)", backgroundColor: selectedCat === cat.id ? "var(--navy-main)" : "#ffffff", color: selectedCat === cat.id ? "var(--gold-main)" : "var(--text-secondary)" }}>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid-products">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

// PAGE: PRODUCT DETAIL
function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <div style={{ padding: "5rem 0", textAlign: "center" }}>Product not found</div>;

  const defaultDir = companyInfo.directors[0];
  const waUrl = `https://wa.me/${defaultDir.rawPhone.replace("+", "")}?text=${encodeURIComponent(`Hello IRAVYA GLOBAL, I am interested in ${product.name}. Please share details.`)}`;

  return (
    <div>
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "2rem 0", borderBottom: "1px solid var(--gold-accent)" }}>
        <div className="container">
          <Link to="/products" style={{ color: "var(--gold-main)", textDecoration: "none", fontSize: "0.85rem" }}>‹ Back to Products</Link>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "#ffffff", marginTop: "0.5rem" }}>{product.name}</h1>
        </div>
      </section>

      <section style={{ padding: "4rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3.5rem", marginBottom: "3rem" }}>
            <div>
              <div style={{ width: "100%", height: "400px", backgroundColor: "#ffffff", border: "2px solid var(--gold-main)", borderRadius: "var(--radius-md)", padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={product.image} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </div>

            <div>
              <span className="badge-gold">{product.category}</span>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--navy-main)", marginTop: "0.5rem" }}>{product.name}</h2>
              <p style={{ color: "var(--gold-accent)", fontWeight: 700, marginBottom: "1rem" }}>{product.subtitle}</p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{product.description}</p>
              <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "6px", marginBottom: "1.5rem", border: "1px solid #ddd" }}>
                <span style={{ fontSize: "0.8rem", color: "#777", display: "block" }}>Export Price:</span>
                <strong style={{ fontSize: "1.2rem", color: "var(--gold-accent)" }}>Price on Request</strong>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link to="/contact" className="btn-primary" style={{ textAlign: "center" }}>CONTACT US</Link>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ textAlign: "center", justifyContent: "center" }}>💬 ENQUIRE ON WHATSAPP</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// PAGE: WHY US
function WhyUsPage() {
  return (
    <div>
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-gold">TRUST & EXCELLENCE</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", marginTop: "0.5rem" }}>WHY IRAVYA GLOBAL</h1>
          <p style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Quality, Care and Dependability From Farm to Global Market</p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div className="why-us-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {companyInfo.whyIravyaCards.map((c, i) => (
              <div key={i} style={{ backgroundColor: "#ffffff", padding: "2.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--cream-border)", boxShadow: "var(--shadow-sm)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", fontSize: "1.2rem", marginBottom: "0.75rem" }}>{c.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>"{c.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// PAGE: EXPORT
function ExportPage() {
  return (
    <div>
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-gold">EXPORT SOLUTIONS</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", marginTop: "0.5rem" }}>FROM INDIA TO THE WORLD</h1>
          <p style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Reliable Agricultural Export Solutions</p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
            {companyInfo.exportHighlights.map((h, i) => (
              <div key={i} className="card-luxury">
                <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>{h.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{h.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", marginBottom: "2rem" }}>PACKAGED FOR QUALITY</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
              <div className="card-luxury">
                <img src="/assets/turmeric_packaging.jpg" alt="Turmeric Pouch" style={{ height: "200px", objectFit: "contain" }} />
                <h4 style={{ marginTop: "1rem", color: "var(--navy-main)" }}>RETAIL STAND-UP POUCHES</h4>
              </div>
              <div className="card-luxury">
                <img src="/assets/red_rice_packaging.jpg" alt="Red Rice Pouch" style={{ height: "200px", objectFit: "contain" }} />
                <h4 style={{ marginTop: "1rem", color: "var(--navy-main)" }}>GRAIN RETAIL PACKS</h4>
              </div>
              <div className="card-luxury">
                <img src="/assets/jaggery_packaging.jpg" alt="Jaggery Pouch" style={{ height: "200px", objectFit: "contain" }} />
                <h4 style={{ marginTop: "1rem", color: "var(--navy-main)" }}>SWEETENER PACKAGING</h4>
              </div>
            </div>
            <Link to="/contact" className="btn-primary">CONTACT US FOR EXPORT INQUIRIES ›</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// PAGE: CONTACT
function ContactPage() {
  const [formData, setFormData] = useState({ fullName: "", companyName: "", phone: "", country: "", product: "Turmeric Powder", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section style={{ backgroundColor: "#06101e", color: "#ffffff", padding: "4rem 0", borderBottom: "2px solid var(--gold-main)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge-gold">GLOBAL TRADE ENQUIRIES</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", marginTop: "0.5rem" }}>CONNECT WITH IRAVYA GLOBAL</h1>
          <p style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Let's take India's finest agricultural products to the world.</p>
          <div className="gold-divider gold-divider-center" />
        </div>
      </section>

      <section style={{ padding: "5rem 0", backgroundColor: "var(--cream-bg)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3.5rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", marginBottom: "1.5rem" }}>GLOBAL EXPORT DIRECTORS</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {companyInfo.directors.map(d => (
                  <div key={d.name} style={{ backgroundColor: "#ffffff", border: "1.5px solid var(--gold-main)", padding: "1.5rem", borderRadius: "var(--radius-md)" }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)" }}>{d.name}</h3>
                    <p style={{ color: "var(--gold-accent)", fontSize: "0.85rem" }}>{d.role}</p>
                    <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0.5rem 0" }}>
                      <a href={`tel:${d.rawPhone}`} style={{ color: "var(--navy-main)", textDecoration: "none" }}>📞 {d.phone}</a>
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
                      <a href={`tel:${d.rawPhone}`} className="btn-secondary" style={{ borderColor: "var(--navy-main)", color: "var(--navy-main)", padding: "0.4rem 0.8rem", fontSize: "0.8rem" }}>CALL DIRECTLY</a>
                      <a href={`https://wa.me/${d.rawPhone.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem" }}>WHATSAPP</a>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", backgroundColor: "#0b192c", padding: "1.5rem", borderRadius: "6px", color: "#ffffff" }}>
                <p>Social Media Handle: <strong style={{ color: "#d4af37" }}>{companyInfo.social.handle}</strong></p>
              </div>
            </div>

            <div style={{ backgroundColor: "#ffffff", padding: "2.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--cream-border)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--navy-main)", marginBottom: "1rem" }}>CONTACT US</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Fill out the form below to connect with our export team regarding specifications and supply details.</p>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input type="text" placeholder="Full Name *" required style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }} />
                  <input type="text" placeholder="Company Name *" required style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }} />
                  <input type="text" placeholder="Phone / WhatsApp *" required style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }} />
                  <input type="text" placeholder="Destination Country *" required style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }} />
                  <textarea rows={4} placeholder="Your inquiry details..." style={{ padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }} />
                  <button className="btn-primary" type="submit">SEND MESSAGE</button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <h4 style={{ color: "var(--navy-main)", fontFamily: "var(--font-heading)", fontSize: "1.4rem" }}>MESSAGE TRANSMITTED</h4>
                  <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>Thank you. Our export directors will contact you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 7. MAIN APP CONTAINER
// ==========================================
function App() {
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />

        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/export" element={<ExportPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppWidget productName={selectedProduct} />
      </div>
    </BrowserRouter>
  );
}

// Mount React App
try {
  const rootEl = document.getElementById("root");
  if (rootEl) {
    if (ReactDOMObj.createRoot) {
      ReactDOMObj.createRoot(rootEl).render(<App />);
    } else if (ReactDOMObj.render) {
      ReactDOMObj.render(<App />, rootEl);
    } else if (window.ReactDOM) {
      window.ReactDOM.render(<App />, rootEl);
    }
  }
} catch (err) {
  console.error("Mounting error:", err);
}
