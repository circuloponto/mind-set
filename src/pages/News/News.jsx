import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Newspaper, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from '../../assets/img/1.jpeg';
import slide2 from '../../assets/img/2.jpeg';
import './News.css';

const News = () => {
  const { t } = useTranslation();

  const items = t('news.items', { returnObjects: true });
  const newsItems = Array.isArray(items) ? items : [];

  const slides = [slide1, slide2];
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <div className="news-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('news.title')}</h1>
        </div>
      </section>

      <section className="news-intro-section" aria-label={t('news.title')}>
        <div className="container">
          <p className="news-intro">{t('news.intro1')}</p>
          <p className="news-intro">{t('news.intro2')}</p>
        </div>
      </section>

      <section className="news-slider-section" aria-label={t('news.title')}>
        <div className="container">
          <div
            className="news-slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="news-slider__track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((src, index) => (
                <div className="news-slider__slide" key={index} aria-hidden={index !== current}>
                  <img
                    src={src}
                    alt={`${t('news.title')} — ${index + 1}`}
                    className="news-slider__image"
                  />
                </div>
              ))}
            </div>

            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  className="news-slider__arrow news-slider__arrow--prev"
                  onClick={prev}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  className="news-slider__arrow news-slider__arrow--next"
                  onClick={next}
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="news-slider__dots" role="tablist">
                  {slides.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`news-slider__dot ${index === current ? 'is-active' : ''}`}
                      onClick={() => goTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-selected={index === current}
                      role="tab"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="news-status">
        <div className="container">
          <h2 id="news-status" className="visually-hidden">{t('news.title')}</h2>
          {newsItems.length > 0 ? (
            <div className="news-list">
              {newsItems.map((item, index) => (
                <article key={index} className="news-article">
                  {item.date && (
                    <p className="news-article__date">
                      <Calendar size={16} aria-hidden="true" />
                      <span>{item.date}</span>
                    </p>
                  )}
                  <h3 className="news-article__title">{item.title}</h3>
                  <div className="news-article__body">
                    {(Array.isArray(item.body) ? item.body : [item.body]).map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="news-empty">
              <div className="news-empty-icon" aria-hidden="true">
                <Newspaper size={48} strokeWidth={1.5} />
              </div>
              <p className="news-empty-title">{t('news.noNews')}</p>
              <p className="news-empty-text">{t('news.stayTuned')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
