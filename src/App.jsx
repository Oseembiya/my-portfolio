import { Suspense, lazy } from "react";
import Navbar from "./components/common/navbar";
import Home from "./components/home/home";

// Lazy load non-critical components for better performance
const About = lazy(() => import("./components/about/about"));
const Projects = lazy(() => import("./components/Project/Project"));
const Contact = lazy(() => import("./components/contact/contactMe"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="section-loading">
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  return (
    <>
      <main>
        <section id="home">
          <Navbar />
          <Home />
        </section>

        <Suspense fallback={<LoadingFallback />}>
          <section id="about">
            <About />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <section id="projects">
            <Projects />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
    </>
  );
}

export default App;
