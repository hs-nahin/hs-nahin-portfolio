import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import SocialDock from '../components/SocialDock';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <SocialDock />
    </main>
  );
}