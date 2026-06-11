import { Link } from 'react-router-dom';
import { UserPlus, FileText, BookOpen, Users } from 'lucide-react';
import './Programme.css';

const Programme = () => {
  return (
    <div className="programme-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">The BRIDGE Programme</h1>
          <p className="page-subtitle">
            A comprehensive self-help learning and support programme for informal disability caregivers
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="programme-intro">
        <div className="container">
          <h2 id="programme-intro" className="section-heading">Programme Overview</h2>
          <div className="content-block">
            <p>
              BRIDGE develops and implements a self-help learning and support programme 
              tailored for informal disability caregivers. Delivered via an interactive 
              platform, it combines self-paced learning with community engagement.
            </p>
            <p>
              The programme features innovative digital tools aligned with global disability 
              strategies, designed to empower informal caregivers, reduce their burden, 
              and improve care quality.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="programme-components">
        <div className="container">
          <h2 id="programme-components" className="section-heading">Programme Components</h2>
          <div className="components-grid">
            <article className="component-card">
              <div className="component-number" aria-hidden="true">1</div>
              <div className="component-content">
                <h3>E-Manual</h3>
                <p>
                  A culturally adapted e-manual covering key caregiving topics including:
                </p>
                <ul className="component-list">
                  <li>Understanding disability and care needs</li>
                  <li>Communication strategies</li>
                  <li>Self-care for caregivers</li>
                  <li>Navigating healthcare systems</li>
                  <li>Legal rights and resources</li>
                  <li>Building support networks</li>
                </ul>
              </div>
            </article>

            <article className="component-card">
              <div className="component-number" aria-hidden="true">2</div>
              <div className="component-content">
                <h3>Self-Assessment Tool</h3>
                <p>
                  An innovative assessment tool offering personalised feedback to help you:
                </p>
                <ul className="component-list">
                  <li>Identify your caregiving strengths</li>
                  <li>Recognise areas for development</li>
                  <li>Track your progress over time</li>
                  <li>Receive tailored recommendations</li>
                  <li>Set personal learning goals</li>
                </ul>
              </div>
            </article>

            <article className="component-card">
              <div className="component-number" aria-hidden="true">3</div>
              <div className="component-content">
                <h3>Interactive Platform</h3>
                <p>
                  A user-friendly digital platform that provides:
                </p>
                <ul className="component-list">
                  <li>Self-paced learning modules</li>
                  <li>Community forums and discussions</li>
                  <li>Resource library access</li>
                  <li>Progress tracking dashboard</li>
                  <li>Peer support connections</li>
                </ul>
              </div>
            </article>

            <article className="component-card">
              <div className="component-number" aria-hidden="true">4</div>
              <div className="component-content">
                <h3>Professional Support</h3>
                <p>
                  Resources designed to reinforce support networks by:
                </p>
                <ul className="component-list">
                  <li>Connecting caregivers with professionals</li>
                  <li>Providing guidance for healthcare workers</li>
                  <li>Facilitating knowledge exchange</li>
                  <li>Building collaborative care approaches</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-it-works">
        <div className="container">
          <h2 id="how-it-works" className="section-heading">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-icon" aria-hidden="true">
                <UserPlus size={28} />
              </div>
              <h3>Register</h3>
              <p>Create your free account to access all programme resources</p>
            </div>
            <div className="step-connector" aria-hidden="true"></div>
            <div className="step">
              <div className="step-icon" aria-hidden="true">
                <FileText size={28} />
              </div>
              <h3>Assess</h3>
              <p>Complete the self-assessment to identify your learning needs</p>
            </div>
            <div className="step-connector" aria-hidden="true"></div>
            <div className="step">
              <div className="step-icon" aria-hidden="true">
                <BookOpen size={28} />
              </div>
              <h3>Learn</h3>
              <p>Work through the e-manual at your own pace</p>
            </div>
            <div className="step-connector" aria-hidden="true"></div>
            <div className="step">
              <div className="step-icon" aria-hidden="true">
                <Users size={28} />
              </div>
              <h3>Connect</h3>
              <p>Join the community and share experiences with peers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cta" aria-labelledby="cta-title">
        <div className="container">
          <h2 id="cta-title" className="cta-title">Start Your Learning Journey</h2>
          <p className="cta-text">
            Access our free resources and join a community of caregivers supporting each other.
          </p>
          <Link to="/resources" className="btn btn-primary btn-large">
            Access Resources
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programme;
