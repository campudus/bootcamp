import React, { useEffect, useState } from 'react';
import {ReactComponent as Ninja}  from '../../Images/Heroes/Ninja.svg'; // Path to your character SVG
                                                        
                                                        //Design Doctor.svg

import plusIcon from '../../Images/Heroes/Elements/Plus.svg'; // Path to your plus icon SVG
import minusIcon from '../../Images/Heroes/Elements/Minus.svg';
import valueIcon from '../../Images/Heroes/Elements/Value.svg'

const HeroCard = () => {
    const [count, setCount] = useState(0);
    const [maskHeight, setMaskHeight] = useState();
    const handleIncrease = () => {
        if(count < 7)
            setCount(count + 1);
      };
    
    const handleDecrease = () => {
        if(count > 0)
            setCount(count - 1);
    };
    useEffect(()=>{
        setMaskHeight(100 * (count / 7));
    },[count])
    return (
        <div className='heroCard px-5'>
            <h2 className='text-white'>Fearless frontend ninja</h2>
            <span className='text-white'>With sharp-sighted intuition for aesthetics, your 
            area of operations is the front line. With concept and design, you walk
             into battle to defeat your worst enemy: The Internet Explorer.
            </span >
            
            <div className="custom-element">
                <div>
                    <Ninja  className="col hero-svg"/>
                    <style>
                        {`
                        #maskNinja {
                            height: ${maskHeight}%;
                        }
                        `}
                    </style>
                </div>
                <div>
                    <div className='skillLabel'>
                        <span>Skill Points</span>
                    </div>
                    <div className="circle-container">
                        <div className="left-side">
                            <img src={valueIcon} alt="Center Circle" className=" center-circle" />
                            <span className="label">{count}</span>
                        </div>
                            
                        <div className="right-side">
                            <img src={plusIcon} alt="Increase Circle" className="circle right-circle" onClick={handleIncrease} />
                            <img src={minusIcon} alt="Decrease Circle" className="circle right-circle" onClick={handleDecrease} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
      );
};

export default HeroCard;
