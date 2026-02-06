import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Target, 
  Users, 
  ArrowRight, 
  Sparkles,
  GraduationCap,
  Globe,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import './Home.css';

const Home = () => {
  console.log("[v0] Home component rendering");
  const { t } = useTranslation();

  const features = [
    { icon: BookOpen, titleKey: 'home.card1Title', textKey: 'home.card1Text' },
    { icon: Target, titleKey: 'home.card2Title', textKey: 'home.card2Text' },
    { icon: Users, titleKey: 'home.card3Title', textKey: 'home.card3Text' },
  ];

  const objectives = [
    { icon: GraduationCap, titleKey: 'home.obj1Title', textKey: 'home.obj1Text' },
    { icon: Globe, titleKey: 'home.obj2Title', textKey: 'home.obj2Text' },
    { icon: Lightbulb, titleKey: 'home.obj3Title', textKey: 'home.obj3Text' },
    { icon: TrendingUp, titleKey: 'home.obj4Title', textKey: 'home.obj4Text' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__background" aria-hidden="true">
          <div className="hero__gradient"></div>
          <div className="hero__pattern"></div>
        </div>
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__badge">
              <Sparkles size={14} />
              <span>Erasmus+ Project</span>
            </div>
            <h1 id="hero-title" className="hero__title">
              {t('home.heroTitle')}
            </h1>
            <p className="hero__subtitle">
              {t('home.heroSubtitle')}
            </p>
            <div className="hero__actions">
              <Link to="/activities" className="btn btn--primary btn--lg">
                {t('home.exploreActivities')}
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn--outline btn--lg">
                {t('home.learnMore')}
              </Link>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-ring hero__visual-ring--1"></div>
            <div className="hero__visual-ring hero__visual-ring--2"></div>
            <div className="hero__visual-ring hero__visual-ring--3"></div>
            <div className="hero__visual-icon">
              <img src="/mindeSet.svg" alt="" className="hero__visual-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section--features" aria-labelledby="about-title">
        <div className="section__container">
          <div className="section__header">
            <span className="section__label">What We Do</span>
            <h2 id="about-title" className="section__title">{t('home.aboutTitle')}</h2>
            <p className="section__subtitle">{t('home.aboutSubtitle')}</p>
          </div>
          <div className="features__grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article key={index} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="feature-card__title">{t(feature.titleKey)}</h3>
                  <p className="feature-card__text">{t(feature.textKey)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section section--objectives" aria-labelledby="objectives-title">
        <div className="section__container">
          <div className="section__header">
            <span className="section__label">Our Goals</span>
            <h2 id="objectives-title" className="section__title">{t('home.objectivesTitle')}</h2>
          </div>
          <div className="objectives__grid">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <article key={index} className="objective-card">
                  <div className="objective-card__number">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="objective-card__icon">
                    <Icon size={20} />
                  </div>
                  <div className="objective-card__content">
                    <h3 className="objective-card__title">{t(objective.titleKey)}</h3>
                    <p className="objective-card__text">{t(objective.textKey)}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--cta" aria-labelledby="cta-title">
        <div className="section__container">
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">{t('home.ctaTitle')}</h2>
            <p className="cta__text">{t('home.ctaText')}</p>
            <Link to="/results" className="btn btn--white btn--lg">
              {t('home.viewResults')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
