import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SpiderWebBackground = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('.web-strand');
      gsap.set(paths, { strokeDasharray: 1000, strokeDashoffset: 1000 });
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 mt-10 pointer-events-none overflow-hidden z-0">
      {/* Top Right Web */}
      <svg
        ref={svgRef}
        className="absolute -top-20 -right-20 w-96 h-96 opacity-20"
        viewBox="0 0 400 400"
      >
        <g stroke="hsl(var(--spider-red))" strokeWidth="1" fill="none">
          {/* Radial Lines */}
          <path className="web-strand" d="M200 200 L200 0" />
          <path className="web-strand" d="M200 200 L400 0" />
          <path className="web-strand" d="M200 200 L400 200" />
          <path className="web-strand" d="M200 200 L400 400" />
          <path className="web-strand" d="M200 200 L200 400" />
          <path className="web-strand" d="M200 200 L0 400" />
          <path className="web-strand" d="M200 200 L0 200" />
          <path className="web-strand" d="M200 200 L0 0" />
          
          {/* Spiral Lines */}
          <circle className="web-strand" cx="200" cy="200" r="40" opacity="0.6" />
          <circle className="web-strand" cx="200" cy="200" r="80" opacity="0.5" />
          <circle className="web-strand" cx="200" cy="200" r="120" opacity="0.4" />
          <circle className="web-strand" cx="200" cy="200" r="160" opacity="0.3" />
          <circle className="web-strand" cx="200" cy="200" r="200" opacity="0.2" />
        </g>
      </svg>

      {/* Bottom Left Web */}
      <svg
        className="absolute -bottom-32 -left-32 w-80 h-80 opacity-15"
        viewBox="0 0 400 400"
      >
        <g stroke="hsl(var(--spider-white))" strokeWidth="0.5" fill="none">
          <path d="M200 200 L200 0" />
          <path d="M200 200 L400 0" />
          <path d="M200 200 L400 200" />
          <path d="M200 200 L400 400" />
          <path d="M200 200 L200 400" />
          <path d="M200 200 L0 400" />
          <path d="M200 200 L0 200" />
          <path d="M200 200 L0 0" />
          <circle cx="200" cy="200" r="50" opacity="0.5" />
          <circle cx="200" cy="200" r="100" opacity="0.4" />
          <circle cx="200" cy="200" r="150" opacity="0.3" />
          <circle cx="200" cy="200" r="200" opacity="0.2" />
        </g>
      </svg>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default SpiderWebBackground;
