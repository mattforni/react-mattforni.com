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
  return (
    <div className='About'>
      <HelloNameTag />
      <div className='AboutContent'>
        <p>
          Well ... kind of. My name is Matthew Fornaciari, but most everyone calls me Forni. I was born in the Bay Area, grew up in LA, studied in Providence, and have lived in in Seattle, San Francisco, and now Denver. I consider myself equal parts technologist and digital minimalist, which means that I try to spend as much time away from screens as I do in front of them.
        </p>
        <br/>
        <p>
          I started my career at {linkAmazon}, initially on the Availability Team, before founding the Fatals Team, which was tasked with tracking and reducing server errors across Amazon.com. After a few years I moved to San Francisco and spent some time at {linkSalesforce} improving the performance and overall experience of the core product. In January of 2016 I founded {linkGremlin} with a good friend of mine, where I have worn too many hats to count, but have always held the role of Chief Technology Officer.
        </p>
        <br/>
        <p>
          When I'm not working I can usually be found outside, doing my best to embody one of my favorite passages from {linkEdwardAbbey}:
        </p>
        <br/>
        <p className='QuoteEdwardAbbey'>
          “One final paragraph of advice: do not burn yourselves out. Be as I am - a reluctant enthusiast....a part-time crusader, a half-hearted fanatic. Save the other half of yourselves and your lives for pleasure and adventure. It is not enough to fight for the land; it is even more important to enjoy it. While you can. While it’s still here. So get out there and hunt and fish and mess around with your friends, ramble out yonder and explore the forests, climb the mountains, bag the peaks, run the rivers, breathe deep of that yet sweet and lucid air, sit quietly for a while and contemplate the precious stillness, the lovely, mysterious, and awesome space. Enjoy yourselves, keep your brain in your head and your head firmly attached to the body, the body active and alive, and I promise you this much; I promise you this one sweet victory over our enemies, over those desk-bound men and women with their hearts in a safe deposit box, and their eyes hypnotized by desk calculators. I promise you this; You will outlive the bastards.”
        </p>
      </div>
    </div>
  );
}

export default About;
