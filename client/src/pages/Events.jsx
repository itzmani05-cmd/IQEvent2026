import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  X,
  Clock,
  Users,
  Trophy,
  MapPin,
  AlertCircle,
  FileText,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpiderWebBackground from "@/components/SpiderWebBackground";
import EventCard from "@/components/EventCard";

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  {
    title: "Presentation(Presentix)",
    description:
      "Rhythm Reckon is a music-based event designed to assess participants’ sense of rhythm, timing, and listening skills. The event consists of audio-based rounds where participants are required to identify beats, rhythm patterns, and variations within a stipulated time.",
    category: "Technical",
    Time: "10:15AM - 01:00PM",
    teamSize: "2-4",
    prize: "₹1,500",
    venue: "Seminar Hall(GND & 1st Floor)",
    preRequistes: "",
    rules: "",
  },
  {
    title: "Web Slinger Hackathon",
    description:
      "Build innovative solutions in 24 hours. Show your coding prowess and swing into action!",
    category: "Technical",
    Time: "09:00AM - 09:00AM (Next Day)",
    teamSize: "2-4",
    prize: "₹15,000",
    venue: "Main Auditorium",
    preRequistes: "Laptop with development environment",
    rules: "Maximum 4 team members, internet access provided",
  },
  {
    title: "Spider Sense Quiz",
    description:
      "Test your technical knowledge across multiple domains. Trust your spider sense!",
    category: "Technical",
    Time: "10:15AM - 01:00PM",
    teamSize: "Individual",
    prize: "₹5,000",
    venue: "Seminar Hall(GND Floor)",
    preRequistes: "Basic technical knowledge",
    rules: "No external devices allowed, 30 questions in 90 minutes",
  },
  {
    title: "Code Combat",
    description:
      "Competitive programming at its finest. Solve complex problems under time pressure.",
    category: "Technical",
    Time: "02:00PM - 05:00PM",
    teamSize: "Individual",
    prize: "₹8,000",
    venue: "Computer Lab 1",
    preRequistes: "Programming knowledge in any language",
    rules: "5 problems to solve in 3 hours, plagiarism strictly prohibited",
  },
  {
    title: "Web Dev Showdown",
    description:
      "Create stunning websites from scratch. Showcase your frontend and backend skills!",
    category: "Technical",
    Time: "10:00AM - 02:00PM",
    teamSize: "2",
    prize: "₹10,000",
    venue: "Computer Lab 2 & 3",
    preRequistes: "HTML, CSS, JavaScript knowledge",
    rules:
      "Build a complete website in 4 hours, judged on design and functionality",
  },
  {
    title: "Bug Hunt",
    description:
      "Find and fix bugs in the given codebase. The faster you debug, the higher you score!",
    category: "Technical",
    Time: "03:00PM - 05:00PM",
    teamSize: "Individual",
    prize: "₹4,000",
    venue: "Computer Lab 4",
    preRequistes: "Debugging experience",
    rules: "10 bugs to find and fix, time-based scoring",
  },
  {
    title: "Venom Gaming - Valorant",
    description:
      "Compete in epic 5v5 battles. Show your tactical prowess and aim for glory!",
    category: "Non-Technical",
    Time: "06:00PM - 10:00PM",
    teamSize: "5",
    prize: "₹12,000",
    venue: "Gaming Arena",
    preRequistes: "Valorant account, good internet connection",
    rules: "Tournament bracket format, best of 3 matches",
  },
  {
    title: "Venom Gaming - BGMI",
    description: "Battle royale showdown. Last team standing wins it all!",
    category: "Non-Technical",
    Time: "11:00AM - 02:00PM",
    teamSize: "4",
    prize: "₹8,000",
    venue: "Gaming Room",
    preRequistes: "BGMI account, mobile device",
    rules: "Squad matches, 4 teams per match",
  },
  {
    title: "Chess Mastermind",
    description:
      "Classic chess tournament. Strategy and patience will lead you to victory.",
    category: "Non-Technical",
    Time: "09:00AM - 02:00PM",
    teamSize: "Individual",
    prize: "₹3,000",
    venue: "Seminar Hall(1st Floor)",
    preRequistes: "Chess knowledge",
    rules: "Standard tournament rules, time control 15+10",
  },
  {
    title: "Tech Talk",
    description:
      "Present your ideas on emerging technologies. Best paper wins exciting prizes!",
    category: "Non-Technical",
    Time: "11:00AM - 01:00PM",
    teamSize: "2",
    prize: "₹5,000",
    venue: "Conference Hall",
    preRequistes: "Research paper or presentation slides",
    rules: "10-minute presentation, 5-minute Q&A",
  },
  {
    title: "Debate Arena",
    description:
      "Argue your stance on tech topics. Convince the judges with your logic!",
    category: "Non-Technical",
    Time: "02:30PM - 04:30PM",
    teamSize: "2",
    prize: "₹4,000",
    venue: "Discussion Room",
    preRequistes: "Research on given topics",
    rules: "British Parliamentary format, 2 teams for and 2 teams against",
  },
  {
    title: "Treasure Hunt",
    description:
      "Solve riddles and find clues across the campus. Adventure awaits!",
    category: "Non-Technical",
    Time: "09:30AM - 12:30PM",
    teamSize: "4",
    prize: "₹6,000",
    venue: "Across Campus",
    preRequistes: "Comfortable shoes, team coordination",
    rules: "Teams follow clues to find locations, fastest team wins",
  },
  {
    title: "Spider Sense Quiz",
    description:
      "Test your technical knowledge across multiple domains. Trust your spider sense and answer quickly!",
    category: "Technical",
    duration: "2 Hours",
    teamSize: "Individual",
    prize: "₹5,000",
  },
  {
    title: "Code Combat",
    description:
      "Competitive programming at its finest. Solve complex problems under time pressure.",
    category: "Technical",
    duration: "3 Hours",
    teamSize: "Individual",
    prize: "₹8,000",
  },
  {
    title: "Web Dev Showdown",
    description:
      "Create stunning websites from scratch. Showcase your frontend and backend skills!",
    category: "Technical",
    duration: "4 Hours",
    teamSize: "2",
    prize: "₹10,000",
  },
  {
    title: "Bug Hunt",
    description:
      "Find and fix bugs in the given codebase. The faster you debug, the higher you score!",
    category: "Technical",
    duration: "2 Hours",
    teamSize: "Individual",
    prize: "₹4,000",
  },
  {
    title: "Venom Gaming - Valorant",
    description:
      "Compete in epic 5v5 battles. Show your tactical prowess and aim for glory!",
    category: "Gaming",
    duration: "4 Hours",
    teamSize: "5",
    prize: "₹12,000",
  },
  {
    title: "Venom Gaming - BGMI",
    description: "Battle royale showdown. Last team standing wins it all!",
    category: "Gaming",
    duration: "3 Hours",
    teamSize: "4",
    prize: "₹8,000",
  },
  {
    title: "Chess Mastermind",
    description:
      "Classic chess tournament. Strategy and patience will lead you to victory.",
    category: "Gaming",
    duration: "5 Hours",
    teamSize: "Individual",
    prize: "₹3,000",
  },
  {
    title: "Tech Talk",
    description:
      "Present your ideas on emerging technologies. Best paper wins exciting prizes!",
    category: "Non-Technical",
    duration: "1 Hour",
    teamSize: "2",
    prize: "₹5,000",
  },
  {
    title: "Debate Arena",
    description:
      "Argue your stance on tech topics. Convince the judges with your logic!",
    category: "Non-Technical",
    duration: "2 Hours",
    teamSize: "2",
    prize: "₹4,000",
  },
  {
    title: "Treasure Hunt",
    description:
      "Solve riddles and find clues across the campus. Adventure awaits!",
    category: "Non-Technical",
    duration: "3 Hours",
    teamSize: "4",
    prize: "₹6,000",
  },
  {
    title: "AI/ML Workshop",
    description:
      "Hands-on workshop on building AI models. Learn from industry experts!",
    category: "Workshop",
    duration: "4 Hours",
    teamSize: "Individual",
    prize: "Certificate",
  },
  {
    title: "Blockchain Basics",
    description:
      "Introduction to blockchain technology and smart contracts development.",
    category: "Workshop",
    duration: "3 Hours",
    teamSize: "Individual",
    prize: "Certificate",
  },
  {
    title: "Cloud Computing",
    description:
      "Deploy your first application on AWS. Get certified by cloud experts!",
    category: "Workshop",
    duration: "4 Hours",
    teamSize: "Individual",
    prize: "Certificate",
  },
];

