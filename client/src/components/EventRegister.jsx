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
    originalPrice: 249,
    offerPrice: 230,
    icon: Code,
    teamSize: "Individual / Team",
    highlights: [
      "All technical events access",
      "Paper presentation included",
      "Certificate for each event",
    ],
    accent: "blue",
    offer: true,
  },
  {
    key: "nontech",
    title: "Non-Tech Pass",
    subtitle: "Fun & Creative Events + Paper Presentation",
    description:
      "Enjoy exciting non-technical events like games, quizzes, creative challenges, and fun activities.",
    originalPrice: 219,
    offerPrice: 200, 
    icon: Gamepad2,
    teamSize: "Individual / Team",
    highlights: [
      "Unlimited Flagship Events",
      "Creative & gaming challenges",
      "Participation certificates",
    ],
    accent: "purple",
    offer: true,
  },
  {
    key: "combo",
    title: "Combo Pass ⭐",
    subtitle: "Tech + Non-Tech (Best Value)",
    description:
      "Get complete access to all technical and non-technical events at the best price.",
    originalPrice: 299,
    offerPrice: 260,
    icon: Users,
    teamSize: "Individual / Team",
    highlights: [
      "All events access",
      "Best value package",
      "Priority participation",
    ],
    badge: "Most Popular",
    accent: "green",
    offer: true,
  },
  {
    key: "ipl",
    title: "IPL Auction",
    subtitle: "Flagship Event",
    description:
      "A simulated cricket auction where participants act as team owners to assemble the strongest squad under a fixed budget.",
    originalPrice: 249,
    offerPrice: 230,
    icon: Trophy,
    teamSize: "1-5 Members",
    highlights: [
      "Live auction format",
      "Team strategy & bidding",
      "Exciting prizes",
    ],
    accent: "gold",
    onSpot: true,
    offer: true,
    eventForm: "https://forms.gle/LbAWgV9AziWYcvmd8"
  },
  {
    key: "treasure",
    title: "Treasure Hunt",
    subtitle: "Adventure & Teamwork",
    description:
      "Navigate the GCT campus solving QR-based clues and checkpoints to find the treasure.",
    originalPrice: 249,
    offerPrice: 230,
    icon: Trophy,
    teamSize: "1-5 Members",
    highlights: [
      "Campus-wide hunt",
      "QR & logic-based clues",
      "High-energy teamwork",
    ],
    accent: "red",
    onSpot: true,
    offer: true,
    eventForm: "https://forms.gle/puuSZZZ7WDTRDknX7"
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

  const handleSelect = (event) => {
     if (event.externalForm) {
      window.open(event.externalForm, "_blank");
      return;
    }
    setSelectedPass(event);
  };

  if(selectedPass){
    return(
      <div className="">
        <Navbar/>
        <Register selectedPass={selectedPass} onBack={()=>setSelectedPass(null)} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto event-pass-grid mb-10">
          {events.map((event, index) => (
            <Card
              key={event.key}
              hoverable
              onClick={() => handleSelect(event)}
              className="
                relative event-pass-card
                rounded-2xl
                bg-card/70 backdrop-blur-xl
                border border-border
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20
                cursor-pointer
              "
              styles={{ body: { padding: "1.75rem" } }}
            >
            <div className="flex flex-col h-full">

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="text-right">
                  <p className="text-[11px] text-muted-foreground">
                    On-Spot ₹{event.originalPrice}
                  </p>
                  <p className="text-3xl font-bold text-primary leading-none">
                    ₹{event.offerPrice}
                  </p>
                  <p className="text-[11px] text-green-400">
                    Save ₹{event.originalPrice - event.offerPrice} online
                  </p>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-1">
                {event.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {event.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground flex-grow mb-4">
                {event.description}
              </p>

              {/* Footer */}
              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {event.teamSize}
                </span>

                {event.eventForm ? (
                  <a
                    href={event.eventForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      px-4 py-2
                      rounded-lg
                      text-sm font-semibold
                      bg-primary text-primary-foreground
                      hover:opacity-90
                      transition
                    "
                  >
                    Register via Google Form
                  </a>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(event);
                    }}
                    className="
                      px-4 py-2
                      rounded-lg
                      text-sm font-semibold
                      bg-primary text-primary-foreground
                      hover:opacity-90
                      transition
                    "
                  >
                    Register
                  </button>
                )}


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
