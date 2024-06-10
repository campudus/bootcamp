import React, { useEffect, useState } from 'react';
import {ReactComponent as MyIcon}  from '../../Images/Heroes/Bashing Bear.svg'; // Path to your character SVG
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
            <h2 className='text-white'>Bashing Backend bear</h2>
            <span className='text-white'>With keyboard and terminal you hack bugs up 
            as if there was no tomorrow. The mouse is used only duringemergencies
             and you save the day when the frontend needs heavy weapons.
            </span >
            
            <div className="custom-element">
                <div>
                    <MyIcon className="col hero-svg"/>
                    <style>
                        {`
                        #maskBear {
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
