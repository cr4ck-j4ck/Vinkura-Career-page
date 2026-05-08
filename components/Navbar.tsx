"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`nav-wrapper nav-ready ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          <Link href="/" className="nav-logo">
            VINKURA <span style={{ color: "#888", marginLeft: "8px", fontWeight: 400 }}>/ Careers</span>
          </Link>

          <div className="nav-links">
            <Link href="#open-positions" className="nav-link-item">Open Positions</Link>
            <Link href="#getting-hired" className="nav-link-item">Getting Hired</Link>
            <Link href="#students" className="nav-link-item">Students and Early Talent</Link>
            <Link href="#life" className="nav-link-item">Life at Vinkura</Link>
          </div>

          <div className="nav-actions">
            <button className="contact-btn">Get Started</button>
            <button className="nav-trigger" style={{ background: "transparent", border: "none", cursor: "pointer", color: "#555" }}>
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button 
              className="nav-trigger mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
              style={{ background: "transparent", border: "none", cursor: "pointer", color: "#555" }}
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(255,255,255,0.95)", zIndex: 10000, padding: "2rem" }}>
          <button onClick={() => setMobileMenuOpen(false)} style={{ position: "absolute", top: "2rem", right: "2rem", background: "none", border: "none", cursor: "pointer" }}>
            <X size={24} />
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "4rem", fontSize: "1.5rem", fontWeight: "bold" }}>
            <Link href="#open-positions" onClick={() => setMobileMenuOpen(false)}>Open Positions</Link>
            <Link href="#getting-hired" onClick={() => setMobileMenuOpen(false)}>Getting Hired</Link>
            <Link href="#students" onClick={() => setMobileMenuOpen(false)}>Students</Link>
          </div>
        </div>
      )}
    </>
  );
}
