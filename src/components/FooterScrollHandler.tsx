"use client";

import { useEffect } from "react";

export default function FooterScrollHandler() {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Scroll if URL already has #footer on load
    scrollToFooter();

    // Listen to hash changes
    window.addEventListener("hashchange", scrollToFooter);
    return () => window.removeEventListener("hashchange", scrollToFooter);
  }, []);

  return null;
}
