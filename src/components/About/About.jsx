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
  const linkEdwardAbbey = <a href='https://www.goodreads.com/quotes/11895-one-final-paragraph-of-advice-do-not-burn-yourselves-out' target='_blank'>this quote</a>;
  const linkFindForni = <a href='http://findforni.info/' target='_blank'>following my journey</a>;
  const linkGoodbyeGremlin = <a href='https://medium.com/@callmeforni/goodbye-gremlin-hello-world-b119abd3d370' target='_blank'>read my thoughts</a>;

  return (
    <div className='About'>
      <HelloNameTag />
      <div className='AboutContent'>
        <p>
          Well ... kind of. My name is Matthew Fornaciari, but most everyone calls me Forni. I was born in the Bay Area, grew up in LA, studied in Providence, and have lived in Seattle, San Francisco, and now Denver, though I will be leaving the Denver area at the end of March 2022. I consider myself a reluctant technologist and digital minimalist, which means that I try to spend as much time away from screens as I do in front of them. It also means that {linkEdwardAbbey} has slowly but surely become my north star and I very much consider it words to live by. You can check out my Garmin live map if have any interest in {linkFindForni}.
        </p>
        <br/>
        <p>
          I am a technologist by trade and have done stints at {linkAmazon}, {linkSalesforce}, and {linkGremlin}, the latter of which I founded in 2016. I left Gremlin at the end of February 2022 and am currently taking some time to rest and digest that experience before I dive in to the next chapter of my professional life. If your interested in what that journey was like please feel free to {linkGoodbyeGremlin} on my time at Gremlin.
        </p>
      </div>
    </div>
  );
}

export default About;
