import { Link } from "react-router-dom";
import { Instagram, Linkedin,Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "../assets/logopic.png";

const Footer = () => {
  return (
    <footer className="bg-black text-muted-foreground">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center">
              <img
                src={logo}
                alt="InfoQuest Logo"
                className="w-11 h-11 object-contain"
              />
              <h2 className="text-2xl font-semibold text-white">
                INFO<span className="text-primary">QUEST</span>'26
              </h2>
            </div>

            <p className="text-sm leading-relaxed">
              Government College of Technology <br />
              Thadagam Road, Coimbatore - 641013 <br />
              Tamil Nadu
            </p>

            <a
              href="https://www.google.com/maps/place/Government+College+of+Technology,+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              <MapPin size={16} />
              Get Directions <ArrowRight size={14} />
            </a>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-6 tracking-wide">
              CONTACT
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-white font-medium">Abinesh:</span>
                <br /> +91 88385 24257
              </li>
              <li>
                <span className="text-white font-medium">Monika:</span>
                <br /> +91 93448 68146
              </li>
              <li>
                <span className="text-white font-medium">Email:</span>
                <br /> infoquest.gctcsea@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-6 tracking-wide">
              QUICK LINKS
            </h4>

            <ul className="space-y-4 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Register", path: "/register" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-6 tracking-wide">
              CONNECT WITH US
            </h4>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/infoquest_gctcsea?igsh=MTJmM2JiOXhuMW4yYg=="
                target="_blank"
                className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center
                           hover:bg-primary hover:text-black transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/cseagct/"
                target="_blank"
                className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center
                           hover:bg-primary hover:text-black transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="infoquest.gctcsea@gmail.com"
                target="_blank"
                className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center
                           hover:bg-primary hover:text-black transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-6 text-xs flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© 2026 InfoQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
