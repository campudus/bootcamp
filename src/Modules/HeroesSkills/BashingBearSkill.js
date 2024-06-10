import React, { useState } from 'react';
import {ReactComponent as Bear} from '../../Images/Heroes/Bashing Bear.svg'; // Path to your character SVG
import SkillBtn from './SkillBtn';
import icon from '../../Images/Others/sketch.svg'
import AddSkill from '../../Components/AddSkill';

 export default function NinjaSkill() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
 
    return(
        <div className='container  w-50'>
            <div className='row'>
                <h2 className='text-white'>Bashing backend bear</h2>
            </div>
            <div className='row '>
                <div className='col'>
                        <Bear/>
                </div>
                <div className='col'>
                    <div>
                        <span  className='text-white'>Skills</span>
                    </div>
                    <br/>
                    <div className='d-flex justify-content-start align-items-center'>
                        <div className='col-2'>
                            <img src={icon} className='skill-slider-icon' />
                        </div>
                        <div className='col-10 mx-3'>
                            <input type="range" class="slider" step='any' id="customRange1" value={value1} onChange={(e) => setValue1(e.target.value)}/>
                            {/* <Slider value={value1} onChange={(e) => setValue1(e.value)} className='slider'/> */}
                        </div>
                    </div>
                    <br/>
                    <div className='d-flex justify-content-start align-items-center'>
                        <div className='col-2'>
                            <img src={icon} className='skill-slider-icon' />
                        </div>
                        <div className='col-10 mx-3'>
                            <input type="range" class="slider" id="customRange1" value={value2} onChange={(e) => setValue2(e.target.value)}/>
                        </div>
                    </div>
                    <br/>
                    <div className='d-flex justify-content-start align-items-center'>
                        <div className='col-2'>
                            <img src={icon} className='skill-slider-icon' />
                        </div>
                        <div className='col-10 mx-3'>
                            <input type="range" class="slider" id="customRange1" value={value3} onChange={(e) => setValue3(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row p-0'>
                <div className='skill-grid'>
                    
                        <SkillBtn/>
                        <SkillBtn/>
                        <SkillBtn/>
                        <SkillBtn/>
                        <AddSkill/>
                </div>
                
            </div>
        </div>
    )
}