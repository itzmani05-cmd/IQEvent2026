import { Link } from "react-router-dom";
import { Clock, Users, Trophy, Zap } from "lucide-react";

const EventCard = ({
  title,
  description,
  category,
  Time,
  duration,
  teamSize,
  prize,
  onSpot,
}) => {
  const isFlagship = category === "Flagship Event";
  
  return (
    <div className="card-spider group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]">
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-full">
          {category}
        </span>
      </div>

      <div className="p-6 pt-16 relative z-10">
        <h3 className="font-display text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <InfoItem icon={<Clock />} value={Time || duration} />
          <InfoItem icon={<Users />} value={teamSize} />
          <InfoItem
            icon={<Trophy />}
            value={isFlagship ? "₹249" : prize}
          />
        </div>
        
        {category === "Flagship Event" && (
            <div className="space-y-3 mb-6">
                <p className="text-xs text-muted-foreground text-center italic">
                  Note: To participate in this event, you must register for any one pass.
                  <br/> On-Spot also available
                </p>     
            </div>
        )}
            <button
                // href="https://forms.gle/LbAWgV9AziWYcvmd8"
                // target="_blank"
                // rel="noopener noreferrer"
                className="relative block w-full py-3 text-center font-semibold uppercase tracking-wider text-sm rounded-lg
                          border border-primary text-primary overflow-hidden
                          transition-all duration-300
                          hover:text-primary-foreground hover:bg-primary"
              >
                On Spot
              </button>
            
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M100 0 Q60 40 100 80 
               M100 0 Q40 20 80 100 
               M100 0 Q20 20 40 100 
               M100 0 Q10 30 0 100"
            stroke="hsl(var(--spider-red))"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

const InfoItem = ({ icon, value }) => (
  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/50 backdrop-blur-sm">
    <div className="text-primary mb-1">{icon}</div>
    <span className="text-[11px] text-muted-foreground leading-tight">
      {value}
    </span>
  </div>
);

export default EventCard;
