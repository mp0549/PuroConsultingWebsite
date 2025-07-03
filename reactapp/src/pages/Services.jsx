import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const placeholderImages = [
  'https://source.unsplash.com/600x400/?technology',
  'https://source.unsplash.com/600x400/?cloud,server',
  'https://source.unsplash.com/600x400/?software,code',
  'https://source.unsplash.com/600x400/?cybersecurity,lock',
  'https://source.unsplash.com/600x400/?business,consulting',
  'https://source.unsplash.com/600x400/?data,analytics',
];

function Services() {
  useEffect(() => {
    document.title = 'Puro Consulting | Services';
  }, []);

  const services = [
    {
      title: 'AI-Powered Solutions',
      desc: 'Leverage machine learning and AI to automate operations, optimize customer experience, and gain competitive insights.',
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Build scalable, resilient cloud environments with modern DevOps workflows for faster, safer deployments.',
    },
    {
      title: 'Custom Enterprise Software',
      desc: 'Tailored software platforms to support your business logic, workflows, and integration needs.',
    },
    {
      title: 'Cybersecurity & Risk Management',
      desc: 'Protect your infrastructure and data with expert security audits, policies, and threat detection.',
    },
    {
      title: 'Digital Transformation Consulting',
      desc: 'Reimagine your business through technology: automation, modernization, and improved user experience.',
    },
    {
      title: 'Data Engineering & Analytics',
      desc: 'Structure and pipeline your data for actionable insights, dashboards, and strategic decision-making.',
    },
  ];

  const [flippedCards, setFlippedCards] = useState(Array(services.length).fill(false));

  const handleFlip = (index) => {
    setFlippedCards((prev) =>
      prev.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  return (
    <div className="services-page">
      <motion.h1
        className="services-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Capabilities
      </motion.h1>

      <motion.p
        className="services-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Tap into modern technology with our full-service IT consulting offerings.
      </motion.p>

      <div className="flip-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <motion.div
              className="flip-card-inner"
              animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front */}
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${placeholderImages[index % placeholderImages.length]})`,
                }}
              >
                <div className="overlay">
                  <h2>{service.title}</h2>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <p>{service.desc}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
