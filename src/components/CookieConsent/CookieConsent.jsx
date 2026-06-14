import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CookieConsent.css';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    functional: false,
  });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mindset-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('mindset-cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('mindset-cookie-consent', JSON.stringify(necessaryOnly));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('mindset-cookie-consent', JSON.stringify(savedPreferences));
    setIsVisible(false);
  };

  const handlePreferenceChange = (key) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div 
      className="cookie-consent" 
      role="dialog" 
      aria-labelledby="cookie-title" 
      aria-describedby="cookie-description"
      aria-modal="true"
    >
      <div className="cookie-consent-container">
        <div className="cookie-content">
          <h2 id="cookie-title" className="cookie-title">
            {t('cookies.title')}
          </h2>
          <p id="cookie-description" className="cookie-description">
            {t('cookies.description')}{' '}
            <Link to="/cookies" className="cookie-link">{t('cookies.cookiePolicy')}</Link>.
          </p>

          {showSettings && (
            <div className="cookie-settings" role="group" aria-label="Cookie preferences">
              <div className="cookie-option">
                <label className="cookie-checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    aria-describedby="necessary-desc"
                  />
                  <span className="checkbox-custom" aria-hidden="true"></span>
                  <span className="cookie-option-text">
                    <strong>{t('cookies.necessaryCookies')}</strong>
                    <span id="necessary-desc" className="cookie-option-desc">
                      {t('cookies.necessaryDesc')}
                    </span>
                  </span>
                </label>
              </div>

              <div className="cookie-option">
                <label className="cookie-checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                    aria-describedby="analytics-desc"
                  />
                  <span className="checkbox-custom" aria-hidden="true"></span>
                  <span className="cookie-option-text">
                    <strong>{t('cookies.analyticsCookies')}</strong>
                    <span id="analytics-desc" className="cookie-option-desc">
                      {t('cookies.analyticsDesc')}
                    </span>
                  </span>
                </label>
              </div>

              <div className="cookie-option">
                <label className="cookie-checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => handlePreferenceChange('functional')}
                    aria-describedby="functional-desc"
                  />
                  <span className="checkbox-custom" aria-hidden="true"></span>
                  <span className="cookie-option-text">
                    <strong>{t('cookies.functionalCookies')}</strong>
                    <span id="functional-desc" className="cookie-option-desc">
                      {t('cookies.functionalDesc')}
                    </span>
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="cookie-actions">
          {!showSettings ? (
            <>
              <button
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowSettings(true)}
              >
                {t('cookies.managePreferences')}
              </button>
              <button
                className="cookie-btn cookie-btn-secondary"
                onClick={handleAcceptNecessary}
              >
                {t('cookies.necessaryOnly')}
              </button>
              <button
                className="cookie-btn cookie-btn-primary"
                onClick={handleAcceptAll}
              >
                {t('cookies.acceptAll')}
              </button>
            </>
          ) : (
            <>
              <button
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowSettings(false)}
              >
                {t('cookies.back')}
              </button>
              <button
                className="cookie-btn cookie-btn-primary"
                onClick={handleSavePreferences}
              >
                {t('cookies.savePreferences')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
