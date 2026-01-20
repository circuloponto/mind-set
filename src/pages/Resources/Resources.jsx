import './Resources.css';

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: 'Caregiver E-Manual',
      description: 'Comprehensive guide covering essential caregiving topics, from understanding disability to self-care strategies.',
      type: 'E-Book',
      icon: '📚',
      available: true,
    },
    {
      id: 2,
      title: 'Self-Assessment Tool',
      description: 'Interactive tool to evaluate your caregiving skills and receive personalised recommendations.',
      type: 'Interactive Tool',
      icon: '📋',
      available: true,
    },
    {
      id: 3,
      title: 'Communication Guide',
      description: 'Practical strategies for effective communication with care recipients and healthcare professionals.',
      type: 'Guide',
      icon: '💬',
      available: true,
    },
    {
      id: 4,
      title: 'Self-Care Toolkit',
      description: 'Resources and exercises to help caregivers maintain their own wellbeing while caring for others.',
      type: 'Toolkit',
      icon: '❤️',
      available: true,
    },
    {
      id: 5,
      title: 'Legal Rights Handbook',
      description: 'Information about caregiver rights, benefits, and support services available across Europe.',
      type: 'Handbook',
      icon: '⚖️',
      available: false,
    },
    {
      id: 6,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides on practical caregiving techniques and strategies.',
      type: 'Video',
      icon: '🎥',
      available: false,
    },
  ];

  return (
    <div className="resources-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">Resources</h1>
          <p className="page-subtitle">
            Free educational materials and tools to support your caregiving journey
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="resources-intro">
        <div className="container">
          <h2 id="resources-intro" className="section-heading">Available Resources</h2>
          <p className="intro-text">
            All BRIDGE resources are freely accessible and designed to help informal 
            caregivers develop their skills and find support. Resources are available 
            in multiple languages to serve caregivers across Europe.
          </p>

          <div className="resources-grid" role="list">
            {resources.map((resource) => (
              <article 
                key={resource.id} 
                className={`resource-card ${!resource.available ? 'coming-soon' : ''}`}
                role="listitem"
              >
                <div className="resource-icon" aria-hidden="true">
                  {resource.icon}
                </div>
                <div className="resource-content">
                  <div className="resource-header">
                    <span className="resource-type">{resource.type}</span>
                    {!resource.available && (
                      <span className="coming-soon-badge">Coming Soon</span>
                    )}
                  </div>
                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>
                  {resource.available ? (
                    <button 
                      className="resource-btn"
                      aria-label={`Access ${resource.title}`}
                    >
                      Access Resource
                    </button>
                  ) : (
                    <button 
                      className="resource-btn resource-btn-disabled"
                      disabled
                      aria-label={`${resource.title} coming soon`}
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="languages">
        <div className="container">
          <h2 id="languages" className="section-heading">Available Languages</h2>
          <p className="intro-text">
            Our resources are being translated and adapted for caregivers across Europe.
          </p>
          <div className="languages-grid">
            <div className="language-item">
              <span className="language-flag" aria-hidden="true">🇬🇧</span>
              <span>English</span>
            </div>
            <div className="language-item">
              <span className="language-flag" aria-hidden="true">🇵🇹</span>
              <span>Portuguese</span>
            </div>
            <div className="language-item">
              <span className="language-flag" aria-hidden="true">🇪🇸</span>
              <span>Spanish</span>
            </div>
            <div className="language-item">
              <span className="language-flag" aria-hidden="true">🇮🇹</span>
              <span>Italian</span>
            </div>
            <div className="language-item">
              <span className="language-flag" aria-hidden="true">🇩🇪</span>
              <span>German</span>
            </div>
            <div className="language-item">
              <span className="language-flag" aria-hidden="true">🇫🇷</span>
              <span>French</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-to-access">
        <div className="container">
          <h2 id="how-to-access" className="section-heading">How to Access</h2>
          <div className="access-steps">
            <div className="access-step">
              <div className="access-step-number" aria-hidden="true">1</div>
              <div className="access-step-content">
                <h3>Browse Resources</h3>
                <p>Explore our collection of educational materials and tools above.</p>
              </div>
            </div>
            <div className="access-step">
              <div className="access-step-number" aria-hidden="true">2</div>
              <div className="access-step-content">
                <h3>Select Your Language</h3>
                <p>Choose your preferred language for the best learning experience.</p>
              </div>
            </div>
            <div className="access-step">
              <div className="access-step-number" aria-hidden="true">3</div>
              <div className="access-step-content">
                <h3>Start Learning</h3>
                <p>Access materials instantly—no registration required for basic resources.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
