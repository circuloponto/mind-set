import './Cookies.css';

const Cookies = () => {
  const handleManageCookies = () => {
    localStorage.removeItem('bridge-cookie-consent');
    window.location.reload();
  };

  return (
    <div className="cookies-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">Cookie Policy</h1>
          <p className="page-subtitle">How we use cookies on this website</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="last-updated">Last updated: January 2025</p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. 
            They help websites remember your preferences and improve your browsing experience.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>The BRIDGE project website uses cookies for the following purposes:</p>

          <h3>2.1 Necessary Cookies</h3>
          <p>
            These cookies are essential for the website to function properly. They enable 
            basic functions like page navigation and access to secure areas. The website 
            cannot function properly without these cookies.
          </p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bridge-cookie-consent</td>
                <td>Stores your cookie consent preferences</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2 Analytics Cookies (Optional)</h3>
          <p>
            These cookies help us understand how visitors interact with our website by 
            collecting and reporting information anonymously. This helps us improve our 
            website and services.
          </p>
          <p>
            <strong>Note:</strong> Analytics cookies are only set if you consent to them.
          </p>

          <h3>2.3 Functional Cookies (Optional)</h3>
          <p>
            These cookies enable enhanced functionality and personalisation, such as 
            remembering your language preferences or region.
          </p>
          <p>
            <strong>Note:</strong> Functional cookies are only set if you consent to them.
          </p>

          <h2>3. Managing Your Cookie Preferences</h2>
          <p>
            You can manage your cookie preferences at any time. When you first visit our 
            website, you will see a cookie consent banner where you can choose which 
            cookies to accept.
          </p>
          <p>
            To change your preferences later, click the button below:
          </p>
          <button 
            className="manage-cookies-btn"
            onClick={handleManageCookies}
            aria-label="Open cookie preferences dialog"
          >
            Manage Cookie Preferences
          </button>

          <h2>4. Browser Cookie Settings</h2>
          <p>
            You can also control cookies through your browser settings. Most browsers 
            allow you to:
          </p>
          <ul>
            <li>View what cookies are stored and delete them individually</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            Please note that blocking all cookies may affect your experience on our 
            website and other websites you visit.
          </p>

          <h2>5. Third-Party Cookies</h2>
          <p>
            Our website may contain links to third-party websites. These websites have 
            their own cookie policies, and we have no control over their cookies. We 
            encourage you to read the cookie policies of any third-party websites you visit.
          </p>

          <h2>6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our 
            practices or for legal reasons. We will notify you of any significant changes 
            by posting the new policy on this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@bridge-project.eu">info@bridge-project.eu</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
