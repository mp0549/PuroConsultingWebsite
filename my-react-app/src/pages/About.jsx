import { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = 'Puro Consulting | About';
  }, []);

  return (
    <div>
      <h1 style={{ color: 'var(--color-primary)' }}>About Us</h1>
      <p>Puro Consulting is dedicated to delivering tailored IT solutions with a personal touch. We empower businesses through technology.</p>
    </div>
  );
}

export default About;
