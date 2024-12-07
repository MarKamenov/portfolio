import React, { useState } from 'react';
import { Button } from "../ui/button"
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.logo}>
          <a href="#home" aria-label="Home">JD</a>
        </div>
        <ul className={`${styles.navLinks} ${isNavOpen ? styles.active : ''}`}>
          <li><a href="#home" onClick={toggleNav}>Home</a></li>
          <li><a href="#about" onClick={toggleNav}>About</a></li>
          <li><a href="#skills" onClick={toggleNav}>Skills</a></li>
          <li><a href="#projects" onClick={toggleNav}>Projects</a></li>
          <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
        </ul>
        <Button
          variant="ghost"
          size="icon"
          className={styles.burger}
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-controls="nav-links"
          aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <div className={`${styles.burgerIcon} ${isNavOpen ? styles.toggle : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Button>
      </nav>
    </header>
  );
};

