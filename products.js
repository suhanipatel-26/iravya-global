export const categories = [
  { id: "ALL", label: "All Commodities" },
  { id: "SPICES", label: "Spices" },
  { id: "GRAINS", label: "Grains" },
  { id: "PULSES", label: "Pulses" },
  { id: "HERBS", label: "Herbs & Medicinal" },
  { id: "FRESH PRODUCE", label: "Fresh Produce" },
  { id: "NATURAL SWEETENERS", label: "Natural Sweeteners" }
];

export const products = [
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
      "Purity Guarantee: Unpolished, 100% natural, and non-GMO.",
      "Applications: Ideal for health-conscious food distributors, organic retailers, and wellness markets."
    ],
    variants: ["Whole Red Grain", "Organic Export Grade"],
    applications: ["Health-Conscious Retail", "Organic Food Wholesalers", "Dietary & Wellness Brands"],
    packSize: "1kg pouch / 25kg Bulk HDPE & Jute Bags",
    image: "/assets/red_rice_packaging.jpg",
    gallery: [
      "/assets/red_rice_packaging.jpg",
      "/assets/catalog_page_3.png"
    ],
    retailPrice: null,
    wholesalePrice: null,
    exportPrice: null,
    moq: "Available on request",
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
      "Zero Additives: Free from artificial colors, lead, or fillers.",
      "Export Quality: Fine mesh size tailored for retail & pharmaceutical application."
    ],
    variants: ["High Curcumin Grade (3% - 5%+)", "Standard Spice Grade"],
    applications: ["Culinary & Spice Blends", "Nutraceuticals & Dietary Supplements", "Cosmetics & Herbal Formulations"],
    packSize: "200g pouch / 25kg Fibre Drum & Bulk Craft Bags",
    image: "/assets/turmeric_packaging.jpg",
    gallery: [
      "/assets/turmeric_packaging.jpg",
      "/assets/hero_dark_banner.jpg",
      "/assets/catalog_page_3.png"
    ],
    retailPrice: null,
    wholesalePrice: null,
    exportPrice: null,
    moq: "Available on request",
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
      "Multiple Formats: Available in cubes, blocks, and granular powder form.",
      "Hygienic Process: Boiled and solidified under ultra-clean conditions."
    ],
    variants: ["Jaggery Powder", "Jaggery Cubes", "Solid Jaggery Blocks"],
    applications: ["Confectionery & Bakery", "Herbal Teas & Beverages", "Direct Retail Consumption"],
    packSize: "1kg pouch / 10kg & 25kg Master Cartons",
    image: "/assets/jaggery_packaging.jpg",
    gallery: [
      "/assets/jaggery_packaging.jpg",
      "/assets/catalog_page_3.png"
    ],
    retailPrice: null,
    wholesalePrice: null,
    exportPrice: null,
    moq: "Available on request",
    packaging: "1kg zip pouch (as shown), vacuum packed blocks, and moisture-sealed bulk cartons.",
    exportInformation: "Specially packed to prevent humidity absorption during maritime ocean transit."
  },
  {
    id: "green-gram",
    slug: "green-gram",
    name: "GREEN GRAM / MUNG BEAN",
    category: "PULSES",
    subtitle: "Plant-Based Protein Source",
    shortDescription: "Whole green mung beans harvested at peak maturity, widely celebrated for high digestibility and plant protein.",
    description: "Sourced from verified Indian pulse growers, IRAVYA GLOBAL Green Gram (Mung Beans) undergo machine cleaning, optical color sorting, and strict sizing. Rich in dietary fiber and essential amino acids, it is an essential commodity for global plant-based food markets.",
    highlights: [
      "Protein Powerhouse: Essential for plant-based nutrition.",
      "Uniform Grade: Machine-cleaned, sorted, and free from impurities.",
      "High Fiber: Promotes digestive health and vitality.",
      "Versatile Export: Available as whole green or split moong dal."
    ],
    variants: ["Whole Green Mung", "Split Moong Dal (Yellow/Green)"],
    applications: ["Food Processing & Canning", "Plant-Based Protein Formulations", "Retail Packaging & Supermarkets"],
    packSize: "1kg / 5kg Retail Packs & 25kg/50kg Bulk Bags",
    image: "/assets/hero_dark_banner.jpg",
    gallery: [
      "/assets/hero_dark_banner.jpg",
      "/assets/catalog_page_3.png"
    ],
    retailPrice: null,
    wholesalePrice: null,
    exportPrice: null,
    moq: "Available on request",
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
      "Cold Chain Ready: Packed in refrigerated sea-freight boxes.",
      "Farm Fresh: Harvested at precise green maturity for extended shelf life."
    ],
    variants: ["Grand Naine Variety (Cavendish Type)"],
    applications: ["Fresh Produce Wholesalers", "Supermarket Chains", "Fruit Importers & Distributors"],
    packSize: "13.5kg / 18.14kg Export Cartons",
    image: "/assets/brand_banners.jpg",
    gallery: [
      "/assets/brand_banners.jpg",
      "/assets/catalog_page_4.png"
    ],
    retailPrice: null,
    wholesalePrice: null,
    exportPrice: null,
    moq: "Available on request (Refrigerated Reefer Container)",
    packaging: "Telescopic cardboard export cartons with poly-bag vacuum packing and ethylene absorber pads.",
    exportInformation: "Cold-chain monitored shipping at 13.5°C to preserve freshness across long ocean routes."
  },
  {
    id: "mugwort",
    slug: "mugwort",
    name: "MUGWORT (DRIED LEAVES)",
    category: "HERBS",
    subtitle: "Medicinal & Culinary Herb",
    shortDescription: "Carefully dried and processed aromatic herb valued in traditional medicine, wellness teas, and cosmetics.",
    description: "IRAVYA GLOBAL Mugwort (Artemisia) is ethically harvested and air-dried under shade to retain its natural essential oils, distinct aroma, and active botanical compounds. It serves global herbal tea blenders, cosmetic manufacturers, and wellness processors.",
    highlights: [
      "Aromatic Essential Oils: High potency and natural scent.",
      "Wellness Benefits: Used in digestive aids and herbal teas.",
      "Pure & Natural: Organically dried without chemical treatments.",
      "Export Standard: Shade dried, cut/sifted or whole leaf format."
    ],
    variants: ["Whole Dried Leaves", "Cut & Sifted Herb", "Powdered Grade"],
    applications: ["Herbal Teas & Infusions", "Traditional Medicine Formulations", "Cosmetic Extracts & Soaps"],
    packSize: "10kg / 25kg Compressed Bulk Bales & Bags",
    image: "/assets/hero_dark_banner.jpg",
    gallery: [
      "/assets/hero_dark_banner.jpg",
      "/assets/catalog_page_4.png"
    ],
    retailPrice: null,
    wholesalePrice: null,
    exportPrice: null,
    moq: "Available on request",
    packaging: "Double vacuum-sealed foil liner bags inside heavy-duty cartons or compressed bales.",
    exportInformation: "Complete botanical lab analysis report provided with every shipment."
  }
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}
