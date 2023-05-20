import { useState } from "react";
import DuckSprite from "./DuckSprite";
import FrogSprite from "./FrogSprite";

const SelectedSprite = ({containerHeight, containerWidth, selectedAnimal, positionX, positionY}) => {

    // const [selectedAnimal, setSelectedAnimal] = useState("duck");

    const returnBody = () => {
        if(selectedAnimal==="duck"){
            return <DuckSprite containerHeight={containerHeight} containerWidth={containerWidth} positionX={positionX} positionY={positionY}/>
        }
        if(selectedAnimal==="frog"){
            return <FrogSprite containerHeight={containerHeight} containerWidth={containerWidth} selectedAnimal={selectedAnimal} positionX={positionX} positionY={positionY} />
        }
    }

    return ( 
        <>
        {/* {selectedAnimal==="duck" ? <DuckSprite containerHeight={containerHeight} containerWidth={containerWidth} positionX={positionX} positionY={positionY}/> : <FrogSprite containerHeight={containerHeight} containerWidth={containerWidth} selectedAnimal={selectedAnimal} positionX={positionX} positionY={positionY} />} */}
        {returnBody()}
        </>
     );
}
 
export default SelectedSprite;













































