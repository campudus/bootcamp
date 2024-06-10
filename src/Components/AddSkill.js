import './AddSkill.css'
import icon from '../Images/Others/AddSkill.svg'

export default function AddSkill ()  {
    return (
        <div className='row align-items-start'>
            <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" className='addSkillBtn'>
                <title>Oval Green Skills</title>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Card/Asset/Superpower" fill="#104C4F" fill-rule="nonzero">
                        <circle id="Oval-Green-Skills" cx="40" cy="40" r="40"></circle>
                        <text id="plus" font-family="Font Awesome 5 Pro Solid, Font Awesome 5 Pro" font-size="12" font-weight="800" line-spacing="20" letter-spacing="0.375" fill="#FFFFFF">
                        <tspan x="15" y="45">Add Skill</tspan>
                        </text>
                    </g>
                </g>
            </svg>
        </div>
        
    );
  };