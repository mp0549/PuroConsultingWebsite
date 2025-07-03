import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="branding">
        <a href="/" className="logo-link">
          <img src="public/assets/purologo.png" alt="Puro Consulting logo" className="logo"/>
        </a>
        <h2>Puro Consulting</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
