import React, { useEffect, useState } from 'react';

const DuckSprite = ({containerHeight, containerWidth}) => {

    const [positionX, setPositionX] = useState(150);
    const [positionY, setPositionY] = useState(150);

    const moveRight = () => {
        if(positionX <= containerWidth - 60){
            setPositionX(positionX + 2);
        }
    }
    const moveLeft = () => {
        if(positionX >= 0){
            setPositionX(positionX - 2);
        }
    }
    const moveDown = () => {
        if(positionY <= containerHeight - 60){
            setPositionY(positionY + 2);
        }
    }
    const moveUp = () => {
        if(positionY >= 0){
            setPositionY(positionY - 2);
        }
    }


    document.body.onkeydown = function(e){
        if(e.code === 'ArrowRight'){
            moveRight();
        }
        if(e.code === 'ArrowLeft'){
            moveLeft();
        }
        if(e.code === 'ArrowDown'){
            moveDown();
        }
        if(e.code === 'ArrowUp'){
            moveUp();
        }
    }


  return (
    <div 
        className='sprite' 
        style={{
            height: "50px", 
            width: "50px", 
            display: "flex", 
            // alignItems: "center", 
            // justifyContent: "center", 
            position: "absolute",
            left: `${positionX}px`,
            top: `${positionY}px`,
        }}
    >
                <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
            </div>  
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
            </div>  
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(246,105,4)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(246,105,4)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(246,105,4)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(246,105,4)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(246,105,4)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(246,105,4)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "#F6C904"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(246,105,4)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
            </div> 
    </div>
  );
};

export default DuckSprite;



