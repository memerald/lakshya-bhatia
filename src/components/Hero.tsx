import { Mail, Phone, Linkedin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B262C] via-[#0F4C75] to-[#1B262C]">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #BBE1FA 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="160"
              viewBox="0 0 160 160"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#3282B8" />
                  <stop offset="100%" stop-color="#BBE1FA" />
                </linearGradient>
              </defs>

              <circle cx="80" cy="80" r="79" fill="url(#grad)" />

              <circle cx="80" cy="80" r="71" fill="#1B262C" />

              <text
                x="50%"
                y="50%"
                text-anchor="middle"
                dominant-baseline="central"
                font-family="Arial, sans-serif"
                font-size="60"
                font-weight="bold"
                fill="#BBE1FA"
              >
                LB
              </text>
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#BBE1FA] tracking-tight">
            Lakshya Bhatia
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-[#3282B8] to-[#BBE1FA] mx-auto mb-6 rounded-full" />

          <p className="text-2xl md:text-3xl text-[#BBE1FA] mb-8 font-light">
            Full-Stack Developer
          </p>

          <p className="text-lg md:text-xl text-[#BBE1FA]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm a <span className="font-semibold">Fullstack Developer</span> who
            builds fast and dynamic web applications using React, Next and other
            modern technologies. I work closely with teams to create efficient
            solutions that add real value for both users, and businesses.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:lubhatia@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-[#3282B8] text-[#BBE1FA] rounded-lg hover:bg-[#BBE1FA] hover:text-[#0F4C75] transition-all duration-300 font-medium shadow-lg hover:shadow-[#BBE1FA]/20"
            >
              <Mail size={20} />
              lubhatia@gmail.com
            </a>

            <a
              href="tel:+917698068035"
              className="flex items-center gap-2 px-6 py-3 bg-[#0F4C75] text-[#BBE1FA] rounded-lg hover:bg-[#BBE1FA] hover:text-[#0F4C75] transition-all duration-300 font-medium shadow-lg hover:shadow-[#BBE1FA]/20"
            >
              <Phone size={20} />
              +91 7698068035
            </a>

            <a
              href="https://www.linkedin.com/in/lakshya-bhatia-448986181"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0F4C75] text-[#BBE1FA] rounded-lg hover:bg-[#BBE1FA] hover:text-[#0F4C75] transition-all duration-300 font-medium shadow-lg hover:shadow-[#BBE1FA]/20"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <button
            onClick={() => scrollToSection('skills')}
            className="animate-bounce text-[#BBE1FA] hover:text-[#3282B8] transition-colors duration-300"
            aria-label="Scroll to skills section"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
}
