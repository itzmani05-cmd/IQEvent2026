import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import heroImage from "@/assets/hero-spiderman.jpg";
import CountDownTheTime from './CountDownTheTime';

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );

      // Buttons animation
      gsap.fromTo(
        ".hero-btn",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        }
      );

      // Event info animation
      gsap.fromTo(
        ".event-info",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.9,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      // Meta info animation
      gsap.fromTo(
        metaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.45, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Spider-Man Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-16 md:pt-20">
        <div
          ref={metaRef}
          className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-widest mb-6 md:mb-8 px-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2">
            <span className="text-foreground font-medium">Feb 20</span>
            <span className="hidden sm:inline">|</span>
            <span>Government College Of Technology</span>
            <span className="hidden sm:inline">-</span>
            <span>Coimbatore</span>
          </div>

          <div className="mt-2 text-primary font-medium">
            Computer Science and Engineering Association Presents
          </div>
        </div>

        <h1
          ref={titleRef}
          className="leading-none flex flex-col sm:flex-row justify-center items-center sm:items-end gap-2 mb-6"
        >
          <span className="text-6xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-wide text-foreground uppercase">
            Info<span className="text-primary">Quest</span>
          </span>

          <sup className="text-primary text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-0 sm:mb-1 drop-shadow-[0_0_12px_rgba(255,0,0,0.7)]">
            '26
          </sup>
        </h1>

        <p
          ref={subtitleRef}
          className="hero-subtitle text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 px-4"
        >
          Swing into action and unleash your potential
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 px-4">
          <Link
            to="/register"
            className="hero-btn btn-spider rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
          >
            Register Now
          </Link>
          <Link
            to="/events"
            className="hero-btn btn-spider-outline rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
          >
            Explore Events
          </Link>
        </div>
        
        <CountDownTheTime/>
        
      </div>
    </section>
  );
};

export default HeroSection;
