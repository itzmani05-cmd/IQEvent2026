import { Card } from "antd";
import {useNavigate} from 'react-router-dom';
import { eventConfig } from "./eventConfig";

const EventRegister = ({ onContinue }) => {
    const navigate= useNavigate();

  const handleSelect = (key) => {
    navigate('/register',{
        state:eventConfig[key],
    })
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="spider-web-bg absolute inset-0 opacity-20" />

      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            Choose Your <span className="text-primary">Event</span>
          </h2>
          <p className="text-muted-foreground">
            Select the event you'd like to participate in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            hoverable
            onClick={() => handleSelect("tech")}
            className="border-2 border-border rounded-2xl
                       hover:border-primary hover:bg-primary/10
                       transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-semibold text-foreground">
                  Tech Event
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Coding, robotics, technical competitions
                </div>
              </div>
              <div className="text-2xl font-bold text-primary">₹299</div>
            </div>
          </Card>

          <Card
            hoverable
            onClick={() => handleSelect("nontech")}
            className="border-2 border-border rounded-2xl
                       hover:border-primary hover:bg-primary/10
                       transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-semibold text-foreground">
                  Non-Tech Event
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Cultural, gaming, creative activities
                </div>
              </div>
              <div className="text-2xl font-bold text-primary">₹199</div>
            </div>
          </Card>

          <Card
            hoverable
            onClick={() => handleSelect("combo")}
            className="border-2 border-border rounded-2xl
                       hover:border-primary hover:bg-primary/10
                       transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-semibold text-foreground">
                  Combo Pack
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Tech + Non-Tech access
                </div>
              </div>
              <div className="text-2xl font-bold text-primary">₹399</div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground border-t border-border pt-6">
          ✨Certificate of participation for all events
        </div>
      </div>
    </div>
  );
};

export default EventRegister;
