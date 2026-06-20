import { Toaster } from 'sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';

import { Header } from '@/components/site/Header';
import { Hero } from '@/components/site/Hero';
import { About } from '@/components/site/About';
import { Skills } from '@/components/site/Skills';
import { Experience } from '@/components/site/Experience';
import { Projects } from '@/components/site/Projects';
import { Writing } from '@/components/site/Writing';
import { Contact } from '@/components/site/Contact';
import { Footer } from '@/components/site/Footer';
import LogoPreview from '@/pages/LogoPreview';

function Portfolio() {
  return (
    <div className="App bg-white text-zinc-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors closeButton />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/logos" element={<LogoPreview />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
