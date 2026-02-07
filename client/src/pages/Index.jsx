import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

import SpiderWebBackground from "@/components/SpiderWebBackground";
import { ArrowRight} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  autoSleep: 60,
});

const featuredEvents = [
  {
    title: "Web Slinger Hackathon",
    description:
      "Build innovative solutions in 24 hours. Show your coding prowess and swing into action!",
    category: "Technical",
    duration: "24 Hours",
    teamSize: "2-4",
    prize: "₹15,000",
  },
  {
    title: "Spider Sense Quiz",
    description:
      "Test your technical knowledge across multiple domains. Trust your spider sense!",
    category: "Technical",
    duration: "2 Hours",
    teamSize: "Individual",
    prize: "₹5,000",
  },
  {
    title: "Venom Gaming",
    description:
      "Compete in epic gaming battles. Valorant, BGMI, and more await you!",
    category: "Non-Technical",
    duration: "3 Hours",
    teamSize: "5",
    prize: "₹10,000",
  },
];

const Index = () => {
  const registerRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const elements = gsap.utils.toArray(".animate-on-scroll");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <SpiderWebBackground />
      <Navbar />
      <HeroSection />

      <section
        id="about"
        className="py-20 bg-secondary/20 relative"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="animate-on-scroll bg-background/70 backdrop-blur-xl border border-border rounded-2xl shadow-card p-8 md:p-12 hover:-translate-y-2 transition-transform duration-300">
              
              <h2 className="section-title text-center text-foreground mb-6">
                About <span className="text-primary">INFOQUEST</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed text-center mb-10">
                <span className="font-semibold text-foreground">
                  INFOQUEST (IQ)
                </span>{" "}
                is a National-Level Technical Symposium organized by the Department of
                Computer Science and Engineering, where sharp minds converge to decode
                complex challenges, push intellectual and technical boundaries, and
                demonstrate their expertise through a dynamic lineup of high-impact
                technical and non-technical events.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 py-14 bg-secondary/30 relative spider-web-corner">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
            <div className="animate-on-scroll">
              <h2 className="section-title text-foreground mb-2">
                Featured <span className="text-primary">Events</span>
              </h2>
              <p className="text-muted-foreground">
                Don't miss out on these headliner events!
              </p>
            </div>
            <Link
              to="/events"
              className="animate-on-scroll group flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all"
            >
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div key={index} className="animate-on-scroll">
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center bg- py-12 mb-4 md:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-primary to-accent mb-6 mx-auto glow-red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h1 className="section-title text-foreground mb-2">
            Ready to <span className="text-primary">Register?</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Choose the event package that best matches your interests and skills.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="btn-spider px-10 py-4 rounded-xl text-lg font-semibold
             hover:scale-105 transition-transform duration-300">
            Click here!
          </button>
        </div>
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Index;
