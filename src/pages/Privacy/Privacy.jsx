import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">How we collect, use, and protect your personal data</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="last-updated">Last updated: January 2025</p>

          <h2>1. Introduction</h2>
          <p>
            The BRIDGE project ("we", "us", "our") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <p>We may collect information you voluntarily provide, including:</p>
          <ul>
            <li>Contact information (name, email address) when you contact us or subscribe to updates</li>
            <li>Feedback and correspondence when you participate in surveys or contact us</li>
            <li>Event registration information when you sign up for multiplier events</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>Device information (browser type, operating system)</li>
            <li>Usage data (pages visited, time spent on pages)</li>
            <li>IP address and approximate location</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain our website and services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you project updates and newsletters (with your consent)</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>Under the General Data Protection Regulation (GDPR), we process your data based on:</p>
          <ul>
            <li><strong>Consent:</strong> When you subscribe to newsletters or submit contact forms</li>
            <li><strong>Legitimate interests:</strong> To improve our services and website functionality</li>
            <li><strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your data with:
          </p>
          <ul>
            <li>BRIDGE project partners for project-related purposes</li>
            <li>Service providers who assist in website operation</li>
            <li>Authorities when required by law</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes 
            outlined in this policy, unless a longer retention period is required by law.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Restrict processing of your data</li>
            <li>Data portability</li>
            <li>Object to processing</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>8. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your 
            personal data against unauthorised access, alteration, disclosure, or destruction.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries within the European 
            Economic Area (EEA) where our project partners are located.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions about this Privacy Policy or to exercise your rights, contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@bridge-project.eu">info@bridge-project.eu</a>
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
