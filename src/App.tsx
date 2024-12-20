import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,

  Hero,
  Navbar,
  Tech,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

import ProjectWork from "./components/sections/ProjectWork";
import Project_heading from "./components/sections/Project_heading";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Project_heading />
        <ProjectWork />
        <Tech />
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
