import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const FlagIcon = ({ code }) => {
  const flags = {
    en: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="flag-svg">
        <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
        <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    ),
    pt: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" className="flag-svg">
        <rect width="600" height="400" fill="#006600"/>
        <rect x="240" width="360" height="400" fill="#FF0000"/>
        <circle cx="240" cy="200" r="80" fill="#FFCC00"/>
        <circle cx="240" cy="200" r="64" fill="#FF0000"/>
        <circle cx="240" cy="200" r="56" fill="#fff"/>
        <circle cx="240" cy="200" r="48" fill="#002776"/>
      </svg>
    ),
    ro: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" className="flag-svg">
        <rect width="200" height="400" fill="#002B7F"/>
        <rect x="200" width="200" height="400" fill="#FCD116"/>
        <rect x="400" width="200" height="400" fill="#CE1126"/>
      </svg>
    ),
  };
  return flags[code] || null;
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'ro', name: 'Română' },
  ];

  const activeCode = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
  const currentLanguage = languages.find(lang => lang.code === activeCode) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const handleKeyDown = (event, langCode) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLanguageChange(langCode);
    }
  };

  const handleToggleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === 'ArrowDown' && !isOpen) {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleToggleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Current language: ${currentLanguage.name}. Click to change language.`}
        type="button"
      >
        <span className="language-flag" aria-hidden="true">
          <FlagIcon code={currentLanguage.code} />
        </span>
        <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`language-arrow ${isOpen ? 'is-open' : ''}`} 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          aria-hidden="true"
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <ul 
          className="language-dropdown" 
          role="listbox" 
          aria-label="Select language"
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === activeCode}
              className={`language-option ${lang.code === activeCode ? 'is-active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              onKeyDown={(e) => handleKeyDown(e, lang.code)}
              tabIndex={0}
            >
              <span className="language-flag" aria-hidden="true">
                <FlagIcon code={lang.code} />
              </span>
              <span className="language-name">{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
