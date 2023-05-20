import { useState } from "react";
import DuckSprite from "../components/DuckSprite";
import FrogSprite from "../components/FrogSprite";

const GameContainer = () => {
    const [containerWidth, setContainerWidth] = useState(500);
    const [containerHeight, setContainerHeight] = useState(500);
    return ( 
        <div className="game-container" style={{height: `${containerHeight}px`, width: `${containerWidth}px`}}>
            <FrogSprite containerHeight={containerHeight} containerWidth={containerWidth}/>
            <DuckSprite containerHeight={containerHeight} containerWidth={containerWidth}/>
        </div>
     );
}
 
export default GameContainer;















