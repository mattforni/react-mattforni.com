import './Header.scss';
import LinkedInImage from "../../assets/social/linkedin.png";
import GithubImage from "../../assets/social/github.png";
import StackOverflowImage from "../../assets/social/stackoverflow.png";

/**
 * The SocialLink component renders an icon with a link to the external social network.
 * @returns {JSX.Element} An icon and link representing an external social network.
 */
const SocialLink = (props) => {
  return (
    <div className='SocialLink' onClick={() => window.open(props.link, '_blank')}>
      <img src={props.src} alt={props.name + ' Image'}/>
    </div>
  );
}

/**
 * The Header component represent the main content window in the application.
 * @returns {JSX.Element} The main content of the application.
 */
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
    </div>
  );
}

export default Header;
