"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Horizontal programming: Smart navigation function
// Navigates to section if on homepage, otherwise goes to homepage first
const navigateToSection = (sectionId: string, pathname: string, router: any) => {
  if (pathname === '/') {
    // Already on homepage, just scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    // Navigate to homepage with hash, then scroll
    router.push(`/#${sectionId}`);
  }
};

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Horizontal programming: Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down (and not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollNavigation = (sectionId: string) => {
    navigateToSection(sectionId, pathname, router);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-amber-600/5 backdrop-blur-md transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <AcmeLogo />
            <span className="text-xl font-bold text-white/90 group-hover:text-amber-400 transition-colors duration-300 drop-shadow-lg">
              Coffee Spot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/menu"
              className="text-white/80 hover:text-amber-400 font-medium transition-colors duration-300 relative group drop-shadow-md"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400/80 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about_the_place"
              className="text-white/80 hover:text-amber-400 font-medium transition-colors duration-300 relative group drop-shadow-md"
            >
              About the Place
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400/80 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button
              onClick={() => handleScrollNavigation('contact')}
              className="text-white/80 hover:text-amber-400 font-medium transition-colors duration-300 relative group drop-shadow-md"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400/80 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleScrollNavigation('contact')}
              className="px-6 py-2 bg-amber-600/80 text-white font-semibold rounded-full hover:bg-amber-700/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg backdrop-blur-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white/90 hover:bg-amber-600/20 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 bg-amber-600/10 backdrop-blur-md border-t border-amber-600/20">
          <Link
            href="/menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-2 text-white/90 hover:bg-amber-600/20 hover:text-amber-400 rounded-lg font-medium transition-colors duration-300"
          >
            Menu
          </Link>
          <Link
            href="/about_the_place"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-2 text-white/90 hover:bg-amber-600/20 hover:text-amber-400 rounded-lg font-medium transition-colors duration-300"
          >
            About the Place
          </Link>
          <button
            onClick={() => handleScrollNavigation('contact')}
            className="block w-full text-left px-4 py-2 text-white/90 hover:bg-amber-600/20 hover:text-amber-400 rounded-lg font-medium transition-colors duration-300"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollNavigation('contact')}
            className="block w-full px-4 py-2 bg-amber-600/80 text-white font-semibold rounded-lg hover:bg-amber-700/90 transition-colors duration-300 backdrop-blur-sm"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
