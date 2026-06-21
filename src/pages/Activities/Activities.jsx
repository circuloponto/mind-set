import { useTranslation } from 'react-i18next';
import './Activities.css';

const Activities = () => {
  const { t } = useTranslation();

  const activities = ['activity1', 'activity2', 'activity3'];
  const methods = ['method1', 'method2', 'method3', 'method4'];

  return (
    <div className="activities-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('activities.title')}</h1>
          <p className="page-subtitle">{t('activities.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="implementation">
        <div className="container">
          <h2 id="implementation" className="section-heading"></h2>
          <div className="content-block">
            <p>{t('activities.introText')}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="main-activities">
        <div className="container">
          <h2 id="main-activities" className="section-heading">{t('activities.activitiesTitle')}</h2>
          <div className="activities-timeline">
            {activities.map((key, index) => {
              const paragraphs = t(`activities.${key}Text`).split('\n\n');
              const list = t(`activities.${key}List`, { returnObjects: true });
              return (
                <article key={key} className="activity-item">
                  <div className="activity-marker" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>
                  <div className="activity-content">
                    <h3>{t(`activities.${key}Title`)}</h3>
                    {paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    {Array.isArray(list) && (
                      <ul>
                        {list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="methodology">
        <div className="container">
          <h2 id="methodology" className="section-heading">{t('activities.methodologyTitle')}</h2>
          <div className="methodology-grid">
            {methods.map((key) => (
              <div key={key} className="methodology-card">
                <h3>{t(`activities.${key}Title`)}</h3>
                <p>{t(`activities.${key}Text`)}</p>
              </div>
            ))}
          </div>
          <p className="activities-conclusion">{t('activities.conclusionText')}</p>
        </div>
      </section>
    </div>
  );
};

export default Activities;
