import { lazy } from 'react';
import { Route, Routes } from 'react-router';

// lazy imports
const HomePage = lazy(() => import('./components/Home')) as React.LazyExoticComponent<() => JSX.Element>;
const AboutPage = lazy(() => import('./components/About')) as React.LazyExoticComponent<() => JSX.Element>;
const SkillsPage = lazy(() => import('./components/Skills')) as React.LazyExoticComponent<() => JSX.Element>;
const ProjectsPage = lazy(() => import('./components/Projects')) as React.LazyExoticComponent<() => JSX.Element>;
const ContactPage = lazy(() => import('./components/Contact')) as React.LazyExoticComponent<() => JSX.Element>;

export const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<div>404: Not Found</div>} />
        </Routes>
    )
}