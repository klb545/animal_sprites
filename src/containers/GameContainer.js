import { useState, useEffect } from "react";
import SelectedSprite from "../components/SelectedSprite";

const GameContainer = () => {
    const [containerWidth, setContainerWidth] = useState(500);
    const [containerHeight, setContainerHeight] = useState(500);
    const [selectedAnimal, setSelectedAnimal] = useState("duck");

    // document.body.onkeydown = function(e){
    //     if(e.code == "Space"){ 
    //         setDuckSelected(prevState => !prevState);
    //         setFrogSelected(prevState => !prevState);
    //     }
    // }

    const [positionX, setPositionX] = useState(150);
    const [positionY, setPositionY] = useState(150);

    const moveRight = () => {
        if(positionX <= containerWidth - 70){
            setPositionX(positionX + 10);
        }
    }
    const moveLeft = () => {
        if(positionX >= 10){
            setPositionX(positionX - 10);
        }
    }
    const moveDown = () => {
        if(positionY <= containerHeight - 70){
            setPositionY(positionY + 10);
        }
    }
    const moveUp = () => {
        if(positionY >= 10){
            setPositionY(positionY - 10);
        }
    }

    document.body.onkeydown = function(e){
        if(selectedAnimal && e.code === 'ArrowRight'){
            moveRight();
        }
        if(selectedAnimal && e.code === 'ArrowLeft'){
            moveLeft();
        }
        if(selectedAnimal && e.code === 'ArrowDown'){
            moveDown();
        }
        if(selectedAnimal && e.code === 'ArrowUp'){
            moveUp();
        }
    }

    const handleSpaceBarToggle = (e) => {
        if (e.code === 'Space') {
            if(selectedAnimal=="duck"){
                setSelectedAnimal("frog");
            }
            if(selectedAnimal=="frog"){
                setSelectedAnimal("fish");
            }
            if(selectedAnimal=="fish"){
                setSelectedAnimal("duck");
            }
        }
    };

    useEffect(() => {
        document.body.addEventListener('keydown', handleSpaceBarToggle);
        // this is a 'cleanup' function - it removes the event listener
        return () => {
            document.body.removeEventListener('keydown', handleSpaceBarToggle);
        }
    }, [selectedAnimal]);

    return ( 
        <div className="game-container" style={{height: `${containerHeight}px`, width: `${containerWidth}px`}}>
            <SelectedSprite containerHeight={containerHeight} containerWidth={containerWidth} selectedAnimal={selectedAnimal} positionX={positionX} positionY={positionY}/>
        </div>
     );
}
 
export default GameContainer;

