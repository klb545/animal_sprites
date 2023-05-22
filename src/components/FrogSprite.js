import React, { useState, useEffect } from 'react';

const FrogSprite = ({containerHeight, containerWidth, positionX, positionY}) => {

    const transparent = <div className="pixel"></div>
    const green = <div className="pixel frog-green-pixel"></div>
    const black = <div className="pixel black-pixel"></div>
    const white = <div className="pixel white-pixel"></div>
    const lightGreen = <div className="pixel frog-light-green-pixel"></div>
    const cream = <div className="pixel frog-cream-pixel"></div>
    const yellow = <div className="pixel frog-yellow-pixel"></div>

  return (
    <div 
        className='sprite' 
        style={{
            height: "55px", 
            width: "60px", 
            display: "flex", 
            position: "absolute",
            left: `${positionX}px`,
            top: `${positionY}px`,
        }}
    >
        <div>
            {transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{transparent}{green}{green}{transparent}{green}{green}{green}{green}{green}{transparent}
            {/* {transparent} */}
        </div>  
        <div>
            {transparent}{green}{white}{black}{green}{lightGreen}{lightGreen}{lightGreen}{lightGreen}{green}{green}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{green}{black}{black}{green}{lightGreen}{lightGreen}{cream}{cream}{yellow}{green}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{transparent}{green}{green}{lightGreen}{black}{cream}{cream}{cream}{cream}{yellow}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{transparent}{transparent}{lightGreen}{black}{cream}{cream}{cream}{cream}{yellow}{transparent}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{transparent}{transparent}{lightGreen}{black}{cream}{cream}{cream}{cream}{yellow}{transparent}
            {/* {transparent} */}
        </div>  
        <div>
            {transparent}{transparent}{green}{green}{lightGreen}{black}{cream}{cream}{cream}{cream}{yellow}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{green}{black}{black}{green}{lightGreen}{lightGreen}{cream}{cream}{yellow}{green}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{green}{white}{black}{green}{lightGreen}{lightGreen}{lightGreen}{lightGreen}{green}{green}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{transparent}{green}{green}{transparent}{green}{green}{green}{green}{green}{transparent}
            {/* {transparent} */}
        </div> 
        <div>
            {transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}
            {/* {transparent} */}
        </div> 
    </div>
  );
};

export default FrogSprite;
