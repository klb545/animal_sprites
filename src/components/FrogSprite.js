import React, { useState, useEffect } from 'react';

const FrogSprite = ({containerHeight, containerWidth, positionX, positionY}) => {

    const transparentPix = <div className="pixel"></div>
    const greenPix = <div className="pixel frog-green-pixel"></div>
    const blackPix = <div className="pixel black-pixel"></div>
    const whitePix = <div className="pixel white-pixel"></div>
    const lightGreenPix = <div className="pixel frog-light-green-pixel"></div>
    const creamPix = <div className="pixel frog-cream-pixel"></div>
    const yellowPix = <div className="pixel frog-yellow-pixel"></div>

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
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}{transparentPix}
            {greenPix}{greenPix}
            {transparentPix}
            {greenPix}{greenPix}{greenPix}{greenPix}{greenPix}
            {transparentPix}
            {/* {transparentPix} */}
        </div>  
        <div>
            {transparentPix}
            {greenPix}
            {whitePix}
            {blackPix}
            {greenPix}
            {lightGreenPix}{lightGreenPix}{lightGreenPix}{lightGreenPix}
            {greenPix}{greenPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}
            {greenPix}
            {blackPix}{blackPix}
            {greenPix}
            {lightGreenPix}{lightGreenPix}
            {creamPix}{creamPix}
            {yellowPix}
            {greenPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}{transparentPix}
            {greenPix}{greenPix}
            {lightGreenPix}
            {blackPix}
            {creamPix}{creamPix}{creamPix}{creamPix}
            {yellowPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}{transparentPix}{transparentPix}
            {lightGreenPix}
            {blackPix}
            {creamPix}{creamPix}{creamPix}{creamPix}
            {yellowPix}
            {transparentPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}{transparentPix}{transparentPix}
            {lightGreenPix}
            {blackPix}
            {creamPix}{creamPix}{creamPix}{creamPix}
            {yellowPix}
            {transparentPix}
            {/* {transparentPix} */}
        </div>  
        <div>
            {transparentPix}{transparentPix}
            {greenPix}{greenPix}
            {lightGreenPix}
            {blackPix}
            {creamPix}{creamPix}{creamPix}{creamPix}
            {yellowPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}
            {greenPix}
            {blackPix}{blackPix}
            {greenPix}
            {lightGreenPix}{lightGreenPix}
            {creamPix}{creamPix}
            {yellowPix}
            {greenPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}
            {greenPix}
            {whitePix}
            {blackPix}
            {greenPix}
            {lightGreenPix}{lightGreenPix}{lightGreenPix}{lightGreenPix}
            {greenPix}{greenPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}{transparentPix}
            {greenPix}{greenPix}
            {transparentPix}
            {greenPix}{greenPix}{greenPix}{greenPix}{greenPix}
            {transparentPix}
            {/* {transparentPix} */}
        </div> 
        <div>
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
            {/* {transparentPix} */}
        </div> 
    </div>
  );
};

export default FrogSprite;



