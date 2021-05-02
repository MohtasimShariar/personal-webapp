import React from "react";
import Home from "./components/Home/Home/Home"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/pages/about/about";
import Blogs from "./components/pages/Blogs/Blogs";
import ContactUs from "./components/pages/contact-form/contact-form";
import Projects from "./components/pages/LatestProjects/LatestProjects";
import Skills from "./components/pages/skills/skills";


function App ()  {
  return (
    <Router>
      
      <Switch>
        
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route exact path="/contact-form">
        <ContactUs></ContactUs>
        </Route>
        <Route exact path="/projects">
          <Projects></Projects>
        </Route>
        <Route exact path="/skills">
         <Skills></Skills>
        </Route>
      </Switch>
    </Router>
    
  );
};

export default App;
