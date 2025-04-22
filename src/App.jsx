import Navbar from "./components/common/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/Project/Project";
import Contact from "./components/contact/contactMe";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
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
