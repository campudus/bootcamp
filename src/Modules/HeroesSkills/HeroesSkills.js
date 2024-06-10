import NinjaSkill from "./NinjaSkill"
import BashingBearSkill from './BashingBearSkill'
import HulkSkill from './HulkSkill'
import DesignDoctor from './DesignDoctorSkill'

export default function HeroCards(){
    return(
        <div className='container  d-flex flex-column align-items-center justify-content-center'>
          <div className='row w-55 text-center text-white'  >
            <h2 className="greenLabel">ARM YOUR TEAM WITH YOUR EXTRA SKILLS</h2>
            <span>Choose the caracters and give them your 
                extra skills. Some are already given, but 
                if you have other superpowers feel free to add them.
            </span>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className='row my-2'>
              <NinjaSkill />
          </div>
          <div className='row my-2'>
              <BashingBearSkill />
          </div>
          <div className='row my-2'>
              <HulkSkill />
          </div>
          <div className='row my-2'>
              <DesignDoctor />
          </div>
        </div> 
    )
}