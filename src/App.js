import React from 'react';
import './App.css';
import { Header } from './Header.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Set the title of the document
document.title = "mattforni.com";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const About = () => {
  return (
    <div>
      <h1>
        About
      </h1>
    </div>
  );
}
