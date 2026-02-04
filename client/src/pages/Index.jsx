import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventCard from '@/components/EventCard';
import EventRegister from '@/components/EventRegister';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import {Button} from 'antd';
import SpiderWebBackground from '@/components/SpiderWebBackground';
import { ArrowRight, Code, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const featuredEvents = [
  {
    title: 'Web Slinger Hackathon',
    description: 'Build innovative solutions in 24 hours. Show your coding prowess and swing into action!',
    category: 'Technical',
    duration: '24 Hours',
    teamSize: '2-4',
    prize: '₹15,000',
  },
  {
    title: 'Spider Sense Quiz',
    description: 'Test your technical knowledge across multiple domains. Trust your spider sense!',
    category: 'Technical',
    duration: '2 Hours',
    teamSize: 'Individual',
    prize: '₹5,000',
  },
  {
    title: 'Venom Gaming',
    description: 'Compete in epic gaming battles. Valorant, BGMI, and more await you!',
    category: 'Non-Technical',
    duration: '3 Hours',
    teamSize: '5',
    prize: '₹10,000',
  },
];


const Index = () => {
  const registerRef=useRef(null);
  useEffect(() => {
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <SpiderWebBackground />
      <Navbar />
      <HeroSection />


      <section className="py-24 bg-secondary/30 relative spider-web-corner">
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
      
      <div ref={registerRef}>
        <EventRegister/>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
