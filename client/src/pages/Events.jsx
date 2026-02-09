import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    title: "Presentrix",
    description:
      "Presentrix is a technical presentation contest that provides a platform for participants to showcase their knowledge, ideas, and innovations in Computer Science and emerging technologies. The event evaluates technical depth, creativity, and communication skills, challenging participants to present their concepts clearly and confidently.",
    category: "Technical",
    Time: "10:15 AM – 01:00 PM",
    venue: "CSE Seminar Hall, Smart Class Room (ME I Year)",
    teamSize: "Individual or Team of Maximum 3 members",
    prize: "1500",
    preRequistes: [
      "Presentation slides prepared in advance",
      "Topic finalized before submission",
      "Participants should have a team name and submit the ppt with their team name",
      "For individual participation, submit the ppt with their name or any alias if they want"
    ],
    rules: [
      "Participation can be individual or a team of maximum 3 members",
      "Each team will get 5 minutes for presentation + 3 minutes for Q&A",
      "PPT/PPTX format only (PDF or other formats will not be accepted)",
      "The presentation must contain 8–10 slides only",
      "Content must be original. Plagiarism or copied material will lead to disqualification",
      "Topics must be related to Computer Science, emerging technologies, or current industry trends",
      "Participants are encouraged to select innovative or real-world problem-solving topics",
      "Slides should be clear, concise, and visually focused (avoid excessive text)",
      "Evaluation is based on innovation, impact, presentation skills, and Q&A handling",
      "Presentations must be submitted via email before 6:00 PM on 15th February",
      "Late submissions will not be accepted",
      "The decision of the jury is final and binding"
    ],
    submission: "Send your PPT to infoquestpresentrix@gmail.com",
    contact: [
      { name: "Jawahar Srinath", number: "7418893071" },
      { name: "Srinithija S", number: "6381550507" }
    ]
  },

  {
    title: "Logic Rush",
    description:
      "From the given program code, the participant must mentally execute the code line by line and predict the exact output.",
    category: "Technical",
    Time: "10:15 AM - 01:00 PM",
    venue: "Computer Lab II",
    teamSize: "Individual",
    prize: "1300",
    preRequistes: ["Basic programming knowledge"],
    rules: [
      "Participants must explain the change in input variables line by line with clarity",
      "Judges’ decisions are final",
      "This will be a pen and paper round",
      "Evaluation will be based on the quality of explanation and correct deduction of input-to-output flow"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Abinesh", number: "8838524257" },
      { name: "Sriram M", number: "9344795474" }
    ]
  },

  {
    title: "Code Quest",
    description:
      "Step into Code Quest, a high-energy Hacker Rank coding contest that puts your logic, speed, and accuracy to the test. Solve challenging programming problems within a limited time and earn points for every correct solution. Outperform your peers, climb the leaderboard, and prove your coding prowess under pressure.",
    category: "Technical",
    Time: "11:00 AM - 11:45 AM",
    venue: "3rd Year CSE (Lab required)",
    teamSize: "Individual",
    prize: "1300",
    preRequistes: [
      "The contest will be conducted on the HackerRank platform",
      "All participants must have an active HackerRank account before the contest begins",
      "Participants are advised to bring their personal laptops"
    ],
    rules: [
      "Participation is strictly solo",
      "Challenges will be hosted as a HackerRank contest",
      "Participants may code in any programming language supported by HackerRank",
      "Problems will be categorized into Easy, Medium, and Hard levels",
      "The participant with the highest total score will be declared the winner",
      "The decision of the event organizers and judges will be final",
      "Any form of malpractice leads to disqualification"
    ],
    submission: "HackerRank contest",
    contact: [
      { name: "Bala Murugan", number: "6374396372" },
      { name: "Sakthi Priya", number: "8098396184" }
    ]
  },

  {
    title: "Trace and Terminate",
    description:
      "Trace and Terminate is an individual technical debugging event where participants are required to identify and fix faulty code within a limited time. The code may contain syntax errors, logical flaws, or runtime issues. Participants are evaluated based on accuracy and completion speed.",
    category: "Technical",
    Time: "11:45 AM – 01:00 PM",
    venue: "ME CSE II Year",
    teamSize: "Individual (Solo Participation)",
    prize: "1300",
    preRequistes: [
      "Strong debugging and problem-solving skills",
      "Familiarity with basic programming languages",
      "Knowledge of at least one programming language (e.g., C, C++, Java, Python)",
      "Bring your own laptop"
    ],
    rules: [
      "Individual participation",
      "Single round event",
      "Debugging must be completed within the allotted time",
      "Only offline IDEs specified by the organizers are permitted",
      "Internet usage is strictly prohibited",
      "Any form of cheating will lead to immediate disqualification",
      "Judges’ decision is final and binding"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Srinivass", number: "8072157488" },
      { name: "Elayaraji M", number: "9489475019" }
    ]
  },

  {
    title: "Reverse Engineering (Inferno)",
    description:
      "Reverse Engineering is a logic-based challenge where participants analyze given input–output pairs and identify the hidden logic behind them. Participants must express their solution using pseudocode only. No executable programming code is required. The event evaluates analytical thinking, pattern recognition, and algorithmic reasoning.",
    category: "Technical",
    Time: "01:30 PM – 03:00 PM",
    venue: "ME CSE II Year",
    teamSize: "Individual",
    prize: "1300",
    preRequistes: ["Logical thinking and pseudocode knowledge"],
    rules: [
      "Paper and pen based event",
      "Topics include loop-based problems, string manipulation logic, and logical problems",
      "Evaluation based on correctness, efficiency, clarity of pseudocode, and time taken",
      "In case of tie, earlier submission time will be considered",
      "Use of mobile phones or electronic gadgets is strictly prohibited",
      "Writing executable code instead of pseudocode is not allowed",
      "Paper and pen will be provided",
      "Any violation leads to disqualification",
      "Judges’ decision is final and binding"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Dhavamani", number: "9787298534" },
      { name: "Bhavadharani", number: "8675564851" }
    ]
  },

  {
    title: "Tech Quiz",
    description:
      "A high-impact technology quiz exploring cutting-edge innovations, emerging digital trends, and advanced computing concepts.",
    category: "Technical",
    Time: "10:15 AM – 11:00 AM",
    venue: "Main Auditorium",
    teamSize: "Individual",
    prize: "1300",
    preRequistes: ["General technical knowledge"],
    rules: [
      "Individual participation",
      "Mobile phones are strictly prohibited",
      "Additional rules will be announced on the spot"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Aarthi", number: "9688632459" },
      { name: "S Vaitheeswaran", number: "9791023326" }
    ]
  },

  {
    title: "AI Web Smith (Full Assistive AI Coding)",
    description:
      "Participants are allowed to use AI tools and LLMs to develop a web application based on a given problem statement. Creativity and understanding are key.",
    category: "Technical",
    Time: "02:30 PM – 03:15 PM",
    venue: "3rd Year CSE",
    teamSize: "Individual",
    prize: "1300",
    preRequistes: [
      "Laptop with required tools pre-installed",
      "Basic web development knowledge"
    ],
    rules: [
      "Prior templates are not allowed",
      "Participants must explain their code clearly",
      "Judges’ decision is final",
      "Additional instructions will be provided during the event"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Abinesh", number: "8838524257" },
      { name: "Fathima Sanaa", number: "9342576916" }
    ]
  },

  {
    title: "Apti Byte (General Aptitude)",
    description:
      "Apti Byte is a written examination conducted in pen-and-paper mode to evaluate logical reasoning, quantitative aptitude, verbal ability, and analytical skills. The structure aligns with aptitude assessments used in competitive examinations and placement processes.",
    category: "Non-Technical",
    Time: "11:00 AM – 11:45 AM",
    venue: "Main Auditorium",
    teamSize: "Individual",
    prize: "1200",
    preRequistes: ["Basic aptitude preparation"],
    rules: [
      "Written examination",
      "Sections include 1-mark, 3-mark, and 5-mark questions",
      "Evaluator’s decision is final"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Muthu Pavithra", number: "9043205113" },
      { name: "Maharaja", number: "9585611573" }
    ]
  },

  {
    title: "Rhythm Reckon",
    description:
      "Rhythm Reckon is a music-based event designed to assess participants’ sense of rhythm, timing, and listening skills. The event consists of audio-based rounds where participants identify beats, rhythm patterns, and variations.",
    category: "Non-Technical",
    Time: "10:15 AM – 11:45 AM",
    venue: "2nd Year CSE",
    teamSize: "Team of Maximum 3 members",
    prize: "1500",
    preRequistes: ["Interest in music and rhythm"],
    rules: [
      "Three rounds",
      "Accuracy and response time matter"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Gokula Lakshmi", number: "6380237525" },
      { name: "Jeevanraj", number: "7094011675" }
    ]
  },

  {
    title: "Connections",
    description:
      "Connections is a logic-oriented event in which participants identify hidden relationships between given words, images, numbers, or concepts. The event emphasizes general knowledge, logical reasoning, and pattern recognition.",
    category: "Non-Technical",
    Time: "02:30 PM – 03:15 PM",
    venue: "2nd Year CSE",
    teamSize: "Individual / Team of Maximum 3 members",
    prize: "1300",
    preRequistes: ["Logical thinking skills"],
    rules: [
      "Three rounds",
      "Time-based evaluation"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Jeevanandhini", number: "9843286532" },
      { name: "Jenish Paul", number: "9751802705" }
    ]
  },

  {
    title: "Meme Creation",
    description:
      "Meme Creation is a creative event where participants design memes based on a given theme or topic using their own resources. The event encourages originality and creativity while maintaining appropriate and respectful content standards.",
    category: "Non-Technical",
    Time: "10:15 AM – 01:00 PM",
    venue: "Computer Lab IV",
    teamSize: "Individual",
    prize: "1200",
    preRequistes: ["Personal device and creativity"],
    rules: [
      "Creativity, relevance to theme, originality, and presentation matter",
      "Inappropriate or offensive content will result in disqualification",
      "Offensive content leads to disqualification"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Kiruthiga", number: "9442895779" },
      { name: "Vinoth Kumar", number: "6382913364" }
    ]
  },

  {
    title: "Minute to Win",
    description:
      "Minute to Win is a time-bound activity-based event where participants must complete simple yet challenging tasks within one minute. The event evaluates presence of mind, speed, coordination, and the ability to perform under time pressure.",
    category: "Non-Technical",
    Time: "10:15 AM – 01:00 PM",
    venue: "Open Space",
    teamSize: "Individual",
    prize: "1300",
    preRequistes: ["Presence of mind, speed, and coordination"],
    sampleActivities: [
      "Memory Grid – observe a 7×7 or (n×n) grid for 10 seconds and recreate it",
      "Bottle Flip Combo – land maximum flips in 60 seconds",
      "Ping-Pong Bounce – bounce ball into cups"
    ],
    rules: [
      "Tasks must be completed within 60 seconds",
      "Judges’ decision is final"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Aasmi K", number: "8122192805" },
      { name: "Geetharani C", number: "7299965200" }
    ]
  },

  {
    title: "IPL Auction",
    description:
      "A simulated cricket auction where participants act as team owners to assemble the strongest squad under a fixed budget. Teams are evaluated on squad balance, strategy, and decision-making.",
    category: "Flagship Event",
    Time: "11:30 AM – 01:00 PM",
    venue: "Main Auditorium",
    teamSize: "Team of 2–5 members",
    prize: "1500",
    preRequistes: ["Basic cricket knowledge and strategic thinking"],
    guidelines: [
      "Each team receives a virtual purse",
      "Teams compete in live bidding wars",
      "Each team must assemble a squad of 15",
      "Teams must submit their playing 11",
      "Evaluation based on squad composition and balance",
      "Panel’s decision is final"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Kaviya", number: "8148486169" },
      { name: "Sanjeev Krishna", number: "8838845340" }
    ]
  },

  {
    title: "Treasure Hunt",
    description:
      "Get your team and navigate throughout the GCT campus looking out for QR codes and checkpoints to find the treasure.",
    category: "Flagship Event",
    Time: "01:30 PM - 02:30 PM",
    venue: "Open Space",
    teamSize: "Team of 2-5 members",
    prize: "1500",
    guidelines: [
      "If team count exceeds 8, a preliminary round called Detective Quiz will be conducted",
      "Detective Quiz includes objective questions on crime, logic, observation, and detective reasoning"
    ],
    rules: [
      "Participants must follow the sequence of clues",
      "Skipping clues is not allowed",
      "Each team must stay together",
      "Clues should not be damaged, removed, or shared",
      "Any form of cheating or misbehavior leads to disqualification"
    ],
    submission: "On-spot participation",
    contact: [
      { name: "Sankar Narayanan", number: "9363048687" },
      { name: "Indhuja", number: "8870286793" }
    ]
  }
]

