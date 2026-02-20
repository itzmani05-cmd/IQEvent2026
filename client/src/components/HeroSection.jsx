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
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );

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
          className="
            mb-6 sm:mb-8
            text-center
            uppercase
            tracking-[0.35em]"
        >
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm md:text-base">
            <span className="text-white font-semibold">
              Feb 20
            </span>

            <span className="w-1 h-1 rounded-full bg-white/40" />

            <span className="text-white/70">
              GCT, Coimbatore
            </span>
          </div>

          <div className="mt-3 text-primary text-xs sm:text-sm font-semibold tracking-[0.4em]">
            CSEA PRESENTS
          </div>
        </div>

        <h1
          ref={titleRef}
          className="
            mb-6
            font-display font-bold uppercase tracking-wide
            text-center whitespace-nowrap
            text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
            leading-none
          "
        >
          <span className="text-foreground">
            Info<span className="text-primary">Quest</span>
          </span>
          <span
            className="
              text-primary
              ml-2
              text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              align-top
              drop-shadow-[0_0_12px_rgba(255,0,0,0.7)]
            "
          >
            ’26
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="
            hero-subtitle
            text-muted-foreground
            text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl
            leading-relaxed
            max-w-md sm:max-w-xl md:max-w-2xl
            mx-auto
            mb-7 sm:mb-8 md:mb-10
            px-4
          "
        >
          Swing into action and unleash your potential
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-14 px-4">
          <p
            // to="/register"
            className="
              hero-btn btn-spider
              w-full sm:w-auto
              rounded-xl
              px-6 py-3.5 sm:px-8 sm:py-4
              text-sm sm:text-base
              text-center
              cursor-not-allowed
            "
          >
            Register Now
          </p>

          <Link
            to="/events"
            className="
              hero-btn btn-spider-outline
              w-full sm:w-auto
              rounded-xl
              px-6 py-3.5 sm:px-8 sm:py-4
              text-sm sm:text-base
              text-center
            "
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
