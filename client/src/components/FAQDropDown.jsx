import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQDropDown = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="card-spider p-6 cursor-pointer transition-all"
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">
                {faq.q}
              </h4>

              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 text-primary"
                    : "text-muted-foreground"
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQDropDown;
