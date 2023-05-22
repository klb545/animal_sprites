const FishSprite = ({containerHeight, containerWidth, positionX, positionY, fishImage}) => {
    
    const orange = <div className="pixel duck-orange-pixel"></div>
    const black = <div className="pixel black-pixel"></div>
    const white = <div className="pixel white-pixel"></div>
    const transparent = <div className="pixel"></div>

    const verticalLine1 = <div>{transparent}{transparent}{transparent}{transparent}{black}{black}{black}{transparent}{transparent}{transparent}{transparent}</div>
    const verticalLine2 = <div>{transparent}{transparent}{transparent}{black}{orange}{orange}{orange}{black}{transparent}{transparent}{transparent}</div>
    const verticalLine3 = <div>{transparent}{transparent}{black}{orange}{orange}{black}{orange}{orange}{black}{transparent}{transparent}</div>
    const verticalLine4 = <div>{transparent}{transparent}{black}{orange}{orange}{orange}{orange}{orange}{black}{transparent}{transparent}</div>
    const verticalLine5and7 = <div>{transparent}{black}{white}{white}{white}{white}{white}{white}{white}{black}{transparent}</div>
    const verticalLine6 = <div>{transparent}{black}{orange}{orange}{orange}{orange}{orange}{orange}{orange}{black}{transparent}</div>
    // const verticalLine7 = <div>{transparent}{black}{white}{white}{white}{white}{white}{white}{white}{black}{transparent}</div>
    const verticalLine8 = <div>{transparent}{transparent}{black}{orange}{orange}{orange}{orange}{orange}{black}{transparent}{transparent}</div>
    const verticalLine9 = <div>{transparent}{transparent}{transparent}{black}{white}{white}{white}{black}{transparent}{transparent}{transparent}</div>
    const verticalLine10 = <div>{transparent}{transparent}{transparent}{transparent}{black}{orange}{orange}{black}{transparent}{transparent}{transparent}</div>
    const verticalLine11 = <div>{transparent}{transparent}{transparent}{black}{orange}{orange}{orange}{orange}{black}{transparent}{transparent}</div>
    const verticalLine12 = <div>{transparent}{transparent}{transparent}{transparent}{black}{black}{black}{black}{transparent}{transparent}{transparent}{transparent}</div>

    return ( 
        <div 
        className='sprite' 
        style={{
            height: "55px", 
            width: "60px", 
            display: "flex", 
            position: "absolute",
            left: `${positionX}px`,
            top: `${positionY}px`,
        }}>
            {fishImage == "heading left" ? <>{verticalLine1}{verticalLine2}{verticalLine3}{verticalLine4}{verticalLine5and7}{verticalLine6}{verticalLine5and7}{verticalLine8}{verticalLine9}{verticalLine10}{verticalLine11}{verticalLine12}</> : <>{verticalLine12}{verticalLine11}{verticalLine10}{verticalLine9}{verticalLine8}{verticalLine5and7}{verticalLine6}{verticalLine5and7}{verticalLine4}{verticalLine3}{verticalLine2}{verticalLine1}</>}
        </div> 
    );
}
 
export default FishSprite;