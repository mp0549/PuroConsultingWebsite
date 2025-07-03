import Header from './Header';
import Footer from './Footer';
import '../styles/layout.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
