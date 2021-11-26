import './About.scss';

const About = () => {
  return (
    <div className='About'>
      <div className='AboutTitle'>
        <div className='AboutSubTitle'>
          A Bit About
        </div>
        <div className='AboutSubTitle Name'>
          Forni
        </div>
      </div>
      <div className='AboutContent'>
        My name is Matthew Fornaciari, but most everyone calls me Forni. It's a nickname from a while back of which I can no longer recall the origin, though something tells me it has to do with the fact that no one can pronounce Fornaciari. I was born in the Bay Area, grew up in LA, studied in Providence, have worked in Seattle and SF, and now live in Denver. I consider myself equal parts technologist and digital minimalist, meaning that I try to spend as much time away from screens as I do in front of them. It is challenging in this day and age, but over time I have found myself to be healthier and happier when I spend my time that way.
      </div>
    </div>
  );
}

export default About;
