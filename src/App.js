import React from 'react';
import './App.css';

// Import social images
import GithubImage from './assets/social/github.png';
import LinkedInImage from './assets/social/linkedin.png';
import StackOverflowImage from './assets/social/stackoverflow.png';

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SocialLink" onClick={() => window.open(this.props.link, "_blank")}>
        <img src={this.props.src} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
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
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
