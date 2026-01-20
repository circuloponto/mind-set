import { useTranslation } from 'react-i18next';
import './News.css';

const News = () => {
  const { t } = useTranslation();
  const newsItems = [
    {
      id: 1,
      type: 'news',
      date: '2025-01-15',
      title: 'BRIDGE Project Officially Launched',
      excerpt: 'The BRIDGE consortium has officially kicked off the project with a successful launch meeting bringing together all partners.',
      image: null,
    },
    {
      id: 2,
      type: 'event',
      date: '2025-03-20',
      title: 'First Multiplier Event - Portugal',
      excerpt: 'Join us for our first multiplier event in Portugal, where we will present the project objectives and gather stakeholder input.',
      location: 'Lisbon, Portugal',
      image: null,
    },
    {
      id: 3,
      type: 'news',
      date: '2025-02-01',
      title: 'Research Phase Begins',
      excerpt: 'Our research team has begun the needs analysis phase, gathering insights from caregivers across partner countries.',
      image: null,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      date: '2025-03-20',
      title: 'Multiplier Event 1',
      location: 'Lisbon, Portugal',
      description: 'Introduction to BRIDGE and stakeholder engagement session.',
    },
    {
      id: 2,
      date: '2025-06-15',
      title: 'Multiplier Event 2',
      location: 'Madrid, Spain',
      description: 'Presentation of initial research findings and e-manual development.',
    },
    {
      id: 3,
      date: '2025-09-10',
      title: 'Multiplier Event 3',
      location: 'Rome, Italy',
      description: 'Platform demonstration and user testing feedback session.',
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="news-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('news.title')}</h1>
          <p className="page-subtitle">{t('news.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="latest-news">
        <div className="container">
          <h2 id="latest-news" className="section-heading">Latest News</h2>
          
          <div className="news-grid" role="feed" aria-label="Latest news articles">
            {newsItems.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-meta">
                  <span className={`news-type news-type-${item.type}`}>
                    {item.type === 'event' ? 'Event' : 'News'}
                  </span>
                  <time dateTime={item.date} className="news-date">
                    {formatDate(item.date)}
                  </time>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                {item.location && (
                  <p className="news-location">
                    <span aria-hidden="true">📍</span> {item.location}
                  </p>
                )}
                <button className="news-link" aria-label={`Read more about ${item.title}`}>
                  Read More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="upcoming-events">
        <div className="container">
          <h2 id="upcoming-events" className="section-heading">Upcoming Events</h2>
          <p className="intro-text">
            BRIDGE will organise five multiplier events across Europe to disseminate 
            results and foster collaboration among stakeholders at local, national, 
            and European levels.
          </p>

          <div className="events-timeline" role="list" aria-label="Upcoming events timeline">
            {upcomingEvents.map((event, index) => (
              <article key={event.id} className="event-item" role="listitem">
                <div className="event-marker" aria-hidden="true">
                  <span className="event-number">{index + 1}</span>
                </div>
                <div className="event-content">
                  <time dateTime={event.date} className="event-date">
                    {formatDate(event.date)}
                  </time>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-location">
                    <span aria-hidden="true">📍</span> {event.location}
                  </p>
                  <p className="event-description">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default News;
