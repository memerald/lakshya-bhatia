import { useState, FormEvent } from 'react';
import { Mail, Phone, User, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`${formData.name} - ${formData.phone}`);
    const body = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:lubhatia@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#0F4C75] via-[#1B262C] to-[#0F4C75] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #BBE1FA 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#BBE1FA] mb-4">
            Let's Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#3282B8] to-[#BBE1FA] mx-auto rounded-full mb-6" />
          <p className="text-[#BBE1FA]/80 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1B262C]/80 backdrop-blur-sm border-2 border-[#3282B8]/30 rounded-2xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-[#BBE1FA] font-medium mb-2"
                >
                  <User size={18} />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0F4C75]/60 border border-[#3282B8]/40 rounded-lg text-[#BBE1FA] placeholder-[#BBE1FA]/40 focus:outline-none focus:border-[#BBE1FA] focus:ring-2 focus:ring-[#BBE1FA]/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-[#BBE1FA] font-medium mb-2"
                >
                  <Mail size={18} />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0F4C75]/60 border border-[#3282B8]/40 rounded-lg text-[#BBE1FA] placeholder-[#BBE1FA]/40 focus:outline-none focus:border-[#BBE1FA] focus:ring-2 focus:ring-[#BBE1FA]/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-[#BBE1FA] font-medium mb-2"
                >
                  <Phone size={18} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0F4C75]/60 border border-[#3282B8]/40 rounded-lg text-[#BBE1FA] placeholder-[#BBE1FA]/40 focus:outline-none focus:border-[#BBE1FA] focus:ring-2 focus:ring-[#BBE1FA]/20 transition-all duration-300"
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-[#BBE1FA] font-medium mb-2"
                >
                  <MessageSquare size={18} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0F4C75]/60 border border-[#3282B8]/40 rounded-lg text-[#BBE1FA] placeholder-[#BBE1FA]/40 focus:outline-none focus:border-[#BBE1FA] focus:ring-2 focus:ring-[#BBE1FA]/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3282B8] to-[#BBE1FA] text-[#1B262C] rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#BBE1FA]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
