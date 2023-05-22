const DuckSprite = ({containerHeight, containerWidth, positionX, positionY, duckImage}) => {

    const orange = <div className="pixel duck-orange-pixel"></div>
    const yellow = <div className="pixel duck-yellow-pixel"></div>
    const black = <div className="pixel black-pixel"></div>
    const transparent = <div className="pixel"></div>

    const verticalLine1 = <div>{transparent}{transparent}{transparent}{transparent}{yellow}{yellow}{yellow}{transparent}{transparent}{transparent}{transparent}{transparent}</div> 
    const verticalLine2 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{yellow}{yellow}{yellow}{yellow}{transparent}{transparent}{transparent}</div> 
    const verticalLine3 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{yellow}{yellow}{yellow}{yellow}{transparent}{transparent}</div> 
    const verticalLine4 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{yellow}{yellow}{black}{yellow}{yellow}{yellow}{transparent}</div> 
    const verticalLine5 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{yellow}{yellow}{yellow}{black}{yellow}{yellow}{yellow}</div> 
    const verticalLine6 = <div>{transparent}{yellow}{yellow}{yellow}{transparent}{yellow}{yellow}{yellow}{yellow}{black}{yellow}{yellow}</div>  
    const verticalLine7 = <div>{yellow}{yellow}{yellow}{yellow}{yellow}{yellow}{yellow}{yellow}{yellow}{black}{yellow}{yellow}</div> 
    const verticalLine8 = <div>{yellow}{yellow}{black}{yellow}{yellow}{yellow}{yellow}{yellow}{black}{yellow}{yellow}{yellow}</div> 
    const verticalLine9 = <div>{yellow}{yellow}{yellow}{yellow}{orange}{yellow}{yellow}{yellow}{yellow}{yellow}{yellow}{transparent}</div> 
    const verticalLine10 = <div>{transparent}{yellow}{orange}{orange}{orange}{transparent}{yellow}{yellow}{yellow}{yellow}{transparent}{transparent}</div> 
    const verticalLine11 = <div>{transparent}{transparent}{transparent}{orange}{orange}{transparent}{transparent}{yellow}{yellow}{transparent}{transparent}{transparent}</div> 
    const verticalLine12 = <div>{transparent}{transparent}{transparent}{orange}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}</div> 

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
        }}>
        {duckImage == "heading right" ? <>{verticalLine1}{verticalLine2}{verticalLine3}{verticalLine4}{verticalLine5}{verticalLine6}{verticalLine7}{verticalLine8}{verticalLine9}{verticalLine10}{verticalLine11}{verticalLine12}</> : <>{verticalLine12}{verticalLine11}{verticalLine10}{verticalLine9}{verticalLine8}{verticalLine7}{verticalLine6}{verticalLine5}{verticalLine4}{verticalLine3}{verticalLine2}{verticalLine1}</>}
    </div>
  );
};

export default DuckSprite;