import HulkCard from './Heroes/HulkCard';
import BashingBearCard from './Heroes/BashingBearCard';
import NinjaCard from './Heroes/NinjaCard';
import DesignDoctor from './Heroes/DesignDoctor';

export default function HeroCards(){
    return(
        <div className='container  d-flex flex-column align-items-center justify-content-center'>
          <div className='row w-75 text-center'  >
            <h2 className="greenLabel">CHOOSE YOUR CHARACTERS</h2>
            <span className=' text-white'>Distribute 7 skill points on the various classes. This way 
              we can find out the best match for your missions according to your 
              skills and interests. Are you extremely experienced or specialised? 
              Raise the points of your class.
            </span>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className='row my-2'>
            <div className='col'>
              <HulkCard />
            </div>
            <div className='col'>
              <BashingBearCard />
            </div>
          </div>
          <div className='row my-2'>
            <div className='col'>
              <NinjaCard />
            </div>
            <div className='col'>
              <DesignDoctor />
            </div>
          </div>
        </div> 
    )
}