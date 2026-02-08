import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import SpiderWebBackground from '@/components/SpiderWebBackground';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background relative" id="contact">

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground mb-4">
              Organizing <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground">
              Reach out to our team for any queries or assistance
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-spider p-6">
              <h3 className="text-xl font-semibold text-primary mb-6 border-b border-primary/20 pb-2">
                Designated Contact
              </h3>

              <div className="space-y-4">
                {[
                  { name: "Devashree", phone: "+91 82485 50499" },
                  { name: "Maharaja", phone: "+91 95856 11573" },
                ].map((person, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-secondary/40 rounded-lg px-4 py-3"
                  >
                    <div>
                      <p className="text-foreground font-medium">{person.name}</p>
                      <p className="text-muted-foreground text-sm">Event Coordinate</p>
                    </div>
                    <a
                      href={`tel:${person.phone}`}
                      className="text-primary hover:underline"
                    >
                      {person.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-spider p-6">
              <h3 className="text-xl font-semibold text-primary mb-6 border-b border-primary/20 pb-2">
                Core Committee
              </h3>

              <div className="space-y-4">
                {[
                  {
                    role: "General Secretary",
                    name: "Abinesh",
                    phone: "+91 88385 24257",
                  },
                  {
                    role: "Joint Secretary",
                    name: "Monika",
                    phone: "+91 93448 68146",
                  },
                ].map((person, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-secondary/40 rounded-lg px-4 py-3"
                  >
                    <div>
                      <p className="text-foreground font-medium">{person.name}</p>
                      <p className="text-muted-foreground text-sm">{person.role}</p>
                    </div>
                    <a
                      href={`tel:${person.phone}`}
                      className="text-primary hover:underline"
                    >
                     {person.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            </div>
        </div>
      </section>

      <Contact />

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-foreground mb-4">
              Frequently <span className="text-primary">Asked</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'When and where is InfoQuest\'26 being held?',
                a: 'InfoQuest\'26 will be held on February 20, 2026, at Government College of Technology, Coimbatore.',
              },
              {
                q: 'How can I register for events?',
                a: 'You can register for events through our official website. Click on the \'Register\' button in the navigation menu or visit the specific event page to complete your registration.',
              },
              {
                q: 'Is there a participation certificate?',
                a: 'Yes, all participants will receive an e-certificate of participation.',
              },
              {
                q: 'What is referral code?',
                a: 'A referral code is a unique code generated during registration that allows you to earn cashback by inviting friends.',
              },
              {
                q: 'How can I generate a referral code?',
                a: 'Your referral code is automatically generated after you complete registration.',
              },
              {
                q: 'With how many people can I share the referral code?',
                a: 'You can share your referral code with multiple people - there\'s no limit!',
              },
              
            ].map((faq, index) => (
              <div key={index} className="card-spider p-6">
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
