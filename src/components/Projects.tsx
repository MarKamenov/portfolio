import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
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
    title: 'TypeScript Task Manager',
    description: 'A full-featured task management application built with React and TypeScript.',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Responsive E-commerce Site',
    description: 'A responsive e-commerce website built with Next.js and TypeScript.',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
  {
    title: 'Interactive Data Visualization',
    description: 'An interactive data visualization project using D3.js and TypeScript.',
    image: 'https://via.placeholder.com/300x200',
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <Card key={index} className={styles.projectCard}>
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

