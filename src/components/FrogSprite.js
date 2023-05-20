import React, { useState } from 'react';

const FrogSprite = ({containerHeight, containerWidth}) => {

    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);

    const moveRight = () => {
        if(positionX <= containerWidth - 60){
            setPositionX(positionX + 1);
        }
    }
    const moveLeft = () => {
        if(positionX >= 0){
            setPositionX(positionX - 1);
        }
    }
    const moveDown = () => {
        if(positionY <= containerHeight - 59){
            setPositionY(positionY + 1);
        }
    }
    const moveUp = () => {
        if(positionY >= 0){
            setPositionY(positionY - 1);
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
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div>  
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "white"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(244,220,3)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(244,220,3)"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(244,220,3)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
            <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(244,220,3)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div>  
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(244,220,3)"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(241,235,155)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "gold"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
            <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "white"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "black"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "rgb(66,176,41)"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "green"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
            <div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div>
                {/* <div style={{height: "5px", width: "5px", backgroundColor: "transparent"}}></div> */}
            </div> 
    </div>
  );
};

export default FrogSprite;














