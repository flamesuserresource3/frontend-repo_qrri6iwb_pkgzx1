import { useEffect } from 'react';
import SplashIntro from './components/SplashIntro.jsx';
import HeroSection from './components/HeroSection.jsx';
import HeritageSection from './components/HeritageSection.jsx';
import ShowcasePhilosophy from './components/ShowcasePhilosophy.jsx';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior across the app
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white antialiased">
      <SplashIntro />
      <HeroSection />
      <HeritageSection />
      <ShowcasePhilosophy />
    </div>
  );
}
