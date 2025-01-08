import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Mariyan Kamenov. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/MarKamenov" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mariyan-kamenov-069b75334/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

