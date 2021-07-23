// Import social images
import GithubImage from './assets/social/github.png';
import LinkedInImage from './assets/social/linkedin.png';
import StackOverflowImage from './assets/social/stackoverflow.png';

const SocialLink = (props) => {
  return (
    <div className="SocialLink" onClick={() => window.open(props.link, "_blank")}>
      <img src={props.src} alt={props.name + " Image"} />
    </div>
  );
}

export const Header = () => {
  return (
    <div className="Header">
      <SocialLink name="LinkedIn"
        src={LinkedInImage}
        link="https://www.linkedin.com/in/mattforni/"
      />
      <SocialLink name="Github"
        src={GithubImage}
        link="https://github.com/mattforni"
      />
      <SocialLink name="StackOverflow"
        src={StackOverflowImage}
        link="http://stackoverflow.com/users/2861181/mattforni"
      />
    </div>
  );
}
