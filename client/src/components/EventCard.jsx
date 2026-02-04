import { Link } from 'react-router-dom';
import { Clock, Users, Trophy } from 'lucide-react';

const EventCard = ({
  title,
  description,
  category,
  duration,
  teamSize,
  prize,
}) => {
  return (
    <div className="card-spider group">
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
          {category}
        </span>
      </div>

      <div className="p-6 pt-14">
        <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/50">
            <Clock className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{duration}</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/50">
            <Users className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{teamSize}</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/50">
            <Trophy className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{prize}</span>
          </div>
        </div>

        <Link
          to="/register"
          className="block w-full py-3 text-center font-semibold uppercase tracking-wider text-sm border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Register
        </Link>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M100 0 Q60 40 100 80 M100 0 Q40 20 80 100 M100 0 Q20 20 40 100 M100 0 Q10 30 0 100"
            stroke="hsl(var(--spider-red))"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default EventCard;
