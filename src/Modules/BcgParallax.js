import bcgHead from '../Images/Background/Background_1920x2414 solo.jpg'
import bcgFull from '../Images/Background/Bcg.png'
import stars from  '../Images/Background/Stars/PlanetsStarsGroup.svg'
import { Parallax } from 'react-scroll-parallax';


function BcgParallax () {
  return (
    <div style={{ position: 'relative' }}>
      <Parallax speed={20}>
        <img 
          src={bcgFull} 
          alt="Background" 
          className='bcg-full'
        />
      </Parallax>
      <Parallax speed={20}>
        <img 
          src={bcgHead} 
          alt="Background" 
          className='bcg-head'
        />
      </Parallax>
      <Parallax speed={-20}>
        <img 
          src={stars} 
          alt="Stars" 
          className='bcg-stars'
        />
      </Parallax>
    </div>
  );
};

export default BcgParallax