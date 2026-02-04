import { Link } from "react-router-dom";

const Footer = () => {
  // const socialLinks = [
  //   { icon: Instagram, href: '#', label: 'Instagram' },
  //   { icon: Linkedin, href: '#', label: 'LinkedIn' },
  //   { icon: Github, href: '#', label: 'GitHub' },
  // ];
  return (
    <footer className="relative bg-secondary/30 border-t border-border">
      <div className="absolute top-0 left-0 w-40 h-40 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full -translate-x-1/3 -translate-y-1/3">
          <g stroke="hsl(var(--spider-red))" strokeWidth="1" fill="none">
            <path d="M100 100 L100 0" />
            <path d="M100 100 L200 0" />
            <path d="M100 100 L200 100" />
            <path d="M100 100 L200 200" />
            <circle cx="100" cy="100" r="30" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="90" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-5">
        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <svg className="w-9 h-9 text-primary" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M85 15 L15 85"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
              </svg>

              <span className="font-display text-2xl tracking-wide text-foreground">
                INFO<span className="text-primary">QUEST</span>'26
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Join us for an epic tech fest experience. Compete, learn, and connect
              with the brightest minds in technology.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="flex items-center gap-5 ">
              {["Home", "Events", "Register", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="contact-card card-spider p-6">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div> */}
        </div> 
        

        <div className=" mt-5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 InfoQuest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
