import React, { useEffect, useState } from 'react';

const DuckSprite = ({containerHeight, containerWidth, positionX, positionY}) => {

    // const [positionX, setPositionX] = useState(150);
    // const [positionY, setPositionY] = useState(150);

    // const moveRight = () => {
    //     if(positionX <= containerWidth - 60){
    //         setPositionX(positionX + 2);
    //     }
    // }
    // const moveLeft = () => {
    //     if(positionX >= 0){
    //         setPositionX(positionX - 2);
    //     }
    // }
    // const moveDown = () => {
    //     if(positionY <= containerHeight - 60){
    //         setPositionY(positionY + 2);
    //     }
    // }
    // const moveUp = () => {
    //     if(positionY >= 0){
    //         setPositionY(positionY - 2);
    //     }
    // }


    // document.body.onkeydown = function(e){
    //     if(selected && e.code === 'ArrowRight'){
    //         moveRight();
    //     }
    //     if(selected && e.code === 'ArrowLeft'){
    //         moveLeft();
    //     }
    //     if(selected && e.code === 'ArrowDown'){
    //         moveDown();
    //     }
    //     if(selected && e.code === 'ArrowUp'){
    //         moveUp();
    //     }
    // }

    const orangePix = <div className="pixel duck-orange-pixel"></div>
    const yellowPix = <div className="pixel duck-yellow-pixel"></div>
    const blackPix = <div className="pixel black-pixel"></div>
    const transparentPix = <div className="pixel"></div>



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
        <div>
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}
            {yellowPix}{yellowPix}{yellowPix}
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
        </div>  
        <div>
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
            {yellowPix}{yellowPix}{yellowPix}{yellowPix}
            {transparentPix}{transparentPix}{transparentPix}
        </div> 
        <div>
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
            {yellowPix}{yellowPix}{yellowPix}{yellowPix}
            {transparentPix}{transparentPix}
        </div> 
        <div>
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
            {yellowPix}{yellowPix}
            {blackPix}
            {yellowPix}{yellowPix}{yellowPix}
            {transparentPix}
        </div> 
        <div>
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
            {yellowPix}{yellowPix}{yellowPix}
            {blackPix}
            {yellowPix}{yellowPix}{yellowPix}
        </div> 
        <div>
            {transparentPix}
            {yellowPix}{yellowPix}{yellowPix}
            {transparentPix}
            {yellowPix}{yellowPix}{yellowPix}{yellowPix}
            {blackPix}
            {yellowPix}{yellowPix}
        </div>  
        <div>
            {yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}
            {blackPix}
            {yellowPix}{yellowPix}
        </div> 
        <div>
            {yellowPix}{yellowPix}
            {blackPix}
            {yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}
            {blackPix}
            {yellowPix}{yellowPix}{yellowPix}
        </div> 
        <div>
            {yellowPix}{yellowPix}{yellowPix}{yellowPix}
            {orangePix}
            {yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}{yellowPix}
            {transparentPix}
        </div> 
        <div>
            {transparentPix}
            {yellowPix}
            {orangePix}{orangePix}{orangePix}
            {transparentPix}
            {yellowPix}{yellowPix}{yellowPix}{yellowPix}
            {transparentPix}{transparentPix}
        </div> 
        <div>
            {transparentPix}{transparentPix}{transparentPix}
            {orangePix}{orangePix}
            {transparentPix}{transparentPix}
            {yellowPix}{yellowPix}
            {transparentPix}{transparentPix}{transparentPix}
        </div> 
        <div>
            {transparentPix}{transparentPix}{transparentPix}
            {orangePix}
            {transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}{transparentPix}
        </div> 
    </div>
  );
};

export default DuckSprite;

