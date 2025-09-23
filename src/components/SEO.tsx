// Lightweight SEO helper without external deps
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;

    let metaDesc = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.content;
    if (description) metaDesc.content = description;

    let linkCanonical = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!linkCanonical && canonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    const prevCanonical = linkCanonical?.href;
    if (linkCanonical && canonical) linkCanonical.href = canonical;

    return () => {
      // Restore previous values on unmount to avoid leaking SEO state across routes
      document.title = previousTitle;
      if (metaDesc && typeof prevDesc === 'string') metaDesc.content = prevDesc;
      if (linkCanonical && typeof prevCanonical === 'string') linkCanonical.href = prevCanonical;
    };
  }, [title, description, canonical]);

  return null;
}
