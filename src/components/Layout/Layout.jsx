import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SkipLink from '../SkipLink/SkipLink';
import './Layout.css';

const Layout = () => {
  console.log("[v0] Layout component rendering");
  return (
    <div className="layout">
      <SkipLink />
      <Header />
      <main id="main-content" className="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
