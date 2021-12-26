import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  return (
    <div className='Navigation'>
      <input type='checkbox' className='NavigationToggleCheckbox' id='NavigationToggleCheckbox'/>
      <label htmlFor='NavigationToggleCheckbox' className='NavigationToggleIcon'>
        <div className='NavigationToggleIconPart NavigationToggleIconTopLine'></div>
        <div className='NavigationToggleIconPart NavigationToggleIconMiddleLine'></div>
        <div className='NavigationToggleIconPart NavigationToggleIconBottomLine'></div>
      </label>
      <nav className='Navigation' aria-label='main-navigation'>
        <div className='NavigationLinks'>
          <div className='NavigationLink'>
            <Link to='/'>Home</Link>
          </div>
          <div className='NavigationLink'>
            <Link to='/activities'>Activities</Link>
          </div>
          <div className='NavigationLink'>
            <Link to='/national-parks'>National Parks</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;
