import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    document.title = 'Puro Consulting | Contact';
  }, []);

  return (
    <div>
      <h1 style={{ color: 'var(--color-primary)' }}>Contact Us</h1>
      <p>Feel free to reach out via email or our contact form. We’re here to help you build the future.</p>
    </div>
  );
}

export default Contact;
