
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsWeb from './components/SkillsWeb';
import ProjectsGrid from './components/ProjectsGrid';
import EducationWeb from './components/EducationWeb';
import Footer from './components/Footer';
import BackgroundWeb from './components/BackgroundWeb';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const playThwipSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      // Thwip sound: Start high, drop fast
      oscillator.frequency.setValueAtTime(1200, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.15);

      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.15);
      
      // Cleanup
      setTimeout(() => {
        audioCtx.close();
      }, 200);
    } catch (e) {
      // Silent fail if audio is blocked or unsupported
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    
    // Global click listener for the 'thwip' effect
    const handleGlobalClick = () => {
      playThwipSound();
    };

    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <BackgroundWeb />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SkillsWeb />
          <ProjectsGrid />
          <EducationWeb />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
