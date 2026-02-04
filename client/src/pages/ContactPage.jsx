import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import SpiderWebBackground from '@/components/SpiderWebBackground';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SpiderWebBackground />
      <Navbar />

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
                🎯 Event Coordinators
              </h3>

              <div className="space-y-4">
                {[
                  { name: "Devashree", phone: "8248550499" },
                  { name: "Dhavamani", phone: "9787298534" },
                ].map((person, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-secondary/40 rounded-lg px-4 py-3"
                  >
                    <div>
                      <p className="text-foreground font-medium">{person.name}</p>
                      <p className="text-muted-foreground text-sm">Event Coordinator</p>
                    </div>
                    <a
                      href={`tel:${person.phone}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      📞 {person.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Secretaries */}
            <div className="card-spider p-6">
              <h3 className="text-xl font-semibold text-primary mb-6 border-b border-primary/20 pb-2">
                🏛️ Core Committee
              </h3>

              <div className="space-y-4">
                {[
                  {
                    role: "General Secretary",
                    name: "Abinesh",
                    phone: "8838524257",
                  },
                  {
                    role: "Joint Secretary",
                    name: "Monika",
                    phone: "9344868146",
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
                      className="text-primary font-semibold hover:underline"
                    >
                      📞 {person.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="card-spider overflow-hidden h-80">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.277443987361!2d76.93595870000003!3d11.017798300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858dc68b80bbf%3A0x24bab8d60d2bc693!2sGovernment%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1769880622196!5m2!1sen!2sin" 
              className="w-full h-[400px]"
              style={{ border: 0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
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
                q: 'Is registration free?',
                a: 'Yes! Registration for InfoQuest\'26 is completely free for all participants.',
              },
              {
                q: 'Can I participate in multiple events?',
                a: 'Absolutely! You can register for as many events as you want, as long as they don\'t have overlapping schedules.',
              },
              {
                q: 'Do I need prior experience to participate?',
                a: 'Not necessarily. We have events for all skill levels, from beginners to advanced.',
              },
              {
                q: 'Will accommodation be provided?',
                a: 'We can help arrange accommodation for outstation participants. Please contact us for more details.',
              },
              {
                q: 'How will I receive my participation certificate?',
                a: 'Digital certificates will be sent to your registered email after the event. Physical certificates can be collected on-site.',
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

      <Footer />
    </div>
  );
};

export default ContactPage;
