import { useTranslation } from 'react-i18next';
import { Newspaper } from 'lucide-react';
import './News.css';

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="news-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('news.title')}</h1>
          <p className="page-subtitle">{t('news.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="news-status">
        <div className="container">
          <div className="news-empty">
            <div className="news-empty-icon" aria-hidden="true">
              <Newspaper size={48} strokeWidth={1.5} />
            </div>
            <h2 id="news-status" className="news-empty-title">{t('news.noNews')}</h2>
            <p className="news-empty-text">{t('news.stayTuned')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
