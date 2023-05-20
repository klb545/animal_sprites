import { useState, useEffect } from "react";
import DuckSprite from "../components/DuckSprite";
import FrogSprite from "../components/FrogSprite";

const GameContainer = () => {
    const [containerWidth, setContainerWidth] = useState(500);
    const [containerHeight, setContainerHeight] = useState(500);
    const [duckSelected, setDuckSelected] = useState(true);
    const [frogSelected, setFrogSelected] = useState(false);

    document.body.onkeydown = function(e){
        if(e.code == "Space"){ 
            setDuckSelected(prevState => !prevState);
            setFrogSelected(prevState => !prevState);
        }
    }


    return ( 
        <div className="game-container" style={{height: `${containerHeight}px`, width: `${containerWidth}px`}}>
            <FrogSprite containerHeight={containerHeight} containerWidth={containerWidth} selected={frogSelected}/>
            <DuckSprite containerHeight={containerHeight} containerWidth={containerWidth} selected={duckSelected} />
        </div>
     );
}
 
export default GameContainer;















