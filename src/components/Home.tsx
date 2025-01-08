import { NavLink } from "react-router-dom";
import { Button } from "../ui/button"
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <section id="home" className={styles.home}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1>Mariyan Kamenov</h1>
          <p>Front-End Developer</p>
          <Button asChild>
            <NavLink to="/contact">Get in touch</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Home;

