import { Instagram, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "../assets/logopic.png";

const Footer = () => {
  return (
    <footer className="bg-black text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 pb-6">
        {/* Main grid */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3">

          {/* Brand & Address */}
          <div className="space-y-5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={logo}
                alt="InfoQuest Logo"
                className="w-11 h-11 object-contain"
              />
              <span className="font-display font-bold text-xl sm:text-2xl tracking-[0.15em] text-white uppercase">
                INFO
                <span className="text-primary">QUEST</span>
                <span className="text-primary text-sm font-extrabold ml-2">
                  ’26
                </span>
              </span>
            </div>

            <p className="text-sm leading-relaxed">
              Government College of Technology <br />
              Thadagam Road, Coimbatore – 641013 <br />
              Tamil Nadu
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Department+of+CSE+-+Government+College+of+Technology,+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-4 py-2
                bg-primary text-black font-medium
                rounded-lg cursor-pointer
                hover:bg-primary/90 transition
              "
            >
              <MapPin size={16} />
              Get Directions
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-primary font-semibold mb-5 tracking-wide">
              CONTACT
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-white font-medium">Abinesh</span>
                <br />
                <a href="tel:+918838524257" className="hover:text-primary">
                  +91 88385 24257
                </a>
              </li>

              <li>
                <span className="text-white font-medium">Monika</span>
                <br />
                <a href="tel:+919344868146" className="hover:text-primary">
                  +91 93448 68146
                </a>
              </li>

              <li>
                <span className="text-white font-medium">Email</span>
                <br />
                <a
                  href="mailto:infoquest.gctcsea@gmail.com"
                  className="hover:text-primary break-all"
                >
                  infoquest.gctcsea@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h4 className="text-primary font-semibold mb-5 tracking-wide">
              CONNECT WITH US
            </h4>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/infoquest_gctcsea"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11 h-11 rounded-full
                  bg-zinc-900
                  flex items-center justify-center
                  hover:bg-primary hover:text-black
                  transition
                "
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/cseagct/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11 h-11 rounded-full
                  bg-zinc-900
                  flex items-center justify-center
                  hover:bg-primary hover:text-black
                  transition
                "
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:infoquest.gctcsea@gmail.com"
                className="
                  w-11 h-11 rounded-full
                  bg-zinc-900
                  flex items-center justify-center
                  hover:bg-primary hover:text-black
                  transition
                "
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 mt-10 pt-6 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© 2026 InfoQuest. All rights reserved.</p>
          <p className="opacity-60">
            CSE Association · GCT Coimbatore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
