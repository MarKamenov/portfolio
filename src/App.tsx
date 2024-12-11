import { lazy, Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import { BrowserRouter, Route, Routes } from 'react-router';
// lazy imports
const HomePage = lazy(() => import('./components/Home')) as React.LazyExoticComponent<() => JSX.Element>;
const AboutPage = lazy(() => import('./components/About')) as React.LazyExoticComponent<() => JSX.Element>;
const SkillsPage = lazy(() => import('./components/Skills')) as React.LazyExoticComponent<() => JSX.Element>;
const ProjectsPage = lazy(() => import('./components/Projects')) as React.LazyExoticComponent<() => JSX.Element>;
const ContactPage = lazy(() => import('./components/Contact')) as React.LazyExoticComponent<() => JSX.Element>;

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <title>John Doe - Front-End Developer Portfolio</title>
      <meta name="description" content="John Doe is a skilled front-end developer specializing in React, TypeScript, and responsive web design. View his latest projects and get in touch." />
      <meta name="keywords" content="front-end developer, web developer, React, TypeScript, portfolio" />
      <meta property="og:title" content="John Doe - Front-End Developer Portfolio" />
      <meta property="og:description" content="Explore John Doe's front-end development projects and skills." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://johndoe-portfolio.com" />
      <meta property="og:image" content="https://johndoe-portfolio.com/og-image.jpg" />
      <BrowserRouter>
        <Header />
        <main>
          <Suspense fallback={<Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperClass={styles.loader}
            visible
          />}>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<div>404: Not Found</div>} />
            </Routes>
          </Suspense>

        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
