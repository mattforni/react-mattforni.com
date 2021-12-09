import './About.scss';

const HelloNameTag = () => {
  return (
    <div className='HelloNameTag'>
      <div className='HelloNameTagHeader'>
        Hello
        <div className='HelloNameTagSubHeader'>
          my name is
        </div>
      </div>
      <div className='HelloNameTagName'>
        Forni
      </div>
    </div>
  );
}

const About = () => {
  const linkAmazon = <a href='https://amazon.com' target='_blank' class='LinkAmazon'>Amazon</a>;
  const linkGremlin = <a href='https://gremlin.com' target='_blank' class='LinkGremlin'>Gremlin</a>;
  const linkSalesforce = <a href='https://salesforce.com' target='_blank' class='LinkSalesforce'>Salesforce</a>;
  const linkEdwardAbbey = <a href='https://www.goodreads.com/quotes/11895-one-final-paragraph-of-advice-do-not-burn-yourselves-out' target='_blank'>Edward Abbey</a>
  const linkFindForni = <a href='http://findforni.info/' target='_blank'>follow my journey</a>
  return (
    <div className='About'>
      <HelloNameTag />
      <div className='AboutContent'>
        <p>
          Well ... kind of. My name is Matthew Fornaciari, but most everyone calls me Forni. I was born in the Bay Area, grew up in LA, studied in Providence, and have lived in Seattle, San Francisco, and now Denver. I consider myself equal parts technologist and digital minimalist, which means that I try to spend as much time away from screens as I do in front of them.
        </p>
        <br/>
        <p>
          I started my career at {linkAmazon}, initially on the Availability Team, before founding the Fatals Team, which was tasked with tracking and reducing server errors across Amazon.com. After a few years I moved to San Francisco and spent some time at {linkSalesforce} improving the performance and overall experience of the core product. In January of 2016 I founded {linkGremlin} with a good friend of mine, where I have worn more hats that I can count, but have always held the role of Chief Technology Officer.
        </p>
        <br/>
        <p>
          When I'm not working I can usually be found outside or on the road, doing my best to embody one of my favorite passages from {linkEdwardAbbey}. My trusty Garmin makes it easy for anyone to {linkFindForni}.
        </p>
      </div>
    </div>
  );
}

export default About;
