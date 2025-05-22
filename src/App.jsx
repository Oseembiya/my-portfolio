import { lazy } from "react";
import Navbar from "./components/common/navbar";
import Home from "./components/home/home";

// Lazy load non-critical components for better performance
const About = lazy(() => import("./components/about/about"));
const Projects = lazy(() => import("./components/Project/Project"));
const Contact = lazy(() => import("./components/contact/contactMe"));

function App() {
  return (
    <>
      <main>
        <section id="home">
          <Navbar />
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
