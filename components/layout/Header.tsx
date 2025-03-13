"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-medium tracking-tight">
              Prestige<span className="text-primary">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l">
            <ModeToggle />
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-background md:hidden">
          <nav className="container flex flex-col space-y-8 p-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary border-b pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button size="lg" className="mt-4">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
