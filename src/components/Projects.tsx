import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import consultants from '../assets/consultants.png';
import pos from '../assets/pos.png';
import movies from '../assets/movies.png';
import { Button } from "../ui/button"
import styles from './Projects.module.scss';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Product of sale',
    description: 'A full-featured sale management app built with React and TypeScript.',
    image: pos,
    link: 'https://product-sale-mu.vercel.app/',
  },
  {
    title: 'Consultants',
    description: 'A responsive paginated list of consultants app built with Angular.',
    image: consultants,
    link: 'https://v0-consultants-imvn4mwd4ge.vercel.app/home?page=1&per_page=10',
  },
  {
    title: 'Movies',
    description: 'A responsive movie app with filtering using React and TypeScript.',
    image: movies,
    link: 'https://movies-sable-chi.vercel.app/',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <Card key={`${project.title}${index}`} className={styles.projectCard}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={project.image} alt={`Screenshot of ${project.title}`} />
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} project`}>View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

