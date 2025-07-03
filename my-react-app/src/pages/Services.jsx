import { useEffect } from 'react';

function Services() {
  useEffect(() => {
    document.title = 'Puro Consulting | Services';
  }, []);

  return (
    <div>
      <h1 style={{ color: 'var(--color-primary)' }}>Our Services</h1>
      <ul>
        <li>Custom Software Development</li>
        <li>Cloud Migration & Infrastructure</li>
        <li>IT Strategy Consulting</li>
        <li>System Integration</li>
      </ul>
    </div>
  );
}

export default Services;
