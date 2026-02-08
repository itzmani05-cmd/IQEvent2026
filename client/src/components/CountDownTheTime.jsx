import { useEffect, useState } from "react";
import gsap from "gsap";

const TARGET_DATE = new Date("2026-02-20T00:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    gsap.fromTo(
      ".countdown-box",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    return () => clearInterval(interval);
  }, []);

  const Item = ({ value, label }) => (
    <div className="countdown-box flex flex-col items-center bg-black/50 backdrop-blur-md rounded-xl px-5 mb-20 py-4 min-w-[80px]">
      <span className="text-3xl md:text-4xl font-display font-bold text-primary">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 sm:gap-5 mt-10">
      <Item value={timeLeft.days} label="Days" />
      <Item value={timeLeft.hours} label="Hours" />
      <Item value={timeLeft.minutes} label="Minutes" />
      <Item value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
