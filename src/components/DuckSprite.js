import React, { useEffect, useState } from 'react';

const DuckSprite = ({containerHeight, containerWidth, positionX, positionY, duckImage}) => {

    const orangePix = <div className="pixel duck-orange-pixel"></div>
    const yellowPix = <div className="pixel duck-yellow-pixel"></div>
    const blackPix = <div className="pixel black-pixel"></div>
    const transparentPix = <div className="pixel"></div>

    const lineOne = <div>
                {transparentPix}{transparentPix}{transparentPix}{transparentPix}
                {yellowPix}{yellowPix}{yellowPix}
                {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
            </div> 
    const lineTwo = <div>
                {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
                {yellowPix}{yellowPix}{yellowPix}{yellowPix}
                {transparentPix}{transparentPix}{transparentPix}
            </div> 
    const lineThree = <div>
                {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
                {yellowPix}{yellowPix}{yellowPix}{yellowPix}
                {transparentPix}{transparentPix}
            </div> 
    const lineFour = <div>
                {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
                {yellowPix}{yellowPix}
                {blackPix}
                {yellowPix}{yellowPix}{yellowPix}
                {transparentPix}
            </div> 
    const lineFive = <div>
                {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
                {yellowPix}{yellowPix}{yellowPix}
                {blackPix}
                {yellowPix}{yellowPix}{yellowPix}
            </div> 
    const lineSix = <div>
                {transparentPix}
                {yellowPix}{yellowPix}{yellowPix}
                {transparentPix}
                {yellowPix}{yellowPix}{yellowPix}{yellowPix}
                {blackPix}
                {yellowPix}{yellowPix}
            </div>  
    const lineSeven = <div>
                {yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}
                {blackPix}
                {yellowPix}{yellowPix}
            </div> 
    const lineEight = <div>
                {yellowPix}{yellowPix}
                {blackPix}
                {yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}
                {blackPix}
                {yellowPix}{yellowPix}{yellowPix}
            </div> 
    const lineNine = <div>
                {yellowPix}{yellowPix}{yellowPix}{yellowPix}
                {orangePix}
                {yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}
                {transparentPix}
            </div> 
    const lineTen = <div>
                {transparentPix}
                {yellowPix}
                {orangePix}{orangePix}{orangePix}
                {transparentPix}
                {yellowPix}{yellowPix}{yellowPix}{yellowPix}
                {transparentPix}{transparentPix}
            </div> 
    const lineEleven = <div>
                {transparentPix}{transparentPix}{transparentPix}
                {orangePix}{orangePix}
                {transparentPix}{transparentPix}
                {yellowPix}{yellowPix}
                {transparentPix}{transparentPix}{transparentPix}
            </div> 
    const lineTwelve = <div>
                {transparentPix}{transparentPix}{transparentPix}
                {orangePix}
                {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
            </div> 

  return (
    <div 
        className='sprite' 
        style={{
            height: "60px", 
            width: "60px", 
            display: "flex",
            position: "absolute",
            left: `${positionX}px`,
            top: `${positionY}px`,
        }}
    >
        {duckImage == "heading right" ? <>{lineOne}{lineTwo}{lineThree}{lineFour}{lineFive}{lineSix}{lineSeven}{lineEight}{lineNine}{lineTen}{lineEleven}{lineTwelve}</> : <>{lineTwelve}{lineEleven}{lineTen}{lineNine}{lineEight}{lineSeven}{lineSix}{lineFive}{lineFour}{lineThree}{lineTwo}{lineOne}</>}
    </div>
  );
};

export default DuckSprite;

