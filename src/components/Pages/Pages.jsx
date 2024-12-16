import Navbar from "../common/navbar";
import Home from "../home/home";
import About from "../about/about";
import Skills from "../common/skills";
import Project from "../Project/Project";

export default function Pages() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
    </>
  );
}
