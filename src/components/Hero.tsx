import React from 'react';
import { Button } from "../ui/button"
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <h1>John Doe</h1>
        <p>Front-End Developer</p>
        <Button asChild>
          <a href="#contact" aria-label="Get in touch">Get in touch</a>
        </Button>
      </div>
    </section>
  );
};

