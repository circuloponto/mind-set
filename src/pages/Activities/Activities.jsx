import { useTranslation } from 'react-i18next';
import './Activities.css';

const Activities = () => {
  const { t } = useTranslation();

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
          <h2 id="implementation" className="section-heading">{t('activities.introTitle')}</h2>
          <div className="content-block">
            <p>{t('activities.introText')}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="main-activities">
        <div className="container">
          <h2 id="main-activities" className="section-heading">Main Activities</h2>
          <div className="activities-timeline">
            <article className="activity-item">
              <div className="activity-marker" aria-hidden="true">
                <span>1</span>
              </div>
              <div className="activity-content">
                <h3>Needs Analysis & Research</h3>
                <p>
                  Conducting comprehensive research to understand the needs, challenges, 
                  and priorities of informal disability caregivers across partner countries.
                </p>
                <ul>
                  <li>Literature review on caregiving best practices</li>
                  <li>Surveys and interviews with caregivers</li>
                  <li>Analysis of existing support resources</li>
                </ul>
              </div>
            </article>

            <article className="activity-item">
              <div className="activity-marker" aria-hidden="true">
                <span>2</span>
              </div>
              <div className="activity-content">
                <h3>E-Manual Development</h3>
                <p>
                  Creating a culturally adapted e-manual covering key caregiving topics 
                  based on research findings and expert input.
                </p>
                <ul>
                  <li>Content development by subject matter experts</li>
                  <li>Cultural adaptation for each partner country</li>
                  <li>Translation into multiple languages</li>
                  <li>Accessibility review and optimisation</li>
                </ul>
              </div>
            </article>

            <article className="activity-item">
              <div className="activity-marker" aria-hidden="true">
                <span>3</span>
              </div>
              <div className="activity-content">
                <h3>Self-Assessment Tool Creation</h3>
                <p>
                  Developing an innovative self-assessment tool offering personalised 
                  feedback to help caregivers identify strengths and areas for growth.
                </p>
                <ul>
                  <li>Assessment framework design</li>
                  <li>Question development and validation</li>
                  <li>Feedback algorithm creation</li>
                  <li>User testing and refinement</li>
                </ul>
              </div>
            </article>

            <article className="activity-item">
              <div className="activity-marker" aria-hidden="true">
                <span>4</span>
              </div>
              <div className="activity-content">
                <h3>Interactive Platform Development</h3>
                <p>
                  Building a user-friendly digital platform that hosts all resources 
                  and enables community engagement.
                </p>
                <ul>
                  <li>Platform design and development</li>
                  <li>Integration of e-manual and assessment tool</li>
                  <li>Community features implementation</li>
                  <li>Accessibility compliance testing</li>
                </ul>
              </div>
            </article>

            <article className="activity-item">
              <div className="activity-marker" aria-hidden="true">
                <span>5</span>
              </div>
              <div className="activity-content">
                <h3>Piloting & Testing</h3>
                <p>
                  Testing all resources with real caregivers and professionals to 
                  gather feedback and make improvements.
                </p>
                <ul>
                  <li>Pilot testing with caregiver groups</li>
                  <li>Professional review sessions</li>
                  <li>Feedback collection and analysis</li>
                  <li>Resource refinement</li>
                </ul>
              </div>
            </article>

            <article className="activity-item">
              <div className="activity-marker" aria-hidden="true">
                <span>6</span>
              </div>
              <div className="activity-content">
                <h3>Multiplier Events</h3>
                <p>
                  Organising five multiplier events to disseminate results and engage 
                  stakeholders at local, national, and European levels.
                </p>
                <ul>
                  <li>Event planning and coordination</li>
                  <li>Stakeholder engagement</li>
                  <li>Results presentation</li>
                  <li>Networking and collaboration building</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="methodology">
        <div className="container">
          <h2 id="methodology" className="section-heading">Methodology</h2>
          <div className="methodology-grid">
            <div className="methodology-card">
              <h3>Participatory Approach</h3>
              <p>
                Involving caregivers throughout the development process to ensure 
                resources meet their real needs and preferences.
              </p>
            </div>
            <div className="methodology-card">
              <h3>Cultural Adaptation</h3>
              <p>
                Adapting all materials to be culturally relevant and appropriate 
                for caregivers in different European contexts.
              </p>
            </div>
            <div className="methodology-card">
              <h3>Digital Innovation</h3>
              <p>
                Leveraging innovative digital tools aligned with global disability 
                strategies to maximise accessibility and impact.
              </p>
            </div>
            <div className="methodology-card">
              <h3>Quality Assurance</h3>
              <p>
                Implementing rigorous testing and review processes to ensure all 
                outputs meet high quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
