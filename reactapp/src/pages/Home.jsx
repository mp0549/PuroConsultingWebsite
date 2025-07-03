import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);

  useEffect(() => {
    document.title = 'Puro Consulting | Home';
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Empowering Your Business with Tailored IT Solutions</h1>
        <p>At Puro Consulting, we combine strategy and technology to deliver reliable, scalable, and secure systems that drive growth.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* About Preview */}
      <motion.section
        ref={aboutRef}
        className="about-preview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onClick={() => navigate('/about')}
      >
        <h2>About Puro Consulting</h2>
        <p>Click here to learn more about how we help businesses grow with technology-driven solutions.</p>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        className="services-preview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What We Do</h2>
        <div className="service-grid">
          {[
            { title: 'Custom Software', desc: 'Tailored applications for your business' },
            { title: 'Cloud Consulting', desc: 'Scale your infrastructure securely' },
            { title: 'IT Strategy', desc: 'Plan your tech stack with confidence' },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              onClick={() => navigate('/services')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Preview */}
      <motion.section
        className="contact-preview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.section>
    </div>
  );
}

export default Home;
