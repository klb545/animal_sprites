import { useState, useEffect } from "react";
import SelectedSprite from "../components/SelectedSprite";
import FishSprite from "../components/FishSprite";
import FrogSprite from "../components/FrogSprite";
import DuckSprite from "../components/DuckSprite";

const GameContainer = () => {
    const [containerWidth, setContainerWidth] = useState(500);
    const [containerHeight, setContainerHeight] = useState(500);

    const [selectedAnimal, setSelectedAnimal] = useState("duck");

    const [fishImage, setFishImage] = useState("heading right");
    const [duckImage, setDuckImage] = useState("heading left");

    const [fishPositionX, setFishPositionX] = useState(100);
    const [fishPositionY, setFishPositionY] = useState(100);
    const [frogPositionX, setFrogPositionX] = useState(150);
    const [frogPositionY, setFrogPositionY] = useState(150);
    const [duckPositionX, setDuckPositionX] = useState(200);
    const [duckPositionY, setDuckPositionY] = useState(200);

    const moveRight = () => {
            if(selectedAnimal=="fish" && fishPositionX <= containerWidth - 70){
                setFishPositionX(fishPositionX + 10);
                setFishImage("heading right");
            }
            if(selectedAnimal=="frog" && frogPositionX <= containerWidth - 70){
                setFrogPositionX(frogPositionX + 10);
            }
            if(selectedAnimal=="duck" && duckPositionX <= containerWidth - 70){
                setDuckPositionX(duckPositionX + 10);
                setDuckImage("heading right");
            }
    }
    const moveLeft = () => {
        if(selectedAnimal=="fish" && fishPositionX >= 10){
            setFishPositionX(fishPositionX - 10);
            setFishImage("heading left");
        }
        if(selectedAnimal=="frog" && frogPositionX >= 10){
            setFrogPositionX(frogPositionX - 10);
        }
        if(selectedAnimal=="duck" && duckPositionX >= 10){
            setDuckPositionX(duckPositionX - 10);
            setDuckImage("heading left");
        }
    }
    const moveDown = () => {
        if(selectedAnimal=="fish" && fishPositionY <= containerWidth - 70){
            setFishPositionY(fishPositionY + 10);
        }
        if(selectedAnimal=="frog" && frogPositionY <= containerWidth - 70){
            setFrogPositionY(frogPositionY + 10);
        }
        if(selectedAnimal=="duck" && duckPositionY <= containerWidth - 70){
            setDuckPositionY(duckPositionY + 10);
        }
    }
    const moveUp = () => {
        if(selectedAnimal=="fish" && fishPositionY >= 10){
            setFishPositionY(fishPositionY - 10);
        }
        if(selectedAnimal=="frog" && frogPositionY >= 10){
            setFrogPositionY(frogPositionY - 10);
        }
        if(selectedAnimal=="duck" && duckPositionY >= 10){
            setDuckPositionY(duckPositionY - 10);
        }
    }

    window.onkeydown = function(e){
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
        window.addEventListener('keydown', handleSpaceBarToggle);
        // this is a 'cleanup' function - it removes the event listener
        return () => {
            window.removeEventListener('keydown', handleSpaceBarToggle);
        }
    }, [selectedAnimal]);

    return ( 
        <div className="game-container" style={{height: `${containerHeight}px`, width: `${containerWidth}px`}}>
            {/* <SelectedSprite containerHeight={containerHeight} containerWidth={containerWidth} selectedAnimal={selectedAnimal} positionX={positionX} positionY={positionY}/> */}
            {/* {selectedAnimal == "fish" ? <FishSprite containerHeight={containerHeight} containerWidth={containerWidth} positionX={positionX} positionY={positionY}/> : selectedAnimal == "frog" ? <FrogSprite containerHeight={containerHeight} containerWidth={containerWidth} positionX={positionX} positionY={positionY}/> : <DuckSprite containerHeight={containerHeight} containerWidth={containerWidth} positionX={positionX} positionY={positionY}/>} */}
            <FishSprite containerHeight={containerHeight} containerWidth={containerWidth} positionX={fishPositionX} positionY={fishPositionY} fishImage={fishImage}/>
            <FrogSprite containerHeight={containerHeight} containerWidth={containerWidth} positionX={frogPositionX} positionY={frogPositionY}/>
            <DuckSprite containerHeight={containerHeight} containerWidth={containerWidth} positionX={duckPositionX} positionY={duckPositionY} duckImage={duckImage}/>
        </div>
     );
}
 
export default GameContainer;

