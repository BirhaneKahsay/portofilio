import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';

interface NavProps {
  activeSection: string;
}

export const Navbar: React.FC<NavProps> = ({ activeSection }) => {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'projects', label: t.nav.projects },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'experience', label: t.nav.experience },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-sm border-b border-navy-700/50 py-3' : 'py-5'}`}
      style={{ backgroundColor: scrolled ? 'rgba(13,27,42,0.95)' : 'transparent' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="font-display font-bold text-xl text-white">
          B<span style={{ color: '#F5A623' }}>.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link text-sm font-medium transition-colors ${activeSection === item.id ? 'text-white active' : 'text-slate-text hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all"
            style={{ borderColor: '#F5A623', color: '#F5A623' }}
          >
            <span>{lang === 'en' ? '🇳🇱' : '🇬🇧'}</span>
            <span>{lang === 'en' ? 'NL' : 'EN'}</span>
          </button>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="text-xs font-semibold px-2.5 py-1 rounded-full border" style={{ borderColor: '#F5A623', color: '#F5A623' }}>
            {lang === 'en' ? 'NL' : 'EN'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1">
            <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
            <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
            <div className="w-5 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-navy-700/50 px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: 'rgba(13,27,42,0.98)' }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left text-sm font-medium text-slate-text hover:text-white transition-colors">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
