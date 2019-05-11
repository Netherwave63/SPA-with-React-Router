import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import Home from "../Home/Home.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Post from "../Post/Post.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/:id" component={ Post } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
