import { useTranslation } from 'react-i18next';
import './Results.css';

const Results = () => {
  const { t } = useTranslation();
  const results = [
    {
      id: 1,
      title: 'E-Manual for Caregivers',
      status: 'in-progress',
      description: 'A culturally adapted e-manual covering key caregiving topics including communication, self-care, and navigating healthcare systems.',
      deliverables: [
        'Comprehensive caregiving guide',
        'Culturally adapted content for each partner country',
        'Available in 6+ languages',
      ],
    },
    {
      id: 2,
      title: 'Self-Assessment Tool',
      status: 'planned',
      description: 'An innovative digital tool offering personalised feedback to help caregivers identify strengths and areas for development.',
      deliverables: [
        'Interactive assessment questionnaire',
        'Personalised feedback reports',
        'Progress tracking functionality',
      ],
    },
    {
      id: 3,
      title: 'Interactive Learning Platform',
      status: 'in-progress',
      description: 'A user-friendly digital platform combining self-paced learning with community engagement features.',
      deliverables: [
        'Learning management system',
        'Community forums',
        'Resource library',
      ],
    },
    {
      id: 4,
      title: 'Multiplier Events',
      status: 'planned',
      description: 'Five events across Europe to disseminate results and engage stakeholders at local, national, and European levels.',
      deliverables: [
        '5 multiplier events in partner countries',
        'Stakeholder engagement sessions',
        'Networking opportunities',
      ],
    },
  ];

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return status;
    }
  };

  return (
    <div className="results-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">{t('results.title')}</h1>
          <p className="page-subtitle">{t('results.subtitle')}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="expected-results">
        <div className="container">
          <h2 id="expected-results" className="section-heading">Expected Results</h2>
          <p className="intro-text">
            The BRIDGE project will produce a range of outputs designed to support 
            informal disability caregivers across Europe. All results will be freely 
            accessible through this website.
          </p>

          <div className="results-grid" role="list">
            {results.map((result) => (
              <article key={result.id} className="result-card" role="listitem">
                <div className="result-header">
                  <span className={`result-status result-status-${result.status}`}>
                    {getStatusLabel(result.status)}
                  </span>
                </div>
                <h3 className="result-title">{result.title}</h3>
                <p className="result-description">{result.description}</p>
                <div className="result-deliverables">
                  <h4 className="deliverables-title">Key Deliverables:</h4>
                  <ul className="deliverables-list">
                    {result.deliverables.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="impact">
        <div className="container">
          <h2 id="impact" className="section-heading">Expected Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon" aria-hidden="true">👥</div>
              <h3>For Caregivers</h3>
              <ul>
                <li>Enhanced caregiving skills and confidence</li>
                <li>Reduced burden and stress</li>
                <li>Greater visibility and recognition</li>
                <li>Access to peer support networks</li>
              </ul>
            </div>
            <div className="impact-card">
              <div className="impact-icon" aria-hidden="true">🏥</div>
              <h3>For Professionals</h3>
              <ul>
                <li>Resources to support caregiver training</li>
                <li>Improved collaboration with caregivers</li>
                <li>Enhanced understanding of caregiver needs</li>
                <li>Tools for quality care delivery</li>
              </ul>
            </div>
            <div className="impact-card">
              <div className="impact-icon" aria-hidden="true">🌍</div>
              <h3>For Society</h3>
              <ul>
                <li>Improved care quality for people with disabilities</li>
                <li>Greater inclusivity in care provision</li>
                <li>Recognition of informal care contributions</li>
                <li>Strengthened support networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="dissemination">
        <div className="container">
          <h2 id="dissemination" className="section-heading">Dissemination</h2>
          <div className="dissemination-content">
            <p>
              All BRIDGE results will be disseminated through multiple channels to 
              ensure maximum reach and impact:
            </p>
            <div className="dissemination-channels">
              <div className="channel">
                <h3>Project Website</h3>
                <p>All resources freely available for download and online access.</p>
              </div>
              <div className="channel">
                <h3>Multiplier Events</h3>
                <p>Five events across Europe engaging stakeholders at all levels.</p>
              </div>
              <div className="channel">
                <h3>Partner Networks</h3>
                <p>Distribution through partner organisations' existing networks.</p>
              </div>
              <div className="channel">
                <h3>Erasmus+ Platform</h3>
                <p>Results shared via the Erasmus+ Project Results Platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
