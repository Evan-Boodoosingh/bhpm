import { useState } from "react";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-4 cursor-pointer hover:bg-slate-100/80 rounded-xl transition-all h-16 px-0.5"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src="/bhpm/images/download.svg"
              alt="BostonHomes"
              className="w-22 h-22"
            />
            {/* <span className="font-semibold text-lg text-slate-900">
              BostonHomes
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* <button
              onClick={() => scrollToSection('properties')}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all"
            >
              Properties
            </button> */}
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all cursor-pointer"
            >
              Services
            </button>
            {/* <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all"
            >
              Contact
            </button> */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-2 bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl shadow-lg shadow-amber-500/30 border-0 cursor-pointer"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100/80 rounded-xl transition-all cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200/50">
            <div className="flex flex-col gap-2">
              {/* <button
                onClick={() => scrollToSection("properties")}
                className="text-left text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all py-3 px-4 cursor-pointer"
              >
                Properties
              </button> */}
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all py-3 px-4 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all py-3 px-4 cursor-pointer"
              >
                Services
              </button>
              {/* <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all py-3 px-4 cursor-pointer"
              >
                Contact
              </button> */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl shadow-lg shadow-amber-500/30 w-full mt-2 cursor-pointer"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
