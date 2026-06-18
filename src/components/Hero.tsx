import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';

export const Hero: React.FC = () => {
  const { t } = useLang();
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6" style={{ paddingTop: '80px' }}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(245,166,35,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-sm font-display font-medium tracking-widest uppercase mb-4 animate-fade-up" style={{ color: '#F5A623', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            {t.hero.greeting}
          </p>

          {/* Name */}
          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl text-white mb-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards', lineHeight: 1.05 }}>
            {t.hero.name}
            <span style={{ color: '#F5A623' }}>.</span>
          </h1>

          {/* Title with terminal cursor */}
          <div className="flex items-center gap-2 mb-8 animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards' }}>
            <span className="font-display text-xl sm:text-2xl font-medium" style={{ color: '#A8B8C8' }}>
              {t.hero.title}
            </span>
            <span className="inline-block w-0.5 h-6 rounded-sm" style={{ backgroundColor: '#F5A623', opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.05s' }} />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ color: '#A8B8C8', animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.65s', opacity: 0, animationFillMode: 'forwards' }}>
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-lg font-display font-medium text-sm transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#F5A623', color: '#0D1B2A' }}
            >
              {t.hero.cta} →
            </button>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-lg font-display font-medium text-sm border transition-all hover:scale-105 active:scale-95"
              style={{ borderColor: 'rgba(245,166,35,0.4)', color: '#F5A623' }}
            >
              ↓ {t.hero.cvBtn}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="w-px h-12 bg-gradient-to-b from-transparent" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, rgba(245,166,35,0.4))' }} />
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F5A623' }} />
        </div>
      </div>
    </section>
  );
};
