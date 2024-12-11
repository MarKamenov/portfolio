import { Link, NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

import { useState } from 'react';
import { Button } from "../ui/button"
import styles from './Header.module.scss';
import { cn } from "../lib/utils"
import { useTheme } from 'contexts/ThemeContext';

export const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const toggleNav = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.logo}>
          <Link to="/home" aria-label="Home">JD</Link>
        </div>
        <div className={styles.rightMenu}>
          <ul className={`${styles.navLinks} ${isNavOpen ? styles.active : ''}`}>
            <li><NavLink to="/home" onClick={toggleNav}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleNav}>About</NavLink></li>
            <li><NavLink to="/skills" onClick={toggleNav}>Skills</NavLink></li>
            <li><NavLink to="/projects" onClick={toggleNav}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleNav}>Contact</NavLink></li>
          </ul>
          <div className={styles.headerButtons}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={styles.burger}
              onClick={toggleNav}
              aria-expanded={isNavOpen}
              aria-controls="nav-links"
              aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <div className={cn(styles.burgerIcon, isNavOpen && styles.toggle)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Button>
          </div>
        </div>

      </nav>
    </header>
  );
};