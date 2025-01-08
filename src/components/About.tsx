import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2>About Me</h2>
        <p>I&apos;m a passionate front-end developer with a keen eye for creating engaging and responsive web experiences. With a strong foundation in TypeScript, React, React Native, Angular and modern web technologies, I strive to build user-friendly and visually appealing websites. Partial experience with Node.js/Express for backend development, with a focus on feature development and maintenance
          tasks.</p>
      </div>
    </section>
  );
};
export default About;

