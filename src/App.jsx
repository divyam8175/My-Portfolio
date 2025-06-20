import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Coding from "./components/codingplatforms";
import Pro from "./components/Project";
import Contact from "./components/Contact";
import Study from "./components/Study";
import Aos from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Study />
        <Coding />
        <Skill />
        <Pro />
        <Contact />
      </div>
    </>
  );
};

export default App;