const categories = ["All", "Technical", "Non-Technical", "Flagship Event"];

const Events = () => {
  const RULEBOOK="https://drive.google.com/file/d/1MyqMZ1b2LrbZZq8jsdR_CzgOOrBYCw4v/view?usp=drivesdk"
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".event-card-animate",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: "power2.out",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".event-grid",
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
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
              Explore 12+ exciting events across Technical and Non-Technical
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 event-grid">
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
          <div className="relative max-w-2xl w-full max-h-[75vh] overflow-y-auto card-spider p-4 md:p-8 mt-10">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                  {selectedEvent.category}
                </span>
                
              </div>

              <h5 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {selectedEvent.title}
              </h5>

              <p className="text-muted-foreground leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Time
                  </p>
                  <p className="font-semibold text-foreground">
                    {selectedEvent.Time || "TBD"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Team Size
                  </p>
                  <p className="font-semibold text-foreground">
                    {selectedEvent.teamSize || "Individual"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Prize Pool
                  </p>
                  <p className="font-semibold text-foreground">
                    {selectedEvent.prize}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Venue
                  </p>
                  <p className="font-semibold text-foreground">
                    {selectedEvent.venue}
                  </p>
                </div>
              </div>
            </div>

            {selectedEvent.preRequistes && (
              <div className="mb-6 p-5 bg-blue-500/5 border-l-4 border-blue-500 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-400 mb-2 text-sm uppercase tracking-wider">
                      Prerequisites
                    </h3>
                    <ul className="space-y-2">
                      {Array.isArray(selectedEvent.preRequistes) ? (
                        selectedEvent.preRequistes.map((item, index) => (
                          <li
                            key={index}
                            className="text-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-foreground">
                          {selectedEvent.preRequistes}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {selectedEvent.rules && (
              <div className="mb-8 p-5 bg-purple-500/5 border-l-4 border-purple-500 rounded-xl">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-400 mb-2 text-sm uppercase tracking-wider">
                      Rules
                    </h3>
                    <ul className="space-y-2">
                      {Array.isArray(selectedEvent.rules) ? (
                        selectedEvent.rules.map((item, index) => (
                          <li
                            key={index}
                            className="text-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-foreground">
                          {selectedEvent.rules}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {selectedEvent.submission && (
              <div className="mb-6 p-5 bg-green-500/5 border-l-4 border-green-500 rounded-xl">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-400 mb-2 text-sm uppercase tracking-wider">
                      Submission
                    </h3>
                    <p className="text-foreground">
                      {selectedEvent.submission}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {selectedEvent.contact && (
              <div className="mb-8 p-5 bg-orange-500/5 border-l-4 border-orange-500 rounded-xl">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-400 mb-2 text-sm uppercase tracking-wider">
                      Contact
                    </h3>
                    <ul className="space-y-2">
                      {selectedEvent.contact.map((person, index) => (
                        <li key={index} className="text-foreground">
                          <span className="font-semibold">{person.name}</span> - {" "}
                          <a
                            href={`tel:${person.number}`}
                            className="text-primary hover:underline"
                          >
                            {person.number}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
           <div className="mb-6 p-5 bg-cyan-500/5 border-l-4 border-cyan-500 rounded-xl">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-cyan-400 mb-2 text-sm uppercase tracking-wider">
                    Rule Book
                  </h3>
                  <a
                    href={RULEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    View Rule Book →
                  </a>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <button
                onClick={closeModal}
                className="px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                Close
              </button>
              {selectedEvent.category==="Flagship Event"?(
                <button
                  className="btn-spider cursor-not-allowed rounded-lg px-6 py-3 flex-1"
                >
                  Register On-Spot
                </button>
              ):(
                <button
                  onClick={() => {
                    closeModal();
                    navigate("/register");
                  }}
                  className="btn-spider rounded-lg px-6 py-3 flex-1"
                >
                  Register for Event
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
