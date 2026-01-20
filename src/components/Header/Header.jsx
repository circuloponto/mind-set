import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isScrolled, setIsScrolled] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navLinksRef = useRef([]);

  const menuItems = [
    { path: '/about', labelKey: 'nav.about' },
    { path: '/objectives', labelKey: 'nav.objectives' },
    { path: '/target-groups', labelKey: 'nav.targetGroups' },
    { path: '/activities', labelKey: 'nav.activities' },
    { path: '/results', labelKey: 'nav.results' },
    { path: '/partners', labelKey: 'nav.partners' },
    { path: '/news', labelKey: 'nav.news' },
    { path: '/contacts', labelKey: 'nav.contacts' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuButtonKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleMenuToggle();
    }
  };

  const handleNavLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleNavKeyDown = useCallback((event, index) => {
    const itemCount = menuItems.length;
    let newIndex = index;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        newIndex = (index + 1) % itemCount;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        newIndex = (index - 1 + itemCount) % itemCount;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = itemCount - 1;
        break;
      default:
        return;
    }

    setFocusedIndex(newIndex);
    navLinksRef.current[newIndex]?.focus();
  }, [menuItems.length]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="header__container">
        <Link to="/" className="header__logo-link" aria-label="MIND-SET - Home">
          <img 
            src="/mindeSet.svg" 
            alt="MIND-SET Project Logo" 
            className="header__logo"
          />
        </Link>

        <nav
          ref={menuRef}
          id="main-navigation"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <button
            className="header__nav-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            <X size={24} />
          </button>
          <ul className="header__nav-list" role="menubar" aria-label="Main menu">
            {menuItems.map((item, index) => (
              <li key={item.path} className="header__nav-item" role="none">
                <NavLink
                  ref={(el) => (navLinksRef.current[index] = el)}
                  to={item.path}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                  onClick={handleNavLinkClick}
                  onKeyDown={(e) => handleNavKeyDown(e, index)}
                  role="menuitem"
                  tabIndex={isMobile && !isMenuOpen ? -1 : 0}
                >
                  {t(item.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="header__language">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="header__actions">
          <div className="header__language-mobile">
            <LanguageSwitcher />
          </div>
          <button
            ref={menuButtonRef}
            className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
            onClick={handleMenuToggle}
            onKeyDown={handleMenuButtonKeyDown}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && <div className="header__overlay" onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;
