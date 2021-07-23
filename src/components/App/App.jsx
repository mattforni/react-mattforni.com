import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';

import Header from '../Header';
import Home from '../Home';

// Set the title of the document
document.title = "mattforni.com";

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
          <Route path="*">
            <NotFound />
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

const NotFound = () => {
  return (
    <div>
      <h1>
        Not Found
      </h1>
    </div>
  )
}
