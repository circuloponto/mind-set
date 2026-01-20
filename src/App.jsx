import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CookieConsent from './components/CookieConsent/CookieConsent';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Objectives from './pages/Objectives/Objectives';
import TargetGroups from './pages/TargetGroups/TargetGroups';
import Activities from './pages/Activities/Activities';
import Results from './pages/Results/Results';
import Partners from './pages/Partners/Partners';
import News from './pages/News/News';
import Contacts from './pages/Contacts/Contacts';
import Privacy from './pages/Privacy/Privacy';
import Cookies from './pages/Cookies/Cookies';
import Accessibility from './pages/Accessibility/Accessibility';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="objectives" element={<Objectives />} />
          <Route path="target-groups" element={<TargetGroups />} />
          <Route path="activities" element={<Activities />} />
          <Route path="results" element={<Results />} />
          <Route path="partners" element={<Partners />} />
          <Route path="news" element={<News />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="accessibility" element={<Accessibility />} />
        </Route>
      </Routes>
      <CookieConsent />
    </Router>
  );
}

export default App;
