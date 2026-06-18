import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Translation } from '../types';
import { en, nl } from '../data/translations';

type Lang = 'en' | 'nl';

interface LangContextType {
  lang: Lang;
  t: Translation;
  toggle: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const t = lang === 'en' ? en : nl;
  const toggle = () => setLang(prev => prev === 'en' ? 'nl' : 'en');
  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
};
