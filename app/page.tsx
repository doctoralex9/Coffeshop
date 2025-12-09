"use client";

import { useEffect } from "react";
import Hero from "./components/Hero"
import MenuPreview from "./components/MenuPreview";
import Footer from "./components/Footer";

export default function HomePage() {
  // Horizontal programming: Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return(
    <>
      <Hero />
      <MenuPreview />
      <Footer />
    </>
  );
}