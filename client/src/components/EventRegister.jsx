import { useEffect, useState } from "react";
import Register from "../pages/Register";
import { Card } from "antd";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Gamepad2, Users, Trophy} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const EventRegister = ({ }) => {
  const [selectedPass, setSelectedPass] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".event-icon", {
        y: -6,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      gsap.fromTo(
        ".event-pass-card",
        { y: 70, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".event-pass-grid",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".event-price",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".event-pass-grid",
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const events = [
  {
    key: "tech",
    title: "Tech Pass",
    subtitle: "Technical Events + Paper Presentation",
    description:
      "Participate in all technical events including coding contests, debugging, quizzes, and technical presentations.",
    price: 249,
    icon: Code,
    teamSize: "Individual / Team",
    highlights: [
      "All technical events access",
      "Paper presentation included",
      "Certificate for each event",
    ],
    accent: "blue",
  },
  {
    key: "nontech",
    title: "Non-Tech Pass",
    subtitle: "Fun & Creative Events",
    description:
      "Enjoy exciting non-technical events like games, quizzes, creative challenges, and fun activities.",
    price: 199,
    icon: Gamepad2,
    teamSize: "Individual / Team",
    highlights: [
      "Unlimited fun events",
      "Creative & gaming challenges",
      "Participation certificates",
    ],
    accent: "purple",
  },
  {
    key: "combo",
    title: "Combo Pass ⭐",
    subtitle: "Tech + Non-Tech (Best Value)",
    description:
      "Get complete access to all technical and non-technical events at the best price.",
    price: 299,
    icon: Users,
    teamSize: "Individual / Team",
    highlights: [
      "All events access",
      "Best value package",
      "Priority participation",
    ],
    badge: "Most Popular",
    accent: "green",
  },
  {
    key: "ipl",
    title: "IPL Auction",
    subtitle: "Flagship Event",
    description:
      "Experience the thrill of a real-time IPL-style auction. Build your dream team with strategy and budget.",
    price: 79,
    icon: Trophy,
    teamSize: "2–5 Members",
    highlights: [
      "Live auction format",
      "Team strategy & bidding",
      "Exciting prizes",
    ],
    accent: "gold",
  },
  {
    key: "treasure",
    title: "Treasure Hunt",
    subtitle: "Adventure & Teamwork",
    description:
      "Solve clues, crack codes, and race across the campus to uncover the hidden treasure.",
    price: 79,
    icon: Trophy,
    teamSize: "2-5 Members",
    highlights: [
      "Campus-wide hunt",
      "QR & logic-based clues",
      "High-energy teamwork",
    ],
    accent: "red",
  },
  ];

  const onEnter = (el) => {
    gsap.to(el, {
      boxShadow: "0 25px 60px rgba(255,0,0,0.35)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onLeave = (el) => {
    gsap.to(el, {
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
    });
  };

  const handleSelect = (key) => {
   selectedPass(event);
  };

  if(selectedPass){
    return(
      <div className="">
        <Navbar/>
        <Register selectedPass={selectedPass} onBack={()=>setSelectedPass(null)} />
        <Footer/>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary relative overflow-hidden">
      <Navbar/>
      <div className="spider-web-bg absolute inset-0 opacity-10" />

      <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-8 md:py-8 relative z-10">
        <div className="text-center mb-4 md:mb-8">
          <h1 className="section-title text-foreground mb-2">
            Select your <span className="text-primary">Pass</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Choose the event package that best matches your interests and skills.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto event-pass-grid">
          {events.map((event, index) => (
            <Card
              key={event.key}
              hoverable
              onClick={() => handleSelect(event)}
              className="event-pass-card border-2 border-border rounded-2xl bg-card/60 backdrop-blur-xl
                         hover:border-primary hover:bg-primary/5 hover:shadow-2xl hover:shadow-primary/30
                         transition-all duration-300 cursor-pointer group
                         transform hover:-translate-y-3 hover:scale-[1.03]"
              styles={{ body: { padding: "1.5rem" } }}
              onMouseEnter={(e) => onEnter(e.currentTarget)}
              onMouseLeave={(e) => onLeave(e.currentTarget)}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="event-icon p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <event.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="event-price text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                      ₹{event.price}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {event.teamSize}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {event.description}
                </p>

                <div className="flex items-center pt-4 border-t border-border/50">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    Register Now
                  </span>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div> 

       
      </div>
      <Footer/>
    </div>
  );
};

export default EventRegister;
