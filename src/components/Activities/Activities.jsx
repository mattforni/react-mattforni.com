import './Acitivites.scss';

import github from "../../http/github";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Activities = () => {
  // Fetch all public events from Github on load
  const [githubEvents, setGithubEvents] = useState(null)
  useEffect(() => {
    github.getPublicEvents()
      .then((response) => {
        // Map each event to a GithubEvent component, then set the state
        const githubEvents = response.data.map((event) => {
          return <GithubEvent key={'GithubEvent-'+event.id} event={event}/>
        })
        setGithubEvents(githubEvents)
      })
  }, []);

  const isLoading = () => {
    return githubEvents == null
  }

  return (
    <div className="Activities">
      {isLoading() &&
        <div>
          Loading ...
        </div>
      }
      {githubEvents}
    </div>
  )
}

const GithubEvent = (props) => {
  // Destructure event from props
  const { event } = props;
  // Destructure actor and repo from event
  const { actor, repo } = event;

  return (
    <div className='GithubEvent'>
      <div className='Timestamp'>
        {event.created_at}
      </div>
      <div className='Actor'>
        <img src={actor.avatar_url} alt={actor.login+'-avatar'}/>
        <div className='ActorLogin'>
          {actor.login}
        </div>
      </div>
      <div className='EventType'>
        {event.type}
      </div>
      <div className="Repository">
        <a href={event.repo.url} target='_blank'>
          {event.repo.name}
        </a>
      </div>
    </div>
  )
}

export default Activities;
