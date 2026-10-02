import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    const defaultTitle = "IRAVYA GLOBAL | Premium Agricultural Products From India";
    const defaultDesc = "IRAVYA GLOBAL supplies premium agricultural products from India, including spices, grains, pulses, herbs, jaggery and fresh produce for domestic and international markets.";

    document.title = title ? `${title} | IRAVYA GLOBAL` : defaultTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || defaultDesc);
    }
  }, [title, description]);

  return null;
}
