import { useState, useEffect } from "react";
import DuckSprite from "../components/DuckSprite";
import FrogSprite from "../components/FrogSprite";
import SelectedSprite from "../components/SelectedSprite";

const GameContainer = () => {
    const [containerWidth, setContainerWidth] = useState(500);
    const [containerHeight, setContainerHeight] = useState(500);
    // const [duckSelected, setDuckSelected] = useState(true);
    // const [frogSelected, setFrogSelected] = useState(false);
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



    const handleKeyDown = (e) => {
        if (e.code === 'Space') {
            // setDuckSelected(prevState => !prevState);
            // setFrogSelected(prevState => !prevState);
            if(selectedAnimal=="duck"){
                setSelectedAnimal("frog");
            }
            if(selectedAnimal=="frog"){
                setSelectedAnimal("duck");
            }
        }
    };

    useEffect(() => {
        
        document.body.addEventListener('keydown', handleKeyDown);
        // Clean up the event listener when the component unmounts
        return () => {
            document.body.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);


    return ( 
        <div className="game-container" style={{height: `${containerHeight}px`, width: `${containerWidth}px`}}>
            {/* <FrogSprite containerHeight={containerHeight} containerWidth={containerWidth} selected={frogSelected} positionX={positionX} positionY={positionY}/>
            <DuckSprite containerHeight={containerHeight} containerWidth={containerWidth} selected={duckSelected} positionX={positionX} positionY={positionY}/> */}
            <SelectedSprite containerHeight={containerHeight} containerWidth={containerWidth} selectedAnimal={selectedAnimal} positionX={positionX} positionY={positionY}/>
        </div>
     );
}
 
export default GameContainer;















