import React from 'react';
import { useLang } from '../context/LangContext';
import { skills } from '../data/content';

export const About: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-display font-semibold tracking-widest uppercase mb-3" style={{ color: '#F5A623' }}>
            {t.nav.about}
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">{t.about.title}</h2>
          <p className="text-base" style={{ color: '#A8B8C8' }}>{t.about.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Text */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {t.about.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: '#A8B8C8' }}>{para}</p>
            ))}
          </div>

          {/* Skills */}
          <div className="lg:col-span-2">
            <p className="font-display font-semibold text-sm uppercase tracking-wider mb-5" style={{ color: '#F5A623' }}>
              {t.about.skills}
            </p>
            <div className="flex flex-col gap-4">
              {skills.map(group => (
                <div key={group.category}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#A8B8C8' }}>{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span key={item} className="text-xs px-2.5 py-1 rounded-md font-mono transition-colors hover:border-amber-accent/50"
                        style={{ backgroundColor: 'rgba(13,27,42,0.8)', color: '#A8B8C8', border: '1px solid rgba(42,63,84,0.6)' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
