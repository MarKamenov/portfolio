import { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';
import { BrowserRouter } from 'react-router';


import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainRoutes } from './MainRoutes';
import { AccessibleNavigation } from './components/AccessibleNavigation';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <title>Mariyan Kamenov - Front-End Developer Portfolio</title>
      <meta name="description" content="Mariyan Kamenov is a skilled front-end developer specializing in React, TypeScript, and responsive web design. View his latest projects and get in touch." />
      <meta name="keywords" content="front-end developer, web developer, React, TypeScript, portfolio" />
      <meta property="og:title" content="Mariyan Kamenov - Front-End Developer Portfolio" />
      <meta property="og:description" content="Explore Mariyan Kamenov's front-end development projects and skills." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://github.com/MarKamenov/portfolio" />
      <meta property="og:image" content="https://cdn.prod.website-files.com/6040ba28127600ad9182e1be/67481a5e5fa505c7faac4e7c_pcv.webp" />
      <BrowserRouter>
        <Header />
        <main>
          <AccessibleNavigation />
          <Suspense fallback={<Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperClass={styles.loader}
            visible
          />}>
            <MainRoutes />
          </Suspense>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
