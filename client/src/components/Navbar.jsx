import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import logo from "../assets/logopic.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", id: "about" },
    { name: "Events", path: "/events" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".mobile-nav-link",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.3 }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] bg-black text-white ${
          isOpen ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-xl tracking-widest">
              INFO<span className="text-primary">QUEST</span>
              <sup className="text-primary ml-1">'26</sup>
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
            <Link to="/register" className="btn-spider px-3 py-1 rounded">
              Register Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 pointer-events-auto"
            onClick={() => setIsOpen((p) => !p)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isOpen &&
        createPortal(
          <div
            className="fixed top-20 left-0 right-0 bottom-0 z-[10000]
            bg-background/95 backdrop-blur-md pointer-events-auto"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) =>
                link.id ? (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="mobile-nav-link block w-full text-left py-3 text-lg uppercase"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="mobile-nav-link block py-3 text-lg uppercase"
                  >
                    {link.name}
                  </Link>
                )
              )}

              <Link
                to="/register"
                className="mobile-nav-link btn-spider block text-center mt-4"
              >
                Register Now
              </Link>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navbar;
