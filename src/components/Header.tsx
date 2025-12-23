"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/siteConfig";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const navLinks = [
    { href: "/live-silver-prices", label: "Silver Prices" },
    { href: "/coin-specs", label: "Coin Specs" },
    { href: "/design-history", label: "Design & History" },
    { href: "/where-to-buy", label: "Where to Buy" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
  ];

  // Check if a nav link is active
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Header background styling based on page type
  const headerBg = isHomepage
    ? scrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm"
      : "bg-gradient-to-b from-white/80 to-transparent"
    : "header--interior";

  // Text color classes based on page type
  const logoClass = isHomepage
    ? "accent-text"
    : "text-white";

  const navLinkClass = (isActive: boolean) => {
    if (isHomepage) {
      return isActive
        ? "text-slate-700"
        : "text-slate-600 hover:text-slate-900";
    }
    // Interior pages: white text
    return isActive
      ? "text-white"
      : "text-white/80 hover:text-white";
  };

  const mobileButtonClass = isHomepage
    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    : "text-white/90 hover:text-white hover:bg-white/10";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBg}`}
    >
      {/* Subtle bottom separation */}
      {isHomepage && (
        <div 
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-30"
          }`}
          style={{ background: "linear-gradient(90deg, transparent 0%, var(--accent-muted) 20%, var(--accent-muted) 80%, transparent 100%)" }}
        />
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[108px]">
          {/* Brand Lockup - Text Only */}
          <Link href="/" className="group">
            <span className={`text-[1.65rem] font-display font-semibold tracking-tight leading-none ${logoClass}`}>
              {SITE_CONFIG.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-colors duration-200 font-medium text-[15px] tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm ${navLinkClass(isActive)}`}
                >
                  {link.label}
                  {/* Active indicator - subtle underline */}
                  {isActive && (
                    <span 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ 
                        background: isHomepage 
                          ? "linear-gradient(90deg, transparent 0%, var(--accent-primary) 20%, var(--accent-primary) 80%, transparent 100%)"
                          : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 80%, transparent 100%)"
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${mobileButtonClass}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={`lg:hidden py-5 border-t -mx-4 px-4 sm:-mx-6 sm:px-6 ${
            isHomepage 
              ? "border-slate-200 bg-white/98 backdrop-blur-md"
              : "border-white/20 bg-[var(--accent-primary)]/98 backdrop-blur-md"
          }`}>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-2 rounded-lg transition-colors duration-200 font-medium ${
                      isHomepage
                        ? isActive
                          ? "text-slate-900 bg-slate-100"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        : isActive
                          ? "text-white bg-white/15"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
