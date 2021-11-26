import { Link } from 'react-router-dom';

import './Navigation.scss';

const SocialLink = (props) => {
  return (
    <div className='SocialLink' onClick={() => window.open(props.link, '_blank')}>
      <img src={props.src} alt={props.name + ' Image'} />
    </div>
  );
}

const Navigation = () => {
  return (
    <nav className='Navigation' aria-label='main-navigation'>
      <div className='NavigationLinks'>
        <div className='NavigationLink'>
          <Link to='/'>Home</Link>
        </div>
        <div className='NavigationLink'>
          <Link to='/about'>About</Link>
        </div>
        <div className='NavigationLink'>
          <Link to='/activities'>Activities</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
