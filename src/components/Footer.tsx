import React from 'react';
import { useLang } from '../context/LangContext';

export const Footer: React.FC = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t" style={{ borderColor: 'rgba(42,63,84,0.4)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm" style={{ color: '#A8B8C8' }}>
          © {year} Birhane. {t.footer.rights}
        </p>
        <p className="text-xs" style={{ color: 'rgba(168,184,200,0.5)' }}>
          {t.footer.built}
        </p>
      </div>
    </footer>
  );
};
