import { Outlet, Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PenLine, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/place-order", label: "Place Order" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Premium Header with scroll effects */}
      <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-lg shadow-large" 
          : "bg-primary"
      } text-primary-foreground`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo with hover effect */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-display font-bold group"
          >
            <div className="relative">
              <PenLine className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 blur-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="group-hover:tracking-wide transition-all duration-300">WriteRight</span>
          </Link>

          {/* Desktop Navigation with active indicators */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  isActive(link.href)
                    ? "text-primary-foreground bg-white/10"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>          {/* Mobile Menu with enhanced styling */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-primary-foreground hover:bg-white/10 transition-colors"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] backdrop-blur-xl bg-card/95">
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-all duration-200 px-4 py-3 rounded-lg ${
                      isActive(link.href) 
                        ? "text-primary font-semibold bg-primary/10 border-l-4 border-primary" 
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="border-t bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info with enhanced styling */}
            <div>
              <div className="flex items-center gap-2 text-xl font-display font-bold mb-4 group">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <PenLine className="h-5 w-5 text-primary" />
                </div>
                <span className="gradient-text">WriteRight</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Neat, handwritten assignments delivered to your doorstep. Made for students across India.
              </p>
            </div>

            {/* Quick Links with hover effects */}
            <div>
              <h3 className="font-semibold mb-4 font-display text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info with icons */}
            <div>
              <h3 className="font-semibold mb-4 font-display text-lg">Get In Touch</h3>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    📧
                  </span>
                  <span>contact@writeright.com</span>
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    📞
                  </span>
                  <span>+91-XXXXXXXXXX</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1.5 flex-wrap">
              <span>© 2026. Built with</span>
              <Heart className="h-4 w-4 text-destructive fill-destructive animate-pulse" />
              <span>using</span>
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                caffeine.ai
                <span className="text-xs">→</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
