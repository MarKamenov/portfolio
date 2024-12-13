import { Button } from "../ui/button"
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <section id="home" className={styles.home}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1>John Doe</h1>
          <p>Front-End Developer</p>
          <Button asChild>
            <a href="#contact" aria-label="Get in touch">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Home;

