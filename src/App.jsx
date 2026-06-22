import { Toaster } from 'sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '@/App.css';

import { Header } from '@/components/site/Header';
import { Hero } from '@/components/site/Hero';
import { About } from '@/components/site/About';
import { Skills } from '@/components/site/Skills';
import { Experience } from '@/components/site/Experience';
import { Awards } from '@/components/site/Awards';
import { Projects } from '@/components/site/Projects';
import { Writing } from '@/components/site/Writing';
import { Subscribe } from '@/components/site/Subscribe';
import { Contact } from '@/components/site/Contact';
import { Footer } from '@/components/site/Footer';
import { SEO } from '@/components/site/SEO';
import LogoPreview from '@/pages/LogoPreview';
import AllProjects from '@/pages/AllProjects';
import ProjectDetail from '@/pages/ProjectDetail';
import AllNotes from '@/pages/AllNotes';
import NoteDetail from '@/pages/NoteDetail';

function Portfolio() {
  return (
    <div className="App bg-white text-zinc-950">
      <SEO />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Awards />
        <Projects />
        <Writing />
        <Subscribe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Toaster position="top-right" richColors closeButton />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/notes" element={<AllNotes />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
          <Route path="/logos" element={<LogoPreview />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
