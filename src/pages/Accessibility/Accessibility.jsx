import './Accessibility.css';

const Accessibility = () => {
  return (
    <div className="accessibility-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title" className="page-title">Accessibility Statement</h1>
          <p className="page-subtitle">Our commitment to digital accessibility</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="last-updated">Last updated: January 2025</p>

          <h2>Our Commitment</h2>
          <p>
            The BRIDGE project is committed to ensuring digital accessibility for people 
            with disabilities. We are continually improving the user experience for everyone 
            and applying the relevant accessibility standards.
          </p>

          <h2>Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for 
            designers and developers to improve accessibility for people with disabilities. 
            It defines three levels of conformance: Level A, Level AA, and Level AAA.
          </p>
          <p>
            The BRIDGE project website strives to conform to <strong>WCAG 2.1 Level AA</strong>. 
            We are working to achieve and maintain this standard across all pages.
          </p>

          <h2>Accessibility Features</h2>
          <p>This website includes the following accessibility features:</p>

          <h3>Navigation</h3>
          <ul>
            <li>Skip to main content link for keyboard users</li>
            <li>Consistent navigation structure across all pages</li>
            <li>Logical heading hierarchy (H1, H2, H3, etc.)</li>
            <li>Descriptive link text</li>
            <li>Keyboard-accessible menus and interactive elements</li>
          </ul>

          <h3>Visual Design</h3>
          <ul>
            <li>Sufficient colour contrast ratios (minimum 4.5:1 for normal text)</li>
            <li>Text can be resized up to 200% without loss of functionality</li>
            <li>No content relies solely on colour to convey information</li>
            <li>Responsive design that works on various screen sizes</li>
          </ul>

          <h3>Content</h3>
          <ul>
            <li>Alternative text for images</li>
            <li>ARIA labels for interactive elements</li>
            <li>Form labels and error messages</li>
            <li>Clear and simple language</li>
          </ul>

          <h3>Keyboard Navigation</h3>
          <p>All functionality is available using a keyboard:</p>
          <ul>
            <li><strong>Tab:</strong> Move forward through interactive elements</li>
            <li><strong>Shift + Tab:</strong> Move backward through interactive elements</li>
            <li><strong>Enter:</strong> Activate links and buttons</li>
            <li><strong>Escape:</strong> Close menus and dialogs</li>
            <li><strong>Arrow keys:</strong> Navigate within menus</li>
          </ul>

          <h2>Assistive Technologies</h2>
          <p>This website is designed to be compatible with:</p>
          <ul>
            <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Keyboard-only navigation</li>
          </ul>

          <h2>Known Limitations</h2>
          <p>
            While we strive for full accessibility, some content may have limitations:
          </p>
          <ul>
            <li>Some third-party content may not be fully accessible</li>
            <li>PDF documents may have varying levels of accessibility</li>
            <li>Some older content may not yet meet all standards</li>
          </ul>
          <p>
            We are actively working to address these limitations and improve accessibility 
            across all content.
          </p>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of the BRIDGE project website. 
            If you encounter any accessibility barriers or have suggestions for improvement, 
            please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@bridge-project.eu">info@bridge-project.eu</a></li>
          </ul>
          <p>
            We aim to respond to accessibility feedback within 5 business days.
          </p>

          <h2>Enforcement Procedure</h2>
          <p>
            If you are not satisfied with our response to your accessibility concern, you 
            may escalate the matter to the relevant national enforcement body in your country.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;
