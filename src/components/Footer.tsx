import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B262C] border-t border-[#3282B8]/30 py-12">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#BBE1FA] mb-2">
              Lakshya Bhatia
            </h3>
            <p className="text-[#BBE1FA]/70">Full-Stack Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:lubhatia@gmail.com"
              className="flex items-center gap-2 text-[#BBE1FA] hover:text-[#3282B8] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="text-sm">lubhatia@gmail.com</span>
            </a>

            <a
              href="tel:+917698068035"
              className="flex items-center gap-2 text-[#BBE1FA] hover:text-[#3282B8] transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={20} />
              <span className="text-sm">+91 7698068035</span>
            </a>

            <a
              href="https://www.linkedin.com/in/lakshya-bhatia-448986181"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#BBE1FA] hover:text-[#3282B8] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="pt-12 mt-8 lg:mt-0 border-t border-[#3282B8]/20 text-center">
          <p className="text-[#BBE1FA]/60 text-sm flex items-center justify-center gap-2">
            <span>&copy; {currentYear} Lakshya Bhatia.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
