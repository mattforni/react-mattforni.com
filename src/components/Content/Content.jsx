import {Route, Switch} from "react-router-dom";

import './Content.scss';
import About from "../About";
import Activities from "../Activities";

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
          <div className='ContentTitle'>
            About
          </div>
          <div className='ContentContainer'>
            <About />
          </div>
        </Route>
        <Route path='/activities'>
          <div className='ContentTitle'>
            Activities
          </div>
          <div className='ContentContainer'>
            <Activities />
          </div>
        </Route>
        <Route path='*'>
          <div className='ContentTitle'>
            Uh Oh
          </div>
          <div className='ContentContainer'>
            <NotFound />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