const categories = ["All", "Technical", "Non-Technical"];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".event-card-animate",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, [selectedCategory]);

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    return matchesCategory;
  });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-background relative">
      <SpiderWebBackground />
      <Navbar />

      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-foreground text-6xl md:text-8xl mb-4">
              Our <span className="text-primary">Events</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore 12+ exciting events across technical and non-technical
              categories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sticky top-20 z-30 bg-background/90 backdrop-blur-md border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-spider"
                      : "bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {filteredEvents.length} event
                {filteredEvents.length !== 1 ? "s" : ""}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <div
                    key={index}
                    className="event-card-animate cursor-pointer"
                    onClick={() => handleEventClick(event)}
                  >
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🕸️</div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                No Events Found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto card-spider p-4 md:p-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="mb-6">
              <h5 className="section-title text-foreground mb-2">
                {selectedEvent.title}
              </h5>
              <p className="text-muted-foreground">
                {selectedEvent.description}
              </p>
            </div>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">
                    {selectedEvent.Time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="font-semibold text-foreground">
                    {selectedEvent.teamSize}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <Trophy className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Prize</p>
                  <p className="font-semibold text-foreground">
                    {selectedEvent.prize}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Venue</p>
                  <p className="font-semibold text-foreground">
                    {selectedEvent.venue}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">
                    Prerequisites
                  </h3>
                  <p className="text-foreground">
                    {selectedEvent.preRequistes ||
                      "No specific prerequisites required"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-purple-400 mb-2">Rules</h3>
                  <p className="text-foreground">
                    {selectedEvent.rules || "Standard event rules apply"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={() => {
                  closeModal();
                  window.location.href = "/register";
                }}
                className="btn-spider rounded-lg px-6 py-3 w-full sm:w-auto"
              >
                Register for Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
