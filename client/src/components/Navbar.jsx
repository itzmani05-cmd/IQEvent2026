import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logopic.png";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Events", path: "/events" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".mobile-nav-link",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.3 }
      );
    }
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-gray-50 h-20 text-white">
      <div className="container mx-auto px-6 bg-black">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <div className="">
              <img
                src={logo}
                alt="InfoQuest Logo"
                className="w-12 h-12 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 "></div>
            </div>
            <span className="font-display font-bold text-2xl tracking-[0.15em] text-white uppercase">
              INFO
              <span className="text-primary">QUEST</span>
              <sup className="text-primary text-sm font-extrabold ml-2 tracking-widest">
                '26
              </sup>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.id ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link"
                >
                  {link.name}
                </button>
              ) : (
                <Link key={link.path} to={link.path} className="nav-link">
                  {link.name}
                </Link>
              )
            )}

            <Link
              to="/register"
              className="btn-spider rounded-lg text-sm px-2 py-1"
            >
              Register Now
            </Link>
          </div>


          <button
            className="md:hidden text-white p-2 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden absolute top-20 left-0 right-0 bg-background/98 
            backdrop-blur-md border-t border-border shadow-card"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) =>
              link.id ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="mobile-nav-link block py-3 text-lg font-medium uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="mobile-nav-link block py-3 text-lg font-medium uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}


              <Link
                to="/register"
                className="mobile-nav-link btn-spider block text-center rounded-lg mt-4"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
