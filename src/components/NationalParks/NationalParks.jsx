import './NationalParks.scss';

import Parks from './parks.json';

const NationalParks = () => {
  const sortParks = (property, reverse = false) => {
    return Parks.sort((park1, park2) => {
      // Do not modify the order if either park1 or park2 do not have the property
      if (!park1.hasOwnProperty(property) || !park2.hasOwnProperty(property)) return 0;
      // Sort park1 before park2 if the value of the property is less for park1, unless reversed
      if (park1[property] < park2[property]) return !reverse ? -1 : 1;
      // Sort park1 after park2 if the value of the property is greater for park1, unless reverse
      if (park1[property] > park2[property]) return !reverse ? 1 : -1;
      // Otherwise do not modify the order
      return 0;
    })
  }

  return (
    <div className='NationalParks'>
      <div className='ParkStats'>
        Total Parks: {Parks.length}
      </div>
      <div className='ParkStats'>
        Parks Visited: {Parks.filter(park => park.hasOwnProperty('date_visited')).length}
      </div>
      <div className='ParkStats'>
        Parks Remaining: {Parks.filter(park => !park.hasOwnProperty('date_visited')).length}
      </div>
      <div className='ParkStats'>
        Oldest Park: {sortParks('date_established')[0].name}
      </div>
      <div className='ParkStats'>
        Newest Park: {sortParks('date_established', true)[0].name}
      </div>
    </div>
  )
}

export default NationalParks;