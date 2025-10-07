import { Mail, Phone, Linkedin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B262C] via-[#0F4C75] to-[#1B262C]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #BBE1FA 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#3282B8] to-[#BBE1FA] p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-[#1B262C] flex items-center justify-center">
                <span className="text-6xl font-bold text-[#BBE1FA]">LB</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#BBE1FA] tracking-tight">
            Lakshya Bhatia
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-[#3282B8] to-[#BBE1FA] mx-auto mb-6 rounded-full" />

          <p className="text-2xl md:text-3xl text-[#BBE1FA] mb-8 font-light">
            Full-Stack Developer
          </p>

          <p className="text-lg md:text-xl text-[#BBE1FA]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting high-performance web applications with expertise in React, Vue, and modern frontend technologies.
            Proven track record of leading teams and delivering enterprise solutions.
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
