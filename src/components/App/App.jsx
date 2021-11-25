import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';

import About from '../About';
import Activities from "../Activities";
import Header from '../Header';
import Home from '../Home';

// Set the title of the document
document.title = "mattforni.com";

/**
 * App is the top-level component in this application.
 * @returns {JSX.Element} The top-level component in this application.
 */
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/**
 * The NotFound component is displayed when the provided path has no match.
 * @returns {JSX.Element} A very simple component that indicates the route is not found.
 */
const NotFound = () => {
  return (
    <div>
      <h1>
        Not Found
      </h1>
    </div>
  )
}
