import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import { message } from 'antd';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isValidEmail(formData.email)){
      message.error("Please enter a valid email address");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      message.error("Please enter a valid 10-digit phone number");
      return;
    }

    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name:formData.name,
          email:formData.email,
          subject:formData.subject,
          message:formData.message,
        }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        ()=>{
          message.success('Message send successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
      
        })
        .catch((error)=>{
          message.error("Failed to send message");
          console.log(error);
        });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'infoquest.gctcsea@gmail.com',
      link: 'mailto:infoquest.gctcsea@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 88385 24257',
      link: 'tel:+91 88385 24257',

    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Main Auditorium, GCT College - Coimbatore',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/infoquest_gctcsea?igsh=MTJmM2JiOXhuMW4yYg==', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/cseagct/', label: 'LinkedIn' },
  ];

  const isValidEmail = (email) => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <section ref={sectionRef}  className="py-14 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about InfoQuest'26? Reach out to us and we'll swing by to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="contact-card card-spider flex items-center gap-6 p-6 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </a>
            ))}

            <div className="contact-card card-spider p-6">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-card card-spider p-8">
            <h3 className="font-display text-2xl text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Peter Parker"
                    className="input-spider"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="spider@web.com"
                    className={`input-spider ${
                      formData.email && !isValidEmail(formData.email)
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="input-spider"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message here..."
                  className="input-spider resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-spider w-full rounded-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
