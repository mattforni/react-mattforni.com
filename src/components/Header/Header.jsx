import { Link } from 'react-router-dom';

import './Header.scss';
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

const Header = () => {
  return (
    <div className='Header'>
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

      <div className='Navigation'>
        <nav>
          <ul>
            <li>
              <Link to='/activities'>Activities</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='Wordmark'>
        <Link to='/'>mattforni.com</Link>
      </div>
    </div>
  );
}

export default Header;
