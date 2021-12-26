import {Route, Switch} from "react-router-dom";

import './Content.scss';
import About from "../About";
import Activities from "../Activities";
import NationalParks from "../NationalParks";

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

/**
 * The Content component represent the main content window in the application.
 * @returns {JSX.Element} The main content of the application.
 */
const Content = () => {
  return (
    <div className='Content'>
      <Switch>
        <Route exact path='/'>
          <About/>
        </Route>
        <Route path='/activities'>
          <Activities/>
        </Route>
        <Route path='/national-parks'>
          <NationalParks/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
