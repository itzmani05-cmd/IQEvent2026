import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import heroImage from '@/assets/hero-spiderman.jpg';

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );

      // Buttons animation
      gsap.fromTo(
        '.hero-btn',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.6, stagger: 0.15, ease: 'power2.out' }
      );

      // Event info animation
      gsap.fromTo(
        '.event-info',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.9, stagger: 0.1, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-25"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 ">
        <img
          src={heroImage}
          alt="Spider-Man Hero"
          className="w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        {/* Event Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Department of CSE presents
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className=" leading-none flex justify-center items-end gap-2 mb-6"
        >
          <span className='text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-wide text-foreground uppercase'>
            Info<span className="text-primary">Quest</span>
          </span>

          <span className="text-primary
              text-xl
              sm:text-2xl
              md:text-3xl
              font-semibold
              mb-1
              drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]
          ">
            ’26
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="hero-subtitle text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Swing into action and unleash your potential
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/register" className="hero-btn btn-spider rounded-lg">
            Register Now
          </Link>
          <Link to="/events" className="hero-btn btn-spider-outline rounded-lg">
            Explore Events
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="event-info card-spider p-6 text-center">
            <div className="text-4xl font-display text-primary mb-2">12+</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Events</div>
          </div>
          <div className="event-info card-spider p-6 text-center">
            <div className="text-4xl font-display text-primary mb-2">₹10K+</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Prize Pool</div>
          </div>
          <div className="event-info card-spider p-6 text-center">
            <div className="text-4xl font-display text-primary mb-2">100+</div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground">Participants</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
