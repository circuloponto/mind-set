import { useTranslation } from 'react-i18next';
import './Partners.css';

const Partners = () => {
  const { t } = useTranslation();
  const partners = [
    {
      id: 1,
      name: 'Partner Organisation 1',
      country: 'Portugal',
      flag: '🇵🇹',
      role: 'Project Coordinator',
      description: 'Leading the project coordination and development of the e-manual content.',
    },
    {
      id: 2,
      name: 'Partner Organisation 2',
      country: 'Spain',
      flag: '🇪🇸',
      role: 'Research Partner',
      description: 'Contributing research expertise and supporting the development of assessment tools.',
    },
    {
      id: 3,
      name: 'Partner Organisation 3',
      country: 'Italy',
      flag: '🇮🇹',
      role: 'Technology Partner',
      description: 'Developing the interactive platform and digital learning tools.',
    },
    {
      id: 4,
      name: 'Partner Organisation 4',
      country: 'Germany',
      flag: '🇩🇪',
      role: 'Training Partner',
      description: 'Providing expertise in adult education and caregiver training methodologies.',
    },
    {
      id: 5,
      name: 'Partner Organisation 5',
      country: 'France',
      flag: '🇫🇷',
      role: 'Dissemination Partner',
      description: 'Leading communication, dissemination, and multiplier event organisation.',
    },
  ];

  return (
    <div className="partners-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('partners.title')}</h1>
          <p className="page-subtitle">{t('partners.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="consortium">
        <div className="container">
          <h2 id="consortium" className="section-heading">The BRIDGE Consortium</h2>
          <p className="intro-text">
            BRIDGE brings together organisations from across Europe, each contributing 
            unique expertise to create comprehensive resources for informal disability 
            caregivers. Our partnership combines experience in adult education, healthcare, 
            technology, and caregiver support.
          </p>

          <div className="partners-grid" role="list">
            {partners.map((partner) => (
              <article key={partner.id} className="partner-card" role="listitem">
                <div className="partner-header">
                  <span className="partner-flag" aria-hidden="true">{partner.flag}</span>
                  <span className="partner-country">{partner.country}</span>
                </div>
                <h3 className="partner-name">{partner.name}</h3>
                <span className="partner-role">{partner.role}</span>
                <p className="partner-description">{partner.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="collaboration">
        <div className="container">
          <h2 id="collaboration" className="section-heading">Our Collaboration</h2>
          <div className="collaboration-content">
            <div className="collaboration-text">
              <p>
                The BRIDGE partnership represents a truly European approach to supporting 
                informal caregivers. By bringing together diverse perspectives and expertise 
                from multiple countries, we ensure that our resources are culturally adapted 
                and relevant across different contexts.
              </p>
              <p>
                Our partners collaborate closely on all aspects of the project, from research 
                and content development to platform design and dissemination activities. This 
                collaborative approach ensures high-quality outputs that meet the real needs 
                of caregivers across Europe.
              </p>
            </div>
            <div className="collaboration-stats">
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Partner Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Multiplier Events</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Languages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="become-partner">
        <div className="container">
          <h2 id="become-partner" className="section-heading">Get Involved</h2>
          <div className="involvement-content">
            <p>
              While the core BRIDGE consortium is established, we welcome collaboration 
              with organisations interested in supporting informal caregivers. Whether 
              you're a caregiver organisation, healthcare provider, or adult education 
              institution, there are opportunities to engage with our work.
            </p>
            <div className="involvement-options">
              <div className="involvement-option">
                <h3>Attend Events</h3>
                <p>Join our multiplier events to learn about project results and network with stakeholders.</p>
              </div>
              <div className="involvement-option">
                <h3>Share Resources</h3>
                <p>Help disseminate BRIDGE resources to caregivers in your network and community.</p>
              </div>
              <div className="involvement-option">
                <h3>Provide Feedback</h3>
                <p>Contribute to the development of our resources by sharing your expertise and insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
