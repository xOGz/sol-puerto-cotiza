import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string; // e.g., "/about"
}

const BASE_URL = "https://kilowattpr.com"; // preferred non-www canonical

export default function SEO({ title, description, canonicalPath }: SEOProps) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta description
    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    if (desc) desc.setAttribute("content", description);

    // Canonical
    const urlPath = canonicalPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
    const canonicalUrl = `${BASE_URL}${urlPath.endsWith('/') ? urlPath : urlPath + '/'}`;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    if (canonical) canonical.setAttribute("href", canonicalUrl);
  }, [title, description, canonicalPath]);

  return null;
}
