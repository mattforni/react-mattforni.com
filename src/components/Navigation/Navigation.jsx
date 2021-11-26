import { Link } from 'react-router-dom';

import './Navigation.scss';
import GithubImage from '../../assets/social/github.png';
import LinkedInImage from '../../assets/social/linkedin.png';
import StackOverflowImage from '../../assets/social/stackoverflow.png';

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
      <div className='Wordmark' aria-label='wordmark'>
        <Link to='/'>mattforni.com</Link>
      </div>

      <div className='NavigationLinks'>
        <nav>
          <ul>
            <li>
              <Link to='/activities'>Activities</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='SocialLinks'>
        <SocialLink name='LinkedIn'
                    src={LinkedInImage}
                    link='https://www.linkedin.com/in/mattforni/'/>
        <SocialLink name='Github'
                    src={GithubImage}
                    link='https://github.com/mattforni'/>
        <SocialLink name='StackOverflow'
                    src={StackOverflowImage}
                    link='http://stackoverflow.com/users/2861181/mattforni'/>
      </div>
    </nav>
  );
}

export default Navigation;
