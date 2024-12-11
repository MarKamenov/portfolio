import { Badge } from "../ui/badge"
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
  const skills: string[] = ['TypeScript', 'React', 'HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Responsive Design', 'Git'];

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>Skills</h2>
        <ul className={styles.skillsList} aria-label="List of skills">
          {skills.map((skill, index) => (
            <li key={index}>
              <Badge variant="secondary">{skill}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Skills;

