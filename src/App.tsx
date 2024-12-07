import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import styles from './App.module.scss';
import './styles/globals.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <title>John Doe - Front-End Developer Portfolio</title>
      <meta name="description" content="John Doe is a skilled front-end developer specializing in React, TypeScript, and responsive web design. View his latest projects and get in touch." />
      <meta name="keywords" content="front-end developer, web developer, React, TypeScript, portfolio" />
      <meta property="og:title" content="John Doe - Front-End Developer Portfolio" />
      <meta property="og:description" content="Explore John Doe's front-end development projects and skills." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://johndoe-portfolio.com" />
      <meta property="og:image" content="https://johndoe-portfolio.com/og-image.jpg" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

