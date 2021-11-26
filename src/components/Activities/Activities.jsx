import './Acitivites.scss';

import github from "../../http/github";
import {useEffect, useState} from "react";

const ACTIVITY_TYPE_GITHUB = 'GitHub';

const Activities = () => {
  const [activities, setActivities] = useState([])

  // Fetch all public events from Github on load
  const [githubSelected, setGithubSelected] = useState(true);
  const [githubActivities, setGithubActivities] = useState(null)
  useEffect(() => {
    github.getPublicEvents()
      .then((response) => {
        // Map each event to a GithubActivity component, then set the state
        const githubActivities = response.data.map((event) => {
          return <GithubActivity key={'GithubEvent-'+event.id} activityType={ACTIVITY_TYPE_GITHUB} event={event}/>
        })
        setGithubActivities(githubActivities)
        setActivities(activities.concat(githubActivities));
      })
  }, []);

  const isLoading = () => {
    return githubActivities == null
  }

  const handleGithubSelectChange = () => {
    debugger;
    const willBeSelected = !githubSelected
    if (willBeSelected) {
      setActivities(activities.concat(githubActivities))
    } else {
      setActivities(activities.filter(activity => activity.props.activityType !== ACTIVITY_TYPE_GITHUB))
    }
    setGithubSelected(willBeSelected)
  }

  return (
    <div className='Activities'>
      <div className='ActivitiesSelect'>
        <div className='ActivitiesSelectTitle'>
          What activities would you like to see?
        </div>
        <div className='ActivitiesSelectCheckbox'>
          <input type='checkbox' checked={githubSelected} onChange={handleGithubSelectChange}/>
          GitHub
        </div>
      </div>

      <div className="ActivitiesList">
        {isLoading() &&
          <div className='Loading'>
            Loading ...
          </div>
        }
        {!isLoading() && activities}
      </div>
    </div>
  )
}

const GithubActivity = (props) => {
  // Destructure event from props
  const { event } = props;
  // Destructure actor and repo from event
  const { actor, repo } = event;

  return (
    <div className='GithubActivity'>
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
