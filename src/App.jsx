import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/Navbar";
import About1 from "./Components/About-1";
import About2 from "./Components/About-2";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import MyDetails from "./Components/Details";
import { useEffect } from "react";
import SkillsSection from "./Components/Skills";
import Experience from "./Components/Experience";
import Services from "./Components/Services";
import WhyWorkWithMe from "./Components/WhyWorkWithMe";
import Process from "./Components/Process";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigationBar />

      <Intro />

      <About1 />
      <About2 />

      <Services />

      <Projects />

      <WhyWorkWithMe />

      <Process />

      <Experience />

      <SkillsSection />

      <MyDetails />
    </div>
  );
}

export default App;
