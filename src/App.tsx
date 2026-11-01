import { MotionConfig } from 'framer-motion';
import { StatusBar } from './components/ui/StatusBar';
import { NavBar } from './components/ui/NavBar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-[100dvh] bg-field text-ink transition-colors duration-300">
        <StatusBar />
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
