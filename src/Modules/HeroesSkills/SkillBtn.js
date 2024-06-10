import skillCircle from '../../Images/Others/OvalSkills.svg'; // Path to your character SVG
import StarIcon from '../../Components/StarIcon';
import FavIcon from '../../Components/FavIcon'; 


//style={{ color: '#10C1C5' }}
export default function SkillBtn(){

    return(
        <div>
        <div className='row'>
            <img src={skillCircle} />
        </div>
        <div className='row my-2'>
            <div className='d-flex justify-content-center'>
                <StarIcon />
                <FavIcon/>
            </div>
        </div>
        </div>
        
    )
}