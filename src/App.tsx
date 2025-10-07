import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import Skills from './components/Skills';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-[#1B262C]">
      <ThreeBackground />
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
