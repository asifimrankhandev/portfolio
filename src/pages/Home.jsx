import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050505] text-slate-900 dark:text-white font-sans selection:bg-purple-500/30">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
