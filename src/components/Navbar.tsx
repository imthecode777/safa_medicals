import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const LOGO_SRC = "/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevOverflow = useRef<string>("");

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isMenuOpen) {
      prevOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflow.current || "";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="Safa Medicals"
          >
            <img
              src={LOGO_SRC}
              alt="Safa Medicals logo"
              className="h-10 sm:h-11"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8" aria-label="Primary">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Home
            </a>
            <a href="#features" className="nav-link">
              Services
            </a>
            <a href="#details" className="nav-link">
              Contact
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 p-3 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ✅ Mobile Menu with smooth transition */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white md:hidden transform transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav
          className="flex flex-col space-y-8 items-center mt-20 px-6"
          aria-label="Mobile"
        >
          <a
            href="#"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a
            href="#features"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#details"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
